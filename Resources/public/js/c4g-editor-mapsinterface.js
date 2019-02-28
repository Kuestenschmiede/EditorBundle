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
import {cssConstants} from "./c4g-editor-constant-css";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";

/**
 * Class MapsInterface
 * Wrapper class for function calls from the MapsBundle. This way, when the MapsBundle changes, only this class needs
 * to be changed.
 */
export class MapsInterface {

  constructor(editor, proxy, mapController) {
    this.editor = editor;
    this.proxy = proxy;
    this.mapController = mapController;
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

  /**
   * Adds the given layer to the childs of the layer with the given pid.
   * @param layer
   * @param pid
   */
  addToLayerChilds(layer, pid) {
    let arrLayers = this.proxy.layerController.arrLayers;
    let pLayer = arrLayers[pid];
    if (pLayer) {
      if (!pLayer.childs) {
        pLayer.childs = [];
        pLayer.childsCount = 0;
      }
      pLayer.childs.push(layer);
      pLayer.childsCount++;
    }
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
    let projectLayer = this.editor.projectController.projectLayer;
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