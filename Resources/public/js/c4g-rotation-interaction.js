export class RotationInteraction extends ol.interaction.Pointer {

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
    if (this._feature.getGeometry() instanceof ol.geom.Point || this._feature.getGeometry() instanceof ol.geom.Circle) {
    } else if (this._feature.getGeometry() instanceof ol.geom.Polygon) {
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