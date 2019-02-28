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
/**
 * Project data sind die tatsächlich eingetragenen Elemente. Diese haben eine Kategorie (z.B. Fahrzeug, Einheit oder Schießbude)
 * und gehören zu einem Projekt.
 */

$strName = 'tl_c4g_editor_element';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['name'] = array("Bezeichnung","Bezeichnung");
$GLOBALS['TL_LANG'][$strName]['pid'] = array("Planungsprojekt","jede Komponente muss einem Planungsprojekt zugeordnet sein.");
$GLOBALS['TL_LANG'][$strName]['group_id'] = array("Gruppe","jede Komponente muss einer Gruppe zugeordnet sein.");
$GLOBALS['TL_LANG'][$strName]['description'] = array("Informationen","Informationen");
$GLOBALS['TL_LANG'][$strName]['scenario_id'] = array("Szenario","Szenario");
$GLOBALS['TL_LANG'][$strName]['category_id'] = array("Kategorie","Angaben um welche Kategorie es sich handelt.");
$GLOBALS['TL_LANG'][$strName]['type_id'] = array("Typ","Angaben um welchen Komponententyp es sich handelt.");
$GLOBALS['TL_LANG'][$strName]['lastmemberid'] = array('Letzter Bearbeiter', 'Letzter Bearbeiter');
$GLOBALS['TL_LANG'][$strName]['loc_label'] = array('Kartenlabel', 'Hier können Sie das Label, welches auf der Karte am Element dargestellt wird, anpassen.');
$GLOBALS['TL_LANG'][$strName]['contact_name'] = array("Ansprechpartner","Ansprechpartner");
$GLOBALS['TL_LANG'][$strName]['contact_phone'] = array("Telefonnummer","Telefonnummer des Ansprechpartners");

/** LEGENDS **/
$GLOBALS['TL_LANG'][$strName]['custom_legend'] = "Allgemeine Angaben";
$GLOBALS['TL_LANG'][$strName]['data_legend'] = "Angaben zur Komponente";
$GLOBALS['TL_LANG'][$strName]['group_legend'] = "Angaben zur Gruppe";

/** OPERATIONS **/
$GLOBALS['TL_LANG'][$strName]['new'] = array("Komponente hinzufügen","Komponente hinzufügen");
$GLOBALS['TL_LANG'][$strName]['edit'] = array("Komponente bearbeiten","Komponente %s bearbeiten");
$GLOBALS['TL_LANG'][$strName]['copy'] = array("Komponente kopieren","Komponente %s kopieren");
$GLOBALS['TL_LANG'][$strName]['delete'] = array("Komponente löschen","Komponente %s löschen");
$GLOBALS['TL_LANG'][$strName]['show'] = array("Komponente anzeigen","Komponente %s anzeigen");