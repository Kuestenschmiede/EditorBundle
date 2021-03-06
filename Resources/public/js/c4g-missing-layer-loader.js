/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
// import {C4gLayer} from "./../../../../MapsBundle/Resources/public/js/c4g-layer";

/**
 * Loads missing resources when they are needed after the use of the application, e.g. layers for certain elements.
 */
export class LayerLoader {

  constructor(editor) {
    this.editor = editor;
  }

  /**
   * Requests the layer for the given element from the server and adds it to the layer structure.
   * @param feature   The copied feature
   * @param layer     The copied layer
   * @param projectId The destination project id
   */
  getElementLayer(feature, layer, projectId, opt_callback) {
    let scope = this;
    let layerId = layer.id;
    let request = new C4GAjaxRequest("/con4gis/elements/layer/" + layerId + "/" + projectId);
    request.addDoneCallback(function(data) {
      if (data.layer) {
        // let elemLayer = new C4gLayer(data.layer);
        layer.pid = elemLayer.id;
        let fnAddLayer = function(lLayer, lLayerId) {
          scope.editor.mapsInterface.addToLayerArray(lLayer);
          let index = scope.editor.mapsInterface.proxy.layerIds.indexOf(lLayerId);
          scope.editor.mapsInterface.insertIntoLayerIds(lLayer.id, index-1);
        };
        if (!scope.editor.mapsInterface.getLayerFromArray(elemLayer.pid)) {
          // category layer does not exist either
          scope.getCategoryLayer(layerId, projectId, fnAddLayer, elemLayer);
        } else {
          fnAddLayer(elemLayer, layerId);
          let catLayer = scope.editor.mapsInterface.getLayerFromArray(elemLayer.pid);
          catLayer.childs = catLayer.childs || [];
          catLayer.childs.push(elemLayer);
          catLayer.childsCount++;
        }
        elemLayer.childs.push(layer);
        elemLayer.hasChilds = true;
        elemLayer.childsCount++;
        elemLayer.visibleChilds = true;
        elemLayer.tabId = layer.tabId;
        scope.editor.mapsInterface.updateStarboard();
        if (opt_callback) {
          opt_callback(elemLayer);
        }
      }
    });
    request.execute();
  }

  /**
   * Requests the layer for the given category from the server and adds it to the layer structure.
   */
  getCategoryLayer(layerId, projectId, callable, param) {
    let scope = this;
    let mapId = this.editor.options.mapController.data.mapId;
    let request = new C4GAjaxRequest("/con4gis/categories/layer/" + layerId + "/" + projectId + "/" + mapId);
    request.addDoneCallback(function(data) {
      if (data.layer) {
        // let catLayer = new C4gLayer(data.layer);
        scope.editor.mapsInterface.addToLayerArray(catLayer);
        let index = scope.editor.mapsInterface.proxy.layerIds.indexOf(layerId);
        scope.editor.mapsInterface.insertIntoLayerIds(catLayer.id, index - 2);
        // concat empty string in case the id is an integer
        scope.editor.mapsInterface.proxy.activeLayerIds[catLayer.id + ''] = catLayer.id + '';
        console.log(scope.editor.mapsInterface.getLayerArray());
        let projectLayer = scope.editor.mapsInterface.getLayerFromArray(catLayer.pid);
        console.log(projectLayer);
        projectLayer.display = true;
        projectLayer.hasChilds = true;
        projectLayer.childsCount = projectLayer.childsCount || 0;
        projectLayer.childsCount++;
        projectLayer.visibleChilds = true;
        projectLayer.childs = projectLayer.childs || [];
        projectLayer.childs.push(catLayer);
        callable(param, layerId);
        catLayer.childs = [];
        catLayer.childs.push(param);
        catLayer.hasChilds = true;
        catLayer.childsCount = catLayer.childsCount || 0;
        catLayer.childsCount++;
        catLayer.visibleChilds = true;
        catLayer.tabId = param.tabId;
        catLayer.content = [];
        scope.editor.mapsInterface.updateStarboard();
      }
    });

    request.execute();
  }
}