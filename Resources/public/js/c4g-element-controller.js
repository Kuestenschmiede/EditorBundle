import {C4gLayer} from "./../../../../MapsBundle/Resources/public/js/c4g-layer";

/**
 * Class for handling the data manipulation.
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
    let projectId = this.editor.projectController.currentProject.id;
    // send delete request to server
    $.ajax(this.editor.dataBaseUrl + projectId + "/" + layerId, {method: "DELETE"});
    // rerender the selectionList
    this.selectInteraction.updateFeatures();
    this.editor.mapsInterface.updateStarboard();
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
    const scope = this;
    let layerId = feature.get('layerId');
    let url = "/con4gis/projectDataCopy/" + this.editor.projectController.currentProject.id + "/" + layerId;
    let request = new C4GAjaxRequest(url, "POST");
    request.addDoneCallback(function(data) {
      scope.selectInteraction.showNewLayer(data.layer, true)
    });
    request.execute();
  }

  displaceElement(feature, layerId, withCopy, projectId) {
    const scope = this;
    let url = "";
    let oldLayer = this.mapsInterface.getLayerFromArray(layerId);
    let oldParent = this.mapsInterface.getLayerFromArray(oldLayer.pid);
    if (withCopy) {
      url = "/con4gis/projectDataDisplace/" + layerId + "/" + projectId + "/" + true;
    } else {
      url = "/con4gis/projectDataDisplace/" + layerId + "/" + projectId + "/" + false;
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
      scope.selectInteraction.removeSelectedFeature(feature);
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
        scope.selectInteraction.updateFeatures();
      };
      if (!scope.editor.mapsInterface.getLayerFromArray(newPid)) {
        // element layer does not exist in the project yet
        scope.editor.layerLoader.getElementLayer(feature, layer, newProjectId, fnCallback);
      } else {
        let parent = scope.editor.mapsInterface.getLayerFromArray(newPid);
        fnCallback(parent);
      }
    });
    request.execute();
  }

  rotateElement(feature, degrees) {
    // formula for conversion
    let radians = degrees * Math.PI / 180;
    let anchor;
    if (feature.getGeometry() instanceof ol.geom.Point) {
      anchor = feature.getGeometry();
    } else if (feature.getGeometry() instanceof ol.geom.Polygon) {
      anchor = feature.getGeometry().getInteriorPoint();
    }
    if (anchor && radians) {
      feature.getGeometry().rotate(radians, anchor.getCoordinates());
      if (feature.getGeometry() instanceof ol.geom.Point) {
        let styleId = feature.get('styleId');
        let styles = this.mapsInterface.getLocstyleArray();
        console.log(styles);
        let imgRot = feature.getStyle().getImage().getRotation();
        feature.getStyle().getImage().setRotation(imgRot + radians);
      }
    }
  }

  addLayer() {
    // TODO creates layer and adds it to the layer structure
  }

}