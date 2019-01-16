import {C4gLayer} from "./../../../../MapsBundle/Resources/public/js/c4g-layer";

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
        let elemLayer = new C4gLayer(data.layer);
        layer.pid = elemLayer.id;
        let fnAddLayer = function(layer, layerId) {
          scope.editor.mapsInterface.addToLayerArray(layer);
          let index = scope.editor.mapsInterface.proxy.layerIds.indexOf(layerId);
          scope.editor.mapsInterface.insertIntoLayerIds(layer.id, index-1);
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
        let catLayer = new C4gLayer(data.layer);
        scope.editor.mapsInterface.addToLayerArray(catLayer);
        let index = scope.editor.mapsInterface.proxy.layerIds.indexOf(layerId);
        scope.editor.mapsInterface.insertIntoLayerIds(catLayer.id, index - 2);
        scope.editor.mapsInterface.addToLayerIds(catLayer.id);
        // concat empty string in case the id is an integer
        scope.editor.mapsInterface.proxy.activeLayerIds[catLayer.id + ''] = catLayer.id + '';
        console.log(catLayer.id);
        if (callable && param) {
          callable(param, layerId);
        }
        catLayer.childs = [];
        catLayer.childs.push(param);
        catLayer.hasChilds = true;
        catLayer.childsCount = catLayer.childsCount || 0;
        catLayer.childsCount++;
        catLayer.tabId = param.tabId;
        scope.editor.mapsInterface.updateStarboard();
      }
    });
    request.execute();
  }
}