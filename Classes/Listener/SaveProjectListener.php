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


use con4gis\EditorBundle\Classes\Events\SaveProjectEvent;
use con4gis\EditorBundle\Classes\EditorBrickTypes;
use con4gis\EditorBundle\Classes\EditorMapFrontend;
use con4gis\EditorBundle\Classes\Plugins\ProjectPluginInterface;
use con4gis\EditorBundle\Entity\EditorMapProject;
use con4gis\ProjectsBundle\Classes\Fieldlist\C4GBrickField;
use Contao\Database;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\ORMException;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class SaveProjectListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * CreateElementListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function onSaveProjectGetFieldlist(
        SaveProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $plugins = $event->getPluginInstances();
        $fields = [];
        foreach ($plugins as $plugin) {
            if ($plugin instanceof ProjectPluginInterface) {
                $fieldList = $plugin->getFields();
                foreach ($fieldList as $field) {
                    $fields[$field->getFieldName()] = $field;
                }
            }
        }
        $event->setFieldList($fields);
    }

    /**
     * Calls each plugin class for their custom logic before saving the entities into the database.
     * @param SaveProjectEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveProjectExecBeforeSave(
        SaveProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $instances = $event->getPluginInstances();
        foreach ($instances as $instance) {
            if ($instance instanceof ProjectPluginInterface) {
                $event = $instance->beforeSaveAction($event);
            }
        }
    }

    public function onSaveProjectValidateFieldValues(
        SaveProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $data = $event->getData();
        $fieldList = $event->getFieldList();
        foreach ($fieldList as $field) {
            $data[$field->getFieldName()] = $field->validateFieldValue($data[$field->getFieldName()]);
        }
        $event->setData($data);
    }

    /**
     * Iterates the fieldlist and executes a mandatory check for each field.
     * @param SaveProjectEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveProjectCheckMandatory(
        SaveProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $fieldList = $event->getFieldList();
        $data = $event->getData();
        foreach ($fieldList as $field) {
            if ($field->checkMandatory($data)) {
                // if there is a return value != false, the check failed
                $event->stopPropagation();
                $data['errorString'] = "There went something wrong in the mandatoy check of field with fieldname " . $field->getFieldName();
                $event->setData($data);
                // exit loop
                break;
            } else {
                // check passes...nothing to do
            }
        }
    }

    /**
     * Iterates the entities and fills the given data.
     * @param SaveProjectEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveProjectFillData(
        SaveProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $entities = $event->getEntities();
        $data = $event->getData();
        $fields = $event->getFieldList();
        // iterate each entity
        foreach ($entities as $entity) {
            $currentData = $data;
            foreach ($currentData as $key => $datum) {
                $setter = 'set' . ucfirst(str_replace("_", "", $key));
                // set the value if it belongs in this entity
                if (method_exists($entity, $setter)) {
                    $currentField = $fields[$key];
                    if ($currentField instanceof C4GBrickField) {
                        $value = $currentField->createFieldData($currentData);
                        $entity->$setter($value);
                    }
                }
            }
        }
        $event->setEntities($entities);
    }

    /**
     * Persists the entities into the database.
     * @param SaveProjectEvent $event
     * @param $eventName
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function onSaveProjectSaveEntities(
        SaveProjectEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $entities = $event->getEntities();
        $pid = 0;
        foreach ($entities as $entity) {
            try {
                if ($pid && !($entity instanceof EditorMapProject)) {
                    $entity->setPid($pid);
                }
                $this->entityManager->persist($entity);
                $this->entityManager->flush();
                // we need to return project data
                if ($entity instanceof EditorMapProject) {
                    $pid = $entity->getId();
                    $event->setReturnData([
                        'id' => $entity->getId(),
                        'name' => $entity->getCaption()
                    ]);
                }
            } catch (ORMException $exception) {

            }
        }
    }
}