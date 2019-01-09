<?php
/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018.
 * @link      https://www.kuestenschmiede.de
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