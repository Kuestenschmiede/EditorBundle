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
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {Sideboard} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-control-sideboard";
import {MapsInterface} from "./c4g-editor-mapsinterface";
import {LayerLoader} from "./c4g-missing-layer-loader";
import {ProjectCacheController} from "./c4g-project-cache-controller";
import {ProjectUIController} from "./c4g-project-ui-controller";
import {EditorDrawview} from "./c4g-editor-drawview";
import {FeatureHandler} from "./c4g-editor-featurehandler";
import {EditorSelectView} from "./c4g-editor-selectview";
import {langConstants} from "./c4g-editor-i18n";
import {ElementController} from "./c4g-element-controller";
import {ElementUIController} from "./c4g-element-ui-controller";
import {ProjectController} from "./c4g-project-controller";
import {cssConstants} from './c4g-editor-constant-css';
import {AlertHandler} from "./../../../../CoreBundle/Resources/public/js/AlertHandler";
import {Group} from "ol/layer";
import {Control} from "ol/control"
import {Collection} from "ol";
import ReactDOM from "react-dom";
import React from "react";
import {EditorComponent} from "./components/c4g-editor-component.jsx";

'use strict';
export class Editor extends Sideboard {


  /**
   * Constructor
   *
   * @constructor
   * @extend {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   */
  constructor(options) {
    if (!options.mapController) {
      console.warn('Could not initiallize Editor, without valid mapController.');
      return;
    }
    // extend options
    options = jQuery.extend({
      name: 'editor',
      type: 'frontend',
      dataField: false,
      create: true,
      mapController: undefined,
      drawModes: [
        'Point',
        'Line',
        'Polygon',
        'Circle',
        'Freehand'
      ],
      direction: 'left',
      headline: langConstants.EDITOR
      // initMode: 'select'
    }, options);

    super(options);
    this.options = options;

    if (window.c4gMapsHooks.extend_editor && window.c4gMapsHooks.extend_editor.length) {
      utils.callHookFunctions(window.c4gMapsHooks.extend_editor, {editor: this, utils: utils});
    }
    if (this.options.dataField && typeof this.options.dataField === 'string') {
      this.options.dataField = jQuery(this.options.dataField) || false;
    }
  };

  /**
   * Methods
   */

  /**
   * Executed when the editor will be opened for the first time.
   * [init description]
   *
   * @return  {boolean}  Returns |true| on success
   */
  init(opt_externalinit) {
    const scope = this;
    this.spinner.show();

    this.editLayerGroup = new Group({
      layers: new Collection([]),
      visible: false
    });
    this.configId = this.options.mapController.data.feEditorProfile;
    // load editor configuration
    if (this.options.mapController.proxy.layers_loaded) {
      this.setupConfiguration();
    } else {
      // add to hook
      this.spinner.show();
      window.c4gMapsHooks.proxy_layer_drawn.push(function() {
        scope.setupConfiguration();
        scope.spinner.hide();
      });
    }
    if (opt_externalinit) {
      this.initialized = true;
    }

    return true;
  }

  setupConfiguration() {
    this.tabs = [];
    this.lastDrawInteraction = undefined;
    this.proxy = this.options.mapController.proxy;
    this.mapsInterface = new MapsInterface(this, this.proxy, this.options.mapController);
    this.featureHandler = new FeatureHandler(this, this.mapsInterface);
    this.projectController = new ProjectController(this);
    this.projectUiController = new ProjectUIController(this, this.projectController);
    this.layerLoader = new LayerLoader(this);
    this.cacheController = null;
    this.elementUiController = null;
    let url = "con4gis/editorService/" + this.configId;
    const scope = this;
    jQuery.getJSON(url)
    // Create views for draw-features with at least one locationstyle
      .done(function (data) {
        scope.projectController.createProjects(data.projects);

        scope.dataBaseUrl = data.dataBaseUrl;
        jQuery(scope.viewTriggerBar).hide();
        jQuery(scope.contentHeadline).hide();
        scope.projectUiController.createProjectSelect();
        scope.projectUiController.createNewProjectButton();
        scope.projectUiController.createEditProjectButton();
        scope.projectUiController.createDeleteProjectButton();
        let buttonBar = scope.projectUiController.getButtonBar();
        scope.buttonBar = buttonBar;
        scope.topToolbar.appendChild(buttonBar);

        // Add and activate select view
        scope.selectView = new EditorSelectView({editor: scope});
        scope.drawStyles = data.drawStyles;
        // fetch missing styles
        scope.tabs.push(scope.selectView.init());
        scope.loadLocationStyles(scope.drawStyles, function () {
          // and create draw views
          scope.createDrawViews(scope.drawStyles);
        });
        scope.elementController = new ElementController(scope.selectView.selectInteraction, scope, scope.mapsInterface);
        scope.elementUiController = new ElementUIController(scope, scope.selectView.selectInteraction, scope.elementController);
        scope.selectView.selectInteraction.elementUiController = scope.elementUiController;
        scope.cacheController = new ProjectCacheController(scope);
        // initially select first project
        // scope.projectUiController.changeProjectSelection(scope.projectController.projects[0]);
        scope.loadFromCache();
        if (window.c4gMapsHooks.editor_configurated && window.c4gMapsHooks.editor_configurated.length) {
          utils.callHookFunctions(window.c4gMapsHooks.editor_configurated, {editor: scope, utils: utils, data: data});
        }

        window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
        window.c4gMapsHooks.baselayer_changed.push(function(id) {
          scope.cacheController.saveSettingsForProject(scope.projectController.currentProject.id, "baselayer", id);
        });
      })
      .fail(function (data) {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the editor configuration...');
        let ah = new AlertHandler();
        ah.showErrorDialog("Bitte melden Sie sich zur Nutzung des Editors an.", data.responseText);
        scope.close();
        return false;
      })
      .always(function () {
        scope.spinner.hide();
      });
  }

