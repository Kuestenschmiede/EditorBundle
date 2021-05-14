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

namespace con4gis\EditorBundle\Classes;

class EditorDrawStyles
{
    const POINT = 'Point';
    const LINESTRING = 'LineString';
    const POLYGON = 'Polygon';
    const CIRCLE = 'Circle';
    const FREEHAND = 'Freehand';

    public static function getDrawStyleArray()
    {
        //ToDo translate values
        return [
            'Point' => 'POI',
            'LineString' => 'Strecke',
            'Polygon' => 'Fläche',
            'Circle' => 'Kreis',
            'Freehand' => 'Freihand',
        ];
    }
}
