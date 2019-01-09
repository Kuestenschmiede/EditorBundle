import {cssConstants} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";

/**
 * Class MapsInterface
 * Wrapper class for function calls from the MapsBundle. This way, when the MapsBundle changes, only this class needs
 * to be changed.
 */
export class MapsInterface {

  constructor(editor) {
    this.editor = editor;
    this.proxy = editor.proxy;
    this.mapController = editor.proxy.options.mapController;
  }

  getLayerArray() {
    return this.proxy.layerController.arrLayers;
  }

  getLayerFromArray(layerId) {
    return this.proxy.layerController.arrLayers[layerId];
  }

  /**
   * Adds a given layer to the maps layerController.
   * @param layer
   */
  addToLayerArray(layer) {
    let arrLayers = this.proxy.layerController.arrLayers;
    arrLayers[layer.id] = layer;
  }

  addToLayerIds(layerId) {
    this.proxy.layerIds.push(layerId);
  }

  insertIntoLayerIds(layerId, index) {
    this.proxy.layerIds.splice(index, 0, layerId);
  }

  getVectorLayer(source, style) {
    return utils.getVectorLayer(source, style);
  }

  showLayer(layerId) {
    this.proxy.layerController.showLayer(layerId);
  }

  hideLayer(layerId) {
    this.proxy.layerController.hideLayer(layerId);
  }

  getStarboard() {
    return this.mapController.controls.starboard;
  }

  getLocstyleArray() {
    return this.proxy.locationStyleController.arrLocStyles;
  }

  /**
   * Updates the layer index of a given layer in the maps layerController.
   * @param oldIndex
   * @param layer
   */
  updateLayerIndex(oldIndex, layer) {
    delete this.proxy.layerController.arrLayers[oldIndex];
    let ids = this.proxy.layerIds;
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === oldIndex) {
        ids[i] = layer.id;
        this.proxy.layerIds[i] = layer.id;
      }
    }
    this.proxy.layerController.arrLayers[layer.id] = layer;
    this.updateStarboard();
  }

  /**
   * Removes the layer at the given index from the maps layerController. Also deletes from the proxy layer array.
   * @param index
   */
  removeLayerFromArray(index) {
    delete this.proxy.layerController.arrLayers[index];
    let ids = this.proxy.layerIds;
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] === index) {
        this.proxy.layerIds.splice(i, 1);
      }
    }
  }

  /**
   * Called when a new layer is created. Reloads the starboard content, so the new layer is contained, but the old
   * state is also retained.
   */
  updateStarboard() {
    let projectLayer = this.editor.projectLayer;
    let starboard = this.getStarboard();
    let unfoldedLayers = {};
    let tabId = projectLayer.tabId;
    let tab;
    if (starboard.initialized) {
      if (starboard.plugins["customTab" + tabId]) {
        tab = starboard.plugins["customTab" + tabId];
        let layers = tab.layers;
        for (let key in layers) {
          if (layers.hasOwnProperty(key)) {
            let layer = layers[key];
            // entryWrapper is the element which has the acutal content, and a open/close arrow or nothing, if there
            // are no childs for the current element
            let entryWrapper = layer.entryWrappers[0];
            if ($(entryWrapper).hasClass(cssConstants.OPEN)) {
              unfoldedLayers[key] = key;
            }
          }
        }
        tab.loadContent();
        layers = tab.layers;
        for (let key in layers) {
          if (layers.hasOwnProperty(key)) {
            let layer = layers[key];
            let entryWrapper = layer.entryWrappers[0];
            if (unfoldedLayers[key]) {
              $(entryWrapper).removeClass(cssConstants.CLOSE).addClass(cssConstants.OPEN);
            }
          }
        }
        starboard.update();
      }
    }
  }
}