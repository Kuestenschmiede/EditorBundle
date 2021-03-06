<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


$GLOBALS['TL_DCA']['tl_c4g_settings']['fields']['editorprofile'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_settings']['editorprofile'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'foreignKey'              => 'tl_c4g_map_profiles.name',
    'eval'                    => ['tl_class'=>'clr',
        'includeBlankOption'=>true, 'blankOptionLabel'=>&$GLOBALS['TL_LANG']['tl_c4g_maps']['default_profile'],
        'submitOnChange' => true, 'alwaysSave' => true],
    'relation'                => ['type'=>'belongsTo', 'load'=>'eager'],
    'sql'                     => "int(10) unsigned NOT NULL default '0'",
    'xlabel' => array
    (
        array('tl_settings_c4g_maps', 'profilesLink')
    )
];

$GLOBALS['TL_DCA']['tl_c4g_settings']['palettes']['default'] = str_replace('beGeopickerProfile,', 'beGeopickerProfile,editorprofile,', $GLOBALS['TL_DCA']['tl_c4g_settings']['palettes']['default']);
