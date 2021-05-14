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
/**
 * Element categories sind die einzelnen Kategorien, nach denen Elemente gruppiert sind. Dies sind etwa "Fahrzeuge",
 * "Schießbuden" o.Ä.
 */
$strName = 'tl_c4g_editor_element_category';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['caption'] = array("Category name", "Insert a name for the category");

/** LEGENDS **/
$GLOBALS['TL_LANG'][$strName]['data_legend'] = "General information";

/** OPERATIONS **/
$GLOBALS['TL_LANG'][$strName]['new'] = array("Add category","Add category");
$GLOBALS['TL_LANG'][$strName]['edit'] = array("Edit category","Edit category ID %s");
$GLOBALS['TL_LANG'][$strName]['copy'] = array("Copy category","Copy category ID %s");
$GLOBALS['TL_LANG'][$strName]['delete'] = array("Delete category","Delete category ID %s");
$GLOBALS['TL_LANG'][$strName]['show'] = array("Show category","Show category ID %s");
