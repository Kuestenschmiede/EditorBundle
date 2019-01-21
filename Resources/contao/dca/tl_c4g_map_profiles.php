<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 21.01.19
 * Time: 16:59
 */
$strName = 'tl_c4g_map_profiles';
$GLOBALS['TL_DCA'][$strName]['palettes']['default'] = str_replace(
    '{editor_legend:hide},editor;',
    '{editor_legend:hide},editor,feEditorProfile,beEditorProfile;',
    $GLOBALS['TL_DCA'][$strName]['palettes']['default']
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

