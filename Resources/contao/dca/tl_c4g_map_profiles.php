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

$strName = 'tl_c4g_map_profiles';

$GLOBALS['TL_DCA'][$strName]['fields']['mapFunctions']['options'][] = 'editor';
$GLOBALS['TL_DCA'][$strName]['fields']['initial_open_comp']['options'][] = 'editor';


Contao\CoreBundle\DataContainer\PaletteManipulator::create()
    ->addLegend('editor_legend', 'geosearch_legend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_AFTER, true)
    ->addField(['feEditorProfile,beEditorProfile'], 'editor_legend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_APPEND)
    ->applyToPalette('default', 'tl_c4g_map_profiles');

$GLOBALS['TL_DCA'][$strName]['fields']['feEditorProfile'] = array
(
    'label'                   => &$GLOBALS['TL_LANG'][$strName]['feEditorProfile'],
    'exclude'                 => true,
    'inputType'               => 'select',
    //'foreignKey'              => 'tl_c4g_map_profiles.name',
    'options_callback'        => array('\con4gis\EditorBundle\Classes\Contao\Callbacks\TlEditorConfiguration', 'getFrontendEditorProfiles'),
    'eval'                    => array('tl_class'=>'clr', 'chosen' => true, 'includeBlankOption' => true),
    'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references'],
    //'relation'                => ['type'=>'belongsTo', 'load'=>'eager'],
    'sql'                     => "int(10) unsigned NOT NULL default '0'",
    'xlabel'                  => [['tl_c4g_map_profiles_editor', 'configurationLink']]
);

$GLOBALS['TL_DCA'][$strName]['fields']['beEditorProfile'] = array
(
    'label'                   => &$GLOBALS['TL_LANG'][$strName]['beEditorProfile'],
    'exclude'                 => true,
    'inputType'               => 'select',
    //'foreignKey'              => 'tl_c4g_map_profiles.name',
    'options_callback'        => array('\con4gis\EditorBundle\Classes\Contao\Callbacks\TlEditorConfiguration', 'getBackendEditorProfiles'),
    'eval'                    => array('tl_class'=>'clr', 'chosen' => true, 'includeBlankOption' => true),
    //'relation'                => ['type'=>'belongsTo', 'load'=>'eager'],
    'sql'                     => "int(10) unsigned NOT NULL default '0'",
    'xlabel'                  => [['tl_c4g_map_profiles_editor', 'configurationLink']]
);

/**
 * Class tl_c4g_map_profiles
 */
class tl_c4g_map_profiles_editor extends Backend
{
    public function configurationLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_editor_configuration&amp;table=tl_c4g_editor_configuration&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editEditorConfiguration']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editEditorConfiguration'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

}