<?php
/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018.
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\EditorBundle\Classes\Listener;


use con4gis\EditorBundle\Classes\Events\DeleteDataEvent;
use con4gis\MapsProjectBundle\Entity\MapsProjectData;
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
            if ($entityClass == MapsProjectData::class) {
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
            } catch(ORMException $exception) {
                $event->addError($exception->getMessage());
            }
        }
    }
}