/**
 * Implements a translate interaction for multiple features at the same time.
 */
export class TranslateAllInteraction extends ol.interaction.Pointer {

  _active;
  _features;  // the features that should be translated
  _translateInteractions;
  _mouseStart;

  constructor(features, map) {
    super();
    this._features = features;
    this._active = false;
    this._mouseStart = [];
    this._map = map;
  }

  handleDownEvent(event) {
    if (this._active) {
      this._mouseStart = event.pixel;
      return true;
    } else {
      return false;
    }
  }

  handleDragEvent(event) {
    let currentPixel = event.pixel;
    let currentCoordinate = this._map.getCoordinateFromPixel(currentPixel);
    let mouseCoordinate = this._map.getCoordinateFromPixel(this._mouseStart);
    let deltaX = currentCoordinate[0] - mouseCoordinate[0];
    let deltaY = currentCoordinate[1] - mouseCoordinate[1];
    this._mouseStart = currentPixel;
    this.translateFeatures(deltaX, deltaY);
  }

  handleMoveEvent(event) {

  }

  handleUpEvent(event) {
    this._mouseStart = false;
  }

  translateFeatures(deltaX, deltaY) {
    this._features.forEach((element, index) => {
      // we need to pass the correct coordinate difference
      element.getGeometry().translate(deltaX, deltaY);
    });
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}