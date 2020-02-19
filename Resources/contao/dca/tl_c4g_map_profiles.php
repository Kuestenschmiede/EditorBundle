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

$strName = 'tl_c4g_map_profiles';

$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['mapFunctions']['options'][] = 'editor';
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] = str_replace('initial_open_comp;','initial_open_comp,feEditorProfile,beEditorProfile;', $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);

$GLOBALS['TL_DCA'][$strName]['fields']['feEditorProfile'] = array
(
    'label'                   => &$GLOBALS['TL_LANG'][$strName]['feEditorProfile'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options_callback'        => array('\con4gis\EditorBundle\Classes\Contao\Callbacks\TlEditorConfiguration', 'getFrontendEditorProfiles'),
    'eval'                    => array('tl_class'=>'clr', 'includeBlankOption' => true),
    'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references'],
    'sql'                     => "char(10) NOT NULL default ''"
);

$GLOBALS['TL_DCA'][$strName]['fields']['beEditorProfile'] = array
(
    'label'                   => &$GLOBALS['TL_LANG'][$strName]['beEditorProfile'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options_callback'        => array('\con4gis\EditorBundle\Classes\Contao\Callbacks\TlEditorConfiguration', 'getBackendEditorProfiles'),
    'eval'                    => array('tl_class'=>'clr', 'includeBlankOption' => true),
    'sql'                     => "char(10) NOT NULL default ''"
);

$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields'] = array_merge([
    
    'feEditorProfile' => [
        'label'                   => &$GLOBALS['TL_LANG'][$strName]['feEditorProfile'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => array('\con4gis\EditorBundle\Classes\Contao\Callbacks\TlEditorConfiguration', 'getFrontendEditorProfiles'),
        'eval'                    => array('tl_class'=>'clr', 'includeBlankOption' => true),
        'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references'],
        'sql'                     => "char(10) NOT NULL default ''"
    ],
    'beEditorProfile' => [
        'label'                   => &$GLOBALS['TL_LANG'][$strName]['beEditorProfile'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => array('\con4gis\EditorBundle\Classes\Contao\Callbacks\TlEditorConfiguration', 'getBackendEditorProfiles'),
        'eval'                    => array('tl_class'=>'clr', 'includeBlankOption' => true),
        'sql'                     => "char(10) NOT NULL default ''"
    ]
    
],$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']);

