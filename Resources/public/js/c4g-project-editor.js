import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {Sideboard} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-control-sideboard";
import {MapsInterface} from "./c4g-project-editor-mapsinterface";
import {LayerLoader} from "./c4g-missing-layer-loader";
import {ProjectCacheController} from "./c4g-project-cache-controller";
import {ProjectUIController} from "./c4g-project-ui-controller";
import {EditorDrawview} from "./c4g-project-editor-drawview";
import {FeatureHandler} from "./c4g-project-editor-featurehandler";
import {EditorSelectView} from "./c4g-project-editor-selectview";
import {SubdomainCacheController} from "./c4g-subdomain-cache-controller";
import {langConstantsGerman} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-en";
let langConstants = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    langConstants = langConstantsGerman;
  } else if (mapData.lang === "en") {
    langConstants = langConstantsEnglish;
  } else {
    // fallback
    langConstants = langConstantsGerman;
  }
}
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

    const scope = this;

    // TODO tabs aufteilen in selectTabs und drawTabs, am besten für jeden Tab eigene Property, damit alle einzeln
    // TODO angesteuert werden können!
    this.tabs = [];
    this.lastDrawInteraction = undefined;
    this.proxy = this.options.mapController.proxy;
    this.mapsInterface = new MapsInterface(this);
    this.featureHandler = new FeatureHandler(this, this.mapsInterface);
    this.projects = [];
    this.currentProject = null;
    this.projectUiController = new ProjectUIController(this);
    this.layerLoader = new LayerLoader(this);
    this.cacheController = null;
    this.subdomainCache = new SubdomainCacheController(this);
    this.subdomainCache.loadCache();

    // load and apply data from subdomain
    let subdomainData = this.subdomainCache.getValuesForSubdomain(utils.getCurrentSubdomain());
    if (subdomainData) {
      // update map
      if (subdomainData.mapCenter) {
        this.options.mapController.map.getView().setCenter(subdomainData.mapCenter);
      }
      if (subdomainData.baselayer) {
        this.proxy.hook_baselayer_loaded.push(function () {
          scope.proxy.baselayerController.showBaseLayer(subdomainData.baselayer);
        });
      }
    }
    // add hook for mapCenter caching
    window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
    window.c4gMapsHooks.map_center_changed.push(function (center) {
      // only save subdomain stuff when no project is selected
      if (!scope.currentProject) {
        scope.subdomainCache.addValueForSubdomain(
          utils.getCurrentSubdomain(), "mapCenter", scope.options.mapController.map.getView().getCenter()
        );
      }
    });

    // add hook for baselayer caching
    window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
    window.c4gMapsHooks.baselayer_changed.push(function (id) {
      // only save subdomain stuff when no project is selected
      if (!scope.currentProject) {
        scope.subdomainCache.addValueForSubdomain(utils.getCurrentSubdomain(), "baselayer", id)
      }
    });
    if (this.options.dataField && typeof this.options.dataField === 'string') {
      this.options.dataField = $(this.options.dataField) || false;
    }

    // call parent constructor
    // Sideboard.call(this, this.options);
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
    var self,
      layerStyleFunction,
      viewSelect;

    self = this;
    this.spinner.show();


    self.editLayerGroup = new ol.layer.Group({
      layers: new ol.Collection([]),
      visible: false
    });
    // self.options.mapController.map.addLayer(self.editLayerGroup);
    //   AJAX: get editor config
    let url = "con4gis/projectEditorService";
    $.getJSON(url)
    // Create views for draw-features with at least one locationstyle
      .done(function (data) {
        self.projects = data.projects;
        self.dataBaseUrl = data.dataBaseUrl;
        $(self.viewTriggerBar).hide();
        $(self.contentHeadline).hide();
        self.projectUiController.createProjectSelect();
        self.projectUiController.createNewProjectButton();
        self.projectUiController.createEditProjectButton();
        self.projectUiController.createDeleteProjectButton();
        self.topToolbar.appendChild(self.projectUiController.getButtonBar());

        // Add and activate select view
        let selectView = new EditorSelectView({editor: self});
        self.selectView = selectView;
        let drawStyles = data.drawStyles;
        self.drawStyles = drawStyles;
        self.loadLocationStyles(drawStyles, function () {
          // Draw-point view
          if (drawStyles.point.categories && drawStyles.point.categories.length > 0) {
            let pointView = new EditorDrawview({type: 'Point', categories: drawStyles.point.categories, editor: self});
            self.tabs.push(pointView.init());
          }
          // Draw-line view
          if (drawStyles.linestring.categories && drawStyles.linestring.categories.length > 0) {
            let lineView = new EditorDrawview({
              type: 'LineString',
              categories: drawStyles.linestring.categories,
              editor: self
            });
            self.tabs.push(lineView.init());
          }
          // Draw-polygon view
          if (drawStyles.polygon.categories && drawStyles.polygon.categories.length > 0) {
            let polygonView = new EditorDrawview({
              type: 'Polygon',
              categories: drawStyles.polygon.categories,
              editor: self
            });
            self.tabs.push(polygonView.init());
          }
          // Draw-circle view
          if (drawStyles.circle.categories && drawStyles.circle.categories.length > 0) {
            let circleView = new EditorDrawview({
              type: 'Circle',
              categories: drawStyles.circle.categories,
              editor: self
            });
            self.tabs.push(circleView.init());
          }
          // Draw-freehand view
          if (drawStyles.freehand.categories && drawStyles.freehand.categories.length > 0) {
            let freehandView = new EditorDrawview({
              type: 'Freehand',
              categories: drawStyles.freehand.categories,
              editor: self
            });
            self.tabs.push(freehandView.init());
          }
          self.tabs[0].activate();
          // initially hide the elements, until a project is selected
          self.toggleDrawContent();
        });
        self.tabs.push(selectView.init());
        self.cacheController = new ProjectCacheController(self);
        self.loadFromCache();
        // c4g.maps.hook = c4g.maps.hook || {};
        // c4g.maps.hook.baselayer_changed = c4g.maps.hook.baselayer_changed || [];
        // c4g.maps.hook.baselayer_changed.push(function(id) {
        //   self.cacheController.saveSettingsForProject(self.currentProject.id, "baselayer", id)
        // });
        return true;
      })
      .fail(function (data) {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the editor configuration...');
        window.alert("Bitte melden Sie sich zur Nutzung des Editors an.");
        console.error(data.responseText);
        self.close();
        return false;
      })
      .always(function () {
        self.spinner.hide();
      });
    if (opt_externalinit) {
      this.initialized = true;
    }

    return true;
  }

  /**
   * Loads general cached data and
   */
  loadFromCache() {
    let cachedSelection = this.cacheController.getSelectedProject();
    let selectedProject = null;
    // check if the project exists
    // TODO check if this if is necessary
    if (this.projects) {
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].id === cachedSelection) {
          selectedProject = this.projects[i];
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
    let locstyles = [];
    for (let key in drawStyles) {
      if (drawStyles.hasOwnProperty(key)) {
        let drawStyle = drawStyles[key];
        let categories = drawStyle.categories;
        for (let key2 in categories) {
          if (categories.hasOwnProperty(key2)) {
            let category = categories[key2];
            let elements = category.elements;
            for (let key3 in elements) {
              if (elements.hasOwnProperty(key3)) {
                let element = elements[key3];
                locstyles.push(element.styleId);
              }
            }
          }
        }
      }
    }
    if (locstyles.length > 0) {
      this.mapsInterface.proxy.locationStyleController.loadLocationStyles(locstyles, {done: callback});
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
}

// replace normal editor with this
window.c4gMapsHooks = window.c4gMapsHooks || {};
window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
window.c4gMapsHooks.mapController_addControls.push(function(params) {
  let mapController = params.mapController;
  console.log(mapController);
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


