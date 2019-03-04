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

namespace con4gis\EditorBundle\Classes\Listener;

use con4gis\MapsBundle\Classes\Events\LoadMapResourcesEvent;
use con4gis\MapsBundle\Resources\contao\classes\ResourceLoader;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadMapResourcesListener
{
    public function onLoadMapResourcesLoadEditorFiles(
        LoadMapResourcesEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $mapData = $event->getMapData();
        if ($mapData['editor']['type'] !== 'backend') {
            ResourceLoader::loadJavaScriptResource("/bundles/con4giseditor/build/c4g-editor.js", ResourceLoader::BODY, 'c4g-editor');
            ResourceLoader::loadJavaScriptResource("/bundles/con4gisprojects/js/C4GBrickDialog.js", ResourceLoader::BODY, 'c4g-dialog-js');
            ResourceLoader::loadJavaScriptResource("/bundles/con4giscore/vendor/jQuery/plugins/jquery-simple-datetimepicker/1.13.0/jquery.simple-dtpicker.js", ResourceLoader::BODY, 'c4g-dialog-datepicker');
            ResourceLoader::loadCssResource("bundles/con4giseditor/css/c4g-project-editor.css");
            ResourceLoader::loadCssResourceDeferred("bundles/con4gisprojects/css/c4g_brick.css");
            ResourceLoader::loadCssResourceDeferred("bundles/con4giscore/vendor/jQuery/plugins/jquery-simple-datetimepicker/1.13.0/jquery.simple-dtpicker.css");
        } else {
            ResourceLoader::loadJavaScriptResource('/bundles/con4giseditor/build/c4g-backend-editor.js', ResourceLoader::BODY, 'c4g-editor');
        }
    }
}