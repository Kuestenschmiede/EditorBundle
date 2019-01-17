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
        'plugins' => array
        (
            'callback' => '\con4gis\EditorBundle\Classes\Contao\Callbacks\PluginList'
        )
    )
));

$GLOBALS['c4g_locationtypes'][] = \con4gis\EditorBundle\Classes\EditorBrickTypes::BRICK_GENERIC_PROJECT;

$GLOBALS['con4gis']['api-caching'][] = "projectEditorService";

//$GLOBALS['TL_HOOKS']['replaceInsertTags'][] = array(\con4gis\EditorBundle\Classes\ReplaceInsertTags::class, 'replaceTag');