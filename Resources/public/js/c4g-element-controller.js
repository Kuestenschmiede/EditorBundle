/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import {AlertHandler} from "./../../../../CoreBundle/Resources/public/js/AlertHandler";
import {langConstants} from "./c4g-editor-i18n";

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
    const scope = this;
    let layerId = feature.get('layerId');
    let featureSource = this.editor.featureHandler.getSourceForLayerId(layerId);
    // remove Feature from the source
    featureSource.removeFeature(feature);
    // and from the selection
    this.selectInteraction.removeSelectedFeature(feature);
    // remove layer from layer structure
    let layer = this.mapsInterface.getLayerFromArray(layerId);
    this.mapsInterface.mapController.map.removeLayer(layer.vectorLayer);
    this.checkParentsForDeletion(layer);
    this.mapsInterface.removeLayerFromArray(layerId);
    let projectId = this.editor.projectController.currentProject.id;
    // send delete request to server
    jQuery.ajax(this.editor.dataBaseUrl + projectId + "/" + layerId, {method: "DELETE"}).fail(function(data) {
      scope.handleApiError(data.responseText);
    });
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
    // deselect and select feature to update its style
    this.selectInteraction.selectInteraction.removeFeature(feature);
    this.selectInteraction.selectInteraction.addFeature(feature);
    this.selectInteraction.updateFeatures();
    this.editor.mapsInterface.updateStarboard();
  }

  copyElement(feature) {
    const scope = this;
    let layerId = feature.get('layerId');
    let url = "/con4gis/projectDataCopy/" + this.editor.projectController.currentProject.id + "/" + layerId;
    jQuery.ajax(url, {method: "POST"}).done(function (data) {
      scope.selectInteraction.showNewLayer(data.layer, true);
    });
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
    if (withCopy) {
      this.copyElement(feature);
    }
    jQuery.ajax(url, {method: 'POST'}).done(function (data) {
      let newProjectId = parseInt(data.newProjectId, 10);
      feature.set('projectId', newProjectId);
      // and from the selection
      scope.selectInteraction.removeSelectedFeature(feature);
      let layer = scope.editor.mapsInterface.getLayerFromArray(layerId);
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
        scope.editor.mapsInterface.hideLayer(layerId);
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
    }).fail(function (data) {
      console.error(data.responseText);
    });
  }

  rotateElement(feature, degrees) {
    // formula for conversion
    // let radians = degrees * Math.PI / 180;
    // let anchor;
    // if (feature.getGeometry() instanceof ol.geom.Point) {
    //   anchor = feature.getGeometry();
    // } else if (feature.getGeometry() instanceof ol.geom.Polygon) {
    //   anchor = feature.getGeometry().getInteriorPoint();
    // }
    // if (anchor && radians) {
    //   feature.getGeometry().rotate(radians, anchor.getCoordinates());
    //   if (feature.getGeometry() instanceof ol.geom.Point) {
    //     let styleId = feature.get('styleId');
    //     let styles = this.mapsInterface.getLocstyleArray();
    //     if (feature.getStyle()) {
    //       // feature already has a style
    //       let imgRot = feature.getStyle().getImage().getRotation();
    //       feature.getStyle().getImage().setRotation(imgRot + radians);
    //     } else {
    //       let featureStyle = styles[styleId].style(feature)[0];
    //       console.log(featureStyle);
    //       let imgRot = featureStyle.getImage().getRotation();
    //       featureStyle.getImage().setRotation(imgRot + radians);
    //       feature.setStyle(featureStyle);
    //     }
    //   }
    // }
    console.log('currently work in progress, be patient and check for updates');
  }

  deselectElement(feature, noUpdate) {
    this.selectInteraction.removeSelectedFeature(feature);
    if (!noUpdate) {
      this.selectInteraction.updateFeatures();
    }
  }

  revertElement(feature) {
    const scope = this;
    let layerId = feature.get('layerId');
    let projectId = this.editor.projectController.currentProject.id;
    let layer = this.mapsInterface.getLayerFromArray(layerId);
    jQuery.ajax('/con4gis/element/revert/' + layerId + '/' + projectId, {method: 'PUT'}).done(function(data) {
      scope.editor.mapsInterface.removeLayerFromArray(layer.id);
      scope.editor.featureHandler.updateLayer(data, layer, feature, true);
      scope.editor.mapsInterface.proxy.layerController.showLayer(layer.id);
    }).fail(function (data) {
      scope.handleApiError(data.responseText, feature);
    });
  }

  handleApiError(response) {
    let alertHandler = new AlertHandler();
    alertHandler.showErrorDialog(langConstants.EDITOR_API_ERROR_TITLE, response);
  }
}