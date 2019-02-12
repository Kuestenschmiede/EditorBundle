<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 14.05.18
 * Time: 14:16
 */

/**
 * Backend Modules
 */
array_insert($GLOBALS['BE_MOD'], array_search('content', array_keys($GLOBALS['BE_MOD'])) + 1, array
(
    'Editor' => array
    (
        'EditorMapCategories' => array
        (
            'tables'    => array('tl_c4g_editor_element_category')
        ),
        'EditorMapElements' => array
        (
            'tables'    => array('tl_c4g_editor_element_type')
        ),
        'EditorConfiguration' => array
        (
            'tables'    => array('tl_c4g_editor_configuration')
        ),
        'plugins' => array
        (
            'callback' => '\con4gis\EditorBundle\Classes\Contao\Callbacks\PluginList'
        )
    )
));
// add js file to c4g_maps be module
$script = $GLOBALS['BE_MOD']['con4gis']['c4g_maps']['javascript'];
$GLOBALS['BE_MOD']['con4gis']['c4g_maps']['javascript'] = [$script, '/bundles/con4giseditor/js/c4g-backend-helper.js'];

$GLOBALS['c4g_locationtypes'][] = \con4gis\EditorBundle\Classes\EditorBrickTypes::BRICK_GENERIC_PROJECT;

$GLOBALS['con4gis']['api-caching'][] = "projectEditorService";
$GLOBALS['TL_PURGE']['folders']['con4gis_editor'] = array
(
    'callback' => array('\con4gis\EditorBundle\Classes\Caches\C4GEditorAutomator', 'purgeEditorConfigCache'),
    'affected' => array('var/cache/prod/con4gis_projectEditorService')
);