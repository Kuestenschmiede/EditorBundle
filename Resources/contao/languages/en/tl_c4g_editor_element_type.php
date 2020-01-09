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

/**
 * Project Elements sind die einzelnen Arten von Kartenelementen, die über den Editor auf die Karte gezogen werden können.
 */

$strName = 'tl_c4g_editor_element_type';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['name'] = array("Name (Backend)", "Set a backend name for the element type.");
$GLOBALS['TL_LANG'][$strName]['caption'] = array("Name (Frontend)", "Set a frontend name for the element type.");
$GLOBALS['TL_LANG'][$strName]['pointstyle'] = array("Location style (POI)", "Choose the location style the element type should have as POI.");
$GLOBALS['TL_LANG'][$strName]['linestyle'] = array("Location style (Line)", "Choose the location style the element type should have as line.");
$GLOBALS['TL_LANG'][$strName]['polygonstyle'] = array("Location style (Area)", "Choose the location style the element type should have as area.");
$GLOBALS['TL_LANG'][$strName]['circlestyle'] = array("Location style (Circle)", "Choose the location style the element type should have as circle.");
$GLOBALS['TL_LANG'][$strName]['freehandstyle'] = array("Location style (Freehand)", "Choose the location style the element type should have as freehand drawing.");
$GLOBALS['TL_LANG'][$strName]['categories'] = array("Categories", "Which categories should contain the element type?");
$GLOBALS['TL_LANG'][$strName]['scenarios'] = array("Scenarios", "Which scenarios should contain the element type?");
$GLOBALS['TL_LANG'][$strName]['plugins'] = array("Plugins", "Choose the plugins the element type should be extended by.");

/** LEGENDS **/
$GLOBALS['TL_LANG'][$strName]['data_legend'] = "General information";

/** OPERATIONS **/
$GLOBALS['TL_LANG'][$strName]['new'] = array("Add element","Add element");
$GLOBALS['TL_LANG'][$strName]['edit'] = array("Edit element","Edit element ID %s");
$GLOBALS['TL_LANG'][$strName]['copy'] = array("Copy element","Copy element ID %s");
$GLOBALS['TL_LANG'][$strName]['delete'] = array("Delete element","Delete element ID %s");
$GLOBALS['TL_LANG'][$strName]['show'] = array("Show element","Show element ID %s");

/** OPTIONS **/
$GLOBALS['TL_LANG'][$strName]['point'] = 'POI';
$GLOBALS['TL_LANG'][$strName]['linestring'] = 'Line';
$GLOBALS['TL_LANG'][$strName]['polygon'] = 'Area';
$GLOBALS['TL_LANG'][$strName]['freehand'] = 'Draw freehand';
$GLOBALS['TL_LANG'][$strName]['circle'] = 'Circle';