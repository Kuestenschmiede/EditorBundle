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

namespace con4gis\EditorBundle\Classes\Plugins;

use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\GroupsBundle\Resources\contao\models\MemberGroupModel;
use con4gis\GroupsBundle\Resources\contao\models\MemberModel;
use con4gis\EditorBundle\Classes\Events\SaveProjectEvent;
use con4gis\EditorBundle\Classes\Plugins\AbstractProjectPlugin;
use con4gis\EditorBundle\Entity\EditorMapProject;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GHeadlineField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GNumberField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GTextareaField;
use con4gis\ProjectsBundle\Classes\Fieldtypes\C4GTextField;
use Contao\Database;
use Contao\System;

/**
 * Class DefaultProjectPlugin
 * Plugin class for the default fields in the project entity. This class handles the persisting of the entity via
 * implementation of the interface methods, which are called in the plugin-event process.
 * @package con4gis\EditorBundle\Classes\Plugins
 */
class DefaultProjectPlugin extends AbstractProjectPlugin
{
    /**
     * Returns the project field list.
     * @return array|\con4gis\ProjectsBundle\Classes\Fieldlist\C4GBrickField[]
     */
    public function getFields()
    {
        $fieldList = [];

        $strName = "tl_c4g_editor_map_project";

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
        return EditorMapProject::class;
    }

    /**
     * Fills the EditorMapProject entity with data.
     * @param SaveProjectEvent $event
     * @return SaveProjectEvent
     */
    public function beforeSaveAction(SaveProjectEvent $event) : SaveProjectEvent
    {
        $entities = $event->getEntities();
        $userId = \FrontendUser::getInstance()->id;
        $data = $event->getData();
        foreach ($entities as $entity) {
            if ($entity instanceof EditorMapProject) {
                $data['tstamp'] = time();
                // if no ID set, the entity is new and no group exists yet
                if ($data['createGroup']) {
                    $groupId = $this->createGroupForProject($event);
                    if (!$groupId) {
                        return false;
                    }
                    $data['groupid'] = $groupId;
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

    /**
     * Creates a membergroup with the same title as the project for the new project.
     * @param SaveProjectEvent $event
     * @param $userId
     * @return int
     */
    private function createGroupForProject(SaveProjectEvent $event)
    {
        $user = \FrontendUser::getInstance();
        $userId = $user->id;
        $applicationgroup = null;

        $modules = \ModuleModel::findBy('type', 'c4g_groups');
        if ($modules) {
            $module = $modules[0];
            if ($module) {
                $set['cg_member_rights'] = $module->c4g_groups_default_member_rights;
                $set['cg_owner_rights'] = $module->c4g_groups_default_owner_rights;
                $set['cg_member_displayname'] = $module->c4g_groups_default_displayname;
                $set['cg_max_member'] = $module->c4g_groups_default_maximum_size;
                $applicationgroup = $module->c4g_groups_permission_applicationgroup;
            }
        }

        $members = array();
        $members[] = $userId;
        $set['cg_member'] = serialize($members);

        $eventData = $event->getData();

        $set['name'] = $userId.'_'.C4GUtils::secure_ugc($eventData['caption']);

        $date = new \DateTime();
        $set['tstamp'] = $date->getTimestamp();
        $set['cg_owner_id'] = $userId;

        $result = Database::getInstance()->prepare("INSERT INTO tl_member_group %s")->set($set)->execute();

        if (!$result->affectedRows)
        {
            return false;
        }
        $groupId = $result->insertId;
        $owner = MemberModel::findByPk($userId);
        if ($owner && !empty($owner->groups)) {
            $ownerGroups = unserialize($owner->groups);
            $ownerGroups[] = $groupId;

            $found = false;
            if ($applicationgroup) {
                foreach ($ownerGroups as $ownerGroup) {
                    if ($ownerGroup == $applicationgroup) {
                        $found = true;
                    }
                }

                if (!$found) {
                    $ownerGroups[] = $applicationgroup;
                }
            }

            Database::getInstance()->prepare("UPDATE tl_member SET groups=? WHERE id=?")
                ->execute(serialize($ownerGroups), $userId);
        }

        return $groupId;
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
}