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


$strName = 'tl_c4g_editor_configuration';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['name'] = array("Name", "Set a name for the editor configuration.");
$GLOBALS['TL_LANG'][$strName]['type'] = array("Editor type", "Choose whether you want a frontend or backend editor.");
$GLOBALS['TL_LANG'][$strName]['categories'] = array("Categories", "Choose the categories that should be present in the editor.");
$GLOBALS['TL_LANG'][$strName]['editor_vars'] = ['Additional Fields', 'Additional Fields are available for POIs, lines and areas and are accessible via ${fieldname} in the label, popup and tooltip.'];
$GLOBALS['TL_LANG'][$strName]['editor_show_items'] = ['Show map entries in editor', 'Shows all map entries in the editor.'];
$GLOBALS['TL_LANG'][$strName]['editor_helpurl'] = ['Help URL', 'If set, a help url is displayed in the editor.'];
//$GLOBALS['TL_LANG'][$strName]['is_backend_editor_default'] = ['Default for backend editor', 'Check this to use this configuration as the default for the backend editor.'];
$GLOBALS['TL_LANG'][$strName]['editor_project_group'] = ['Project group', 'Choose the group that should be used as project group. This group manages the permissions for editor projects.'];

/** LEGENDS **/
$GLOBALS['TL_LANG'][$strName]['data_legend'] = "General information";

/** OPERATIONS **/
$singular = 'editor configuration';
$GLOBALS['TL_LANG'][$strName]['new'] = array("Add $singular","Add $singular");
$GLOBALS['TL_LANG'][$strName]['edit'] = array("Edit $singular","Edit $singular ID %s");
$GLOBALS['TL_LANG'][$strName]['copy'] = array("Copy $singular","Copy $singular ID %s");
$GLOBALS['TL_LANG'][$strName]['delete'] = array("Delete $singular","Delete $singular ID %s");
$GLOBALS['TL_LANG'][$strName]['show'] = array("Show $singular","Show $singular ID %s");

/** OPTIONS **/
$GLOBALS['TL_LANG'][$strName]['references']['frontend'] = 'Frontend';
$GLOBALS['TL_LANG'][$strName]['references']['backend'] = 'Backend';
