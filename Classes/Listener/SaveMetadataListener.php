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

use con4gis\EditorBundle\Classes\Events\SaveMetadataEvent;
use con4gis\EditorBundle\Classes\Plugins\AbstractDataPlugin;
use con4gis\EditorBundle\Classes\Plugins\DefaultDataPlugin;
use Contao\FrontendUser;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class SaveMetadataListener
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
     * SaveMetadataListener constructor.
     * @param EntityManager $entityManager
     * @param LoggerInterface $logger
     */
    public function __construct(EntityManager $entityManager, LoggerInterface $logger)
    {
        $this->entityManager = $entityManager;
        $this->logger = $logger;
    }

    /**
     * Reads the entity classes from the plugins and finds the entities from the database.
     * @param SaveMetadataEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveMetadataGetEntities(
        SaveMetadataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $instances = $event->getPluginClasses();
        $entities = [];
        foreach ($instances as $instance) {
            $entity = $instance->getEntityClass();
            if ($instance instanceof DefaultDataPlugin) {
                // default case
                $dataEntity = $this->entityManager->getRepository($entity)->findOneBy([
                    'id' => $event->getDataId(),
                    'projectid' => $event->getProjectId(),
                ]);
            } else {
                // plugin entity - there has to be a pid
                $dataEntity = $this->entityManager->getRepository($entity)->findOneBy([
                    'pid' => $event->getDataId(),
                ]);
                if (!$dataEntity) {
                    // no entity existent - create one
                    $dataEntity = new $entity();
                    $dataEntity->setPid($event->getDataId());
                }
            }

            if ($dataEntity) {
                $entities[] = $dataEntity;
            }
        }
        $event->setEntities($entities);
    }

    /**
     * Reads the data from the event and fills it in the entities where it fits.
     * @param SaveMetadataEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveMetadataFillEntities(
        SaveMetadataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $data = $event->getData();
        $entities = $event->getEntities();
        foreach ($data as $key => $datum) {
            // remove underscores so the setter can be built
            $setter = 'set' . ucfirst(str_replace('_', '', $key));
            foreach ($entities as $entity) {
                if (method_exists($entity, $setter)) {
                    try {
                        $entity->$setter($datum);
                    } catch (\Throwable $error) {
                        $this->logger->error('An error occured while setting ' . $key . ' with value ' . $datum);

                        continue;
                    }
                }
            }
        }

        // loop and set general values, like timestamp
        foreach ($entities as $entity) {
            if (method_exists($entity, 'setTstamp')) {
                $entity->setTstamp(time());
            }
            if (method_exists($entity, 'setLastmemberid')) {
                $entity->setLastmemberid(FrontendUser::getInstance()->id);
            }
        }
        $event->setEntities($entities);
    }

    /**
     * Calls the beforeSaveAction method of the plugin classes.
     * @param SaveMetadataEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveMetadataExecBeforeSave(
        SaveMetadataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $instances = $event->getPluginClasses();
        foreach ($instances as $instance) {
            $event = $instance->beforeSaveAction($event);
        }
    }

    /**
     * Iterates the fieldList and calls the validateFieldValue method.
     * @param SaveMetadataEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveMetadataValidateFieldValues(
        SaveMetadataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        // TODO fieldLIst ins event bringen
        $plugins = $event->getPluginClasses();
        $data = $event->getData();
        $fieldList = [];
        /** @var AbstractDataPlugin $plugin */
        foreach ($plugins as $plugin) {
            $fieldList = array_merge($fieldList, $plugin->getFields($event->getDataId()));
        }
        foreach ($fieldList as $field) {
            $data[$field->getFieldName()] = $field->validateFieldValue($data[$field->getFieldName()]);
        }
        $event->setData($data);
    }

    /**
     * @param SaveMetadataEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveMetadataCheckMandatory(
        SaveMetadataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $plugins = $event->getPluginClasses();
        $fieldList = [];
        /** @var AbstractDataPlugin $plugin */
        foreach ($plugins as $plugin) {
            $fieldList = array_merge($fieldList, $plugin->getFields($event->getDataId()));
        }
        $data = $event->getData();
        foreach ($fieldList as $field) {
            if ($field->checkMandatory($data)) {
                // if there is a return value != false, the check failed
                $event->stopPropagation();
                $returnData = $event->getData();
                $returnData['errorString'] = 'There went something wrong in the mandatory check of field with fieldname ' . $field->getFieldName();
                $event->setData($returnData);
                // exit loop
                break;
            }
            // check passes...nothing to do
        }
    }

    /**
     * Persists the entities.
     * @param SaveMetadataEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveMetadataPersistEntities(
        SaveMetadataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $entities = $event->getEntities();
        $returnData = $event->getReturnData();
        $event->setReturnData(array_merge([
            'entities' => $entities,
            'finalId' => $event->getDataId(),
            'projectId' => $event->getProjectId(),
        ], $returnData));
        foreach ($entities as $entity) {
            try {
                $this->entityManager->persist($entity);
                $this->entityManager->flush();
            } catch (ORMException $e) {
            }
        }
    }
}
