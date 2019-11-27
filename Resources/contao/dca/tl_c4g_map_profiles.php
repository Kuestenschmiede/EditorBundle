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

$strName = 'tl_c4g_map_profiles';

$GLOBALS['TL_DCA'][$strName]['palettes']['__selector__'][] = "editor";

$GLOBALS['TL_DCA'][$strName]['palettes']['default'] = str_replace(
    '{measure_legend:hide},measuretool;',
    '{measure_legend:hide},measuretool;{editor_legend:hide},editor;',
    $GLOBALS['TL_DCA'][$strName]['palettes']['default']
);

$GLOBALS['TL_DCA'][$strName]['subpalettes']['editor'] = "feEditorProfile,beEditorProfile";

$GLOBALS['TL_DCA'][$strName]['fields']['editor'] = array
(
    'label'                   => &$GLOBALS['TL_LANG'][$strName]['editor'],
    'exclude'                 => true,
    'inputType'               => 'checkbox',
    'eval'                    => array('mandatory'=>false, "submitOnChange" => true),
    'sql'                     => "char(1) NOT NULL default ''"
);

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

