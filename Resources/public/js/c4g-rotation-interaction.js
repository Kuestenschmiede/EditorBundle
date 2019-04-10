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
import {Pointer} from "ol/interaction";
import {Point, Polygon} from "ol/geom";
import Circle from "ol/geom/Circle";

export class RotationInteraction extends Pointer {

  _feature;
  _mouseStart;
  // _map;

  constructor(feature) {
    super();
    this._feature = feature;
    this._mouseStart = [];
    // this._map = map;
  }

  handleDownEvent(event) {
    let map = event.map;
    let feature = map.forEachFeatureAtPixel(event.pixel, function(feature) {
      return feature;
    });
    this._mouseStart = map.getCoordinateFromPixel(event.pixel);
    // check if the feature is the correct feature
    return feature === this._feature;
  }

  handleDragEvent(event) {
    // idx 0 = X, idx 1 = Y
    let currentCoord = event.map.getCoordinateFromPixel(event.pixel);
    if (this._feature.getGeometry() instanceof Point || this._feature.getGeometry() instanceof Circle) {
    } else if (this._feature.getGeometry() instanceof Polygon) {
      let center = this._feature.getGeometry().getInteriorPoint();
      let currentXDist = currentCoord[0] - center[0];
      let currentYDist = currentCoord[1] - center[1];
      let mouseXDist = this._mouseStart[0] - center[0];
      let mouseYDist = this._mouseStart[1] - center[1];
    }
  }

  handleMoveEvent(event) {

  }

  handleUpEvent(event) {
    this._mouseStart = [];
  }
}