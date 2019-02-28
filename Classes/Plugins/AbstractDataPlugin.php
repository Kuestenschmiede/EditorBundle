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

use con4gis\EditorBundle\Classes\Events\SaveMetadataEvent;
use con4gis\EditorBundle\Entity\EditorMapElementPreset;
use con4gis\EditorBundle\Classes\Plugins\AbstractPlugin;
use con4gis\EditorBundle\Classes\Plugins\DataPluginInterface;

abstract class AbstractDataPlugin extends AbstractPlugin implements DataPluginInterface
{
    public function getData($dataId, $fieldList, $entityManager)
    {
        $entity = $entityManager->getRepository($this->getEntityClass())->findOneBy([
            'pid' => $dataId
        ]);
        $data = [];
        foreach ($fieldList as $field) {
            $getter = 'get' . ucfirst(str_replace("_", "", $field->getFieldName()));
            if (method_exists($entity, $getter)) {
                $data[$field->getFieldName()] = $entity->$getter();
            }
        }
        return $data;
    }

    public function getDefaultValue($pluginId, $elementId, $pluginField, $entityManager) {
        if ($pluginId && $elementId && $pluginField && $entityManager) {
            $entity = $entityManager->getRepository(EditorMapElementPreset::class)->findOneBy([
                'pluginId'  => $pluginId,
                'pid' => $elementId,
                'pluginField' => $pluginField
            ]);
            if ($entity) {
                return $entity->getPluginValue();
            }
        }
        return false;
    }

    public function beforeSaveAction(SaveMetadataEvent $event): SaveMetadataEvent
    {
        return $event;
    }
}