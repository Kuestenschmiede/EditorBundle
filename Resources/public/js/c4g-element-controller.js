/**
 * Class for handling the data mani
 */
export class ElementController {

  /**
   * Class properties
   */
  selectInteraction;
  editor;
  mapsInterface;

  /**
   * Constructor.
   * @param selectInteraction
   * @param editor
   * @param mapsInterface
   */
  constructor(selectInteraction, editor, mapsInterface) {
    this.selectInteraction = selectInteraction;
    this.editor = editor;
    this.mapsInterface = mapsInterface;
  }

  deleteElement(feature) {
    let layerId = feature.get('layerId');
    let featureSource = this.editor.featureHandler.getSourceForLayerId(layerId);
    // remove Feature from the source
    featureSource.removeFeature(feature);
    // and from the selection
    this.selectInteraction.removeSelectedFeature(feature);
    // remove layer from layer structure
    let layer = this.mapsInterface.getLayerFromArray(layerId);
    this.checkParentsForDeletion(layer);
    this.mapsInterface.removeLayerFromArray(layerId);
    let projectId = this.editor.currentProject.id;
    // send delete request to server
    $.ajax(this.editor.dataBaseUrl + projectId + "/" + layerId, {method: "DELETE"});
    // rerender the selectionList
    this.selectInteraction.updateFeatures();
    this.editor.mapsInterface.updateStarboard();
    // TODO delete feature from source
    // TODO remove layer from map
    // TODO remove feature and layer from data structures (which are in maps)
  }

  /**
   * Checks the parents of the given layer. If their childs array is empty after deletion,
   * the parents will be deleted as well.
   * @param layer
   */
  checkParentsForDeletion(layer) {
    let pid = layer.pid;
    const layers = this.mapsInterface.getLayerArray();
    if (layers[pid]) {
      // the layer has a parent
      let parentLayer = layers[pid];
      if (parentLayer.childsCount === 1) {
        // parent layer would be empty after deletion
        if (layers[parentLayer.pid]) {
          this.checkParentsForDeletion(parentLayer);
        }
        this.mapsInterface.removeLayerFromArray(parentLayer.id);
      }
      else {
        for (let i = 0; i < parentLayer.childs.length; i++) {
          if (parentLayer.childs[i].id === layer.id) {
            // remove layer from parentLayer childs
            parentLayer.childs.splice(i, 1);
          }
        }
      }
    }
  }

  editElement(data, feature) {
    let layer = this.editor.mapsInterface.getLayerFromArray(feature.get('layerId'));
    this.editor.featureHandler.updateLayer(data, layer, feature);
    this.selectInteraction.updateFeatures();
    this.editor.mapsInterface.updateStarboard();
  }

  copyElement(feature) {
    let layerId = feature.get('layerId');
    let url = "/con4gis/projectDataCopy/" + this.editor.currentProject.id + "/" + layerId;
    let request = new C4GAjaxRequest(url, "POST");
    request.addDoneCallback(function(data) {
      scope.selectInteraction.showNewLayer(data.layer, true)
    });
    request.execute();
  }

  displaceElement(layerId, withCopy) {
    let url = "";
    let oldLayer = scope.editor.mapsInterface.getLayerFromArray(layerId);
    let oldParent = scope.editor.mapsInterface.getLayerFromArray(oldLayer.pid);
    if (withCopy) {
      url = "/con4gis/projectDataDisplace/" + layerId + "/" + projectSelect.value + "/" + true;
    } else {
      url = "/con4gis/projectDataDisplace/" + layerId + "/" + projectSelect.value + "/" + false;
      // move layer
      for (let i = 0; i < oldParent.childs.length; i++) {
        if (oldParent.childs[i] === oldLayer) {
          oldParent.childs.splice(i, 1);
        }
      }
    }
    let request = new C4GAjaxRequest(url, "POST");
    request.addDoneCallback(function(data) {
      let newProjectId = parseInt(data.newProjectId, 10);
      feature.set('projectId', newProjectId);
      // and from the selection
      selectedFeatures.remove(feature);
      let layer;
      if (withCopy) {
        layer = new C4gLayer(oldLayer);
      } else {
        layer = scope.editor.mapsInterface.getLayerFromArray(layerId);
      }
      let newLayerId = data.id;
      let newPid = data.pid;
      layer.projectId = newProjectId;
      layer.id = newLayerId;
      layer.content[0].id = parseInt(newLayerId, 10);
      layer.pid = newPid;
      const fnCallback = function(parent) {
        parent.childs = parent.childs || [];
        parent.childs.push(layer);
        parent.childsCount++;
        if (!withCopy) {
          scope.editor.mapsInterface.hideLayer(layerId);
        }
        scope.editor.mapsInterface.updateLayerIndex(layerId, layer);
        scope.editor.mapsInterface.updateStarboard();
        scope.selectInteraction.fnHandleSelection(selectedFeatures);
      };
      if (!scope.editor.mapsInterface.getLayerFromArray(newPid)) {
        // element layer does not exist in the project yet
        scope.editor.layerLoader.getElementLayer(feature, layer, newProjectId, fnCallback);
      } else {
        let parent = scope.editor.mapsInterface.getLayerFromArray(newPid);
        fnCallback(parent);
      }
      console.log(scope.editor.mapsInterface.getLayerArray());
    });
    request.execute();
  }

  addLayer() {
    // TODO creates layer and adds it to the layer structure
  }

}