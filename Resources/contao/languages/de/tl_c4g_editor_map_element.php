<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 14.05.18
 * Time: 13:37
 */

/**
 * Project Elements sind die einzelnen Arten von Kartenelementen, die über den Editor auf die Karte gezogen werden können.
 */

$strName = 'tl_c4g_editor_map_element';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['name'] = array("Name", "Geben Sie den Namen für das Element ein. Dieser wird nur Backend dargestellt.");
$GLOBALS['TL_LANG'][$strName]['caption'] = array("Bezeichnung", "Geben Sie eine Bezeichnung für das Element ein. Diese wird im Editor (Frontend) dargestellt.");
$GLOBALS['TL_LANG'][$strName]['pointstyle'] = array("Lokationsstil (POI)", "Wählen Sie den Lokationsstil aus, in dem das Element als POI dargestellt werden soll.");
$GLOBALS['TL_LANG'][$strName]['linestyle'] = array("Lokationsstil (Strecke)", "Wählen Sie den Lokationsstil aus, in dem das Element als Strecke dargestellt werden soll.");
$GLOBALS['TL_LANG'][$strName]['polygonstyle'] = array("Lokationsstil (Fläche)", "Wählen Sie den Lokationsstil aus, in dem das Element als Fläche dargestellt werden soll.");
$GLOBALS['TL_LANG'][$strName]['circlestyle'] = array("Lokationsstil (Kreis)", "Wählen Sie den Lokationsstil aus, in dem das Element als Kreis dargestellt werden soll.");
$GLOBALS['TL_LANG'][$strName]['freehandstyle'] = array("Lokationsstil (Freihand)", "Wählen Sie den Lokationsstil aus, in dem das Element dargestellt werden soll, wenn es Freihand gezeichnet wird.");
$GLOBALS['TL_LANG'][$strName]['categories'] = array("Kategorien", "Wählen Sie die Kategorien aus, in denen das Element auftauchen soll.");
$GLOBALS['TL_LANG'][$strName]['scenarios'] = array("Szenarien", "Wählen Sie die Szenarien aus, in denen das Element auftauchen soll.");
$GLOBALS['TL_LANG'][$strName]['plugins'] = array("Plugins", "Wählen Sie die Plugins aus, die dieses Kartenelement erweitern sollen.");

/** LEGENDS **/
$GLOBALS['TL_LANG'][$strName]['data_legend'] = "Allgemeine Information";

/** OPERATIONS **/
$GLOBALS['TL_LANG'][$strName]['new'] = array("Element hinzufügen","Element hinzufügen");
$GLOBALS['TL_LANG'][$strName]['edit'] = array("Element bearbeiten","Bearbeiten des Elements ID %s");
$GLOBALS['TL_LANG'][$strName]['copy'] = array("Element kopieren","Kopieren des Elements ID %s");
$GLOBALS['TL_LANG'][$strName]['delete'] = array("Element löschen","Löschen des Elements ID %s");
$GLOBALS['TL_LANG'][$strName]['show'] = array("Element anzeigen","Anzeigen des Elements ID %s");

/** OPTIONS **/
$GLOBALS['TL_LANG'][$strName]['point'] = 'POI';
$GLOBALS['TL_LANG'][$strName]['linestring'] = 'Strecke';
$GLOBALS['TL_LANG'][$strName]['polygon'] = 'Fläche';
$GLOBALS['TL_LANG'][$strName]['freehand'] = 'Freihand zeichnen';
$GLOBALS['TL_LANG'][$strName]['circle'] = 'Kreis';