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

/**
 * Backend Modules
 */
$GLOBALS['BE_MOD']['con4gis'] = array_merge($GLOBALS['BE_MOD']['con4gis'], array
(
    'c4g_editor_element_category' => array
    (
        'tables'    => array('tl_c4g_editor_element_category')
    ),
    'c4g_editor_element_type' => array
    (
        'tables'    => array('tl_c4g_editor_element_type')
    ),
    'c4g_editor_configuration' => array
    (
        'tables'    => array('tl_c4g_editor_configuration')
    )
));

if(TL_MODE == "BE") {
    $GLOBALS['TL_CSS'][] = '/bundles/con4giseditor/css/con4gis.css';
}

// add js file to c4g_maps be module
$script = $GLOBALS['BE_MOD']['con4gis']['c4g_maps']['javascript'];
$GLOBALS['BE_MOD']['con4gis']['c4g_maps']['javascript'] = [$script, '/bundles/con4giseditor/js/c4g-backend-helper.js'];

$GLOBALS['c4g_locationtypes'][] = \con4gis\EditorBundle\Classes\EditorBrickTypes::BRICK_GENERIC_PROJECT;

$GLOBALS['con4gis']['api-caching'][] = "projectEditorService";
$GLOBALS['TL_PURGE']['folders']['con4gis_editor'] = array
(
    'callback' => array('\con4gis\EditorBundle\Classes\Cache\C4GEditorAutomator', 'purgeEditorConfigCache'),
    'affected' => array('var/cache/prod/con4gis_projectEditorService')
);