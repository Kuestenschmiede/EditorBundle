import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {C4gLayer} from "./../../../../MapsBundle/Resources/public/js/c4g-layer";

export class FeatureHandler {

  /**
   * FeatureHandler constructor.
   * @param editor
   * @param mapsInterface
   */
  constructor(editor, mapsInterface) {
    this.editor = editor;
    this.mapsInterface = mapsInterface;
  }

  /**
   * Converts the feature into a format that is accepted by the server API. Also sets every needed property in the
   * feature after the request returns successfully.
   * @param feature
   * @param element
   * @param category
   * @param project
   * @param projectLayer
   * @param source
   * @param drawType
   */
  handleDrawnFeature(feature, element, category, project, projectLayer, source, drawType) {
    let scope = this;
    let layerToSend = this.createLayerFromFeature(
      feature,
      element,
      category,
      project,
      projectLayer,
      source,
      drawType
    );

    let request = new C4GAjaxRequest(this.editor.dataBaseUrl + project.id, "POST");
    let requestData = Object.values(layerToSend);
    let requestDataKeys = Object.keys(layerToSend);
    let finalRequestData = {};
    for (let i = 0; i < requestData.length; i++) {
      if (requestDataKeys[i] === "vectorLayer") {
        continue;
      }
      finalRequestData[requestDataKeys[i]] = requestData[i];
    }
    finalRequestData['elementid'] = element.id;
    finalRequestData['categoryid'] = category.id;
    finalRequestData['drawType'] = drawType;
    if (drawType !== "point" && drawType !== "circle") {
      let format = new ol.format.GeoJSON();
      finalRequestData['geojson'] = format.writeFeature(feature);
    }
    request.addRequestData(finalRequestData);
    request.addDoneCallback(function(data) {
      let updatedLayer = scope.updateLayer(data, layerToSend, feature);
      // update layerid
      if (data.hasOwnProperty("id")) {
        feature.set('layerId', data['id']);
        updatedLayer.content[0].id = data['id'];
      }
      if (data.hasOwnProperty("content")) {
        if (data.content[0].data.properties.popup) {
          feature.set('popup', data.content[0].data.properties.popup);
        }
      }
      // show layer
      scope.mapsInterface.showLayer(updatedLayer.id);
      scope.activateLayerParents(updatedLayer);
    });
    request.execute();
  }

  /**
   * Shows the parents of a layer.
   * @param layer
   */
  activateLayerParents(layer) {
    let currentLayer = layer;
    while (this.mapsInterface.getLayerArray()[currentLayer.pid]) {
      currentLayer = this.mapsInterface.getLayerArray()[currentLayer.pid];
      currentLayer.display = true;
      if (currentLayer.projectId === this.editor.currentProject.id) {
        this.mapsInterface.showLayer(currentLayer.id);
      }
    }
  }

