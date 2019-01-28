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
            ResourceLoader::loadCssResource("bundles/con4giseditor/css/c4g-project-editor.css", "c4g-project-editor");
            ResourceLoader::loadCssResource("bundles/con4gisprojects/css/c4g_brick.css","c4g-brick");
            ResourceLoader::loadCssResource("bundles/con4giscore/vendor/jQuery/plugins/jquery-simple-datetimepicker/1.13.0/jquery.simple-dtpicker.css", "dialog-datepicker");
        } else {
            ResourceLoader::loadJavaScriptResource('/bundles/con4giseditor/build/c4g-backend-editor.js', ResourceLoader::BODY, 'c4g-editor');
        }
    }
}