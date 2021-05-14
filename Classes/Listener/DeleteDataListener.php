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
namespace con4gis\EditorBundle\Classes\Listener;

use con4gis\EditorBundle\Classes\Events\DeleteDataEvent;
use con4gis\EditorBundle\Entity\EditorElement;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class DeleteDataListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * DeleteDataListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function onDataDeleteGetEntities(
        DeleteDataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $plugins = $event->getPlugins();
        $entities = [];
        foreach ($plugins as $plugin) {
            $entityClass = $plugin->getEntityClass();
            if ($entityClass == EditorElement::class) {
                $entity = $this->entityManager->getRepository($entityClass)->findOneBy(['id' => $event->getDataId()]);
            } else {
                $entity = $this->entityManager->getRepository($entityClass)->findOneBy(['pid' => $event->getDataId()]);
            }
            if ($entity) {
                $entities[] = $entity;
            }
        }
        $event->setEntities($entities);
    }

    public function onDataDeleteDeleteEntities(
        DeleteDataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $entities = $event->getEntities();
        foreach ($entities as $entity) {
            try {
                $this->entityManager->remove($entity);
                $this->entityManager->flush();
            } catch (ORMException $exception) {
                $event->addError($exception->getMessage());
            }
        }
    }
}
