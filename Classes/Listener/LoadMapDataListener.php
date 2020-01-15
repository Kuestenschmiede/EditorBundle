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

namespace con4gis\EditorBundle\Classes\Listener;

use con4gis\CoreBundle\Classes\C4GUtils;
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
        if (!C4GUtils::isFrontendUserLoggedIn()) {
            if ($data['editor']['type'] === 'backend') {
                $data['editor']['enable'] = true;
            } else {
                $data['editor']['enable'] = false;
            }
            // set profile in case its backend editor
            $data['beEditorProfile'] = $profile->beEditorProfile;
        } else {
            $data['feEditorProfile'] = $profile->feEditorProfile;
            $data['beEditorProfile'] = $profile->beEditorProfile;
        }
        $event->setMapData($data);
    }
}
