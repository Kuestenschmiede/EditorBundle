<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 14.05.18
 * Time: 13:39
 */
/**
 * Project subdomains werden für die Vordefinition der Szenarien im Frontend gebraucht.
 */
$strName = 'tl_c4g_maps_project_subdomains';

/** FIELDS */
$GLOBALS['TL_LANG'][$strName]['caption'] = array("Bezeichnung", "Geben Sie hier die genaue Bezeichnung zur Subdomain ein.");
$GLOBALS['TL_LANG'][$strName]['subdomain'] = array("Subdomain", "Geben Sie hier die eindeutige Subdomain ein.");
$GLOBALS['TL_LANG'][$strName]['infotext'] = array("Infotext", "Geben Sie hier einen kurzen Infotext ein, der oben, seorelevant im Infodialog auftaucht.");
$GLOBALS['TL_LANG'][$strName]['scenarios'] = array("Szenarien", "Wählen Sie die Szenarien aus, in denen die Kategorie auftauchen soll.");
$GLOBALS['TL_LANG'][$strName]['center_lon'] = array("Geo X-Koordinate","Geben Sie hier die X-Koordinate (Breitengrad, WGS-84) der Kartenmitte ein.");
$GLOBALS['TL_LANG'][$strName]['center_lat'] = array("Geo Y-Koordinate","Geben Sie hier die Y-Koordinate (Längengrad, WGS-84) der Kartenmitte ein.");
$GLOBALS['TL_LANG'][$strName]['zoom'] = array('Zoom-Level', 'Geben Sie hier den Zoom-Level der Karte ein.');
$GLOBALS['TL_LANG'][$strName]['geox_invalid'] = 'Value between -180.0 and 180.0 expected!';
$GLOBALS['TL_LANG'][$strName]['geoy_invalid'] = 'Value between -90.0 and 90.0 expected!';
$GLOBALS['TL_LANG'][$strName]['published'] = array("Veröffentlicht", "Soll die Subdomain öffentlich sichtbar sein?");
$GLOBALS['TL_LANG'][$strName]['slogan'] = array("Untertitel","Geben Sie einen Untertitel bzw. einen Slogan für die Awendung an.");
$GLOBALS['TL_LANG'][$strName]['logo'] = array("Logodatei","Wählen Sie die Logodatei aus.");
$GLOBALS['TL_LANG'][$strName]['company'] = array("Firmenname", "Hier können Sie einen Firmennamen eingeben.");
$GLOBALS['TL_LANG'][$strName]['street'] = array("Straße", "Bitte geben Sie den Straßennamen und die Hausnummer ein.");
$GLOBALS['TL_LANG'][$strName]['postal'] = array("Postleitzahl", "Bitte geben Sie die Postleitzahl ein.");
$GLOBALS['TL_LANG'][$strName]['city'] = array("Ort", "Bitte geben Sie den Namen des Ortes ein.");
$GLOBALS['TL_LANG'][$strName]['state'] = array("Staat", "Bitte geben Sie den Namen des Staates ein.");
$GLOBALS['TL_LANG'][$strName]['country'] = array("Land", "Bitte wählen Sie ein Land.");
$GLOBALS['TL_LANG'][$strName]['pageTitle'] = array("Seitentitel","Bitte geben Sie den Titel der Seite ein.");
$GLOBALS['TL_LANG'][$strName]['description'] = array("Beschreibung der Seite","Hier können Sie eine kurze Beschreibung der Seite eingeben, die von Suchmaschinen wie Google oder Yahoo ausgewertet wird. Suchmaschinen indizieren normalerweise zwischen 150 und 300 Zeichen.");
$GLOBALS['TL_LANG'][$strName]['keywords'] = array("Suchbegriffe", "Hier können Sie eine kommagetrennte Liste von Suchbegriffen eingeben. Suchbegriffe sind jedoch für die meisten Suchmaschinen (inklusive Google) nicht mehr relevant.");
$GLOBALS['TL_LANG'][$strName]['profilePublic'] = array('Kartenprofil (öffentlich)', 'Wählen Sie hier bitte ein Kartenprofil, das die Darstellung bestimmt. Kartenprofile werden über den Menüpunkt "Kartenprofile" unter "Layout" gepfegt. Falls Sie kein eigenes Kartenprofil wählen, dann wird standardmäßig mit OpenStreetMaps Mapnik Karten gearbeitet.');
$GLOBALS['TL_LANG'][$strName]['profileMember'] = array('Kartenprofil (Mitglieder)', 'Wählen Sie hier bitte ein Kartenprofil, das die Darstellung bestimmt. Kartenprofile werden über den Menüpunkt "Kartenprofile" unter "Layout" gepfegt. Falls Sie kein eigenes Kartenprofil wählen, dann wird standardmäßig mit OpenStreetMaps Mapnik Karten gearbeitet.');

/** LEGENDS **/
$GLOBALS['TL_LANG'][$strName]['data_legend'] = "Allgemeine Information";
$GLOBALS['TL_LANG'][$strName]['map_legend'] = "Einstellungen zur Karte";
$GLOBALS['TL_LANG'][$strName]['public_legend'] = "Sichtbarkeit";
$GLOBALS['TL_LANG'][$strName]['company_legend'] = "Firmendaten";
$GLOBALS['TL_LANG'][$strName]['city_legend'] = "Ortsdaten";
$GLOBALS['TL_LANG'][$strName]['seo_legend'] = "SEO Einstellungen";

/** OPERATIONS **/
$GLOBALS['TL_LANG'][$strName]['new']    = array("Subdomain hinzufügen","Subdomain hinzufügen");
$GLOBALS['TL_LANG'][$strName]['edit']   = array("Subdomain bearbeiten","Bearbeiten der Subdomain ID %s");
$GLOBALS['TL_LANG'][$strName]['copy']   = array("Subdomain kopieren","Kopieren der Subdomain ID %s");
$GLOBALS['TL_LANG'][$strName]['delete'] = array("Subdomain löschen","Löschen der Subdomain ID %s");
$GLOBALS['TL_LANG'][$strName]['show']   = array("Subdomain anzeigen","Anzeigen der Subdomain ID %s");
$GLOBALS['TL_LANG'][$strName]['toggle'] = array("Subdomain veröffentlichen", "Subdomain %s veröffentlichen");

/** REFERENCES */
$GLOBALS['TL_LANG'][$strName]['references']['default_theme']   = 'con4gis Standard-Theme';
