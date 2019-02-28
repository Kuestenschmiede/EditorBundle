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

namespace con4gis\EditorBundle\Classes;

class EditorDrawStyles
{
    const POINT = "point";
    const LINESTRING = "linestring";
    const POLYGON = "polygon";
    const CIRCLE = "circle";
    const FREEHAND = "freehand";

    public static function getDrawStyleArray()
    {
        return [
            'point' => 'POI',
            'linestring' => 'Strecke',
            'polygon' => 'Fläche',
            'freehand' => 'Freihand zeichnen',
            'circle' => 'Kreis'
        ];
    }
}