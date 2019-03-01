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

$strName = 'tl_c4g_editor_element';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['name'] = array("Name","Name");
$GLOBALS['TL_LANG'][$strName]['pid'] = array("Project","The project containing this element.");
$GLOBALS['TL_LANG'][$strName]['group_id'] = array("Group","The project group.");
$GLOBALS['TL_LANG'][$strName]['description'] = array("Information","Information");
$GLOBALS['TL_LANG'][$strName]['scenario_id'] = array("Scenario","Scenario");
$GLOBALS['TL_LANG'][$strName]['category_id'] = array("Category","The category in which this element is sorted in.");
$GLOBALS['TL_LANG'][$strName]['type_id'] = array("Element type","The element type of this element.");
$GLOBALS['TL_LANG'][$strName]['lastmemberid'] = array('Last edited by', 'The member that edited this element last.');
$GLOBALS['TL_LANG'][$strName]['loc_label'] = array('Map label', 'Customize the label that is displayed at the element on the map.');
$GLOBALS['TL_LANG'][$strName]['contact_name'] = array("Contact name","Contact name");
$GLOBALS['TL_LANG'][$strName]['contact_phone'] = array("Contact phone","Contact phone");

/** LEGENDS **/
$GLOBALS['TL_LANG'][$strName]['custom_legend'] = "General information";
$GLOBALS['TL_LANG'][$strName]['data_legend'] = "Component information";
$GLOBALS['TL_LANG'][$strName]['group_legend'] = "Group information";

/** OPERATIONS **/
$GLOBALS['TL_LANG'][$strName]['new'] = array("Add component","Add component");
$GLOBALS['TL_LANG'][$strName]['edit'] = array("Edit component","Edit component %s");
$GLOBALS['TL_LANG'][$strName]['copy'] = array("Copy component","Copy component %s");
$GLOBALS['TL_LANG'][$strName]['delete'] = array("Delete component","Delete component %s");
$GLOBALS['TL_LANG'][$strName]['show'] = array("Show component","Show component %s");