<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 14.05.18
 * Time: 13:40
 */
/**
 * Project scenarios sind die Szenarien, die man in Mapcil auswählen kann. Beispiele hierfür sind Einsatzplanung, Bauplanung,
 * Boßelstrecke und Ähnliches.
 */

$strName = 'tl_c4g_maps_project_scenarios';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['caption'] = array("Bezeichnung", "Geben Sie eine Bezeichnung für das Szenario ein.");
$GLOBALS['TL_LANG'][$strName]['plugins'] = array("Projekt-Plugins", "Wählen Sie Plugins aus, die Projekte dieses Szenarios erweitern sollen.");

/** LEGENDS **/
$GLOBALS['TL_LANG'][$strName]['data_legend'] = "Allgemeine Information";

/** OPERATIONS **/
$GLOBALS['TL_LANG'][$strName]['new'] = array("Szenario hinzufügen","Szenario hinzufügen");
$GLOBALS['TL_LANG'][$strName]['edit'] = array("Szenario bearbeiten","Bearbeiten des Szenarios ID %s");
$GLOBALS['TL_LANG'][$strName]['copy'] = array("Szenario kopieren","Kopieren des Szenarios ID %s");
$GLOBALS['TL_LANG'][$strName]['delete'] = array("Szenario löschen","Löschen des Szenarios ID %s");
$GLOBALS['TL_LANG'][$strName]['show'] = array("Szenario anzeigen","Anzeigen des Szenarios ID %s");