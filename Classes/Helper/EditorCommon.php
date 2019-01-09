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

namespace con4gis\EditorBundle\Classes\Helper;
use con4gis\EditorBundle\Entity\EditorMapData;
use con4gis\EditorBundle\Entity\EditorMapElement;
use con4gis\EditorBundle\Entity\PluginTrackingDeviceData;
use con4gis\ProjectsBundle\Classes\Common\C4GBrickCommon;
use con4gis\TrackingBundle\Resources\contao\models\C4gTrackingDevicesModel;
use Doctrine\ORM\EntityManager;

/**
 * TODO Find better name for the class
 * Class EditorCommon
 * Provides utility functions that are used by several components.
 * @package con4gis\mapsproject\Classes\Helper
 */
class EditorCommon
{
    public static function getLocstyleForData(EditorMapData $data, EntityManager $em)
    {
        $type = $data->getDrawtype();
        $element = $em->getRepository(EditorMapElement::class)->findOneBy(['id' => $data->getTypeid()]);

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
        $resId .= str_pad($additionalId, 4, "0", STR_PAD_LEFT);
        return $resId;
    }

    /**
     * Builds a settings array for the MapStructureElement of the data. Checks for a tracking plugin and if there is a
     * device connected.
     * TODO Sollte eigentlich eher irgendwie aus dem Plugin kommen
     * @param MapsProjectData $data
     * @param EntityManager $em
     */
    public static function getSettingsForData(EditorMapData $data, EntityManager $em)
    {
        $settings = [];
        if (class_exists(PluginTrackingDeviceData::class)) {
            // tracking plugin is existent
            $trackingData = $em->getRepository(PluginTrackingDeviceData::class)
                ->findOneBy(['pid' => $data->getId()]);
            if ($trackingData) {
                $settings = [
                    'refresh'      => true,
                    'interval'     => 60000,
                    'crossOrigin'  => false,
                    'boundingBox'  => false
                ];
                $objDevice = C4gTrackingDevicesModel::findByPk($trackingData->getTrackingdevice());
                if ($objDevice) {
                    $settings['settings'] = $settings;
                    $settings['url'] = "con4gis/api/trackingService/getLive/?maps=" . $objDevice->mapStructureId . "&id=" . $objDevice->id;
                    return $settings;
                } else {
                    return [];
                }

            }
        }
        return [];
    }
}