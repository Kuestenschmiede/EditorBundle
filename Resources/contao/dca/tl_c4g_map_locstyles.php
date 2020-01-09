<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version    7
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

if (method_exists('\System', 'getContainer')) {
    $filteredSizes = [];
    $imageSizes = \System::getContainer()->get('contao.image.image_sizes')->getAllOptions();
    $just = 'proportional';
    foreach ($imageSizes as $group => $sizes) {
        foreach ($sizes as $key => $size) {
            if ($size == $just) {
                $filteredSizes[$group][$key] = $size;
            }
        }
    }
    $imageSizes = $filteredSizes;
}


$GLOBALS['TL_DCA']['tl_c4g_map_locstyles']['palettes']['default'] .= '{editor_legend:hide},editor_icon,editor_icon_size,editor_sort,editor_vars,editor_collect;';
$GLOBALS['TL_DCA']['tl_c4g_map_locstyles']['fields']['editor_icon'] =
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_icon'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png,svg', 'tl_class'=>'clr'],
            'sql'                     => "binary(16) NULL"
        ];

$GLOBALS['TL_DCA']['tl_c4g_map_locstyles']['fields']['editor_icon_size'] =
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_icon_size'],
            'exclude'                 => true,
            'default'                 => ['16','16'],
            'inputType'               => 'imageSize',
            'options'                  => $imageSizes,
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'long', 'mandatory'=>false],
            'sql'                     => "varchar(100) NOT NULL default ''"
        ];

$GLOBALS['TL_DCA']['tl_c4g_map_locstyles']['fields']['editor_sort'] =
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_sort'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ];
$GLOBALS['TL_DCA']['tl_c4g_map_locstyles']['fields']['editor_vars'] =
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_vars'],
            'inputType'               => 'keyValueWizard',
            'exclude'                 => true,
            'sql'                     => "text NULL"
        ];

$GLOBALS['TL_DCA']['tl_c4g_map_locstyles']['fields']['editor_collect'] =
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_collect'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
        ];