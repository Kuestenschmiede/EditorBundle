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

namespace con4gis\EditorBundle\Classes\Plugins;

use con4gis\EditorBundle\Classes\Events\SaveProjectEvent;
use Contao\System;

abstract class AbstractProjectPlugin extends AbstractPlugin implements ProjectPluginInterface
{
    public function beforeSaveAction(SaveProjectEvent $event): SaveProjectEvent
    {
        return $event;
    }

    public function getProjectData($projectId, $fieldList): array
    {
        $data = [];
        $project = System::getContainer()->get('doctrine.orm.entity_manager')
            ->getRepository($this->getEntityClass())
            ->findOneBy(['pid' => $projectId]);
        if ($project) {
            foreach ($fieldList as $field) {
                $getter = 'get' . ucfirst($field->getFieldName());
                if (method_exists($project, $getter)) {
                    $data[$field->getFieldName()] = $project->$getter();
                }
            }

            return $data;
        }

        return [];
    }

    public function getProjectTypes(): array
    {
        return [];
    }
}