  createDrawViews(drawStyles) {
    // Draw-point view
    if (drawStyles.point.categories && drawStyles.point.categories.length > 0) {
      let pointView = new EditorDrawview('Point', drawStyles.point.categories, this);
      this.tabs.push(pointView.init());
    }
    // Draw-line view
    if (drawStyles.linestring.categories && drawStyles.linestring.categories.length > 0) {
      let lineView = new EditorDrawview('LineString', drawStyles.linestring.categories, this);
      this.tabs.push(lineView.init());
    }
    // Draw-polygon view
    if (drawStyles.polygon.categories && drawStyles.polygon.categories.length > 0) {
      let polygonView = new EditorDrawview('Polygon', drawStyles.polygon.categories, this);
      this.tabs.push(polygonView.init());
    }
    // Draw-circle view
    if (drawStyles.circle.categories && drawStyles.circle.categories.length > 0) {
      let circleView = new EditorDrawview('Circle', drawStyles.circle.categories, this);
      this.tabs.push(circleView.init());
    }
    // Draw-freehand view
    if (drawStyles.freehand.categories && drawStyles.freehand.categories.length > 0) {
      let freehandView = new EditorDrawview('Freehand', drawStyles.freehand.categories, this);
      this.tabs.push(freehandView.init());
    }
    this.tabs[0].activate();
    // initially hide the elements, until a project is selected
    if (!this.projectController.currentProject) {
      this.toggleDrawContent();
    }
  }

  /**
   * Loads general cached data and
   */
  loadFromCache() {
    let cachedSelection = this.cacheController.getSelectedProject();
    let selectedProject = null;
    // check if the project exists
    if (this.projectController.projects) {
      for (let i = 0; i < this.projectController.projects.length; i++) {
        if (this.projectController.projects[i].id === cachedSelection) {
          selectedProject = this.projectController.projects[i];
        }
      }
    }
    if (selectedProject) {
      // show the project
      this.projectUiController.changeProjectSelection(selectedProject);
    }
  }

  /**
   * Executed before editor will be closed
   *
   * @return  {[type]}  [description]
   */
  preCloseFunction() {
    if (this.editLayerGroup.getVisible()) {
      this.editLayerGroup.setVisible(false);
    }
    this.options.mapController.proxy.currentPopup.popup.getElement().style.display = "";
    this.mapsInterface.proxy.activateClickObserver();
  }

  preHideFunction() {
    // this.preCloseFunction();
  }

  /**
   * Executed before editor will be open
   *
   * @return  {[type]}  [description]
   */
  preOpenFunction() {
    if (!this.editLayerGroup.getVisible()) {
      this.editLayerGroup.setVisible(true);
    }
    this.options.mapController.proxy.deactivateClickObserver();
    this.options.mapController.mapHover.hoverTooltip.close();
    if (this.options.mapController.proxy.currentPopup) {
      this.options.mapController.proxy.currentPopup.popup.getElement().style.display = "none";
    }
  }

  loadLocationStyles(drawStyles, callback) {
    let styles = [];
    const existingStyles = this.mapsInterface.proxy.locationStyleController.arrLocStyles;
    for (let outerKey in drawStyles) {
      if (drawStyles.hasOwnProperty(outerKey)) {
        let drawStyle = drawStyles[outerKey];
        let categories = drawStyle.categories;
        for (let catKey in categories) {
          if (categories.hasOwnProperty(catKey)) {
            let category = categories[catKey];
            let elements = category.elements;
            for (let elemKey in elements) {
              if (elements.hasOwnProperty(elemKey)) {
                let element = elements[elemKey];
                if (!existingStyles[element.styleId]) {
                  // style is not yet loaded
                  styles.push(element.styleId);
                }
              }
            }
          }
        }
      }
    }
    if (styles.length > 0) {
      this.mapsInterface.proxy.locationStyleController.loadLocationStyles(styles, {done: callback});
    } else {
      // no styles are to load, execute callback
      callback();
    }
  }