  /**
   * Deletes a given feature from the layer array and sends a DELETE request to the server.
   * @param feature
   */
  deleteFeature(feature) {
    let layerId = feature.get('layerId');
    let layer = this.mapsInterface.getLayerFromArray(layerId);
    this.checkParentsForDeletion(layer);
    this.mapsInterface.removeLayerFromArray(layerId);
    let projectId = this.editor.currentProject.id;
    let request = new C4GAjaxRequest(this.editor.dataBaseUrl + projectId + "/" + layerId, "DELETE");
    request.execute();
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

  /**
   * Applies the given changes to a given feature/layer and sends a PUT request to the server.
   * @param feature     The feature to update
   * @param changes     A map of property => newValue for each change to apply
   */
  modifyFeature(feature, changes) {
    let layerId = feature.get('layerId');
    let layer = this.mapsInterface.getLayerFromArray(layerId);
    layer = this.updateLayerProperties(changes, layer, feature);
    this.mapsInterface.updateLayerIndex(layerId, layer);
    this.mapsInterface.updateStarboard();
    let request = new C4GAjaxRequest(this.editor.dataBaseUrl + this.editor.currentProject.id + "/" + layer.id, "PUT");
    request.addRequestData(changes);
    request.execute();
  }

  /**
   * Applies all given changes onto the layer, if the properties which should be changed exist.
   * @param changeData
   * @param layer
   * @param feature
   * @returns {*}
   */
  updateLayerProperties(changeData, layer, feature) {
    for (let key in changeData) {
      if (changeData.hasOwnProperty(key) && layer.hasOwnProperty(key)) {
        // current key is contained in both objects
        layer[key] = changeData[key];
        // this is needed to sync the feature and the layer
        if (feature && feature.get(key + "")) {
          feature.set(key + "", changeData[key]);
        }

        if (key === 'name') {
          layer['layername'] = changeData[key];
          // update tooltip of feature according to the name change
          feature.set('tooltip', changeData[key]);
        }
      }
    }
    return layer;
  }

  /**
   * Updates the layer with the data contained in changeData.
   * @param changeData
   * @param layer
   * @param feature
   */
  updateLayer(changeData, layer, feature) {
    let oldId = layer.id;
    layer = this.updateLayerProperties(changeData, layer, feature);
    this.mapsInterface.updateLayerIndex(oldId, layer);
    return layer;
  }

  /**
   * Creates a new C4gLayer from a freshly drawn feature.
   * @param feature
   * @param element
   * @param category
   * @param project
   * @param projectLayer
   * @param source
   * @param drawType
   * @returns {{childs: Array, childsCount: number, display: boolean, editable: boolean, hasChilds: boolean, hide, id: *|string, isInactive: boolean, key: *|string, layername: string, name: string, pid: *, tabId, type: string, renderSpecial: boolean, projectId}}
   */
  createLayerFromFeature(feature, element, category, project, projectLayer, source, drawType) {
    let elementLayer = this.findElementLayer(element, category, projectLayer, project);
    let newId = utils.getUniqueId();
    let newName = element.name + " " + (elementLayer.childsCount + 1);
    let layer = {
      childs: [],
      childsCount: 0,
      display: true,
      editable: true,
      hasChilds: false,
      hide: elementLayer.hide,
      id: newId,
      isInactive: elementLayer.isInactive,
      key: newId,
      layername: newName,
      name: newName,
      pid: elementLayer.id,
      tabId: projectLayer.tabId,
      type: "single",
      renderSpecial: true,
      projectId: project.id
    };
    layer = new C4gLayer(layer);
    layer.content = this.createContent(feature, layer, drawType);
    // add vector layer
    feature.setStyle(this.mapsInterface.getLocstyleArray()[feature.get('styleId')].style);
    feature.set('tooltip', newName);
    feature.set('name', newName);
    feature.set('layerId', newId);
    feature.set('projectId', project.id);
    let vectorSource = new ol.source.Vector({features: [feature]});
    let vectorLayer = this.mapsInterface.getVectorLayer(vectorSource, feature.getStyle());
    layer.vectorLayer = new ol.layer.Group({layers: [vectorLayer]});
    // add to editLayerGroup so the layer can be selected
    this.editor.editLayerGroup.getLayers().push(layer.vectorLayer);
    // add new layer to existing data structures
    this.mapsInterface.addToLayerArray(layer);
    if (elementLayer.childs) {
      elementLayer.childs.push(layer);
    }
    elementLayer.childsCount++;
    elementLayer.hasChilds = true;
    elementLayer.visibleChilds = true;
    elementLayer.isInactive = false;
    this.mapsInterface.addToLayerIds(newId);
    this.mapsInterface.showLayer(layer.id);
    this.mapsInterface.proxy.activeLayerIds[layer.id] = "visible";
    return layer;
  }

  /**
   * Creates an object for the content variable of a layer.
   * @param feature
   * @param layer
   * @param drawType
   */
  createContent(feature, layer, drawType) {
    var arrContent,
      objContent,
      data,
      properties,
      geometry,
      settings;

    arrContent = [];
    objContent = {};
    objContent.format = "GeoJSON";
    objContent.locationStyle = feature.get("styleId");
    objContent.id = utils.getUniqueId();

    data = {};
    data.type = "Feature";
    properties = {};
    properties.graphicTitle = layer.name;
    properties.label = layer.name;
    properties.projection = "EPSG:4326";
    properties.popup = {};
    properties.popup.content = "empty";
    properties.popup.async = false;
    data.properties = properties;
    geometry = {};
    switch (drawType.toLowerCase()) {
      case "point":
        geometry.type = "Point";
        geometry.coordinates = ol.proj.toLonLat(feature.getGeometry().getCoordinates());
        break;
      case "line":
        geometry.type = "LineString";
        geometry.coordinates = ol.proj.toLonLat(feature.getGeometry().getCoordinates());
        break;
      case "circle":
        geometry.type = "Circle";
        geometry.center = ol.proj.toLonLat(feature.getGeometry().getCenter());
        geometry.radius = feature.getGeometry().getRadius();
        break;
    }

    data.geometry = geometry;
    objContent.data = data;
    settings = {};
    settings.boundingBox = false;
    settings.crossOrigine = false;
    settings.loadAsync = true;
    settings.refresh = true;
    settings.interval = 10000;
    objContent.settings = settings;

    feature.set('popup', properties.popup);

    arrContent.push(objContent);
    return arrContent;
  }

  /**
   * Finds the layer that represents the given element.
   * @param element
   * @param category
   * @param projectLayer
   * @param project
   * @returns {{childs: Array, childsCount: number, display: boolean, editable: boolean, hasChilds: boolean, hide, id: *|string, isInactive, key: *|string, layername, name, pid, tabId, type: string, renderSpecial: boolean, projectId}}
   */
  findElementLayer(element, category, projectLayer, project) {
    let childs = false;
    let categoryLayer;
    let categoryFound = false;
    let elementFound = false;

    if (projectLayer) {
      childs = projectLayer.childs
    }

    if (childs && childs.length) {
      for (let i = 0; i < childs.length; i++) {
        if (childs[i].name === category.name) {
          categoryFound = true;
          categoryLayer = childs[i];
          for (let j = 0; j < childs[i].childs.length; j++) {
            if (childs[i].childs[j].name === element.name) {
              return childs[i].childs[j];
            }
          }
          if (!elementFound) {
            // element was not found in category, has to be created
            return this.createElementLayer(element, categoryLayer, projectLayer, project)
          }
        }
      }
    }

    if (!categoryFound) {
      // category was not found in project, has to be created
      return this.createCategoryWithElementLayer(element, category, projectLayer, project);
    }
  }

  /**
   * Creates a C4gLayer for a given category. This function also calls createElementLayer, thus the correct id relations
   * are established immediately.
   * @param element
   * @param category
   * @param projectLayer
   * @param project
   * @returns {{childs: Array, childsCount: number, display: boolean, editable: boolean, hasChilds: boolean, hide, id: *|string, isInactive, key: *|string, layername, name, pid, tabId, type: string, renderSpecial: boolean, projectId}}
   */
  createCategoryWithElementLayer(element, category, projectLayer, project) {
    let newId = utils.getUniqueId();
    let scope = this;
    let layer = {
      childs: [],
      childsCount: 0,
      display: true,
      editable: true,
      hasChilds: false,
      hide: projectLayer.hide,
      id: newId,
      isInactive: projectLayer.isInactive,
      key: newId,
      layername: category.name,
      name: category.name,
      pid: projectLayer.id,
      tabId: projectLayer.tabId,
      type: "none",
      renderSpecial: true,
      projectId: project.id
    };
    layer = new C4gLayer(layer);
    layer.visibleChilds = true;
    this.mapsInterface.addToLayerArray(layer);
    this.mapsInterface.addToLayerIds(newId);
    // TODO das hier auslagern (ist fast gleich wie unten!)
    let request = new C4GAjaxRequest("/con4gis/projectIdService", "POST");
    request.addRequestData({
      id: category.id,
      key: project.id,
      ident: 98
    });
    request.addDoneCallback(function (data) {
      let oldIndex = layer.id;
      scope.updateLayer(data, layer);
      if (layer.childs.length > 0) {
        for (let i = 0; i < layer.childs.length; i++) {
          let childLayer = layer.childs[i];
          childLayer.pid = data.id;
        }
      }
      scope.mapsInterface.updateLayerIndex(oldIndex, layer);
      scope.mapsInterface.proxy.activeLayerIds[data.id] = data.id;
      scope.mapsInterface.updateStarboard();
    });
    request.execute();
    if (!projectLayer.childs) {
      projectLayer.childs = [];
    }
    layer.content = [];
    projectLayer.childs.push(layer);
    projectLayer.hasChilds = true;
    projectLayer.childsCount++;
    projectLayer.visibleChilds = true;
    return this.createElementLayer(element, layer, projectLayer, project);
  }

  /**
   * Creates a C4gLayer for a given element. This is usually the case when the first feature of an element is drawn into a
   * category in the project.
   * @param element
   * @param categoryLayer
   * @param projectLayer
   * @param project
   * @returns {{childs: Array, childsCount: number, display: boolean, editable: boolean, hasChilds: boolean, hide, id: *|string, isInactive, key: *|string, layername, name, pid, tabId, type: string, renderSpecial: boolean, projectId}}
   */
  createElementLayer(element, categoryLayer, projectLayer, project) {
    let scope = this;
    let newId = utils.getUniqueId();
    let layer = {
      childs: [],
      childsCount: 0,
      display: true,
      editable: true,
      hasChilds: false,
      hide: categoryLayer.hide,
      id: newId,
      isInactive: categoryLayer.isInactive,
      key: newId,
      layername: element.name,
      name: element.name,
      pid: categoryLayer.id,
      tabId: projectLayer.tabId,
      type: "none",
      renderSpecial: true,
      projectId: project.id
    };
    layer = new C4gLayer(layer);
    this.mapsInterface.addToLayerArray(layer);
    this.mapsInterface.addToLayerIds(newId);
    let request = new C4GAjaxRequest("/con4gis/projectIdService", "POST");
    request.addRequestData({
      id: element.id,
      key: element.categoryid,
      ident: 99
    });
    request.addDoneCallback(function (data) {
      let oldIndex = layer.id;
      scope.updateLayer(data, layer);
      if (layer.childs.length > 0) {
        for (let i = 0; i < layer.childs.length; i++) {
          let childLayer = layer.childs[i];
          childLayer.pid = data.id;
        }
      }
      scope.mapsInterface.proxy.activeLayerIds[data.id] = data.id;
      scope.mapsInterface.updateLayerIndex(oldIndex, layer);
      scope.mapsInterface.updateStarboard();
    });
    request.execute();
    layer.content = [];
    categoryLayer.childs.push(layer);
    categoryLayer.hasChilds = true;
    categoryLayer.childsCount++;
    return layer;
  }

  /**
   * Gets the appropriate ol.source element for a given layerID.
   * @param layerId
   */
  getSourceForLayerId(layerId) {
    let layer = this.mapsInterface.getLayerFromArray(layerId);
    let olLayer = layer.vectorLayer.getLayersArray()[0];
    if (!olLayer) {
      return null;
    }
    return olLayer.getSource();
  }
}