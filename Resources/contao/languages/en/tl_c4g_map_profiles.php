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

$GLOBALS['TL_LANG'][$strName]['editor'] = ["Enable editor", "This checkbox enables the editor."];
$GLOBALS['TL_LANG'][$strName]['feEditorProfile'] = ["Frontend configuration", "Choose the configuration to be used in the frontend."];
$GLOBALS['TL_LANG'][$strName]['beEditorProfile'] = ["Backend configuration", "Choose the configuration to be used in the backend."];

$GLOBALS['TL_LANG'][$strName]['editEditorConfiguration'] = 'Edit editor configurations';

/** legend */
$GLOBALS['TL_LANG'][$strName]['editor_legend'] = 'Editor settings';

$GLOBALS['TL_LANG'][$strName]['mapFunctions']['reference']['editor'] = ['map editor', 'Adds a button in the map to open the editor.'];
$GLOBALS['TL_LANG'][$strName]['initial_open_comp']['refs']['editor'] = 'map editor';