  /**
   * Returns the styleFunction for a given feature in the given projection.
   * @param feature
   * @param projection
   * @returns {boolean}
   */
  layerStyleFunction(feature, projection) {
    var styleId;

    if (feature && typeof feature.get === 'function') {
      // get the styleId of the current feature
      styleId = feature.get('styleId');
      // and execute the appropriate function
      if (this.mapsInterface.getLocstyleArray()[styleId]) {
        return this.mapsInterface.getLocstyleArray()[styleId].style(feature, projection);
      }
    }
    return false;
  }

  /**
   * Toggles the display of the draw elements and categories.
   */
  toggleDrawContent(opt_show) {
    let pointDiv = document.getElementsByClassName(cssConstants.DRAW_CONTENT_POINT)[0];
    let lineDiv = document.getElementsByClassName(cssConstants.DRAW_CONTENT_LINESTRING)[0];
    let polygonDiv = document.getElementsByClassName(cssConstants.DRAW_CONTENT_POLYGON)[0];
    let circleDiv = document.getElementsByClassName(cssConstants.DRAW_CONTENT_CIRCLE)[0];
    let freehandDiv = document.getElementsByClassName(cssConstants.DRAW_CONTENT_FREEHAND)[0];
    if (pointDiv) {
      pointDiv.style.display = opt_show ? "block" : "none";
    }
    if (lineDiv) {
      lineDiv.style.display = opt_show ? "block" : "none";
    }
    if (polygonDiv) {
      polygonDiv.style.display = opt_show ? "block" : "none";
    }
    if (circleDiv) {
      circleDiv.style.display = opt_show ? "block" : "none";
    }
    if (freehandDiv) {
      freehandDiv.style.display = opt_show ? "block" : "none";
    }
  }

  /**
   * Takes a layer as input and adds all its childs vectorlayers to the editLayerGroup of the editor.
   * @param layer
   * @param topLevel
   */
  addLayersToGroup(layer, topLevel) {
    if (layer.vectorLayer) {
      // add layer.Vector to editLayerGroup
      this.editLayerGroup.getLayers().push(layer.vectorLayer);
      // connect each feature to its containing layer, needed for feature-source connection
      // TODO encapsulate into setLayerFeatureAttributes (?)
      layer.vectorLayer.getLayers().forEach(function (element, index, array) {
        if (element.getSource()) {
          element.getSource().forEachFeature(function (feature) {
            // set layerId, needed for later feature removal
            feature.set('layerId', layer.id);
            // set additional display properties
            feature.set('name', layer.layername);
            feature.set('projectId', layer.projectId);
            if (layer.content && layer.content[0] && layer.content[0].locationStyle) {
              feature.set('styleId', layer.content[0].locationStyle);
            }
            feature.set('tooltip', layer.content[0].data.properties['tooltip']);
          });
        }
      });
    }
  }

  /**
   * Unselects all currently selected features.
   */
  clearFeatureSelection() {
    this.selectView.selectInteraction.selectInteraction.getFeatures().clear();
  }
}

// replace normal editor with this
window.c4gMapsHooks = window.c4gMapsHooks || {};
window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
window.c4gMapsHooks.mapController_addControls.push(function(params) {
  let mapController = params.mapController;
  const mapData = mapController.data;
  if (mapData.feEditorProfile) {
      if (!mapController.editorContainer) {
          if (mapController.data.editor_div) {
              mapController.editorContainer = document.querySelector("." + mapController.data.editor_div);
              if (!mapController.editorContainer) {
                  mapController.editorContainer = document.createElement('div');
                  mapController.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
                  jQuery(".ol-overlaycontainer-stopevent").append(mapController.editorContainer);
              } else {
                  mapController.editorContainer.className += " c4g-external";
              }
          } else {
              mapController.editorContainer = document.createElement('div');
              mapController.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
              jQuery(".ol-overlaycontainer-stopevent").append(mapController.editorContainer);
          }
      }
    let editorProps = {
      tipLabel: langConstants.CTRL_EDITOR,
      type: mapData.editor.type || 'frontend',
      inputField: mapData.editor.inputField || false,
      target: mapData.editor.target || params.Container,
      initOpen: mapData.editor.open || false,
      config: mapData.editor.config || false,
      dataField: mapData.editor.data_field || false,
      caching: mapData.caching,
      mapController: mapController
    };
    let arrComponents = params.arrComps;
    arrComponents.push(ReactDOM.createPortal(React.createElement(EditorComponent, editorProps), mapController.editorContainer));
    params.arrComps = arrComponents;
  }
});


