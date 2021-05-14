<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\EditorBundle\Classes\Services;

use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\EditorBundle\Entity\EditorElementHistory;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Psr\Log\LoggerInterface;

class EditorHistoryService
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * @var LoggerInterface
     */
    private $logger = null;

    /**
     * EditorHistoryService constructor.
     * @param EntityManager $entityManager
     * @param LoggerInterface $logger
     */
    public function __construct(EntityManager $entityManager, LoggerInterface $logger)
    {
        $this->entityManager = $entityManager;
        $this->logger = $logger;
    }

    public function revertElement($elementId)
    {
        $historyEntry = $this->getLastHistoryEntry($elementId);
        $element = $this->entityManager->getRepository(EditorElement::class)
            ->findOneBy(['id' => $elementId]);
        if ($historyEntry) {
            $element = $this->updateElementWithHistory($element, $historyEntry);
        }

        try {
            $this->entityManager->persist($element);
            if ($historyEntry) {
                $this->entityManager->remove($historyEntry);
            }
            $this->entityManager->flush();
        } catch (ORMException $exception) {
            $this->logger->error($exception->getMessage());
        }

        return $element;
    }

    public function createHistoryEntry(EditorElement $element)
    {
        $historyEntry = $this->convertToHistory($element);

        try {
            $this->entityManager->persist($historyEntry);
            $this->entityManager->flush();
        } catch (ORMException $exception) {
            $this->logger->error($exception->getMessage());
        }
    }

    private function getLastHistoryEntry($elementId)
    {
        $historyRepo = $this->entityManager
            ->getRepository(EditorElementHistory::class);
        $entry = $historyRepo->findLatestByElementId($elementId);

        return $entry;
    }

    private function convertToHistory(EditorElement $element)
    {
        $historyEntry = new EditorElementHistory();
        $historyEntry->setTstamp($element->getTstamp());
        $historyEntry->setUuid($element->getUuid());
        $historyEntry->setName($element->getName());
        $historyEntry->setProjectid($element->getProjectid());
        $historyEntry->setGroupid($element->getGroupid());
        $historyEntry->setCategoryid($element->getCategoryid());
        $historyEntry->setTypeid($element->getTypeid());
        $historyEntry->setLocgeox($element->getLocgeox());
        $historyEntry->setLocgeoy($element->getLocgeoy());
        $historyEntry->setLoclabel($element->getLoclabel());
        $historyEntry->setDescription($element->getDescription());
        $historyEntry->setContactname($element->getContactname());
        $historyEntry->setContactphone($element->getContactphone());
        $historyEntry->setLastmemberid($element->getLastmemberid());
        $historyEntry->setPublished($element->getPublished());
        $historyEntry->setGeojson($element->getGeojson());
        $historyEntry->setRadius($element->getRadius());
        $historyEntry->setDrawtype($element->getDrawtype());
        $historyEntry->setElementid($element->getId());
        $historyEntry->setVersiontstamp(time());

        return $historyEntry;
    }

    private function updateElementWithHistory(EditorElement $element, EditorElementHistory $history)
    {
        $element->setTstamp($history->getTstamp());
        $element->setUuid($history->getUuid());
        $element->setName($history->getName());
        $element->setProjectid($history->getProjectid());
        $element->setGroupid($history->getGroupid());
        $element->setCategoryid($history->getCategoryid());
        $element->setTypeid($history->getTypeid());
        $element->setLocgeox($history->getLocgeox());
        $element->setLocgeoy($history->getLocgeoy());
        $element->setLoclabel($history->getLoclabel());
        $element->setDescription($history->getDescription());
        $element->setContactname($history->getContactname());
        $element->setContactphone($history->getContactphone());
        $element->setLastmemberid($history->getLastmemberid());
        $element->setPublished($history->getPublished());
        $element->setGeojson($history->getGeojson());
        $element->setRadius($history->getRadius());
        $element->setDrawtype($history->getDrawtype());

        return $element;
    }
}
