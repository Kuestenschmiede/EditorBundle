<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    7
  * @author  	con4gis contributors (see "authors.txt")
  * @license 	LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

namespace con4gis\EditorBundle\Classes\Helper;

use con4gis\EditorBundle\Entity\EditorElement;
use con4gis\EditorBundle\Entity\EditorElementType;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;

use Doctrine\ORM\EntityManager;

/**
 * Class EditorCommon
 * Provides utility functions that are used by several components.
 * @package con4gis\mapsproject\Classes\Helper
 */
class EditorCommon
{
    public static function getLocstyleForData(EditorElement $data, EntityManager $em)
    {
        $type = $data->getDrawtype();
        $element = $em->getRepository(EditorElementType::class)->findOneBy(['id' => $data->getTypeid()]);

        //todo fix workaround
        if ($type == 'linestring') {
            $type = 'line';
        }
        $getter = 'get' . ucfirst($type) . 'style';

        return $element->$getter();
    }

    public static function calcLayerId($id, $pid, $key, $additionalId)
    {
        $resId = C4GBrickCommon::calcLayerID($id, $pid, $key);
        $resId .= str_pad($additionalId, 4, '0', STR_PAD_LEFT);

        return $resId;
    }

    /**
     * Builds a settings array for the MapStructureElement of the data. Checks for a tracking plugin and if there is a
     * device connected.
     * TODO Sollte eigentlich eher irgendwie aus dem Plugin kommen
     * @param MapsProjectData $data
     * @param EntityManager $em
     */
    public static function getSettingsForData(EditorElement $data, EntityManager $em)
    {
        $settings = [];
        if (class_exists(PluginTrackingDeviceData::class)) {
            // tracking plugin is existent
            $trackingData = $em->getRepository(PluginTrackingDeviceData::class)
                ->findOneBy(['pid' => $data->getId()]);
            if ($trackingData) {
                $settings = [
                    'refresh' => true,
                    'interval' => 60000,
                    'crossOrigin' => false,
                    'boundingBox' => false,
                ];
                $objDevice = C4gTrackingDevicesModel::findByPk($trackingData->getTrackingdevice());
                if ($objDevice) {
                    $settings['settings'] = $settings;
                    $settings['url'] = 'con4gis/api/trackingService/getLive/?maps=' . $objDevice->mapStructureId . '&id=' . $objDevice->id;

                    return $settings;
                }

                return [];
            }
        }

        return [];
    }
}
