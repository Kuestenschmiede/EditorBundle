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
import {EditorProject} from "./c4g-editor-project";
import {C4gLayer} from "./../../../../MapsBundle/Resources/public/js/c4g-layer";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";

export class ProjectController {

  /**
   * Class properties
   */
  editor;
  projects;
  currentProject;
  projectLayer;

  constructor(editor) {
    this._editor = editor;
    this._currentProject = null;
    this._projects = [];
    this._projectLayer = null;
  }

  /**
   * Searches this.projects for the given id and returns the project or null, if no project
   * with the specified id was found.
   * @param id
   * @returns {*}
   */
  getProjectById(id) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].id === id) {
        return this.projects[i];
      }
    }
    return null;
  }

  /**
   * Creates an array of EditorProject objects from the json project data.
   * @param jsonProjects
   * @returns {Array}
   */
  createProjects(jsonProjects) {
    for (let i = 0; i < jsonProjects.length; i++) {
      this.projects.push(new EditorProject(jsonProjects[i].id, jsonProjects[i].name, jsonProjects[i].permissions));
    }
  }

  /**
   * Changes the currently selected project.
   * @param newProject
   */
  selectProject(newProject) {
    this._currentProject = newProject;
    // load project layers into editLayerGroup
    // remove old project layers from editLayerGroup
    let layers = this.editor.mapsInterface.getLayerArray();
    let features = [];
    for (let key in layers) {
      if (layers.hasOwnProperty(key)) {
        let layer = layers[key];
        if ((layer.projectId === newProject.id)) {
          // add all vectorlayers from childs of layer to editLayerGroup
          this.editor.addLayersToGroup(layer, true);
          // show layer when it is in the project
          this.editor.mapsInterface.showLayer(layer.id);
          let source = this.editor.featureHandler.getSourceForLayerId(layer.id);
          if (source) {
            source.forEachFeature(function(feature) {
              features.push(feature);
            });
          }
          if (newProject.id === layer.projectId && layer.type === "projectLayer") {
            this.projectLayer = layer;
          }
        } else {
          // hide non project layers
          this.editor.mapsInterface.hideLayer(layer.id);
        }
      }
    }

    utils.fitToExtent(utils.getExtentForGeometries(features), this.editor.options.mapController.map);
  }

  /**
   * Applies the given changes to the given project.
   * @param projectId
   * @param changes
   */
  editProject(projectId, changes) {
    let project = this.getProjectById(projectId);
    if (project) {
      for (let key in changes) {
        if (changes.hasOwnProperty(key)) {
          switch (key) {
            case 'caption':
              project.name = changes.caption;
              break;
            default:
              project.addData(key, changes[key]);
          }
        }
      }
    }
  }

  /**
   * Deletes the given project.
   * @param project
   */
  deleteProject(project) {
    let scope = this;
    $.ajax('con4gis/project/' + project.id, {
      method: 'DELETE'
    }).done(function(data) {
      if (data.success) {
        // delete project layers and reload starboard
        for (let i = 0; i < scope._projects.length; i++) {
          if (scope._projects[i] === project) {
            scope._projects.splice(i, 1);
          }
        }
        scope.deleteLayersForProject(project.id);
        scope._currentProject = null;
      }
    });
  }

  /**
   * Creates a new project with the given data by sending a request to the server.
   * @param projectData
   * @param callback
   */
  createProject(projectData, callback) {
    let url = "con4gis/project/" + this.editor.configId;
    $.ajax(url, {method: "POST", data: projectData}).done(function(data) {
      callback(data);
    });
  }

  /**
   * Adds a new project to the data structures.
   * @param data
   */
  addNewProject(data) {
    // create new project object
    this._projects.push(new EditorProject(data.id, data.name, data.permissions));
    let projectLayer = new C4gLayer(data.projectLayer);
    // add project layer to layer structure
    this._editor.mapsInterface.addToLayerArray(projectLayer);
    this._editor.mapsInterface.addToLayerIds(projectLayer.id);
    this._editor.mapsInterface.addToLayerChilds(projectLayer, projectLayer.pid);
    this._projectLayer = projectLayer;
    this._editor.mapsInterface.updateStarboard();
  }

  /**
   * Deletes all layers for the given project id.
   * @param projectId
   */
  deleteLayersForProject(projectId) {
    const starboard = this.editor.mapsInterface.getStarboard();
    let layers = this.editor.mapsInterface.getLayerArray();
    for (let key in layers) {
      if (layers.hasOwnProperty(key)) {
        let layer = layers[key];
        // delete all layers that belong to the project
        if (layer.projectId === projectId) {
          let tabId = layer.tabId;
          if (starboard.initialized) {
            const tab = starboard.plugins["customTab" + tabId];
            const tabLayers = tab.layers;
            // delete layer from starboard, has the same key as in arrLayers
            delete tabLayers[key];
          }
          // delete features for layer
          if (layer.vectorLayer) {
            let source = this.editor.featureHandler.getSourceForLayerId(layer.id);
            if (source) {
              source.clear();
            }
          }
          // delete layer from arrLayers
          this.editor.mapsInterface.removeLayerFromArray(key);
          // check if the layer is listed as child in other layers
          if (layer.pid && layers[layer.pid]) {
            let parentLayer = layers[layer.pid];
            for (let i = 0; i < parentLayer.childs.length; i++) {
              let currentChild = parentLayer.childs[i];
              if (currentChild.id === layer.id) {
                // remove layer from childs array
                parentLayer.childs.splice(i, 1);
              }
            }
          }
        }
      }
    }
  }

  get editor() {
    return this._editor;
  }

  get currentProject() {
    return this._currentProject;
  }

  set currentProject(value) {
    this._currentProject = value;
  }

  get projects() {
    return this._projects;
  }

  get projectLayer() {
    return this._projectLayer;
  }

  set projectLayer(value) {
    this._projectLayer = value;
  }
}