<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\EditorBundle\Classes\Listener;

use con4gis\EditorBundle\Classes\Events\DuplicateDataEvent;
use con4gis\EditorBundle\Classes\EditorMapFrontend;
use con4gis\EditorBundle\Classes\Plugins\DataPluginInterface;
use con4gis\EditorBundle\Classes\Plugins\DefaultDataPlugin;
use con4gis\EditorBundle\Entity\EditorElementCategory;
use con4gis\EditorBundle\Entity\EditorElementType;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class DuplicateDataListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * @var EditorMapFrontend
     */
    private $frontend = null;

    /**
     * DuplicateDataListener constructor.
     * @param EntityManager $entityManager
     * @param EditorMapFrontend $frontend
     */
    public function __construct(EntityManager $entityManager, EditorMapFrontend $frontend)
    {
        $this->entityManager = $entityManager;
        $this->frontend = $frontend;
    }

    /**
     * Gets the entities from the database that belong to the dataset that should be duplicated.
     * @param DuplicateDataEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onDuplicateDataGetEntities(
        DuplicateDataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $dataId = $event->getDataId();
        $instances = $event->getPlugins();
        $entities = [];
        $entities['plugin'] = [];
        foreach ($instances as $instance) {
            if ($instance instanceof DefaultDataPlugin) {
                $entity = $this->entityManager
                    ->getRepository($instance->getEntityClass())
                    ->findOneBy(['id' => $dataId]);
                if ($entity) {
                    $entities['main'] = $entity;
                }
            } elseif ($instance instanceof DataPluginInterface) {
                $entity = $this->entityManager
                    ->getRepository($instance->getEntityClass())
                    ->findOneBy(['pid' => $dataId]);
                if ($entity) {
                    $entities['plugin'][] = $entity;
                }
            }

        }
        $event->setEntities($entities);
    }

    /**
     * Creates the new entities and copies the values from the old into the new ones.
     * @param DuplicateDataEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onDuplicateDataCreateNewEntities(
        DuplicateDataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $entities = $event->getEntities();
        $newEntities = [];
        $newEntities['plugin'] = [];
        $mainEntity = $entities['main'];
        $newMainEntity = clone $mainEntity;
        // update tstamp
        $newMainEntity->setTstamp(time());
        $newMainEntity->setName($mainEntity->getName() . " (Kopie)");
        try {
            $this->entityManager->persist($newMainEntity);
            $this->entityManager->flush();
        } catch(ORMException $e) {

        }
        $newEntities['main'] = $newMainEntity;
        $newId = $newMainEntity->getId();
        $pluginEntities = $entities['plugin'];
        foreach ($pluginEntities as $pluginEntity) {
            $newPluginEntity = clone $pluginEntity;
            // setPid has to exist in the entity
            $newPluginEntity->setPid($newId);
            if ((method_exists($newPluginEntity, 'setTstamp'))) {
                $newPluginEntity->setTstamp(time());
            }
            try {
                $this->entityManager->persist($newPluginEntity);
                $this->entityManager->flush();
                $newEntities['plugin'][] = $newPluginEntity;
            } catch(ORMException $e) {

            }
        }
        $event->setNewEntities($newEntities);
    }

    /**
     * Persists the newly created entities.
     * @param DuplicateDataEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onDuplicateDataCreateFrontendLayer(
        DuplicateDataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $entities = $event->getNewEntities();
        $dataEntity = $entities['main'];
        $arrLayer = $this->frontend->getSingleDataArray(
            $dataEntity,
            ['hide' => ""]
        );
        $arrLayer['projectId'] = $dataEntity->getProjectid();
        $event->setReturnData(['layer' => $arrLayer]);
    }
}