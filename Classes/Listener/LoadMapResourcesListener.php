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

namespace con4gis\MapsProjectBundle\Classes\Listener;


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
//        ResourceLoader::loadJavaScriptDeferred('c4g-project-editor-featurehandler', "/bundles/con4gismapsproject/js/c4g-project-editor-featurehandler.js");

//        ResourceLoader::loadJavaScriptDeferred('c4g-project-editor-selectview', "/bundles/con4gismapsproject/js/c4g-project-editor-selectview.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-project-editor-selectinteraction', "/bundles/con4gismapsproject/js/c4g-project-editor-selectinteraction.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-project-editor-drawview', "/bundles/con4gismapsproject/js/c4g-project-editor-drawview.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-project-editor-drawstyle', "/bundles/con4gismapsproject/js/c4g-project-editor-drawstyle.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-project-editor-mapsinterface', "/bundles/con4gismapsproject/js/c4g-project-editor-mapsinterface.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-missing-layer-loader', "/bundles/con4gismapsproject/js/c4g-missing-layer-loader.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-project-cache-controller', "/bundles/con4gismapsproject/js/c4g-project-cache-controller.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-subdomain-cache-controller', "/bundles/con4gismapsproject/js/c4g-subdomain-cache-controller.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-project-ui-controller', "/bundles/con4gismapsproject/js/c4g-project-ui-controller.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-data-ui-controller', "/bundles/con4gismapsproject/js/c4g-data-ui-controller.js");
//        ResourceLoader::loadJavaScriptDeferred('c4g-project-editor-i18n', "/bundles/con4gismapsproject/js/c4g-project-editor-i18n-de.js");

        ResourceLoader::loadJavaScriptDeferred('c4g-project-editor', "/bundles/con4gismapsproject/build/c4g-project-editor.js");

        ResourceLoader::loadJavaScriptDeferred('c4g-dialog-js', "/bundles/con4gisprojects/js/C4GBrickDialog.js");
        ResourceLoader::loadJavaScriptDeferred('c4g-dialog-datepicker', "/bundles/con4giscore/vendor/jQuery/plugins/jquery-simple-datetimepicker/1.13.0/jquery.simple-dtpicker.js");

        ResourceLoader::loadCssRessource("c4g-project-editor", "bundles/con4gismapsproject/css/c4g-project-editor.css");
        ResourceLoader::loadCssRessource("c4g-brick", "bundles/con4gisprojects/css/c4g_brick.css");
        ResourceLoader::loadCssRessource("dialog-datepicker", "bundles/con4giscore/vendor/jQuery/plugins/jquery-simple-datetimepicker/1.13.0/jquery.simple-dtpicker.css");
    }
}