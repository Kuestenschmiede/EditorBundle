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
    options = $.extend({
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
    // TODO tabs aufteilen in selectTabs und drawTabs, am besten für jeden Tab eigene Property, damit alle einzeln
    // TODO angesteuert werden können!
    this.tabs = [];
    this.lastDrawInteraction = undefined;
    this.proxy = this.options.mapController.proxy;
    this.mapsInterface = new MapsInterface(this, this.proxy, options.mapController);
    this.featureHandler = new FeatureHandler(this, this.mapsInterface);
    // this.projects = [];
    // this.currentProject = null;
    this.projectController = new ProjectController(this);
    this.projectUiController = new ProjectUIController(this, this.projectController);
    this.layerLoader = new LayerLoader(this);
    this.cacheController = null;
    // this.elementController = null;
    this.elementUiController = null;
    if (window.c4gMapsHooks.extend_editor && window.c4gMapsHooks.extend_editor.length) {
      utils.callHookFunctions(window.c4gMapsHooks.extend_editor, {editor: this, utils: utils});
    }
    if (this.options.dataField && typeof this.options.dataField === 'string') {
      this.options.dataField = $(this.options.dataField) || false;
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

    this.editLayerGroup = new ol.layer.Group({
      layers: new ol.Collection([]),
      visible: false
    });
    // load editor configuration
    let url = "con4gis/projectEditorService";
    $.getJSON(url)
    // Create views for draw-features with at least one locationstyle
      .done(function (data) {
        scope.projectController.createProjects(data.projects);
        scope.dataBaseUrl = data.dataBaseUrl;
        $(scope.viewTriggerBar).hide();
        $(scope.contentHeadline).hide();
        scope.projectUiController.createProjectSelect();
        scope.projectUiController.createNewProjectButton();
        scope.projectUiController.createEditProjectButton();
        scope.projectUiController.createDeleteProjectButton();
        scope.topToolbar.appendChild(scope.projectUiController.getButtonBar());
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
        window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
        window.c4gMapsHooks.baselayer_changed.push(function(id) {
          scope.cacheController.saveSettingsForProject(scope.currentProject.id, "baselayer", id)
        });
      })
      .fail(function (data) {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the editor configuration...');
        window.alert("Bitte melden Sie sich zur Nutzung des Editors an.");
        console.error(data.responseText);
        scope.close();
        return false;
      })
      .always(function () {
        scope.spinner.hide();
      });
    if (opt_externalinit) {
      this.initialized = true;
    }

    return true;
  }

  createDrawViews(drawStyles) {
    // Draw-point view
    console.log(this);
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
      let polygonView = new EditorDrawview('Polygon', drawStyles.polygon.categories, true);
      this.tabs.push(polygonView.init());
    }
    // Draw-circle view
    if (drawStyles.circle.categories && drawStyles.circle.categories.length > 0) {
      let circleView = new EditorDrawview('Circle', drawStyles.circle.categories, true);
      this.tabs.push(circleView.init());
    }
    // Draw-freehand view
    if (drawStyles.freehand.categories && drawStyles.freehand.categories.length > 0) {
      let freehandView = new EditorDrawview('Freehand', drawStyles.freehand.categories, true);
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
    // TODO check if this if is necessary
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
    let pointDiv = document.getElementsByClassName("c4g-draw-content-point")[0];
    let lineDiv = document.getElementsByClassName("c4g-draw-content-line")[0];
    let polygonDiv = document.getElementsByClassName("c4g-draw-content-polygon")[0];
    let circleDiv = document.getElementsByClassName("c4g-draw-content-circle")[0];
    let freehandDiv = document.getElementsByClassName("c4g-draw-content-freehand")[0];
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
  mapController.map.removeControl(mapController.controls.editor);
  let editor = new Editor({
    tipLabel: langConstants.CTRL_EDITOR,
    type: mapData.editor.type || 'frontend',
    target: mapData.editor.target || params.Container,
    initOpen: mapData.editor.open || false,
    dataField: mapData.editor.data_field || false,
    caching: mapData.caching,
    mapController: mapController
  });
  mapController.map.addControl(editor);
  mapController.controls.editor = editor;
});


