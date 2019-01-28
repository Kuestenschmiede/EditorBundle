<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 21.01.19
 * Time: 17:38
 */

namespace con4gis\EditorBundle\Classes\Listener;


use con4gis\MapsBundle\Classes\Events\LoadMapdataEvent;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadMapDataListener
{
    public function onLoadMapDataLoadEditorConfig(
        LoadMapdataEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $data = $event->getMapData();
        $profileId = $data['profile'];
        $profile = C4gMapProfilesModel::findByPk($profileId);
        $data['feEditorProfile'] = $profile->feEditorProfile;
        $data['beEditorProfile'] = $profile->beEditorProfile;
        $event->setMapData($data);
    }
}