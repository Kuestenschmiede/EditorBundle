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

namespace con4gis\EditorBundle\Classes\Plugins;


use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\EditorBundle\Classes\Events\SaveProjectEvent;
use con4gis\EditorBundle\Entity\EditorConfiguration;
use con4gis\EditorBundle\Entity\EditorProject;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GHeadlineField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GNumberField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GTextareaField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GTextField;
use Contao\System;

class EditorProjectPlugin extends AbstractProjectPlugin
{
    /**
     * Returns the project field list.
     * @return array|\con4gis\ProjectsBundle\Classes\Fieldlist\C4GBrickField[]
     */
    public function getFields()
    {
        $fieldList = [];
        
        $strName = "tl_c4g_editor_project";
        
        $headlineField = new C4GHeadlineField();
        $headlineField->setTitle($GLOBALS['TL_LANG'][$strName]['headline']);
        $fieldList[] = $headlineField;
        
        $nameField = new C4GTextField();
        $nameField->setFieldName("caption")->setFormField()->setTitle($GLOBALS['TL_LANG'][$strName]['caption']);
        $nameField->setMandatory(true);
        $fieldList[] = $nameField;
        
        $descriptionField = new C4GTextareaField();
        $descriptionField->setFieldName("description")->setFormField()->setTitle($GLOBALS['TL_LANG'][$strName]['description']);
        $fieldList[] = $descriptionField;
        
        $groupidField = new C4GNumberField();
        $groupidField->setFieldName('groupid')->setHidden();
        $fieldList[] = $groupidField;
        
        $lastmemberField = new C4GNumberField();
        $lastmemberField->setFieldName('lastmemberid')->setHidden();
        $fieldList[] = $lastmemberField;
        
        $tstampField = new C4GNumberField();
        $tstampField->setFieldName('tstamp')->setHidden();
        $fieldList[] = $tstampField;
        
        return $fieldList;
    }
    
    /**
     * Returns the projects entity.
     * @return mixed|string
     */
    public function getEntityClass()
    {
        return EditorProject::class;
    }
    
    /**
     * Fills the EditorProject entity with data.
     * @param SaveProjectEvent $event
     * @return SaveProjectEvent
     */
    public function beforeSaveAction(SaveProjectEvent $event) : SaveProjectEvent
    {
        $entities = $event->getEntities();
        $userId = \FrontendUser::getInstance()->id;
        $data = $event->getData();
        foreach ($entities as $entity) {
            if ($entity instanceof EditorProject) {
                $data['tstamp'] = time();
                // if no ID set, the entity is new and no group exists yet
                if ($data['createGroup']) {
                    $groupId = $this->getGroupIdFromConfig($event->getConfigId());
                    if ($groupId) {
                        $data['groupid'] = $groupId;
                    } else {
                        // TODO Fehler
                    }
                }
                $data['lastmemberid'] = $userId;
                if ($data['name']) {
                    $data['caption'] = $data['name'];
                }
            }
        }
        $event->setData($data);
        $event->setEntities($entities);
        return $event;
    }
    
    public function getProjectData($projectId, $fieldList): array
    {
        $data = [];
        $project = System::getContainer()->get('doctrine.orm.entity_manager')
            ->getRepository($this->getEntityClass())
            ->findOneBy(['id' => $projectId]);
        if ($project) {
            foreach ($fieldList as $field) {
                $getter = "get" . ucfirst($field->getFieldName());
                if (method_exists($project, $getter)) {
                    $data[$field->getFieldName()] = $project->$getter();
                }
            }
            return $data;
        } else {
            return [];
        }
    }
    
    private function getGroupIdFromConfig($configId)
    {
        $config = System::getContainer()->get('doctrine.orm.entity_manager')
            ->getRepository(EditorConfiguration::class)->findOneBy(['id' => $configId]);
        if ($config) {
            return $config->getEditorProjectGroup();
        } else {
            // no config found
            return 0;
        }
    }
}