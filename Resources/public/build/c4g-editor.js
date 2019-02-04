/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../MapsBundle/Resources/public/js/c4g-layer.js":
/*!******************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-layer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gLayer = exports.C4gLayer = function C4gLayer(layerArr) {
  _classCallCheck(this, C4gLayer);

  this.id = layerArr['id'];
  this.pid = layerArr['pid'];
  this.async_content = layerArr['async_content'];
  this.content = layerArr['content'];
  this.cssClass = layerArr['cssClass'];
  this.hide = layerArr['hide'];
  this.hide_child = layerArr['hide_child'];
  this.type = layerArr['type'];
  this.cluster = layerArr['cluster'];
  this.zoom = layerArr['zoom'];
  this.zoom_locations = layerArr['zoom_locations'];
  this.display = layerArr['display'];
  this.hasChilds = layerArr['hasChilds'];
  this.childs = layerArr['childs'];
  this.childsCount = layerArr['childsCount'];
  this.renderSpecial = layerArr['renderSpecial'];
  this.editable = true;
  this.type = layerArr['type'];
  this.locstyle = layerArr['locstyle'];
  this.name = layerArr['name'];
  this.tabId = layerArr['tabId'];
  this.split_geojson = layerArr['split_geojson'];
  this.geojson_attributes = layerArr['geojson_attributes'];
  this.geojson_zoom = layerArr['geojson_zoom'];
  this.layername = layerArr['layername'];
  this.visibleChilds = false;
  this.vectorLayer = null;
  this.hideWhenInTab = layerArr['hide_when_in_tab'];
  this.noFilter = layerArr['noFilter'];

  if (layerArr.projectId) {
    this.projectId = layerArr.projectId;
  }
  if (layerArr.popup) {
    this.popup = layerArr.popup;
  }
  this.awesomeicon = layerArr['awesomeicon'];
};

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js":
/*!**********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Language constants (en)
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var langConstantsGerman = exports.langConstantsGerman = {

  LANG: 'de',

  NAME: 'Name',
  HIDE: 'Zuklappen',
  CLOSE: 'Schließen',
  POINT: 'POI',
  FREEHAND: 'Freihand',
  LINE: 'Linie',
  POLYGON: 'Fläche',
  CIRCLE: 'Radius',
  PERIMETER: 'Umfang',
  LENGTH: 'Länge',
  SURFACEAREA: 'Flächeninhalt',
  RADIUS: 'Radius',
  REFRESH: 'Aktualisieren',
  COPY_TO_CLIPBOARD: 'In Zwischenablage kopieren',

  CTRL_ZOOM_IN: 'Vergrößern',
  CTRL_ZOOM_OUT: 'Verkleinern',
  CTRL_ZOOM_EXT: 'Maximal verkleinern',
  CTRL_ZOOM_HOME: 'Zur ursprünglichen Position',
  CTRL_ZOOM_POS: 'Zum aktuellen Standort',
  CTRL_ZOOM_SLIDER: 'Zoom Slider',
  CTRL_RESET_ROTATION: 'Rotation (touch, ctrl+shift+mouse) zurücksetzen',
  CTRL_PORTSIDE: 'Portside ein-/ausblenden',
  CTRL_ROUTER: 'Router ein-/ausblenden',
  CTRL_EDITOR: 'Editor ein-/ausblenden',
  CTRL_MEASURETOOLS: 'Messwerkzeuge ein-/ausblenden',
  CTRL_INFOPAGE: 'Infoseite ein-/ausblenden',
  CTRL_ADDITIONALPANEL: 'Panel ein-/ausblenden',
  CTRL_ACCOUNT: 'Account ein-/ausblenden',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Suche ein-/ausblenden',
  CTRL_START_SEARCH: 'Suche starten',
  CTRL_OVERVIEWMAP: 'Übersichtskarte ein-/ausblenden',
  CTRL_GEOBOOKMARKS: 'Favoriten verwalten',
  CTRL_SIDEBOARD: 'Sideboard ein-/ausblenden',
  CTRL_STARBOARD: 'Starboard ein-/ausblenden',
  CTRL_ATTRIBUTION: 'Attribution anzeigen',
  CTRL_GRID: 'Gitter ein-/ausblenden',
  CTRL_PERMALINK: 'Permalink generieren',
  CTRL_FULLSCREEN: 'Vollbildmodus ein-/ausschalten',
  CTRL_PRINT: 'Karte exportieren',

  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Messen während des Zeichnens',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freihand zeichnen',
  EDITOR_FEATURE_APPLY: 'Editieren beenden',
  EDITOR_FEATURE_DELETE: 'Element löschen',
  EDITOR_FEATURE_MODIFY: 'Element editieren / verschieben',
  EDITOR_SELECT_INFO: 'Zur Auswahl ein Element auf der Karte anklicken.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox',
  EDITOR_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Kartenelemente',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihandwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Streckenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Flächenwerkzeuge',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Kreiswerkzeuge',

  POPUP_ROUTE_FROM: 'Route von hier',
  POPUP_ROUTE_TO: 'Route hierhin',

  STARBOARD: 'Starboard',
  STARBOARD_BASELAYER: 'Basiskarten',
  STARBOARD_LAYER: 'Ebenen',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Basiskarten',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Kartenelemente',

  SIDEBOARD: 'Sideboard',

  MEASURETOOLS: 'Messwerkzeuge',
  MEASURETOOLS_INFO: 'Wählen Sie weiter unten einen Messtyp aus und starten Sie die Messung durch das Klicken auf der Karte.',
  MEASURETOOLS_INFO_ADDITIONAL: '(Einzelne Messungen können mit einem Doppelklick beendet werden.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Strecken messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Flächen messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Radius messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand messen',

  GEOBOOKMARKS_PLACEHOLDER: 'Neue Bezeichnung',

  INFOPAGE: 'Informationen',
  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Panel anzeigen',
  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Account anzeigen',

  SEARCH_NOT_FOUND: 'Die Lokation konnte nicht gefunden werden. Bitte versuchen Sie eine andere Eingabe.',

  NONE: '' // last line
};

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-en.js":
/*!**********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-en.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Language constants (en)
 */
var langConstantsEnglish = exports.langConstantsEnglish = {

  LANG: 'en',

  NAME: 'Name',
  HIDE: 'Hide',
  CLOSE: 'Close',
  POINT: 'POI',
  FREEHAND: 'freehand',
  LINE: 'Line',
  POLYGON: 'Area',
  CIRCLE: 'Radius',
  PERIMETER: 'Perimeter',
  LENGTH: 'Length',
  SURFACEAREA: 'Surface area',
  RADIUS: 'Radius',
  REFRESH: 'Refresh',
  COPY_TO_CLIPBOARD: 'Copy to clipboard',

  CTRL_ZOOM_IN: 'Zoom in',
  CTRL_ZOOM_OUT: 'Zoom out',
  CTRL_ZOOM_EXT: 'Fit to extent',
  CTRL_ZOOM_HOME: 'jump to initial position',
  CTRL_ZOOM_POS: 'jump to browser/device position',
  CTRL_ZOOM_SLIDER: 'Zoom slider',
  CTRL_RESET_ROTATION: 'Reset rotation (touch, ctrl+shift+mouse)',
  CTRL_PORTSIDE: 'Toggle portside',
  CTRL_EDITOR: 'Toggle editor',
  CTRL_MEASURETOOLS: 'Toggle measuretools',
  CTRL_INFOPAGE: 'Toggle infopage',
  CTRL_ADDITIONALPANEL: 'Toggle panel',
  CTRL_ACCOUNT: 'Toggle account',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Toggle geosearch',
  CTRL_START_SEARCH: 'start search',
  CTRL_OVERVIEWMAP: 'Toggle overviewmap',
  CTRL_GEOBOOKMARKS: 'Manage favorites',
  CTRL_SIDEBOARD: 'Toggle sideboard',
  CTRL_STARBOARD: 'Toggle starboard',
  CTRL_ATTRIBUTION: 'Show attribution',
  CTRL_GRID: 'Toggle grid',
  CTRL_PERMALINK: 'Generate Permalink',
  CTRL_FULLSCREEN: 'Toggle fullscreen-mode',
  CTRL_PRINT: 'Export map',

  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Measure while drawing',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freehand draw',
  EDITOR_FEATURE_APPLY: 'End modification',
  EDITOR_FEATURE_DELETE: 'Delete feature',
  EDITOR_FEATURE_MODIFY: 'Modify feature',
  EDITOR_SELECT_INFO: 'Click an element on the map to select it.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[ctrl] + [click] for multiselect <br>[shift] for boxselect',
  EDITOR_VIEW_TRIGGER_SELECT: 'Select-mode',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Add POIs',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Draw freehand',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Add tracks',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Add areas',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Add circles',

  STARBOARD: 'Starboard',
  STARBOARD_BASELAYER: 'Baselayer',
  STARBOARD_LAYER: 'Layer',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Baselayerswitcher',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Layerswitcher',

  POPUP_ROUTE_FROM: 'Route from here',
  POPUP_ROUTE_TO: 'Route to here',

  MEASURETOOLS: 'Measuretools',
  MEASURETOOLS_INFO: 'Select a measuretype below and start measuring by clicking on the map.',
  MEASURETOOLS_INFO_ADDITIONAL: '(To stop a measurement, double-click on the map.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Select-mode',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Measure tracks',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Measure areas',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Measure radius',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Measure freehand',

  GEOBOOKMARKS_PLACEHOLDER: 'Enter new caption',

  INFOPAGE: 'Infopage',
  INFOPAGE_VIEW_TRIGGER: 'Show informations',

  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Show panel',

  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Show account',

  SEARCH_NOT_FOUND: 'Location not found. Sorry... :(',

  NONE: '' // last line
};

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-constant.js":
/*!**************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-constant.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cssConstants = exports.cssConstants = {

  OPEN: 'c4g-open',
  CLOSE: 'c4g-close',
  CLOSEABLE: 'c4g-closeable',
  ENABLED: 'c4g-enabled',
  DISABLED: 'c4g-disabled',
  HIDE: 'c4g-hide',
  ICON: 'c4g-icon',
  CONTROL: 'c4g-control',
  COPY: 'c4g-copy',
  REFRESH: 'c4g-refresh',
  ACTIVE: 'c4g-active',
  INACTIVE: 'c4g-inactive',
  LOADING: 'c4g-loading',
  ANIMATION_SPIN: 'c4g-animation-spin',
  LARGE: 'c4g-large',
  SMALL: 'c4g-small',
  HORIZONTAL: 'c4g-horizontal',
  VERTICAL: 'c4g-vertical',

  ATTRIBUTION_LOGO: 'c4g-attribution-logo',
  CONTROL_CONTAINER_TL: 'c4g-control-container-top-left',
  CONTROL_CONTAINER_TR: 'c4g-control-container-top-right',
  CONTROL_CONTAINER_BL: 'c4g-control-container-bottom-left',
  CONTROL_CONTAINER_BL_SUB: 'c4g-control-container-bottom-left-sub',
  CONTROL_CONTAINER_BR: 'c4g-control-container-bottom-right',
  EDITOR_DRAW_CONTENT_POINT: 'c4g-draw-content-point',
  EDITOR_DRAW_CONTENT_FREEHAND: 'c4g-draw-content-freehand',
  EDITOR_DRAW_CONTENT_LINESTRING: 'c4g-draw-content-line',
  EDITOR_DRAW_CONTENT_POLYGON: 'c4g-draw-content-polygon',
  EDITOR_DRAW_CONTENT_CIRCLE: 'c4g-draw-content-circle',
  EDITOR_DRAW_CONTENT_PROJECT: 'c4g-draw-content-project',
  EDITOR_DRAW_TRIGGER: 'c4g-draw-trigger',
  EDITOR_CONTENT_SELECT: 'c4g-content-select',
  EDITOR_DRAW_OPTIONS: 'c4g-editor-draw-options',
  EDITOR_FEATURE_APPLY: 'c4g-editor-feature-apply',
  EDITOR_FEATURE_DELETE: 'c4g-editor-feature-delete',
  EDITOR_FEATURE_MODIFY: 'c4g-editor-feature-modify',
  EDITOR_VIEW_TRIGGER_SELECT: 'c4g-editor-view-trigger-select',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'c4g-editor-view-trigger-draw-point',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-editor-view-trigger-draw-freehand',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-editor-view-trigger-draw-line',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-editor-view-trigger-draw-polygon',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-editor-view-trigger-draw-circle',
  GEOSEARCH: 'c4g-geosearch',
  GEOSEARCH_WRAPPER: 'c4g-geosearch-wrapper',
  GEOSEARCH_TRIGGER: 'c4g-geosearch-trigger',
  GEOSEARCH_START: 'c4g-geosearch-start',
  GRATICULE: 'c4g-graticule',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'c4g-measuretools-view-trigger-select',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-measuretools-view-trigger-draw-line',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-measuretools-view-trigger-draw-polygon',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-measuretools-view-trigger-draw-circle',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-measuretools-view-trigger-draw-freehand',
  PRINT: 'c4g-print',
  INFOPAGE_VIEW_TRIGGER: 'c4g-infopage-view-trigger',
  INFOPAGE: 'c4g-infopage',
  ADDITIONALPANEL_VIEW_TRIGGER: 'c4g-additionalpanel-view-trigger',
  ADDITIONALPANEL: 'c4g-additionalpanel',
  ACCOUNT_VIEW_TRIGGER: 'c4g-account-view-trigger',
  ACCOUNT: 'c4g-account',
  OVERVIEWMAP: 'c4g-overviewmap',
  OVERVIEWMAP_WRAPPER: 'c4g-overviewmap-wrapper',
  GEOBOOKMARKS: 'c4g-geobookmarks',
  PERMALINK: 'c4g-permalink',
  PERMALINK_POPUP: 'c4g-permalink-popup',
  POPUP_CLOSE: 'c4g-popup-close',
  POPUP_ROUTE_WRAPPER: 'c4g-popup-route-wrapper',
  POPUP_ROUTE_FROM: 'c4g-popup-route-from',
  POPUP_ROUTE_TO: 'c4g-popup-route-to',
  PORTSIDE: 'c4g-portside',
  PORTSIDE_CONTAINER: 'c4g-portside-container',
  PORTSIDE_CONTROL: 'c4g-portside-control',
  PORTSIDE_WRAPPER: 'c4g-portside-wrapper',
  PORTSIDE_TITLEBAR: 'c4g-portside-titlebar',
  PORTSIDE_TOP_TOOLBAR: 'c4g-portside-top-toolbar',
  PORTSIDE_CONTENT_CONTAINER: 'c4g-portside-content-container',
  PORTSIDE_BOTTOM_TOOLBAR: 'c4g-portside-bottom-toolbar',
  PORTSIDE_STATUSBAR: 'c4g-portside-statusbar',
  PORTSIDE_VIEWTRIGGERBAR: 'c4g-portside-viewtriggerbar',
  PORTSIDE_HEADLINE: 'c4g-portside-headline',
  PORTSIDE_BUTTONBAR: 'c4g-portside-buttonbar',
  PORTSIDE_BUTTON: 'c4g-portside-button',
  PORTSIDE_HIDE: 'c4g-portside-hide',
  PORTSIDE_CLOSE: 'c4g-portside-close',
  SPINNER: 'c4g-spinner',
  STARBOARD: 'c4g-starboard',
  STARBOARD_CONTAINER: 'c4g-starboard-container',
  STARBOARD_CONTROL: 'c4g-starboard-control',
  STARBOARD_WRAPPER: 'c4g-starboard-wrapper',
  STARBOARD_TITLEBAR: 'c4g-starboard-titlebar',
  STARBOARD_CONTENT_CONTAINER: 'c4g-starboard-content-container',
  STARBOARD_BOTTOM_TOOLBAR: 'c4g-starboard-bottom-toolbar',
  STARBOARD_STATUSBAR: 'c4g-starboard-statusbar',
  STARBOARD_VIEWTRIGGERBAR: 'c4g-starboard-viewtriggerbar',
  STARBOARD_HEADLINE: 'c4g-starboard-headline',
  STARBOARD_BUTTONBAR: 'c4g-starboard-buttonbar',
  STARBOARD_BUTTON: 'c4g-starboard-button',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'c4g-starboard-view-trigger-baselayerswitcher',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'c4g-starboard-view-trigger-layerswitcher',
  STARBOARD_CLOSE: 'c4g-starboard-close',
  STARBOARD_CONTENT_BASELAYERSWITCHER: 'c4g-content-baselayerswitcher',
  STARBOARD_BASELAYERTREE: 'c4g-baselayertree',
  STARBOARD_LAYERTREE: 'c4g-layertree',
  STARBOARD_CONTENT_LAYERSWITCHER: 'c4g-content-layerswitcher',
  TOOLTIP_POPUP: 'c4g-tooltip-popup',
  ZOOM_LEVEL: 'c4g-zoom-level',

  OL_CONTROL: 'ol-control',
  OL_UNSELECTABLE: 'ol-unselectable',

  OL_OVERLAYCONTAINER: 'ol-overlaycontainer',
  OL_OVERLAYCONTAINER_SE: 'ol-overlaycontainer-stopevent',
  OL_VIEWPORT: 'ol-viewport',
  OL_ZOOM: 'ol-zoom',
  OL_ZOOM_IN: 'ol-zoom-in',
  OL_ZOOM_EXT: 'ol-zoom-extent',
  OL_ZOOM_HOME: 'ol-zoom-home',
  OL_ZOOM_POS: 'ol-zoom-position',
  OL_ZOOM_WITH_EXT: 'ol-zoom-with-extent',
  OL_ZOOM_WITH_HOME: 'ol-zoom-with-home',
  OL_ZOOM_WITH_POS: 'ol-zoom-with-position',
  OL_ZOOM_SLIDER: 'ol-zoom-slider',
  OL_ZOOM_WITH_SLIDER: 'ol-zoom-with-slider',

  NONE: '' // last line
};

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-control-sideboard.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-control-sideboard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sideboard = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsMiscSpinner = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "../MapsBundle/Resources/public/js/c4g-maps-misc-spinner.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "../MapsBundle/Resources/public/js/c4g-maps-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

"use strict";
/**
 * Base class for sideboard structures. Provides standard configurations which are equal for each sideboard element.
 */

var Sideboard = exports.Sideboard = function (_ol$control$Control) {
  _inherits(Sideboard, _ol$control$Control);

  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              options  misc configuration options
   *
   */
  function Sideboard(options) {
    _classCallCheck(this, Sideboard);

    var _this = _possibleConstructorReturn(this, (Sideboard.__proto__ || Object.getPrototypeOf(Sideboard)).call(this, options));

    _this.options = $.extend({
      create: true,
      extDiv: false,
      defaultOpen: false,
      mapController: undefined,
      name: 'sideboard',
      direction: 'right'
    }, options);

    //active Identifier (which side is this element on?)
    //cssname needed to set the css class correctly
    switch (_this.options.direction) {
      case 'left':
        _this.identifier = 'Portside';
        _this.cssname = 'portside';
        break;
      case 'right':
        _this.identifier = 'Starboard';
        _this.cssname = 'starboard';
        break;
    }
    //this.cssname = this.identifier.charAt(0).toLowerCase() + this.identifier.slice(1);
    _this.initialized = false;
    _this.options.tipLabel = _this.options.tipLabel || _this.options.headline || _c4gMapsI18n.langConstants.CTRL_SIDEBOARD;
    _this.container = document.createElement('div');
    _this.element = document.createElement('div');
    _this.button = undefined;
    _this.spinner = undefined;
    // mainstructure elements
    _this.wrapper = undefined;
    _this.titleBar = undefined;
    _this.headline = undefined;
    _this.topToolbar = undefined;
    _this.contentContainer = undefined;
    _this.bottomToolbar = undefined;
    _this.statusBar = undefined;

    _this.sections = [];
    _this.viewTriggerBar = undefined;
    _this.views = [];
    _this.activeView = undefined;
    _this.pausedView = undefined;

    if (_this.options.create && _this.options.mapController) {
      _this.create();
    }

    // inheritance-stuff
    // ol.control.Control.call(this, {
    //   element: element,
    //   target: options.target
    // });
    return _this;
  }

  _createClass(Sideboard, [{
    key: "create",


    /**
     * Creates the basic html-elements for the sideboard
     *
     * @return  {boolean}  'true' on success
     */
    value: function create() {
      var self, initClass, titleButtonBar, closeButton, capitalizedName, hideButton, caching;

      caching = this.options.caching;
      capitalizedName = _c4gMapsUtils.utils.capitalizeFirstLetter(this.options.name);
      self = this;

      // Do not hide when it is initialized open, or in an external div
      if (this.options.extDiv) {
        initClass = ' ' + _c4gMapsConstant.cssConstants.OPEN;
        // if (caching) {
        //     utils.storeValue(this.options.name, '1');
        // }
      } else {
        initClass = ' ' + _c4gMapsConstant.cssConstants.CLOSE;
        // if (caching) {
        //     utils.storeValue(this.options.name, '0');
        // }
        this.options.mapController["active" + this.identifier] = this.options.mapController["active" + this.identifier] || false;

        this.button = document.createElement('button');
        $(this.button).on('click', function (event) {
          event.stopPropagation();
          // loose focus, otherwise it looks messy
          try {
            this.blur();
          } catch (e) {
            // [note] "this.blur()" does not work in IE-fullscreen-mode
            console.warn(e.name + ': ' + e.message);
          }
          if (capitalizedName == "Router" || capitalizedName == "Measure" || capitalizedName == "Editor") {
            self.toggle(true);
          } else {
            self.toggle();
          }
        });
        this.button.title = this.options.tipLabel;
        this.element.appendChild(this.button);
      }

      // Set attributes
      $(this.container).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-container' + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + initClass);
      $(this.element).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-control' + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE + ' ' + _c4gMapsConstant.cssConstants.OL_CONTROL + initClass);

      // Set initial dimensions
      if (this.options.direction === 'right') {
        //this.container.style.minWidth = '250px';
        //this.container.style[this.options.direction] = '-1920px';
        this.container.style[this.options.direction] = '-100%';
      } else {
        //this.container.style.minWidth = '250px';
        //this.container.style[this.options.direction] = '-1920px';
        this.container.style[this.options.direction] = '-100%';
      }

      // Place container
      if (this.options.extDiv) {
        document.getElementById(this.options.extDiv).appendChild(this.container);
        //     this.options.mapController["active" + this.identifier] = this;
      } else {
        if (this.options.direction === 'left') {
          $('#' + this.options.mapController.map.getTarget() + ' > div > div.' + _c4gMapsConstant.cssConstants.OL_OVERLAYCONTAINER_SE).append(this.container);
        } else {
          this.options.mapController.$overlaycontainer_stopevent.append(this.container);
        }
      }

      // Build content-area
      //
      // Wrapper
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'c4g-' + this.cssname + '-wrapper';
      this.container.appendChild(this.wrapper);
      // Titlebar
      this.titleBar = document.createElement('div');
      this.titleBar.className = 'c4g-' + this.cssname + '-titlebar';
      this.wrapper.appendChild(this.titleBar);

      // Triggerbar
      this.viewTriggerBar = document.createElement('div');
      this.viewTriggerBar.className = 'c4g-' + this.cssname + '-viewtriggerbar';

      // Top-Toolbar
      this.topToolbar = this.addSection({
        className: 'c4g-' + this.cssname + '-top-toolbar',
        target: this.wrapper
      });

      // Content-Container
      this.contentContainer = this.addSection({
        className: 'c4g-' + this.cssname + '-content-container',
        target: this.wrapper
      });

      // add content headline
      this.contentHeadline = document.createElement('div');
      this.contentHeadline.className = 'contentHeadline';
      this.contentHeadline.innerHTML = '';
      this.contentContainer.appendChild(this.contentHeadline);

      // Bottom-Toolbar
      this.bottomToolbar = this.addSection({
        className: 'c4g-' + this.cssname + '-bottom-toolbar c4g-close',
        target: this.wrapper
      });

      // Statusbar
      this.statusBar = document.createElement('div');
      this.statusBar.className = 'c4g-' + this.cssname + '-statusbar c4g-close';
      this.wrapper.appendChild(this.statusBar);

      // Add spinner
      this.spinner = new _c4gMapsMiscSpinner.Spinner({
        target: this.contentContainer,
        className: _c4gMapsConstant.cssConstants.LARGE
      });

      // Fill titlebar
      //
      // Headline
      this.headline = document.createElement('span');
      this.headline.className = 'c4g-' + this.cssname + '-headline';
      this.headline.innerHTML = this.options.headline;
      this.titleBar.appendChild(this.headline);
      // Buttonbar
      titleButtonBar = document.createElement('div');
      titleButtonBar.className = _c4gMapsConstant.cssConstants.CONTROL + ' ' + 'c4g-' + this.cssname + '-buttonbar';
      this.titleBar.appendChild(titleButtonBar);

      if (this.options.direction === 'left') {
        // Hidebutton
        hideButton = document.createElement('button');
        hideButton.className = _c4gMapsConstant.cssConstants.PORTSIDE_HIDE;
        hideButton.title = _c4gMapsI18n.langConstants.HIDE;
        $(hideButton).click(function (event) {
          event.preventDefault();
          self.close(true);
          return false;
        });
        titleButtonBar.appendChild(hideButton);
      }

      // Closebutton
      closeButton = document.createElement('button');
      closeButton.className = 'c4g-' + this.cssname + '-close';
      closeButton.title = _c4gMapsI18n.langConstants.CLOSE;
      $(closeButton).click(function (event) {
        event.preventDefault();
        self.close();
        return false;
      });
      titleButtonBar.appendChild(closeButton);

      //Add spinner for left sided sideboard elements
      this.spinner = new _c4gMapsMiscSpinner.Spinner({
        target: this.contentContainer,
        className: _c4gMapsConstant.cssConstants.LARGE
      });

      // Handle external DIV and default state
      // catch touch events and stop their propagation
      // otherwise touch-scrolling will be stopped by ol3
      $(this.container).on('touchstart touchmove touchend', function (event) {
        event.stopPropagation();
      });

      // Bind the update method to the map-resize event
      this.options.mapController.map.on('change:size', this.update, this);

      // Show open if desired
      if (this.options.defaultOpen || this.options.caching && _c4gMapsUtils.utils.getValue(this.options.name) == '1') {
        this.open();
      }

      return true;
    } // end of "create"

    /**
     *   Update the sideboards html-elements
     *   resizes the content-container
     *   and the top-toolbar
     *
     * @param  {event-object}  opt_event  *optional*  Just needed by the ol-bind-method,
     *                                                but not used in the function
     */

  }, {
    key: "update",
    value: function update(opt_event) {

      var self, contentContainerOuterHeight, containerOffsetWidth;

      self = this;

      /*
      if (this.options && this.options.name) {
          capitalizedName = utils.capitalizeFirstLetter(this.options.name);
      }*/

      contentContainerOuterHeight = $(this.wrapper).height() - ($(this.titleBar).outerHeight(true) + $(this.statusBar).outerHeight(true));
      if (this.options && this.options.direction && this.options.direction != "undefined" && this.options.direction === 'left') {
        if (this !== this.options.mapController["active" + this.identifier]) {
          containerOffsetWidth = 0;
        }
      }

      // Top-Toolbar
      if (this.topToolbar) {
        if (this.topToolbar.innerHTML) {
          // this.topToolbar.style.display = 'block';
          this.topToolbar.style.display = '';
          contentContainerOuterHeight -= $(this.topToolbar).outerHeight(true);
        } else {
          this.topToolbar.style.display = 'none';
        }
      }

      // Bottom-toolbar
      if (this.bottomToolbar) {
        if (this.bottomToolbar.innerHTML) {
          // this.bottomToolbar.style.display = 'block';
          this.bottomToolbar.style.display = '';
          contentContainerOuterHeight -= $(this.bottomToolbar).outerHeight(true);
        } else {
          this.bottomToolbar.style.display = 'none';
        }
      }

      // Content-container
      $(this.contentContainer).outerHeight(contentContainerOuterHeight);

      // Correct width
      if (this.options) {
        if (this.options.mapController["active" + this.identifier] === this) {
          //this.container.style.width = 'auto';
          containerOffsetWidth = this.container.offsetWidth;
          this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
            $(element).css(self.options.direction, containerOffsetWidth);
          });

          //only move the toggle button on starboard elements
          if (this.options.direction === 'right') {
            $(this.element).css(this.options.direction, containerOffsetWidth);
          }
        }
      }
    } // end of "update"

    /**
     * Opens this sideboard element
     *
     * @param   {object}    *optional* options to be passed to the initialize-function if it exists
     * @return  {boolean}  'true' an success
     */

  }, {
    key: "open",
    value: function open(opt_options) {
      var containerOffsetWidth, self;

      self = this;

      // Call initialize-functions, if existent
      if (!this.initialized) {
        if (typeof this.init === 'function') {
          this.initialized = this.init(opt_options);
        } else {
          this.initialized = true;
        }
      }

      // call preOpenFunctions
      if (typeof this.preOpenFunction === 'function') {
        this.preOpenFunction();
      }

      containerOffsetWidth = this.container.offsetWidth;

      if (this.options.extDiv) {
        // Not available on external divs
        console.warn('You cannot use this function on external embedded sideboard.');
      } else {
        if (this.options.mapController["active" + this.identifier]) {
          if (this.options.mapController["active" + this.identifier] === this) {
            return false;
          }
          //close other active sideboard on this side
          this.options.mapController["active" + this.identifier].close(true, true);
        } else {
          // slide other elements when no other sideboard was active on this side
          this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
            $(element).css(self.options.direction, containerOffsetWidth);
          });
        }

        $(this.container).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN).css(this.options.direction, 0);
        if (this.options.direction === 'left') {
          $(this.element).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        } else {
          $(this.element).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN).css(this.options.direction, containerOffsetWidth);
        }

        // set this as active Sideboard
        this.options.mapController["active" + this.identifier] = this;

        // check if a view needs to be reactivated
        if (this.activeView) {
          this.activeView.activate();
        }

        if ($(this.statusBar).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
          $(this.statusBar).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        }

        if ($(this.bottomToolbar).hasClass(_c4gMapsConstant.cssConstants.CLOSE)) {
          $(this.bottomToolbar).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
        }

        // show container to fix resizing issue
        $(this.container).css('visibility', 'visible');

        this.update();
        if (this.options.caching) {
          _c4gMapsUtils.utils.storeValue(this.options.name, '1');
        }

        // call postOpenFunctions
        if (typeof this.postOpenFunction === 'function') {
          this.postOpenFunction();
        }

        return true;
      }
      return false;
    } // end of "open"

  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.options.mapController["active" + this.identifier] && this.options.mapController["active" + this.identifier] === this;
    }

    /**
     * Closes this sideboard element
     *
     * @param   {boolean}  opt_hide               *optional* Choose if this function should trigger |preHideFunction|
     *                                            instead of |preCloseFunction|. Default is |false|.
     * @param   {boolean}  opt_openOtherSideboard  *optional* Indicates if another sideboard element will be opened instead.
     *                                            Default is |false|.
     *
     * @return  {boolean}                         |true| on success.
     */

  }, {
    key: "close",
    value: function close(opt_hide, opt_openOtherSideboard) {
      var containerOffsetWidth, direction;

      direction = this.options.direction;

      if (opt_hide) {
        if (typeof this.preHideFunction === 'function') {
          this.preHideFunction();
        }
      } else {
        if (typeof this.preCloseFunction === 'function') {
          this.preCloseFunction();
        }
      }

      containerOffsetWidth = this.container.offsetWidth;

      if (this.options.extDiv) {
        // Not available on external divs
        console.warn('You cannot use this function on external embedded sideboard.');
      } else {
        if (this.options.mapController["active" + this.identifier] !== this) {
          console.warn('This ' + this.options.name + '-element (' + this.options.name + ') is already closed.');
          return false;
        }
        $(this.container).removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE).css(direction, -containerOffsetWidth);
        $(this.element).removeClass(_c4gMapsConstant.cssConstants.OPEN).addClass(_c4gMapsConstant.cssConstants.CLOSE).css(direction, 0);

        if (!opt_openOtherSideboard) {
          // slide other elements
          this.options.mapController[direction + "SlideElements"].forEach(function (element) {
            $(element).css(direction, 0);
          });
        }

        // hide container to fix resizing issue
        $(this.container).css('visibility', 'hidden');

        // check if a view needs to be deactivated
        if (this.activeView) {
          this.activeView.deactivate(true);
        }

        // Remove active Sideboardentry
        this.options.mapController["active" + this.identifier] = false;

        if (this.options.caching) {
          _c4gMapsUtils.utils.storeValue(this.options.name, '0');
        }
        return true;
      }
      return false;
    } // end of "close"

    /**
     * Toggle this sideboard element
     *
     * @return  {boolean}  Returns |true| on success.
     */

  }, {
    key: "toggle",
    value: function toggle(opt_hide) {
      if (this.options.mapController["active" + this.identifier] === this) {
        return this.close(opt_hide);
      }
      return this.open();
    } // end of "toggle"

    /**
     * Creates a button which characteristics are defined by the options parameter
     * These options include e.g. the target container where the button will be appended and the click action of the button
     *
     * @param   {object}  opt_options  The button configuration
     *
     * @return  {[type]}           [description]
     */

  }, {
    key: "makeButton",
    value: function makeButton(opt_options) {

      var options, button;

      options = $.extend({
        label: undefined,
        tipLabel: undefined,
        className: '',
        target: undefined,
        clickAction: undefined
      }, opt_options);

      if (options.className) {
        options.className = ' ' + options.className;
      }

      button = document.createElement('button');
      button.className = 'c4g-' + this.options.name + '-button' + options.className;
      if (options.id) {
        button.id = options.id;
      }

      if (typeof options.tipLabel === 'string') {
        button.title = options.tipLabel;
      }

      if (typeof options.label === 'string') {
        button.innerHTML = options.label;
      } else if (_typeof(options.label) === 'object') {
        button.appendChild(options.label);
      }

      if (typeof options.clickAction === 'function') {
        $(button).click(function () {
          try {
            this.blur();
          } catch (e) {
            console.warn(e.message);
          }
          options.clickAction();
        });
      }

      if (options.target) {
        $(options.target).append(button);
      }

      return button;
    } // end of "makeButton"

    /**
     * @TODO
     * [addSection description]
     *
     * @param  {[type]}  opt_options  [description]
     */

  }, {
    key: "addSection",
    value: function addSection(opt_options) {

      var options, section, element;

      options = $.extend({
        type: 'div',
        className: '',
        target: undefined
      }, opt_options);

      // try to create the new section
      try {
        section = document.createElement(options.type);
      } catch (e) {
        console.warn('Cannot create section. "' + options.type + ' is not a valid HTML-node.');
        return false;
      }

      section.className = options.className;

      // try to append the section to the given target
      if (options.target) {
        try {
          options.target.appendChild(section);
        } catch (e) {
          console.warn(e.message);
        }
      }

      section.getElement = function () {
        return element || false;
      };

      section.setElement = function (newElement) {
        if (newElement && (typeof newElement === "undefined" ? "undefined" : _typeof(newElement)) === 'object') {
          if (!(element && element === newElement)) {
            if (element) {
              this.removeChild(element);
            }
            this.appendChild(newElement);
            element = newElement;
          }
        }
      };

      // add to sections-array
      this.sections.push(section);
      return section;
    } // end of "addSection"

    /**
     * @TODO
     * [addView description]
     *
     * @param  {[type]}  options  [description]
     */

  }, {
    key: "addView",
    value: function addView(options, opt_viewScope) {

      var self, viewScope, additionalTriggerClass, trigger, view;

      self = this;
      viewScope = opt_viewScope || this;

      options = $.extend({
        // name: undefined,
        triggerConfig: undefined, // @TODO doku format: {opt_target: [string|htmlObject], opt_className: [string], opt_tipLabel: [string]}
        sectionElements: [], // @TODO doku format: [{section: [sectionObject], element: [elementObject]}]
        initFunction: undefined,
        activateFunction: undefined,
        deactivateFunction: undefined
      }, options);

      if (typeof options.name !== 'string') {
        console.warn('Cannot add a view without a name (of type "string").');
        return false;
      }

      view = {};

      view.initialized = false;
      view.paused = false;

      view.activate = function (opt_openSideboard) {
        var i;

        if (options.triggerConfig.withHeadline) {
          self.contentHeadline.innerHTML = options.triggerConfig.tipLabel;
        }

        // open Sideboard if closed
        if (opt_openSideboard && !self.isOpen()) {
          self.open();
        }

        // Deactivate current activeView, if existent
        if (_typeof(viewScope.activeView) === 'object' && viewScope.activeView !== view) {
          viewScope.activeView.deactivate();
        }
        viewScope.activeView = view;

        // Handle sub-views
        if (view.activeView) {
          view.activeView.activate();
        }

        // Call initialize-functions, if existent
        if (!view.initialized) {
          if (typeof options.initFunction === 'function') {
            view.initialized = options.initFunction();
          } else {
            view.initialized = true;
          }
        }

        // Display elements in given sections
        if (options.sectionElements && options.sectionElements.length > 0) {
          for (i = 0; i < options.sectionElements.length; i += 1) {
            options.sectionElements[i].section.setElement(options.sectionElements[i].element);
          }
        }

        // Change trigger-state, if existent
        if (trigger) {
          $(trigger).addClass('c4g-active');
        }

        // Call activate function, if existent
        if (typeof options.activateFunction === 'function') {
          if (!options.activateFunction(view.paused)) {
            return false;
          }
        }

        view.paused = false;
        self.update();
        return true;
      };

      view.deactivate = function (opt_pause) {

        view.paused = opt_pause || false;

        if (_typeof(viewScope.activeView) === 'object' && viewScope.activeView === view) {
          if (trigger && !view.paused) {
            $(trigger).removeClass('c4g-active');
          }

          // Handle sub-views
          if (view.activeView) {
            view.activeView.deactivate(view.paused);
          }

          // Call deactivate function, if existent
          if (typeof options.deactivateFunction === 'function') {
            return options.deactivateFunction(view.paused);
          }
        }

        return true;
      };

      if (_typeof(options.triggerConfig) === 'object') {
        options.triggerConfig = $.extend({
          target: this.viewTriggerBar,
          tipLabel: options.name
        }, options.triggerConfig);

        options.triggerConfig.clickAction = view.activate;
        if (options.triggerConfig.className) {
          additionalTriggerClass = ' ' + options.triggerConfig.className;
        } else {
          additionalTriggerClass = '';
        }
        options.triggerConfig.className = _c4gMapsConstant.cssConstants.ICON + additionalTriggerClass;
        trigger = this.makeButton(options.triggerConfig);
      }

      this.views.push(view);
      return view;
    } // end of "addView"

  }]);

  return Sideboard;
}(ol.control.Control); // end of "add methods"

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-control-zoomlevel.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-control-zoomlevel.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Zoomlevel = undefined;

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Zoomlevel = exports.Zoomlevel = function (_ol$control$Control) {
  _inherits(Zoomlevel, _ol$control$Control);

  function Zoomlevel(options) {
    _classCallCheck(this, Zoomlevel);

    var _this = _possibleConstructorReturn(this, (Zoomlevel.__proto__ || Object.getPrototypeOf(Zoomlevel)).call(this, options));

    var self, element, updateZoomlevel;

    self = _this;

    if (!options || !options.mapController) {
      var _ret;

      console.warn('Zoomlevel control needs to know the map.');
      return _ret = false, _possibleConstructorReturn(_this, _ret);
    }

    // default options
    options = $.extend({
      className: _c4gMapsConstant.cssConstants.ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    var mapView = options.mapController.map.getView();

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = mapView.getZoom();

    updateZoomlevel = function updateZoomlevel() {
      element.innerHTML = parseInt(mapView.getZoom());
    };

    options.mapController.map.getView().on('change:resolution', function () {
      updateZoomlevel();
    });

    _this.view = mapView;

    // inheritance-stuff
    ol.control.Control.call(_this, {
      element: element,
      target: options.target
    });
    return _this;
  }

  return Zoomlevel;
}(ol.control.Control);

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-i18n.js":
/*!**********************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-i18n.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.langConstants = undefined;

var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js");

var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-en.js");

/**
 *  This script imports all different languages and exports the one that is valid for the configured language.
 */
var language = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    language = _c4gMapsConstantI18nDe.langConstantsGerman;
  } else if (mapData.lang === "en") {
    language = _c4gMapsConstantI18nEn.langConstantsEnglish;
  } else {
    // fallback
    language = _c4gMapsConstantI18nEn.langConstantsEnglish;
  }
} else {
  language = _c4gMapsConstantI18nEn.langConstantsEnglish;
}

var langConstants = exports.langConstants = language;

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-misc-spinner.js":
/*!******************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-misc-spinner.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var Spinner = exports.Spinner = function () {

  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function Spinner(opt_options) {
    _classCallCheck(this, Spinner);

    var options, target, spinnerSpan;

    options = opt_options || {};

    // default options
    options = $.extend({
      className: '',
      target: '.' + _c4gMapsConstant.cssConstants.OL_VIEWPORT
    }, options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    this.element = document.createElement('div');
    this.element.className = _c4gMapsConstant.cssConstants.SPINNER + options.className + ' ' + _c4gMapsConstant.cssConstants.HIDE;
    $(options.target).append(this.element);

    spinnerSpan = document.createElement('span');
    spinnerSpan.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);

    this.additionalActivationCounter = 0;
  }

  _createClass(Spinner, [{
    key: 'show',
    value: function show() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        $(this.element).removeClass(_c4gMapsConstant.cssConstants.HIDE);
      } else {
        this.additionalActivationCounter += 1;
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        //console.warn('Spinner is already hidden.');
      } else {
        if (this.additionalActivationCounter === 0) {
          $(this.element).addClass(_c4gMapsConstant.cssConstants.HIDE);
        } else {
          this.additionalActivationCounter -= 1;
        }
      }
    }
  }]);

  return Spinner;
}();

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-misc-tooltippopup.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-misc-tooltippopup.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipPopUp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var TooltipPopUp = exports.TooltipPopUp = function () {

  /**
   * @TODO
   * [TooltipPopUp description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function TooltipPopUp(opt_options) {
    _classCallCheck(this, TooltipPopUp);

    var self, addClassName, closeButton;

    self = this;
    this.options = opt_options || {};

    // default options
    this.options = $.extend({
      // className: ''
      // closeFunction: null
      // map: null
      horizontal: false,
      closeable: false,
      offset: [1, -1],
      position: [0, 0]
    }, this.options);

    // prepare additional classes
    addClassName = '';
    if (this.options.className) {
      addClassName = ' ' + this.options.className;
    }
    if (this.options.horizontal) {
      addClassName += ' ' + _c4gMapsConstant.cssConstants.HORIZONTAL;
    }
    if (this.options.closeable) {
      addClassName += ' ' + _c4gMapsConstant.cssConstants.CLOSEABLE;
    }

    this.element = document.createElement('div');
    this.element.className = _c4gMapsConstant.cssConstants.TOOLTIP_POPUP + addClassName;

    if (this.options.closeable) {
      closeButton = document.createElement('button');
      closeButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_CLOSE;
      this.element.appendChild(closeButton);

      $(closeButton).click(function () {
        self.close();
      });
    }

    this.contentContainer = document.createElement('div');
    this.element.appendChild(this.contentContainer);

    this.overlay = new ol.Overlay({
      element: this.element,
      insertFirst: false,
      offset: this.options.offset,
      positioning: 'bottom-left'
    });

    if (this.options.map) {
      this.options.map.addOverlay(this.overlay);
    }

    if (this.options.position) {
      this.overlay.setPosition(this.options.position);
    }
  }

  _createClass(TooltipPopUp, [{
    key: 'close',
    value: function close() {
      if (typeof this.options.closeFunction === 'function') {
        this.options.closeFunction();
      }

      if (this.options.map) {
        this.options.map.removeOverlay(this.overlay);
      }
    }

    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: 'show',
    value: function show() {
      if ($(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        $(this.element).removeClass(_c4gMapsConstant.cssConstants.HIDE);
      }
    }

    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: 'hide',
    value: function hide() {
      if (!$(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        $(this.element).addClass(_c4gMapsConstant.cssConstants.HIDE);
      }
    }

    /**
     * @TODO
     * [getContent description]
     *
     */

  }, {
    key: 'getContent',
    value: function getContent() {
      return this.contentContainer.innerHTML;
    }

    /**
     * @TODO
     * [getPosition description]
     *
     */

  }, {
    key: 'getPosition',
    value: function getPosition() {
      return this.overlay.getPosition();
    }

    /**
     * @TODO
     * [setContent description]
     *
     * @param  {[type]}  content  [description]
     */

  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.contentContainer.innerHTML = content;
    }

    /**
     * @TODO
     * [setPosition description]
     *
     * @param  {[type]}  coordinates  [description]
     */

  }, {
    key: 'setPosition',
    value: function setPosition(coordinates) {
      this.overlay.setPosition(coordinates);
    }
  }]);

  return TooltipPopUp;
}(); // End of "add methods to TooltipPopUp"

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-de.js":
/*!*******************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-popup-info-de.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = trim;
exports.isMobile = isMobile;
exports.fnHeader = fnHeader;
exports.fnFooter = fnFooter;
exports.fnGetTranslate_Type = fnGetTranslate_Type;
exports.fnArztInfo = fnArztInfo;
exports.fnKraftwerkInfo = fnKraftwerkInfo;
exports.fnWertstoffinfo = fnWertstoffinfo;
exports.fnAdditionalBuildingInfos = fnAdditionalBuildingInfos;
exports.fnSicherheitAdditional = fnSicherheitAdditional;
exports.fnWreckInfo = fnWreckInfo;
exports.fnKlosterAdditional = fnKlosterAdditional;
/*
  K?stenschmiede GmbH Software & Design 2011 - 2018
 @author     K?stenschmiede <http://www.kuestenschmiede.de>
 @license    http://opensource.org/licenses/lgpl-3.0.html
*/
function trim(b) {
    return b.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
    );
}function translate(b) {
    var a = trim(b);return "yes" == a || "Yes" == a ? "Ja" : "no" == a ? "Nein" : "No" == a ? "nein" : "limited" == a ? "Eingeschr\xE4nkt" : "designated" == a ? "Ja" : "wood" == a ? "Holz" : "metal" == a ? "Metall" : "concrete" == a ? "Beton" : "plastic" == a ? "Plastik" : "stone" == a ? "Stein" : "steel" == a ? "Stahl" : "brick" == a ? "Ziegel" : "reinforced_concrete" == a ? "Stahlbeton" : "masonry" == a ? "Mauerwerk" : b;
}
var fnStandardInfoPopup = exports.fnStandardInfoPopup = function fnStandardInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e;if ("function" === typeof a) {
        var f = a.call(b)[0].getImage();if (f) try {
            e = f.getSrc();
        } catch (g) {
            e = "";
        }
    } else {
        f = a.getImage();try {
            e = f.getSrc();
        } catch (h) {
            e = "";
        }
    }d += fnHeader(c, e);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());return '<div class="c4g_popup_text">' + d + "</div>";
},
    fnReducedInfoPopup = exports.fnReducedInfoPopup = function fnReducedInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e = !1,
        f;f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;"hotel" == c.tourism && (e = !0);"guest_house" == c.tourism && (e = !0);"chalet" == c.tourism && (e = !0);"hostel" == c.tourism && (e = !0);"alpine_hut" == c.tourism && (e = !0);if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;if ("museum" == c.tourism || "museum" == c.amenity) e = !0;"cinema" == c.amenity && (e = !0);"theatre" == c.amenity && (e = !0);if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;"playground" == c.leisure && (e = !0);c.aerialway && (e = !0);if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;"station" == c.railway && (e = !0);"swimming" == c.sport && (e = !0);"swimming_pool" == c.leisure && (e = !0);"swimming_pool" == c.amenity && (e = !0);"waterpark" == c.leisure && (e = !0);c.water_park && (e = !0);"sports_centre" == c.leisure && (e = !0);switch (e) {case !1:
            d += fnHeader(c, f);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());break;case !0:
            d += fnHeader(c, f);}return '<div class="c4g_popup_text">' + d + "</div>";
};
function fnHeader(b, a) {
    var c = "",
        d = "32px";a && -1 != a.indexOf("icon_mapcil") && (d = "250px", a = a.replace("icon_mapcil", "logo_mapcil"));if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
        if (b.name) var e = b.name;b["piste:name"] && (e = b["piste:name"]);b["xmas:name"] && (e = b["xmas:name"]);b["xmas:location"] && (e = b["xmas:location"]);c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
    } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');c += fnGetTranslate_Type(b);return '<div class="c4g_popup_header">' + c + "</div>";
}
function fnFooter(b, a) {
    var c = "",
        d = !1;b["addr:housename"] && (c += "Geb\xE4udename: " + b["addr:housename"] + "<br/>", d = !0);b["addr:floor"] ? (c += "Etage: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "Etage: " + b["addr:level"] + "<br/>", d = !0);b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);b["addr:postcode"] && (c += b["addr:postcode"] + " ");b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
        var e = b.sqkm.length % 3,
            f = 0 < e ? b.sqkm.substring(0, e) : "";for (i = 0; i < Math.floor(b.sqkm.length / 3); i++) {
            f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));
        }c += "Fl\xE4che: " + f + " Km\xB2<br/>";
    } else c += "Fl\xE4che " + b.sqkm + "<br/>";b["contact:phone"] && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('Telefon: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);b.phone && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('Telefon: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);b["contact:fax"] ? (c += "Telefax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "Telefax: " + b.fax + "<br/>", d = !0);b["contact:email"] ? (c += 'E-Mail-Adresse: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'E-Mail-Adresse: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);d && (c += "<br/>");if (b.opening_hours) {
        d = b.opening_hours;for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), d = d.replace('"Please make a reservation"', '"Bitte vereinbaren Sie einen Termin"'), d = d.replace("off", "ausgenommen"), 0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
    }if (b["xmas:opening_hours"]) {
        d = b["xmas:opening_hours"];for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), 0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
    }b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Link zu Wikipedia</a><br/>');b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Link zu Wikimedia</a><br/>');b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Webcam: <a href="' + d + '" target="_blank">Link zur Webcam</a><br/>');b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');d = "";b.internet_access && (d += "Internetzugriff: " + translate(b.internet_access) + "<br/>");b["internet_access:fee"] && (d += "Internet Geb\xFChr: " + translate(b["internet_access:fee"]) + "<br/>");b["wifi_access:operator"] && (d += "wifi Betreiber: " + b["wifi_access:operator"] + "<br/>");b["wifi_access:technology"] && (d += "wifi Technologie: " + b["wifi_access:technology"] + "<br/>");b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");"" != d && (c += 'Internetzugang vorhanden<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");b.wheelchair && (c += "rollstuhlgeeignet: " + translate(b.wheelchair) + "<br/>");b["wheelchair:description"] && (c += "Beschreibung: " + b["wheelchair:description"] + "<br/>");b["wheelchair:entrance_width"] && (c += "Breite des Eingangs in CM: " + b["wheelchair:entrance_width"] + "<br/>");b["wheelchair:step_height"] && (c += "H\xF6he der Stufe am Eingang in CM: " + b["wheelchair:step_height"] + "<br/>");b["wheelchair:rooms"] && (c += "Anzahl rollstuhlgerechter R\xE4ume: " + b["wheelchair:rooms"] + "<br/>");b["wheelchair:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");b["cent:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");b["ramp:wheelchair"] && (c += "Rampe f\xFCr Rollstuhlfahrer: " + b["ramp:wheelchair"] + "<br/>");b["capacity:disabled"] && (c += "Behindertenparkpl\xE4tze: " + translate(b["capacity:disabled"]) + "<br/>");b["toilets:wheelchair"] && (c += "Behinderdengerechte Toilette: " + translate(b["toilets:wheelchair"]) + "<br/>");b.centralkey && (c += "Zentralschl\xFCssel: " + b.centralkey + "<br/>");b.note && (c += b.note + "<br/>");b.description && (c += b.description + "<br/>");b.operator && (c += "Betreiber: " + b.operator + "<br/>");b.ref && (c += "Referenz: " + b.ref + "<br/>");"yes" == b.lit && (c += "Dieses Objekt ist beleuchtet.<br/>");b.shop && (d = "", b.brand && (d += "Markenzeichen: " + b.brand + "<br/>"), b.sells && (d += "Verkaufs: " + b.sells + "<br/>"), b.origin && (d += "Herkunftsl\xE4nder: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "Gro\xDFh\xE4ndler: Ja<br/>"), "" != d && (c += 'Weitere Angaben zum Shop: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">Link zur OpenStreetMap</a><br/>'));return c = '<div class="c4g_popup_footer">' + c + "</div>";
}
function fnGetTranslate_Type(b) {
    var a = "";if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "Arzt<br/>";if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "Krankenhaus mit Notaufnahme<br/>" : a + "Krankenhaus<br/>";"dentist" == b.amenity && (a += "Zahnarzt<br/>");if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "Apotheke<br/>";if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "Physiotherapeut<br/>";
    if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "Ergotherapeut<br/>";if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "Psychotherapeut<br/>";"alternative" == b.healthcare && (a += "Alternativ- und Komplement\xE4rmediziner<br/>");"midwife" == b.healthcare && (a += "Hebamme<br/>");if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "Logop\xE4de<br/>";
    "yes" == b["health_speciality:music_therapy"] && (a += "Musiktherapeut<br/>");"veterinary" == b.amenity && (a += "Tierarzt<br/>");"fire_station" == b.amenity && (a += "Feuerwehrhaus<br/>");"fire_extinguisher" == b.emergency && (a += "Feuerl\xF6scher<br/>");"aed" == b.emergency && (a += "Mobiler Defibrilator<br/>");"defibrillator" == b.emergency && (a += "Mobiler Defibrilator<br/>");"phone" == b.emergency && (a += "Notrufs\xE4ule<br/>");"police" == b.amenity && (a += "Polizeiwache<br/>");"ambulance_station" == b.emergency && (a += "Rettungswache<br/>");
    "technical" == b.emergency_service && (a += "Technisches Hilfswerk<br/>");"water" == b.emergency_service && (a += "Wasserrettungsstation<br/>");"baywatch" == b.waterway && (a += "Wasserwacht<br/>");"air" == b.emergency_service && (a += "Rettungshubschrauber<br/>");"emergency_access_point" == b.highway && (a += "Notfallpunkt<br/>");if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "Rettungsbootstation<br/>";"life_ring" == b.emergency && (a += "Rettungsring<br/>");"siren" == b.emergency && (a += "Sirene<br/>");"life_ring" == b.amenity && (a += "Rettungsring<br/>");"rescue_station" == b.amenity && (a += "Rettungsstation<br/>");"fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "Unterflurhydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "\xDCberflurhydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "Wandhydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "Saugstelle<br/>"));"suction_point" == b.emergency && (a += "Saugstelle<br/>");"fire_water_pond" == b.emergency && (a += "L\xF6schteich<br/>");"mountain" == b.emergency_service && (a += "Bergrettungsstation<br/>");"water_tank" == b.emergency && (a += "L\xF6schwassertank<br/>");"container" == b.recycling_type && (a += "Recycling Container<br/>");"recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "Absaugstation<br/>" : "recycling" == b.amenity && (a += "Wertstoffhof<br/>");"yes" == b["diet:pescetarian"] ? a += "pescetarische Gerichte vorhanden<br/>" : "only" == b["diet:pescetarian"] && (a += "nur pescetarische Gerichte<br/>");"yes" == b["diet:vegetarian"] ? a += "vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "nur vegetarische Gerichte<br/>");"yes" == b["diet:lacto_vegetarian"] ? a += "lacto-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "nur lacto-vegetarische Gerichte<br/>");"yes" == b["diet:ovo_vegetarian"] ? a += "ovo-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "nur ovo-vegetarische Gerichte<br/>");"yes" == b["diet:vegan"] ? a += "vegane Gerichte vorhanden<br/>" : "only" == b["diet:vegan"] && (a += "nur vegane Gerichte<br/>");"yes" == b["diet:fruitarian"] ? a += "frutarische Gerichte vorhanden<br/>" : "only" == b["diet:fruitarian"] && (a += "nur frutarische Gerichte<br/>");"yes" == b["diet:raw"] ? a += "rohk\xF6stliche Gerichte vorhanden<br/>" : "only" == b["diet:raw"] && (a += "nur rohk\xF6stliche Gerichte<br/>");"yes" == b["diet:gluten_free"] ? a += "glutenfreie Gerichte vorhanden<br/>" : "only" == b["diet:gluten_free"] && (a += "nur glutenfreie Gerichte<br/>");"yes" == b["diet:dairy_free"] ? a += "milchfreie Gerichte vorhanden<br/>" : "only" == b["diet:dairy_free"] && (a += "nur milchfreie Gerichte<br/>");"yes" == b["diet:lactose_free"] ? a += "laktosefreie Gerichte vorhanden<br/>" : "only" == b["diet:lactose_free"] && (a += "nur laktosefreie Gerichte<br/>");"yes" == b["diet:halal"] ? a += "Hal\u0101l Gerichte vorhanden<br/>" : "only" == b["diet:halal"] && (a += "nur Hal\u0101l Gerichte<br/>");"yes" == b["diet:kosher"] ? a += "koschere Gerichte vorhanden<br/>" : "only" == b["diet:kosher"] && (a += "nur koschere Gerichte<br/>");"pub" == b.amenity && (a += "Gastst\xE4tte<br/>");"bar" == b.amenity && (a += "Bar<br/>");"yes" == b.frozen_yogurt && (a += "Frozen Yogurt im Angebot<br/>");"yes" == b.slush_ice && (a += "Slush Ice im Angebot<br/>");"yes" == b.cake && (a += "Kuchenteilchen, Geb\xE4ck etc. im Angebot<br/>");"yes" == b.coffee && (a += "Kaffeegetr\xE4nke im Angebot<br/>");"yes" == b.drinks && (a += "Getr\xE4nke im Angebot<br/>");"biergarten" == b.amenity && (a += "Biergarten<br/>");"restaurant" == b.amenity && (a += "Restaurant<br/>");"fast_food" == b.amenity && (a += "Fast Food Restaurant<br/>");if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "Caf\xE9, Bistro<br/>";if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "Eiscafe<br/>";"alpine_hut" == b.tourism && (a += "Bergh\xFCtte<br/>");"aquarium" == b.tourism && (a += "Aquarium<br/>");"apartment" == b.tourism && (a += "Ferienwohnung<br/>");"attraction" == b.tourism && (a += "Sehensw\xFCrdigkeit<br/>");"artwork" == b.tourism && (a += "Skulptur<br/>");"camp_site" == b.tourism && (a += "Campingplatz<br/>");"caravan_site" == b.tourism && (a += "Wohnmobilstellplatz<br/>");
    "chalet" == b.tourism && (a += "Ferienwohnung /-haus<br/>");"gallery" == b.tourism && (a += "Kunstgalerie<br/>");"guest_house" == b.tourism && (a += "Pension, Gasthaus, Bed & Breakfast<br/>");"hostel" == b.tourism && (a += "Jugendherberge, Hostel<br/>");"hotel" == b.tourism && (a += "Hotel<br/>");"motel" == b.tourism && (a += "Motel<br/>");"museum" == b.tourism && (a += "Museum<br/>");"picnic_site" == b.tourism && (a += "Rast- und Picknickplatz<br/>");"theme_park" == b.tourism && (a += "Freizeit- oder Themenpark<br/>");"viewpoint" == b.tourism && (a += "Aussichtspunkt<br/>");
    "wilderness_hut" == b.tourism && (a += "Schutzh\xFCtte<br/>");"wine_cellar" == b.tourism && (a += "Weinkeller<br/>");"zoo" == b.tourism && (a += "Zoo / Tierpark<br/>", "enclosure" == b.zoo && (a += "mit Wildgehege<br/>"), "petting_zoo" == b.zoo && (a += "mit Streichelzoo<br/>"), "falconry" == b.zoo && (a += "mit Falknerei<br/>"));"trail_riding_station" == b.tourism && (a += "Wanderreitstation<br/>");"fishing" == b.club && (a += "Angelverein<br/>");"sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");"amateur_radio" == b.club && (a += "Amateurfunker<br/>");
    "art" == b.club && (a += "Kunstverein<br/>");"astronomy" == b.club && (a += "Astronomieverein<br/>");"automobile" == b.club && (a += "Automobilverein<br/>");"board_games" == b.club && (a += "Brettspielverein<br/>");"card_games" == b.club && (a += "Kartenspielverein<br/>");"charity" == b.club && (a += "Charity-Verein<br/>");"chess" == b.club && (a += "Schachverein<br/>");"cinema" == b.club && (a += "Kinoverein<br/>");"cooking" == b.club && (a += "Kochverein<br/>");"culture" == b.club && (a += "Kulturverein<br/>");"doityourself" == b.club && (a += "doityourself-Verein<br/>");
    "equestrian" == b.club && (a += "Reitverein<br/>");"ethnic" == b.club && (a += "Ethnischer Verein<br/>");"fan" == b.club && (a += "Fanverein<br/>");"freemasonry" == b.club && (a += "Freimaurer-Verein<br/>");"game" == b.club && (a += "Spieleverein<br/>");"history" == b.club && (a += "Historischer-Verein / Verein f\xFCr Geschichte<br/>");"hunting" == b.club && (a += "Jagdverein<br/>");"linux" == b.club && (a += "Linux-Verein<br/>");"motorcycle" == b.club && (a += "Motorradverein<br/>");"music" == b.club && (a += "Musikverein<br/>");"nature" == b.club && (a += "Naturverein<br/>");
    "nudism" == b.club && (a += "Nudisten-Verein / FKK-Verein<br/>");"photography" == b.club && (a += "Fotografieverein<br/>");"politics" == b.club && (a += "Verein f\xFCr Politik<br/>");"relegion" == b.club && (a += "Politischer-Verein<br/>");"scout" == b.club && (a += "Pfadfinderin/Pfadfinder<br/>");"smoke" == b.club && (a += "Raucherverein<br/>");"sport" == b.club && (a += "Sportverein<br/>");"theatre" == b.club && (a += "Theaterverein<br/>");"veterans" == b.club && (a += "Veteranen<br/>");"amusement_arcade" == b.leisure && (a += "Spielhalle<br/>");"beach_resort" == b.leisure && (a += "Standbad<br/>");"bird_hide" == b.leisure && (a += "Vogelbeobachtungspunkt<br/>");"common" == b.leisure && (a += "\xD6ffentliche Gr\xFCnfl\xE4chen<br/>");"club" == b.leisure && (a += "Club/Verein<br/>");"dance" == b.leisure && (a += "Tanzen<br/>");"dog_park" == b.leisure && (a += "Hundepark<br/>");"firepit" == b.leisure && (a += "Feuerstelle<br/>");"fishing" == b.leisure && (a += "Angelstelle<br/>");"garden" == b.leisure && (a += "Garten<br/>");"golf_course" == b.leisure && (a += "Golfplatz<br/>");"hackerspace" == b.leisure && (a += "Ort f\xFCr Hackertreffen<br/>");
    "horse_riding" == b.leisure && (a += "Reitstall / Reiterhof<br/>");"ice_rink" == b.leisure && (a += "Eislaufbahn<br/>");"nature_reserve" == b.leisure && (a += "Naturschutzgebiet (NSG)<br/>");"park" == b.leisure && (a += "Gr\xFCnanlage<br/>");"miniature_golf" == b.leisure && (a += "Minigolf<br/>");"pitch" == b.leisure && (a += "Spielfeld<br/>");"pitch" == b.leisure && "yes" == b.building && (a += "Sporthalle<br/>");"playground" == b.leisure && "yes" == b.building ? a += "Spielscheune<br/>" : "playground" == b.leisure && (a += "Spielplatz<br/>");"social_club" == b.leisure && (a += "Treffpunkt f\xFCr Freizeitgruppen<br/>");"spa" == b.leisure && (a += "Heilbad / Spa<br/>");"sports_centre" == b.leisure && (a += "Sportzentrum<br/>");"climbing_adventure" == b.sport && (a += "Seilgarten<br/>");"stadium" == b.leisure && (a += "Stadion<br/>");"swimming_pool" == b.leisure && (a += "Schwimmbecken<br/>");"track" == b.leisure && (a += "Rennbahn<br/>");"water_park" == b.leisure && (a += "Wasserpark<br/>");"wildlife_hide" == b.leisure && (a += "Wildbeobachtungspunkt<br/>");"adult_gaming_centre" == b.leisure && (a += "Spielothek<br/>");
    "bowling_alley" == b.leisure && "10pin" == b.sport && (a += "Bowlingcenter<br/>");"bowling_alley" == b.leisure && "9pin" == b.sport && (a += "Kegelbahn<br/>");if ("karting" == b.sport || "motor" == b.sport) a += "Kart-/Motorsport<br/>";if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";if (b["piste:type"]) switch (b["piste:type"]) {case "skitour":
            a += "Piste f\xFCr Skitouren<br/>";break;case "downhill":
            a += "Skiabfahrt<br/>";break;case "sled":
            a += "Rodelberg / Rodelstrecke<br/>";break;case "nordic":
            a += "Langlauf Piste<br/>";break;case "hike":
            a += "Schneeschuh- und Winterwanderweg<br/>";break;case "snow_park":
            a += "Snow-Park<br/>";}if (b.sport) switch (b.sport) {case "surfing":
            a += "Surfen<br/>";break;case "kitesurfing":
            a += "Kitesurfen<br/>";break;case "water_ski":
            a += "Wasserski<br/>";}if (b.aerialway) switch (b.aerialway) {case "cable_bar":
            a += "Lift mit Gondeln<br/>";break;case "gondola":
            a += "Lift mit Gondeln<br/>";break;case "chair_lift":
            a += "Sessellift<br/>";break;case "mixed_lift":
            a += "Lift mit Sesseln und Gondeln<br/>";break;case "drag_lift":
            a += "Skilift<br/>";
            break;case "t-bar":
            a += "T-Lift<br/>";break;case "t-bar":
            a += "T-Lift (einseitig)<br/>";break;case "platter":
            a += "Lift mit Sitzscheibe<br/>";break;case "rope_tow":
            a += "B\xFCgellift<br/>";break;case "magic_carpet":
            a += "Bef\xF6rderungsband<br/>";break;default:
            a += "unbekannt";}"mosque" == b.building && (a += "Moschee<br/>");"synagogue" == b.building && (a += "Synagoge<br/>");"apartments" == b.building && (a += "Wohnung<br/>");"farm" == b.building && (a += "Farm<br/>");"hotel" == b.building && (a += "Hotel<br/>");"house" == b.building && (a += "Haus<br/>");"detached" == b.building && (a += "Freistehend<br/>");"residential" == b.building && (a += "Residenz<br/>");if ("domitory" == b.building || "residential plus" == b.building) a += "Wohnheim<br/>";"terrace" == b.building && (a += "Terrasse<br/>");"houseboat" == b.building && (a += "Hausboot<br/>");"bungalow" == b.building && (a += "Bungalow<br/>");"static_caravan" == b.building && (a += "Stehender Wohnwagen<br/>");"commercial" == b.building && (a += "Kommerziell<br/>");"retail" == b.building && (a += "Verkauf<br/>");"warehouse" == b.building && (a += "Lagerhaus<br/>");"bakehouse" == b.building && (a += "Backstube<br/>");"temple" == b.building && (a += "Tempel<br/>");"shrine" == b.building && (a += "Schrein<br/>");"civic" == b.building && (a += "B\xFCrgerlich<br/>");"stadium" == b.building && (a += "Stadium<br/>");"train_station" == b.building && (a += "Bahnhof<br/>");"university" == b.building && (a += "Universit\xE4t<br/>");"public" == b.building && (a += "\xD6ffentliches Geb\xE4ude<br/>");"bridge" == b.building && (a += "Br\xFCcke<br/>");"bunker" == b.building && (a += "Bunker<br/>");"cabin" == b.building && (a += "H\xFCtte<br/>");"conservatory" == b.building && (a += "Wintergarten<br/>");"construction" == b.building && (a += "Im Bau<br/>");"garage" == b.building && (a += "Garage<br/>");"garages" == b.building && (a += "Garagen<br/>");"greenhouse" == b.building && (a += "Gew\xE4chshaus<br/>");"hangar" == b.building && (a += "Hangar<br/>");"hut" == b.building && (a += "H\xFCtte<br/>");"pavillion" == b.building && (a += "Pavillion<br/>");"roof" == b.building && (a += "\xDCberdacht<br/>");"shed" == b.building && (a += "Gartenh\xE4uschen<br/>");
    "transformer_tower" == b.building && (a += "Transformator Turm<br/>");"service" == b.building && (a += "Service-Stelle<br/>");"kiosk" == b.building && (a += "Kiosk<br/>");"carport" == b.building && (a += "Carport<br/>");"ruins" == b.building && (a += "Ruinen<br/>");"gambling" == b.amenity && (a += "Spielhalle<br/>");"library" == b.amenity && (a += "B\xFCcherei<br/>");"fountain" == b.amenity && (a += "Brunnen<br/>");"attraction" == b.amenity && (a += "Sehensw\xFCrdigkeit<br/>");if ("social_centre" == b.amenity || "club" == b.amenity) a += "Verein / Club<br/>";
    "townhall" == b.amenity && (a += "Rathaus / B\xFCrgerhaus<br/>");"bench" == b.amenity && (a += "Parkbank<br/>");if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "Friedhof<br/>";"post_box" == b.amenity && (a += "Briefkasten<br/>");"post_office" == b.amenity && (a += "Postamt<br/>");"telephone" == b.amenity && (a += "Telefon<br/>");"atm" == b.amenity && (a += "Geldautomat<br/>");"bank" == b.amenity && (a += "Bankfiliale<br/>");"toilets" == b.amenity && "yes" == b.diaper ? a += "\xD6ffentliche Toilette mit Wickeltisch<br/>" : "toilets" == b.amenity && (a += "\xD6ffentliche Toilette<br/>");"school" == b.amenity && "1" == b["isced:level"] ? a += "Grundschule<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "Sekundarstufe I<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "Sekundarstufe II<br/>" : "school" == b.amenity && (a += "Schule<br/>");"kindergarten" == b.amenity && (a += "Kindergarten<br/>");"internet_cafe" == b.amenity && (a += "Internetcaf\xE9<br/>");"daycare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");"childcare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");
    "university" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");"college" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");"shelter" == b.amenity && (a += "Unterstand<br/>");"bbq" == b.amenity && (a += "Grillplatz<br/>");"nightclub" == b.amenity && (a += "Diskothek / Nachtklub<br/>");"bicycle_parking" == b.amenity && (a += "Fahrradparkplatz<br/>");"bicycle_rental" == b.amenity && (a += "Fahrradverleih<br/>");"boat_sharing" == b.amenity && (a += "Bootsverleih<br/>");"car_sharing" == b.amenity && (a += "Car-Sharing<br/>");"cinema" == b.amenity && (a += "Kino<br/>");"swimming_pool" == b.amenity && (a += "Schwimmbad<br/>");if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "Botschaft<br/>";"embassy" == b.amenity && "consulate" == b.diplomatic && (a += "Konsulate<br/>");"embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "Generalkonsulate<br/>");"embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "Honorarkonsulate<br/>");"embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "St\xE4ndige Vertretung<br/>");"embassy" == b.amenity && "delegation" == b.diplomatic && (a += "Delegation<br/>");"embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "Hochkommissariat<br/>");"Barfusspfad" == b.amenity && (a += "Barfu\xDFpfad<br/>");"casino" == b.amenity && (a += "Casino<br/>");"spa" == b.amenity && (a += "Heilbad / Spa<br/>");"stables" == b.amenity && (a += "Reitstall / Reiterhof<br/>");"watering_place" == b.amenity && (a += "Wasserstelle / Tr\xE4nke<br/>");"yes" == b.watering_place && (a += "Wasserstelle / Tr\xE4nke<br/>");"water_point" == b.amenity && (a += "gro\xDFe Trinkwasserstelle<br/>");
    "taxi" == b.amenity && (a += "Taxi<br/>");"car_wash" == b.amenity && (a += "Autowaschanlage<br/>");"brothel" == b.amenity && (a += "Bordell, Freudenhaus<br/>");"stripclub" == b.amenity && (a += "Stripclub<br/>");"swingerclub" == b.amenity && (a += "Swingerclub<br/>");"planetarium" == b.amenity && (a += "Planetarium<br/>");"courthouse" == b.amenity && (a += "Gericht<br/>");"crematorium" == b.amenity && (a += "Krematorium<br/>");if ("crypt" == b.amenity || "crypt" == b.building) a += "Krypta<br/>";"hunting_stand" == b.amenity && (a += "Hochsitz<br/>");"photo_booth" == b.amenity && (a += "Fotoautomat<br/>");"prison" == b.amenity && (a += "Gef\xE4ngnis<br/>");"ranger_station" == b.amenity && (a += "National Park Ranger Station<br/>");"register_office" == b.amenity && (a += "Standesamt<br/>");"marketplace" == b.amenity && (a += "Marktplatz / Wochenmarkt<br/>");"solarium" == b.amenity && (a += "Solarium<br/>");"sauna" == b.amenity && (a += "Sauna<br/>");"shower" == b.amenity && (a += "\xF6ffentliche Dusche<br/>");if ("waste_disposal" == b.amenity && (a += "M\xFCllentsorgung auf \xF6ffentlichen Pl\xE4tzen<br/>", b.waste)) switch (a += "Art: ", b.waste) {case "trash":
            a += "Allgemeiner M\xFCll<br/>";break;case "oil":
            a += "Oil<br/>";break;case "drugs":
            a += "Pharmazeutisch<br/>";break;case "organic":
            a += "Kompost<br/>";break;case "plastic":
            a += "Plastik<br/>";break;case "rubble":
            a += "Schutt<br/>";break;case "cigarettes":
            a += "Zigaretten<br/>";break;default:
            a += "Allgemeiner M\xFCll<br/>";}if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "Hunde-Code M\xFCllcontainer<br/>";if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "Pfadfinderheim<br/>";"ferry_terminal" == b.amenity && (a += "F\xE4hrhafen<br/>");"bureau_de_change" == b.amenity && (a += "Geldwechselstube<br/>");"youth_club" == b.amenity && (a += "Jugendzentrum<br/>");"festival_grounds" == b.amenity && (a += "Festivalgel\xE4nde<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Offene Feuerstelle<br/>";if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "Eintrittskartenautomat<br/>";break;case "animal_feed":
            a += "Tierfutterautomat<br/>";
            break;case "bicycle_tube":
            a += "Fahrradschlauchautomat<br/>";break;case "books":
            a += "B\xFCcherautomat<br/>";break;case "candles":
            a += "Kerzenautomat<br/>";break;case "cigarettes":
            a += "Zigarettenautomat<br/>";break;case "chemist":
            a += "Apotheken/Drogerie Automat<br/>";break;case "condoms":
            a += "Kondomautomat<br/>";break;case "drinks":
            a += "Getr\xE4nkeautomat<br/>";break;case "electronics":
            a += "Automat f\xFCr Elektro-Zubeh\xF6r<br/>";break;case "elongated_coin":
            a += "M\xFCnzpr\xE4gungsautomat<br/>";break;
        case "excrement_bags":
            a += "Hundet\xFCtenspender<br/>";break;case "feminine_hygiene":
            a += "Automat f\xFCr Damenhygieneprodukte<br/>";break;case "first_aid":
            a += "Erste-Hilfe-Automat<br/>";break;case "fishing_tackle":
            a += "Automat f\xFCr Angelzubeh\xF6r<br/>";break;case "fishing_bait":
            a += "Angelk\xF6derautomat<br/>";break;case "flowers":
            a += "Blumenautomat<br/>";break;case "food":
            a += "Lebensmittel-Automat<br/>";break;case "ice_cubes":
            a += "Eisw\xFCrfelautomat<br/>";break;case "ice_cream":
            a += "Automat f\xFCr Speiseeis<br/>";
            break;case "ink_cartridges":
            a += "Druckerpatronen Automat<br/>";break;case "laundry_detergent":
            a += "Waschmittelautomat<br/>";break;case "public_transport_tickets":
            a += "Fahrkartenautomat<br/>";break;case "newspaper":
            a += "Zeitungsautomat<br/>";break;case "parcel_pickup":
            a += "Packstation<br/>";break;case "parcel_mail_in":
            a += "Paketstation<br/>";break;case "parking_tickets":
            a += "Parkscheinautomat<br/>";break;case "photos":
            a += "Fotoautomat<br/>";break;case "sex_toys":
            a += "Automat f\xFCr Sexspielzeug<br/>";break;
        case "SIM_cards":
            a += "Automat f\xFCr SIM Karten<br/>";break;case "stamps":
            a += "Briefmarkenautomat<br/>";break;case "sweets":
            a += "S\xFC\xDFigkeitenautomat<br/>";break;case "syringes":
            a += "Spritzenautomat<br/>";break;case "toll":
            a += "Maut-Automat<br/>";break;case "toys":
            a += "Spielzeugautomat<br/>";break;case "umbrellas":
            a += "Regenschirmautomat<br/>";break;default:
            a += "Verkaufsautomat<br/>";} else a += "Verkaufsautomat<br/>";"arts_centre" == b.amenity && (a += "Kulturzentrum<br/>");"artwork" == b.amenity && (a += "Kunstwerk / Kunstobjekt<br/>");
    "museum" == b.amenity && (a += "Museum<br/>");"theatre" == b.amenity && (a += "Theater<br/>");"cathedral" == b.building && (a += "Kathedrale<br/>");"church" == b.building && (a += "Kirche<br/>");"chapel" == b.building && (a += "Kapelle<br/>");"place_of_worship" == b.amenity && (a += "Kirche / Kultst\xE4tte<br/>");"village" == b.abandoned && (a += "Verlassene Stadt<br/>");"theme_park" == b["abandoned:tourism"] && (a += "Verlassener Vergn\xFCgungspark<br/>");"prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "KZ Gedenkst\xE4tte<br/>");"yes" == b.abandoned && "bunker" == b.military && (a += "Verlassene Bunkeranlage<br/>");"yes" == b.abandoned && "barracks" == b.military && (a += "Verlassene Milit\xE4rbaracken<br/>");"yes" == b.abandoned && "airfield" == b.military && (a += "Verlassene Milit\xE4rflugplatz<br/>");"monastery" == b.historic && (a += "Historisches Kloster<br/>");"monastery" == b.amenity && (a += "Kloster<br/>");"monastery" == b.building && (a += "Kloster<br/>");"manor" == b.historic && (a += "Gutshaus / Herrenhaus<br/>");"boundary_stone" == b.historic && (a += "Historischer Grenzstein<br/>");"milestone" == b.historic && (a += "Historischer Meilenstein<br/>");"monument" == b.historic && (a += "Monument<br/>");"palace" == b.historic && (a += "Palast<br/>");"mine" == b.historic && (a += "Verlassene Mine<br/>");"ruins" == b.historic && (a += "Ruine<br/>");"harbour" == b.historic_usage && (a += "historischer Hafen<br/>");"rune_stone" == b.historic && (a += "Runenstein<br/>");"battlefield" == b.historic && (a += "Schlachtfeld<br/>");"blacksmith" == b.historic && (a += "Historische Schmiede<br/>");
    if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "Schrein / Bildstock<br/>";"city_gate" == b.historic && (a += "Stadttor<br/>");"wayside_cross" == b.historic && (a += "Wegkreuz<br/>");"monument" == b.amenity && (a += "Denkmal<br/>");"memorial" == b.historic && (a += "Denkmal<br/>");"optical_telegraph" == b.historic && (a += "Optischer Telegraph<br/>");if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {case "defensive":
            a += "Burg<br/>";break;case "palace":
            a += "Palast<br/>";break;case "stately":
            a += "Schloss<br/>";
            break;case "manor":
            a += "Herrenhaus<br/>";break;case "fortress":
            a += "Festung<br/>";break;case "castrum":
            a += "R\xF6misches Milit\xE4rlager<br/>";break;case "shiro":
            a += "Shiro<br/>";break;case "kremlin":
            a += "Kreml<br/>";break;default:
            a += "Schloss / Burg<br/>";} else a += "Schloss / Burg<br/>";"archaeological_site" == b.historic && (a += "Arch\xE4ologische Fundst\xE4tte<br/>");if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {case "tumulus":
            a += "H\xFCgelgrab<br/>";break;case "rock-cut":
            a += "Felsgrab<br/>";break;
        case "hypogeum":
            a += "Hypog\xE4um<br/>";break;case "war_grave":
            a += "Soldatenfriedhof<br/>";break;case "mausoleum":
            a += "Mausoleum<br/>";break;case "columbarium":
            a += "Kolumbarium<br/>";break;case "crypt":
            a += "Krypta<br/>";break;case "pyramid":
            a += "Pyramide<br/>";break;case "sarcophagus":
            a += "Sarkophag<br/>";break;case "vault":
            a += "Gruft<br/>";break;case "tombstone":
            a += "Grabstein<br/>";break;default:
            a += "Historische Grabst\xE4tte<br/>";} else a += "Historische Grabst\xE4tte<br/>";"accountant" == b.office && (a += "Buchhalter / Wirtschaftpr\xFCfer<br/>");"administrative" == b.office && (a += "Kreis- bzw. Gemeindebeh\xF6rde<br/>");"architect" == b.office && (a += "Architekturb\xFCro<br/>");"association" == b.office && (a += "Verein, Vereinigung bzw. Interessengemeinschaft<br/>");"physician" == b.office && (a += "Arzt<br/>");"camping" == b.office && (a += "Rezeption Campingplatz oder B\xFCro Freizeitpark<br/>");"company" == b.office && (a += "Sitz einer privaten Firma<br/>");"educational_institution" == b.office && (a += "Bildungseinrichtung<br/>");
    "employment_agency" == b.office && (a += "Job-Center / Arbeitsvermittlung<br/>");"estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");"forestry" == b.office && (a += "Forstamt<br/>");"foundation" == b.office && (a += "Gesch\xE4ftsstelle einer Stiftung<br/>");"government" == b.office && (a += "Beh\xF6rde / Regierungseinrichtung<br/>");"guide" == b.office && (a += "B\xFCro f\xFCr Touristenf\xFChrungen<br/>");"insurance" == b.office && (a += "Versicherungsb\xFCro<br/>");"it" == b.office && (a += "IT-Unternehmen<br/>");
    "lawyer" == b.office && (a += "Rechtsanwaltskanzlei<br/>");"newspaper" == b.office && (a += "Zeitungsredaktion<br/>");"ngo" == b.office && (a += "B\xFCro einer Nichtregierungsorganisation<br/>");"notary" == b.office && (a += "Notar<br/>");"political_party" == b.office && (a += "B\xFCro einer politischen Partei<br/>");"quango" == b.office && (a += "B\xFCro einer halbstaatlichen Organisation<br/>");"realtor" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");"real_estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
    "register" == b.office && (a += "Standesamt<br/>");"religion" == b.office && (a += "B\xFCro einer religi\xF6sen Instanz<br/>");"research" == b.office && (a += "Forschungsunternehmen oder -institut<br/>");"tax" == b.office && (a += "Finanzamt<br/>");"telecommunication" == b.office && (a += "Telekommunikationsfirma<br/>");"travel_agent" == b.office && (a += "Sitz eines Reiseunternehmens<br/>");"water_utility" == b.office && (a += "Wasserwirtschaftsamt<br/>");"therapist" == b.office && (a += "Therapeut<br/>");"city" == b.place && (a += "Gro\xDFstadt<br/>");
    "town" == b.place && (a += "Stadt/Kleinstadt<br/>");"village" == b.place && (a += "Dorf<br/>");"continent" == b.place && (a += "Kontinent<br/>");"ocean" == b.place && (a += "Ozean</br>");"track" == b.highway && (a += "Forst-, Wald und Feldweg<br/>");"raceway" == b.highway && (a += "Motorsportbahn<br/>");"designated" == b.bicycle && (a += "Radweg<br/>");"path" == b.highway && (a += "Fu\xDFweg<br/>");"parking" == b.amenity && (a += "Parkplatz<br/>");"services" == b.highway && (a += "Rastst\xE4tte<br/>");"rest_area" == b.highway && (a += "Rastplatz<br/>");"turning_circle" == b.highway && (a += "Wendeplatz/Wendehammer<br/>");"service" == b.highway && (a += "Zufahrtsstra\xDFe / Erschlie\xDFungsweg<br/>");"motorway" == b.highway && (a += "Autobahn<br/>");"motorway_junction" == b.highway && (a += "Autobahnauffahrt<br/>");"bridleway" == b.highway && (a += "Reitweg<br/>");"yes" == b.oneway && (a += "Einbahnstra\xDFe<br/>");"yes" == b.park_ride && (a += "Park and Ride<br/>");"unknown" == b.park_ride && (a += "Park and Ride<br/>");"bus" == b.park_ride && (a += "Park and Ride<br/>");"tram" == b.park_ride && (a += "Park and Ride<br/>");
    "bus_stop" == b.highway && (a += "Bushaltestelle<br/>");"pedestrian" == b.highway && (a += "Fu\xDFg\xE4ngerzone<br/>");"street_lamp" == b.highway && (a += "Strassenlaterne<br/>");"traffic_signals" == b.highway && (a += "Ampel<br/>");"traffic_signals" == b.crossing && (a += "Fu\xDFg\xE4ngerampel<br/>");"speed_camera" == b.highway && (a += "Blitzer<br/>");"yes" == b.traffic_calming && (ret += "Verkehrsberuhigter Bereich</br>");"bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");"chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");
    "choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");"cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");"hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");"island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");"rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");"table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");
    "buoy_cardinal" == b["seamark:type"] && (a += "Kardinalstonne<br/>");"buoy_lateral" == b["seamark:type"] && (a += "Lateraltonne<br/>");"buoy_isolated_danger" == b["seamark:type"] && (a += "Gefahrentonne<br/>");"perch" == b["seamark:beacon_lateral:shape"] && (a += "Pricke<br/>");"fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "Schiffstankstelle<br/>" : "fuel" == b.amenity && (a += "Tankstelle<br/>");if ("charging_station" == b.amenity) {
        var a = a + "Ladestation / Stromtankstelle<br/>",
            c = b.voltage;if (b.car) {
            switch (b.car) {case "yes":
                    a += "F\xFCr Autos: Ja";break;case "no":
                    a += "F\xFCr Autos: Nein";break;default:
                    a += "F\xFCr Autos: Unbekannt";}a += "<br/>";
        } else a += "F\xFCr Autos: Unbekannt<br/>";if (b.bicycle) {
            switch (b.bicycle) {case "yes":
                    a += "F\xFCr E-Bike: Ja";break;case "no":
                    a += "F\xFCr E-Bike: Nein";break;default:
                    a += "F\xFCr E-Bike: Unbekannt";}a += "<br/>";
        } else a += "F\xFCr E-Bike: Unbekannt<br/>";"no" == b["socket:schuko"] && (a += "Stecker Schuko: Nein<br/>");"yes" == b["socket:schuko"] && (a += "Stecker Schuko: Ja<br/>");"no" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Nein<br/>");"yes" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Ja<br/>");"no" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Nein<br/>");"yes" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Ja<br/>");"no" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Nein<br/>");"yes" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Ja<br/>");"no" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Nein<br/>");"yes" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Ja<br/>");
        "no" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Nein<br/>");"yes" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Ja<br/>");"no" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Nein<br/>");"yes" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Ja<br/>");"no" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Nein<br/>");"yes" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Ja<br/>");"no" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Nein<br/>");"yes" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Ja<br/>");"Nein" == b["socket:nema_14_50"] && (a += "Stecker Nema 14  50: Nein<br/>");"yes" == b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: Ja<br/>");"nein" == b["socket:bs1363"] && (a += "Stecker BS 1363: Nein<br/>");"yes" == b["socket:bs1363"] && (a += "Stecker BS 1363: Ja<br/>");"no" == b["socket:type1"] && (a += "Stecker Typ 1:Nein<br/>");"yes" == b["socket:type1"] && (a += "Stecker Typ 1: Ja<br/>");"no" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Nein<br/>");"yes" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Ja<br/>");"Nein" == b["socket:type2"] && (a += "Stecker Typ 2: Nein<br/>");"yes" == b["socket:type2"] && (a += "Stecker Typ 2: Ja<br/>");"no" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Nein<br/>");"yes" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Ja<br/>");"no" == b["socket:type3"] && (a += "Stecker Typ: Nein<br/>");"yes" == b["socket:type3"] && (a += "Stecker Typ 3: Ja<br/>");"no" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Nein<br/>");"yes" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Ja<br/>");
        "no" == b["socket:magne_charge"] && (a += "Stecker Magne : Nein<br/>");"yes" == b["socket:magne_charge"] && (a += "Stecker Magne : Ja<br/>");"no" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");"yes" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");"no" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Nein<br/>");"yes" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Ja<br/>");"no" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Nein<br/>");
        "yes" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Ja<br/>");b["socket:schuko"] && (a += "Stecker Schuko: " + b["socket:schuko"] + "<br/>");b["socket:cee_blue"] && (a += "Stecker CEE Blau: " + b["socket:cee_blue"] + "<br/>");b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: " + b["socket:cee_red_16a"] + "<br/>");b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: " + b["socket:cee_red_32a"] + "<br/>");b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: " + b["socket:cee_red_64a"] + "<br/>");b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: " + b["socket:cee_red_125a"] + "<br/>");b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: " + b["socket:nema_5_15"] + "<br/>");b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: " + b["socket:nema_5_20"] + "<br/>");b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: " + b["socket:nema_14_30"] + "<br/>");b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: " + b["socket:nema_14_50"] + "<br/>");b["socket:bs1363"] && (a += "Stecker BS 1363: " + b["socket:bs1363"] + "<br/>");b["socket:type1"] && (a += "Stecker Typ 1: " + b["socket:type1"] + "<br/>");b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: " + b["socket:schuko"] + "<br/>");b["socket:type2"] && (a += "Stecker Typ 2: " + b["socket:type2"] + "<br/>");b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: " + b["socket:type2_combo"] + "<br/>");b["socket:type3"] && (a += "Stecker Typ 3: " + b["socket:type3"] + "<br/>");b["socket:chademo"] && (a += "Stecker CHAdeMO: " + b["socket:chademo"] + "<br/>");b["socket:magne_charge"] && (a += "Stecker Magne : " + b["socket:magne_charge"] + "<br/>");b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: " + b["socket:tesla_standard"] + "<br/>");b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: " + b["socket:tesla_supercharge"] + "<br/>");b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: " + b["socket:tesla_roadster"] + "<br/>");a += "<br/>";b.voltage && (a += "Volt: " + c + "<br/>");
    }"yes" == b.tunnel && (a += "Tunnel<br/>");if (b.bridge) switch (a += "Br\xFCcken-Typ: ", b.bridge) {case "swing":
            a += "Drehbr\xFCcke";break;case "aqueduct":
            a += "Historische Wasserpipeline";break;
        case "bascule":
            a += "Klapp bzw. Wippbr\xFCcke";break;case "boardwalk":
            a += "Bohlenweg";break;case "cantilever":
            a += "Auslegerbr\xFCcke";break;case "covered":
            a += "gedeckte Br\xFCcke";break;case "drawbridge":
            a += "Klappbr\xFCcke";break;case "humpback":
            a += "Drehbr\xFCcke";break;case "lift":
            a += "Hubbr\xFCcke";break;case "low_water_crossing":
            a += "Irische Br\xFCcke";break;case "moveable":
            a += "Bewegliche Br\xFCcken";break;case "pontoon":
            a += "Schwimmbr\xFCcke";break;case "suspension":
            a += "H\xE4ngebr\xFCcke";
            break;case "trestle":
            a += "Trestle-Br\xFCcke";break;case "viaduct":
            a += "Viadukt";}if (b["bridge:movable"]) switch (b["bridge:movable"]) {case "swing":
            a += "Drehbr\xFCcke";break;case "bascule":
            a += "Klapp bzw. Wippbr\xFCcke";break;case "drawbridge":
            a += "Klappbr\xFCcke";break;case "lift":
            a += "Hubbr\xFCcke";break;case "submersible":
            a += "Senkbr\xFCcke";break;case "transporter":
            a += "Schwebef\xE4hre";break;case "retractable":
            a += "Schubbr\xFCcke";}if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "Seniorenheim / Pflegeheim<br/>";"social_facility" == b.amenity && (a += "Allg. soziale Einrichtung<br/>");if (b.social_facility) {
        "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Seniorenheim<br/>");"assisted_living" == b.social_facility && (a += "Betreutes Wohnen<br/>");"outreach" == b.social_facility && (a += "Beratungsstelle<br/>");"workshop" == b.social_facility && (a += "soziale Werkstatt<br/>");if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "Ambulanter Pflegedienst<br/>";
        "shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Tages- u. Kurzzeitpflege<br/>");"shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "Notunterkunft<br/>");"food_bank" == b.social_facility && (a += "Lebensmittelhilfe<br/>");"hospice" == b.social_facility && (a += "Hospiz<br/>");
    }b.brewery && (a += "Ausgeschenkte Biersorten: " + b.brewery + "<br/>");"alcohol" == b.shop && (a += "Spirituosenladen<br/>");"bakery" == b.shop && (a += "B\xE4ckerei<br/>");"beverages" == b.shop && (a += "Getr\xE4nkehandel<br/>");
    "butcher" == b.shop && (a += "Fleischerei<br/>");"cheese" == b.shop && (a += "K\xE4sefachgesch\xE4ft<br/>");"chocolate" == b.shop && (a += "Schokoladenfachgesch\xE4ft<br/>");"coffee" == b.shop && (a += "Kaffeefachgesch\xE4ft<br/>");"confectionery" == b.shop && (a += "S\xFC\xDFwarenladen<br/>");"convenience" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");"deli" == b.shop && (a += "Feinkostladen<br/>");"dairy" == b.shop && (a += "Milchladen<br/>");"farm" == b.shop && (a += "Hofladen<br/>");"greengrocer" == b.shop && (a += "Gem\xFCseh\xE4ndler<br/>");
    "grocery" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");"organic" == b.shop && (a += "Bio-Laden, Reformhaus<br/>");"pasta" == b.shop && (a += "Pastagesch\xE4ft<br/>");"seafood" == b.shop && (a += "Fischfachgesch\xE4ft<br/>");"tea" == b.shop && (a += "Teefachgesch\xE4ft<br/>");"wine" == b.shop && (a += "Weinhandlung<br/>");"department_store" == b.shop && (a += "Kaufhaus<br/>");"general" == b.shop && (a += "Gemischtwarenhandlung<br/>");"kiosk" == b.shop && (a += "Kiosk<br/>");"mall" == b.shop && (a += "Einkaufszentrum<br/>");"supermarket" == b.shop && (a += "Supermarkt<br/>");"baby_goods" == b.shop && (a += "Babyfachmarkt<br/>");"bag" == b.shop && (a += "Taschen und Koffer<br/>");"boutique" == b.shop && (a += "Boutique<br/>");"clothes" == b.shop && (a += "Bekleidung<br/>");"fabric" == b.shop && (a += "Textilgesch\xE4ft<br/>");"fashion" == b.shop && (a += "Fashion<br/>");"jewelry" == b.shop && (a += "Juwelier<br/>");"leather" == b.shop && (a += "Lederwaren<br/>");"shoes" == b.shop && (a += "Schuhfachgesch\xE4ft<br/>");"variety_store" == b.shop && (a += "Ein-Euro-Laden<br/>");"chemist" == b.shop && (a += "Drogerie<br/>");
    "cosmetics" == b.shop && (a += "Kosmetikfachgesch\xE4ft<br/>");"drugstore" == b.shop && (a += "Drogerie oder Apotheke (veraltet)<br/>");"perfumery" == b.shop && (a += "Parf\xFCmerie<br/>");"erotic" == b.shop && (a += "Erotikhandel<br/>");"hairdresser" == b.shop && (a += "Friseur<br/>");"hearing_aids" == b.shop && (a += "H\xF6rger\xE4te<br/>");"herbalist" == b.shop && (a += "Kr\xE4uterhandel<br/>");"massage" == b.shop && (a += "Massagesalon<br/>");"medical_supply" == b.shop && (a += "Sanit\xE4tshaus<br/>");"optician" == b.shop && (a += "Optiker<br/>");
    "tattoo" == b.shop && (a += "T\xE4towierer<br/>");"bathroom_furnishing" == b.shop && (a += "Badm\xF6bel und -accessoires<br/>");"doityourself" == b.shop && (a += "Baumarkt/Baustoffhandel<br/>");"energy" == b.shop && (a += "Energiehandel<br/>");"florist" == b.shop && (a += "Blumengesch\xE4ft<br/>");"furnace" == b.shop && (a += "Ofenfachgesch\xE4ft<br/>");"garden_centre" == b.shop && (a += "Gartencenter<br/>");"gas" == b.shop && (a += "Fachgesch\xE4ft f\xFCr technische Gase<br/>");"glaziery" == b.shop && (a += "Glaserei<br/>");"hardware" == b.shop && (a += "Eisenwaren<br/>");"houseware" == b.shop && (a += "Haushaltswaren und Inneneinrichtung<br/>");"locksmith" == b.shop && (a += "Schl\xFCsseldienst<br/>");"paint" == b.shop && (a += "Farbenfachgesch\xE4ft<br/>");"trade" == b.shop && (a += "Baustoffhandel<br/>");"antiques" == b.shop && (a += "Antiquit\xE4ten<br/>");"bed" == b.shop && (a += "Betten- und Matratzengesch\xE4ft<br/>");"candles" == b.shop && (a += "Kerzengesch\xE4ft<br/>");"carpet" == b.shop && (a += "Teppichfachhandel<br/>");"curtain" == b.shop && (a += "Gardinenfachgesch\xE4ft<br/>");
    "furniture" == b.shop && (a += "M\xF6bel- und Einrichtungshaus<br/>");"interior_decoration" == b.shop && (a += "Innendekoration / Raumausstattung<br/>");"kitchen" == b.shop && (a += "K\xFCchen<br/>");"window_blind" == b.shop && (a += "Jalousien und Roll\xE4den<br/>");"computer" == b.shop && (a += "Computer-Fachh\xE4ndler<br/>");"electronics" == b.shop && (a += "Elektronikmarkt<br/>");"hifi" == b.shop && (a += "Hifi-Fachh\xE4ndler<br/>");"mobile_phone" == b.shop && (a += "Handy-Shop<br/>");"radiotechnics" == b.shop && (a += "Radio- und Fernsehtechnik<br/>");
    "vacuum_cleaner" == b.shop && (a += "Staubsaugerfachgesch\xE4ft<br/>");"bicycle" == b.shop && (a += "Fahrradfachgesch\xE4ft<br/>");"car" == b.shop && (a += "Autohaus<br/>");"car_repair" == b.shop && (a += "Autowerkstatt<br/>");"car_parts" == b.shop && (a += "Autoteilefachgesch\xE4ft<br/>");if ("dive" == b.shop || "scuba_diving" == b.shop) a += "Tauchausr\xFCstung<br/>";"fishing" == b.shop && (a += "Angelfachgesch\xE4ft<br/>");"free_flying" == b.shop && (a += "Fallschirmausr\xFCstung<br/>");"hunting" == b.shop && (a += "Jagdausr\xFCstung<br/>");
    "motorcycle" == b.shop && (a += "Motorradgesch\xE4ft<br/>");"outdoor" == b.shop && (a += "Trekking-/Outdoorladen<br/>");"sports" == b.shop && (a += "Sportgesch\xE4ft<br/>");"tyres" == b.shop && (a += "Reifenfachhandel<br/>");"water_sports" == b.shop && (a += "Wassersportbedarf<br/>");"art" == b.shop && (a += "Kunstladen<br/>");"craft" == b.shop && (a += "Kunsthandwerk<br/>");"frame" == b.shop && (a += "Bilderrahmengesch\xE4ft<br/>");"music" == b.shop && (a += "Musikgesch\xE4ft<br/>");"music_instrument" == b.shop && (a += "Musikhaus<br/>");"photo" == b.shop && (a += "Fotofachgesch\xE4ft<br/>");"video" == b.shop && (a += "Videothek<br/>");"video_games" == b.shop && (a += "Videospiele<br/>");"anime" == b.shop && (a += "Anime<br/>");"books" == b.shop && (a += "Buchhandlung<br/>");"gift" == b.shop && (a += "Andenken, Reisemitbringsel, Souveniershop<br/>");"newsagent" == b.shop && (a += "Zeitungsh\xE4ndler<br/>");"stationery" == b.shop && (a += "Schreibwaren<br/>");"ticket" == b.shop && (a += "Ticketshop<br/>");"copyshop" == b.shop && (a += "Kopierladen<br/>");"funeral_directors" == b.shop && (a += "Bestattungsunternehmen<br/>");
    "laundry" == b.shop && (a += "Waschsalon / W\xE4scherei<br/>");"dry_cleaning" == b.shop && (a += "chemische Reinigung<br/>");"money_lender" == b.shop && (a += "Geldverleiher<br/>");"pawnbroker" == b.shop && (a += "Pfandhaus / Pfandleiher<br/>");"pet" == b.shop && (a += "Zoo- und Tierhandlung<br/>");"pyrotechnics" == b.shop && (a += "Feuerwerk<br/>");"religion" == b.shop && (a += "Religi\xF6se Artikel<br/>");"beauty" == b.shop && (a += "Sch\xF6nheitssalon<br/>");"solarium" == b.shop && (a += "Solarium<br/>");"tobacco" == b.shop && (a += "Tabakwaren<br/>");
    "toys" == b.shop && (a += "Spielwaren<br/>");"travel_agency" == b.shop && (a += "Reiseb\xFCro<br/>");"market_hall" == b.shop && (a += "Markthalle<br/>");"vacant" == b.shop && (a += "leerstehendes Ladenlokal<br/>");"weapons" == b.shop && (a += "Waffenladen<br/>");"lottery" == b.gambling && (a += "Lottoannahmestelle<br/>");"fish" == b.pet && (a += "Aquaristik<br/>");"agriucultural_engines" == b.craft && (a += "Landmaschinenbau<br/>");"basket_maker" == b.craft && (a += "Korbmacher<br/>");"beekeeper" == b.craft && (a += "Imker<br/>");"blacksmith" == b.craft && (a += "Schmied<br/>");"brewery" == b.craft && (a += "Brauerei<br/>");"yes" == b.microbrewery && (a += "Hausbrauerei<br/>");"boatbuilder" == b.craft && (a += "Bootsbauer<br/>");"bookbinder" == b.craft && (a += "Buchbinder<br/>");"builder" == b.craft && (a += "Hausbau<br/>");"carpenter" == b.craft && (a += "Tischler/Schreiner, Zimmermann<br/>");"carpet_layer" == b.craft && (a += "Teppichleger<br/>");"caterer" == b.craft && (a += "Catering<br/>");"clockmaker" == b.craft && (a += "Uhrmacher<br/>");"confectionery" == b.craft && (a += "Konditorei<br/>");"dressmaker" == b.craft && (a += "Schneider<br/>");"electrician" == b.craft && (a += "Elektriker<br/>");"gardener" == b.craft && (a += "Garten- und Landschaftsbauer<br/>");"glaziery" == b.craft && (a += "Glaserei<br/>");"handicraft" == b.craft && (a += "Handwerkskunst<br/>");"hvac" == b.craft && (a += "K\xE4lteanlagenbauer f\xFCr L\xFCftungs-, Heizungs- und Klimatechnik<br/>");"insulation" == b.craft && (a += "W\xE4rmed\xE4mmung von Geb\xE4uden<br/>");"jeweller" == b.craft && (a += "Juwelier, Gold-/Silber-Schmied<br/>");"key_cutter" == b.craft && (a += "Schl\xFCsselmacher<br/>");"locksmith" == b.craft && (a += "Schl\xFCsseldienst<br/>");"metal_construction" == b.craft && (a += "Metallbauer<br/>");"optician" == b.craft && (a += "Optiker<br/>");"painter" == b.craft && (a += "Maler<br/>");"parquet_layer" == b.craft && (a += "Parkettverleger<br/>");"photographer" == b.craft && (a += "Fotograf<br/>");"photographic_laboratory" == b.craft && (a += "Fotolabor<br/>");"plasterer" == b.craft && (a += "Gipser, Verputzer, Stuckateur<br/>");"plumber" == b.craft && (a += "Anlagenmechaniker Sanit\xE4r-, Heizungs- und Klimatechnik.<br/>");
    "pottery" == b.craft && (a += "T\xF6pferei<br/>");"rigger" == b.craft && (a += "Riggemacher (Takelage f\xFCr Segelschiffe)<br/>");"roofer" == b.craft && (a += "Dachdecker<br/>");"saddler" == b.craft && (a += "Sattler<br/>");"sailmaker" == b.craft && (a += "Segelmacher<br/>");"sawmill" == b.craft && (a += "Holzverarbeitungsbetrieb<br/>");"scaffolder" == b.craft && (a += "Ger\xFCstbauer<br/>");"sculptor" == b.craft && (a += "Bildhauer<br/>");"shoemaker" == b.craft && (a += "Schuhmacher<br/>");"stand_builder" == b.craft && (a += "Messe- / Standbauer<br/>");
    "stonemason" == b.craft && (a += "Steinmetz<br/>");"sun_protection" == b.craft && (a += "Rolladen- und Jalousiebauer<br/>");"sweep" == b.craft && (a += "Schornsteinfeger<br/>");"tailor" == b.craft && (a += "Schneider<br/>");"tiler" == b.craft && (a += "Fliesen-, Platten- und Mosaikleger<br/>");"tinsmith" == b.craft && (a += "Spengler, Klempner<br/>");"upholsterer" == b.craft && (a += "Polsterer<br/>");"watchmaker" == b.craft && (a += "Uhrmacher<br/>");"window_construction" == b.craft && (a += "Fensterbauer<br/>");"machines" == b.rental && (a += "Maschinenverleih<br/>");
    "car_rental" == b.amenity && (a += "Autoverleih<br/>");"allotments" == b.landuse && (a += "Schrebergarten<br/>");"basin" == b.landuse && (a += "Regenwasserr\xFCckhaltebecken<br/>");"brownfield" == b.landuse && (a += "Vorher bebautes Land<br/>");"commercial" == b.landuse && (a += "Industriegebiet<br/>");"construction" == b.landuse && (a += "Baugebiet<br/>");"farmland" == b.landuse && (a += "Ackerfl\xE4che<br/>");"farmyard" == b.landuse && (a += "landwirtschaftlicher Betrieb<br/>");"forest" == b.landuse && (a += "Forst<br/>");"garages" == b.landuse && (a += "Garagenkomplex<br/>");"grass" == b.landuse && (a += "Rasenfl\xE4chen<br/>");"greenfield" == b.landuse && (a += "Bauerwartungsland<br/>");"greenhouse_horticulture" == b.landuse && (a += "Gew\xE4chshaus-Fl\xE4che<br/>");"industrial" == b.landuse && (a += "Gewerbe-/Industriegebiet<br/>");"landfill" == b.landuse && (a += "M\xFClldeponie<br/>");"meadow" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");"orchard" == b.landuse && (a += "Obstplantage<br/>");"plant_nursery" == b.landuse && (a += "Baumschule<br/>");"quarry" == b.landuse && (a += "Sand- und Kiesgrube<br/>");"railway" == b.landuse && (a += "Gebiet f\xFCr Eisenbahnnutzung<br/>");"recreation_ground" == b.landuse && (a += "Erholungsgebiet<br/>");"reservoir" == b.landuse && (a += "Wasserreservoir<br/>");"residential" == b.landuse && (a += "Wohngebiet<br/>");"retail" == b.landuse && (a += "Einkaufszentrum<br/>");"salt_pond" == b.landuse && (a += "Saline<br/>");"village_green" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");"vineyard" == b.landuse && (a += "Weinberg<br/>");"pond" == b.landuse && (a += "kleiner Teich<br/>");"salt_pond" == b.landuse && (a += "Saline<br/>");"animal_keeping" == b.landuse && (a += "Weide, Paddock f\xFCr Tierhaltung<br/>");"yes" == b.entrance && (a += "Eingang zum Geb\xE4ude<br/>");"main" == b.entrance && (a += "Haupteingang<br/>");"service" == b.entrance && (a += "Hinterausgang f\xFCr Angestellte oder Zulieferer<br/>");"exit" == b.entrance && (a += "Ausgang des Geb\xE4udes<br/>");"emergency" == b.entrance && (a += "Notausgang<br/>");"bay" == b.natural && (a += "Bucht<br/>");"beach" == b.natural && (a += "Strand<br/>");"wood" == b.natural && (a += "nat\xFCrlicher Wald<br/>");
    "glacier" == b.natural && (a += "Gletscher<br/>");"cave_entrance" == b.natural && (a += "H\xF6hle<br/>");"spring" == b.natural && (a += "nat\xFCrliche Quelle<br/>");"waterfall" == b.natural && (a += "Wasserfall<br/>");"scrub" == b.natural && (a += "unkultiviertes Buschland<br/>");"grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");"wetland" == b.natural && (a += "Feuchtgebiet<br/>");"tree" == b.natural && (a += "Baum");"peak" == b.natural && "yes" == b["summit:cross"] && (a += "Gipfelkreuz<br/>");"tree_row" == b.natural && (a += "Baumreihe / Allee<br/>");
    "heath" == b.natural && (a += "Heide<br/>");"moor" == b.natural && (a += "Hochmoor<br/>");"grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");"fell" == b.natural && (a += "Grasland oberhalb der Baumgrenze<br/>");"bare_rock" == b.natural && (a += "Nackter Fels<br/>");"scree" == b.natural && (a += "Schutt (Hangschutt)<br/>");"volcano" == b.natural && (a += "Vulkan<br/>");"valley" == b.natural && (a += "Tal<br/>");"stone" == b.natural && (a += "Findling<br/>");"sea" == b.natural && (a += "Meer<br/>");"national_park" == b.boundary && (a += "Nationalpark<br/>");
    "protected_area" == b.boundary && (a += "Schutzgebiet<br/>");"yes" == b.mountain_pass && (a += "Gebirgspass<br/>");"waterfall" == b.waterway && (a += "Wasserfall<br/>");"canal" == b.waterway && (a += "Kanal<br/>");"canal" == b.water && (a += "Kanal<br/>");"river" == b.waterway && (a += "Fluss<br/>");"river" == b.water && (a += "Fluss<br/>");"riverbank" == b.waterway && (a += "Fluss<br/>");"ditch" == b.waterway && (a += "Entw\xE4sserungsgraben<br/>");"stream" == b.waterway && (a += "Bach<br/>");"ferry" == b.route && (a += "F\xE4hrverbindung<br/>");"turning_point" == b.waterway && (a += "Wendestelle<br/>");if ("lake" == b.water || "water" == b.natural) a += "See<br/>";"cove" == b.water && (a += "kleine Bucht<br/>");"lagoon" == b.water && (a += "Lagune<br/>");"pond" == b.water && (a += "Teich<br/>");"reservoir" == b.water && (a += "Wasserreservoir<br/>");"oxbow" == b.water && (a += "Altwassersee<br/>");"lock" == b.water && (a += "Schleusenkammer<br/>");"moat" == b.water && (a += "Burggraben<br/>");"wastewater" == b.water && (a += "Kl\xE4ranlage<br/>");"guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "Gastliegeplatz<br/>" : "pier" == b.man_made && (a += "Anlegestelle<br/>");"boatyard" == b.waterway && (a += "Schiffswerft<br/>");"mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "Dalben<br/>");"foot" == b.route && (a += "Wanderweg<br/>");"hiking" == b.route && (a += "Wanderweg<br/>");if ("yes" == b.hiking && "information" == b.tourism) a += "Wegweiser<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {case "board":
            a += "Informationstafel<br/>";break;case "map":
            a += "Informationstafel mit Karte<br/>";break;case "office":
            a += "Touristeninformation<br/>";break;case "terminal":
            a += "Informationsterminal<br/>";break;case "audioguide":
            a += "Audioguide<br/>";break;case "guidepost":
            a += "Wegweiser<br/>";break;case "tactile_map":
            a += "Blindenkarte 2D<br/>";break;case "tactile_model":
            a += "Blindenkarte 3D<br/>";break;case "route_marker":
            a += "Wegerkennungsmarker<br/>";break;default:
            a += "Informationstafel<br/>";} else a += "Informationstafel<br/>";"bicycle" == b.route && (a += "Radwanderweg<br/>");
    "mtb" == b.route && (a += "Mountainbikeroute<br/>");"horse" == b.route && (a += "Reitwanderweg<br/>");"coastline" == b.natural && (a += "K\xFCstenlinie<br/>");"cliff" == b.natural && (a += "Klippe<br/>");"dam" == b.waterway && (a += "Staudamm<br/>");"weir" == b.waterway && (a += "Wehr<br/>");"lock_gate" == b.waterway && (a += "Schleusentor<br/>");"yes" == b.lock && (a += "Schleuse<br/>");"sluice_gate" == b.waterway && (a += "Siel<br/>");"pumping_station" == b.man_made && (a += "Sch\xF6pfwerk<br/>");"groyne" == b.man_made && (a += "Buhne<br/>");"dyke" == b.man_made && (a += "Deich<br/>");"levee" == b.man_made && (a += "Deich<br/>");"watermill" == b.man_made && (a += "Wasserm\xFChle<br/>");"airfield" == b.military && (a += "Milit\xE4rflugplatz<br/>");"naval_base" == b.military && (a += "Marinest\xFCtzpunkt<br/>");"range" == b.military && (a += "Waffen\xFCbungsplatz<br/>");"military" == b.landuse && (a += "milit\xE4risch genutztes Gebiet<br/>");"training_area" == b.military && (a += "Truppen\xFCbungsplatz<br/>");"exclusion_zone" == b.military && (a += "milit\xE4risch genutztes Gebiet<br/>");"danger_area" == b.military && (a += "milit\xE4rische Gefahrenzone<br/>");"barracks" == b.military && (a += "Kaserne<br/>");"nuclear_explosion_site" == b.military && (a += "Atomwaffentestgel\xE4nde<br/>");"yes" == b.construction ? a += "Baustelle<br/>" : "construction" == b.highway && (a += "Baustelle<br/>");"petroleum_well" == b.man_made && (a += "Erd\xF6lpumpe<br/>");"storage_tank" == b.man_made && (a += "Speichertank<br/>");"wastewater_plant" == b.man_made && (a += "Kl\xE4ranlage<br/>");"silo" == b.man_made && (a += "Silo<br/>");"water_tower" == b.man_made && (a += "Wasserturm<br/>");"windmill" == b.man_made && (a += "Windm\xFChle<br/>");"monitoring_station" == b.man_made && (a += "Messstation");"crane" == b.man_made && (a += "Kran");"lighthouse" == b.man_made && (a += "Leuchtturm");"beacon" == b.man_made && (a += "Leuchtfeuer");"breakwater" == b.man_made && (a += "Wellenbrecher");"lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "Strassenlaterne<br/>");"lantern" == b.light_source && (a += "Strassenlaterne<br/>");"floodlight" == b.light_source && (a += "Flutlicht<br/>");"signal_lamp" == b.light_source && (a += "Signallicht<br/>");"aviation" == b.light_source && (a += "Befeuerung<br/>");"warning" == b.light_source && (a += "Warnlicht<br/>");if (b.light_source && b["light:method"]) switch (a += "Licht Art: ", b["light:method"]) {case "gas":
            a += "Gas";break;case "electric":
            a += "Elektrisch";break;case "incandescent":
            a += "strahlend";break;case "halogen":
            a += "Halogen";break;case "discharge":
            a += "Entladungslicht";break;case "metal-halide":
            a += "Halogen-Metalldampflampe";break;case "neon":
            a += "Neon";break;case "sodium":
            a += "Natriumdampflampe";
            break;case "high_pressure_sodium":
            a += "Hochdruck Natriumdampflampe";break;case "low_pressure_sodium":
            a += "Niedrigdruck Natriumdampflampe";break;case "fluorescent":
            a += "Fluoreszenzlampe";break;case "mercury":
            a += "Quecksilberlampe";break;case "LED":
            a += "LED";break;case "laser":
            a += "Laser";break;case "arc":
            a += "Lichtbogen";break;default:
            a += "Unbekannt";}"drinking_water" == b.amenity && (a += "Trinkwasser<br/>");"yes" == b.drinking_water && (a += "Trinkwasser<br/>");"works" == b.man_made ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.building ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.landuse ? a += "Industriegebiet<br/>" : "industrial" == b.abutters ? a += "Industriegebiet<br/>" : "commercial" == b.abutters && (a += "Gewerbegebiet<br/>");if (b["generator:source"]) switch (a += "Anlagen-Typ: ", b["generator:source"]) {case "biomass":
            a += "Biogasanlage";break;case "biofuel":
            a += "Biogasanlage";break;case "biogas":
            a += "Biogasanlage";break;case "coal":
            a += "Kohlekraftwerk";break;case "oil":
            a += "\xD6lraffinerie";break;case "waste":
            a += "M\xFCllverbrennungsanlage";
            break;case "wind":
            a += "Windkraftwerk";break;case "solar":
            a += "Solarkraftwerk";break;case "hydro":
            a += "Wasserkraftwerk";break;case "tidal":
            a += "Gezeitenkraftwerk";break;case "wave":
            a += "Wellenkraftwerk";break;case "geothermal":
            a += "Geothermie";break;case "osmotic":
            a += "Osmosekraftwerk";break;case "nuclear":
            a += "Atomkraftwerk";break;default:
            a += "unbekannt<br/>";}"photovoltaic" == b.power_source && (a += "Solarkraftwerk");"line" == b.power && (a += "Hochspannungs-\xDCbertragungsleitung<br/>");"cable" == b.power && (a += "Untergrundkabel<br/>");
    "cable_distribution_cabinet" == b.power && (a += "Kabelverteilerschrank<br/>");"plant" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"sub_station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"compensator" == b.power && (a += "Kompensator<br/>");"converter" == b.power && (a += "Konverter<br/>");"generator" == b.power && (a += "Generator<br/>");"heliostat" == b.power && (a += "Heliostat<br/>");"insulator" == b.power && (a += "Isulator<br/>");"busbar" == b.line && (a += "Sammelschiene<br/>");
    "bay" == b.line && (a += "Verbindung Schaltung und Sammelschiene<br/>");"minor_line" == b.power && (a += "Nebenlinie<br/>");"pole" == b.power && (a += "Pfahl<br/>");"portal" == b.power && (a += "H-f\xF6rmiger Mast<br/>");"catenary_mast" == b.power && (a += "Fahrleitungsmast<br/>");"substation" == b.power && (a += "Umspannwerk<br/>");"switch" == b.power && (a += "Lastschalter<br/>");"terminal" == b.power && (a += "Terminal / Anschluss<br/>");"tower" == b.power && (a += "Hochspannungsleitungs<br/>");"transformer" == b.power && (a += "Nebenlinie<br/>");if (b.barrier) switch (b.barrier) {case "bollard":
            a += "Poller, Pfosten<br/>";break;case "cycle_barrier":
            a += "Umlaufsperre, Dr\xE4ngelgitter<br/>";break;case "gate":
            a += "Tor, Schranke<br/>";break;case "chain":
            a += "Kette<br/>";break;case "lift_gate":
            a += "Schlagbaum<br/>";break;case "wall":
            a += "L\xE4rmschutzwand<br/>";break;case "toll_booth":
            a += "Mautstelle<br/>";break;case "fence":
            switch (b.fence_type) {case "barbed_wire":
                    a += "Stacheldrahtzaun<br/>";break;case "wood":
                    a += "Holzzaun<br/>";break;case "chain_link":
                    a += "Maschendrahtzaun<br/>";break;case "electric":
                    a += "Weidezaun<br/>";break;case "railing":
                    a += "Gel\xE4nder<br/>";break;case "wire":
                    a += "einfacher Drahtzaun<br/>";break;case "metal":
                    a += "Metallzaun<br/>";break;case "pole":
                    a += "Holzpf\xE4hle<br/>";break;default:
                    a += "Zaun<br/>";}break;case "block":
            a += "Block<br/>";break;case "ditch":
            a += "Graben<br/>";break;case "border_control":
            a += "Grenzkontrolle<br/>";break;case "hedge":
            a += "Hecke<br/>";break;case "retaining_wall":
            a += "St\xFCtzmauer<br/>";break;case "cattle_grid":
            a += "Weiderost<br/>";break;case "horse_stile":
            a += "Zaun\xFCbertritt<br/>";break;default:
            a += "unbekannt<br/>";}"noise_barrier" == b.wall && (a += "L\xE4rmschutzwand<br/>");"retaining_wall" == b.designation && (a += "L\xE4rmschutzwand<br/>");"noise_barrier" == b.designation && (a += "L\xE4rmschutzwand<br/>");"surveillance" == b.man_made && (a += "\xDCberwachter Bereich<br/>");if (b.aeroway) switch (a += "Flughafen: ", b.aeroway) {case "aerodrome":
            a += "Flugplatz";break;case "apron":
            a += "Vorfeld";break;case "gate":
            a += "gate";break;case "helipad":
            a += "Hubschrauberlandeplatz";break;
        case "hangar":
            a += "Hangar";break;case "runway":
            a += "Start-/Landebahn";break;case "taxiway":
            a += "Rollweg";break;case "terminal":
            a += "Flughafengeb\xE4ude";break;default:
            a += "unbekannt<br/>";}"halt" == b.railway && (a += "Bahn-Haltepunkt<br/>");"crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");"level_crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");"station" == b.railway && (a += "Bahnhof<br/>");"bus_station" == b.amenity && (a += "Busbahnhof<br/>");"bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "Busbahnhof<br/>");"rail" == b.railway && (a += "Bahnlinie<br/>", "contact_line" == b.electrified && (a += "elektrifizierte Bahntrasse mit Oberleitung<br/>"));"tram" == b.railway && (a += "Stra\xDFenbahnlinie<br/>");if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "Slipanlage<br/>";if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {case "ferry":
            a += "F\xE4hrhafen<br/>";break;case "container":
            a += "Containerhafen<br/>";
            break;case "marina":
            "marina" != b.leisure && (a += "Jachthafen<br/>");break;case "navel_base":
            a += "Marine-Hafen<br/>";break;case "tanker":
            a += "Hafen f\xFCr \xD6ltanker<br/>";break;case "passenger":
            a += "Personenschifffahrt<br/>";break;case "bulk":
            a += "Sch\xFCttgut-Hafen<br/>";break;default:
            a += "Hafen<br/>";} else a += "Hafen<br/>";"marina" == b.leisure && (a += "Jachthafen<br/>");"wreck" == b.historic && (a += "Wrack<br/>");"animal_shelter" == b.amenity && (a += "Tierheim<br/>");"shelter" == b.animal && (a += "Tierheim<br/>");"horse_walker" == b.animal && (a += "Pferdelauftrainer<br/>");"yes" == b.animal_shelter && (a += "Tierheim<br/>");"dog" == b.animal_shelter && (a += "Tierheim<br/>");"cat" == b.animal_shelter && (a += "Tierheim<br/>");"animal_boarding" == b.amenity && (a += "Tierpension<br/>");"yes" == b.animal_boarding && (a += "Tierpension<br/>");"dog" == b.animal_boarding && (a += "Tierpension<br/>");"horse" == b.animal_boarding && (a += "Tierpension<br/>");"cat" == b.animal_boarding && (a += "Tierpension<br/>");"dog;cat" == b.animal_boarding && (a += "Tierpension<br/>");"cat;dog" == b.animal_boarding && (a += "Tierpension<br/>");if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "Tiertraining<br/>";"swimming" == b.animal && (a += "Badestelle f\xFCr Hunde<br/>");if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "F\xFCtterungsstelle<br/>";if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "Wildf\xFCtterung<br/>";if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "Futterraufe<br/>";
    "manger" == b.amenity && (a += "Krippe<br/>");"birdhouse" == b.man_made && (a += "Vogelhaus<br/>");"stork" == b.birds_nest && (a += "Storchennest<br/>");"nest_box" == b.amenity && (a += "Nistkasten<br/>");"wellness" == b.animal && (a += "Hundesalon<br/>");"cemetery" == b.animal && (a += "Kleintierfriedhof<br/>");if ("stable" == b.building || "stable" == b["building:use"]) a += "Pferdestall<br/>";"cowshed" == b.building && (a += "Kuhstall<br/>");"sty" == b.building && (a += "Schweinestall<br/>");"barn" == b.building && (a += "Scheune / landwirtsch. Lagerhalle<br/>");
    "farm_auxiliary" == b.building && (a += "landwirtschaftl. Nebengeb\xE4ude<br/>");if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "Flusskilometer<br/>";"milestone" == b.highway && (a += "Strassenkilometer<br/>");"market" == b["xmas:feature"] && (a += "Weihnachtsmarkt<br/>");"tree" == b["xmas:feature"] && (a += "Weihnachtsbaumverkauf<br/>");"event" == b["xmas:feature"] && (a += "Weihnachtsevent<br/>");"pyramid" == b["xmas:feature"] && (a += "Weihnachtspyramide<br/>");return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}
var fnContent = exports.fnContent = function fnContent(b) {
    var a;a = "" + fnContentGeneralInformations(b);a += fnContentHealthcare(b);a += fnContentAerodrome(b);a += fnContentCuisine(b);a += fnContentShipping(b);a += fnContentHydrants(b);a += fnContentSports(b);a += fnContentStreetsTraffic(b);a += fnContentInformationCity(b);a += fnContentEmergency(b);a += fnContentStorage(b);a += fnContentAmenity(b);a += fnContentTourism(b);a += fnContentRoute(b);a += fnContentPetrol(b);a += fnContentBarriers(b);a += fnContentLanduse(b);a += fnContentNatural(b);a += fnKlosterAdditional(b);a += fnSicherheitAdditional(b);a += fnAdditionalBuildingInfos(b);a += fnKraftwerkInfo(b);a += fnMessstation(b);a += fnWertstoffinfo(b);(a += fnContentProtectedArea(b)) && (a = "<br/>" + a);return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = exports.fnContentAerodrome = function fnContentAerodrome(b) {
    var a = "";b.aerodrome && ("international" == b.aerodrome && (a += "Flughafentype: internationaler Flugplatz<br/>"), "regional" == b.aerodrome && (a += "Flughafentype: regionaler Flugplatz<br/>"), "gliding" == b.aerodrome && (a += "Flughafentype: Segelflugplatz<br/>"), "private" == b.aerodrome && (a += "Flughafentype: Privatflugplatz<br/>"));b.iata && (a += "IATA-Code: " + b.iata + "<br/>");b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");return a;
},
    fnContentNatural = exports.fnContentNatural = function fnContentNatural(b) {
    var a = "";if (b.forest || b.wood) {
        if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "Laubwald<br/>";if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "Nadelwald<br/>";if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "Mischwald<br/>";"leafless" == b.leaf_type && (a += "Blattlose Vegetation<br/>");"evergreen" == b.wood && (a += "immergr\xFCn<br/>");
        "palm" == b.wood && (a += "Palmen<br/>");"nipa_palm" == b.wood && (a += "Nipapalmen<br/>");"eucalypt" == b.wood && (a += "Eukalypten<br/>");if ("filao" == b.wood || "casuarina" == b.wood) a += "Kasuarinengew\xE4chse<br/>";
    }if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "Laubbaum<br/>" : a + "Nadelbaum<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "durch Gr\xF6\xDFe und herausragender Position sich deutlich aus seinem Umfeld hervorhebender Baum.<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "alter, unter besonderem Schutz stehender Baum.<br/>";"manger" == b["feeding:type"] && (a += "Futterbeh\xE4lter: Futterraufe<br/>");"automated" == b["feeding:type"] && (a += "Automat<br/>");if (b["feeding:for"]) switch (b["feeding:for"]) {case "sheep":
            a += "Tier: Schaaf<br/>";break;case "horse":
            a += "Tier: Pferd<br/>";break;case "cow":
            a += "Tier: Kuh<br/>";break;case "rabbit":
            a += "Tier: Kaninchen<br/>";break;case "bunny":
            a += "Tier: Hase<br/>";break;case "cat":
            a += "Tier: Katze </br>";break;case "swan":
            a += "Tier: Schwan </br>";break;case "guinea pig":
            a += "Tier: Meerschweinchen </br>";break;case "donkey":
            a += "Tier: Esel </br>";break;case "squirrel":
            a += "Tier: Eichh\xF6rnchen </br>";break;case "pig":
            a += "Tier: Schwein </br>";break;case "deer":
            a += "Tier: Reh </br>";break;case "guinea pig":
            a += "Tier: Meerschweinchen </br>";
            break;case "monkey":
            a += "Tier: Affe </br>";break;case "camel":
            a += "Tier: Kamel </br>";break;case "goat":
            a += "Tier: Ziege </br>";break;case "hamster":
            a += "Tier: Hamster </br>";break;case "alpaca":
            a += "Tier: Alpaka </br>";break;default:
            a += "Tiere: nicht bekannt<br/>";}if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {case "hay":
            a += "F\xFCttern mit: Heu</br>";break;case "grain":
            a += "F\xFCttern mit: Getreide</br>";break;case "corn":
            a += "F\xFCttern mit: Korn</*br>";break;default:
            a += "F\xFCttern mit: nicht bekannt</br>";}"volcano" == b.natural && "active" == b.status && (a += "Aktiver Vulkan<br/>");"volcano" == b.natural && "dormant" == b.status && (a += "Ruhender Vulkan<br/>");"volcano" == b.natural && "extinct" == b.status && (a += "Erloschener Vulkan<br/>");"volcano" == b.natural && "stratovolcano" == b.type && (a += "Vulkantyp:Schichtvulkan<br/>");"volcano" == b.natural && "shield" == b.type && (a += "Vulkantyp:Schildvulkan<br/>");"volcano" == b.natural && "scoria" == b.type && (a += "Vulkantyp:Schlacken- und Aschenkegel<br/>");return a;
},
    fnContentProtectedArea = exports.fnContentProtectedArea = function fnContentProtectedArea(b) {
    var a = "",
        c = "";"protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "Beschreibung: Strenges Naturreservat, Wildnisgebiet<br/>"), "2" == c && (a = "Beschreibung: Nationalpark<br/>"), "3" == c && (a = "Beschreibung: Naturmonument<br/>"), "4" == c && (a = "Beschreibung: Biotop/Artenschutzgebiet mit Management<br/>"), "5" == c && (a = "Beschreibung: Gesch\xFCtzte Landschaft/Gesch\xFCtztes marines Gebiet<br/>"), "6" == c && (a = "Beschreibung: Ressourcenschutzgebiet mit Management<br/>"), "7" == c && (a = "Beschreibung: Lokal gesch\xFCtzte Bereiche<br/>"), "97" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch Vereinbarungen auf kontinentaler Ebene<br/>"), "98" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch zwischenstaatliche- oder internationale Vereinbarungen<br/>"), "99" == c && (a = "andere <br/>"), "21" == c && (a = "Beschreibung: Gemeindebefinden (heilige Orte, assoziatice Orte)<br/>"), "22" == c && (a = "Beschreibung: Kulturelle Werte (Kulturg\xFCter, historisches Erbe, Denkmalschutz)<br/>"), "23" == c && (a = "Beschreibung: Schutz zu Gundsten der Wirtschaft<br/>"), "24" == c && (a = "Beschreibung: Politische Schutzgebiete<br/>"), "25" == c && (a = "Beschreibung: Milit\xE4rische Schutzgebiete<br/>"), "26" == c && (a = "Beschreibung: Historische Schutzgebiete<br/>"), "29" == c && (a = "Beschreibung: Weitere gesellschaftliche Schutzgebiete<br/>"), "11" == c && (a = "Beschreibung: Bodenschutz (Vorgabe zum Fruchtbarkeitserhalt und Erosionsschutz)<br/>"), "12" == c && (a = "Beschreibung: Wasserschutzgebiet (Trinkwasserschutzgebiet, Heilquellenschutzgebiet,..)<br/>"), "13" == c && (a = "Beschreibung: Klima und Luft (Kaltluftenstehung/Frischluftversorgung, Immissionsschutz,..)<br/>"), "14" == c && (a = "Beschreibung: Artenschutzgebiet (Angelverbot, Fischereischutzzone, Jagdschutzgebiet, Vogelschutzgebiet,..)<br/>"), "15" == c && (a = "Beschreibung: \"Standortausstattung\": Retentionsraum (gesetzlich gesch\xFCtztes \xDCberschwemmungsgebiet) <br/>"), "16" == c && (a = "Beschreibung: Dauerhafte Gefahrenbereiche (Lebensschutz, Bodenbewegungsgebiet,..)<br/>"), "19" == c && (a = "Beschreibung: Weitere nationale Gebiete<br/>"));
    return a;
},
    fnContentLanduse = exports.fnContentLanduse = function fnContentLanduse(b) {
    var a = "";"quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");"open_stable" == b["animal_keeping:type"] && (a += "Offenstall<br/>");"field_shelter" == b["animal_keeping:type"] && (a += "Weide mit Unterstand<br/>");"paddock" == b["animal_keeping:type"] && (a += "Paddock<br/>");b.animal_keeping && (a += "Tiere: Perde<br/>");return a;
},
    fnMessstation = exports.fnMessstation = function fnMessstation(b) {
    var a = "";"yes" == b["monitoring:water_level"] && (a += "Pegelstand<br/>");"yes" == b["monitoring:seismic_activity"] && (a += "seismische Aktivit\xE4ten<br/>");"yes" == b["monitoring:tide_gauge"] && (a += "Tidestand<br/>");"yes" == b["monitoring:weather"] && (a += "Wetterdaten<br/>");"yes" == b["monitoring:air_quality"] && (a += "Luftqualit\xE4t<br/>");return a;
},
    fnContentRoute = exports.fnContentRoute = function fnContentRoute(b) {
    var a = "";b.route && ("yes" == b.roundtrip && (a += "Rundweg<br/>"), b.length && (a += "L\xE4nge/Distanz: " + b.length + "<br/>"), b.distance && (a += "L\xE4nge/Distanz: " + b.distance + "<br/>"), b.symbol && (a += "Symbol: " + b.symbol + "<br/>"));return a;
},
    fnContentPetrol = exports.fnContentPetrol = function fnContentPetrol(b) {
    var a = "";"fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "Biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "Ethanol<br/>"), "yes" == b["fuel:e10"] && (a += "E10<br/>"), "yes" == b["fuel:lpg"] && (a += "Autogas<br/>"), "yes" == b["fuel:cng"] && (a += "Erdgas<br/>"), "diesel" == b.fuel && (a += "Diesel<br/>"), "lpg" == b.fuel && (a += "Autogas<br/>"), "yes" == b["fuel:octane_95"] && (a += "Super Bleifrei<br/>"), "yes" == b["fuel:octane_98"] && (a += "Super Plus<br/>"), "yes" == b["fuel:octane_100"] && (a += "V-Power Racing<br/>"), "yes" == b["fuel:octane_102"] && (a += "Ultimate<br/>"), "yes" == b["fuel:diesel"] && (a += "Diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "Ladestation / Stromtankstelle<br/>"));return a;
},
    fnContentHistoric = exports.fnContentHistoric = function fnContentHistoric(b) {
    var a = "";if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {case "megalith":
            a += "Megalith<br/>";break;case "bigstone":
            a += "Findling<br/>";break;case "tumulus":
            a += "H\xFCgelgrab<br/>";break;case "fortification":
            a += "historischer Graben / Wall<br/>";break;default:
            a += "unbekannt<br/>";}return a;
},
    fnContentBarriers = exports.fnContentBarriers = function fnContentBarriers(b, a) {
    var c = "";if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "Material: " + translate(b.material) + "<br/>");return c;
},
    fnContentTourism = exports.fnContentTourism = function fnContentTourism(b) {
    var a = "";if ("camp_site" == b.tourism) {
        "yes" == b.dog && (a += "Hunde erlaubt<br/>");"no" == b.dog && (a += "Hunde nicht erlaubt<br/>");b.stars && (a += b.stars + "Sterne<br/>");b.caravans && (a += "Wohnmobilstellpl\xE4tze<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Feuerstellen vorhanden<br/>";"yes" == b.washing_machine && (a += "Waschmaschinen<br/>");"yes" == b.dryer && (a += "Trockner<br/>");"yes" == b.group_only && (a += "Nutzung nur durch Gruppen<br/>");"reception" == b.camp_site && (a += "Reception vorhanden<br/>");
    }"information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "Topografische Karte</br>"), "street" == b.map_type && (a += "Stra\xDFenkarte</br>"), "scheme" == b.map_type && (a += "Schematische Karte</br>"), "toposcope" == b.map_type && (a += "Schematische Karte</br>"));"information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "Karte einer Anlage</br>"), "city" == b.map_size && (a += "Stadtplan</br>"), "region" == b.map_size && (a += "Karte der Region</br>"));"geology" == b.board_type && (a += "Geologische Informationen<br/>");"history" == b.board_type && (a += "Historische Informationen<br/>");"nature" == b.board_type && (a += "Informationen \xFCber Natur<br/>");"notice" == b.board_type && (a += "Allgemeine Information<br/>");"plants" == b.board_type && (a += "Informationen \xFCber Pflanzen<br/>");"wildlife" == b.board_type && (a += "Informationen \xFCber Wild<br/>");return a;
},
    fnContentAmenity = exports.fnContentAmenity = function fnContentAmenity(b) {
    var a = "";"boat_sharing" == b.amenity && (a += b.boattype + "<br/>");"embassy" == b.amenity && (a += b.country + "<br/>");if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "Tickets<br/>";break;case "animal_feed":
            a += "Tierfutter<br/>";break;case "books":
            a += "B\xFCcher<br/>";break;case "candles":
            a += "Kerzen<br/>";break;case "cigarettes":
            a += "Zigaretten<br/>";break;case "condoms":
            a += "Kondome<br/>";break;case "drinks":
            a += "Getr\xE4nke<br/>";break;case "first_aid":
            a += "Erste Hilfe Artikel<br/>";break;
        case "fishing_tackle":
            a += "Angelequipment<br/>";break;case "flowers":
            a += "Blumen<br/>";break;case "ice_cream":
            a += "Eis<br/>";break;case "laundry_detergent":
            a += "Waschmittel<br/>";break;case "newspapers":
            a += "Zeitung<br/>";break;case "SIM_cards":
            a += "SIM-Karten<br/>";break;case "sweets":
            a += "S\xFC\xDFigkeiten<br/>";break;case "parcel_pickup":
            a += "Paketstation<br/>";break;case "ice_cubes":
            a += "Eisw\xFCrfel<br/>";break;case "public_transport_tickets":
            a += "Tickets f\xFCr \xF6ffentliche Verkehrsmittel<br/>";
            break;case "parking_ticket":
            a += "Parkticket<br/>";break;case "sex_toys":
            a += "Sexspielzeug<br/>";break;case "stamps":
            a += "Briefmarken<br/>";break;case "toll":
            a += "Mauttickets<br/>";break;case "umbrellas":
            a += "Regenschirme<br/>";break;default:
            a += "Inhalt unbekannt<br/>";}"post_box" == b.amenity && (b.collection_times && (a += "Leerungszeiten: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "Vom Auto aus erreichbar. <br/>"));return a;
},
    fnContentStorage = exports.fnContentStorage = function fnContentStorage(b) {
    var a = "";if ("storage_tank" == b.man_made) {
        if (b.content) {
            var c = b.content;switch (c) {case "fuel":
                    c = "Diesel";break;case "oil":
                    c = "\xD6l";break;case "gas":
                    c = "Gas";break;case "slurry":
                    c = "G\xFClle";break;case "cement":
                    c = "Zement";break;case "water":
                    c = "Wasser";break;case "manure":
                    c = "D\xFCnger";break;case "silage":
                    c = "Silage";}a += "Inhalt: " + c + "<br/>";
        }if (b.contents) {
            c = b.contents;switch (c) {case "fuel":
                    c = "Diesel";break;case "oil":
                    c = "\xD6l";break;case "gas":
                    c = "Gas";break;case "slurry":
                    c = "G\xFClle";break;case "cement":
                    c = "Zement";break;case "water":
                    c = "Wasser";break;
                case "manure":
                    c = "D\xFCnger";break;case "silage":
                    c = "Silage";}a += "Inhalt: " + c + "<br/>";
        }
    }b.storage && ("gas" == b.storage && (a += "Inhalt: Gas<br/>"), "oil" == b.storage && (a += "Inhalt: \xD6l<br/>"));return a;
},
    fnContentInformationCity = exports.fnContentInformationCity = function fnContentInformationCity(b) {
    var a = "";b["name:de"] && (a += "deutscher Name: " + b["name:de"] + "<br/>");if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
        var c = b.population.length % 3,
            d = 0 < c ? b.population.substring(0, c) : "";for (i = 0; i < Math.floor(b.population.length / 3); i++) {
            d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));
        }a += "Einwohnerzahl: " + d + "<br/>";
    } else a += "Einwohnerzahl " + b.population + "<br/>";1E4 >= b.population && (a += "Einwohnerzahl: " + b.population + "<br/>");return a;
},
    fnContentEmergency = exports.fnContentEmergency = function fnContentEmergency(b) {
    var a = "";b.lifeboat && ("inshore" == b.lifeboat ? a += "Einsatzgebiet: Inshore (Binnen)<br/>" : "offshore" == b.lifeboat && (a += "Einsatzgebiet: Offshore (Buten)<br/>"));b["lifeboat:class"] && (a += "Bootstyp: " + b["lifeboat:class"] + "<br/>");if (b["siren:type"]) {
        var c = b["siren:type"];switch (c) {case "mechanical":
                c = "mechanisch";break;case "electronic":
                c = "elektronisch";break;case "pneumatic":
                c = "pneumatisch";break;case "electromechanic":
                c = "elektromechanisch";}a += "Typ: " + c + "<br/>";
    }if (b["siren:purpose"]) {
        c = b["siren:purpose"];switch (c) {case "air_raid":
                c = "Luftschutz";break;case "tornado":
                c = "Tornado";break;case "storm":
                c = "Sturm";break;case "civil_defense":
                c = "Bev\xF6lkerungsschutz";break;case "fire":
                c = "Feuer";}a += "Nutzung: " + c + "<br/>";
    }b["siren:model"] && (a += "Model: " + b["siren:model"] + "<br/>");b["siren:range"] && (a += "H\xF6rweite: " + b["siren:range"] + "<br/>");return a;
},
    fnContentCuisine = exports.fnContentCuisine = function fnContentCuisine(b) {
    var a = "";if (b.cuisine) {
        var c = "",
            a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "Spezialit\xE4ten: " : a + "K\xFCche: ";"arabic" == b.cuisine && (c += "arabisch<br/>");"italian" == b.cuisine && (c += " italienisch<br/>");"international" == b.cuisine && (c += " international<br/>");"regional" == b.cuisine && (c += " regional<br/>");"chinese" == b.cuisine && (c += " chinesisch<br/>");"greek" == b.cuisine && (c += " griechisch<br/>");"african" == b.cuisine && (c += " afrikanisch<br/>");"german" == b.cuisine && (c += " deutsch<br/>");"mexican" == b.cuisine && (c += " mexikanisch<br/>");"french" == b.cuisine && (c += " franz\xF6sisch<br/>");"indian" == b.cuisine && (c += " indisch<br/>");"iranian" == b.cuisine && (c += " iranisch<br/>");"lebanese" == b.cuisine && (c += " libanesisch<br/>");"thai" == b.cuisine && (c += " thail\xE4ndisch<br/>");"balkan" == b.cuisine && (c += " balkan<br/>");"turkish" == b.cuisine && (c += " t\xFCrkisch<br/>");"bavarian" == b.cuisine && (c += " bayrisch<br/>");"czech" == b.cuisine && (c += " tschechisch<br/>");"portuguese" == b.cuisine && (c += " portugiesisch<br/>");"spanish" == b.cuisine && (c += " spanisch<br/>");"japanese" == b.cuisine && (c += " japanisch<br/>");"fish" == b.cuisine && (c += " Fisch<br/>");"brazilian" == b.cuisine && (c += " brasilianisch<br/>");"asian" == b.cuisine && (c += " asiatisch<br/>");"mediterranean" == b.cuisine && (c += " mediterran<br/>");"seafood" == b.cuisine && (c += " Meeresfr\xFCchte<br/>");"ice_cream" == b.cuisine && (c += " Eiscrem<br/>");"burger" == b.cuisine && (c += " Fast Food<br/>");"frozen_yogurt" == b.cuisine && (c += " Frozen Yogurt<br/>");"" == c && (c = b.cuisine + "<br/>");a += c;
    }return a;
},
    fnContentShipping = exports.fnContentShipping = function fnContentShipping(b) {
    var a = "";b.harbour = "yes";"yes" == b["access:tide"] && (a += "Zufahrtsbeschr\xE4nkung durch Tide</br>");"yes" == b["access:swell"] && (a += "Zufahrtsbeschr\xE4nkung durch Schwell</br>");"yes" == b["access:ice"] && (a += "Zufahrtsbeschr\xE4nkung durch Eis</br>");b.vhf_channel && (a += "UKW-Kanal: " + b.vhf_channel + "</br>");b.mmsi && (a += "MMSI-Nummer: " + b.mmsi + "</br>");b["harbour:information"] && (a += "Information :" + b["harbour:information"] + "</br>");"yes" == b.motorboat && (a += "Fahren mit Motor erlaubt</br>");"no" == b.motorboat && (a += "Fahren mit Motor nicht erlaubt</br>");b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");"yes" == b.intermittent && (a += "Fluss zeitweise ausgetrocknet</br>");"yes" == b.tidal && (a += "Gezeiten beeinflussen die Str\xF6mung</br>");b.draft && (a += "Fahrwassertiefe: " + b.draft + " m</br>");if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "Funktionsweise: Handbetrieb, Slipwagen<br/>"), "car" == b.operating && (a += "Funktionsweise: mit Auto, Bootsanh\xE4nger<br/>"), "cable_winch" == b.operating && (a += "Funktionsweise: Seilwinde<br/>"), "travellift" == b.operating && (a += "Funktionsweise: Travellift<br/>"), "crane" == b.man_made && (a += "mit Kran<br/>", b["crane:maxload"] && (a += "Maximale Last: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "Maximaler Tiefgang: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "Maximale Bootsl\xE4nge: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "Mit Fahrzeug erreichbar<br/>");a += fnWreckInfo(b);if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) {
        var c = b.duration;"" != c && "undefined" != c && null != c && (a += "Fahrtzeit in Std. : " + c + "<br/>");"yes" == b.motorcar && (a += "Autos erlaubt <br/>");"no" == b.motorcar && (a += "Autos nicht erlaubt <br/>");"no" == b.motor_vehicle && (a += "Fahrzeuge nicht erlaubt <br/>");"yes" == b.motor_vehicle && (a += "Fahrzeuge erlaubt <br/>");"yes" == b.vehicle && (a += "Fahrzeuge erlaubt <br/>");"no" == b.vehicle && (a += "Keine Fahrzeuge<br/>");"no" == b.bicycle && (a += "Keine Fahrr\xE4der<br/>");"no" == b.bicycle && (a += "Fahrr\xE4der erlaubt<br/>");"yes" == b.hgv && (a += "LKW erlaubt <br/>");"no" == b.hgv && (a += "LKW nicht erlaubt <br/>");"yes" == b.foot && (a += "Fussg\xE4nger erlaubt <br/>");"no" == b.foot && (a += "Fussg\xE4nger nicht erlaubt <br/>");"yes" == b.bicycle && (a += "Fahrradfahrer erlaubt <br/>");"no" == b.bicycle && (a += "Fahrradfahrer nicht erlaubt <br/>");"yes" == b["ferry:cable"] && (a += "Seilf\xE4hre<br/>");
    }if (b["seamark:light:1:colour"]) {
        c = b["seamark:light:1:colour"];switch (c) {case "white":
                c = "Wei\xDF";break;case "red":
                c = "Rot";break;case "green":
                c = "Gr\xFCn";break;case "blue":
                c = "Blau";break;case "yellow":
                c = "Gelb";break;case "amber":
                c = "Bernsteinfarben";}a += "Farbe des Lichts: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "Periode: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "H\xF6he: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "Reichweite: " + b["seamark:light:1:range"] + " sm<br/>"));if (b["seamark:light:colour"]) {
        c = b["seamark:light:colour"];switch (c) {case "white":
                c = "Wei\xDF";break;case "red":
                c = "Rot";break;case "green":
                c = "Gr\xFCn";break;case "blue":
                c = "Blau";break;case "yellow":
                c = "Gelb";break;case "amber":
                c = "Bernsteinfarben";}a += "Farbe des Lichts: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "H\xF6he: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "Reichweite: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "Periode: " + b["seamark:light:period"] + "<br/>"));return a;
},
    fnContentHydrants = exports.fnContentHydrants = function fnContentHydrants(b) {
    var a = "";if ("fire_hydrant" == b.emergency) {
        var c = b["fire_hydrant:count"];"undefined" != c && null != c && "" != c && (a += "Anzahl: " + c + "<br/>");c = b["fire_hydrant:diameter"];
        "undefined" != c && null != c && "" != c && (a += "Rohrdurchmesser: " + c + " mm<br/>");c = b["fire_hydrant:pressure"];"undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Druck in bar / Saugleitung: Saugleitung<br/>" : a + ("Druck in bar / Saugleitung: " + c + "<br/>"));c = b["fire_hydrant:position"];"undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Fahrbahn<br/>" : "parking_lot" == c ? a += "Position: Parkbucht<br/>" : "sidewalk" == c ? a += "Position: B\xFCrgersteig<br/>" : "green" == c && (a += "Position: Wiese<br/>"));c = b.water_volume;
        "undefined" != c && null != c && "" != c && (a += "Volumen: " + c + "<br/>");c = b["fire_hydrant:awwa_class"];"undefined" != c && null != c && "" != c ? a += "AWWA Klasse: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Durchfluss: " + c + "<br/>"));c = b.water_source;"undefined" != c && null != c && "" != c && "main" != c && (a += "Wasserquelle: " + c + "<br/>");c = b["couplings:type"];"undefined" != c && null != c && "" != c && (a += "Kopplungstyp: " + c + "<br/>");c = b["couplings:diameter"];"undefined" != c && null != c && "" != c && (a += "Kopplungsdurchmesser: " + c + "<br/>");c = b["pillar:type"];"dry_barrel" === c && (a += "Typ \xDCberflurhydrant: " + c + "<br/>");"fire_hydrant" === b["disused:emergency"] && (a += "Aktuell unbrauchbar.");"" == a && (a = "Keine Details vorhanden.");
    }return a;
},
    fnContentStreetsTraffic = exports.fnContentStreetsTraffic = function fnContentStreetsTraffic(b) {
    var a = "";"yes" == b["red_turn:right"] && (a += "Ampel mit Gr\xFCnpfeil<br/>");"no" == b["red_turn:right"] && (a += "Ampel ohne Gr\xFCnpfeil<br/>");b.bridge && (b.height && (a += "H\xF6he \xFCber dem Grund: " + b.height + " m<br/>"), b.length && (a += "L\xE4nge der Br\xFCcke: " + b.length + " m<br/>"), b.bridge_ref && (a += "Bauwerksnummer: " + b.bridge_ref + "<br/>"), b.start_date && (a += "Baujahr: " + b.start_date + "</br>;"), b.maxweight && (a += "Tragf\xE4higkeit: " + b.maxweight + " t</br>"));b.highway && "yes" == b.toll && (a += "Mautpflichtige Stra\xDFe<br/>");"yes" == b["toll:hgv"] && (a += "Mautpflichtige Stra\xDFe f\xFCr LKWs<br/>");if (b.surface) {
        var c = b.surface,
            a = a + "Oberfl\xE4che: ";switch (c) {case "grass":
                a += "Gras<br/>";break;case "paved":
                a += "versiegelt<br/>";break;case "asphalt":
                a += "Asphalt<br/>";
                break;case "cobblestone":
                a += "Naturstein unbehauen<br/>";break;case "sett":
                a += "behauenes Steinpflaster<br/>";break;case "concrete":
                a += "Beton<br/>";break;case "unpaved":
                a += "ohne Stra\xDFenbelag<br/>";break;case "paving_stones":
                a += "Pflastersteine<br/>";break;case "compacted":
                a += "verdichtete Deckschicht aus Natursteinmaterial<br/>";break;case "dirt":
                a += "unbefestigt<br/>";break;case "fine_gravel":
                a += "Splitt/Kies<br/>";break;case "grass_paver":
                a += "Rasengittersteine<br/>";break;case "gravel":
                a += "Schotter<br/>";
                break;case "earth":
                a += "naturbelassene Oberfl\xE4che<br/>";break;case "ground":
                a += "naturbelassene Oberfl\xE4che<br/>";break;case "metal":
                a += "Metall<br/>";break;case "mud":
                a += "Matsch, Morast<br/>";break;case "sand":
                a += "Sand<br/>";break;case "wood":
                a += "Holz<br/>";break;case "tartan":
                a += "Tartan- oder Kunststoffbelag<br/>";break;case "artificial_turf":
                a += "Kunstrasen<br/>";break;case "clay":
                a += "Ascheplatz<br/>";break;default:
                a += "unbekannt<br/>";}
    }"grade1" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Asphalt, Beton oder Pflastersteine)<br/>");
    "grade2" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Schotter oder andere verdichtete Materialien)<br/>");"grade3" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter oder ausgebesserter Weg, der harten und weichen Untergrund enth\xE4lt (z. B. Feinschotter-, Sand- oder Erdweg)<br/>");"grade4" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, haupts\xE4chlich weiche Materialien, Pflanzenwuchs entlang der Spurmitte (z. B. Gras-, Sand- oder Erdweg)<br/>");"grade5" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, Oberfl\xE4che besteht aus Sand, Erde etc., oft nur Abdruck in Gras, teilweise schwer von umgebendem Gel\xE4nde unterscheidbar<br/>");"yes" == b.motorcycle && (a += "<br/>mit dem Auto befahrbar.<br/>");"no" == b.motorcycle && (a += "<br/>keine motorisierten Fahrzeuge zugelassen.<br/>");"excellent" == b.trail_visibility && (a += "Wegerkennbarkeit: Gut ausgewiesener Weg<br/>");"good" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegmarkierung sichbar, aber manchmal etwas schwer zu finden<br/>");
    "intermediate" == b.trail_visibility && (a += "Wegerkennbarkeit: Weg nicht durchgegend sichbar<br/>");"bad" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegspur ist kaum zu erkennen<br/>");"horrible" == b.trail_visibility && (a += "Wegerkennbarkeit: Oft kein Weg vorhanden<br/>");"no" == b.trail_visibility && (a += "Wegerkennbarkeit: Meistens keine Wegspur zu erkennen<br/>");"hiking" == b.sac_scale && (a += "Weg: Weg gut gebahnt. (Schwierigskeitstyp: 1)</br>");"mountain_hiking" == b.sac_scale && (a += "Weg: Durchgehend gut ersichtlicher und gut begehbarer Weg (Schwierigskeitstyp: 2)</br>");
    "demanding_mountain_hiking" == b.sac_scale && (a += "Weg: Heikle Stellen k\xF6nnen mit Seilen oder Ketten gesichert sein. Leitern sind m\xF6glich. Eventuell sind die H\xE4nde f\xFCrs Gleichgewicht n\xF6tig. (Schwierigskeitstyp: 3)</br>");"alphine_hiking" == b.sac_scale && (a += "Weg: Wegspur kaum vorhanden. An gewissen Stellen ben\xF6tigt man die H\xE4nde zum weiterkommen (Schwierigskeitstyp: 4)</br>");"demanding_alphine_hiking" == b.sac_scale && (a += "Weg: Oft weglos, einzelne einfache Kletterstellen bis II. (Schwierigskeitstyp: 5)</br>");
    "difficult_alpine_hiking" == b.sac_scale && (a += "Weg: Schwieriges Alpinenwandern,Kletterstellen bis II. Schwierigskeitstyp: 6</br>");b["mtb:name"] && (a += "Fahrradstrecke :" + b["mtb:name"] + "</br>");"0" == b["mtb:scale"] && (a += "Mountainbikestrecke: Keine besondere Schwierigkeiten.</br>Wegbeschaffenheit: fester und griffiger Untergrund.</br>Hindernisse: Keine Hindernisse</br>Gef\xE4lle: Leicht bis m\xE4\xDFig</br>Kurven: weit</br>Fahrtechnik: keine besonderes fahrtechnisches K\xF6nnen n\xF6tig</br>");
    "1" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt flache Wurzeln und kleinere Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: loserer Untergrund m\xF6glich, kleine Wurzeln und Steine</br>Hindernisse: kleine Hindernisse, Wasserrinnen, Erosionssch\xE4den</br>Gef\xE4lle: bis zu 40%</br>Kurven: eng</br>Fahrtechnik: Fahrtechnische Grundkentnisse n\xF6tig. Hindernisse k\xF6nnen \xFCberrollt werden</br>");"2" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt gr\xF6\xDFere Wurzeln und Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: Untergrund meist nicht verfestigt, gr\xF6\xDFere Wurzeln und Steine</br>Hindernisse:  flache Abs\xE4tze und Treppen</br>Gef\xE4lle: bis zu 70%</br>Kurven: leichte Spitzkehren</br>Fahrtechnik: Fortgeschrittene Fahrtechnik n\xF6tig.</br>");"3" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg findet man verblockte Singletrails mit vielen gr\xF6\xDFeren Felsbrocken und/oder Wurzelpassagen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  hohe Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven: enge Spitzkehren</br>Fahrtechnik: Sehr gute Bike-Beherrschung n\xF6tig.</br>");
    "4" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg sind sehr steile und stark verblockte Singletrails mit gro\xDFen Felsbrocken und/oder anspruchsvollen Wurzelpassagen, dazwischen h\xE4ufig loses Ger\xF6ll und extreme Steilrampen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren</br>Fahrtechnik: Perfekte Bike-Beherrschung mit Trial-Techniken n\xF6tig.</br>");
    "5" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg wird charakterisiert durch blockartiges Gel\xE4nde mit Gegenanstiegen, Ger\xF6llfeldern und Erdrutschen, \xF6senartigen Spitzkehren, mehreren hohen, direkt aufeinanderfolgenden Abs\xE4tzen und Hindernissen wie umgefallenen B\xE4umen</br>Wegbeschaffenheit: verblockt mit Gegenanstiegen / rutschiger Untergrund, loses Ger\xF6ll / der Weg ist eher ein Wandersteig</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren mit Hindernissen</br>Fahrtechnik: excellente Bike-Beherrschung spezieller Trial-Techniken n\xF6tig.</br>");
    "6" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg ist hochanspruchsvoll, und selbst f\xFCr Profis und Trial-Fahrer nicht passierbar</br>Wegbeschaffenheit:  Gro\xDFteils nur noch kletterbar</br>Hindernisse: Abs\xE4tze > 2 m, Leitern, Trittstufen, Kletterstellen bei denen man beide H\xE4nde braucht.</br>Gef\xE4lle: 100% oder mehr</br>Kurven: - </br>Fahrtechnik:  hier reicht auch die beste Fahrtechnik nicht mehr</br>");"10" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt eine maximale Fahrgeschwindigkeit von 10 Km/h sowie die Regel rechts vor links.</br>");
    "30" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt rechts vor links sowie eine maximale Geschwindigkeit von 30 Km/h</br>");"50" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");"70" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");"80" == b.maxspeed && (a += "Maximale Geschwindigkeit von 80 Km/h darf nicht \xFCberschritten werden.</br>");"100" == b.maxspeed && (a += "Maximale Geschwindigkeit von 100 Km/h darf nicht \xFCberschritten werden.</br>");
    "no" == b.overtaking && (a += "\xDCberholverbot, Fahrzeuge d\xFCrfen nicht \xFCberholen !</br>");"yes" == b.noexit && (a += "Die Stra\xDFe endet hier, es handelt sich um eine Sackgasse</br>");"yes" == b.oneway && (a += "Es handelt sich hier um eine Einbahnstra\xDFe, sie d\xFCrfen diese Stra\xDFe nur in eine Richtung befahren</br>");"designated" == b.priority_road && (a += "Es handelt sich hierbei um eine Vorfahrtsstra\xDFe, derjenige, der sich auf dieser befindet, hat gegen\xFCber anderen Fahrzeugen die Vorfahrt!</br>");
    "end" == b.priority_road && (a += "Die Vorfahrtsstra\xDFe endet hier und die Regelung wird aufgehoben</br>");"emergency_bay" == b.highway && (a += "Hier befindet sich eine Bucht die nur in Notf\xE4llen zur Benuzung zur Verf\xFCgung steht</br>");"yes" == b.traffic_calming && (a += "Verkehrsberuhigter Bereich</br>");"bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");"chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");"choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");
    "cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");"hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");"island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");"rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");"table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");if ("parking" == b.amenity && ("yes" == b.fee && (a += "kostenpflichtig<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
        var d = "unbekannt";"yes" != c && (d = c);a += "Frauenparkpl\xE4tze (Anzahl: " + d + ") <br/>";
    }b.park_ride && ("bus" == b.park_ride && (a += "Busanbindung<br/>"), "tram" == b.park_ride && (a += "Bahnanbindung<br/>"), "unknown" == b.park_ride && (a += "Verkehrsmittel unbekannt<br/>"));b["railway:position"] && (a += "Streckenkilometer<br/>Position: " + b["railway:position"] + "<br/>");b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");return a;
},
    fnContentSports = exports.fnContentSports = function fnContentSports(b) {
    var a = "";"9pin" == b.sport && (a += "M\xF6gliche Sportart: Kegeln<br/>");
    "10pin" == b.sport && (a += "M\xF6gliche Sportart: Bowling<br/>");"american_football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");"aikido" == b.sport && (a += "M\xF6gliche Sportart: Aikido<br/>");"archery" == b.sport && (a += "M\xF6gliche Sportart: Bogenschie\xDFen<br/>");"athletics" == b.sport && (a += "M\xF6gliche Sportart: Leichtathletik<br/>");"australian_football" == b.sport && (a += "M\xF6gliche Sportart: Australian Football<br/>");"base" == b.sport && (a += "M\xF6gliche Sportart: Objektspringen<br/>");
    "badminton" == b.sport && (a += "M\xF6gliche Sportart: Badminton<br/>");"baseball" == b.sport && (a += "M\xF6gliche Sportart: Baseball<br/>");"basketball" == b.sport && (a += "M\xF6gliche Sportart: Basketball<br/>");"beachvolleyball" == b.sport && (a += "M\xF6gliche Sportart: Beachvolleyball<br/>");"bmx" == b.sport && (a += "M\xF6gliche Sportart: BMX<br/>");"boules" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");"boule" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");"bowls" == b.sport && (a += "M\xF6gliche Sportart: Bowls<br/>");
    "boxing" == b.sport && (a += "M\xF6gliche Sportart: Boxen<br/>");"canadian_football" == b.sport && (a += "M\xF6gliche Sportart: Canadian Football<br/>");"canoe" == b.sport && (a += "M\xF6gliche Sportart: Paddeln<br/>");"chess" == b.sport && (a += "M\xF6gliche Sportart: Schach<br/>");"cliff_diving" == b.sport && (a += "M\xF6gliche Sportart: Klippenspringen<br/>");"climbing" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");"climbing_adventure" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");"cricket" == b.sport && (a += "M\xF6gliche Sportart: Cricket<br/>");"cricket_nets" == b.sport && (a += "M\xF6gliche Sportart: Cricket Netz<br/>");"croquet" == b.sport && (a += "M\xF6gliche Sportart: Croquet<br/>");"curling" == b.sport && (a += "M\xF6gliche Sportart: Curling<br/>");"cycling" == b.sport && (a += "M\xF6gliche Sportart: Radrennen, Radsport<br/>");"dog_racing" == b.sport && (a += "M\xF6gliche Sportart: Hunderennen<br/>");if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";"fencing" == b.sport && (a += "M\xF6gliche Sportart: Fechten<br/>");
    "equestrian" == b.sport && (a += "M\xF6gliche Sportart: Reiten<br/>");"football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");"free_flying" == b.sport && (a += "M\xF6gliche Sportart: Freeflying<br/>");"gaelic_games" == b.sport && (a += "M\xF6gliche Sportart: Gaelic games<br/>");"golf" == b.sport && (a += "M\xF6gliche Sportart: Golf<br/>");"gymnastics" == b.sport && (a += "M\xF6gliche Sportart: Gymnastik<br/>");"hockey" == b.sport && (a += "M\xF6gliche Sportart: Hockey<br/>");"horseshoes" == b.sport && (a += "M\xF6gliche Sportart: Hufeisenwerfen<br/>");"horse_racing" == b.sport && (a += "M\xF6gliche Sportart: Pferderennen<br/>");"ice_stock" == b.sport && (a += "M\xF6gliche Sportart: Eisstockschie\xDFen<br/>");"judo" == b.sport && (a += "M\xF6gliche Sportart: Judo<br/>");"karting" == b.sport && (a += "M\xF6gliche Sportart: Kartfahren<br/>");"kitesurfing" == b.sport && (a += "M\xF6gliche Sportart: Kitesurfing<br/>");"korfball" == b.sport && (a += "M\xF6gliche Sportart: Korfball<br/>");"motor" == b.sport && (a += "M\xF6gliche Sportart: Motorsport<br/>");
    "multi" == b.sport && (a += "M\xF6gliche Sportart: Mehrfachsport<br/>");"obstacle_course" == b.sport && (a += "M\xF6gliche Sportart: Hindernislauf<br/>");"orienteering" == b.sport && (a += "M\xF6gliche Sportart: Orientierungslauf<br/>");"paddle_tennis" == b.sport && (a += "M\xF6gliche Sportart: Paddle-Tennis<br/>");"paragliding" == b.sport && (a += "M\xF6gliche Sportart: Gleitschirmfliegen<br/>");"Pelota" == b.sport && (a += "M\xF6gliche Sportart: Pelota<br/>");"rasquet" == b.sport && (a += "M\xF6gliche Sportart: Racquetball<br/>");
    "rowing" == b.sport && (a += "M\xF6gliche Sportart: Rudern<br/>");"rugby_league" == b.sport && (a += "M\xF6gliche Sportart: Rugby League<br/>");"rugby_union" == b.sport && (a += "M\xF6gliche Sportart: Rugby Union<br/>");"running" == b.sport && (a += "M\xF6gliche Sportart: Laufsport<br/>");"scuba_diving" == b.sport && (a += "M\xF6gliche Sportart: Sporttauchen<br/>");"shooting" == b.sport && (a += "M\xF6gliche Sportart: Sportschie\xDFen<br/>");"skating" == b.sport && (a += "M\xF6gliche Sportart: Eislaufsport<br/>");"skateboard" == b.sport && (a += "M\xF6gliche Sportart: Skateboard<br/>");"skiing" == b.sport && (a += "M\xF6gliche Sportart: Skifahren<br/>");"soccer" == b.sport && (a += "M\xF6gliche Sportart: Fu\xDFball<br/>");"surfing" == b.sport && (a += "M\xF6gliche Sportart: Surfen<br/>");"swimming" == b.sport && (a += "M\xF6gliche Sportart: Schwimmen<br/>");"table_tennis" == b.sport && (a += "M\xF6gliche Sportart: Tischtennis<br/>");"taekwondo" == b.sport && (a += "M\xF6gliche Sportart: Taekwondo<br/>");"team_handball" == b.sport && (a += "M\xF6gliche Sportart: Handball<br/>");
    "tennis" == b.sport && (a += "M\xF6gliche Sportart: Tennis<br/>");"toboggan" == b.sport && (a += "M\xF6gliche Sportart: Rodeln<br/>");"volleyball" == b.sport && (a += "M\xF6gliche Sportart: Volleyball<br/>");"water_ski" == b.sport && (a += "M\xF6gliche Sportart: Wasserski<br/>");"weightlifting" == b.sport && (a += "M\xF6gliche Sportart: Gewichtheben<br/>");"wrestling" == b.sport && (a += "M\xF6gliche Sportart: Ringen<br/>");return a;
};
function fnArztInfo(b) {
    var a = "",
        c = "",
        d = b["healthcare:speciality"];"" != d && ("general" == d && (c += "Allgemeinmedizin<br/>"), "allergology" == d && (c += "Allergologie<br/>"), "anaesthetics" == d && (c += "An\xE4sthesiologie<br/>"), "biochemistry" == d && (c += "Medizinische und chemische Labordiagnostik<br/>"), "biological_haematology" == d && (c += "Biologische H\xE4matologie<br/>"), "biology" == d && (c += "Medizinische Biologie<br/>"), "cardiology" == d && (c += "Kardiologie<br/>"), "cardiac_surgery" == d && (c += "Kardiovaskularchirurgie<br/>"), "child_psychiatry" == d && (c += "Kinder- u. Jugendpsychatrie<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "Zahn-, Mund-, Kiefer- und Gesichtschirurgie<br/>"), "dermatology" == d && (c += "Hautkrankheiten<br/>"), "dermatovenereology" == d && (c += "Haut- und Geschlechtskrankheiten<br/>"), "diagnostic_radiology" == d && (c += "Diagnostische Radiologie<br/>"), "emergency" == d && (c += "Unfall- und Notfallmedizin<br/>"), "endocrinology" == d && (c += "Endokrinologie<br/>"), "gastroenterological_surgery" == d && (c += "Gastroenterologische Chirurgie<br/>"), "gastroenterology" == d && (c += "Gastroenterologie<br/>"), "geriatrics" == d && (c += "Geriatrie<br/>"), "gynaecology" == d && (c += "Geburtshilfe und Frauenheilkunde<br/>"), "haematology" == d && (c += "Allgemeine H\xE4matologie<br/>"), "hepatology" == d && (c += "Hepatologie<br/>"), "immunology" == d && (c += "Immunologie<br/>"), "infectious_diseases" == d && (c += "Ansteckende Krankheiten<br/>"), "intensive" == d && (c += "Intensivmedizin<br/>"), "internal" == d && (c += "Allgemeine (innere) Medizin<br/>"), "maxillofacial_surgery" == d && (c += "Mund-Kiefer-Gesichtschirurgie<br/>"), "nephrology" == d && (c += "Nierenkrankheiten<br/>"), "neurology" == d && (c += "Neurologie<br/>"), "neurophysiology" == d && (c += "Klinische Neurophysiologie<br/>"), "neuropsychiatry" == d && (c += "Neuropsychiatrie(Neurologie und Psychiatrie)<br/>"), "neurosurgery" == d && (c += "Neurochirurgie<br/>"), "nuclear" == d && (c += "Nuklearmedizin<br/>"), "occupational" == d && (c += "Arbeitsmedizin <br/>"), "oncology" == d && (c += "Onkologie<br/>"), "ophthalmology" == d && (c += "Augenheilkunde<br/>"), "orthopaedics" == d && (c += "Orthop\xE4die<br/>"), "otolaryngology" == d && (c += "Hals-Nasen-Ohren-Heilkunde<br/>"), "paediatric_surgery" == d && (c += "Kinderchirurgie<br/>"), "paediatrics" == d && (c += "Kinderheilkunde<br/>"), "palliative" == d && (c += "Palliativmedizin<br/>"), "physiatry" == d && (c += "Physikalischeund Rehabilitative Medizin<br/>"), "plastic_surgery" == d && (c += "Plastische Chirurgie<br/>"), "proctology" == d && (c += "Proktologie<br/>"), "psychiatry" == d && (c += "Psychiatrie<br/>"), "pulmonology" == d && (c += "Lungen- und Bronchialheilkunde<br/>"), "radiology" == d && (c += "Radiologie<br/>"), "radiotherapy" == d && (c += "Strahlentherapie<br/>"), "rheumatology" == d && (c += "Rheumatologie<br/>"), "stomatology" == d && (c += "Stomatologie<br/>"), "surgery" == d && (c += "Chirurgie<br/>"), "surgical_oncology" == d && (c += "Krebschirurgie<br/>"), "thoracic_surgery" == d && (c += "Thoraxchirurgie<br/>"), "transplant" == d && (c += "Transplantationsmedizin<br/>"), "trauma" == d && (c += "Unfallchirurgie<br/>"), "tropical" == d && (c += "Tropenmedizin<br/>"), "urology" == d && (c += "Urologie<br/>"), "vascular_surgery" == d && (c += "Gef\xE4\xDFchirurgie<br/>"), "venereology" == d && (c += "Geschlechtskrankheiten<br/>"), "acupuncture" == d && (c += "Akupunktur<br/>"), "naturopathy" == d && (c += "Naturheilkunde<br/>"), "chiropractic" == d && (c += "Chiropraktik <br/>"), "homeopathy" == d && (c += "Hom\xF6opathie<br/>"), "osteopathy" == d && (c += "Osteopathie<br/>"));"" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "Notfallmedizin<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "An\xE4sthesie<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "Dermatologie<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "Hals, Nasen, Ohren (HNO)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "Arbeitsnmedizin<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "innere Medizin<br/>"), "yes" == b["health_specialty:neurology"] && (c += "Neurologie<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "Augenheilkunde<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "Palliativmedizin<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "Psychatrie<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "Gyn\xE4kologie<br/>"), "yes" == b["health_specialty:urology"] && (c += "Urologie<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "Schmerzmedizin<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "Umweltmedizin<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "Intensivmedizin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "Kinder- u. Jugendmedizin<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "Physikalische und Rehabilitative Medizin<br/>"), "yes" == b["health_specialty:radiology"] && (c += "Radiologie<br/>"), "yes" == b["health_specialty:general"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "Ergotherapie<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "Pneumologie<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "Akupunktur<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "Orthop\xE4die<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "Chiropraktik<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "Sportmedizin<br/>"));"" != c && (a = a + "Fachgebiete: " + ('<div class="c4g_open_text">' + c + "</div>"));return a;
}
function fnKraftwerkInfo(b) {
    var a = "";if (b["generator:method"]) {
        a += "Erzeugungsart: ";switch (b["generator:method"]) {case "combustion":
                a += "Verbrennung";break;case "thermal":
                a += "thermische Nutzung (z.B. Solarthermie)";break;case "pumping":
                a += "durch Pumpen (z.B. die Nutzung von Geothermie)";break;case "photovoltaic":
                a += "Photovoltaik";break;case "gasification":
                a += "Vergasung, danach Verbrennung";break;case "anaerobic_digestion":
                a += "Erzeugung von Biogas durch Verg\xE4rung";break;case "pyrolysis":
                a += "Pyrolyse, Aufspaltung durch hohe Temperaturen";
                break;case "fission":
                a += "Kernspaltung";break;case "fusion":
                a += "Kernfusion";break;default:
                a += "unbekannt<br/>";}a += "<br/>";
    }if (b.power_source) {
        a += "Erzeugungsart: ";switch (b.power_source) {case "photovoltaic":
                a += "Photovoltaik";break;default:
                a += "unbekannt<br/>";}a += "<br/>";
    }b["generator:output:electricity"] && (a += "elekt. Energieerzeugung: " + b["generator:output:electricity"] + "<br/>");b["generator:output:heat"] && (a += "therm. Energieerzeugung: " + b["generator:output:heat"] + "<br/>");b["generator:output:cold"] && (a += "therm. Energieerzeugung: " + b["generator:output:cold"] + "<br/>");b["generator:output"] && (a += "Nennleistung: " + b["generator:output"] + "<br/>");b["generator:output:hot_air"] && (a += "Art des Transportmediums: " + b["generator:output:hot_air"] + "<br/>");b["generator:output:cold_water"] && (a += "Art des Transportmediums: " + b["generator:output:cold_water"] + "<br/>");b["generator:output:cold_air"] && (a += "Art des Transportmediums: " + b["generator:output:cold_air"] + "<br/>");b["generator:output:compressed_air"] && (a += "Art des Transportmediums: " + b["generator:output:compressed_air"] + "<br/>");b["generator:output:steam"] && (a += "Art des Transportmediums: " + b["generator:output:steam"] + "<br/>");b["generator:output:vacuum"] && (a += "Art des Transportmediums: " + b["generator:output:vacuum"] + "<br/>");b["generator:output:battery_charging"] && (a += "Art des Transportmediums: " + b["generator:output:battery_charging"] + "<br/>");"PWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-1" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-2" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-3" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-4" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-5" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-6" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"PHWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"GCR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"FBR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"RBMK-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"RBMK-1500" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"VVER" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"CANDU" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"CPR-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"EPR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"tokamak" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"stellarator" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"ICF" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"cold-fusion" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Horizontal-Achsen Windenergieanlage<br/>");"wind_turbine" == b["generator:method"] && "vertical_turbine" == b["generator:type"] && (a += "Generatortyp: Vertikalrotor<br/>");"francis_turbine" == b["generator:type"] && (a += "Generatortyp: Francis-Turbine<br/>");"kaplan_turbine" == b["generator:type"] && (a += "Generatortyp: Kaplan-Turbine<br/>");"pelton_turbine" == b["generator:type"] && (a += "Generatortyp: Pelton-Turbine<br/>");"stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit horizontaler Achse<br/>");"stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit vertikaler Achse<br/>");"steam_turbine" == b["generator:type"] && (a += "Generatortyp: Dampfturbine<br/>");"heat_pump" == b["generator:type"] && (a += "Generatortyp: W\xE4rmepumpe<br/>");"solar_thermal_collector" == b["generator:type"] && (a += "Generatortyp: Sonnenkollektor<br/>");"solar_photovoltaic_panel" == b["generator:type"] && (a += "Generatortyp: Photovoltaic-System<br/>");"steam_generator" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");"gas_turbine" == b["generator:type"] && (a += "Generatortyp: Gasturbine<br/>");"combined_cycle" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");"reciprocating_engine" == b["generator:type"] && (a += "Generatortyp: Verbrennungsmotor/Blockheizkraftwerk<br/>");return a;
}
function fnWertstoffinfo(b) {
    var a = "";if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "Altglascontainer</br>"), "yes" == b["recycling:shoes"] && (a += "Schuhentsorgung</br>"), "yes" == b["recycling:cooking_oil"] && (a += "Speise-\xD6l-Entsorgung</br>"), "yes" == b["recycling:paper"] && (a += "Papierentsorgung</br>"), "yes" == b["recycling:engine_oil"] && (a += "\xD6l-Entsorgung (Maschinen-, Alt-und Motor\xF6l)</br>"), "yes" == b["recycling:clothes"] && (a += "Altkleidercontainer</br>"), "yes" == b["recycling:car_batteries"] && (a += "Auto-Batterien-Entsorgung</br>"), "yes" == b["recycling:cans"] && (a += "Blechdosenentsorgung</br>"), "yes" == b["recycling:scrap_metal"] && (a += "Altmetallentsorgung</br>"), "yes" == b["recycling:plastic"] && (a += "Plastikentsorgung</br>"), "yes" == b["recycling:batterries"] && (a += "Batterieentsorgung</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "Plastikflaschenentsorgung</br>"), "yes" == b["recycling:green_waste"] && (a += "Gr\xFCnabf\xE4lle</br>"), "yes" == b["recycling:hardcore"] && (a += "Bauschutt und Stra\xDFenmaterial Entsorgung</br>");return a;
}
var fnContentGeneralInformations = function fnContentGeneralInformations(b) {
    var a = "";b.width && (a += "Breite: " + b.width + " m<br/>");b.height && (a += "H\xF6he: " + b.height + " m<br/>");b.maxwidth && (a += "Maximalbreite: " + b.maxwidth + " m<br/>");b.maxheight && (a += "Maximalh\xF6he: " + b.maxheight + " m<br/>");b.maxweight && (a += "Maximalgewicht: " + b.maxweight + " t<br/>");b.maxspeed && (a += "H\xF6chstgeschwindigkeit: " + b.maxspeed + " km/h<br/>");b.min_age && (a += "Mindestalter: " + b.min_age + "<br/>");b.max_age && (a += "Maximalalter: " + b.max_age + "<br/>");"yes" == b.nudism && (a += "Freik\xF6rperkultur<br/>");"yes" == b.ruins && (a += "Ruine<br/>");b.ele && (a += "H\xF6he \xFCber NN: " + b.ele + " m<br/>");b["xmas:day_date"] && (a += "Dauer von - bis: " + b["xmas:day_date"] + "<br/>");b["rotor:diameter"] && (a += "Rotordurchmesser: " + b["rotor:diameter"] + " m<br/>");b["xmas:note"] && (a += "Hinweis: " + b["xmas:note"] + "<br/>");"port" == b["seamark:beacon_lateral:category"] && (a += "Backbord<br/>");"starboard" == b["seamark:beacon_lateral:category"] && (a += "Steuerbord<br/>");"yes" == b["service:bicycle:retail"] && (a += "Fahrradverkauf<br/>");"yes" == b["service:bicycle:repair"] && (a += "Fahrradreparatur<br/>");"yes" == b["service:bicycle:rental"] && (a += "Fahrradverleih<br/>");"yes" == b["service:bicycle:pump"] && (a += "Benutzung einer Luftpumpe m\xF6glich<br/>");"yes" == b["service:bicycle:diy"] && (a += "Benutzung von Werkzeug m\xF6glich<br/>");"yes" == b["service:bicycle:cleaning"] && (a += "Fahrr\xE4der werden gewaschen<br/>");"yes" == b["service:bicycle:second_hand"] && (a += "Verkauf von gebrauchten Fahrr\xE4dern<br/>");"yes" == b["service:bicycle:charging"] && (a += "Elektro-Fahrr\xE4der k\xF6nnen geladen werden<br/>");"yes" == b.cafe && (a += "Kleine Caf\xE9-Ecke<br/>");"yes" == b.breakfast && (a += "Besonderes Fr\xFChst\xFCcksangebot<br/>");"yes" == b.snack && (a += "Back-Snacks warm oder kalt<br/>");"yes" == b.indoor_seating && (a += "Sitzm\xF6glichkeiten im Innenbereich<br/>");"yes" == b.outdoor_seating && (a += "Sitzm\xF6glichkeiten im Au\xDFenbereich<br/>");"yes" == b.self_service && (a += "Selbstbedienungsb\xE4ckerei<br/>");"yes" == b.bakehouse && (a += "Backstube<br/>");"yes" == b.pastry_shop && (a += "Geb\xE4ck aus der Konditorei<br/>");"yes" == b.fair_trade && (a += "einige Fair-Trade-Produkte im Sortiment<br/>");"only" == b.fair_trade && (a += "fast ausschlie\xDFlich Fair-Trade-Produkte im Sortiment<br/>");"no" == b.fair_trade && (a += "keine Fair-Trade-Produkte im Sortiment<br/>");return a;
},
    fnContentHealthcare = function fnContentHealthcare(b) {
    var a = "";if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");"yes" == b.dispensing && (a += "Apotheke mit Rezepteinl\xF6sung<br/>");"abused" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen die Misshandlung erlitten haben<br/>");"child" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Kinder<br/>");"disabled" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit k\xF6rperlicher oder geistiger Behinderung<br/>");"diseased" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Erkrankte Menschen<br/>");"drug_addicted" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Drogens\xFCchtige<br/>");"homeless" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Obdachlose<br/>");"juvenile" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Jugendliche und Teenager<br/>");"mental_health" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit psychischen Problemen<br/>");"migrant" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit Migrationshintergrund<br/>");"orphan" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Waisen<br/>");"senior" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Senioren<br/>");"underprivileged" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arme oder benachteiligte Menschen<br/>");"unemployed" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arbeitslose<br/>");"victim" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Opfer eines Verbrechens<br/>");
    return a;
};
function fnAdditionalBuildingInfos(b) {
    var a = "";b["building:color"] && (a += "Geb\xE4udenfarbe: " + b["building:color"] + "</br>");b["building:height"] && (a += "Geb\xE4udenh\xF6he: " + b["building:height"] + " m</br>");b["building:level"] && (a += "Etage: " + b["building:level"] + "</br>");b["building:part"] && (a += "Geb\xE4udeteile: " + b["building:part"] + "</br>");b["roof:color"] && (a += "Dachfarbe: " + b["roof:colour"] + "</br>");b["roof:shape"] && (a += "Dachform: " + b["roof:shape"] + "</br>");b["roof:height"] && (a += "Dachh\xF6he: " + b["roof:height"] + " m</br>");b["roof:material"] && (a += "Dachmaterial: " + b["roof:material"] + " </br>");b["roof:orientation"] && (a += "Dachausrichtung: " + b["roof:orientation"] + " </br>");b["roof:direction"] && (a += "Dachausrichtung: " + b["roof:direction"] + " </br>");b["building:type"] && (a += "Geb\xE4udentyp: " + b["building:type"] + "</br>");return a;
}
function fnSicherheitAdditional(b) {
    var a = "";"surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "Innenbereich wird \xFCberwacht"), "outdoor" == b.surveillance && (a += "Au\xDFenbereich wird \xFCberwacht"), "public" == b.surveillance && (a += "\xD6ffentliche \xDCberwachung"), "camera" == b["surveillance:type"] && (a += "\xDCberwachungstyp: Kamera"), "guard" == b["surveillance:type"] && (a += "\xDCberwachungstyp: W\xE4chter"), "ALPR" == b["surveillance:type"] && (a += "\xDCberwachungstyp: ALPR"), "town" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Ort"), "parking" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Parkplatz"), "traffic" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Verkehr"), "shop" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Shops"), "bank" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Bank"), "building" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Geb\xE4ude"));return a;
}
function fnWreckInfo(b) {
    var a = "";"wreck" == b.historic && (b["wreck:date_sunk"] && (a += "Gesunken am: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "Tiefe: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "Freiraum: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "Anerkannt seit: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "Gewicht: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "L\xE4nge: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "Breite: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "Ladung: Holz<br/>" : "coal" == b["wreck:cargo"] ? a + "Ladung: Kohle<br/>" : a + ("Ladung: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Ja<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Nein<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Ja<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Nein<br/>"), "yes" == b.access && (a += "Zutritt m\xF6glich<br/>"), "no" == b.access && (a += "Zutritt nicht m\xF6glich<br/>"), "permit_required" == b.access && (a += "Zutritt nur mit Genehmigung<br/>"));return a;
}
function fnKlosterAdditional(b) {
    var a = "";if (b["monastery:type"]) switch (b["monastery:type"]) {case "monastery":
            a += "Typ: Kl\xF6sterliche Gemeinschaft (monastery)<br/>";break;case "convent":
            a += "Typ: Bettelm\xF6nch Gemeinschaft (convent)<br/>";break;case "canonry":
            a += "Typ: Kanonikat (canonry)<br/>";break;case "commandry":
            a += "Typ: Milit\xE4r gef\xFChrt (commandry)<br/>";break;case "hermitage":
            a += "Typ: Einsiedelei (hermitage)<br/>";break;default:
            a += "Typ: unbekannt<br/>";}b["community:gender"] && ("male" == b["community:gender"] && (a += "Geschlecht: M\xE4nnergemeinschaft<br/>"), "female" == b["community:gender"] && (a += "Geschlecht: Frauengemeinschaft<br/>"));b.religious_rank && ("abbey" == b.religious_rank ? a += "Religi\xF6ser Rang: Abtei<br/>" : "abbey" == b.religious_rank && (a += "Religi\xF6ser Rang: Erzabtei<br/>"));"yes" == b.shrine && (a += "Besonderheit: Heiligengrab / Reliquienschrein<br/>");"yes" == b.sanctuary && (a += "Besonderheit: Heiligtum / Altarraum (Sanktuar)<br/>");if (b.religion) switch (b.religion) {case "animist":
            a += "Religion: animistisch<br/><br/>";break;case "bahai":
            a += "Religion: bahai<br/>";break;case "buddhist":
            a += "Religion: buddhistisch<br/>";break;case "christian":
            a += "Religion: christlich<br/>";break;case "hindu":
            a += "Religion: hinduistisch<br/>";break;case "IglesiaNiCristo":
            a += "Religion: IglesiaNiCristo<br/>";break;case "jain":
            a += "Religion: jain<br/>";break;case "jewish":
            a += "Religion: j\xFCdisch<br/>";break;case "multifaith":
            a += "Religion: pluralistisch<br/>";break;case "muslim":
            a += "Religion: muslimisch<br/>";
            type += "Moschee<br/>";break;case "pagan":
            a += "Religion: heidnisch<br/>";break;case "pastafarian":
            a += "Religion: pastafarisch<br/>";break;case "scientologist":
            a += "Religion: scientologisch<br/>";break;case "shinto":
            a += "Religion: schintoistisch<br/>";break;case "sikh":
            a += "Religion: sikh<br/>";break;case "spiritualist":
            a += "Religion: spiritistisch<br/>";break;case "taoist":
            a += "Religion: taoistisch<br/>";break;case "unitarian":
            a += "Religion: unitarian<br/>";break;case "yazidi":
            a += "Religion: yazidi<br/>";break;
        case "zoroastrian":
            a += "Religion: zoroastrisch<br/>";break;default:
            a += "Religion: unbekannt<br/>";}if (b.denomination) switch (b.denomination) {case "anglican":
            a += "Konfession: Anglikanische Gemeinschaft<br/><br/>";break;case "baptist":
            a += "Konfession: Baptisten<br/>";break;case "catholic":
            a += "Konfession: Katholische Kirche, ohne genauere Spezifizierung<br/>";break;case "roman_catholic":
            a += "Konfession: R\xF6misch-Katholische Kirche<br/>";break;case "old_catholic":
            a += "Konfession: Altkatholische Kirche (Schweiz: Christ-Katholisch)<br/>";
            break;case "greek_catholic":
            a += "Konfession: Griechisch-Katholische Kirche, Sammelbezeichnung f\xFCr die mit Rom unierten Ostkirchen des byzantinischen Ritus<br/>";break;case "evangelical":
            a += "Konfession: Evangelikalismus ist eine theologische Richtung innerhalb des Protestantismus. Achtung! Nicht verwechseln mit der evangelischen (= protestantischen) Kirche<br/>";break;case "jehovahs_witness":
            a += "Konfession: Zeugen Jehovas<br/>";break;case "lutheran":
            a += "Konfession: Lutheraner, evangelisch-lutherisch<br/>";
            break;case "mennonite":
            a += "Konfession: Mennoniten<br/>";break;case "messianic_jewish":
            a += "Konfession: Messianische Juden, stehen theologisch den evangelikalen Christen nahe.<br/>";break;case "methodist":
            a += "Konfession: Methodist Church (engl. Methodism)<br/>";break;case "mormon":
            a += "Konfession: Mormonen<br/>";break;case "new_apostolic":
            a += "Konfession: Neuapostolische Kirche<br/>";break;case "orthodox":
            a += "Konfession: Orthodox, ohne genauere Spezifizierung<br/>";break;case "greek_orthodox":
            a += "Konfession: Griechisch-Orthodox<br/>";
            break;case "coptic_orthodox":
            a += "Konfession: Koptische Kirche, ist die christliche altorientalische Kirche \xC4gyptens.<br/>";break;case "pentecostal":
            a += "Konfession: Pfingstbewegung<br/>";break;case "presbyterian":
            a += "Konfession: Presbyterianische Kirchen<br/>";break;case "protestant":
            a += "Konfession: Evangelische Kirchen<br/>";break;case "quaker":
            a += "Konfession: Qu\xE4ker<br/>";break;case "reformed":
            a += "Konfession: Evangelisch-reformierte<br/>";break;case "russian_orthodox":
            a += "Konfession: Russisch-Orthodox<br/>";
            break;case "seventh_day_adventist":
            a += "Konfession: Siebenten-Tags-Adventisten<br/>";break;case "christian_community":
            a += "Konfession: Die Christengemeinschaft ist eine christliche Kirche, die sich als selbst\xE4ndige Kultusgemeinschaft versteht.<br/>";break;case "adventist":
            a += "Konfession: Adventisten, nicht alle Adventisten sind Siebenten-Tags-Adventisten.<br/>";break;case "alliance":
            a += "Konfession: Christian and Missionary Alliance (C&MA) is an evangelical Protestant denomination within Christianity.<br/>";
            break;case "assemblies_of_god":
            a += "Konfession: Assemblies of God, ist eine pfingstlerische Denomination.<br/>";break;case "apostolic":
            a += "Konfession: Apostolische Kirche<br/>";break;case "armenian_apostolic":
            a += "Konfession: Armenische Apostolische Kirche, ist eine altorientalische Kirche.<br/>";break;case "assyrian":
            a += "Konfession: Assyrische Kirche des Ostens, auch Apostolische Kirche des Ostens, ist eine autokephale und v\xF6llig eigenst\xE4ndige Ostkirche syrischer Tradition in Nachfolge des altchristlichen Katholikats von Seleukia-Ktesiphon.<br/>";
            break;case "christ_scientist":
            a += "Konfession: Christian Science (deutsch: Christliche Wissenschaft) ging aus der Neugeist-Bewegung hervor.<br/>";break;case "church_of_scotland":
            a += "Konfession: Church of Scotland (dt. Kirche Schottlands) ist die Nationalkirche in Schottland. Im Sprachgebrauch auch \u201Ethe Kirk\u201C genannt.<br/>";break;case "czechoslovak_hussite":
            a += "Konfession: Tschechoslowakische Hussitische Kirche, ist eine christliche Kirche, die durch Abspaltung von der R\xF6misch-Katholischen Kirche entstanden ist. Oft auch Neuhussitische Kirche genannt, vornehmlich in Tschechien verbreitet, aber auch in der Slowakei<br/>";
            break;case "dutch_reformed":
            a += "Konfession: Niederl\xE4ndisch-reformierte Kirche, (einschlie\xDFlich NGK und \xE4hnliche Kirchen in S\xFCdafrika)<br/>";break;case "exclusive_brethren":
            a += "Konfession: Exclusive Brethren<br/>";break;case "foursquare":
            a += "Konfession: International Church of the Foursquare Gospel<br/>";break;case "kimbanguist":
            a += "Konfession: Kimbanguistenkirche, ist eine afrikanische, unabh\xE4ngige, christliche Kirche.<br/>";break;case "living_waters_church":
            a += "Konfession: Living Waters Christian Church<br/>";
            break;case "mariavite":
            a += "Konfession: Mariavitismus<br/>";break;case "maronite":
            a += "Konfession: Syrisch-maronitische Kirche, ist eine mit Rom unierte, christliche Kirche, die den r\xF6mischen Papst als Oberhaupt anerkennt.<br/>";break;case "moravian":
            a += "Konfession: Herrnhuter Br\xFCdergemeine, (auch: Unitas Fratrum, Evangelische oder Erneuerte Br\xFCder-Unit\xE4t, engl. Moravian Church) ist eine aus der b\xF6hmischen Reformation herkommende \xFCberkonfessionell-christliche Glaubensbewegung.<br/>";
            break;case "nazarene":
            a += "Konfession: Kirche des Nazareners, ist eine Freikirche und Heiligungsgemeinde in methodistischer Tradition.<br/>";break;case "nondenominational":
            a += "Konfession: Nondenominational Christianity<br/>";break;case "old_believers":
            a += "Konfession: Altorthodoxe, (h\xE4ufiger Altgl\xE4ubige) ist eine Sammelbezeichnung f\xFCr religi\xF6se Str\xF6mungen und Gruppen innerhalb der russisch-orthodoxen Tradition.<br/>";break;case "polish_catholic":
            a += "Konfession: Polnisch-Katholische Kirche<br/>";
            break;case "salvation_army":
            a += "Konfession: Heilsarmee, ist eine christliche Freikirche mit ausgepr\xE4gter sozialer T\xE4tigkeit.<br/>";break;case "santo_daime":
            a += "Konfession: Santo Daime, ist einer synkretistischen religi\xF6se Bewegung aus Brasilien.<br/>";break;case "serbian_orthodox":
            a += "Konfession: Serbisch-Orthodoxe Kirche, bezeichnet die orthodoxe Kirche von Serbien und die ihr nachgeordneten Kirchen.<br/>";break;case "spiritism":
            a += "Konfession: Spiritismus, oder Spiritualismus die Lehre des Spiritisten Allan Kardec<br/>";
            break;case "united":
            a += "Konfession: United Church of Canada, ist die zweitgr\xF6\xDFte Kirche in Kanada.<br/>";break;case "united_church_of_christ":
            a += "Konfession: United Church of Christ, ist eine Kirche in den USA.<br/>";break;case "united_free_church_of_scotland":
            a += "Konfession: United Free Church of Scotland, ist eine presbyterianische Freikirche in Schottland.<br/>";break;case "united_methodist":
            a += "Konfession: Evangelisch-methodistische Kirche, (engl. United Methodist Church (UMC)) ist eine christliche Kirche in der wesleyanischen Tradition.<br/>";
            break;case "united_reformed":
            a += "Konfession: United Reformed Church, (Vereinigte Reformierte Kirche, URC) ist eine reformierte Kirche in Gro\xDFbritannien.<br/>";break;case "uniting":
            a += "Konfession: Uniting Church in Australia (UCA) ist die drittgr\xF6\xDFte christliche Denomination in Australien.<br/>";break;case "church_of_sweden":
            a += "Konfession: Schwedische Kirche, ist die evangelisch-lutherische Kirche und ehemalige Staatskirche Schwedens.<br/>";break;case "mission_covenant_church_of_sweden":
            a += "Konfession: Schwedische Missionskirche ist eine reformierte Kirche in Schweden.<br/>";break;case "alternative":
            a += "Konfession: alternative<br/>";break;case "ashkenazi":
            a += "Konfession: ashkenazi<br/>";break;case "buchari":
            a += "Konfession: buchari<br/>";break;case "conservative":
            a += "Konfession: conservative<br/>";break;case "egalitarian":
            a += "Konfession: egalitarian<br/>";break;case "hasidic":
            a += "Konfession: hasidic<br/>";break;case "humanistic":
            a += "Konfession: humanistic<br/>";break;case "kabbalah":
            a += "Konfession: kabbalah<br/>";break;case "kabbalistic":
            a += "Konfession: kabbalistic<br/>";break;case "karaite":
            a += "Konfession: karaite<br/>";break;case "liberal":
            a += "Konfession: liberal<br/>";break;case "lubavitch":
            a += "Konfession: lubavitch<br/>";break;case "lubavitch_messianic":
            a += "Konfession: lubavitch_messianic<br/>";break;case "mizrachi_baghdadi":
            a += "Konfession: mizrachi_baghdadi<br/>";break;case "mizrachi_chida":
            a += "Konfession: mizrachi_chida<br/>";break;case "mizrachi_jerusalemite":
            a += "Konfession: mizrachi_jerusalemite<br/>";
            break;case "mizrachi_livorno":
            a += "Konfession: mizrachi_livorno<br/>";break;case "mizrachi_moroccan":
            a += "Konfession: mizrachi_moroccan<br/>";break;case "modern_orthodox":
            a += "Konfession: modern_orthodox<br/>";break;case "neo_orthodox":
            a += "Konfession: neo_orthodox<br/>";break;case "nondenominational":
            a += "Konfession: nondenominational<br/>";break;case "orthodox":
            a += "Konfession: orthodox<br/>";break;case "orthodox_ashkenaz":
            a += "Konfession: orthodox_ashkenaz<br/>";break;case "orthodox_sefard":
            a += "Konfession: orthodox_sefard<br/>";
            break;case "progressive":
            a += "Konfession: progressive<br/>";break;case "reconstructionist":
            a += "Konfession: reconstructionist<br/>";break;case "reform":
            a += "Konfession: reform<br/>";break;case "renewal":
            a += "Konfession: renewal<br/>";break;case "samaritan":
            a += "Konfession: samaritan<br/>";break;case "sefardi":
            a += "Konfession: sefardi<br/>";break;case "sefardi_amsterdam":
            a += "Konfession: sefardi_amsterdam<br/>";break;case "sefardi_london":
            a += "Konfession: sefardi_london<br/>";break;case "traditional":
            a += "Konfession: traditional<br/>";
            break;case "ultra_orthodox":
            a += "Konfession: ultra_orthodox<br/>";break;case "unaffiliated":
            a += "Konfession: unaffiliated<br/>";break;case "yemenite":
            a += "Konfession: yemenite<br/>";break;case "yemenite_baladi":
            a += "Konfession: yemenite_baladi<br/>";break;case "yemenite_shami":
            a += "Konfession: yemenite_shami<br/>";break;case "ahmadiya":
            a += "Konfession: ahmadiya<br/>";break;case "alaouite":
            a += "Konfession: alaouite<br/>";break;case "druze":
            a += "Konfession: druze<br/>";break;case "ibadi":
            a += "Konfession: ibadi<br/>";
            break;case "ismaili":
            a += "Konfession: ismaili<br/>";break;case "shia":
            a += "Konfession: shia<br/>";break;case "sunni":
            a += "Konfession: sunni<br/>";break;case "nichiren":
            a += "Konfession: nichiren<br/>";break;case "jodo_shinshu":
            a += "Konfession: jodo_shinshu<br/>";break;case "jodo_shu":
            a += "Konfession: jodo_shu<br/>";break;case "vajrayana":
            a += "Konfession: vajrayana<br/>";break;case "shingon_shu":
            a += "Konfession: shingon_shu<br/>";break;case "zen":
            a += "Konfession: zen<br/>";break;case "thai_mahanikaya":
            a += "Konfession: thai_mahanikaya<br/>";
            break;case "thai_thammayut":
            a += "Konfession: thai_thammayut<br/>";break;case "asatru":
            a += "Konfession: asatru<br/>";break;case "celtic":
            a += "Konfession: celtic<br/>";break;case "greco-roman":
            a += "Konfession: greco-roman<br/>";break;case "wicca":
            a += "Konfession: wicca<br/>";break;case "irani":
            a += "Konfession: irani<br/>";break;case "parsi":
            a += "Konfession: parsi<br/>";break;default:
            a += "unbekannt<br/>";}if (b.community) switch (b.community) {case "AA":
            a += "Ordensgemeinschaft (AA): Augustinians of the Assumption <br/>";
            break;case "BSCM":
            a += "Ordensgemeinschaft (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";break;case "CBMV":
            a += "Ordensgemeinschaft (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";break;case "CO":
            a += "Ordensgemeinschaft (CO): Oratorians<br/>";break;case "CMC":
            a += "Ordensgemeinschaft (CMC): Congregation of the Mother Co-Redemptrix<br/>";break;case "CRSP":
            a += "Ordensgemeinschaft (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";break;case "CSJ":
            a += "Ordensgemeinschaft (CSJ): Carmel Saint-Joseph<br/>";
            break;case "CSSP":
            a += "Ordensgemeinschaft (CSSP): Congr\xE9gation du Saint-Esprit<br/>";break;case "CSSR":
            a += "Ordensgemeinschaft (CSSR): Congr\xE9gation du Tr\xE8s Saint R\xE9dempteur<br/>";break;case "FCJM":
            a += "Ordensgemeinschaft (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";break;case "FMGB":
            a += "Ordensgemeinschaft (FMGB): Suore Francescane Missionarie di Ges\xF9 Bambino<br/>";break;case "FMH":
            a += "Ordensgemeinschaft (FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";
            break;case "FMM":
            a += "Ordensgemeinschaft (FMM): Franciscaines missionnaires de Marie<br/>";break;case "FSC":
            a += "Ordensgemeinschaft (FSC): Fr\xE8res des \xC9coles chr\xE9tiennes<br/>";break;case "MCCI":
            a += "Ordensgemeinschaft (MCCI): Missionnaires comboniens du Sacr\xE9-C\u0153ur<br/>";break;case "MSFS":
            a += "Ordensgemeinschaft (MSFS): Missionnaires de Saint Fran\xE7ois de Sales<br/>";break;case "OCart":
            a += "Ordensgemeinschaft (OCart): Order of the Carthusians<br/>";break;case "OCC":
            a += "Ordensgemeinschaft (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";
            break;case "OCD":
            a += "Ordensgemeinschaft (OCD): Ordre des Carmes d\xE9chaux<br/>";break;case "OCSO":
            a += "Ordensgemeinschaft (OCSO): Zisterzienserorden der strengeren Observanz (Trappisten)<br/>";break;case "OFM":
            a += "Ordensgemeinschaft (OFM): Ordre des Fr\xE8res Mineurs (Franziskaner)<br/>";break;case "OFMCap":
            a += "Ordensgemeinschaft (OFMCap): Ordre des Fr\xE8res Mineurs Capucins<br/>";break;case "OFMConv":
            a += "Ordensgemeinschaft (OFMConv): Ordre des Fr\xE8res Mineurs Conventuels<br/>";break;case "OFS":
            a += "Ordensgemeinschaft (OFS): Franciscans secular Third Order<br/>";break;case "OMI":
            a += "Ordensgemeinschaft (OMI): Oblats de Marie<br/>";break;case "OP":
            a += "Ordensgemeinschaft (OP): Ordre des Fr\xE8res Pr\xEAcheurs<br/>";break;case "OPraem":
            a += "Ordensgemeinschaft (OPraem): Ordre des chanoines r\xE9guliers de Pr\xE9montr\xE9<br/>";break;case "OSB":
            a += "Ordensgemeinschaft (OSB): Order of Saint Benedict<br/>";break;case "OSC":
            a += "Ordensgemeinschaft (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";
            break;case "OSSS":
            a += "Ordensgemeinschaft (OSSS): Ordre de Sainte-Brigitte<br/>";break;case "OVM":
            a += "Ordensgemeinschaft (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";break;case "PSDP":
            a += "Ordensgemeinschaft (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";break;case "PFJ":
            a += "Ordensgemeinschaft (PFJ): Petits Fr\xE8res de J\xE9sus<br/>";break;case "SDB":
            a += "Ordensgemeinschaft (SDB): Soci\xE9t\xE9 de Saint Fran\xE7ois de Sales<br/>";break;case "SJ":
            a += "Ordensgemeinschaft (SJ): Compagnie de J\xE9sus<br/>";break;case "SOC":
            a += "Ordensgemeinschaft (SOC): Order of Cistercians<br/>";break;case "SSCC":
            a += "Ordensgemeinschaft (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";break;case "SSF":
            a += "Ordensgemeinschaft (SSF): Society of St Francis<br/>";break;case "SSJE":
            a += "Ordensgemeinschaft (SSJE): Society of St John the Evangelist<br/>";break;case "SSpS":
            a += "Ordensgemeinschaft (SSpS): Steyler Missionsschwestern<br/>";break;case "TOR":
            a += "Ordensgemeinschaft (TOR): Terzo Ordine Regolare di San Francesco<br/>";break;default:
            a += "unbekannt<br/>";}return a;
}var fnTestInfoPopup = function fnTestInfoPopup(b) {
    b = b.getProperties();var a = "",
        c;for (c in b) {
        a = a + c + "=" + b[c] + "<br/>";
    }return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-en.js":
/*!*******************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-popup-info-en.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = trim;
exports.isMobile = isMobile;
exports.fnHeader = fnHeader;
exports.fnFooter = fnFooter;
exports.fnGetTranslate_Type = fnGetTranslate_Type;
exports.fnArztInfo = fnArztInfo;
exports.fnKraftwerkInfo = fnKraftwerkInfo;
exports.fnWertstoffinfo = fnWertstoffinfo;
exports.fnAdditionalBuildingInfos = fnAdditionalBuildingInfos;
exports.fnSicherheitAdditional = fnSicherheitAdditional;
exports.fnWreckInfo = fnWreckInfo;
exports.fnKlosterAdditional = fnKlosterAdditional;
/*
  K?stenschmiede GmbH Software & Design 2011 - 2018
 @author     K?stenschmiede <http://www.kuestenschmiede.de>
 @license    http://opensource.org/licenses/lgpl-3.0.html
*/
function trim(b) {
    return b.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
    );
}function translate(b) {
    var a = trim(b);return "yes" == a || "Yes" == a ? "yes" : "no" == a || "No" == a ? "no" : "limited" == a ? "limited" : "designated" == a ? "designated" : "wood" == a ? "wood" : "metal" == a ? "metal" : "concrete" == a ? "concrete" : "plastic" == a ? "plastic" : "stone" == a ? "stone" : "steel" == a ? "steel" : "brick" == a ? "brick" : "reinforced_concrete" == a ? "reinforced_concrete" : "masonry" == a ? "masonry" : b;
}
var fnStandardInfoPopup = exports.fnStandardInfoPopup = function fnStandardInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e;if ("function" === typeof a) {
        var f = a.call(b)[0].getImage();if (f) try {
            e = f.getSrc();
        } catch (g) {
            e = "";
        }
    } else {
        f = a.getImage();try {
            e = f.getSrc();
        } catch (h) {
            e = "";
        }
    }d += fnHeader(c, e);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());return '<div class="c4g_popup_text">' + d + "</div>";
},
    fnReducedInfoPopup = exports.fnReducedInfoPopup = function fnReducedInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e = !1,
        f;f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;"hotel" == c.tourism && (e = !0);"guest_house" == c.tourism && (e = !0);"chalet" == c.tourism && (e = !0);"hostel" == c.tourism && (e = !0);"alpine_hut" == c.tourism && (e = !0);if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;if ("museum" == c.tourism || "museum" == c.amenity) e = !0;"cinema" == c.amenity && (e = !0);"theatre" == c.amenity && (e = !0);if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;"playground" == c.leisure && (e = !0);c.aerialway && (e = !0);if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;"station" == c.railway && (e = !0);"swimming" == c.sport && (e = !0);"swimming_pool" == c.leisure && (e = !0);"swimming_pool" == c.amenity && (e = !0);"waterpark" == c.leisure && (e = !0);c.water_park && (e = !0);"sports_centre" == c.leisure && (e = !0);switch (e) {case !1:
            d += fnHeader(c, f);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());break;case !0:
            d += fnHeader(c, f);}return '<div class="c4g_popup_text">' + d + "</div>";
};
function fnHeader(b, a) {
    var c = "",
        d = "32px";a && -1 != a.indexOf("icon_mapcil") && (d = "250px", a = a.replace("icon_mapcil", "logo_mapcil"));if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
        if (b.name) var e = b.name;b["piste:name"] && (e = b["piste:name"]);b["xmas:name"] && (e = b["xmas:name"]);b["xmas:location"] && (e = b["xmas:location"]);c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
    } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');c += fnGetTranslate_Type(b);return '<div class="c4g_popup_header">' + c + "</div>";
}
function fnFooter(b, a) {
    var c = "",
        d = !1;b["addr:housename"] && (c += "housename: " + b["addr:housename"] + "<br/>", d = !0);b["addr:floor"] ? (c += "floor: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "level: " + b["addr:level"] + "<br/>", d = !0);b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);b["addr:postcode"] && (c += b["addr:postcode"] + " ");b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
        var e = b.sqkm.length % 3,
            f = 0 < e ? b.sqkm.substring(0, e) : "";for (i = 0; i < Math.floor(b.sqkm.length / 3); i++) {
            f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));
        }c += "area: " + f + " Km\xB2<br/>";
    } else c += "area " + b.sqkm + "<br/>";b["contact:phone"] && (c = isMobile() ? c + ('phone: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('phone: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);b.phone && (c = isMobile() ? c + ('phone: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('phone: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);b["contact:fax"] ? (c += "fax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "fax: " + b.fax + "<br/>", d = !0);b["contact:email"] ? (c += 'email: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'email: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);d && (c += "<br/>");if (b.opening_hours) {
        d = b.opening_hours;for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += 'opening hours: <br/><div class="c4g_open_text">' + d + "</div>";c = 0 < d.indexOf("PH") ? c + "(PH = public holiday)<br/>" : c + "<br/>";
    }if (b["xmas:opening_hours"]) {
        d = b["xmas:opening_hours"];for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += 'opening hours: <br/><div class="c4g_open_text">' + d + "</div>";c = 0 < d.indexOf("PH") ? c + "(PH = public holiday)<br/>" : c + "<br/>";
    }b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>');
    b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>');b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Wikipedia link</a><br/>');b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Wikimedia link</a><br/>');b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'webcam: <a href="' + d + '" target="_blank">webcam link</a><br/>');b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');d = "";b.internet_access && (d += "internet access: " + translate(b.internet_access) + "<br/>");b["internet_access:fee"] && (d += "fee: " + translate(b["internet_access:fee"]) + "<br/>");b["wifi_access:operator"] && (d += "wifi operator: " + b["wifi_access:operator"] + "<br/>");b["wifi_access:technology"] && (d += "wifi technology: " + b["wifi_access:technology"] + "<br/>");b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");"" != d && (c += 'internet access available<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");b.wheelchair && (c += "wheelchair: " + translate(b.wheelchair) + "<br/>");b["wheelchair:description"] && (c += "description: " + b["wheelchair:description"] + "<br/>");b["wheelchair:entrance_width"] && (c += "entrance width (cm): " + b["wheelchair:entrance_width"] + "<br/>");b["wheelchair:step_height"] && (c += "step height (cm): " + b["wheelchair:step_height"] + "<br/>");b["wheelchair:rooms"] && (c += "rooms: " + b["wheelchair:rooms"] + "<br/>");
    b["wheelchair:places"] && (c += "places: " + b["wheelchair:places"] + "<br/>");b["cent:places"] && (c += "places: " + b["wheelchair:places"] + "<br/>");b["ramp:wheelchair"] && (c += "ramp: " + b["ramp:wheelchair"] + "<br/>");b["capacity:disabled"] && (c += "capacity parking: " + translate(b["capacity:disabled"]) + "<br/>");b["toilets:wheelchair"] && (c += "toilets: " + translate(b["toilets:wheelchair"]) + "<br/>");b.centralkey && (c += "centralkey: " + b.centralkey + "<br/>");b.note && (c += b.note + "<br/>");b.description && (c += b.description + "<br/>");
    b.operator && (c += "operator: " + b.operator + "<br/>");b.ref && (c += "reference: " + b.ref + "<br/>");"yes" == b.lit && (c += "This object is illuimanted.<br/>");b.shop && (d = "", b.brand && (d += "brand: " + b.brand + "<br/>"), b.sells && (d += "sells: " + b.sells + "<br/>"), b.origin && (d += "source market: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "distributor: yes<br/>"), "" != d && (c += 'further particulars: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">OpenStreetMap link</a><br/>'));return c = '<div class="c4g_popup_footer">' + c + "</div>";
}
function fnGetTranslate_Type(b) {
    var a = "";if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "doctor<br/>";if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "hospital with emergency facilities<br/>" : a + "hospital<br/>";"dentist" == b.amenity && (a += "dentist<br/>");if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "pharmacy<br/>";if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "physiotherapist<br/>";
    if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "occupational_therapist<br/>";if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "psychotherapist<br/>";"alternative" == b.healthcare && (a += "alternative<br/>");"midwife" == b.healthcare && (a += "midwife<br/>");if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "speech_therapist<br/>";"yes" == b["health_speciality:music_therapy"] && (a += "music_therapy<br/>");"veterinary" == b.amenity && (a += "veterinary<br/>");"fire_station" == b.amenity && (a += "fire station<br/>");"fire_extinguisher" == b.emergency && (a += "fire extinguisher<br/>");"aed" == b.emergency && (a += "aed<br/>");"defibrillator" == b.emergency && (a += "defibrillator<br/>");"phone" == b.emergency && (a += "call box<br/>");"police" == b.amenity && (a += "police<br/>");"ambulance_station" == b.emergency && (a += "ambulance station<br/>");"technical" == b.emergency_service && (a += "technical<br/>");"water" == b.emergency_service && (a += "water<br/>");"baywatch" == b.waterway && (a += "baywatch<br/>");"air" == b.emergency_service && (a += "rescue helicopter<br/>");"emergency_access_point" == b.highway && (a += "emergency access point<br/>");if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "lifeboat station<br/>";"life_ring" == b.emergency && (a += "life ring<br/>");"siren" == b.emergency && (a += "siren<br/>");"life_ring" == b.amenity && (a += "life ring<br/>");"rescue_station" == b.amenity && (a += "rescue station<br/>");"fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "underground hydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "pillar hydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "wall hydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "suction point<br/>"));"suction_point" == b.emergency && (a += "suction point<br/>");"fire_water_pond" == b.emergency && (a += "fire protection pond<br/>");"mountain" == b.emergency_service && (a += "mountain rescue service<br/>");"water_tank" == b.emergency && (a += "fire water tank<br/>");"container" == b.recycling_type && (a += "Recycling container<br/>");"recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "suction station<br/>" : "recycling" == b.amenity && (a += " buyback centre<br/>");"yes" == b["diet:pescetarian"] ? a += "pescetarian available<br/>" : "only" == b["diet:pescetarian"] && (a += "just pescetarian<br/>");"yes" == b["diet:vegetarian"] ? a += "vegetarian vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "just vegetarian<br/>");"yes" == b["diet:lacto_vegetarian"] ? a += "lacto_vegetarian available<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "just lacto vegetarian<br/>");"yes" == b["diet:ovo_vegetarian"] ? a += "ovo vegetarian available<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "just ovo_vegetarian<br/>");"yes" == b["diet:vegan"] ? a += "vegan available<br/>" : "only" == b["diet:vegan"] && (a += "just vegan<br/>");"yes" == b["diet:fruitarian"] ? a += "fruitarian available<br/>" : "only" == b["diet:fruitarian"] && (a += "hust fruitarian<br/>");"yes" == b["diet:raw"] ? a += "raw availaibe<br/>" : "only" == b["diet:raw"] && (a += "just raw<br/>");
    "yes" == b["diet:gluten_free"] ? a += "gluten free available<br/>" : "only" == b["diet:gluten_free"] && (a += "just gluten free<br/>");"yes" == b["diet:dairy_free"] ? a += "dairy free available<br/>" : "only" == b["diet:dairy_free"] && (a += "just dairy free<br/>");"yes" == b["diet:lactose_free"] ? a += "lactose free available<br/>" : "only" == b["diet:lactose_free"] && (a += "just lactose free<br/>");"yes" == b["diet:halal"] ? a += "halal available<br/>" : "only" == b["diet:halal"] && (a += "just halal<br/>");"yes" == b["diet:kosher"] ? a += "kosher available<br/>" : "only" == b["diet:kosher"] && (a += "just kosher<br/>");"pub" == b.amenity && (a += "pub<br/>");"bar" == b.amenity && (a += "bar<br/>");"yes" == b.frozen_yogurt && (a += "frozen yogurt<br/>");"yes" == b.slush_ice && (a += "slush ice<br/>");"yes" == b.cake && (a += "cake<br/>");"yes" == b.coffee && (a += "coffee<br/>");"yes" == b.drinks && (a += "drinks<br/>");"biergarten" == b.amenity && (a += "biergarten<br/>");"restaurant" == b.amenity && (a += "restaurant<br/>");"fast_food" == b.amenity && (a += "fast food<br/>");if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "cafe<br/>";if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "ice cream<br/>";"alpine_hut" == b.tourism && (a += "alpine hut<br/>");"aquarium" == b.tourism && (a += "aquarium<br/>");"apartment" == b.tourism && (a += "apartment<br/>");"attraction" == b.tourism && (a += "attraction<br/>");"artwork" == b.tourism && (a += "artwork<br/>");"camp_site" == b.tourism && (a += "camp site<br/>");"caravan_site" == b.tourism && (a += "caravan site<br/>");"chalet" == b.tourism && (a += "chalet<br/>");"gallery" == b.tourism && (a += "gallery<br/>");"guest_house" == b.tourism && (a += "guest house<br/>");"hostel" == b.tourism && (a += "hostel<br/>");"hotel" == b.tourism && (a += "hotel<br/>");"motel" == b.tourism && (a += "motel<br/>");"museum" == b.tourism && (a += "museum<br/>");"picnic_site" == b.tourism && (a += "picnic site<br/>");"theme_park" == b.tourism && (a += "theme park<br/>");"viewpoint" == b.tourism && (a += "viewpoint<br/>");"wilderness_hut" == b.tourism && (a += "wilderness_hut<br/>");"wine_cellar" == b.tourism && (a += "wine cellar<br/>");"zoo" == b.tourism && (a += "zoo<br/>", "enclosure" == b.zoo && (a += "enclosure<br/>"), "petting_zoo" == b.zoo && (a += "petting zoo<br/>"), "falconry" == b.zoo && (a += "falconry<br/>"));"trail_riding_station" == b.tourism && (a += "trail riding station<br/>");"fishing" == b.club && (a += "fishing club<br/>");"sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");"amateur_radio" == b.club && (a += "amateur radio club<br/>");"art" == b.club && (a += "art club<br/>");"astronomy" == b.club && (a += "astronomy club<br/>");"automobile" == b.club && (a += "automobile club<br/>");
    "board_games" == b.club && (a += "board games club<br/>");"card_games" == b.club && (a += "card games club<br/>");"charity" == b.club && (a += "charity club<br/>");"chess" == b.club && (a += "chess club<br/>");"cinema" == b.club && (a += "cinema club<br/>");"cooking" == b.club && (a += "cooking club<br/>");"culture" == b.club && (a += "culture club<br/>");"doityourself" == b.club && (a += "doityourself club<br/>");"equestrian" == b.club && (a += "equestrian club<br/>");"ethnic" == b.club && (a += "ethnic club<br/>");"fan" == b.club && (a += "fan club<br/>");"freemasonry" == b.club && (a += "freemasonry club<br/>");"game" == b.club && (a += "game club<br/>");"history" == b.club && (a += "history club<br/>");"hunting" == b.club && (a += "hunting club<br/>");"linux" == b.club && (a += "linux club<br/>");"motorcycle" == b.club && (a += "motorcycle club<br/>");"music" == b.club && (a += "music club<br/>");"nature" == b.club && (a += "nature club<br/>");"nudism" == b.club && (a += "nudism club<br/>");"photography" == b.club && (a += "photography club<br/>");"politics" == b.club && (a += "politics club<br/>");"religion" == b.club && (a += "religion club<br/>");
    "scout" == b.club && (a += "scout club<br/>");"smoke" == b.club && (a += "smoke club<br/>");"sport" == b.club && (a += "sport club<br/>");"theatre" == b.club && (a += "theatre club<br/>");"veterans" == b.club && (a += "veterans club<br/>");"amusement_arcade" == b.leisure && (a += "penny arcade / gambling hall<br/>");"beach_resort" == b.leisure && (a += "beach resort<br/>");"bird_hide" == b.leisure && (a += "bird hide<br/>");"common" == b.leisure && (a += "common<br/>");"club" == b.leisure && (a += "club<br/>");"dance" == b.leisure && (a += "dance<br/>");"dog_park" == b.leisure && (a += "dog_park<br/>");"firepit" == b.leisure && (a += "firepit<br/>");"fishing" == b.leisure && (a += "fishing<br/>");"garden" == b.leisure && (a += "garden<br/>");"golf_course" == b.leisure && (a += "golf course<br/>");"hackerspace" == b.leisure && (a += "hackerspace<br/>");"horse_riding" == b.leisure && (a += "horse riding<br/>");"ice_rink" == b.leisure && (a += "ice rink<br/>");"nature_reserve" == b.leisure && (a += "nature reserve<br/>");"park" == b.leisure && (a += "park<br/>");"miniature_golf" == b.leisure && (a += "miniature golf<br/>");"pitch" == b.leisure && (a += "pitch<br/>");"pitch" == b.leisure && "yes" == b.building && (a += "gym<br/>");"playground" == b.leisure && "yes" == b.building ? a += "playground<br/>" : "playground" == b.leisure && (a += "playground<br/>");"social_club" == b.leisure && (a += "social club<br/>");"spa" == b.leisure && (a += "spa<br/>");"sports_centre" == b.leisure && (a += "sports centre<br/>");"climbing_adventure" == b.sport && (a += "climbing adventure<br/>");"stadium" == b.leisure && (a += "stadium<br/>");"swimming_pool" == b.leisure && (a += "swimming pool<br/>");"track" == b.leisure && (a += "track<br/>");"water_park" == b.leisure && (a += "water park<br/>");"wildlife_hide" == b.leisure && (a += "wildlife hide<br/>");"adult_gaming_centre" == b.leisure && (a += "adult gaming_centre<br/>");"bowling_alley" == b.leisure && "10pin" == b.sport && (a += "10pin bowling_alley<br/>");"bowling_alley" == b.leisure && "9pin" == b.sport && (a += "9pin bowling_alley<br/>");if ("karting" == b.sport || "motor" == b.sport) a += "karting<br/>";if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";if (b["piste:type"]) switch (b["piste:type"]) {case "skitour":
            a += "skitour<br/>";break;case "downhill":
            a += "downhill<br/>";break;case "sled":
            a += "sled<br/>";break;case "nordic":
            a += "nordic<br/>";break;case "hike":
            a += "hike<br/>";break;case "snow_park":
            a += "snow park<br/>";}if (b.sport) switch (b.sport) {case "surfing":
            a += "surfing<br/>";break;case "kitesurfing":
            a += "kitesurfing<br/>";break;case "water_ski":
            a += "water ski<br/>";}if (b.aerialway) switch (b.aerialway) {case "cable_bar":
            a += "cable bar<br/>";break;case "gondola":
            a += "gondola<br/>";break;case "chair_lift":
            a += "chair lift<br/>";
            break;case "mixed_lift":
            a += "mixed lift<br/>";break;case "drag_lift":
            a += "drag lift<br/>";break;case "t-bar":
            a += "t-bar<br/>";break;case "t-bar":
            a += "t-bar<br/>";break;case "platter":
            a += "platter<br/>";break;case "rope_tow":
            a += "rope tow<br/>";break;case "magic_carpet":
            a += "magic carpet<br/>";break;default:
            a += "unknown";}"mosque" == b.building && (a += "mosque<br/>");"synagogue" == b.building && (a += "synagogue<br/>");"temple" == b.building && (a += "temple<br/>");"apartments" == b.building && (a += "apartments<br/>");"farm" == b.building && (a += "farm<br/>");"hotel" == b.building && (a += "hotel<br/>");"house" == b.building && (a += "house<br/>");"detached" == b.building && (a += "detached<br/>");"residential" == b.building && (a += "residential<br/>");if ("domitory" == b.building || "residential plus" == b.building) a += "domitory<br/>";"terrace" == b.building && (a += "terrace<br/>");"houseboat" == b.building && (a += "houseboat<br/>");"bungalow" == b.building && (a += "bungalow<br/>");"static_caravan" == b.building && (a += "static caravan<br/>");"commercial" == b.building && (a += "commercial<br/>");
    "retail" == b.building && (a += "retail<br/>");"warehouse" == b.building && (a += "warehouse<br/>");"bakehouse" == b.building && (a += "bakehouse<br/>");"shrine" == b.building && (a += "shrine<br/>");"civic" == b.building && (a += "civic<br/>");"stadium" == b.building && (a += "stadium<br/>");"train_station" == b.building && (a += "train station<br/>");"university" == b.building && (a += "university<br/>");"public" == b.building && (a += "public<br/>");"bridge" == b.building && (a += "bridge<br/>");"bunker" == b.building && (a += "bunker<br/>");"cabin" == b.building && (a += "cabin<br/>");"conservatory" == b.building && (a += "conservatory<br/>");"construction" == b.building && (a += "construction<br/>");"garage" == b.building && (a += "garage<br/>");"garages" == b.building && (a += "garages<br/>");"greenhouse" == b.building && (a += "greenhouse<br/>");"hangar" == b.building && (a += "hangar<br/>");"hut" == b.building && (a += "hut<br/>");"pavillion" == b.building && (a += "pavillion<br/>");"roof" == b.building && (a += "roof<br/>");"shed" == b.building && (a += "shed<br/>");"transformer_tower" == b.building && (a += "transformer tower<br/>");
    "service" == b.building && (a += "service<br/>");"kiosk" == b.building && (a += "kiosk<br/>");"carport" == b.building && (a += "carport<br/>");"ruins" == b.building && (a += "ruins<br/>");"gambling" == b.amenity && (a += "penny arcade<br/>");"library" == b.amenity && (a += "library<br/>");"fountain" == b.amenity && (a += "fountain<br/>");"attraction" == b.amenity && (a += "attraction<br/>");if ("social_centre" == b.amenity || "club" == b.amenity) a += "social centre<br/>";"townhall" == b.amenity && (a += "townhall<br/>");"bench" == b.amenity && (a += "bench<br/>");
    if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "grave yard<br/>";"post_box" == b.amenity && (a += "post box<br/>");"post_office" == b.amenity && (a += "post office<br/>");"telephone" == b.amenity && (a += "telephone<br/>");"atm" == b.amenity && (a += "atm<br/>");"bank" == b.amenity && (a += "bank<br/>");"toilets" == b.amenity && "yes" == b.diaper ? a += "toilets with diaper changing table<br/>" : "toilets" == b.amenity && (a += "toilets<br/>");"school" == b.amenity && "1" == b["isced:level"] ? a += "primary school<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "secondary school<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "secondary schools<br/>" : "school" == b.amenity && (a += "school<br/>");"kindergarten" == b.amenity && (a += "kindergarten<br/>");"internet_cafe" == b.amenity && (a += "internet cafe<br/>");"daycare" == b.amenity && (a += "daycare<br/>");"childcare" == b.amenity && (a += "childcare<br/>");"university" == b.amenity && (a += "university<br/>");"college" == b.amenity && (a += "college<br/>");"shelter" == b.amenity && (a += "shelter<br/>");"bbq" == b.amenity && (a += "bbq<br/>");"nightclub" == b.amenity && (a += "nightclub<br/>");"bicycle_parking" == b.amenity && (a += "bicycle parking<br/>");"bicycle_rental" == b.amenity && (a += "bicycle rental<br/>");"boat_sharing" == b.amenity && (a += "boat sharing<br/>");"car_sharing" == b.amenity && (a += "car sharing<br/>");"cinema" == b.amenity && (a += "cinema<br/>");"swimming_pool" == b.amenity && (a += "swimming pool<br/>");if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "embassy<br/>";"embassy" == b.amenity && "consulate" == b.diplomatic && (a += "consulate<br/>");"embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "consulate general<br/>");"embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "honorary consulate<br/>");"embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "permanent mission<br/>");"embassy" == b.amenity && "delegation" == b.diplomatic && (a += "delegation<br/>");"embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "high commission<br/>");"Barfusspfad" == b.amenity && (a += "barefoodpath<br/>");"casino" == b.amenity && (a += "casino<br/>");"spa" == b.amenity && (a += "spa<br/>");"stables" == b.amenity && (a += "stables<br/>");"watering_place" == b.amenity && (a += "watering place<br/>");"yes" == b.watering_place && (a += "watering place<br/>");"water_point" == b.amenity && (a += "water point<br/>");"taxi" == b.amenity && (a += "taxi<br/>");"car_wash" == b.amenity && (a += "car wash<br/>");"brothel" == b.amenity && (a += "brothel<br/>");"stripclub" == b.amenity && (a += "stripclub<br/>");"swingerclub" == b.amenity && (a += "swingerclub<br/>");"planetarium" == b.amenity && (a += "planetarium<br/>");"courthouse" == b.amenity && (a += "court house<br/>");"crematorium" == b.amenity && (a += "crematorium<br/>");if ("crypt" == b.amenity || "crypt" == b.building) a += "crypt<br/>";"hunting_stand" == b.amenity && (a += "hunting stand<br/>");"photo_booth" == b.amenity && (a += "photo booth<br/>");"prison" == b.amenity && (a += "prison<br/>");"ranger_station" == b.amenity && (a += "ranger station<br/>");"register_office" == b.amenity && (a += "register office<br/>");"marketplace" == b.amenity && (a += "marketplace<br/>");"solarium" == b.amenity && (a += "solarium<br/>");"sauna" == b.amenity && (a += "sauna<br/>");"shower" == b.amenity && (a += "shower<br/>");if ("waste_disposal" == b.amenity && (a += "waste disposal<br/>", b.waste)) switch (a += "Typ: ", b.waste) {case "trash":
            a += "General<br/>";break;case "oil":
            a += "Oil<br/>";break;case "drugs":
            a += "Pharmaceutical<br/>";break;case "organic":
            a += "Organic<br/>";break;case "plastic":
            a += "Plastic<br/>";break;case "rubble":
            a += "Rubble<br/>";break;case "cigarettes":
            a += "Cigarettes<br/>";break;default:
            a += "General<br/>";}if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "dog waste station<br/>";if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "scout camp<br/>";"ferry_terminal" == b.amenity && (a += "ferry terminal<br/>");"bureau_de_change" == b.amenity && (a += "bureau de change<br/>");"youth_club" == b.amenity && (a += "youth club<br/>");"festival_grounds" == b.amenity && (a += "festival grounds<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "fireplace<br/>";if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "vending machine admission tickets<br/>";
            break;case "animal_feed":
            a += "vending machine animal feed<br/>";break;case "bicycle_tube":
            a += "vending machine bicycle tube<br/>";break;case "books":
            a += "vending machine books<br/>";break;case "candles":
            a += "vending machine candles<br/>";break;case "cigarettes":
            a += "vending machine cigarettes<br/>";break;case "chemist":
            a += "vending machine chemist<br/>";break;case "condoms":
            a += "vending machine condoms<br/>";break;case "drinks":
            a += "vending machine drinks<br/>";break;case "electronics":
            a += "vending machine electronics<br/>";
            break;case "elongated_coin":
            a += "vending machine elongated_coin<br/>";break;case "excrement_bags":
            a += "vending machine excrement_bags<br/>";break;case "feminine_hygiene":
            a += "vending machine feminine_hygiene<br/>";break;case "first_aid":
            a += "vending machine first_aid<br/>";break;case "fishing_tackle":
            a += "vending machine fishing tackle<br/>";break;case "fishing_bait":
            a += "vending machine fishing bait<br/>";break;case "flowers":
            a += "vending machine flowers<br/>";break;case "food":
            a += "vending machine food<br/>";
            break;case "ice_cubes":
            a += "vending machine ice cubes<br/>";break;case "ice_cream":
            a += "vending machine ice cream<br/>";break;case "ink_cartridges":
            a += "vending machine ink cartridges<br/>";break;case "laundry_detergent":
            a += "vending machine laundry detergent<br/>";break;case "public_transport_tickets":
            a += "vending machine public transport tickets<br/>";break;case "newspaper":
            a += "vending machine newspaper<br/>";break;case "parcel_pickup":
            a += "vending machine parcel pickup<br/>";break;case "parcel_mail_in":
            a += "Packege station<br/>";break;case "parking_tickets":
            a += "vending machine parking tickets<br/>";break;case "photos":
            a += "vending machine photos<br/>";break;case "sex_toys":
            a += "vending machine sex_toys<br/>";break;case "SIM_cards":
            a += "vending machine SIM_cards<br/>";break;case "stamps":
            a += "vending machine stamps<br/>";break;case "sweets":
            a += "vending machine sweets<br/>";break;case "syringes":
            a += "vending machine syringes<br/>";break;case "toll":
            a += "vending machine toll<br/>";break;case "toys":
            a += "vending machine toys<br/>";
            break;case "umbrellas":
            a += "vending machine umbrellas<br/>";break;default:
            a += "vending machine<br/>";} else a += "vending machine<br/>";"arts_centre" == b.amenity && (a += "arts centre<br/>");"artwork" == b.amenity && (a += "artwork<br/>");"museum" == b.amenity && (a += "museum<br/>");"theatre" == b.amenity && (a += "theatre<br/>");"cathedral" == b.building && (a += "cathedral<br/>");"church" == b.building && (a += "church<br/>");"chapel" == b.building && (a += "chapel<br/>");"place_of_worship" == b.amenity && (a += "place of worship<br/>");"village" == b.abandoned && (a += "abandoned village<br/>");"theme_park" == b["abandoned:tourism"] && (a += "abandoned theme park<br/>");"prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "abandoned concentration camp<br/>");"yes" == b.abandoned && "bunker" == b.military && (a += "abandoned bunker<br/>");"yes" == b.abandoned && "barracks" == b.military && (a += "abandoned barracks<br/>");"yes" == b.abandoned && "airfield" == b.military && (a += "abandoned airfield<br/>");"monastery" == b.historic && (a += "historic monastery<br/>");
    "monastery" == b.amenity && (a += "monastery<br/>");"monastery" == b.building && (a += "monastery<br/>");"manor" == b.historic && (a += "historic manor<br/>");"boundary_stone" == b.historic && (a += "historic boundary stone<br/>");"milestone" == b.historic && (a += "historic milestone<br/>");"monument" == b.historic && (a += "monument<br/>");"palace" == b.historic && (a += "historic palace<br/>");"mine" == b.historic && (a += "historic mine<br/>");"ruins" == b.historic && (a += "ruins<br/>");"harbour" == b.historic_usage && (a += "historic harbour<br/>");
    "rune stone" == b.historic && (a += "rune stone<br/>");"battlefield" == b.historic && (a += "historic battlefield<br/>");"blacksmith" == b.historic && (a += "historic blacksmith<br/>");if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "shrine<br/>";"city_gate" == b.historic && (a += "historic city gate<br/>");"wayside_cross" == b.historic && (a += "historic wayside cross<br/>");"monument" == b.amenity && (a += "monument<br/>");"memorial" == b.historic && (a += "memorial<br/>");"optical_telegraph" == b.historic && (a += "historic optical telegraph<br/>");
    if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {case "defensive":
            a += "defensive castle<br/>";break;case "palace":
            a += "palace<br/>";break;case "stately":
            a += "stately castle<br/>";break;case "manor":
            a += "manor<br/>";break;case "fortress":
            a += "fortress<br/>";break;case "castrum":
            a += "castrum<br/>";break;case "shiro":
            a += "shiro<br/>";break;case "kremlin":
            a += "kremlin<br/>";break;default:
            a += "castle<br/>";} else a += "castle<br/>";"archaeological_site" == b.historic && (a += "archaeological site<br/>");if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {case "tumulus":
            a += "tumulus<br/>";break;case "rock-cut":
            a += "rock<br/>";break;case "hypogeum":
            a += "hypogeum<br/>";break;case "war_grave":
            a += "war grave<br/>";break;case "mausoleum":
            a += "mausoleum<br/>";break;case "columbarium":
            a += "columbarium<br/>";break;case "crypt":
            a += "crypt<br/>";break;case "pyramid":
            a += "pyramid<br/>";break;case "sarcophagus":
            a += "sarcophagus<br/>";break;case "vault":
            a += "vault<br/>";break;case "tombstone":
            a += "tombstone<br/>";break;default:
            a += "historic tomb<br/>";} else a += "historic tomb<br/>";"accountant" == b.office && (a += "accountant<br/>");"administrative" == b.office && (a += "administrative<br/>");"architect" == b.office && (a += "architect<br/>");"association" == b.office && (a += "association<br/>");"physician" == b.office && (a += "physician<br/>");"camping" == b.office && (a += "camping office<br/>");"company" == b.office && (a += "company<br/>");"educational_institution" == b.office && (a += "educational institution<br/>");"employment_agency" == b.office && (a += "employment agency<br/>");"estate_agent" == b.office && (a += "estate agent<br/>");"forestry" == b.office && (a += "forestry<br/>");"foundation" == b.office && (a += "foundation<br/>");"government" == b.office && (a += "government<br/>");"guide" == b.office && (a += "guide office<br/>");"insurance" == b.office && (a += "insurance<br/>");"it" == b.office && (a += "it office<br/>");"lawyer" == b.office && (a += "lawyer<br/>");"newspaper" == b.office && (a += "newspaper<br/>");"ngo" == b.office && (a += "ngo office<br/>");"notary" == b.office && (a += "notary<br/>");"political_party" == b.office && (a += "political party<br/>");
    "quango" == b.office && (a += "quango office<br/>");"realtor" == b.office && (a += "realtor<br/>");"real_estate_agent" == b.office && (a += "real estate agent<br/>");"register" == b.office && (a += "register<br/>");"religion" == b.office && (a += "religious office<br/>");"research" == b.office && (a += "research office<br/>");"tax" == b.office && (a += "tax office<br/>");"telecommunication" == b.office && (a += "telecommunication office<br/>");"travel_agent" == b.office && (a += "travel agent<br/>");"water_utility" == b.office && (a += "water utility office<br/>");
    "therapist" == b.office && (a += "therapist<br/>");"city" == b.place && (a += "city<br/>");"town" == b.place && (a += "town<br/>");"village" == b.place && (a += "village<br/>");"continent" == b.place && (a += "continent<br/>");"ocean" == b.place && (a += "ocean</br>");"track" == b.highway && (a += "track<br/>");"raceway" == b.highway && (a += "raceway<br/>");"designated" == b.bicycle && (a += "cycle path<br/>");"path" == b.highway && (a += "food path<br/>");"parking" == b.amenity && (a += "parking<br/>");"services" == b.highway && (a += "services<br/>");"rest_area" == b.highway && (a += "rest area<br/>");"turning_circle" == b.highway && (a += "turning circle<br/>");"service" == b.highway && (a += "service road<br/>");"motorway" == b.highway && (a += "motorway<br/>");"motorway_junction" == b.highway && (a += "motorway junction<br/>");"bridleway" == b.highway && (a += "bridleway<br/>");"yes" == b.oneway && (a += "oneway<br/>");"yes" == b.park_ride && (a += "park and ride<br/>");"unknown" == b.park_ride && (a += "park and ride<br/>");"bus" == b.park_ride && (a += "park and ride<br/>");"tram" == b.park_ride && (a += "park and ride<br/>");
    "bus_stop" == b.highway && (a += "bus stop<br/>");"pedestrian" == b.highway && (a += "pedestrian<br/>");"street_lamp" == b.highway && (a += "street lamp<br/>");"traffic_signals" == b.highway && (a += "traffic signals<br/>");"traffic_signals" == b.crossing && (a += "traffic signals<br/>");"speed_camera" == b.highway && (a += "speed camera<br/>");"yes" == b.traffic_calming && (ret += "traffic calming</br>");"bump" == b.traffic_calming && (a += "bump</br>");"chicane" == b.traffic_calming && (a += "chicane</br>");"choker" == b.traffic_calming && (a += "choker</br>");
    "cushion" == b.traffic_calming && (a += "cushion</br>");"hump" == b.traffic_calming && (a += "hump</br>");"island" == b.traffic_calming && (a += "island</br>");"rumble_strip" == b.traffic_calming && (a += "rumble_strip</br>");"table" == b.traffic_calming && (a += "table</br>");"buoy_cardinal" == b["seamark:type"] && (a += "buoy cardinal<br/>");"buoy_lateral" == b["seamark:type"] && (a += "buoy lateral<br/>");"buoy_isolated_danger" == b["seamark:type"] && (a += "buoy isolated_danger<br/>");"perch" == b["seamark:beacon_lateral:shape"] && (a += "perch<br/>");
    "fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "fuel station<br/>" : "fuel" == b.amenity && (a += "fuel<br/>");if ("charging_station" == b.amenity) {
        var a = a + "charging station<br/>",
            c = b.voltage;if (b.car) {
            switch (b.car) {case "yes":
                    a += "Car: yes";break;case "no":
                    a += "Car: No";break;default:
                    a += "Cars: unkown";}a += "<br/>";
        } else a += "Cars: unkown<br/>";if (b.bicycle) {
            switch (b.bicycle) {case "yes":
                    a += "E-Bike: yes";break;case "no":
                    a += "E-Bike: no";break;default:
                    a += "E-Bike: unkown";}a += "<br/>";
        } else a += "E-Bike: unkown<br/>";b["socket:schuko"] && (a += "Schuko socket: " + b["socket:schuko"] + "<br/>");b["socket:cee_blue"] && (a += "Cee blue socket " + b["socket:cee_blue"] + "<br/>");b["socket:cee_red_16a"] && (a += "Cee red 16a socket " + b["socket:cee_red_16a"] + "<br/>");b["socket:cee_red_32a"] && (a += "Cee red 32a socket " + b["socket:cee_red_32a"] + "<br/>");b["socket:cee_red_64a"] && (a += "Cee red 64a socket " + b["socket:cee_red_64a"] + "<br/>");b["socket:cee_red_125a"] && (a += "Cee red 125a socket " + b["socket:cee_red_125a"] + "<br/>");
        b["socket:nema_5_15"] && (a += "Nema 5 15 socket " + b["socket:nema_5_15"] + "<br/>");b["socket:nema_5_20"] && (a += "Nema 5 20 socket " + b["socket:nema_5_20"] + "<br/>");b["socket:nema_14_30"] && (a += "Nema 14 30 socket " + b["socket:nema_14_30"] + "<br/>");b["socket:nema_14_50"] && (a += "Nema 14 50 socket " + b["socket:nema_14_50"] + "<br/>");b["socket:bs1363"] && (a += "Bs1363 socket " + b["socket:bs1363"] + "<br/>");b["socket:type1"] && (a += "Type 1 socket " + b["socket:type1"] + "<br/>");b["socket:type1_combo"] && (a += "Type 1 combo socket " + b["socket:schuko"] + "<br/>");b["socket:type2"] && (a += "Type 2 socket " + b["socket:type2"] + "<br/>");b["socket:type2_combo"] && (a += "Type 2 combo socket " + b["socket:type2_combo"] + "<br/>");b["socket:type3"] && (a += "Type 3 socket " + b["socket:type3"] + "<br/>");b["socket:chademo"] && (a += "Chademo socket " + b["socket:chademo"] + "<br/>");b["socket:magne_charge"] && (a += "Magne charge socket " + b["socket:magne_charge"] + "<br/>");b["socket:tesla_standard"] && (a += "Tesla standard socket " + b["socket:tesla_standard"] + "<br/>");b["socket:tesla_supercharge"] && (a += "Tesla supercharge: " + b["socket:tesla_supercharge"] + "<br/>");b["socket:tesla_roadster"] && (a += "Tesla_roadster socket " + b["socket:tesla_roadster"] + "<br/>");a += "<br/>";b.voltage && (a += "Volt: " + c + "<br/>");
    }"yes" == b.tunnel && (a += "tunnel<br/>");if (b.bridge) switch (a += "bridge: ", b.bridge) {case "swing":
            a += "swing";break;case "aqueduct":
            a += "aqueduct";break;case "bascule":
            a += "flap bridge";break;case "boardwalk":
            a += "boardwalk";break;case "cantilever":
            a += "cantilever";break;case "covered":
            a += "covered";break;case "drawbridge":
            a += "drawbridge";break;case "humpback":
            a += "humpback";break;case "lift":
            a += "lift";break;case "low_water_crossing":
            a += "low water crossing";break;case "moveable":
            a += "moveable";break;case "pontoon":
            a += "pontoon";break;case "suspension":
            a += "suspension";break;case "trestle":
            a += "trestle";break;case "viaduct":
            a += "viaduct";}if (b["bridge:movable"]) switch (b["bridge:movable"]) {case "swing":
            a += "swing";break;case "bascule":
            a += "bascule";break;case "drawbridge":
            a += "drawbridge";break;case "lift":
            a += "lift";break;case "submersible":
            a += "submersible";break;case "transporter":
            a += "transporter";break;case "retractable":
            a += "retractable";}if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "nursing home / retirement home<br/>";"social_facility" == b.amenity && (a += "social facility<br/>");if (b.social_facility) {
        "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "senior group home<br/>");"assisted_living" == b.social_facility && (a += "assisted living<br/>");"outreach" == b.social_facility && (a += "outreach<br/>");"workshop" == b.social_facility && (a += "workshop<br/>");if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "ambulatory care<br/>";"shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "senior shelter<br/>");"shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "abused shelter<br/>");"food_bank" == b.social_facility && (a += "food bank<br/>");"hospice" == b.social_facility && (a += "hospice<br/>");
    }b.brewery && (a += "brand of beer: " + b.brewery + "<br/>");"alcohol" == b.shop && (a += "alcohol shop<br/>");"bakery" == b.shop && (a += "bakery shop<br/>");"beverages" == b.shop && (a += "beverages shop<br/>");"butcher" == b.shop && (a += "butcher shop<br/>");"cheese" == b.shop && (a += "cheese shop<br/>");"chocolate" == b.shop && (a += "chocolate shop<br/>");"coffee" == b.shop && (a += "coffee shop<br/>");"confectionery" == b.shop && (a += "confectionery shop<br/>");"convenience" == b.shop && (a += "convenience shop<br/>");"deli" == b.shop && (a += "deli shop<br/>");"dairy" == b.shop && (a += "dairy shop<br/>");"farm" == b.shop && (a += "farm shop<br/>");
    "greengrocer" == b.shop && (a += "greengrocer shop<br/>");"grocery" == b.shop && (a += "grocery shop<br/>");"organic" == b.shop && (a += "organic shop<br/>");"pasta" == b.shop && (a += "pasta shop<br/>");"seafood" == b.shop && (a += "seafood shop<br/>");"tea" == b.shop && (a += "tea shop<br/>");"wine" == b.shop && (a += "wine shop<br/>");"department_store" == b.shop && (a += "department store<br/>");"general" == b.shop && (a += "general shop<br/>");"kiosk" == b.shop && (a += "kiosk<br/>");"mall" == b.shop && (a += "mall<br/>");"supermarket" == b.shop && (a += "supermarket<br/>");
    "baby_goods" == b.shop && (a += "baby goods shop<br/>");"bag" == b.shop && (a += "bag shop<br/>");"boutique" == b.shop && (a += "boutique<br/>");"clothes" == b.shop && (a += "clothes shop<br/>");"fabric" == b.shop && (a += "fabric shop<br/>");"fashion" == b.shop && (a += "fashion shop<br/>");"jewelry" == b.shop && (a += "jewelry shop<br/>");"leather" == b.shop && (a += "leather shop<br/>");"shoes" == b.shop && (a += "shoes shop<br/>");"variety_store" == b.shop && (a += "variety store<br/>");"chemist" == b.shop && (a += "chemist<br/>");"cosmetics" == b.shop && (a += "cosmetics shop<br/>");
    "drugstore" == b.shop && (a += "drugstore<br/>");"perfumery" == b.shop && (a += "perfumery<br/>");"erotic" == b.shop && (a += "erotic shop<br/>");"hairdresser" == b.shop && (a += "hairdresser<br/>");"hearing_aids" == b.shop && (a += "hearing aids<br/>");"herbalist" == b.shop && (a += "herbalist<br/>");"massage" == b.shop && (a += "massage<br/>");"medical_supply" == b.shop && (a += "medical supply shop<br/>");"optician" == b.shop && (a += "optician<br/>");"tattoo" == b.shop && (a += "tattoo<br/>");"bathroom_furnishing" == b.shop && (a += "bathroom furnishing<br/>");
    "doityourself" == b.shop && (a += "doityourself<br/>");"energy" == b.shop && (a += "energy<br/>");"florist" == b.shop && (a += "florist<br/>");"furnace" == b.shop && (a += "furnace shop<br/>");"garden_centre" == b.shop && (a += "garden centre<br/>");"gas" == b.shop && (a += "gas<br/>");"glaziery" == b.shop && (a += "glaziery<br/>");"hardware" == b.shop && (a += "hardware shop<br/>");"houseware" == b.shop && (a += "houseware shop<br/>");"locksmith" == b.shop && (a += "locksmith<br/>");"paint" == b.shop && (a += "paint shop<br/>");"trade" == b.shop && (a += "trade<br/>");
    "antiques" == b.shop && (a += "antiques shop<br/>");"bed" == b.shop && (a += "bed shop<br/>");"candles" == b.shop && (a += "candles shop<br/>");"carpet" == b.shop && (a += "carpet shop<br/>");"curtain" == b.shop && (a += "curtain shop<br/>");"furniture" == b.shop && (a += "furniture store<br/>");"interior_decoration" == b.shop && (a += "interior decoration company<br/>");"kitchen" == b.shop && (a += "kitchen shop<br/>");"window_blind" == b.shop && (a += "window blind shop<br/>");"computer" == b.shop && (a += "computer shop<br/>");"electronics" == b.shop && (a += "electronics shop<br/>");"hifi" == b.shop && (a += "hifi shop<br/>");"mobile_phone" == b.shop && (a += "mobile phone shop<br/>");"radiotechnics" == b.shop && (a += "radiotechnics shop<br/>");"vacuum_cleaner" == b.shop && (a += "vacuum cleaner shop<br/>");"bicycle" == b.shop && (a += "bicycle shop<br/>");"car" == b.shop && (a += "car shop<br/>");"car repair" == b.shop && (a += "car repair<br/>");"car_parts" == b.shop && (a += "car parts shop<br/>");if ("dive" == b.shop || "scuba_diving" == b.shop) a += "scuba diving shop<br/>";"fishing" == b.shop && (a += "fishing shop<br/>");
    "free_flying" == b.shop && (a += "free flying shop<br/>");"hunting" == b.shop && (a += "hunting shop<br/>");"motorcycle" == b.shop && (a += "motorcycle shop<br/>");"outdoor" == b.shop && (a += "outdoor shop<br/>");"sports" == b.shop && (a += "sports shop<br/>");"tyres" == b.shop && (a += "tyres<br/>");"water_sports" == b.shop && (a += "water sports shop<br/>");"art" == b.shop && (a += "art<br/>");"craft" == b.shop && (a += "craft<br/>");"frame" == b.shop && (a += "frame shop<br/>");"music" == b.shop && (a += "music shop<br/>");"music_instrument" == b.shop && (a += "music instruments shop<br/>");
    "photo" == b.shop && (a += "photo shop<br/>");"video" == b.shop && (a += "video<br/>");"video_games" == b.shop && (a += "video games<br/>");"anime" == b.shop && (a += "anime<br/>");"books" == b.shop && (a += "books shop<br/>");"gift" == b.shop && (a += "gift shop<br/>");"newsagent" == b.shop && (a += "newsagent<br/>");"stationery" == b.shop && (a += "stationery<br/>");"ticket" == b.shop && (a += "ticket shop<br/>");"copyshop" == b.shop && (a += "copyshop<br/>");"funeral_directors" == b.shop && (a += "funeral directors<br/>");"laundry" == b.shop && (a += "laundry<br/>");
    "dry_cleaning" == b.shop && (a += "dry cleaning<br/>");"money_lender" == b.shop && (a += "money lender<br/>");"pawnbroker" == b.shop && (a += "pawnbroker<br/>");"pet" == b.shop && (a += "pet shop<br/>");"pyrotechnics" == b.shop && (a += "pyrotechnics shop<br/>");"religion" == b.shop && (a += "religion<br/>");"beauty" == b.shop && (a += "beauty<br/>");"solarium" == b.shop && (a += "solarium<br/>");"tobacco" == b.shop && (a += "tobacco shop<br/>");"toys" == b.shop && (a += "toys shop<br/>");"travel_agency" == b.shop && (a += "travel agency<br/>");"market_hall" == b.shop && (a += "market hall<br/>");"vacant" == b.shop && (a += "vacant<br/>");"weapons" == b.shop && (a += "weapons shop<br/>");"lottery" == b.gambling && (a += "lottery<br/>");"fish" == b.pet && (a += "fishkeeping<br/>");"agriucultural_engines" == b.craft && (a += "agriucultural engines<br/>");"basket_maker" == b.craft && (a += "basket maker<br/>");"beekeeper" == b.craft && (a += "beekeeper<br/>");"blacksmith" == b.craft && (a += "blacksmith<br/>");"brewery" == b.craft && (a += "brewery<br/>");"yes" == b.microbrewery && (a += "micro-brewery<br/>");"boatbuilder" == b.craft && (a += "boatbuilder<br/>");"bookbinder" == b.craft && (a += "bookbinder<br/>");"builder" == b.craft && (a += "housebuilding<br/>");"carpenter" == b.craft && (a += "carpenter, woodworker, joiner<br/>");"carpet_layer" == b.craft && (a += "carpet layer<br/>");"caterer" == b.craft && (a += "caterer<br/>");"clockmaker" == b.craft && (a += "clockmaker<br/>");"confectionery" == b.craft && (a += "confectionery<br/>");"dressmaker" == b.craft && (a += "dressmaker<br/>");"electrician" == b.craft && (a += "electrician<br/>");"gardener" == b.craft && (a += "gardener, landscaper<br/>");
    "glaziery" == b.craft && (a += "glaziery<br/>");"handicraft" == b.craft && (a += "handicraft<br/>");"hvac" == b.craft && (a += "heating, ventilation and air-conditioning technology (HVAC)<br/>");"insulation" == b.craft && (a += "thermal insulation<br/>");"jeweller" == b.craft && (a += "jeweller, gold-/silversmiths<br/>");"key_cutter" == b.craft && (a += "key cutter<br/>");"locksmith" == b.craft && (a += "locksmith<br/>");"metal_construction" == b.craft && (a += "metalworker<br/>");"optician" == b.craft && (a += "optician<br/>");"painter" == b.craft && (a += "painter<br/>");"parquet_layer" == b.craft && (a += "parquet layer<br/>");"photographer" == b.craft && (a += "photographer<br/>");"photographic_laboratory" == b.craft && (a += "photographic laboratory<br/>");"plasterer" == b.craft && (a += "plasterer<br/>");"plumber" == b.craft && (a += "plumber<br/>");"pottery" == b.craft && (a += "pottery<br/>");"rigger" == b.craft && (a += "ship rigger<br/>");"roofer" == b.craft && (a += "roofer<br/>");"saddler" == b.craft && (a += "saddler<br/>");"sailmaker" == b.craft && (a += "sailmaker<br/>");"sawmill" == b.craft && (a += "sawmill<br/>");"scaffolder" == b.craft && (a += "scaffolder<br/>");"sculptor" == b.craft && (a += "sculptor<br/>");"shoemaker" == b.craft && (a += "shoemaker<br/>");"stand_builder" == b.craft && (a += "exhibition stand builder<br/>");"stonemason" == b.craft && (a += "stonemason<br/>");"sun_protection" == b.craft && (a += "constructor for sun protection, venetian blind, shutter<br/>");"sweep" == b.craft && (a += "chimney sweep<br/>");"tailor" == b.craft && (a += "tailor<br/>");"tiler" == b.craft && (a += "tiler<br/>");"tinsmith" == b.craft && (a += "tinsmith, metalworker<br/>");
    "upholsterer" == b.craft && (a += "upholsterer<br/>");"watchmaker" == b.craft && (a += "watchmaker<br/>");"window_construction" == b.craft && (a += "window constructor<br/>");"machines" == b.rental && (a += "rental park for machines<br/>");"car_rental" == b.amenity && (a += "car rental company<br/>");"allotments" == b.landuse && (a += "allotment garden<br/>");"basin" == b.landuse && (a += "holding reservoir<br/>");"brownfield" == b.landuse && (a += "brownfield<br/>");"commercial" == b.landuse && (a += "commercial area<br/>");"construction" == b.landuse && (a += "construction area<br/>");"farmland" == b.landuse && (a += "farmland<br/>");"farmyard" == b.landuse && (a += "farmyard<br/>");"forest" == b.landuse && (a += "forest<br/>");"garages" == b.landuse && (a += "garages<br/>");"grass" == b.landuse && (a += "grass<br/>");"greenfield" == b.landuse && (a += "greenfield<br/>");"greenhouse_horticulture" == b.landuse && (a += "greenhouse horticulture<br/>");"industrial" == b.landuse && (a += "industry area<br/>");"landfill" == b.landuse && (a += "landfill<br/>");"meadow" == b.landuse && (a += "meadow<br/>");"orchard" == b.landuse && (a += "orchard<br/>");"plant_nursery" == b.landuse && (a += "plant nursery<br/>");"quarry" == b.landuse && (a += "quarry<br/>");"railway" == b.landuse && (a += "railway<br/>");"recreation_ground" == b.landuse && (a += "recreation ground<br/>");"reservoir" == b.landuse && (a += "reservoir<br/>");"residential" == b.landuse && (a += "residential<br/>");"retail" == b.landuse && (a += "retrail<br/>");"salt_pond" == b.landuse && (a += "salt pond<br/>");"village_green" == b.landuse && (a += "village green<br/>");"vineyard" == b.landuse && (a += "vineyard<br/>");
    "pond" == b.landuse && (a += "pond<br/>");"salt_pond" == b.landuse && (a += "salt pond<br/>");"animal_keeping" == b.landuse && (a += "animal keeping<br/>");"yes" == b.entrance && (a += "entrance<br/>");"main" == b.entrance && (a += "main-entrance<br/>");"service" == b.entrance && (a += "rear exit for staffing and suppliers<br/>");"exit" == b.entrance && (a += "exit<br/>");"emergency" == b.entrance && (a += "emergency<br/>");"bay" == b.natural && (a += "bay<br/>");"beach" == b.natural && (a += "beach<br/>");"wood" == b.natural && (a += "wood<br/>");"glacier" == b.natural && (a += "glacier<br/>");"cave_entrance" == b.natural && (a += "cave entrance<br/>");"spring" == b.natural && (a += "spring<br/>");"waterfall" == b.natural && (a += "waterfall<br/>");"scrub" == b.natural && (a += "scrub<br/>");"grassland" == b.natural && (a += "grassland<br/>");"wetland" == b.natural && (a += "wetland<br/>");"tree" == b.natural && (a += "tree");"peak" == b.natural && "yes" == b["summit:cross"] && (a += "cross on the summit of a mountain<br/>");"tree_row" == b.natural && (a += "tree row, alley of trees<br/>");"heath" == b.natural && (a += "heath<br/>");
    "moor" == b.natural && (a += "moor<br/>");"grassland" == b.natural && (a += "grassland<br/>");"fell" == b.natural && (a += "grasland above the tree land<br/>");"bare_rock" == b.natural && (a += "bare rock<br/>");"scree" == b.natural && (a += "scree<br/>");"volcano" == b.natural && (a += "volcano<br/>");"valley" == b.natural && (a += "valley<br/>");"stone" == b.natural && (a += "stone<br/>");"sea" == b.natural && (a += "sea<br/>");"national_park" == b.boundary && (a += "national park<br/>");"protected_area" == b.boundary && (a += "protected area<br/>");"yes" == b.mountain_pass && (a += "mountain pass<br/>");"waterfall" == b.waterway && (a += "waterfall<br/>");"canal" == b.waterway && (a += "canal<br/>");"canal" == b.water && (a += "canal<br/>");"river" == b.waterway && (a += "river<br/>");"river" == b.water && (a += "river<br/>");"riverbank" == b.waterway && (a += "river<br/>");"ditch" == b.waterway && (a += "ditch<br/>");"stream" == b.waterway && (a += "stream<br/>");"ferry" == b.route && (a += "ferry<br/>");"turning_point" == b.waterway && (a += "turning point<br/>");if ("lake" == b.water || "water" == b.natural) a += "lake<br/>";"cove" == b.water && (a += "cove<br/>");"lagoon" == b.water && (a += "lagoon<br/>");"pond" == b.water && (a += "pond<br/>");"reservoir" == b.water && (a += "waterreservoir<br/>");"oxbow" == b.water && (a += "oxbow lake<br/>");"lock" == b.water && (a += "lock chamber<br/>");"moat" == b.water && (a += "castle moat<br/>");"wastewater" == b.water && (a += "wastewater treatment plant<br/>");"guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "gastrointestinal<br/>" : "pier" == b.man_made && (a += "pier<br/>");"boatyard" == b.waterway && (a += "boatyard<br/>");"mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "dolphin<br/>");"foot" == b.route && (a += "footpath<br/>");"hiking" == b.route && (a += "hiking trail<br/>");if ("yes" == b.hiking && "information" == b.tourism) a += "direction board<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {case "board":
            a += "direction board<br/>";break;case "map":
            a += "direction board with a map<br/>";break;case "office":
            a += "tourist information office<br/>";
            break;case "terminal":
            a += "tourist information terminal<br/>";break;case "audioguide":
            a += "audioguide<br/>";break;case "guidepost":
            a += "guidepost<br/>";break;case "tactile_map":
            a += "tactile map<br/>";break;case "tactile_model":
            a += "tactile model<br/>";break;case "route_marker":
            a += "route marker<br/>";break;default:
            a += "direction board<br/>";} else a += "direction board<br/>";"bicycle" == b.route && (a += "cycle track<br/>");"mtb" == b.route && (a += "mountain bike route<br/>");"horse" == b.route && (a += "bridleway<br/>");"coastline" == b.natural && (a += "coastline<br/>");"cliff" == b.natural && (a += "cliff<br/>");"dam" == b.waterway && (a += "dam<br/>");"weir" == b.waterway && (a += "weir<br/>");"lock_gate" == b.waterway && (a += "lock gate<br/>");"yes" == b.lock && (a += "lock<br/>");"sluice_gate" == b.waterway && (a += "sluice gate<br/>");"pumping_station" == b.man_made && (a += "pumping station<br/>");"groyne" == b.man_made && (a += "groyne<br/>");"dyke" == b.man_made && (a += "dyke<br/>");"levee" == b.man_made && (a += "levee<br/>");"watermill" == b.man_made && (a += "watermill<br/>");"airfield" == b.military && (a += "military airfield<br/>");"naval_base" == b.military && (a += "naval base<br/>");"range" == b.military && (a += "military range<br/>");"military" == b.landuse && (a += "military land use<br/>");"training_area" == b.military && (a += "military training area<br/>");"exclusion_zone" == b.military && (a += "military exclusion zone<br/>");"danger_area" == b.military && (a += "military danger area<br/>");"barracks" == b.military && (a += "barracks<br/>");"nuclear_explosion_site" == b.military && (a += "military nuclear explosion site<br/>");
    "yes" == b.construction ? a += "construction<br/>" : "construction" == b.highway && (a += "construction<br/>");"petroleum_well" == b.man_made && (a += "petroleum well<br/>");"storage_tank" == b.man_made && (a += "storage tank<br/>");"wastewater_plant" == b.man_made && (a += "wastewater plant<br/>");"silo" == b.man_made && (a += "silo<br/>");"water_tower" == b.man_made && (a += "water tower<br/>");"windmill" == b.man_made && (a += "windmill<br/>");"monitoring_station" == b.man_made && (a += "monitoring station");"crane" == b.man_made && (a += "crane");"lighthouse" == b.man_made && (a += "lighthouse");"beacon" == b.man_made && (a += "beacon");"breakwater" == b.man_made && (a += "breakwater");"lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "street lamp<br/>");"lantern" == b.light_source && (a += "street lamp");"floodlight" == b.light_source && (a += "floodlight<br/>");"signal_lamp" == b.light_source && (a += "signal lamp<br/>");"aviation" == b.light_source && (a += "aviation<br/>");"warning" == b.light_source && (a += "warning<br/>");if (b.light_source && b["light:method"]) switch (a += "Light Typ: ", b["light:method"]) {case "gas":
            a += "Gas";break;case "electric":
            a += "electric";break;case "incandescent":
            a += "incandescent";break;case "halogen":
            a += "halogen";break;case "discharge":
            a += "discharge";break;case "metal-halide":
            a += "metal-halide";break;case "neon":
            a += "neon";break;case "sodium":
            a += "Natriumdampflampe";break;case "high_pressure_sodium":
            a += "high pressure sodium";break;case "low_pressure_sodium":
            a += "low pressure sodium";break;case "fluorescent":
            a += "Fluorescent";break;case "mercury":
            a += "Mercury";break;case "LED":
            a += "LED";break;case "laser":
            a += "Laser";break;case "arc":
            a += "Arc";break;default:
            a += "Unkown";}"drinking_water" == b.amenity && (a += "drinking water<br/>");"yes" == b.drinking_water && (a += "drinking water<br/>");"works" == b.man_made ? a += "industrial building<br/>" : "industrial" == b.building ? a += "industrial building<br/>" : "industrial" == b.landuse ? a += "industrial area<br/>" : "industrial" == b.abutters ? a += "industrial area<br/>" : "commercial" == b.abutters && (a += "commercial<br/>");if (b["generator:source"]) switch (a += "installation: ", b["generator:source"]) {case "biomass":
            a += "biomass";break;case "biofuel":
            a += "biofuel";break;case "biogas":
            a += "biogas";break;case "coal":
            a += "coal";break;case "oil":
            a += "oil";break;case "waste":
            a += "waste";break;case "wind":
            a += "wind";break;case "solar":
            a += "solar";break;case "hydro":
            a += "hydro";break;case "tidal":
            a += "tidal";break;case "wave":
            a += "wave";break;case "geothermal":
            a += "geothermal";break;case "osmotic":
            a += "osmotic";break;case "nuclear":
            a += "nuclear";break;default:
            a += "unknown<br/>";}"photovoltaic" == b.power_source && (a += "photovoltaic");"line" == b.power && (a += "power line<br/>");"cable" == b.power && (a += "cable<br/>");"cable_distribution_cabinet" == b.power && (a += "cable distribution cabinet<br/>");"plant" == b.power && (a += "plant<br/>");"station" == b.power && (a += "station<br/>");"sub_station" == b.power && (a += "substation<br/>");"compensator" == b.power && (a += "compensator<br/>");"converter" == b.power && (a += "converter<br/>");"generator" == b.power && (a += "generator<br/>");"heliostat" == b.power && (a += "heliostat<br/>");"insulator" == b.power && (a += "insulator<br/>");"busbar" == b.line && (a += "busbar<br/>");"bay" == b.line && (a += "bay<br/>");"minor_line" == b.power && (a += "minor line<br/>");"pole" == b.power && (a += "pole<br/>");"portal" == b.power && (a += "portal<br/>");"catenary_mast" == b.power && (a += "catenary mast<br/>");"substation" == b.power && (a += "substation<br/>");"switch" == b.power && (a += "switch<br/>");"terminal" == b.power && (a += "terminal<br/>");"tower" == b.power && (a += "tower<br/>");"transformer" == b.power && (a += "transformer<br/>");if (b.barrier) switch (b.barrier) {case "bollard":
            a += "bollard<br/>";
            break;case "cycle_barrier":
            a += "cycle barrier<br/>";break;case "gate":
            a += "gate<br/>";break;case "chain":
            a += "chain<br/>";break;case "lift_gate":
            a += "lift gate<br/>";break;case "wall":
            a += "wall<br/>";break;case "toll_booth":
            a += "toll booth<br/>";break;case "fence":
            switch (b.fence_type) {case "barbed_wire":
                    a += "barbed wire<br/>";break;case "wood":
                    a += "wood<br/>";break;case "chain_link":
                    a += "chain link<br/>";break;case "electric":
                    a += "electric<br/>";break;case "railing":
                    a += "railing<br/>";break;case "wire":
                    a += "wire<br/>";
                    break;case "metal":
                    a += "metal<br/>";break;case "pole":
                    a += "pole<br/>";break;default:
                    a += "fence<br/>";}break;case "block":
            a += "block<br/>";break;case "ditch":
            a += "ditch<br/>";break;case "border_control":
            a += "border control<br/>";break;case "hedge":
            a += "hedge<br/>";break;case "retaining_wall":
            a += "retaining wall<br/>";break;case "cattle_grid":
            a += "cattle grid<br/>";break;case "horse_stile":
            a += "horse stile<br/>";break;default:
            a += "unknown<br/>";}"noise_barrier" == b.wall && (a += "noise barrier<br/>");"retaining_wall" == b.designation && (a += "noise barrier<br/>");"noise_barrier" == b.designation && (a += "noise barrier<br/>");"surveillance" == b.man_made && (a += "surveillance<br/>");if (b.aeroway) switch (a += "airport: ", b.aeroway) {case "aerodrome":
            a += "airport";break;case "apron":
            a += "apron";break;case "gate":
            a += "gate";break;case "helipad":
            a += "helipad";break;case "hangar":
            a += "hangar";break;case "runway":
            a += "runway";break;case "taxiway":
            a += "taxiway";break;case "terminal":
            a += "terminal";break;default:
            a += "unknown<br/>";}"stop" == b.railway && (a += "railway stop<br/>");"crossing" == b.railway && (a += "crossing<br/>");"level_crossing" == b.railway && (a += "lvel crossing<br/>");"station" == b.railway && (a += "station<br/>");"bus_station" == b.amenity && (a += "bus station<br/>");"bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "bus station<br/>");"rail" == b.railway && (a += "railway<br/>", "contact_line" == b.electrified && (a += "overhead contact line<br/>"));"tram" == b.railway && (a += "tram<br/>");if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "slipway<br/>";if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {case "ferry":
            a += "ferry<br/>";break;case "container":
            a += "container<br/>";break;case "marina":
            "marina" != b.leisure && (a += "marina<br/>");break;case "navel_base":
            a += "navel base<br/>";break;case "tanker":
            a += "tanker<br/>";break;case "passenger":
            a += "passenger<br/>";break;case "bulk":
            a += "bulk<br/>";break;default:
            a += "habour<br/>";} else a += "habour<br/>";
    "marina" == b.leisure && (a += "marina<br/>");"wreck" == b.historic && (a += "wreck<br/>");"animal_shelter" == b.amenity && (a += "animal shelter<br/>");"shelter" == b.animal && (a += "shelter<br/>");"horse_walker" == b.animal && (a += "horse walker<br/>");"yes" == b.animal_shelter && (a += "animal shelter<br/>");"dog" == b.animal_shelter && (a += "animal shelter<br/>");"cat" == b.animal_shelter && (a += "animal shelter<br/>");"animal_boarding" == b.amenity && (a += "animal boarding<br/>");"yes" == b.animal_boarding && (a += "animal boarding<br/>");"dog" == b.animal_boarding && (a += "animal boarding<br/>");"horse" == b.animal_boarding && (a += "animal boarding<br/>");"cat" == b.animal_boarding && (a += "animal boarding<br/>");"dog;cat" == b.animal_boarding && (a += "animal boarding<br/>");"cat;dog" == b.animal_boarding && (a += "animal boarding<br/>");if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "animal training<br/>";"swimming" == b.animal && (a += "swimming for dogs<br/>");if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "animal feeding<br/>";if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "wildlife feeding<br/>";if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "feeding rack<br/>";"manger" == b.amenity && (a += "manger<br/>");"birdhouse" == b.man_made && (a += "birdhouse<br/>");"stork" == b.birds_nest && (a += "storck<br/>");"nest_box" == b.amenity && (a += "nest box<br/>");"wellness" == b.animal && (a += "dog parlour<br/>");"cemetery" == b.animal && (a += "small animal cemetery<br/>");
    if ("stable" == b.building || "stable" == b["building:use"]) a += "stable<br/>";"cowshed" == b.building && (a += "cowshed<br/>");"sty" == b.building && (a += "sty<br/>");"barn" == b.building && (a += "barn<br/>");"farm_auxiliary" == b.building && (a += "farm auxiliary<br/>");if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "milestone of waterway distance<br/>";"milestone" == b.highway && (a += "milestone<br/>");"market" == b["xmas:feature"] && (a += "Christmas fair<br/>");"tree" == b["xmas:feature"] && (a += "sale of Chrismas trees<br/>");
    "event" == b["xmas:feature"] && (a += "Chrismas event<br/>");"pyramid" == b["xmas:feature"] && (a += "Chrismas pyramid<br/>");return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}
var fnContent = exports.fnContent = function fnContent(b) {
    var a;a = "" + fnContentGeneralInformations(b);a += fnContentHealthcare(b);a += fnContentAerodrome(b);a += fnContentCuisine(b);a += fnContentShipping(b);a += fnContentHydrants(b);a += fnContentSports(b);a += fnContentStreetsTraffic(b);a += fnContentInformationCity(b);a += fnContentEmergency(b);a += fnContentStorage(b);a += fnContentAmenity(b);a += fnContentTourism(b);a += fnContentRoute(b);a += fnContentPetrol(b);a += fnContentBarriers(b);a += fnContentLanduse(b);a += fnContentNatural(b);a += fnKlosterAdditional(b);
    a += fnSicherheitAdditional(b);a += fnAdditionalBuildingInfos(b);a += fnKraftwerkInfo(b);a += fnMessstation(b);a += fnWertstoffinfo(b);(a += fnContentProtectedArea(b)) && (a = "<br/>" + a);return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = exports.fnContentAerodrome = function fnContentAerodrome(b) {
    var a = "";b.aerodrome && ("international" == b.aerodrome && (a += "type of airport: international<br/>"), "regional" == b.aerodrome && (a += "type of airport: regional<br/>"), "gliding" == b.aerodrome && (a += "type of airport: gliding<br/>"), "private" == b.aerodrome && (a += "type of airport: private<br/>"));b.iata && (a += "IATA-Code: " + b.iata + "<br/>");b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");return a;
},
    fnContentNatural = exports.fnContentNatural = function fnContentNatural(b) {
    var a = "";if (b.forest || b.wood) {
        if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "broadleaved<br/>";if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "needleleaved<br/>";if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "mixed<br/>";"leafless" == b.leaf_type && (a += "leafless<br/>");"evergreen" == b.wood && (a += "evergreen<br/>");"palm" == b.wood && (a += "palm<br/>");"nipa_palm" == b.wood && (a += "nipa palm<br/>");"eucalypt" == b.wood && (a += "eucalypt<br/>");if ("filao" == b.wood || "casuarina" == b.wood) a += "casuarina<br/>";
    }if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "broad-leaved<br/>" : a + "conifer<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "landmark<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "natural monument<br/>";"manger" == b["feeding:type"] && (a += "manger:rack for fodder<br/>");"automated" == b["feeding:type"] && (a += "automated<br/>");if (b["feeding:for"]) switch (b["feeding:for"]) {case "sheep":
            a += "animal: sheep<br/>";break;case "horse":
            a += "animal: horse<br/>";break;case "cow":
            a += "animal: cow<br/>";break;case "rabbit":
            a += "animal: rabbit<br/>";break;case "bunny":
            a += "animal: bunny<br/>";break;
        case "cat":
            a += "animal: cat </br>";break;case "swan":
            a += "animal: swan </br>";break;case "guinea pig":
            a += "animal: guinea pig </br>";break;case "donkey":
            a += "animal: donkey </br>";break;case "squirrel":
            a += "animal: squirrel </br>";break;case "pig":
            a += "animal: pig </br>";break;case "deer":
            a += "animal: deer </br>";break;case "guinea pig":
            a += "animal: guinea pig </br>";break;case "monkey":
            a += "animal: monkey </br>";break;case "camel":
            a += "animal: camel </br>";break;case "goat":
            a += "animal: goat </br>";break;case "hamster":
            a += "animal: hamster </br>";break;case "alpaca":
            a += "animal: alpaca </br>";break;default:
            a += "animal: unknown<br/>";}if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {case "hay":
            a += "feed with: hay</br>";break;case "grain":
            a += "feed with: grain</br>";break;case "corn":
            a += "feed with: corn</*br>";break;default:
            a += "feed with: unknown</br>";}"volcano" == b.natural && "active" == b.status && (a += "active volcano<br/>");"volcano" == b.natural && "dormant" == b.status && (a += "dormant volcano<br/>");"volcano" == b.natural && "extinct" == b.status && (a += "extinct volcano<br/>");"volcano" == b.natural && "stratovolcano" == b.type && (a += "type of volcanism:stratovolcano<br/>");"volcano" == b.natural && "shield" == b.type && (a += "type of volcanism:shield<br/>");"volcano" == b.natural && "scoria" == b.type && (a += "type of volcanism:scoria<br/>");return a;
},
    fnContentProtectedArea = exports.fnContentProtectedArea = function fnContentProtectedArea(b) {
    var a = "",
        c = "";"protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "description: Strict Nature Reserve, Wilderness Area<br/>"), "2" == c && (a = "description: National Park<br/>"), "3" == c && (a = "description: Natural Monument or Feature<br/>"), "4" == c && (a = "description: Habitat/Species Management Area<br/>"), "5" == c && (a = "description: Protected Landscape/ Seascape<br/>"), "6" == c && (a = "description: Protected area with sustainable use of natural resources<br/>"), "7" == c && (a = "description: nature-feature area<br/>"), "97" == c && (a = "description: protected by continental agreements<br/>"), "98" == c && (a = "description: protected by interstate- or international conventions<br/>"), "99" == c && (a = "other continental or international national protected areas <br/>"), "21" == c && (a = "description: Community life: religious, sacred areas, associative locations, recreation<br/>"), "22" == c && (a = "description: Cultural assets (cultural assets and - efforts, districts historical heritage, monument conservation)<br/>"), "23" == c && (a = "description: Protection in favor of economics<br/>"), "24" == c && (a = "description: Political protection<br/>"), "25" == c && (a = "description: Military areas (military refuges, test area)<br/>"), "26" == c && (a = "description: Historic: for colonial-stuff and protectorates.<br/>"), "29" == c && (a = "description: other social protected areas<br/>"), "11" == c && (a = "description: soil: crop yield, erosion protection, ...<br/>"), "12" == c && (a = "description: water: water protection area, fresh water, drinking water, springs, ...<br/>"), "13" == c && (a = 'description: climate and -air: gasper supply/cold air, ...for emission-, immission control in OSM existent, see "Low Emission Zone" (LEZ)<br/>'), "14" == c && (a = "description: species: no fishing, protected for fishery, protected for hunting, plants, ...<br/>"), "15" == c && (a = "description: location condition: floodwater retention area, protection forest, grazing land, ...<br/>"), "16" == c && (a = 'description: longtime hazard area: contamination, earth-moving area, "problem sites" ...<br/>'), "19" == c && (a = "description: other national resources protected areas<br/>"));return a;
},
    fnContentLanduse = exports.fnContentLanduse = function fnContentLanduse(b) {
    var a = "";"quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");"open_stable" == b["animal_keeping:type"] && (a += "open stable<br/>");"field_shelter" == b["animal_keeping:type"] && (a += "field shelter<br/>");"paddock" == b["animal_keeping:type"] && (a += "paddock<br/>");b.animal_keeping && (a += "animals: horses<br/>");return a;
},
    fnMessstation = exports.fnMessstation = function fnMessstation(b) {
    var a = "";"yes" == b["monitoring:water_level"] && (a += "water level<br/>");"yes" == b["monitoring:seismic_activity"] && (a += "seismic activity<br/>");"yes" == b["monitoring:tide_gauge"] && (a += "tide gauge<br/>");"yes" == b["monitoring:weather"] && (a += "weather<br/>");"yes" == b["monitoring:air_quality"] && (a += "air quality<br/>");return a;
},
    fnContentRoute = exports.fnContentRoute = function fnContentRoute(b) {
    var a = "";b.route && ("yes" == b.roundtrip && (a += "roundtrip<br/>"), b.length && (a += "length: " + b.length + "<br/>"), b.distance && (a += "distance: " + b.distance + "<br/>"), b.symbol && (a += "symbol: " + b.symbol + "<br/>"));return a;
},
    fnContentPetrol = exports.fnContentPetrol = function fnContentPetrol(b) {
    var a = "";"fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "e85<br/>"), "yes" == b["fuel:e10"] && (a += "e10<br/>"), "yes" == b["fuel:lpg"] && (a += "lpg<br/>"), "yes" == b["fuel:cng"] && (a += "cng<br/>"), "diesel" == b.fuel && (a += "diesel<br/>"), "lpg" == b.fuel && (a += "lpg<br/>"), "yes" == b["fuel:octane_95"] && (a += "octane 95<br/>"), "yes" == b["fuel:octane_98"] && (a += "octane 98<br/>"), "yes" == b["fuel:octane_100"] && (a += "octane 100<br/>"), "yes" == b["fuel:octane_102"] && (a += "octane 102<br/>"), "yes" == b["fuel:diesel"] && (a += "diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "charging station / loading station<br/>"));return a;
},
    fnContentHistoric = exports.fnContentHistoric = function fnContentHistoric(b) {
    var a = "";if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {case "megalith":
            a += "megalith<br/>";break;case "bigstone":
            a += "bigstone<br/>";break;case "tumulus":
            a += "tumulus<br/>";break;case "fortification":
            a += "fortification<br/>";break;default:
            a += "unknown<br/>";}return a;
},
    fnContentBarriers = exports.fnContentBarriers = function fnContentBarriers(b, a) {
    var c = "";if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "material: " + translate(b.material) + "<br/>");return c;
},
    fnContentTourism = exports.fnContentTourism = function fnContentTourism(b) {
    var a = "";if ("camp_site" == b.tourism) {
        "yes" == b.dog && (a += "dogs allowed<br/>");"no" == b.dog && (a += "dogs forbidden<br/>");b.stars && (a += b.stars + "stars<br/>");b.caravans && (a += "caravan sites<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Thers is an openfire. <br/>";"yes" == b.washing_machine && (a += "washing machine<br/>");"yes" == b.dryer && (a += "dryer<br/>");"yes" == b.group_only && (a += "use for groups only<br/>");"reception" == b.camp_site && (a += "reception available<br/>");
    }"information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "topo</br>"), "street" == b.map_type && (a += "street</br>"), "scheme" == b.map_type && (a += "scheme</br>"), "toposcope" == b.map_type && (a += "toposcope</br>"));"information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "map of site</br>"), "city" == b.map_size && (a += "city map</br>"), "region" == b.map_size && (a += "map of region</br>"));"geology" == b.board_type && (a += "geologic information<br/>");"history" == b.board_type && (a += "historic information<br/>");"nature" == b.board_type && (a += "information about nature<br/>");"notice" == b.board_type && (a += "general information<br/>");"plants" == b.board_type && (a += "information about plants<br/>");
    "wildlife" == b.board_type && (a += "information about wildlife<br/>");return a;
},
    fnContentAmenity = exports.fnContentAmenity = function fnContentAmenity(b) {
    var a = "";"boat_sharing" == b.amenity && (a += b.boattype + "<br/>");"embassy" == b.amenity && (a += b.country + "<br/>");if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "tickets<br/>";break;case "animal_feed":
            a += "animal feed<br/>";break;case "books":
            a += "books<br/>";break;case "candles":
            a += "candles<br/>";break;case "cigarettes":
            a += "cigarettes<br/>";break;case "condoms":
            a += "condoms<br/>";break;case "drinks":
            a += "drinks<br/>";break;case "first_aid":
            a += "first aid articles<br/>";break;case "fishing_tackle":
            a += "fishing tackle<br/>";break;case "flowers":
            a += "flowers<br/>";break;case "ice_cream":
            a += "ice cream<br/>";break;case "laundry_detergent":
            a += "laundry detergent<br/>";break;case "newspapers":
            a += "newspapers<br/>";break;case "SIM_cards":
            a += "sIM-cards<br/>";break;case "sweets":
            a += "sweets<br/>";break;case "parcel_pickup":
            a += "parcel pickup<br/>";break;case "ice_cubes":
            a += "ice cubes<br/>";break;case "public_transport_tickets":
            a += "public transport tickets<br/>";break;case "parking_ticket":
            a += "parking tickets<br/>";break;case "sex_toys":
            a += "sex toys<br/>";break;case "stamps":
            a += "stamps<br/>";break;case "toll":
            a += "toll<br/>";break;case "umbrellas":
            a += "umbrellas<br/>";break;default:
            a += "content unknown<br/>";}"post_box" == b.amenity && (b.collection_times && (a += "collection times: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "accessible by car. <br/>"));return a;
},
    fnContentStorage = exports.fnContentStorage = function fnContentStorage(b) {
    var a = "";if ("storage_tank" == b.man_made) {
        if (b.content) {
            var c = b.content;switch (c) {case "fuel":
                    c = "fuel";break;case "oil":
                    c = "oil";break;case "gas":
                    c = "gas";break;case "slurry":
                    c = "slurry";break;case "cement":
                    c = "cement";break;case "water":
                    c = "water";break;case "manure":
                    c = "manure";break;case "silage":
                    c = "silage";}a += "content: " + c + "<br/>";
        }if (b.contents) {
            c = b.contents;switch (c) {case "fuel":
                    c = "fuel";break;case "oil":
                    c = "oil";break;case "gas":
                    c = "gas";break;case "slurry":
                    c = "slurry";break;case "cement":
                    c = "cement";break;case "water":
                    c = "water";
                    break;case "manure":
                    c = "manure";break;case "silage":
                    c = "silage";}a += "content: " + c + "<br/>";
        }
    }b.storage && ("gas" == b.storage && (a += "content: gas<br/>"), "oil" == b.storage && (a += "content: oil<br/>"));return a;
},
    fnContentInformationCity = exports.fnContentInformationCity = function fnContentInformationCity(b) {
    var a = "";b["name:de"] && (a += "german name: " + b["name:de"] + "<br/>");if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
        var c = b.population.length % 3,
            d = 0 < c ? b.population.substring(0, c) : "";for (i = 0; i < Math.floor(b.population.length / 3); i++) {
            d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));
        }a += "population: " + d + "<br/>";
    } else a += "population " + b.population + "<br/>";1E4 >= b.population && (a += "population: " + b.population + "<br/>");return a;
},
    fnContentEmergency = exports.fnContentEmergency = function fnContentEmergency(b) {
    var a = "";b.lifeboat && ("inshore" == b.lifeboat ? a += "application: inshore<br/>" : "offshore" == b.lifeboat && (a += "application: offshore<br/>"));b["lifeboat:class"] && (a += "type of boat: " + b["lifeboat:class"] + "<br/>");if (b["siren:type"]) {
        var c = b["siren:type"];
        switch (c) {case "mechanical":
                c = "mechanical";break;case "electronic":
                c = "electronic";break;case "pneumatic":
                c = "pneumatic";break;case "electromechanic":
                c = "electromechanic";}a += "Typ: " + c + "<br/>";
    }if (b["siren:purpose"]) {
        c = b["siren:purpose"];switch (c) {case "air_raid":
                c = "air raid";break;case "tornado":
                c = "tornado";break;case "storm":
                c = "storm";break;case "civil_defense":
                c = "civil defence";break;case "fire":
                c = "fire";}a += "use: " + c + "<br/>";
    }b["siren:model"] && (a += "model: " + b["siren:model"] + "<br/>");b["siren:range"] && (a += "range of siren: " + b["siren:range"] + "<br/>");return a;
},
    fnContentCuisine = exports.fnContentCuisine = function fnContentCuisine(b) {
    var a = "";if (b.cuisine) {
        var c = "",
            a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "specialties: " : a + "cuisine: ";"arabic" == b.cuisine && (c += "arabic<br/>");"italian" == b.cuisine && (c += " italian<br/>");"international" == b.cuisine && (c += " international<br/>");"regional" == b.cuisine && (c += " regional<br/>");"chinese" == b.cuisine && (c += " chinese<br/>");"greek" == b.cuisine && (c += " greek<br/>");"african" == b.cuisine && (c += " african<br/>");"german" == b.cuisine && (c += " german<br/>");"mexican" == b.cuisine && (c += " mexican<br/>");"french" == b.cuisine && (c += " french<br/>");"indian" == b.cuisine && (c += " indian<br/>");"iranian" == b.cuisine && (c += " iranian<br/>");"lebanese" == b.cuisine && (c += " lebanese<br/>");"thai" == b.cuisine && (c += " thai<br/>");"balkan" == b.cuisine && (c += " balkan<br/>");"turkish" == b.cuisine && (c += " turkish<br/>");"bavarian" == b.cuisine && (c += " bavarian<br/>");"czech" == b.cuisine && (c += " czech<br/>");"portuguese" == b.cuisine && (c += " portuguese<br/>");"spanish" == b.cuisine && (c += " spanish<br/>");"japanese" == b.cuisine && (c += " japanese<br/>");"fish" == b.cuisine && (c += " fish<br/>");"brazilian" == b.cuisine && (c += " brazilian<br/>");"asian" == b.cuisine && (c += " asian<br/>");"mediterranean" == b.cuisine && (c += "mediterranean<br/>");"seafood" == b.cuisine && (c += " seafood<br/>");"ice_cream" == b.cuisine && (c += " ice cream<br/>");"burger" == b.cuisine && (c += " burger<br/>");"frozen_yogurt" == b.cuisine && (c += " frozen yogurt<br/>");
        "" == c && (c = b.cuisine + "<br/>");a += c;
    }return a;
},
    fnContentShipping = exports.fnContentShipping = function fnContentShipping(b) {
    var a = "";b.harbour = "yes";"yes" == b["access:tide"] && (a += "Access restricted by tide</br>");"yes" == b["access:swell"] && (a += "access restricted by swell</br>");"yes" == b["access:ice"] && (a += "access restricted by ice</br>");b.vhf_channel && (a += "UKW-Channel: " + b.vhf_channel + "</br>");b.mmsi && (a += "MMSI-Number: " + b.mmsi + "</br>");b["harbour:information"] && (a += "information :" + b["harbour:information"] + "</br>");"yes" == b.motorboat && (a += "motorboat allowed</br>");
    "no" == b.motorboat && (a += "motorboat prohibited </br>");b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");"yes" == b.intermittent && (a += "river intermittent dried out</br>");"yes" == b.tidal && (a += "tidal influence the flow</br>");b.draft && (a += " driving depth of water: " + b.draft + " m</br>");if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "operating: by hand<br/>"), "car" == b.operating && (a += "operating: by car, boat trailer<br/>"), "cable_winch" == b.operating && (a += "operating: with cable winch<br/>"), "travellift" == b.operating && (a += "operating: by travellift<br/>"), "crane" == b.man_made && (a += "by crane<br/>", b["crane:maxload"] && (a += "maxload: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "maximum permissible draught: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "maximum permissible length of a ship: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "accessible by vehicle<br/>");a += fnWreckInfo(b);if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) fahrzeit = b.duration, "" != fahrzeit && "undefined" != fahrzeit && null != fahrzeit && (a += "duration in hours : " + fahrzeit + "<br/>"), "yes" == b.motorcar && (a += "motorcars allowed<br/>"), "no" == b.motorcar && (a += "motorcars prohibited<br/>"), "no" == b.motor_vehicle && (a += "motor vehicles prohibited<br/>"), "yes" == b.motor_vehicle && (a += "motor vehicles allowed<br/>"), "yes" == b.vehicle && (a += "vehicles allowed<br/>"), "no" == b.vehicle && (a += "no vehicles<br/>"), "no" == b.bicycle && (a += "no bicycles<br/>"), "no" == b.bicycle && (a += "bicycles allowed<br/>"), "yes" == b.hgv && (a += "hgv allowed<br/>"), "no" == b.hgv && (a += "hgv prohibited<br/>"), "yes" == b.foot && (a += "pedestrian allowed<br/>"), "no" == b.foot && (a += "pedestrian prohibited <br/>"), "yes" == b.bicycle && (a += "cyclist allowed <br/>"), "no" == b.bicycle && (a += "cyclist prohibited <br/>"), "yes" == b["ferry:cable"] && (a += "cable ferry<br/>");if (b["seamark:light:1:colour"]) {
        var c = b["seamark:light:1:colour"];switch (c) {case "white":
                c = "white";break;case "red":
                c = "red";break;case "green":
                c = "green";break;case "blue":
                c = "blue";break;case "yellow":
                c = "yellow";break;case "amber":
                c = "amber";}a += "colour of light: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "light character: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "period: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "height: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "range: " + b["seamark:light:1:range"] + " sm<br/>"));if (b["seamark:light:colour"]) {
        c = b["seamark:light:colour"];switch (c) {case "white":
                c = "white";
                break;case "red":
                c = "red";break;case "green":
                c = "green";break;case "blue":
                c = "blue";break;case "yellow":
                c = "yellow";break;case "amber":
                c = "amber";}a += "colour of light: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "light character: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "height: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "range: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "period: " + b["seamark:light:period"] + "<br/>"));return a;
},
    fnContentHydrants = exports.fnContentHydrants = function fnContentHydrants(b) {
    var a = "";if ("fire_hydrant" == b.emergency) {
        var c = b["fire_hydrant:count"];"undefined" != c && null != c && "" != c && (a += "Number: " + c + "<br/>");c = b["fire_hydrant:diameter"];"undefined" != c && null != c && "" != c && (a += "Pipe diameter: " + c + " mm<br/>");c = b["fire_hydrant:pressure"];"undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Pressure in bar / Suction: Suction<br/>" : a + ("Pressure in bar / Suction: " + c + "<br/>"));c = b["fire_hydrant:position"];"undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Lane<br/>" : "parking_lot" == c ? a += "Position: Parking Lot<br/>" : "sidewalk" == c ? a += "Position: Sidewalk<br/>" : "green" == c && (a += "Position: Green<br/>"));c = b.water_volume;"undefined" != c && null != c && "" != c && (a += "Volume: " + c + "<br/>");c = b["fire_hydrant:awwa_class"];"undefined" != c && null != c && "" != c ? a += "AWWA Class: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Flow rate: " + c + "<br/>"));c = b.water_source;"undefined" != c && null != c && "" != c && "main" != c && (a += "Water source: " + c + "<br/>");c = b["couplings:type"];"undefined" != c && null != c && "" != c && (a += "Couplings type: " + c + "<br/>");c = b["couplings:diameter"];"undefined" != c && null != c && "" != c && (a += "Couplings diameter: " + c + "<br/>");c = b["pillar:type"];"dry_barrel" === c && (a += "Pillar type: " + c + "<br/>");"fire_hydrant" === b["disused:emergency"] && (a += "Currently disused");"" == a && (a = "No details available.");
    }return a;
},
    fnContentStreetsTraffic = exports.fnContentStreetsTraffic = function fnContentStreetsTraffic(b) {
    var a = "";"yes" == b["red_turn:right"] && (a += "red turn: allowed to turn to the right<br/>");
    "no" == b["red_turn:right"] && (a += "red turn: prohibited to turn to the right<br/>");b.bridge && (b.height && (a += "height: " + b.height + " m<br/>"), b.length && (a += "length: " + b.length + " m<br/>"), b.bridge_ref && (a += "bridge ref: " + b.bridge_ref + "<br/>"), b.start_date && (a += "start date: " + b.start_date + "</br>;"), b.maxweight && (a += "maxweight: " + b.maxweight + " t</br>"));b.highway && "yes" == b.toll && (a += "toll highway<br/>");"yes" == b["toll:hgv"] && (a += "HGV toll<br/>");if (b.surface) {
        var c = b.surface,
            a = a + "surface: ";switch (c) {case "grass":
                a += "grass<br/>";break;case "paved":
                a += "paved<br/>";break;case "asphalt":
                a += "asphalt<br/>";break;case "cobblestone":
                a += "cobblestone<br/>";break;case "sett":
                a += "sett<br/>";break;case "concrete":
                a += "concrete<br/>";break;case "unpaved":
                a += "unpaved<br/>";break;case "paving_stones":
                a += "paving stones<br/>";break;case "compacted":
                a += "compacted<br/>";break;case "dirt":
                a += "dirt<br/>";break;case "fine_gravel":
                a += "fine gravel<br/>";break;case "grass_paver":
                a += "grass paver<br/>";break;case "gravel":
                a += "gravel<br/>";
                break;case "earth":
                a += "earth<br/>";break;case "ground":
                a += "ground<br/>";break;case "metal":
                a += "metal<br/>";break;case "mud":
                a += "mud<br/>";break;case "sand":
                a += "sand<br/>";break;case "wood":
                a += "wood<br/>";break;case "tartan":
                a += "tartan<br/>";break;case "artificial_turf":
                a += "artificial turf<br/>";break;case "clay":
                a += "clay<br/>";break;default:
                a += "unknown<br/>";}
    }"grade1" == b.tracktype && (a += "path surface: Solid. Usually a paved or heavily compacted hardcore surface.<br/>");"grade2" == b.tracktype && (a += "path surface: Mostly solid. Usually an unpaved track with surface of gravel mixed with a varying amount of sand, silt, and clay.<br/>");
    "grade3" == b.tracktype && (a += "path surface: Even mixture of hard and soft materials. Almost always an unpaved track.<br/>");"grade4" == b.tracktype && (a += "path surface: Mostly soft. Almost always an unpaved track prominently with soil/sand/grass, but with some hard materials, or compressed materials mixed in.<br/>");"grade5" == b.tracktype && (a += "path surface: Soft. Almost always an unpaved track lacking hard materials, uncompacted, with surface of soil/sand/grass.<br/>");"yes" == b.motorcycle && (a += "<br/>motorcyle allowed.<br/>");
    "no" == b.motorcycle && (a += "<br/>motorcycles prohibited.<br/>");"excellent" == b.trail_visibility && (a += "trail visibility: Unambiguous path or markers everywhere<br/>");"good" == b.trail_visibility && (a += "trail visibility: Next marker always visible, but sometimes has to be searched for.<br/>");"intermediate" == b.trail_visibility && (a += "trail visibility: Track mostly visible<br/>");"bad" == b.trail_visibility && (a += "trail visibility: Path sometimes invisible, route partly pathless<br/>");"horrible" == b.trail_visibility && (a += "trail visibility: Often pathless<br/>");"no" == b.trail_visibility && (a += "trail visibility: Mostly pathless<br/>");"hiking" == b.sac_scale && (a += "trail: Trail well cleared. (SAC Scale: T1 (yellow))</br>");"mountain_hiking" == b.sac_scale && (a += "trail: Trail with continuous line and balanced ascent (SAC Scale: T2 (red))</br>");"demanding_mountain_hiking" == b.sac_scale && (a += "trail: exposed sites may be secured with ropes or chains, possible need to use hands for balance (SAC Scale: T3 (red))</br>");"alphine_hiking" == b.sac_scale && (a += "trail: sometimes need for hand use to get ahead (SAC Scale: T4 (blue))</br>");"demanding_alphine_hiking" == b.sac_scale && (a += "trail: single plainly climbing up to second grade (SAC Scale: T5 (blue))</br>");"difficult_alpine_hiking" == b.sac_scale && (a += "trail: climbing up to second grade (SAC Scale: T6 (blue))</br>");b["mtb:name"] && (a += "cycleway :" + b["mtb:name"] + "</br>");"0" == b["mtb:scale"] && (a += "Mountainbikeroute: Very easy way - Gravel or packed earth. No particular difficulties. Mostly forest and meadow paths (highway=path). Sections with steps, rocks, or roots are not expected. Wide curves, easy to moderate slope. No special skills are needed to ride this. Easy to ride uphill.</br>Surface: solid and handy</br>Obstacles: no obstacles</br>Gradient: mild to moderate</br>Bends: wide</br>Driving skills: no special driving skills required</br>");
    "1" == b["mtb:scale"] && (a += "Mountainbikeroute: Smaller obstacles like roots and small stones. Erosion damage may increase difficulty. Soil may be loose in places. Tight turns, but no hairpin turns. Riding requires care and attention, but no special skill. Obstacles can be ridden over. Difficult to ride uphill.</br>Surface: loose surface possible, small roots and stones</br>Obstacles: small obstacles, water gutter, erosion damage</br>Gradient: < 40%</br>Bends: wide</br>Driving skills: basic driving skills required, obstacles can be passed over</br>");
    "2" == b["mtb:scale"] && (a += "Mountainbikeroute: Obstacles such as large rocks and stones. Soil is often loose.  Steps are expected. Wider hairpin turns, steepness of up to 70%. Requires some advanced riding skills. Only very skilled riders can go uphill on this.</br>Surface: surface usually not compacted, larger roots and stones.</br>Obstacles: plain steps and stairs</br>Gradient: < 70%</br>Bends: easy hairpins</br>Driving skills: advanced driving skills required</br>");"3" == b["mtb:scale"] && (a += "Mountainbikeroute: Many sections with large obstacles such as boulders and large roots. Many hairpin and off-balance turns. Slippery surface and talus sections may be found. The surface may be very slippery. Constant concentration and very good skills needed. Nearly impossible to ride uphill.</br>Surface: many large roots / rocks or slippery ground, loose scree</br>Obstacles: drags, hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins</br>Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins</br>");
    "4" == b["mtb:scale"] && (a += "Mountainbikeroute: Very steep and difficult, with sections having large boulders and roots. Frequent loose debris. Very steep sections with very tight hairpin turns and high steps that will cause the chainring to hit the ground. Some trials techniques will be necessary. Nearly impossible to ride uphill.</br>Surface: many large roots / rocks or slippery ground, loose scree</br>Obstacles: drags, hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins</br>Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins</br>");
    "5" == b["mtb:scale"] && (a += "Mountainbikeroute: Very steep and difficult with big boulder fields and debris, and landslides. Speed must be carried for counter-ascents. If at all only short passages are available for accelerating and braking. Fallen trees may make very steep passages even more difficult. Very few Mountainbikers can actually ride at this level. Most will have to push.</br>Surface: counter-ascents / rocks or slippery ground, loose scree / path is rather a Alpine hiking (>T4) path</br>Obstacles: drags, combinations of hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins with obstacles</br>Driving skills: excellent bike control with special trial skills required, moving the front and rear wheel is limited</br>");
    "6" == b["mtb:scale"] && (a += "Mountainbikeroute: Classify ways with 6 that are not rideable at all for a mtbiker. E.g. Chains or stemples (metal rungs) on a via ferrata or simply unsecured alpine pathes that are not even partly rideable for the very best mtbikers (using trial techniques). Steepness is often >45\xB0. If used for single points, then this highlights exceptionally difficult spots. Often spotting is impossible and falling may be lethal.</br>Surface: Path is rather a Alpine hiking (T5 or T6) path or bare rock without visible path.</br>Obstacles: Steps over 2m, rock faces,...</br>Gradient: >100%</br>Bends: no bends can be distinguished as such.</br>Driving skills: only the very best trial specialists or vertriders will try to ride these spots. Walking the place first to find a way to clear is needed.</br>");
    "10" == b.maxspeed && (a += 'traffic-calmed sector: maxspeed 10 Km/h and "right over left"</br>');"30" == b.maxspeed && (a += 'traffic-calmed sector: "right over left" and maxspeed 30 Km/h</br>');"50" == b.maxspeed && (a += "maxspeed 50 Km/h</br>");"70" == b.maxspeed && (a += "maxspeed 50 Km/h</br>");"80" == b.maxspeed && (a += "maxspeed 80 Km/h</br>");"100" == b.maxspeed && (a += "maxspeed  100 Km/h</br>");"no" == b.overtaking && (a += "No overtaking!</br>");"yes" == b.noexit && (a += "noexit</br>");"yes" == b.oneway && (a += "oneway</br>");"designated" == b.priority_road && (a += "priority road designated</br>");"end" == b.priority_road && (a += "priority road ends</br>");"emergency_bay" == b.highway && (a += "emergency bay</br>");"yes" == b.traffic_calming && (a += "traffic calming</br>");"bump" == b.traffic_calming && (a += "bump</br>");"chicane" == b.traffic_calming && (a += "chicane</br>");"choker" == b.traffic_calming && (a += "choker</br>");"cushion" == b.traffic_calming && (a += "cushion</br>");"hump" == b.traffic_calming && (a += "hump</br>");"island" == b.traffic_calming && (a += "island</br>");
    "rumble_strip" == b.traffic_calming && (a += "rumble strip</br>");"table" == b.traffic_calming && (a += "table</br>");if ("parking" == b.amenity && ("yes" == b.fee && (a += "fee required<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
        var d = "unkown";"yes" != c && (d = c);a += "ladies parking spaces (numbers: " + d + ") <br/>";
    }b.park_ride && ("bus" == b.park_ride && (a += "bus connection<br/>"), "tram" == b.park_ride && (a += "tram connection<br/>"), "unknown" == b.park_ride && (a += "park ride unkown<br/>"));b["railway:position"] && (a += "railway<br/>position: " + b["railway:position"] + "<br/>");b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");return a;
},
    fnContentSports = exports.fnContentSports = function fnContentSports(b) {
    var a = "";"9pin" == b.sport && (a += "possible sport : 9pin<br/>");"10pin" == b.sport && (a += "possible sport : 10pin<br/>");"american_football" == b.sport && (a += "possible sport : american football<br/>");"aikido" == b.sport && (a += "possible sport : aikido<br/>");"archery" == b.sport && (a += "possible sport : archery<br/>");"athletics" == b.sport && (a += "possible sport : athletics<br/>");"australian_football" == b.sport && (a += "possible sport : australian football<br/>");"base" == b.sport && (a += "possible sport : base<br/>");"badminton" == b.sport && (a += "possible sport : badminton<br/>");"baseball" == b.sport && (a += "possible sport : baseball<br/>");"basketball" == b.sport && (a += "possible sport : basketball<br/>");"beachvolleyball" == b.sport && (a += "possible sport : beachvolleyball<br/>");"bmx" == b.sport && (a += "possible sport : bmx<br/>");"boules" == b.sport && (a += "possible sport : boules<br/>");"boule" == b.sport && (a += "possible sport : boule<br/>");
    "bowls" == b.sport && (a += "possible sport : bowls<br/>");"boxing" == b.sport && (a += "possible sport : boxing<br/>");"canadian_football" == b.sport && (a += "possible sport : canadian football<br/>");"canoe" == b.sport && (a += "possible sport : canoe<br/>");"chess" == b.sport && (a += "possible sport : chess<br/>");"cliff_diving" == b.sport && (a += "possible sport : cliff diving<br/>");"climbing" == b.sport && (a += "possible sport : climbing<br/>");"climbing_adventure" == b.sport && (a += "possible sport : adventure climbing<br/>");"cricket" == b.sport && (a += "possible sport : cricket<br/>");"cricket_nets" == b.sport && (a += "possible sport : cricket nets<br/>");"croquet" == b.sport && (a += "possible sport : croquet<br/>");"curling" == b.sport && (a += "possible sport : curling<br/>");"cycling" == b.sport && (a += "possible sport : cycling<br/>");if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";"dog_racing" == b.sport && (a += "possible sport : dog racing<br/>");"fencing" == b.sport && (a += "possible sport : fencing<br/>");"equestrian" == b.sport && (a += "possible sport : equestrian<br/>");
    "football" == b.sport && (a += "possible sport: american football<br/>");"free_flying" == b.sport && (a += "possible sport: free flying<br/>");"gaelic_games" == b.sport && (a += "possible sport: gaelic games<br/>");"golf" == b.sport && (a += "possible sport: golf<br/>");"gymnastics" == b.sport && (a += "possible sport: gymnastik<br/>");"hockey" == b.sport && (a += "possible sport: hockey<br/>");"horseshoes" == b.sport && (a += "possible sport: horseshoes<br/>");"horse_racing" == b.sport && (a += "possible sport: horse racing<br/>");"ice_stock" == b.sport && (a += "possible sport: ice stock<br/>");"judo" == b.sport && (a += "possible sport: judo<br/>");"karting" == b.sport && (a += "possible sport: karting<br/>");"kitesurfing" == b.sport && (a += "possible sport: kitesurfing<br/>");"korfball" == b.sport && (a += "possible sport: korfball<br/>");"motor" == b.sport && (a += "possible sport: motor<br/>");"multi" == b.sport && (a += "possible sport: multi<br/>");"obstacle_course" == b.sport && (a += "possible sport: obstacle course<br/>");"orienteering" == b.sport && (a += "possible sport: orienteering<br/>");
    "paddle_tennis" == b.sport && (a += "possible sport: paddle-tennis<br/>");"paragliding" == b.sport && (a += "possible sport: paragliding<br/>");"Pelota" == b.sport && (a += "possible sport: Pelota<br/>");"rasquet" == b.sport && (a += "possible sport: racquet<br/>");"rowing" == b.sport && (a += "possible sport: rowing<br/>");"rugby_league" == b.sport && (a += "possible sport: rugby league<br/>");"rugby_union" == b.sport && (a += "possible sport: rugby union<br/>");"running" == b.sport && (a += "possible sport: running<br/>");"scuba_diving" == b.sport && (a += "possible sport: scuba diving<br/>");"shooting" == b.sport && (a += "possible sport: shooting<br/>");"skating" == b.sport && (a += "possible sport: skating<br/>");"skateboard" == b.sport && (a += "possible sport: skateboard<br/>");"skiing" == b.sport && (a += "possible sport: skiing<br/>");"soccer" == b.sport && (a += "possible sport: soccer<br/>");"surfing" == b.sport && (a += "possible sport: surfing<br/>");"swimming" == b.sport && (a += "possible sport: swimming<br/>");"table_tennis" == b.sport && (a += "possible sport: table tennis<br/>");
    "taekwondo" == b.sport && (a += "possible sport: taekwondo<br/>");"team_handball" == b.sport && (a += "possible sport: team handball<br/>");"tennis" == b.sport && (a += "possible sport: tennis<br/>");"toboggan" == b.sport && (a += "possible sport: toboggan<br/>");"volleyball" == b.sport && (a += "possible sport: volleyball<br/>");"water_ski" == b.sport && (a += "possible sport: water ski<br/>");"weightlifting" == b.sport && (a += "possible sport: weightlifting<br/>");"wrestling" == b.sport && (a += "possible sport: wrestling<br/>");return a;
};
function fnArztInfo(b) {
    var a = "",
        c = "",
        d = b["healthcare:speciality"];"" != d && ("general" == d && (c += "general<br/>"), "allergology" == d && (c += "allergology<br/>"), "anaesthetics" == d && (c += "anaesthetics<br/>"), "biochemistry" == d && (c += "biochemistry<br/>"), "biological_haematology" == d && (c += "biological haematology<br/>"), "biology" == d && (c += "biology<br/>"), "cardiology" == d && (c += "cardiology<br/>"), "cardiac_surgery" == d && (c += "cardiac surgery<br/>"), "child_psychiatry" == d && (c += "child psychiatry<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "dental-, oral-, maxillo- and facial-surgery<br/>"), "dermatology" == d && (c += "dermatology<br/>"), "dermatovenereology" == d && (c += "dermatovenereology<br/>"), "diagnostic_radiology" == d && (c += "diagnostic radiology<br/>"), "emergency" == d && (c += "emergency<br/>"), "endocrinology" == d && (c += "endocrinology<br/>"), "gastroenterological_surgery" == d && (c += "gastroenterological surgery<br/>"), "gastroenterology" == d && (c += "gastroenterology<br/>"), "geriatrics" == d && (c += "geriatrics<br/>"), "gynaecology" == d && (c += "gynaecology<br/>"), "haematology" == d && (c += "haematology<br/>"), "hepatology" == d && (c += "hepatology<br/>"), "immunology" == d && (c += "immunology<br/>"), "infectious_diseases" == d && (c += "infectious diseases<br/>"), "intensive" == d && (c += "intensive<br/>"), "internal" == d && (c += "internal<br/>"), "maxillofacial_surgery" == d && (c += "maxillofacial surgery<br/>"), "nephrology" == d && (c += "nephrology<br/>"), "neurology" == d && (c += "neurology<br/>"), "neurophysiology" == d && (c += "neurophysiology<br/>"), "neuropsychiatry" == d && (c += "neuropsychiatry<br/>"), "neurosurgery" == d && (c += "neurosurgery<br/>"), "nuclear" == d && (c += "nuclear<br/>"), "occupational" == d && (c += "occupational <br/>"), "oncology" == d && (c += "oncology<br/>"), "ophthalmology" == d && (c += "ophthalmology<br/>"), "orthopaedics" == d && (c += "orthopaedics<br/>"), "otolaryngology" == d && (c += "otolaryngology<br/>"), "paediatric_surgery" == d && (c += "paediatric surgery<br/>"), "paediatrics" == d && (c += "paediatrics<br/>"), "palliative" == d && (c += "palliative<br/>"), "physiatry" == d && (c += "physiatry<br/>"), "plastic_surgery" == d && (c += "plastic surgery<br/>"), "proctology" == d && (c += "proctology<br/>"), "psychiatry" == d && (c += "psychiatry<br/>"), "pulmonology" == d && (c += "pulmonology<br/>"), "radiology" == d && (c += "radiology<br/>"), "radiotherapy" == d && (c += "radiotherapy<br/>"), "rheumatology" == d && (c += "rheumatology<br/>"), "stomatology" == d && (c += "stomatology<br/>"), "surgery" == d && (c += "surgery<br/>"), "surgical_oncology" == d && (c += "surgical oncology<br/>"), "thoracic_surgery" == d && (c += "thoracic surgery<br/>"), "transplant" == d && (c += "transplant<br/>"), "trauma" == d && (c += "trauma<br/>"), "tropical" == d && (c += "tropical<br/>"), "urology" == d && (c += "urology<br/>"), "vascular_surgery" == d && (c += "vascular surgery<br/>"), "venereology" == d && (c += "venereology<br/>"), "acupuncture" == d && (c += "acupuncture<br/>"), "naturopathy" == d && (c += "naturopathy<br/>"), "chiropractic" == d && (c += "chiropractic <br/>"), "homeopathy" == d && (c += "homeopathy<br/>"), "osteopathy" == d && (c += "osteopathy<br/>"));"" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "family medicine<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "emergency medicine<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "anaesthesiology<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "dermatology<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "ear, nose, throat (ENT specialist)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "occupational medicine<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "internal medicine<br/>"), "yes" == b["health_specialty:neurology"] && (c += "neurology<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "ophthalmology<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "palliative medicine<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "psychiatry<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "gynaecology<br/>"), "yes" == b["health_specialty:urology"] && (c += "urology<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "pain medicine<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "environmental medicine<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "intensive care medicin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "paediatrics<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "physiatry<br/>"), "yes" == b["health_specialty:radiology"] && (c += "radiology<br/>"), "yes" == b["health_specialty:general"] && (c += "general<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "occupational therapy<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "pulmonology<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "acupuncture<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "orthopaedics<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "chiropractic<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "sports medicine<br/>"));"" != c && (a = a + "subjects: " + ('<div class="c4g_open_text">' + c + "</div>"));return a;
}
function fnKraftwerkInfo(b) {
    var a = "";if (b["generator:method"]) {
        a += "method of generation: ";switch (b["generator:method"]) {case "combustion":
                a += "combustion";break;case "thermal":
                a += "thermal";break;case "pumping":
                a += "pumping";break;case "photovoltaic":
                a += "photovoltaic";break;case "gasification":
                a += "gasification";break;case "anaerobic_digestion":
                a += "anaerobic digestion";break;case "pyrolysis":
                a += "pyrolysis";break;case "fission":
                a += "fission";break;case "fusion":
                a += "fusion";break;default:
                a += "unknown<br/>";}a += "<br/>";
    }if (b.power_source) {
        a += "power source: ";switch (b.power_source) {case "photovoltaic":
                a += "photovoltaic";break;default:
                a += "unknown<br/>";}a += "<br/>";
    }b["generator:output:electricity"] && (a += "electricity generation: " + b["generator:output:electricity"] + "<br/>");b["generator:output:heat"] && (a += "heat generation: " + b["generator:output:heat"] + "<br/>");b["generator:output:cold"] && (a += "cold generation: " + b["generator:output:cold"] + "<br/>");b["generator:output"] && (a += "output: " + b["generator:output"] + "<br/>");
    b["generator:output:hot_air"] && (a += "hot-air generation: " + b["generator:output:hot_air"] + "<br/>");b["generator:output:cold_water"] && (a += "cold water generation: " + b["generator:output:cold_water"] + "<br/>");b["generator:output:cold_air"] && (a += "cold air generation: " + b["generator:output:cold_air"] + "<br/>");b["generator:output:compressed_air"] && (a += "compressed air generation: " + b["generator:output:compressed_air"] + "<br/>");b["generator:output:steam"] && (a += "steam generation: " + b["generator:output:steam"] + "<br/>");b["generator:output:vacuum"] && (a += "vacuum generation: " + b["generator:output:vacuum"] + "<br/>");b["generator:output:battery_charging"] && (a += "battery charging: " + b["generator:output:battery_charging"] + "<br/>");"PWR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-1" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-2" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-3" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-4" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-5" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"BWR-6" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"PHWR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"GCR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"FBR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"RBMK-1000" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"RBMK-1500" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"VVER" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"CANDU" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"CPR-1000" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"EPR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
    "tokamak" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"stellarator" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"ICF" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"cold-fusion" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");"wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "generator method: horizontal axis wind turbine<br/>");"wind_turbine" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "generator method: vertical axis wind turbine<br/>");"francis_turbine" == b["generator:type"] && (a += "generator type: francis-turbine<br/>");"kaplan_turbine" == b["generator:type"] && (a += "generator type: kaplan-turbine<br/>");"pelton_turbine" == b["generator:type"] && (a += "generator type: pelton-turbine<br/>");"stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "generator method: horizontal axis sea current power station<br/>");"stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "generator type: vertical axis sea current power station<br/>");"steam_turbine" == b["generator:type"] && (a += "generator type: steam turbine<br/>");"heat_pump" == b["generator:type"] && (a += "generator type: heat pump<br/>");"solar_thermal_collector" == b["generator:type"] && (a += "generator type: solar thermal collector<br/>");"solar_photovoltaic_panel" == b["generator:type"] && (a += "generator type: solar photovoltaic panel<br/>");"steam_generator" == b["generator:type"] && (a += "generator type: steam generator<br/>");"gas_turbine" == b["generator:type"] && (a += "generator type: gas turbine<br/>");"combined_cycle" == b["generator:type"] && (a += "generator type: combined cycle<br/>");"reciprocating_engine" == b["generator:type"] && (a += "generator type: reciprocating engine<br/>");return a;
}
function fnWertstoffinfo(b) {
    var a = "";if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "glass container</br>"), "yes" == b["recycling:shoes"] && (a += "shoe container</br>"), "yes" == b["recycling:cooking_oil"] && (a += "recycling of cooking oil</br>"), "yes" == b["recycling:paper"] && (a += "recycling of paper</br>"), "yes" == b["recycling:engine_oil"] && (a += "recycling of engine oil</br>"), "yes" == b["recycling:clothes"] && (a += "recycling of clothes</br>"), "yes" == b["recycling:car_batteries"] && (a += "recycling of car batteries</br>"), "yes" == b["recycling:cans"] && (a += "recycling of cans</br>"), "yes" == b["recycling:scrap_metal"] && (a += "recycling of scrap metal</br>"), "yes" == b["recycling:plastic"] && (a += "recycling of plastic</br>"), "yes" == b["recycling:batterries"] && (a += "recycling of batterries</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "recycling of plastic bottles</br>"), "yes" == b["recycling:green_waste"] && (a += "recycling of green waste</br>"), "yes" == b["recycling:hardcore"] && (a += "recycling of hardcore</br>");return a;
}
var fnContentGeneralInformations = function fnContentGeneralInformations(b) {
    var a = "";b.width && (a += "width: " + b.width + " m<br/>");b.height && (a += "height: " + b.height + " m<br/>");b.maxwidth && (a += "maxwidth: " + b.maxwidth + " m<br/>");b.maxheight && (a += "maxheight: " + b.maxheight + " m<br/>");b.maxweight && (a += "maxweight: " + b.maxweight + " t<br/>");b.maxspeed && (a += "maxspeed: " + b.maxspeed + " km/h<br/>");b.min_age && (a += "minimum age: " + b.min_age + "<br/>");b.max_age && (a += "maximum age: " + b.max_age + "<br/>");"yes" == b.nudism && (a += "nudism<br/>");"yes" == b.ruins && (a += "ruins<br/>");b.ele && (a += "height above sea level: " + b.ele + " m<br/>");b["xmas:day_date"] && (a += "period from - till: " + b["xmas:day_date"] + "<br/>");b["rotor:diameter"] && (a += "diameter of rotor: " + b["rotor:diameter"] + " m<br/>");b["xmas:note"] && (a += "information: " + b["xmas:note"] + "<br/>");"port" == b["seamark:beacon_lateral:category"] && (a += "port<br/>");"starboard" == b["seamark:beacon_lateral:category"] && (a += "starboard<br/>");"yes" == b["service:bicycle:retail"] && (a += "retail bicycles<br/>");"yes" == b["service:bicycle:repair"] && (a += "repair bicycles<br/>");"yes" == b["service:bicycle:rental"] && (a += "rental bicycles<br/>");"yes" == b["service:bicycle:pump"] && (a += "use of a pump is possible<br/>");"yes" == b["service:bicycle:diy"] && (a += "diy is possible<br/>");"yes" == b["service:bicycle:cleaning"] && (a += "cleaning bicycles<br/>");"yes" == b["service:bicycle:second_hand"] && (a += "sale of second hand bicycles<br/>");"yes" == b["service:bicycle:charging"] && (a += "charging electric bikes is possible<br/>");"yes" == b.cafe && (a += "cafe<br/>");"yes" == b.breakfast && (a += "breakfast<br/>");"yes" == b.snack && (a += "snack<br/>");"yes" == b.indoor_seating && (a += "indoor seating<br/>");"yes" == b.outdoor_seating && (a += "outdoor seating<br/>");"yes" == b.self_service && (a += "self service<br/>");"yes" == b.bakehouse && (a += "bakehouse<br/>");"yes" == b.pastry_shop && (a += "pastry shop<br/>");"yes" == b.fair_trade && (a += "fair trade<br/>");"only" == b.fair_trade && (a += "only fair trade<br/>");"no" == b.fair_trade && (a += "no fair trade<br/>");return a;
},
    fnContentHealthcare = function fnContentHealthcare(b) {
    var a = "";if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");"yes" == b.dispensing && (a += "pharmacy with dispensing<br/>");"abused" == b["social_facility:for"] && (a += "social facility for: abused people<br/>");"child" == b["social_facility:for"] && (a += "social facility for: children<br/>");"disabled" == b["social_facility:for"] && (a += "social facility for: disabled people<br/>");
    "diseased" == b["social_facility:for"] && (a += "social facility for: diseased people<br/>");"drug_addicted" == b["social_facility:for"] && (a += "social facility for: drug addicted people<br/>");"homeless" == b["social_facility:for"] && (a += "social facility for: homeless<br/>");"juvenile" == b["social_facility:for"] && (a += "social facility for: juvenile and teenager<br/>");"mental_health" == b["social_facility:for"] && (a += "social facility for: people with mental health problems<br/>");"migrant" == b["social_facility:for"] && (a += "social facility for: migrants<br/>");"orphan" == b["social_facility:for"] && (a += "social facility for: orphans<br/>");"senior" == b["social_facility:for"] && (a += "social facility for: seniors<br/>");"underprivileged" == b["social_facility:for"] && (a += "social facility for: underprivileged people<br/>");"unemployed" == b["social_facility:for"] && (a += "social facility for: unemployed<br/>");"victim" == b["social_facility:for"] && (a += "social facility for: victims<br/>");return a;
};
function fnAdditionalBuildingInfos(b) {
    var a = "";b["building:color"] && (a += "building color: " + b["building:color"] + "</br>");b["building:height"] && (a += "building height: " + b["building:height"] + " m</br>");b["building:level"] && (a += "level: " + b["building:level"] + "</br>");b["building:part"] && (a += "building part: " + b["building:part"] + "</br>");b["roof:color"] && (a += "roof color: " + b["roof:colour"] + "</br>");b["roof:shape"] && (a += "roof shape: " + b["roof:shape"] + "</br>");b["roof:height"] && (a += "roof height: " + b["roof:height"] + " m</br>");b["roof:material"] && (a += "roof material: " + b["roof:material"] + " </br>");b["roof:orientation"] && (a += "roof orientation: " + b["roof:orientation"] + " </br>");b["roof:direction"] && (a += "roof direction: " + b["roof:direction"] + " </br>");b["building:type"] && (a += "building type: " + b["building:type"] + "</br>");return a;
}
function fnSicherheitAdditional(b) {
    var a = "";"surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "indoor surveillance"), "outdoor" == b.surveillance && (a += "outdoor surveillance"), "public" == b.surveillance && (a += "public surveillance"), "camera" == b["surveillance:type"] && (a += "type of surveillance: camera"), "guard" == b["surveillance:type"] && (a += "type of surveillance: guard"), "ALPR" == b["surveillance:type"] && (a += "type of surveillance: ALPR"), "town" == b["surveillance:zone"] && (a += "zone of surveillance: town"), "parking" == b["surveillance:zone"] && (a += "zone of surveillance: parking"), "traffic" == b["surveillance:zone"] && (a += "zone of surveillance: traffic"), "shop" == b["surveillance:zone"] && (a += "zone of surveillance: shop"), "bank" == b["surveillance:zone"] && (a += "zone of surveillance: bank"), "building" == b["surveillance:zone"] && (a += "zone of surveillance: building"));return a;
}
function fnWreckInfo(b) {
    var a = "";"wreck" == b.historic && (b["wreck:date_sunk"] && (a += "sunk: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "depth: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "clearance: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "commissioned: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "gross tonnage: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "length: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "width: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "cargo: timber<br/>" : "coal" == b["wreck:cargo"] ? a + "cargo: coal<br/>" : a + ("cargo: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "visible at low tide: yes<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "visible at low tide: no<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "visible at high tide: yes<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "visible at high tide: no<br/>"), "yes" == b.access && (a += "accessible<br/>"), "no" == b.access && (a += "no access possible<br/>"), "permit_required" == b.access && (a += "permit required for acces<br/>"));return a;
}
function fnKlosterAdditional(b) {
    var a = "";if (b["monastery:type"]) switch (b["monastery:type"]) {case "monastery":
            a += "type: monastery<br/>";break;case "convent":
            a += "type: convent<br/>";break;case "canonry":
            a += "type: canonry<br/>";break;case "commandry":
            a += "type: commandry<br/>";break;case "hermitage":
            a += "type: hermitage<br/>";break;default:
            a += "type: unknown<br/>";}b["community:gender"] && ("male" == b["community:gender"] && (a += "gender: male<br/>"), "female" == b["community:gender"] && (a += "gender: female<br/>"));
    b.religious_rank && ("abbey" == b.religious_rank ? a += "religious rank: abbey<br/>" : "abbey" == b.religious_rank && (a += "religious rank: abbey<br/>"));"yes" == b.shrine && (a += "feature: shrine<br/>");"yes" == b.sanctuary && (a += "feature: sanctuary<br/>");if (b.religion) switch (b.religion) {case "animist":
            a += "religion: animist<br/><br/>";break;case "bahai":
            a += "religion: bahai<br/>";break;case "buddhist":
            a += "religion: buddhist<br/>";break;case "christian":
            a += "religion: christian<br/>";break;case "hindu":
            a += "religion: hindu<br/>";
            break;case "IglesiaNiCristo":
            a += "religion: IglesiaNiCristo<br/>";break;case "jain":
            a += "religion: jain<br/>";break;case "jewish":
            a += "religion: jewish<br/>";break;case "multifaith":
            a += "religion: multifaith<br/>";break;case "muslim":
            a += "religion: muslim<br/>";type += "Mosque<br/>";break;case "pagan":
            a += "religion: pagan<br/>";break;case "pastafarian":
            a += "religion: pastafarian<br/>";break;case "scientologist":
            a += "religion: scientologist<br/>";break;case "shinto":
            a += "religion: shinto<br/>";break;case "sikh":
            a += "religion: sikh<br/>";break;case "spiritualist":
            a += "religion: spiritualist<br/>";break;case "taoist":
            a += "religion: taoist<br/>";break;case "unitarian":
            a += "religion: unitarian<br/>";break;case "yazidi":
            a += "religion: yazidi<br/>";break;case "zoroastrian":
            a += "eligion: zoroastrian<br/>";break;default:
            a += "religion: unknown<br/>";}if (b.denomination) switch (b.denomination) {case "anglican":
            a += "denomination: Anglican<br/><br/>";break;case "baptist":
            a += "denomination: Baptist<br/>";break;case "catholic":
            a += "denomination: Catholic<br/>";
            break;case "roman_catholic":
            a += "denomination: Roman Catholic<br/>";break;case "old_catholic":
            a += "denomination: Old Catholic<br/>";break;case "greek_catholic":
            a += "denomination: Greek Catholic<br/>";break;case "evangelical":
            a += "denomination: Evangelical";case "jehovahs_witness":
            a += "denomination: Jehovahs Witness<br/>";break;case "lutheran":
            a += "denomination: Lutheran<br/>";break;case "mennonite":
            a += "denomination: Mennonite<br/>";break;case "messianic_jewish":
            a += "denomination: Messianic Jewish<br/>";
            break;case "methodist":
            a += "denomination: Methodist<br/>";break;case "mormon":
            a += "denomination: Mormon<br/>";break;case "new_apostolic":
            a += "denomination: New Apostolic<br/>";break;case "orthodox":
            a += "denomination: Orthodox<br/>";break;case "greek_orthodox":
            a += "denomination: Greek Orthodox<br/>";break;case "coptic_orthodox":
            a += "denomination: coptic orthodox<br/>";break;case "pentecostal":
            a += "denomination: pentecostal<br/>";break;case "presbyterian":
            a += "denomination: Presbyterian<br/>";break;case "protestant":
            a += "denomination: Protestant<br/>";break;case "quaker":
            a += "denomination: Quaker<br/>";break;case "reformed":
            a += "denomination: Reformed<br/>";break;case "russian_orthodox":
            a += "denomination: Russian-Orthodox<br/>";break;case "seventh_day_adventist":
            a += "denomination: Seventh Day Adventist<br/>";break;case "christian_community":
            a += "denomination: Christian Community<br/>";break;case "adventist":
            a += "denomination: Adventist<br/>";break;case "alliance":
            a += "denomination: Alliance<br/>";break;case "assemblies_of_god":
            a += "denomination: Assemblies of God<br/>";break;case "apostolic":
            a += "denomination: Apostolic<br/>";break;case "armenian_apostolic":
            a += "denomination: Armenian Apostolic<br/>";break;case "assyrian":
            a += "denomination: Assyrian<br/>";break;case "christ_scientist":
            a += "denomination: Christ Scientist<br/>";break;case "church_of_scotland":
            a += "denomination: Church of Scotland<br/>";break;case "czechoslovak_hussite":
            a += "denomination: Czechoslovak Hussite<br/>";break;case "dutch_reformed":
            a += "denomination: Dutch Reformed<br/>";
            break;case "exclusive_brethren":
            a += "denomination: Exclusive Brethren<br/>";break;case "foursquare":
            a += "denomination: Foursquare<br/>";break;case "kimbanguist":
            a += "denomination: Kimbanguist<br/>";break;case "living_waters_church":
            a += "denomination: Living Waters Church<br/>";break;case "mariavite":
            a += "denomination: Mariavite<br/>";break;case "maronite":
            a += "denomination: Maronite<br/>";break;case "moravian":
            a += "denomination: Moravian<br/>";break;case "nazarene":
            a += "denomination: Nazarene<br/>";break;
        case "nondenominational":
            a += "denomination: Nondenominational<br/>";break;case "old_believers":
            a += "denomination: Old Believers<br/>";break;case "polish_catholic":
            a += "denomination: Polish-Catholic<br/>";break;case "salvation_army":
            a += "denomination: Salvation Army<br/>";break;case "santo_daime":
            a += "denomination: Santo Daime<br/>";break;case "serbian_orthodox":
            a += "denomination: Serbisch-Orthodox<br/>";break;case "spiritism":
            a += "denomination: Spiritism<br/>";break;case "united":
            a += "denomination: United<br/>";
            break;case "united_church_of_christ":
            a += "denomination: United Church of Christ<br/>";break;case "united_free_church_of_scotland":
            a += "denomination: United Free Church of Scotland<br/>";break;case "united_methodist":
            a += "denomination: United Methodist<br/>";break;case "united_reformed":
            a += "denomination: United Reformed<br/>";break;case "uniting":
            a += "denomination: Uniting<br/>";break;case "church_of_sweden":
            a += "denomination: Church of Sweden<br/>";break;case "mission_covenant_church_of_sweden":
            a += "denomination: Mission Covenant Church Of Sweden<br/>";
            break;case "alternative":
            a += "denomination: alternative<br/>";break;case "ashkenazi":
            a += "denomination: ashkenazi<br/>";break;case "buchari":
            a += "denomination: buchari<br/>";break;case "conservative":
            a += "denomination: conservative<br/>";break;case "egalitarian":
            a += "denomination: egalitarian<br/>";break;case "hasidic":
            a += "denomination: hasidic<br/>";break;case "humanistic":
            a += "denomination: humanistic<br/>";break;case "kabbalah":
            a += "denomination: kabbalah<br/>";break;case "kabbalistic":
            a += "denomination: kabbalistic<br/>";
            break;case "karaite":
            a += "denomination: karaite<br/>";break;case "liberal":
            a += "denomination: liberal<br/>";break;case "lubavitch":
            a += "denomination: lubavitch<br/>";break;case "lubavitch_messianic":
            a += "denomination: lubavitch messianic<br/>";break;case "mizrachi_baghdadi":
            a += "denomination: mizrachi baghdadi<br/>";break;case "mizrachi_chida":
            a += "denomination: mizrachi chida<br/>";break;case "mizrachi_jerusalemite":
            a += "denomination: mizrachi jerusalemite<br/>";break;case "mizrachi_livorno":
            a += "denomination: mizrachi livorno<br/>";
            break;case "mizrachi_moroccan":
            a += "denomination: mizrachi moroccan<br/>";break;case "modern_orthodox":
            a += "denomination: modern orthodox<br/>";break;case "neo_orthodox":
            a += "denomination: neo orthodox<br/>";break;case "nondenominational":
            a += "denomination: nondenominational<br/>";break;case "orthodox":
            a += "denomination: orthodox<br/>";break;case "orthodox_ashkenaz":
            a += "denomination: orthodox ashkenaz<br/>";break;case "orthodox_sefard":
            a += "denomination: orthodox sefard<br/>";break;case "progressive":
            a += "denomination: progressive<br/>";break;case "reconstructionist":
            a += "denomination: reconstructionist<br/>";break;case "reform":
            a += "denomination: reform<br/>";break;case "renewal":
            a += "denomination: renewal<br/>";break;case "samaritan":
            a += "denomination: samaritan<br/>";break;case "sefardi":
            a += "denomination: sefardi<br/>";break;case "sefardi_amsterdam":
            a += "denomination: sefardi amsterdam<br/>";break;case "sefardi_london":
            a += "denomination: sefardi london<br/>";break;case "traditional":
            a += "denomination: traditional<br/>";
            break;case "ultra_orthodox":
            a += "denomination: ultra orthodox<br/>";break;case "unaffiliated":
            a += "denomination: unaffiliated<br/>";break;case "yemenite":
            a += "denomination: yemenite<br/>";break;case "yemenite_baladi":
            a += "denomination: yemenite baladi<br/>";break;case "yemenite_shami":
            a += "denomination: yemenite shami<br/>";break;case "ahmadiya":
            a += "denomination: ahmadiya<br/>";break;case "alaouite":
            a += "denomination: alaouite<br/>";break;case "druze":
            a += "denomination: druze<br/>";break;case "ibadi":
            a += "denomination: ibadi<br/>";break;case "ismaili":
            a += "denomination: ismaili<br/>";break;case "shia":
            a += "denomination: shia<br/>";break;case "sunni":
            a += "denomination: sunni<br/>";break;case "nichiren":
            a += "denomination: nichiren<br/>";break;case "jodo_shinshu":
            a += "denomination: jodo shinshu<br/>";break;case "jodo_shu":
            a += "denomination: jodo shu<br/>";break;case "vajrayana":
            a += "denomination: vajrayana<br/>";break;case "shingon_shu":
            a += "denomination: shingon shu<br/>";break;case "zen":
            a += "denomination: zen<br/>";
            break;case "thai_mahanikaya":
            a += "denomination: thai mahanikaya<br/>";break;case "thai_thammayut":
            a += "denomination: thai thammayut<br/>";break;case "asatru":
            a += "denomination: asatru<br/>";break;case "celtic":
            a += "denomination: celtic<br/>";break;case "greco_roman":
            a += "denomination: greco roman<br/>";break;case "wicca":
            a += "denomination: wicca<br/>";break;case "irani":
            a += "denomination: irani<br/>";break;case "parsi":
            a += "denomination: parsi<br/>";break;default:
            a += "unknown<br/>";}if (b.community) switch (b.community) {case "AA":
            a += "community (AA): Augustinians of the Assumption <br/>";break;case "BSCM":
            a += "community (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";break;case "CBMV":
            a += "community (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";break;case "CO":
            a += "community (CO): Oratorians<br/>";break;case "CMC":
            a += "community (CMC): Congregation of the Mother Co-Redemptrix<br/>";break;case "CRSP":
            a += "community (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";break;case "CSJ":
            a += "community (CSJ): Carmel Saint-Joseph<br/>";
            break;case "CSSP":
            a += "community (CSSP): Congr\xE9gation du Saint-Esprit<br/>";break;case "CSSR":
            a += "community (CSSR): Congr\xE9gation du Tr\xE8s Saint R\xE9dempteur<br/>";break;case "FCJM":
            a += "community (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";break;case "FMGB":
            a += "community (FMGB): Suore Francescane Missionarie di Ges\xF9 Bambino<br/>";break;case "FMH":
            a += "community(FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";break;case "FMM":
            a += "community (FMM): Franciscaines missionnaires de Marie<br/>";break;case "FSC":
            a += "community (FSC): Fr\xE8res des \xC9coles chr\xE9tiennes<br/>";break;case "MCCI":
            a += "community (MCCI): Missionnaires comboniens du Sacr\xE9-C\u0153ur<br/>";break;case "MSFS":
            a += "community (MSFS): Missionnaires de Saint Fran\xE7ois de Sales<br/>";break;case "OCart":
            a += "community (OCart): Order of the Carthusians<br/>";break;case "OCC":
            a += "community (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";break;case "OCD":
            a += "community (OCD): Ordre des Carmes d\xE9chaux<br/>";break;case "OCSO":
            a += "community (OCSO): Trappists (lat. Ordo Cisterciensis Strictioris Observantiae)<br/>";break;case "OFM":
            a += "community (OFM): Ordre des Fr\xE8res Mineurs (Franziskaner)<br/>";break;case "OFMCap":
            a += "community (OFMCap): Ordre des Fr\xE8res Mineurs Capucins<br/>";break;case "OFMConv":
            a += "community (OFMConv): Ordre des Fr\xE8res Mineurs Conventuels<br/>";break;case "OFS":
            a += "community (OFS): Franciscans secular Third Order<br/>";
            break;case "OMI":
            a += "community (OMI): Oblats de Marie<br/>";break;case "OP":
            a += "community (OP): Ordre des Fr\xE8res Pr\xEAcheurs<br/>";break;case "OPraem":
            a += "community (OPraem): Ordre des chanoines r\xE9guliers de Pr\xE9montr\xE9<br/>";break;case "OSB":
            a += "community (OSB): Order of Saint Benedict<br/>";break;case "OSC":
            a += "community (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";break;case "OSSS":
            a += "community (OSSS): Ordre de Sainte-Brigitte<br/>";break;case "OVM":
            a += "community (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";
            break;case "PSDP":
            a += "community (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";break;case "PFJ":
            a += "community (PFJ): Petits Fr\xE8res de J\xE9sus<br/>";break;case "SDB":
            a += "community (SDB): Soci\xE9t\xE9 de Saint Fran\xE7ois de Sales<br/>";break;case "SJ":
            a += "community (SJ): Compagnie de J\xE9sus<br/>";break;case "SOC":
            a += "community (SOC): Order of Cistercians<br/>";break;case "SSCC":
            a += "community (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";
            break;case "SSF":
            a += "community (SSF): Society of St Francis<br/>";break;case "SSJE":
            a += "community (SSJE): Society of St John the Evangelist<br/>";break;case "SSpS":
            a += "community (SSpS): Steyler Missionsschwestern<br/>";break;case "TOR":
            a += "community (TOR): Terzo Ordine Regolare di San Francesco<br/>";break;default:
            a += "unknown<br/>";}return a;
}var fnTestInfoPopup = function fnTestInfoPopup(b) {
    b = b.getProperties();var a = "",
        c;for (c in b) {
        a = a + c + "=" + b[c] + "<br/>";
    }return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-utils.js":
/*!***********************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsControlZoomlevel = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "../MapsBundle/Resources/public/js/c4g-maps-control-zoomlevel.js");

var _c4gMapsPopupInfoDe = __webpack_require__(/*! ./c4g-maps-popup-info-de */ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-de.js");

var popupFunctionsDE = _interopRequireWildcard(_c4gMapsPopupInfoDe);

var _c4gMapsPopupInfoEn = __webpack_require__(/*! ./c4g-maps-popup-info-en */ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-en.js");

var popupFunctionsEN = _interopRequireWildcard(_c4gMapsPopupInfoEn);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var popupFunctions = popupFunctionsDE;

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    popupFunctions = popupFunctionsDE;
  } else if (mapData.lang === "en") {
    popupFunctions = popupFunctionsEN;
  } else {
    // fallback
    popupFunctions = popupFunctionsEN;
  }
} else {
  popupFunctions = popupFunctionsEN;
}

var utils = exports.utils = {
  /**
   *  Converts the first letter of a given string to uppercase, leaving the remaining string untouched.
   *
   *  @param    {string}    the string to capitalize
   *
   *  @return   {string}    the capitalized string
   */
  capitalizeFirstLetter: function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  /**
   * Generate an unique id.
   *
   * The id is 9 characters long and prefixed with an underscore.
   *
   * @return  {string}  The generated id.
   */
  getUniqueId: function getUniqueId() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  },

  /**
   * Encode input strings for GeoJSON-Objects properly,
   * so they will not break the Code.
   * Transforms:
   *   \ -> \\;
   *   " -> '';
   *   Ä -> &Auml;
   *   ä -> &auml;
   *   Ö -> &Ouml;
   *   ö -> &ouml;
   *   Ü -> &Uuml;
   *   ü -> &uuml;
   *
   * @param   {string}  input  [description]
   *
   * @return  {string}         [description]
   */
  encodeGeoJsonProperty: function encodeGeoJsonProperty(input) {
    var output;

    if (!input) {
      return '';
    }

    output = input.replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/Ä/g, '&Auml;').replace(/ä/g, '&auml;').replace(/Ö/g, '&Ouml;').replace(/ö/g, '&ouml;').replace(/Ü/g, '&Uuml;').replace(/ü/g, '&uuml;');

    return output;
  }, // end of encodeGeoJsonProperty()

  /**
   * Decode input strings for GeoJSON-Objects properly,
   * so they will be displayed correctly.
   * Transforms:
   *   \\     -> \;
   *   ''     -> ";
   *   &Auml; -> Ä
   *   &auml; -> ä
   *   &Ouml; -> Ö
   *   &ouml; -> ö
   *   &Uuml; -> Ü
   *   &uuml; -> ü
   *
   * @param   {string}  input  [description]
   *
   * @return  {string}         [description]
   */
  decodeGeoJsonProperty: function decodeGeoJsonProperty(input) {
    var output;

    if (!input) {
      return '';
    }
    if (typeof input !== "string") {
      input = input + "";
    }

    output = input.replace(/\\\\/g, '\\').replace(/\'\'/g, '\"').replace(/&Auml;/g, 'Ä').replace(/&auml;/g, 'ä').replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü;').replace(/&uuml;/g, 'ü');

    return output;
  }, // end of decodeGeoJsonProperty()

  /**
   * Create or replace an URL-parameter.
   *
   * If `opt_getKey` is `false` or `undefined` the given parameter, `param`,
   * will be applied as "hash-parameter".
   * e.g.:
   *   https://myurl.de:port/path/to/maps#param
   * Note, that already existing "hash-parameters" will be overriden,
   * whereas existing "GET-parameters" stay untouched.
   *
   * If `opt_getKey` is set, it will be applied as "GET-parameter".
   * e.g.:
   *   https://myurl.de:port/path/to/maps?opt_getKey=param
   * If the key described by `opt_getKey` is already existing, its value will be overriden,
   * otherwise the key-value-pair will be appended appropriatly.
   * Already existing "hash-parameters" will stay untouched.
   *
   * If `opt_execute` is `false` or `undefined`, the function will return the new link as `string`,
   * otherwise the "href/location" will be changed directly in the browser, which can cause a pagereload.
   *
   * @param  {string}                    param        [description]
   * @param  {undefined|boolean|string}  opt_getKey   Default: `undefined`
   * @param  {undefined|boolean}         opt_execute  Default: `undefined`
   */
  setUrlParam: function setUrlParam(param, opt_getKey, opt_execute) {
    var link, searchParam, paramReplaced, i;

    if ((typeof param === "undefined" ? "undefined" : _typeof(param)) === undefined) {
      return false;
    }

    link = location.origin + location.pathname;

    if (!opt_getKey) {
      // use hash-parameter
      if (opt_execute) {
        location.hash = param;
        return true;
      }
      link += location.search + '#' + param;
    } else {
      // use GET-parameter
      if (location.search) {
        // there are already search-parameters
        paramReplaced = false;
        opt_getKey = opt_getKey.toLowerCase();
        // replace parameter if already existent
        searchParam = location.search.replace(/([^=\?\&]+)=([^&]+)/gi, function (match, key, value, offset, originString) {
          if (key === opt_getKey) {
            paramReplaced = true;
            return key + '=' + param;
          }
          return match;
        });
        // otherwise append as new parameter
        if (!paramReplaced) {
          searchParam += '&' + opt_getKey + '=' + param;
        }
      } else {
        // this will be the only search-parameter in the URL
        searchParam = '?' + opt_getKey + '=' + param;
      }
      if (opt_execute) {
        location.search = searchParam;
        return true;
      }
      link += searchParam + location.hash;
    }

    return link;
  }, // end of setUrlParam()

  /**
   * Get search or hash URL-parameter as string.
   *
   * If `opt_getKey` is `false` or `undefined`, the hash-parameter of the URL is returned,
   * otherwise it will search for a GET-parameter and return its value.
   *
   * If a parameter is not existent, or empty, an empty string will be returned.
   *
   * @param   {undefined|string}  opt_getKey  Default: `undefined`
   *
   * @return  {string}                        The found parameter.
   */
  getUrlParam: function getUrlParam(opt_getKey) {
    var param, regEx;

    if (!opt_getKey) {
      param = location.hash.substring(1);
    } else {
      if (!location.search) {
        param = '';
      } else {
        regEx = new RegExp('[\?\&]' + opt_getKey + '=([^&]+)', 'i');
        param = regEx.exec(location.search);
        param = param ? param[1] : '';
      }
    }

    return param;
  }, // end of getUrlParam()

  /**
   * Delta-encode an array of numbers.
   * Note that the array will be sorted (lowest to highest)
   * before encoding.
   *
   * So after the encoding the first value of the output contains
   * the smallest number of the set and each following number just
   * represents the offset to its previous neighbor.
   *
   * This is mostly efficient for high numbers, that are "close to each other".
   *
   * Example:
   *   [1337, 11, 101, 123, 96, 69, 42, 42]
   *   will be sorted
   *   [11, 42, 42, 69, 96, 101, 123, 1337]
   *   and encoded to
   *   [11, 31, 0, 27, 27, 5, 22, 1214]
   *
   * @param   {array<numbers>}  arrInput  [description]
   *
   * @return  {array<numbers>}            [description]
   */
  deltaEncode: function deltaEncode(arrInput) {
    var arrOutput, i;

    if (!arrInput) {
      return [];
    }
    if (arrInput.length === 1) {
      return arrInput;
    }

    arrInput.sort(function (a, b) {
      return a - b;
    });

    arrOutput = [];
    arrOutput[0] = arrInput[0];
    for (i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = arrInput[i] - arrInput[i - 1];
    }

    return arrOutput;
  }, // end of deltaEncode()

  /**
   * Decode a delta-encoded array.
   * See `deltaEncode` function for more detailed information.
   *
   * @param   {array<numbers>}  arrInput  [description]
   *
   * @return  {array<numbers>}            [description]
   */
  deltaDecode: function deltaDecode(arrInput) {
    var arrOutput, i;

    if (!arrInput) {
      return [];
    }

    arrOutput = [];
    arrOutput[0] = parseInt(arrInput[0], 10);
    if (isNaN(arrInput[0])) {
      return [];
    }
    for (i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = parseInt(arrInput[i], 10) + arrOutput[i - 1];
      if (isNaN(arrOutput[i])) {
        return [];
      }
    }

    return arrOutput;
  }, // end of deltaDecode()

  /**
   * Check and call functions in `arrHookFunctions` with given `parameters`.
   *
   * @param   {array<function>}   arrHookFunctions  [description]
   * @param   {mixed}             parameters        [description]
   */
  callHookFunctions: function callHookFunctions(arrHookFunctions, parameters) {
    var j;

    if (arrHookFunctions && arrHookFunctions.length > 0) {
      for (j = 0; j < arrHookFunctions.length; j += 1) {
        if (typeof arrHookFunctions[j] === 'function') {
          arrHookFunctions[j](parameters);
        }
      }
    }
  }, // end of "callHookFunctions()"

  /**
   * Convert a hex-formated color value into rgba()-format.
   *
   * @param   {string|number}  hex          [description]
   * @param   {string|number}  opt_opacity  [description]
   *
   * @return  {string}                      [description]
   */
  getRgbaFromHexAndOpacity: function getRgbaFromHexAndOpacity(hex, opt_opacity, opt_array) {

    var bigint, r, g, b, a;

    bigint = parseInt(hex, 16);
    if (opt_opacity && opt_opacity.value) {
      opt_opacity.value = parseInt(opt_opacity.value);
    }

    if (opt_opacity && typeof opt_opacity !== 'number') {
      if ((typeof opt_opacity === "undefined" ? "undefined" : _typeof(opt_opacity)) === 'object' && opt_opacity.value) {
        opt_opacity = opt_opacity.value;
      } else {
        opt_opacity = 100;
      }
    }

    r = bigint >> 16 & 255;
    g = bigint >> 8 & 255;
    b = bigint & 255;
    a = opt_opacity ? opt_opacity / 100 : 1;
    if (opt_array) {
      return [r, g, b, a];
    }

    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  },

  /**
   * Measure the dimensions of the given geometry.
   *
   * If the geometry is a `LineString` the function will measure its length,
   * is it a `Polygon` it will measure the acreage,
   * otherwise it will return `0`.
   *
   * If the optional `opt_forceLineMeasure` parameter is `true`
   * and the geometry is a `Polygon` it will measure its perimeter instead
   * of its acreage.
   *
   * @param   {ol.geom.LineString|ol.geom.Polygon}   geometry              [description]
   * @param   {undefined|boolean}                    opt_forceLineMeasure  [description]
   *
   * @return  {array<string>|number}                                       [description]
   */
  measureGeometry: function measureGeometry(geometry, opt_forceLineMeasure, opt_forceSurfaceMeasure) {
    var value, sphere, coordinates, coord1, coord2, result, i;

    if (!geometry) {
      return false;
    }

    //sphere = new ol.Sphere(6378137);
    result = {};

    if (geometry instanceof ol.geom.LineString || geometry instanceof ol.geom.Polygon && opt_forceLineMeasure) {

      coordinates = geometry.getCoordinates();
      if (geometry instanceof ol.geom.Polygon) {
        coordinates = coordinates[0];
      }
      value = 0;
      for (i = 0; i < coordinates.length - 1; i += 1) {
        coord1 = ol.proj.transform(coordinates[i], 'EPSG:3857', 'EPSG:4326');
        coord2 = ol.proj.transform(coordinates[i + 1], 'EPSG:3857', 'EPSG:4326');
        value += ol.sphere.getDistance(coord1, coord2, 6378137);
      }
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 1000) {
        result.htmlValue = (Math.round(value / 1000 * 100) / 100).toFixed(2) + ' ' + 'km';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm';
      }
    } else if (geometry instanceof ol.geom.Polygon) {
      //geometry = /** @type {ol.geom.Polygon} */(geometry.clone().transform('EPSG:3857', 'EPSG:4326'));
      //coordinates = geometry.getLinearRing(0).getCoordinates();
      value = Math.abs(ol.sphere.getArea(geometry));
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
      }
    } else if (geometry instanceof ol.geom.Circle && opt_forceSurfaceMeasure) {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]];
      //var wgs84Sphere = new ol.Sphere(6378137);
      var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

      value = Math.PI * Math.sqrt(value);

      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
      }
    } else if (geometry instanceof ol.geom.Circle) {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]];
      //var wgs84Sphere = new ol.Sphere(6378137);
      var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
      if (result.rawValue > 10000) {
        result.htmlValue = (Math.round(value * 100 / 100) / 1000).toFixed(2) + ' ' + 'km';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm';
      }
    } else {
      result = 0;
    }

    return result;
  },

  /**
   * Calculate extent for an array of geometries.
   *
   * @param   {Array.<ol.geom.simpleGeometry>}  arrGeometries  [description]
   *
   * @return  {ol.Extent}                                      [description]
   */
  getExtentForGeometries: function getExtentForGeometries(arrGeometries) {
    var extentSource;

    if (!arrGeometries) {
      console.warn('Geometries missing for extent calculation');
      return false;
    }

    extentSource = new ol.source.Vector();
    extentSource.addFeatures(arrGeometries);

    return extentSource.getExtent() || ol.Extent([0, 0, 0, 0]);
  }, // end of getExtentForGeometries()

  /**
   * Fit view of `map` to a given array of `extents`.
   * Animated if `opt_animationDuration` is an integer > 0.
   *
   * @param   {object}     extents                 [description]
   * @param   {ol.Map}     map                    [description]
   * @param   {integer}    opt_animationDuration  [description]
   *
   * @return  {boolean}                           [description]
   */
  fitToExtents: function fitToExtents(extents, map, opt_padding, opt_animationDuration) {
    var view, padding, extent, key;

    if (!extents || !map) {
      console.warn('Missing extent or map for fitExtent');
      return false;
    }
    //extent = ol.extent.createEmpty();

    for (key in extents) {
      if (extents.hasOwnProperty(key)) {
        if (typeof extent === "undefined") {
          extent = extents[key];
        } else {
          ol.extent.extend(extent, extents[key]);
        }
      }
    }

    this.fitToExtent(extent, map, opt_padding, 5, 0, 0, 2);
  }, // end of fitToExtents

  /**
   * Fit view of `map` to a given `extent`.
   * Animated if `opt_animationDuration` is an integer > 0.
   *
   * @param   {ol.Extent}  extent                 [description]
   * @param   {ol.Map}     map                    [description]
   * @param   {array}      opt_padding            [description]
   * @param   {integer}    opt_animationDuration  [description]
   * @param   {integer}    opt_minZoom            [description]
   * @param   {integer}    opt_maxZoom            [description]
   * @param   {integer}    opt_minResolution      [description]
   *
   * @return  {boolean}                           [description]
   */
  fitToExtent: function fitToExtent(extent, map, opt_padding, opt_animationDuration, opt_minZoom, opt_maxZoom, opt_minResolution) {
    var view, padding, fitOptions;

    if (!extent || !map) {
      console.warn('Missing extent or map for fitExtent');
      return false;
    }

    view = map.getView();

    fitOptions = {
      'padding': opt_padding || [25, 25, 25, 25]
    };

    if (opt_minResolution && opt_minResolution > 0) {
      fitOptions.minResolution = opt_minResolution;
    }

    if (opt_minZoom && opt_minZoom >= 0) {
      fitOptions.minZoom = opt_minZoom;
    }

    if (opt_maxZoom && opt_maxZoom >= 0) {
      fitOptions.maxZoom = opt_maxZoom;
    }

    // animate the "fitting" when a duration is given and its greater than 0
    if (opt_animationDuration && opt_animationDuration > 0) {
      view.animate({
        start: +new Date(),
        duration: opt_animationDuration,
        resolution: view.getResolution(),
        center: [0, 0]
      });
    }

    try {
      view.fit(extent, map.getSize(), { padding: [25, 25, 25, 25] });
      //view.fit(extent, map.getSize());
      //view.setZoom(view.getZoom()-1);
      return true;
    } catch (e) {
      return false;
    }
  }, // end of fitToExtent()

  /**
   * Convenience function to run all placeholder functions at once.
   *
   * @param   {string}                      strInput   [description]
   * @param   {ol.Feature}                  feature    [description]
   * @param   {ol.layer.Layer | undefined}  opt_layer  [description]
   *
   * @return  {string}                                 [description]
   */
  replaceAllPlaceholders: function replaceAllPlaceholders(strInput, feature, opt_layer) {
    var strOutput;

    // only check the first two parameters as they will be used by all placeholder-functions
    // -> for performance
    if (!strInput || !feature) {
      return strInput;
    }

    strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer);
    strOutput = this.replaceEditorVarsPlaceholders(strOutput, feature);
    strOutput = this.replaceAttributePlaceholders(strOutput, feature);

    return strOutput;
  }, // end of replaceAllPlaceholders()

  /**
   * Replace every occurance of `${FNfunctionName}`, in `strInput`,
   * with the result of `window.functionName(feature, style)`, if it exist.
   * Otherwise the placeholder will be simply removed (/replaced with '').
   * Style will be taken either from the feature, or the layer.
   *
   * @param   {string}          strInput  [description]
   * @param   {ol.Feature}      feature   [description]
   * @param   {ol.layer.Layer}  layer     [description]
   *
   * @return  {string}                    [description]
   */
  replaceFunctionPlaceholders: function replaceFunctionPlaceholders(strInput, feature, layer) {
    var strOutput;

    if (!strInput || !feature || !layer) {
      return strInput;
    }

    strOutput = strInput.replace(/\$\{FN([^\}]*)\}/g, function (match, functionName, offset, originString) {
      var style;

      // check if function exists
      if (typeof popupFunctions[functionName] === 'function') {
        // search style
        if (typeof feature.getStyle === 'function' && feature.getStyle() && typeof feature.getStyle() === 'function') {
          style = feature.getStyle();
        } else if (typeof layer.getStyle === 'function' && layer.getStyle()) {
          style = layer.getStyle();
        } else {
          return '';
        }
        return popupFunctions[functionName](feature, style);
      }
      return '';
    }); // end of replace()

    return strOutput;
  }, // end of replaceFunctionPlaceholders()

  /**
   * Replace placeholders, in `strInput`, for variables set by the geoEditor.
   * Valid placeholders are: ([key] represents the stringname of the variables key)
   *   `${EL[key]}`   =>  Label for the variable
   *   `${EVL[key]}`  =>  Label for the variable, if a value is set too
   *   `${EV[key]}`   =>  Value of the variable
   *   `${EVV[key]}`  =>  Same as `${EV[key]}`
   *
   * If no appropriate value can be found for a placeholder
   * it will simply be removed (/replaced with '').
   *
   * @param   {string}      strInput  [description]
   * @param   {ol.Feature}  feature   [description]
   *
   * @return  {string}                [description]
   */
  replaceEditorVarsPlaceholders: function replaceEditorVarsPlaceholders(strInput, feature) {
    var strOutput;

    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }

    strOutput = strInput.replace(/\$\{(EV?[LV])([^\}]*)\}/g, function (match, type, evKey, offset, originString) {
      var editorVars, i;

      // check if feature has editorVars
      if (feature.get('editorVars')) {
        editorVars = feature.get('editorVars');
        // search for editorVar with key == evKey
        for (i = 0; i < editorVars.length; i += 1) {
          if (editorVars[i].key === evKey) {
            // if type is 'EVL' display label only if a value is set too
            if (type === 'EL' || type === 'EVL' && editorVars[i].value) {
              return editorVars[i].label;
            } else {
              return editorVars[i].value;
            }
          }
        }
      }
      return '';
    }); // end of replace()

    return strOutput;
  }, // end of replaceEditorVarsPlaceholders()

  /**
   * Replace every occurance of `${attr}`, in `strInput`,
   * with the result of `feature.get(attr)`, if it exist.
   * Otherwise the placeholder will be simply removed (/replaced with '').
   *
   * @param   {string}      strInput  [description]
   * @param   {ol.Feature}  feature   [description]
   *
   * @return  {string}                [description]
   */
  replaceAttributePlaceholders: function replaceAttributePlaceholders(strInput, feature) {
    var strOutput;

    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }

    strOutput = strInput.replace(/\$\{([^\}]*)\}/g, function (match, attr, offset, originString) {
      return feature.get(attr) || '';
    }); // end of replace()

    return strOutput;
  }, // end of replaceAttributePlaceholders()

  objectToArray: function objectToArray(object) {
    if (object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object') {
      object = Object.keys(object).map(function (key) {
        return object[key];
      });
    }
    return object;
  }, // end of objectToArray()

  getVectorLayer: function getVectorLayer(source, style) {
    var fnStyle;

    // make sure that the style is a function
    if (typeof style === 'function') {
      fnStyle = style;
    } else if (style !== undefined) {
      fnStyle = function fnStyle() {
        return style;
      };
    }

    return new ol.layer.Vector({
      source: source,
      style: fnStyle
    });
  },
  // end of "getVectorLayer()"

  /**
   * Extracts the subdomain from the current request host and returns it.
   * @returns {string | *}
   */
  getCurrentSubdomain: function getCurrentSubdomain() {
    return window.location.href;
  },


  /**
   * Returns the current domain (without the subdomain)
   */
  getCurrentDomain: function getCurrentDomain() {
    var domain = window.location.hostname;
    var arrDomain = domain.split('.');
    if (arrDomain.length > 2) {
      // there is a subdomain
      return arrDomain[arrDomain.length - 2];
    } else {
      return arrDomain[0];
    }
  },


  getValue: function getValue(key) {
    return localStorage[key] || '';
  },
  storeValue: function storeValue(key, value) {
    localStorage[key] = value; // only strings
  }
};

/***/ }),

/***/ "./Resources/public/js/c4g-editor-drawstyle.js":
/*!*****************************************************!*\
  !*** ./Resources/public/js/c4g-editor-drawstyle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorDrawStyle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-misc-tooltippopup */ "../MapsBundle/Resources/public/js/c4g-maps-misc-tooltippopup.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorDrawStyle = exports.EditorDrawStyle = function () {
  /**
   * Constructor for EditorDrawStyle.
   * @param editor
   * @param type    {string} The drawType
   */
  function EditorDrawStyle(editor, type) {
    _classCallCheck(this, EditorDrawStyle);

    this.editor = editor;
    this.type = type;
  }

  /**
   * Creates the interaction which lays on the map and handles the drawing of a feature. This interactionView belongs
   * to one element.
   * @param styleId
   * @param element
   * @param category
   * @param categoryContainer
   * @param objDrawView
   * @returns {*|boolean}
   */


  _createClass(EditorDrawStyle, [{
    key: "createInteractionView",
    value: function createInteractionView(styleId, element, category, categoryContainer, objDrawView) {
      var interactionView, source, interaction, features, editorStyle, style, styleIcon, styleImage, styleTriggerLabel, featureIdCount, name, olType;

      // Style "shortcut"
      var editor = this.editor;
      var drawContent = this.editor.drawContent;
      var scope = this;
      var drawView = objDrawView.drawView;
      var locstyleArray = editor.mapsInterface.getLocstyleArray();
      var svgSrc = null;
      var height = 0;
      var width = 0;
      var scale = 1;
      var styleData = null;

      if (locstyleArray && locstyleArray[styleId]) {
        style = locstyleArray[styleId].style()[0];
        editorStyle = locstyleArray[styleId].editor;
        svgSrc = locstyleArray[styleId].locStyleArr.svgSrc;
        height = locstyleArray[styleId].locStyleArr.icon_size[0];
        width = locstyleArray[styleId].locStyleArr.icon_size[1];
        scale = locstyleArray[styleId].locStyleArr.icon_scale;
        styleData = locstyleArray[styleId].locStyleArr;
      }

      if (!style) {
        console.warn('style ' + styleId + ' not found in locstyleArray');
        return false;
      }

      featureIdCount = 0;

      styleImage = style.getImage() || undefined;

      // Create label for interaction-trigger
      styleTriggerLabel = document.createElement('span');
      // @TODO use css-class for dimensions
      //styleTriggerLabel.style.display = 'block';
      styleTriggerLabel.style.margin = '2px';

      if (editorStyle.iconSrc || styleImage instanceof ol.style.Icon) {
        styleIcon = document.createElement('img');
        if (styleData.editor_icon_size) {
          styleIcon.height = styleData.editor_icon_size[0];
          styleIcon.width = styleData.editor_icon_size[1];
        } else {
          styleIcon.height = '32px';
          styleIcon.width = '32px';
        }

        if (editorStyle.iconSrc && editorStyle.iconSrc.indexOf('.') !== -1) {
          styleIcon.src = editorStyle.iconSrc;
        } else {
          if (svgSrc) {
            if (styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
              var canvas = document.createElement('canvas');
              var ctx = canvas.getContext("2d");
              var _height = styleData.icon_size[0] * styleData.icon_scale;
              var _width = styleData.icon_size[1] * styleData.icon_scale;

              var strokewidth = 0;
              if (styleData.strokewidth && styleData.strokewidth.value) {
                strokewidth = styleData.strokewidth.value;
              }

              canvas.height = _height + 2 * strokewidth;
              canvas.width = _width + 2 * strokewidth;
              ctx.clearRect(0, 0, canvas.width, canvas.height);

              if (styleData.fillcolor) {
                ctx.fillStyle = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor, styleData.fillopacity.value);
                ctx.fillRect(0, 0, canvas.width, canvas.height);
              }

              if (strokewidth && styleData.strokecolor) {
                ctx.strokeStyle = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.strokecolor, styleData.strokeopacity.value);
                ctx.lineWidth = strokewidth;
                ctx.strokeRect(0, 0, canvas.width, canvas.height);
                ctx.translate(0.5, 0.5);
              }

              var img = new Image();
              img.src = styleData.svgSrc;
              img.zIndex = 100;
              img.onload = function () {
                ctx.drawImage(img, strokewidth, strokewidth, _width, _height);
              };

              styleIcon = canvas;
              styleTriggerLabel.style.width = _width * scale + 'px';
              styleTriggerLabel.style.height = _height * scale + 'px';
            }
          } else if (styleImage.getSrc()) {
            styleIcon.src = styleImage.getSrc();
            styleIcon.scale = scale;
            styleTriggerLabel.style.width = width * scale + 'px';
            styleTriggerLabel.style.height = height * scale + 'px';
          }
        }
        styleTriggerLabel.appendChild(styleIcon);
      } else {
        styleTriggerLabel.style.width = '32px';
        styleTriggerLabel.style.height = '32px';
        styleTriggerLabel.style.background = style.getFill().getColor();
        styleTriggerLabel.style.border = '1px solid ' + style.getStroke().getColor();
      }

      // Create interactionView
      //   "addView" will be used for this, because the functionality
      //   ist mostly equal
      interactionView = editor.addView({
        name: 'draw:' + element.name,
        triggerConfig: {
          id: "element-" + category.id + '-' + element.id,
          label: styleTriggerLabel,
          tipLabel: element.name,
          className: _c4gMapsConstant.cssConstants.EDITOR_DRAW_TRIGGER,
          target: categoryContainer,
          withHeadline: false
        },
        sectionElements: [{ section: editor.contentContainer, element: drawContent }, { section: editor.topToolbar, element: editor.viewTriggerBar }],
        initFunction: function initFunction() {
          var interactionStyleImage, activeSketch, activeTooltip;

          // Only show original icon, when the drawing POIs
          if (scope.type.toLowerCase() === 'point' && style.getImage()) {
            interactionStyleImage = style.getImage();
          } else {
            interactionStyleImage = new ol.style.Circle({
              fill: style.getFill(),
              stroke: style.getStroke(),
              radius: 5
            });
          }
          source = new ol.source.Vector();
          olType = scope.type;
          if (olType === 'Freehand') {
            olType = 'LineString';
          }

          features = new ol.Collection();
          interaction = new ol.interaction.Draw({
            features: features,
            source: source,
            type: olType,
            freehand: scope.type === 'Freehand',
            style: [new ol.style.Style({
              stroke: new ol.style.Stroke({
                color: 'rgba(255,255,255,.5)',
                width: style.getStroke().getWidth() + 2
              }),
              image: interactionStyleImage
            }), new ol.style.Style({
              geometry: style.getGeometry(),
              fill: style.getFill(),
              stroke: style.getStroke()
            })]
          });

          // @TODO doku
          //
          interaction.on('drawstart', function (event) {
            activeSketch = event.feature;
            activeSketch.set('styleId', styleId);

            if (objDrawView.enableInstantMeasureCheckbox && objDrawView.enableInstantMeasureCheckbox.checked) {
              activeTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
                map: editor.mapsInterface.mapController.map,
                position: event.coordinate,
                horizontal: true
              });
            }
          }, objDrawView);

          // @TODO doku
          //
          editor.mapsInterface.mapController.map.on('pointermove', function (event) {
            if (objDrawView.enableInstantMeasureCheckbox && objDrawView.enableInstantMeasureCheckbox.checked && activeSketch) {
              if (activeTooltip && _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue === "0.00") {
                activeTooltip.close();
                activeTooltip = null;
              } else if (!activeTooltip && _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue !== "0.00") {
                activeTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
                  map: editor.mapsInterface.mapController.map,
                  position: event.coordinate,
                  horizontal: true
                });
              }
              if (activeTooltip) {
                activeTooltip.setPosition(event.coordinate);
                activeTooltip.setContent(_c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).htmlValue);
              }
            }
          }, editor);

          // @TODO doku
          //
          interaction.on('drawend', function (event) {
            var i, vars, editorVars, name;

            // name the feature
            featureIdCount += 1;
            var drawType = scope.type.toLowerCase();
            name = scope.editor.mapsInterface.getLocstyleArray()[styleId].name.replace("&#40;", "(").replace("&#41;", ")");
            activeSketch.set('tooltip', (scope.editor.mapsInterface.getLocstyleArray()[styleId].tooltip || name) + ' (' + featureIdCount + ')');
            // add styleId
            activeSketch.set('styleId', styleId);
            // add measurements to the feature
            activeSketch.set('measuredLength', _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true));
            if (drawType === 'polygon') {
              activeSketch.set('measuredArea', _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry()));
            }
            if (drawType === 'circle') {
              activeSketch.set('measuredRadius', _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry()));
            }
            // add editor-vars
            vars = editorStyle.vars;
            editorVars = [];
            for (i = 0; i < vars.length; i += 1) {
              editorVars[i] = {};
              editorVars[i].key = vars[i].key;
              editorVars[i].label = vars[i].value;
              editorVars[i].value = '';
            }
            activeSketch.set('editorVars', editorVars);
            activeSketch.set('projectId', editor.projectController.currentProject.id);
            // communicate new element with server
            editor.featureHandler.handleDrawnFeature(activeSketch, element, category, editor.projectController.currentProject, editor.projectController.projectLayer, source, drawType);
            scope.editor.mapsInterface.updateStarboard();
            // reset active-element variables
            activeSketch = null;
            if (activeTooltip) {
              activeTooltip.close();
              activeTooltip = null;
            }
          }, editor);

          if (editor.projectController.currentProject) {
            editor.mapsInterface.mapController.map.addInteraction(interaction);
          }
          return true;
        }, // end of "initFunction()"

        /**
         * Is called when the view is activated (i.e. the trigger is clicked)
         * @returns {boolean}
         */
        activateFunction: function activateFunction() {
          if (editor.projectController.currentProject) {
            // deactivate mapHover
            editor.mapsInterface.mapController.mapHover.deactivate();
            // Reset feature-list
            features.clear();
          }
          return true;
        },

        /**
         * Is called when the view is deactivated (i.e. the trigger of another view is clicked)
         * @returns {boolean}
         */
        deactivateFunction: function deactivateFunction(paused) {
          if (editor.projectController.currentProject) {
            // only take away the interaction when the editor is closed and not paused
            if (!paused) {
              editor.mapsInterface.mapController.mapHover.activate();
              // finish drawings, if not already done
              if (scope.type.toLowerCase() !== 'point') {
                try {
                  interaction.finishDrawing();
                } catch (ignore) {
                  // 0_o
                }
              }
            }
          }
          // Remove from map
          interaction.setActive(false);
          return true;
        }
      }, drawView);

      return interactionView;
    }
  }]);

  return EditorDrawStyle;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-editor-drawview.js":
/*!****************************************************!*\
  !*** ./Resources/public/js/c4g-editor-drawview.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorDrawview = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

var _c4gEditorDrawstyle = __webpack_require__(/*! ./c4g-editor-drawstyle */ "./Resources/public/js/c4g-editor-drawstyle.js");

var _c4gEditorI18n = __webpack_require__(/*! ./c4g-editor-i18n */ "./Resources/public/js/c4g-editor-i18n.js");

var _c4gEditorElementCategory = __webpack_require__(/*! ./c4g-editor-element-category */ "./Resources/public/js/c4g-editor-element-category.js");

var _c4gEditorElementType = __webpack_require__(/*! ./c4g-editor-element-type */ "./Resources/public/js/c4g-editor-element-type.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorDrawview = exports.EditorDrawview = function () {
  function EditorDrawview(type, categories, editor) {
    _classCallCheck(this, EditorDrawview);

    this.type = type;
    this.editor = editor;
    this.categories = this.setupCategories(categories);
  }

  _createClass(EditorDrawview, [{
    key: "setupCategories",
    value: function setupCategories(jsonCategories) {
      var categories = [];
      for (var i = 0; i < jsonCategories.length; i++) {
        var categoryElementTypes = [];
        for (var j = 0; j < jsonCategories[i].elements.length; j++) {
          categoryElementTypes.push(this.createTypeObject(jsonCategories[i].elements[j]));
        }
        categories.push(this.createCategoryObject(jsonCategories[i], categoryElementTypes));
      }
      return categories;
    }
  }, {
    key: "createTypeObject",
    value: function createTypeObject(jsonElement) {
      return new _c4gEditorElementType.ElementType(jsonElement.id, jsonElement.name, jsonElement.categoryId, jsonElement.styleId);
    }
  }, {
    key: "createCategoryObject",
    value: function createCategoryObject(jsonCategory, types) {
      return new _c4gEditorElementCategory.ElementCategory(jsonCategory.id, jsonCategory.name, types);
    }

    /**
     * Initializes the container elements for the draw styles.
     * @returns {*}
     */

  }, {
    key: "init",
    value: function init() {
      var TRIGGER_DRAW = void 0,
          drawContent = void 0,
          optionsDiv = void 0,
          enableInstantMeasureCheckbox = void 0,
          enableInstantMeasureCheckboxLabel = void 0,
          addDrawStyle = void 0,
          scope = this;

      var editor = this.editor;
      var locStyles = this.editor.mapsInterface.getLocstyleArray();

      TRIGGER_DRAW = 'EDITOR_VIEW_TRIGGER_DRAW_' + this.type.toUpperCase();

      drawContent = document.createElement('div');
      drawContent.className = _c4gMapsConstant.cssConstants['EDITOR_DRAW_CONTENT_' + this.type.toUpperCase()];

      var inputFilter = this.createProjectFilter();
      drawContent.appendChild(inputFilter);
      this.drawContent = drawContent;

      if (this.type.toLowerCase() !== 'point') {
        optionsDiv = document.createElement('div');
        optionsDiv.className = _c4gMapsConstant.cssConstants.EDITOR_DRAW_OPTIONS;
        drawContent.appendChild(optionsDiv);

        enableInstantMeasureCheckbox = document.createElement('input');
        enableInstantMeasureCheckbox.type = 'checkbox';
        enableInstantMeasureCheckbox.id = 'enableInstantMeasureFor' + this.type;
        enableInstantMeasureCheckbox.checked = true; //by default
        optionsDiv.appendChild(enableInstantMeasureCheckbox);
        this.enableInstantMeasureCheckbox = enableInstantMeasureCheckbox;

        enableInstantMeasureCheckboxLabel = document.createElement('label');
        enableInstantMeasureCheckboxLabel.setAttribute('for', 'enableInstantMeasureFor' + this.type);
        enableInstantMeasureCheckboxLabel.innerHTML = _c4gEditorI18n.langConstants.EDITOR_ENABLE_INSTANT_MEASURE;
        optionsDiv.appendChild(enableInstantMeasureCheckboxLabel);

        this.enableInstantMeasureCheckboxLabel = enableInstantMeasureCheckboxLabel;
        optionsDiv.appendChild(document.createElement('br'));
      }

      // add the categories
      for (var i = 0; i < this.categories.length; i++) {
        var category = this.categories[i];
        var divObj = this.addCategory(category);
        this.drawContent.appendChild(divObj.categoryDiv);
        this.addElementsForCategory(category.elementTypes, category, divObj.elements);
        if (!this.editor.projectController.currentProject) {
          this.drawContent.style.display = "none";
        }
      }

      this.drawView = editor.addView({
        name: 'draw:' + this.type.toLowerCase(),
        triggerConfig: {
          tipLabel: _c4gEditorI18n.langConstants[TRIGGER_DRAW],
          className: _c4gMapsConstant.cssConstants[TRIGGER_DRAW],
          withHeadline: true
        },
        sectionElements: [{ section: editor.contentContainer, element: drawContent }, { section: editor.topToolbar, element: editor.viewTriggerBar }],
        initFunction: function initFunction() {},
        activateFunction: function activateFunction() {
          if (editor.projectController.currentProject) {
            scope.drawContent.style.display = "block";
          }
          return true;
        },
        deactivateFunction: function deactivateFunction() {
          return true;
        }
      });

      return this.drawView;
    }

    /**
     * Adds a category to the editor drawContent-section. It is bound to a project and is displayed when the project
     * is selected. A category contains different elements, which can be dragged onto the map.
     * @param category
     * @return Object div containing the category
     */

  }, {
    key: "addCategory",
    value: function addCategory(category) {
      var categoryDiv, catHeadline, elementDiv, toggleView, headlineDiv, elementCount;

      categoryDiv = document.createElement('div');
      elementDiv = document.createElement('div');
      headlineDiv = document.createElement('div');
      headlineDiv.className = "c4g-category-headline";
      headlineDiv.id = "category-headline-" + category.id;
      elementDiv.id = "category-" + category.id;
      toggleView = document.createElement('button');
      toggleView.className = "c4g-toggle-category";

      if (category.visible === undefined) {
        toggleView.className += " c4g-toggle-category-closed";
        elementDiv.style.display = "none";
      } else {
        if (category.visible) {
          toggleView.className += " c4g-toggle-category-open";
        } else {
          toggleView.className += " c4g-toggle-category-closed";
          elementDiv.style.display = "none";
        }
      }

      // click listener for toggling the categories
      $(toggleView).click(function (event) {
        if ($(this).hasClass("c4g-toggle-category-open")) {
          $(this).removeClass("c4g-toggle-category-open").addClass("c4g-toggle-category-closed");
          elementDiv.style.display = "none";
          category.visible = false;
        } else {
          $(this).removeClass("c4g-toggle-category-closed").addClass("c4g-toggle-category-open");
          elementDiv.style.display = "block";
          category.visible = true;
        }
      });

      //closed categories by default
      //ToDo insert caching mechanism
      //$(toggleView).removeClass("c4g-toggle-category-opened").addClass("c4g-toggle-category-open");
      //elementDiv.style.display = "block";
      category.visible = true;

      // categoryDiv.className = "project-" + project.projectId;
      catHeadline = document.createElement('div');
      elementCount = 0;
      if (category.elementTypes) {
        elementCount = category.elementTypes.length;
      }
      catHeadline.innerHTML = category.name + " (" + elementCount + ")";
      catHeadline.className = 'catHeadline';
      headlineDiv.appendChild(catHeadline);
      headlineDiv.appendChild(toggleView);
      categoryDiv.appendChild(headlineDiv);
      categoryDiv.appendChild(elementDiv);
      // this.plugin.categories[category.id] = category;
      return { categoryDiv: categoryDiv, elements: elementDiv };
    }

    /**
     * Adds a selection of elements to a category. For each element, a trigger label is created and drawn under the
     * corresponding category.
     * @param elements
     * @param category
     * @param catContainer  HTML container for the category
     */

  }, {
    key: "addElementsForCategory",
    value: function addElementsForCategory(elements, category, catContainer) {
      var element,
          missingStyles = [],
          self = this,
          missingElements = [],
          styleIds = [];

      var addElement = function addElement(element) {
        element.drawInteraction = self.addDrawStyle(element.styleId, element, category, catContainer);
      };

      for (var key in elements) {
        if (elements.hasOwnProperty(key)) {
          element = elements[key];
          styleIds.push(element.styleId);
          if (!self.editor.mapsInterface.getLocstyleArray()[element.styleId]) {
            missingStyles.push(element.styleId);
            missingElements.push(element);
          } else {
            addElement(element);
          }
        }
      }

      if (missingStyles.length > 0) {
        self.editor.proxy.locationStyleController.loadLocationStyles(missingStyles, {
          always: function always() {
            for (var i = 0; i < missingElements.length; i++) {
              if (self.editor.proxy.locationStyleController.arrLocStyles[missingElements[i].styleId]) {
                addElement(missingElements[i]);
              }
            }

            self.editor.update();
            // self.plugin.elementsLoaded = true;
            // TODO durch richtigen hook ersetzen, falls nötig
            // if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.elements_Loaded === 'object') {
            //     c4g.maps.utils.callHookFunctions(c4g.maps.hook.elements_Loaded);
            // }
            return false;
          } });
      } else {
        // TODO durch richtigen hook ersetzen, falls nötig
        // self.plugin.elementsLoaded = true;
        // if (c4g.maps.hook !== undefined && typeof c4g.maps.hook.elements_Loaded === 'object') {
        //   c4g.maps.utils.callHookFunctions(c4g.maps.hook.elements_Loaded);
        // }
      }
      return true;
    }
  }, {
    key: "createProjectFilter",
    value: function createProjectFilter() {
      var scope = this;
      var filterDiv = document.createElement("div");
      var filterInput = document.createElement("input");

      filterDiv.appendChild(filterInput);
      $(filterInput).keyup(function () {
        var filterString = $(this).val();
        if (filterString.length === 0) {
          // show all entries when no filterString exists
          $('.c4g-category-headline').css('display', '');
          $('.c4g-draw-trigger').css('display', '');
          return;
        }
        var matchedCatIds = [];
        var matchedElemIds = [];
        for (var i = 0; i < scope.categories.length; i++) {
          var currentCategory = scope.categories[i];
          if (currentCategory.name.toUpperCase().indexOf(filterString.toUpperCase()) >= 0) {
            // category matches the filter string
            matchedCatIds.push(currentCategory.id);
          }
          for (var j = 0; j < currentCategory.elementTypes.length; j++) {
            var currentType = currentCategory.elementTypes[j];
            // if category matched, show Element
            if (currentCategory.name.toUpperCase().indexOf(filterString.toUpperCase()) >= 0) {
              matchedElemIds.push(currentCategory.id + '-' + currentType.id);
            }
            if (currentType.name.toUpperCase().indexOf(filterString.toUpperCase()) >= 0) {
              // add category unless it's been added already
              if (!matchedCatIds.includes(currentCategory.id)) {
                matchedCatIds.push(currentCategory.id);
              }
              // add element
              if (!matchedElemIds.includes(currentType.id)) {
                matchedElemIds.push(currentCategory.id + '-' + currentType.id);
              }
            }
          }
          var allCategories = document.getElementsByClassName('c4g-category-headline');
          for (var category in allCategories) {
            if (allCategories.hasOwnProperty(category)) {
              allCategories[category].style.display = 'none';
            }
          }
          var allElements = document.getElementsByClassName('c4g-draw-trigger');
          for (var element in allElements) {
            if (allElements.hasOwnProperty(element)) {
              allElements[element].style.display = 'none';
            }
          }
          for (var _i = 0; _i < matchedCatIds.length; _i++) {
            var div = document.getElementById('category-headline-' + matchedCatIds[_i]);
            div.style.display = "";
          }
          for (var _i2 = 0; _i2 < matchedElemIds.length; _i2++) {
            var _div = document.getElementById('element-' + matchedElemIds[_i2]);
            _div.style.display = "";
          }
        }
      });
      return filterDiv;
    }

    /**
     * Shortcut call to create the EditorDrawStyle instances.
     * @param styleId
     * @param element
     * @param category
     * @param catContainer
     * @returns {*}
     */

  }, {
    key: "addDrawStyle",
    value: function addDrawStyle(styleId, element, category, catContainer) {
      var interaction = new _c4gEditorDrawstyle.EditorDrawStyle(this.editor, this.type);
      return interaction.createInteractionView(styleId, element, category, catContainer, this);
    }
  }]);

  return EditorDrawview;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-editor-element-category.js":
/*!************************************************************!*\
  !*** ./Resources/public/js/c4g-editor-element-category.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElementCategory = exports.ElementCategory = function () {
  /**
   * Class properties
   */
  function ElementCategory(id, name, elementTypes) {
    _classCallCheck(this, ElementCategory);

    this._id = id;
    this._name = name;
    this._elementTypes = elementTypes;
    this._visible = true;
  }

  _createClass(ElementCategory, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "elementTypes",
    get: function get() {
      return this._elementTypes;
    }
  }, {
    key: "visible",
    get: function get() {
      return this._visible;
    },
    set: function set(value) {
      this._visible = value;
    }
  }]);

  return ElementCategory;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-editor-element-type.js":
/*!********************************************************!*\
  !*** ./Resources/public/js/c4g-editor-element-type.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElementType = exports.ElementType = function () {
  /**
   * Class properties
   */
  function ElementType(id, name, categoryId, styleId) {
    _classCallCheck(this, ElementType);

    this._id = id;
    this._name = name;
    this._categoryId = categoryId;
    this._styleId = styleId;
  }

  _createClass(ElementType, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "categoryId",
    get: function get() {
      return this._categoryId;
    }
  }, {
    key: "styleId",
    get: function get() {
      return this._styleId;
    }
  }]);

  return ElementType;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-editor-feature-interaction.js":
/*!***************************************************************!*\
  !*** ./Resources/public/js/c4g-editor-feature-interaction.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeatureInteraction = exports.FeatureInteraction = function (_ol$interaction$Point) {
  _inherits(FeatureInteraction, _ol$interaction$Point);

  function FeatureInteraction(collection, fnFilter, style) {
    _classCallCheck(this, FeatureInteraction);

    var _this = _possibleConstructorReturn(this, (FeatureInteraction.__proto__ || Object.getPrototypeOf(FeatureInteraction)).call(this));

    _this.collection = collection;
    // feature interactions are mapped in these by id => interaction object
    _this.translateInteractions = {};
    _this.selectListener = [];
    _this.translateListener = [];
    _this.styleFunction = style;
    _this.styleMap = {};
    _this._active = true;
    return _this;
  }

  /**
   * Selects a feature and adds a translateInteraction on mousedown, when there is a feature at the event.target.
   * @param event
   * @returns {boolean}
   */


  _createClass(FeatureInteraction, [{
    key: 'handleDownEvent',
    value: function handleDownEvent(event) {
      if (this._active) {
        var map = event.map;
        var feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
          return feature;
        });
        if (feature) {
          this.addFeature(feature);
          var translateInteraction = this.addTranslateInteractionForFeature(feature, map);
          translateInteraction.handleEvent(event);
        }
        return !!feature;
      }
    }
  }, {
    key: 'handleDragEvent',
    value: function handleDragEvent(event) {
      // do nothing
    }
  }, {
    key: 'handleMoveEvent',
    value: function handleMoveEvent(event) {}
    // do nothing


    /**
     * Deactivates all translate interactions on mouseup.
     * @param event
     */

  }, {
    key: 'handleUpEvent',
    value: function handleUpEvent(event) {
      var array = this.collection.getArray();
      for (var i = 0; i < array.length; i++) {
        var id = array[i].getId();
        this.translateInteractions[id].setActive(false);
      }
    }

    /**
     * Creates a translate interaction for a given feature on the given map. Callbacks in the translateListeners array
     * are called on the 'translateend' event when there occurred a real translation to the feature.
     * @param feature
     * @param map
     */

  }, {
    key: 'addTranslateInteractionForFeature',
    value: function addTranslateInteractionForFeature(feature, map) {
      var scope = this;
      var translateInteraction = new ol.interaction.Translate({
        features: new ol.Collection([feature])
      });
      map.addInteraction(translateInteraction);
      this.translateInteractions[feature.getId()] = translateInteraction;
      var changed = false;
      translateInteraction.on('translating', function (event) {
        changed = true;
      });
      translateInteraction.on('translateend', function (event) {
        // only apply a change if there was a real translation of the feature
        if (changed) {
          for (var i = 0; i < scope.translateListener.length; i++) {
            scope.translateListener[i](feature);
          }
          changed = false;
        }
      });
      return translateInteraction;
    }
  }, {
    key: 'getFeatures',
    value: function getFeatures() {
      return this.collection;
    }

    /**
     * Adds a callback to the selectListener array.
     * @param fnCallback
     */

  }, {
    key: 'onSelect',
    value: function onSelect(fnCallback) {
      this.selectListener.push(fnCallback);
    }

    /**
     * Adds a callback to the translateListener array.
     * @param fnCallback
     */

  }, {
    key: 'onTranslateend',
    value: function onTranslateend(fnCallback) {
      this.translateListener.push(fnCallback);
    }

    /**
     * Checks if the collection contains a given feature.
     * @param feature
     * @returns {boolean}
     */

  }, {
    key: 'collectionContains',
    value: function collectionContains(feature) {
      var arrFeatures = this.collection.getArray();
      for (var i = 0; i < arrFeatures.length; i++) {
        if (feature === arrFeatures[i]) {
          return true;
        }
      }
      return false;
    }

    /**
     * Adds a feature from the collection. The selection style is applied to the feature and the select listeners
     * are called.
     * @param feature
     * @returns {*}
     */

  }, {
    key: 'addFeature',
    value: function addFeature(feature) {
      if (!this.collectionContains(feature)) {
        this.collection.push(feature);
        this.styleMap[feature.get('styleId')] = feature.getStyle();
        feature.setStyle(this.styleFunction(feature));
        for (var i = 0; i < this.selectListener.length; i++) {
          // call every listener with the feature and the whole collection as parameters
          this.selectListener[i](feature, this.collection);
        }
        return feature;
      }
    }

    /**
     * Removes a feature from the collection and restores its style.
     * @param feature
     */

  }, {
    key: 'removeFeature',
    value: function removeFeature(feature) {
      feature.setStyle(this.styleMap[feature.get('styleId')]);
      this.collection.remove(feature);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this._active = true;
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this._active = false;
    }
  }]);

  return FeatureInteraction;
}(ol.interaction.Pointer);

/***/ }),

/***/ "./Resources/public/js/c4g-editor-featurehandler.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-editor-featurehandler.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

var _c4gLayer = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-layer */ "../MapsBundle/Resources/public/js/c4g-layer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeatureHandler = exports.FeatureHandler = function () {

  /**
   * FeatureHandler constructor.
   * @param editor
   * @param mapsInterface
   */
  function FeatureHandler(editor, mapsInterface) {
    _classCallCheck(this, FeatureHandler);

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


  _createClass(FeatureHandler, [{
    key: "handleDrawnFeature",
    value: function handleDrawnFeature(feature, element, category, project, projectLayer, source, drawType) {
      var scope = this;
      var layerToSend = this.createLayerFromFeature(feature, element, category, project, projectLayer, source, drawType);

      var request = new C4GAjaxRequest(this.editor.dataBaseUrl + project.id, "POST");
      var requestData = Object.values(layerToSend);
      var requestDataKeys = Object.keys(layerToSend);
      var finalRequestData = {};
      for (var i = 0; i < requestData.length; i++) {
        if (requestDataKeys[i] === "vectorLayer") {
          continue;
        }
        finalRequestData[requestDataKeys[i]] = requestData[i];
      }
      finalRequestData['elementid'] = element.id;
      finalRequestData['categoryid'] = category.id;
      finalRequestData['drawType'] = drawType;
      if (drawType !== "point" && drawType !== "circle") {
        var format = new ol.format.GeoJSON();
        finalRequestData['geojson'] = format.writeFeature(feature);
      }
      request.addRequestData(finalRequestData);
      request.addDoneCallback(function (data) {
        var updatedLayer = scope.updateLayer(data, layerToSend, feature);
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

  }, {
    key: "activateLayerParents",
    value: function activateLayerParents(layer) {
      var currentLayer = layer;
      while (this.mapsInterface.getLayerArray()[currentLayer.pid]) {
        currentLayer = this.mapsInterface.getLayerArray()[currentLayer.pid];
        currentLayer.display = true;
        if (currentLayer.projectId === this.editor.projectController.currentProject.id) {
          this.mapsInterface.showLayer(currentLayer.id);
        }
      }
    }

    /**
     * Applies the given changes to a given feature/layer and sends a PUT request to the server.
     * @param feature     The feature to update
     * @param changes     A map of property => newValue for each change to apply
     */

  }, {
    key: "modifyFeature",
    value: function modifyFeature(feature, changes) {
      var layerId = feature.get('layerId');
      var layer = this.mapsInterface.getLayerFromArray(layerId);
      layer = this.updateLayerProperties(changes, layer, feature);
      this.mapsInterface.updateLayerIndex(layerId, layer);
      this.mapsInterface.updateStarboard();
      var url = this.editor.dataBaseUrl + this.editor.projectController.currentProject.id + "/" + layer.id;
      $.ajax(url, { method: 'PUT', data: changes });
    }

    /**
     * Applies all given changes onto the layer, if the properties which should be changed exist.
     * @param changeData
     * @param layer
     * @param feature
     * @returns {*}
     */

  }, {
    key: "updateLayerProperties",
    value: function updateLayerProperties(changeData, layer, feature) {
      for (var key in changeData) {
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
          // TODO das muss woanders gemacht werden, das breakt das Zeichnen von features
        }
      }
      return layer;
    }

    /**
     * Updates the layer with the data contained in changeData.
     * @param changeData
     * @param layer
     * @param feature
     * @param recreateVectorLayer   Should the vectorLayer of the layer be created again? (useful for feature changes)
     */

  }, {
    key: "updateLayer",
    value: function updateLayer(changeData, layer, feature, recreateVectorLayer) {
      var oldId = layer.id;
      layer = this.updateLayerProperties(changeData, layer, feature);
      this.mapsInterface.updateLayerIndex(oldId, layer);

      if (recreateVectorLayer) {
        if (changeData.content) {
          var geometry = changeData.content[0].data.geometry;
          if (feature.getGeometry() instanceof ol.geom.Point) {
            feature.getGeometry().setCoordinates(ol.proj.fromLonLat(geometry.coordinates));
          } else {
            var objGeom = new ol.format.GeoJSON().readGeometry(geometry);
            if (objGeom) {
              // update geometry
              feature.getGeometry().setCoordinates(objGeom.getCoordinates());
            }
          }
        }
      }
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

  }, {
    key: "createLayerFromFeature",
    value: function createLayerFromFeature(feature, element, category, project, projectLayer, source, drawType) {
      var elementLayer = this.findElementLayer(element, category, projectLayer, project);
      var newId = _c4gMapsUtils.utils.getUniqueId();
      var newName = element.name + " " + (elementLayer.childsCount + 1);
      var layer = {
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
      layer = new _c4gLayer.C4gLayer(layer);
      layer.content = this.createContent(feature, layer, drawType);
      // add vector layer
      feature.setStyle(this.mapsInterface.getLocstyleArray()[feature.get('styleId')].style);
      feature.set('tooltip', newName);
      feature.set('name', newName);
      feature.set('layerId', newId);
      feature.set('projectId', project.id);
      var vectorSource = new ol.source.Vector({ features: [feature] });
      var vectorLayer = this.mapsInterface.getVectorLayer(vectorSource, feature.getStyle());
      layer.vectorLayer = new ol.layer.Group({ layers: [vectorLayer] });
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

  }, {
    key: "createContent",
    value: function createContent(feature, layer, drawType) {
      var arrContent, objContent, data, properties, geometry, settings;

      arrContent = [];
      objContent = {};
      objContent.format = "GeoJSON";
      objContent.locationStyle = feature.get("styleId");
      objContent.id = _c4gMapsUtils.utils.getUniqueId();

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

  }, {
    key: "findElementLayer",
    value: function findElementLayer(element, category, projectLayer, project) {
      var childs = false;
      var categoryLayer = void 0;
      var categoryFound = false;
      var elementFound = false;

      if (projectLayer) {
        childs = projectLayer.childs;
      }

      if (childs && childs.length) {
        for (var i = 0; i < childs.length; i++) {
          if (childs[i].name === category.name) {
            categoryFound = true;
            categoryLayer = childs[i];
            for (var j = 0; j < childs[i].childs.length; j++) {
              if (childs[i].childs[j].name === element.name) {
                return childs[i].childs[j];
              }
            }
            if (!elementFound) {
              // element was not found in category, has to be created
              return this.createElementLayer(element, categoryLayer, projectLayer, project);
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

  }, {
    key: "createCategoryWithElementLayer",
    value: function createCategoryWithElementLayer(element, category, projectLayer, project) {
      var newId = _c4gMapsUtils.utils.getUniqueId();
      var scope = this;
      var layer = {
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
      layer = new _c4gLayer.C4gLayer(layer);
      layer.visibleChilds = true;
      this.mapsInterface.addToLayerArray(layer);
      this.mapsInterface.addToLayerIds(newId);
      // TODO das hier auslagern (ist fast gleich wie unten!)
      var request = new C4GAjaxRequest("/con4gis/projectIdService", "POST");
      request.addRequestData({
        id: category.id,
        key: project.id,
        ident: 98
      });
      request.addDoneCallback(function (data) {
        var oldIndex = layer.id;
        scope.updateLayer(data, layer);
        if (layer.childs.length > 0) {
          for (var i = 0; i < layer.childs.length; i++) {
            var childLayer = layer.childs[i];
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

  }, {
    key: "createElementLayer",
    value: function createElementLayer(element, categoryLayer, projectLayer, project) {
      var scope = this;
      var newId = _c4gMapsUtils.utils.getUniqueId();
      var layer = {
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
      layer = new _c4gLayer.C4gLayer(layer);
      this.mapsInterface.addToLayerArray(layer);
      this.mapsInterface.addToLayerIds(newId);
      var request = new C4GAjaxRequest("/con4gis/projectIdService", "POST");
      request.addRequestData({
        id: element.id,
        key: element.categoryId,
        ident: 99
      });
      request.addDoneCallback(function (data) {
        var oldIndex = layer.id;
        scope.updateLayer(data, layer);
        if (layer.childs.length > 0) {
          for (var i = 0; i < layer.childs.length; i++) {
            var childLayer = layer.childs[i];
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

  }, {
    key: "getSourceForLayerId",
    value: function getSourceForLayerId(layerId) {
      var layer = this.mapsInterface.getLayerFromArray(layerId);
      var olLayer = layer.vectorLayer.getLayersArray()[0];
      if (!olLayer) {
        return null;
      }
      return olLayer.getSource();
    }
  }]);

  return FeatureHandler;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-editor-i18n-de.js":
/*!***************************************************!*\
  !*** ./Resources/public/js/c4g-editor-i18n-de.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var projectEditorLang = exports.projectEditorLang = {
  LANG: 'de',

  METADATA_EDIT: "Metadaten bearbeiten",
  DUPLICATE_ELEMENT: "Element duplizieren",
  DISPLACE_ELEMENT: "Element in anderes Projekt verschieben",
  DUPLICATE_AND_DELETE: "Element duplizieren & in anderes Projekt verschieben",
  CHOOSE_PROJECT: "Wähle ein Projekt ...",
  EDITOR_FEATURE_DELETE_QUESTION: "Wollen Sie das Element wirklich löschen?",
  ROTATE_ELEMENT: "Element rotieren",
  DESELECT_ELEMENT: "Element-Auswahl aufheben",
  REVERT_ELEMENT: "Letzte Version wiederherstellen",
  CONFIRM_DELETE_ALL: "Wollen Sie die ausgewählten Elemente wirklich löschen?",
  BUTTON_DESELECT_ALL: "Auswahl für alle aufheben",
  BUTTON_DELETE_ALL: "Ausgewählte Elemente löschen",
  BUTTON_DISPLACE_ALL: "Ausgewählte Elemente in anderes Projekt verschieben",
  BUTTON_CONFIRM: "Bestätigen",
  BUTTON_CANCEL: "Abbrechen",

  NONE: '' // last line
};

/***/ }),

/***/ "./Resources/public/js/c4g-editor-i18n.js":
/*!************************************************!*\
  !*** ./Resources/public/js/c4g-editor-i18n.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.langConstants = undefined;

var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de */ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js");

var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-en */ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-en.js");

var _c4gEditorI18nDe = __webpack_require__(/*! ./c4g-editor-i18n-de */ "./Resources/public/js/c4g-editor-i18n-de.js");

var mapsLang = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    mapsLang = _c4gMapsConstantI18nDe.langConstantsGerman;
  } else if (mapData.lang === "en") {
    mapsLang = _c4gMapsConstantI18nEn.langConstantsEnglish;
  } else {
    // fallback
    mapsLang = _c4gMapsConstantI18nDe.langConstantsGerman;
  }
}
var langConstants = exports.langConstants = $.extend(mapsLang, _c4gEditorI18nDe.projectEditorLang);

/***/ }),

/***/ "./Resources/public/js/c4g-editor-mapsinterface.js":
/*!*********************************************************!*\
  !*** ./Resources/public/js/c4g-editor-mapsinterface.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapsInterface = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class MapsInterface
 * Wrapper class for function calls from the MapsBundle. This way, when the MapsBundle changes, only this class needs
 * to be changed.
 */
var MapsInterface = exports.MapsInterface = function () {
  function MapsInterface(editor, proxy, mapController) {
    _classCallCheck(this, MapsInterface);

    this.editor = editor;
    this.proxy = proxy;
    this.mapController = mapController;
  }

  _createClass(MapsInterface, [{
    key: "getLayerArray",
    value: function getLayerArray() {
      return this.proxy.layerController.arrLayers;
    }
  }, {
    key: "getLayerFromArray",
    value: function getLayerFromArray(layerId) {
      return this.proxy.layerController.arrLayers[layerId];
    }

    /**
     * Adds a given layer to the maps layerController.
     * @param layer
     */

  }, {
    key: "addToLayerArray",
    value: function addToLayerArray(layer) {
      var arrLayers = this.proxy.layerController.arrLayers;
      arrLayers[layer.id] = layer;
    }

    /**
     * Adds the given layer to the childs of the layer with the given pid.
     * @param layer
     * @param pid
     */

  }, {
    key: "addToLayerChilds",
    value: function addToLayerChilds(layer, pid) {
      var arrLayers = this.proxy.layerController.arrLayers;
      var pLayer = arrLayers[pid];
      if (pLayer) {
        if (!pLayer.childs) {
          pLayer.childs = [];
          pLayer.childsCount = 0;
        }
        pLayer.childs.push(layer);
        pLayer.childsCount++;
      }
    }
  }, {
    key: "addToLayerIds",
    value: function addToLayerIds(layerId) {
      this.proxy.layerIds.push(layerId);
    }
  }, {
    key: "insertIntoLayerIds",
    value: function insertIntoLayerIds(layerId, index) {
      this.proxy.layerIds.splice(index, 0, layerId);
    }
  }, {
    key: "getVectorLayer",
    value: function getVectorLayer(source, style) {
      return _c4gMapsUtils.utils.getVectorLayer(source, style);
    }
  }, {
    key: "showLayer",
    value: function showLayer(layerId) {
      this.proxy.layerController.showLayer(layerId);
    }
  }, {
    key: "hideLayer",
    value: function hideLayer(layerId) {
      this.proxy.layerController.hideLayer(layerId);
    }
  }, {
    key: "getStarboard",
    value: function getStarboard() {
      return this.mapController.controls.starboard;
    }
  }, {
    key: "getLocstyleArray",
    value: function getLocstyleArray() {
      return this.proxy.locationStyleController.arrLocStyles;
    }

    /**
     * Updates the layer index of a given layer in the maps layerController.
     * @param oldIndex
     * @param layer
     */

  }, {
    key: "updateLayerIndex",
    value: function updateLayerIndex(oldIndex, layer) {
      delete this.proxy.layerController.arrLayers[oldIndex];
      var ids = this.proxy.layerIds;
      for (var i = 0; i < ids.length; i++) {
        if (ids[i] === oldIndex) {
          ids[i] = layer.id;
          this.proxy.layerIds[i] = layer.id;
        }
      }
      this.proxy.layerController.arrLayers[layer.id] = layer;
      this.updateStarboard();
    }

    /**
     * Removes the layer at the given index from the maps layerController. Also deletes from the proxy layer array.
     * @param index
     */

  }, {
    key: "removeLayerFromArray",
    value: function removeLayerFromArray(index) {
      delete this.proxy.layerController.arrLayers[index];
      var ids = this.proxy.layerIds;
      for (var i = 0; i < ids.length; i++) {
        if (ids[i] === index) {
          this.proxy.layerIds.splice(i, 1);
        }
      }
    }

    /**
     * Called when a new layer is created. Reloads the starboard content, so the new layer is contained, but the old
     * state is also retained.
     */

  }, {
    key: "updateStarboard",
    value: function updateStarboard() {
      var projectLayer = this.editor.projectController.projectLayer;
      var starboard = this.getStarboard();
      var unfoldedLayers = {};
      var tabId = projectLayer.tabId;
      var tab = void 0;
      if (starboard.initialized) {
        if (starboard.plugins["customTab" + tabId]) {
          tab = starboard.plugins["customTab" + tabId];
          var layers = tab.layers;
          for (var key in layers) {
            if (layers.hasOwnProperty(key)) {
              var layer = layers[key];
              // entryWrapper is the element which has the acutal content, and a open/close arrow or nothing, if there
              // are no childs for the current element
              var entryWrapper = layer.entryWrappers[0];
              if ($(entryWrapper).hasClass(_c4gMapsConstant.cssConstants.OPEN)) {
                unfoldedLayers[key] = key;
              }
            }
          }
          tab.loadContent();
          layers = tab.layers;
          for (var _key in layers) {
            if (layers.hasOwnProperty(_key)) {
              var _layer = layers[_key];
              var _entryWrapper = _layer.entryWrappers[0];
              if (unfoldedLayers[_key]) {
                $(_entryWrapper).removeClass(_c4gMapsConstant.cssConstants.CLOSE).addClass(_c4gMapsConstant.cssConstants.OPEN);
              }
            }
          }
          starboard.update();
        }
      }
    }
  }]);

  return MapsInterface;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-editor-project.js":
/*!***************************************************!*\
  !*** ./Resources/public/js/c4g-editor-project.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorProject = exports.EditorProject = function () {
  // map for plugin fields

  function EditorProject(id, name) {
    _classCallCheck(this, EditorProject);

    this._id = id;
    this._name = name;
    this._additionalData = {};
  }

  /**
   * Class properties
   */


  _createClass(EditorProject, [{
    key: "addData",


    /**
     * Adds a key/value field to addionalData
     * @param key
     * @param value
     */
    value: function addData(key, value) {
      this._additionalData[key] = value;
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(value) {
      this._name = value;
    }
  }, {
    key: "additionalData",
    get: function get() {
      return this._additionalData;
    },
    set: function set(value) {
      this._additionalData = value;
    }
  }]);

  return EditorProject;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-editor-selectinteraction.js":
/*!*************************************************************!*\
  !*** ./Resources/public/js/c4g-editor-selectinteraction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorSelectInteraction = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gEditorI18n = __webpack_require__(/*! ./c4g-editor-i18n */ "./Resources/public/js/c4g-editor-i18n.js");

var _c4gEditorFeatureInteraction = __webpack_require__(/*! ./c4g-editor-feature-interaction */ "./Resources/public/js/c4g-editor-feature-interaction.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorSelectInteraction = exports.EditorSelectInteraction = function () {
  /**
   * EditorSelectInteraction constructor
   * @param editor
   * @param selectView
   */
  function EditorSelectInteraction(editor, selectView) {
    _classCallCheck(this, EditorSelectInteraction);

    this._elementUiController = null;
    this._editor = editor;
    this._selectView = selectView;
  }

  /**
   * Creates the interactions for selecting features and the resulting triggers.
   * @returns {{selectInteraction: *, boxInteraction: *}}
   */


  _createClass(EditorSelectInteraction, [{
    key: "createSelectInteraction",
    value: function createSelectInteraction() {
      var editor = this.editor;
      var scope = this;
      var selectCollection = new ol.Collection();

      // TODO Filter funktion wieder einbauen, in FeatureInteraction!!
      // let selectInteraction = new ol.interaction.Select({
      //   filter: function(feature, layer) {
      //     // returns true when the projectId of the given feature equals the current project id
      //     if (feature && typeof feature.get === "function" && editor.projectController.currentProject) {
      //       return feature.get('projectId') === editor.projectController.currentProject.id;
      //     } else {
      //       return false;
      //     }
      //   },
      //   toggleCondition: ol.events.condition.platformModifierKeyOnly,
      //   collection: selectCollection,
      var styleFn = function styleFn(feature, projection) {
        var styleId,
            styleArray = [],
            styleRadius,
            locStyles;

        locStyles = scope.editor.mapsInterface.getLocstyleArray();
        if (feature && typeof feature.get === 'function') {
          // get the styleId of the current feature
          styleId = feature.get('styleId');
          // and execute the appropriate function
          // use the feature style function if there is one
          if (feature.getStyle() && typeof feature.getStyle() === 'function') {
            styleArray = feature.getStyle()(feature, projection);
            return styleArray;
            // else use the locationstyle function
          } else if (locStyles[styleId] && locStyles[styleId].style) {
            styleArray = locStyles[styleId].style(feature, projection);
            if (typeof styleArray[0].getImage === 'function' && styleArray[0].getImage() instanceof ol.style.Icon) {
              styleRadius = 5;
            } else {
              styleRadius = parseInt(styleArray[0].getImage().getRadius(), 10) + 4;
            }
          }

          // create border style
          styleArray.push(new ol.style.Style({
            image: new ol.style.Circle({
              stroke: new ol.style.Stroke({
                color: 'rgba(255,255,255,.7)',
                width: 5
              }),
              radius: styleRadius
            }),
            stroke: new ol.style.Stroke({
              color: 'rgba(255,255,255,.7)',
              width: 5
            }),
            fill: new ol.style.Fill({
              color: 'rgba(255,255,255,.5)'
            })
          }));
          return styleArray;
        }
      };
      var selectInteraction = new _c4gEditorFeatureInteraction.FeatureInteraction(selectCollection, null, styleFn);
      selectInteraction.onSelect(function (feature, collection) {
        scope.fnHandleSelection(collection);
      });
      selectInteraction.onTranslateend(function (feature) {
        scope.applyFeatureTranslation(feature);
      });
      var selectBoxInteraction = new ol.interaction.DragBox({ condition: ol.events.condition.shiftKeyOnly });

      selectBoxInteraction.on('boxend', function (e) {
        var extent = selectBoxInteraction.getGeometry().getExtent();

        editor.editLayerGroup.getLayers().forEach(function (layerGroup) {
          layerGroup.getLayers().forEach(function (layer) {
            layer.getSource().forEachFeatureIntersectingExtent(extent, function (feature) {
              // check if the feature belongs to the current project
              if (feature.get('projectId') === scope.editor.projectController.currentProject.id) {
                // select feature
                selectInteraction.addFeature(feature);
                selectInteraction.addTranslateInteractionForFeature(feature, scope.editor.options.mapController.map);
              }
            });
          });
        });
      });

      this.selectInteraction = selectInteraction;
      this.selectBoxInteraction = selectBoxInteraction;
      return { selectInteraction: selectInteraction, boxInteraction: selectBoxInteraction };
    }

    /**
     * Applies a feature transformation.
     * @param feature
     */

  }, {
    key: "applyFeatureTranslation",
    value: function applyFeatureTranslation(feature) {
      var change = {};
      if (feature.getGeometry() instanceof ol.geom.Point) {
        var coordinates = ol.proj.toLonLat(feature.getGeometry().getCoordinates());
        change['locgeox'] = coordinates[0];
        change['locgeoy'] = coordinates[1];
      } else if (feature.getGeometry() instanceof ol.geom.Circle) {
        change['radius'] = feature.getGeometry().getRadius();
      } else {
        var geoJson = new ol.format.GeoJSON();
        change['geojson'] = geoJson.writeFeature(feature);
      }
      // update feature measurements
      feature.set('measuredLength', _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true));
      if (feature.getGeometry() instanceof ol.geom.Polygon) {
        feature.set('measuredArea', _c4gMapsUtils.utils.measureGeometry(feature.getGeometry()));
      }
      if (feature.getGeometry() instanceof ol.geom.Circle) {
        feature.set('measuredRadius', _c4gMapsUtils.utils.measureGeometry(feature.getGeometry()));
      }
      // call featurehandler
      this.editor.featureHandler.modifyFeature(feature, change);
      // re-render list
      this.updateFeatures();
    }
  }, {
    key: "addModificationInteractions",
    value: function addModificationInteractions(modifyFeature) {
      var featureGeometry = modifyFeature.getGeometry();
      var translateInteraction = false;
      var modifyInteraction = false;
      // add interactions to map
      if (!(featureGeometry instanceof ol.geom.Point)) {
        modifyInteraction = new ol.interaction.Modify({
          features: new ol.Collection([modifyFeature])
        });
        this.editor.options.mapController.map.addInteraction(modifyInteraction);
      }
    }

    /**
     * Removes the given feature from the selected features.
     * @param feature
     */

  }, {
    key: "removeSelectedFeature",
    value: function removeSelectedFeature(feature) {
      this.selectInteraction.removeFeature(feature);
    }

    /**
     * Refreshes the feature list.
     */

  }, {
    key: "updateFeatures",
    value: function updateFeatures() {
      this.fnHandleSelection(this.selectInteraction.getFeatures());
    }

    /**
     * Draws the duplicate of a layer onto the map.
     * @param layer         C4gLayer
     * @param opt_offset    bool  Should the feature be drawn with an offset?
     */

  }, {
    key: "showNewLayer",
    value: function showNewLayer(layer, opt_offset) {
      var scope = this;
      var change = {};

      this.editor.mapsInterface.addToLayerArray(layer);
      this.editor.mapsInterface.updateStarboard();
      this.editor.mapsInterface.showLayer(layer.id);
      layer.vectorLayer.getLayers().forEach(function (element, index, array) {
        element.getSource().forEachFeature(function (feature) {
          // set layerId, needed for later feature removal
          feature.set('layerId', layer.id);
          // set additional display properties
          feature.set('name', layer.layername);
          feature.set('projectId', layer.projectId);
          if (layer.content && layer.content[0] && layer.content[0].locationStyle) {
            feature.set('styleId', layer.content[0].locationStyle);
          }
          if (opt_offset) {
            if (feature.getGeometry() instanceof ol.geom.Point) {
              var coordinates = feature.getGeometry().getCoordinates();
              coordinates = ol.coordinate.add(coordinates, [10, 10]);
              feature.setGeometry(new ol.geom.Point(coordinates));
              coordinates = ol.proj.toLonLat(coordinates);
              change['locgeox'] = coordinates[0];
              change['locgeoy'] = coordinates[1];
            } else if (feature.getGeometry() instanceof ol.geom.Circle) {
              var center = feature.getGeometry().getCenter();
              center = ol.coordinate.add(center, [30, 30]);
              feature.setGeometry(new ol.geom.Circle(center, feature.getGeometry().getRadius()));
              center = ol.proj.toLonLat(center);
              change['locgeox'] = center[0];
              change['locgeoy'] = center[1];
            } else {
              feature.getGeometry().translate(30, 30);
              var geoJson = new ol.format.GeoJSON();
              change['geojson'] = geoJson.writeFeature(feature);
            }
            scope.editor.featureHandler.modifyFeature(feature, change);
          }
        });
      });
      this.editor.editLayerGroup.getLayers().push(layer.vectorLayer);
      this.editor.spinner.hide();
    }

    /**
     * Lists the currently selected features in the select view and creates the button elements for the different
     * editing functions.
     * @param selectedFeatures
     */

  }, {
    key: "fnHandleSelection",
    value: function fnHandleSelection(selectedFeatures) {
      var outerDiv, inputNameElement, modifyButtonElement, deleteButtonElement, featureCount, selectedFeature, modifyFeatureFunction, deleteFeatureFunction, renderSelectedFeaturesList;

      var scope = this;
      var selectInteraction = this.selectInteraction;

      // if (typeof scope.editor.applyFeatureModification === 'function') {
      //   scope.editor.applyFeatureModification();
      // }

      renderSelectedFeaturesList = function renderSelectedFeaturesList() {
        featureCount = selectedFeatures.getLength();
        scope.selectView.selectContent.innerHTML = '';
        if (featureCount > 0) {
          if (featureCount > 1) {
            scope.selectView.selectContent.appendChild(scope.createMultiEditButtonBar());
          }
          for (var i = 0; i < featureCount; i += 1) {
            selectedFeature = selectedFeatures.item(i);
            outerDiv = document.createElement('div');
            // add name inputfield
            inputNameElement = document.createElement('input');
            inputNameElement.type = 'text';
            inputNameElement.id = i;
            inputNameElement.setAttribute('value', selectedFeature.get('name'));
            inputNameElement.setAttribute('feat_id', i);
            inputNameElement.setAttribute('disabled', true);
            outerDiv.appendChild(inputNameElement);
            // add modify button
            outerDiv.appendChild(scope._elementUiController.createMoveButton(i));
            // add delete button
            outerDiv.appendChild(scope._elementUiController.createDeleteButton(i));
            // add edit button
            outerDiv.appendChild(scope._elementUiController.createEditButton(i));
            // add copy button
            outerDiv.appendChild(scope._elementUiController.createCopyButton(i));
            // add displace button
            outerDiv.appendChild(scope._elementUiController.createDisplaceButton(i));
            // add copy&displace button
            outerDiv.appendChild(scope._elementUiController.createCopyAndDisplaceButton(i));
            // add rotation button
            outerDiv.appendChild(scope._elementUiController.createRotateButton(i));
            // add deselect button
            outerDiv.appendChild(scope._elementUiController.createDeselectButton(i));
            // add revert button
            outerDiv.appendChild(scope._elementUiController.createRevertButton(i));
            scope.selectView.selectContent.appendChild(outerDiv);
            if (selectedFeature.get('measuredLength')) {
              var label = "";
              if (selectedFeature.getGeometry() instanceof ol.geom.LineString) {
                label = _c4gEditorI18n.langConstants.LENGTH;
              } else if (selectedFeature.getGeometry() instanceof ol.geom.Polygon) {
                label = _c4gEditorI18n.langConstants.PERIMETER;
              } else if (selectedFeature.getGeometry() instanceof ol.geom.Circle) {
                label = _c4gEditorI18n.langConstants.RADIUS;
              }
              var paragraphElement = document.createElement('p');
              paragraphElement.innerHTML += '<strong>' + label + ':</strong> ' + selectedFeature.get('measuredLength').htmlValue;
              scope.selectView.selectContent.appendChild(paragraphElement);
            }
            if (selectedFeature.get('measuredArea')) {
              var _paragraphElement = document.createElement('p');
              _paragraphElement.innerHTML += '<strong>' + _c4gEditorI18n.langConstants.SURFACEAREA + ':</strong> ' + selectedFeature.get('measuredArea').htmlValue;
              scope.selectView.selectContent.appendChild(_paragraphElement);
            }
            if (selectedFeature.get('measuredRadius')) {
              var _paragraphElement2 = document.createElement('p');
              _paragraphElement2.innerHTML += '<strong>' + _c4gEditorI18n.langConstants.RADIUS + ':</strong> ' + selectedFeature.get('measuredRadius').htmlValue;
              scope.selectView.selectContent.appendChild(_paragraphElement2);
            }
          }
          if (scope.selectView.selectContentHeadline) {
            scope.selectView.selectContentHeadline.style.display = 'none';
          }
          // activate selection tab
          scope.editor.tabs[0].activate();
          scope.editor.update();
        } else {
          if (scope.selectView.selectContentInfo) {
            scope.selectView.selectContent.appendChild(scope.selectView.selectContentInfo);
            if (scope.selectView.selectContentHeadline) {
              scope.selectView.selectContentHeadline.style.display = '';
            }
            scope.editor.update();
          }
        }
        // TODO prüfen ob solche Tooltips vielleicht cooler sind
        // console.log($('button.c4g-icon'));
        // let title = "";
        // $('button.c4g-icon').hover(function(e){
        //     title = $(this).attr('title');
        //     let span = document.createElement('span');
        //     span.innerText = title;
        //     $(this).append(span);
        //     $(this).removeAttr('title');
        //   },
        //   function(e){
        //     $('span', this).remove();
        //     $(this).attr('title',title);
        //   });
      }; // end of "renderSelectedFeaturesList"

      renderSelectedFeaturesList();
    }
  }, {
    key: "createMultiEditButtonBar",
    // end of "fnHandleSelection"

    value: function createMultiEditButtonBar() {
      var scope = this;
      var bar = document.createElement('div');
      var deselectButton = document.createElement('button');
      deselectButton.title = _c4gEditorI18n.langConstants.BUTTON_DESELECT_ALL;
      $(deselectButton).addClass('c4g-btn-deselect-all-data');
      $(deselectButton).on('click', function (event) {
        scope.deselectAllElements();
      });
      var deleteButton = document.createElement('button');
      deleteButton.title = _c4gEditorI18n.langConstants.BUTTON_DELETE_ALL;
      $(deleteButton).addClass('c4g-btn-delete-all-data');
      $(deleteButton).on('click', function (event) {
        scope.showDeleteConfirmDialog(bar);
      });
      var translateButton = document.createElement('button');
      $(translateButton).addClass('c4g-btn-translate-all-data');
      $(translateButton).on('click', function (event) {
        // TODO es gibt keine translate die mehrere features verschiebt
        // TODO also müsste ich jedes event was auf ein ausgewähltes feature geht auch auf alle anderen schmeißen
      });
      var displaceButton = document.createElement('button');
      displaceButton.title = _c4gEditorI18n.langConstants.BUTTON_DISPLACE_ALL;
      $(displaceButton).addClass('c4g-btn-displace-all-data');
      $(displaceButton).on('click', function (event) {
        // TODO projektauswahl anzeigen, dann alle darein verschieben
        scope.showDisplaceDialog(bar);
      });
      var copyDisplaceButton = document.createElement('button');
      $(copyDisplaceButton).addClass('c4g-btn-copy-displace-all-data');
      $(copyDisplaceButton).on('click', function (event) {
        // TODO das gleiche wie oben (fast)
      });
      // bar.appendChild(translateButton);
      bar.appendChild(deleteButton);
      bar.appendChild(displaceButton);
      // bar.appendChild(copyDisplaceButton);
      bar.appendChild(deselectButton);
      return bar;
    }
  }, {
    key: "showDeleteConfirmDialog",
    value: function showDeleteConfirmDialog(buttonBar) {
      var scope = this;
      var confirmLabel = document.createElement("p");
      confirmLabel.innerText = _c4gEditorI18n.langConstants.CONFIRM_DELETE_ALL;
      var confirmButton = document.createElement("button");
      $(confirmButton).addClass(_c4gMapsConstant.cssConstants.ICON + " c4g-editor-dialog-confirm");
      $(confirmButton).on('click', function (event) {
        scope.deleteAllElements();
      });
      var cancelButton = document.createElement("button");
      $(cancelButton).addClass(_c4gMapsConstant.cssConstants.ICON + " c4g-editor-dialog-cancel");
      $(cancelButton).on('click', function (event) {
        scope.elementUiController.reloadSelectedFeatureView();
      });
      buttonBar.appendChild(confirmLabel);
      buttonBar.appendChild(confirmButton);
      buttonBar.appendChild(cancelButton);
    }
  }, {
    key: "deleteAllElements",
    value: function deleteAllElements() {
      var arrFeatures = this.selectInteraction.getFeatures().getArray();
      // we have to use the same technique as in deselectAllElements
      while (arrFeatures.length !== 0) {
        for (var i = 0; i < arrFeatures.length; i++) {
          this._elementUiController.elementController.deleteElement(arrFeatures[i]);
        }
      }
    }
  }, {
    key: "deselectAllElements",
    value: function deselectAllElements() {
      var arrFeatures = this.selectInteraction.getFeatures().getArray();
      // this is needed because the array is modified in place by the deselection
      // the for loop will half the length of the array by the time it completes
      // so the whole runtime will be log(n) * n, so that's not too bad
      while (arrFeatures.length !== 0) {
        for (var i = 0; i < arrFeatures.length; i++) {
          this._elementUiController.elementController.deselectElement(arrFeatures[i], true);
        }
      }
      this.updateFeatures();
    }
  }, {
    key: "showDisplaceDialog",
    value: function showDisplaceDialog(bar) {
      var scope = this;
      var formContainer = document.createElement('div');
      var projectSelect = this._elementUiController.createProjectSelectionForDisplace();
      var confirmButton = document.createElement("button");
      confirmButton.className = "c4g-editor-dialog-confirm";
      confirmButton.title = _c4gEditorI18n.langConstants.BUTTON_CONFIRM;
      var cancelButton = document.createElement("button");
      cancelButton.className = "c4g-editor-dialog-cancel";
      cancelButton.title = _c4gEditorI18n.langConstants.BUTTON_CANCEL;
      $(confirmButton).on('click', function (event) {
        scope.displaceAllElements($(projectSelect).val());
      });
      $(cancelButton).on('click', function (event) {
        scope._elementUiController.reloadSelectedFeatureView();
      });
      formContainer.appendChild(projectSelect);
      formContainer.appendChild(confirmButton);
      formContainer.appendChild(cancelButton);
      bar.appendChild(formContainer);
    }
  }, {
    key: "displaceAllElements",
    value: function displaceAllElements(projectId) {
      var arrFeatures = this.selectInteraction.getFeatures().getArray();
      // we have to use the same technique as in deselectAllElements
      for (var i = 0; i < arrFeatures.length; i++) {
        var feature = arrFeatures[i];
        this._elementUiController.elementController.displaceElement(feature, feature.get('layerId'), false, projectId);
      }
    }
  }, {
    key: "elementUiController",
    get: function get() {
      return this._elementUiController;
    },
    set: function set(value) {
      this._elementUiController = value;
    }
  }, {
    key: "editor",
    get: function get() {
      return this._editor;
    }
  }, {
    key: "selectView",
    get: function get() {
      return this._selectView;
    }
  }]);

  return EditorSelectInteraction;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-editor-selectview.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-editor-selectview.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorSelectView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

var _c4gEditorSelectinteraction = __webpack_require__(/*! ./c4g-editor-selectinteraction */ "./Resources/public/js/c4g-editor-selectinteraction.js");

var _c4gEditorI18n = __webpack_require__(/*! ./c4g-editor-i18n */ "./Resources/public/js/c4g-editor-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EditorSelectView = exports.EditorSelectView = function () {
  function EditorSelectView(options) {
    _classCallCheck(this, EditorSelectView);

    if (!options.editor) {
      console.warn("Cannot initialize select view without editor...");
    }
    this.options = options;
  }

  _createClass(EditorSelectView, [{
    key: "init",
    value: function init() {
      var scope, selectedFeatures, selectContentWrapper, selectView, fnHandleSelection, editor;

      var selectInteraction = void 0,
          selectBoxInteraction = void 0;
      scope = this;
      editor = this.options.editor;
      this.selectContentWrapper = this.createHelpContent();
      var objSelect = new _c4gEditorSelectinteraction.EditorSelectInteraction(editor, scope);
      var interactions = objSelect.createSelectInteraction();
      selectBoxInteraction = interactions.boxInteraction;
      selectInteraction = interactions.selectInteraction;
      scope.selectInteraction = objSelect;
      scope.selectInteraction.interactions = interactions;

      selectView = editor.addView({
        name: 'select',
        triggerConfig: {
          tipLabel: _c4gEditorI18n.langConstants.EDITOR_VIEW_TRIGGER_SELECT,
          className: _c4gMapsConstant.cssConstants.EDITOR_VIEW_TRIGGER_SELECT,
          withHeadline: true
        },
        sectionElements: [{ section: editor.contentContainer, element: this.selectContentWrapper }, { section: editor.topToolbar, element: editor.viewTriggerBar }],
        initFunction: function initFunction() {
          editor.options.mapController.map.addInteraction(selectInteraction);
          editor.options.mapController.map.addInteraction(selectBoxInteraction);
          return true;
        },
        activateFunction: function activateFunction() {
          // Disable mapHover
          editor.options.mapController.mapHover.deactivate();
          // Reset display, if no features are selected
          if (selectInteraction.getFeatures().getLength() < 1) {
            scope.reloadHelpContent();
          }
          // Enable interaction
          selectInteraction.setActive(true);
          editor.options.mapController.map.addInteraction(selectInteraction);
          selectBoxInteraction.setActive(true);
          editor.options.mapController.map.addInteraction(selectBoxInteraction);
          selectInteraction.activate();
          return true;
        },
        deactivateFunction: function deactivateFunction() {
          // Disable interaction
          selectInteraction.setActive(false);
          editor.options.mapController.map.removeInteraction(selectInteraction);
          selectBoxInteraction.setActive(false);
          editor.options.mapController.map.removeInteraction(selectBoxInteraction);
          objSelect.deselectAllElements();
          selectInteraction.deactivate();
          // enable mapHover
          editor.options.mapController.mapHover.activate();

          return true;
        }
      });

      return selectView;
    }

    /**
     * Creates the default content, containing help hints, for the select view.
     */

  }, {
    key: "createHelpContent",
    value: function createHelpContent() {
      var selectContentWrapper = void 0,
          selectContentHeadline = void 0,
          selectContent = void 0,
          selectContentInfo = void 0;

      selectContentWrapper = document.createElement('div');

      // selectContentHeadline = document.createElement('div');
      // selectContentHeadline.innerHTML = langConstants.EDITOR_VIEW_TRIGGER_SELECT;
      // selectContentHeadline.className = 'contentHeadline';
      // selectContentWrapper.appendChild(selectContentHeadline);

      selectContent = document.createElement('div');
      selectContent.className = _c4gMapsConstant.cssConstants.EDITOR_CONTENT_SELECT;
      selectContentInfo = document.createElement('p');
      selectContentInfo.innerHTML = _c4gEditorI18n.langConstants.EDITOR_SELECT_INFO;
      selectContentInfo.innerHTML += '<br><br><sub>' + _c4gEditorI18n.langConstants.EDITOR_SELECT_INFO_ADDITIONAL + '</sub>';
      selectContent.appendChild(selectContentInfo);
      selectContentWrapper.appendChild(selectContent);

      this.selectContent = selectContent;
      // this.selectContentHeadline = selectContentHeadline;
      this.selectContentInfo = selectContentInfo;

      return selectContentWrapper;
    }

    /**
     * Shows the default help content in the select view.
     */

  }, {
    key: "reloadHelpContent",
    value: function reloadHelpContent() {
      this.selectContent.innerHTML = "";
      this.options.editor.contentHeadline.innerHTML = _c4gEditorI18n.langConstants.EDITOR_VIEW_TRIGGER_SELECT;
      this.selectContentInfo.innerHTML = _c4gEditorI18n.langConstants.EDITOR_SELECT_INFO;
      this.selectContentInfo.innerHTML += '<br><br><sub>' + _c4gEditorI18n.langConstants.EDITOR_SELECT_INFO_ADDITIONAL + '</sub>';
      //this.selectContent.appendChild(this.selectContentHeadline);
      this.selectContent.appendChild(this.selectContentInfo);
    }
  }]);

  return EditorSelectView;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-editor.js":
/*!*******************************************!*\
  !*** ./Resources/public/js/c4g-editor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Editor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

var _c4gMapsControlSideboard = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-control-sideboard */ "../MapsBundle/Resources/public/js/c4g-maps-control-sideboard.js");

var _c4gEditorMapsinterface = __webpack_require__(/*! ./c4g-editor-mapsinterface */ "./Resources/public/js/c4g-editor-mapsinterface.js");

var _c4gMissingLayerLoader = __webpack_require__(/*! ./c4g-missing-layer-loader */ "./Resources/public/js/c4g-missing-layer-loader.js");

var _c4gProjectCacheController = __webpack_require__(/*! ./c4g-project-cache-controller */ "./Resources/public/js/c4g-project-cache-controller.js");

var _c4gProjectUiController = __webpack_require__(/*! ./c4g-project-ui-controller */ "./Resources/public/js/c4g-project-ui-controller.js");

var _c4gEditorDrawview = __webpack_require__(/*! ./c4g-editor-drawview */ "./Resources/public/js/c4g-editor-drawview.js");

var _c4gEditorFeaturehandler = __webpack_require__(/*! ./c4g-editor-featurehandler */ "./Resources/public/js/c4g-editor-featurehandler.js");

var _c4gEditorSelectview = __webpack_require__(/*! ./c4g-editor-selectview */ "./Resources/public/js/c4g-editor-selectview.js");

var _c4gEditorI18n = __webpack_require__(/*! ./c4g-editor-i18n */ "./Resources/public/js/c4g-editor-i18n.js");

var _c4gElementController = __webpack_require__(/*! ./c4g-element-controller */ "./Resources/public/js/c4g-element-controller.js");

var _c4gElementUiController = __webpack_require__(/*! ./c4g-element-ui-controller */ "./Resources/public/js/c4g-element-ui-controller.js");

var _c4gProjectController = __webpack_require__(/*! ./c4g-project-controller */ "./Resources/public/js/c4g-project-controller.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

'use strict';

var Editor = exports.Editor = function (_Sideboard) {
  _inherits(Editor, _Sideboard);

  /**
   * Constructor
   *
   * @constructor
   * @extend {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   */
  function Editor(options) {
    _classCallCheck(this, Editor);

    if (!options.mapController) {
      console.warn('Could not initiallize Editor, without valid mapController.');
      return _possibleConstructorReturn(_this);
    }
    // extend options
    options = $.extend({
      name: 'editor',
      type: 'frontend',
      dataField: false,
      create: true,
      mapController: undefined,
      drawModes: ['Point', 'Line', 'Polygon', 'Circle', 'Freehand'],
      direction: 'left',
      headline: _c4gEditorI18n.langConstants.EDITOR
      // initMode: 'select'
    }, options);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, options));

    _this.options = options;
    // TODO tabs aufteilen in selectTabs und drawTabs, am besten für jeden Tab eigene Property, damit alle einzeln
    // TODO angesteuert werden können!
    _this.tabs = [];
    _this.lastDrawInteraction = undefined;
    _this.proxy = _this.options.mapController.proxy;
    _this.mapsInterface = new _c4gEditorMapsinterface.MapsInterface(_this, _this.proxy, options.mapController);
    _this.featureHandler = new _c4gEditorFeaturehandler.FeatureHandler(_this, _this.mapsInterface);
    // this.projects = [];
    // this.currentProject = null;
    _this.projectController = new _c4gProjectController.ProjectController(_this);
    _this.projectUiController = new _c4gProjectUiController.ProjectUIController(_this, _this.projectController);
    _this.layerLoader = new _c4gMissingLayerLoader.LayerLoader(_this);
    _this.cacheController = null;
    // this.elementController = null;
    _this.elementUiController = null;
    if (window.c4gMapsHooks.extend_editor && window.c4gMapsHooks.extend_editor.length) {
      _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.extend_editor, { editor: _this, utils: _c4gMapsUtils.utils });
    }
    if (_this.options.dataField && typeof _this.options.dataField === 'string') {
      _this.options.dataField = $(_this.options.dataField) || false;
    }
    return _this;
  }

  _createClass(Editor, [{
    key: "init",


    /**
     * Methods
     */

    /**
     * Executed when the editor will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    value: function init(opt_externalinit) {
      var scope = this;
      this.spinner.show();

      this.editLayerGroup = new ol.layer.Group({
        layers: new ol.Collection([]),
        visible: false
      });
      var configId = this.options.mapController.data.feEditorProfile;
      // load editor configuration
      var url = "con4gis/editorService/" + configId;
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
        scope.selectView = new _c4gEditorSelectview.EditorSelectView({ editor: scope });
        scope.drawStyles = data.drawStyles;
        // fetch missing styles
        scope.tabs.push(scope.selectView.init());
        scope.loadLocationStyles(scope.drawStyles, function () {
          // and create draw views
          scope.createDrawViews(scope.drawStyles);
        });
        scope.elementController = new _c4gElementController.ElementController(scope.selectView.selectInteraction, scope, scope.mapsInterface);
        scope.elementUiController = new _c4gElementUiController.ElementUIController(scope, scope.selectView.selectInteraction, scope.elementController);
        scope.selectView.selectInteraction.elementUiController = scope.elementUiController;
        scope.cacheController = new _c4gProjectCacheController.ProjectCacheController(scope);
        // initially select first project
        // scope.projectUiController.changeProjectSelection(scope.projectController.projects[0]);
        scope.loadFromCache();
        window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
        window.c4gMapsHooks.baselayer_changed.push(function (id) {
          scope.cacheController.saveSettingsForProject(scope.currentProject.id, "baselayer", id);
        });
      }).fail(function (data) {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the editor configuration...');
        window.alert("Bitte melden Sie sich zur Nutzung des Editors an.");
        console.error(data.responseText);
        scope.close();
        return false;
      }).always(function () {
        scope.spinner.hide();
      });
      if (opt_externalinit) {
        this.initialized = true;
      }

      return true;
    }
  }, {
    key: "createDrawViews",
    value: function createDrawViews(drawStyles) {
      // Draw-point view
      if (drawStyles.point.categories && drawStyles.point.categories.length > 0) {
        var pointView = new _c4gEditorDrawview.EditorDrawview('Point', drawStyles.point.categories, this);
        this.tabs.push(pointView.init());
      }
      // Draw-line view
      if (drawStyles.linestring.categories && drawStyles.linestring.categories.length > 0) {
        var lineView = new _c4gEditorDrawview.EditorDrawview('LineString', drawStyles.linestring.categories, this);
        this.tabs.push(lineView.init());
      }
      // Draw-polygon view
      if (drawStyles.polygon.categories && drawStyles.polygon.categories.length > 0) {
        var polygonView = new _c4gEditorDrawview.EditorDrawview('Polygon', drawStyles.polygon.categories, this);
        this.tabs.push(polygonView.init());
      }
      // Draw-circle view
      if (drawStyles.circle.categories && drawStyles.circle.categories.length > 0) {
        var circleView = new _c4gEditorDrawview.EditorDrawview('Circle', drawStyles.circle.categories, this);
        this.tabs.push(circleView.init());
      }
      // Draw-freehand view
      if (drawStyles.freehand.categories && drawStyles.freehand.categories.length > 0) {
        var freehandView = new _c4gEditorDrawview.EditorDrawview('Freehand', drawStyles.freehand.categories, this);
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

  }, {
    key: "loadFromCache",
    value: function loadFromCache() {
      var cachedSelection = this.cacheController.getSelectedProject();
      var selectedProject = null;
      // check if the project exists
      if (this.projectController.projects) {
        for (var i = 0; i < this.projectController.projects.length; i++) {
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

  }, {
    key: "preCloseFunction",
    value: function preCloseFunction() {
      if (this.editLayerGroup.getVisible()) {
        this.editLayerGroup.setVisible(false);
      }
      this.mapsInterface.proxy.activateClickObserver();
    }

    /**
     * Executed before editor will be open
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "preOpenFunction",
    value: function preOpenFunction() {
      if (!this.editLayerGroup.getVisible()) {
        this.editLayerGroup.setVisible(true);
      }
      this.mapsInterface.proxy.deactivateClickObserver();
    }
  }, {
    key: "loadLocationStyles",
    value: function loadLocationStyles(drawStyles, callback) {
      var styles = [];
      var existingStyles = this.mapsInterface.proxy.locationStyleController.arrLocStyles;
      for (var outerKey in drawStyles) {
        if (drawStyles.hasOwnProperty(outerKey)) {
          var drawStyle = drawStyles[outerKey];
          var categories = drawStyle.categories;
          for (var catKey in categories) {
            if (categories.hasOwnProperty(catKey)) {
              var category = categories[catKey];
              var elements = category.elements;
              for (var elemKey in elements) {
                if (elements.hasOwnProperty(elemKey)) {
                  var element = elements[elemKey];
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
        this.mapsInterface.proxy.locationStyleController.loadLocationStyles(styles, { done: callback });
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

  }, {
    key: "layerStyleFunction",
    value: function layerStyleFunction(feature, projection) {
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

  }, {
    key: "toggleDrawContent",
    value: function toggleDrawContent(opt_show) {
      var pointDiv = document.getElementsByClassName("c4g-draw-content-point")[0];
      var lineDiv = document.getElementsByClassName("c4g-draw-content-line")[0];
      var polygonDiv = document.getElementsByClassName("c4g-draw-content-polygon")[0];
      var circleDiv = document.getElementsByClassName("c4g-draw-content-circle")[0];
      var freehandDiv = document.getElementsByClassName("c4g-draw-content-freehand")[0];
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

  }, {
    key: "addLayersToGroup",
    value: function addLayersToGroup(layer, topLevel) {
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

  }, {
    key: "clearFeatureSelection",
    value: function clearFeatureSelection() {
      this.selectView.selectInteraction.selectInteraction.getFeatures().clear();
    }
  }]);

  return Editor;
}(_c4gMapsControlSideboard.Sideboard);

// replace normal editor with this


window.c4gMapsHooks = window.c4gMapsHooks || {};
window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
window.c4gMapsHooks.mapController_addControls.push(function (params) {
  var mapController = params.mapController;
  var mapData = mapController.data;
  // mapController.map.removeControl(mapController.controls.editor);
  var editor = new Editor({
    tipLabel: _c4gEditorI18n.langConstants.CTRL_EDITOR,
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

/***/ }),

/***/ "./Resources/public/js/c4g-element-controller.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-element-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gLayer = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-layer */ "../MapsBundle/Resources/public/js/c4g-layer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for handling the data manipulation.
 */
var ElementController = exports.ElementController = function () {

  /**
   * Constructor.
   * @param selectInteraction
   * @param editor
   * @param mapsInterface
   */
  function ElementController(selectInteraction, editor, mapsInterface) {
    _classCallCheck(this, ElementController);

    this.selectInteraction = selectInteraction;
    this.editor = editor;
    this.mapsInterface = mapsInterface;
  }

  /**
   * Class properties
   */


  _createClass(ElementController, [{
    key: "deleteElement",
    value: function deleteElement(feature) {
      var layerId = feature.get('layerId');
      var featureSource = this.editor.featureHandler.getSourceForLayerId(layerId);
      // remove Feature from the source
      featureSource.removeFeature(feature);
      // and from the selection
      this.selectInteraction.removeSelectedFeature(feature);
      // remove layer from layer structure
      var layer = this.mapsInterface.getLayerFromArray(layerId);
      this.checkParentsForDeletion(layer);
      this.mapsInterface.removeLayerFromArray(layerId);
      var projectId = this.editor.projectController.currentProject.id;
      // send delete request to server
      $.ajax(this.editor.dataBaseUrl + projectId + "/" + layerId, { method: "DELETE" });
      // rerender the selectionList
      this.selectInteraction.updateFeatures();
      this.editor.mapsInterface.updateStarboard();
    }

    /**
     * Checks the parents of the given layer. If their childs array is empty after deletion,
     * the parents will be deleted as well.
     * @param layer
     */

  }, {
    key: "checkParentsForDeletion",
    value: function checkParentsForDeletion(layer) {
      var pid = layer.pid;
      var layers = this.mapsInterface.getLayerArray();
      if (layers[pid]) {
        // the layer has a parent
        var parentLayer = layers[pid];
        if (parentLayer.childsCount === 1) {
          // parent layer would be empty after deletion
          if (layers[parentLayer.pid]) {
            this.checkParentsForDeletion(parentLayer);
          }
          this.mapsInterface.removeLayerFromArray(parentLayer.id);
        } else {
          for (var i = 0; i < parentLayer.childs.length; i++) {
            if (parentLayer.childs[i].id === layer.id) {
              // remove layer from parentLayer childs
              parentLayer.childs.splice(i, 1);
            }
          }
        }
      }
    }
  }, {
    key: "editElement",
    value: function editElement(data, feature) {
      var layer = this.editor.mapsInterface.getLayerFromArray(feature.get('layerId'));
      this.editor.featureHandler.updateLayer(data, layer, feature);
      this.selectInteraction.updateFeatures();
      this.editor.mapsInterface.updateStarboard();
    }
  }, {
    key: "copyElement",
    value: function copyElement(feature) {
      var scope = this;
      var layerId = feature.get('layerId');
      var url = "/con4gis/projectDataCopy/" + this.editor.projectController.currentProject.id + "/" + layerId;
      var request = new C4GAjaxRequest(url, "POST");
      request.addDoneCallback(function (data) {
        scope.selectInteraction.showNewLayer(data.layer, true);
      });
      request.execute();
    }
  }, {
    key: "displaceElement",
    value: function displaceElement(feature, layerId, withCopy, projectId) {
      var scope = this;
      var url = "";
      var oldLayer = this.mapsInterface.getLayerFromArray(layerId);
      var oldParent = this.mapsInterface.getLayerFromArray(oldLayer.pid);
      if (withCopy) {
        url = "/con4gis/projectDataDisplace/" + layerId + "/" + projectId + "/" + true;
      } else {
        url = "/con4gis/projectDataDisplace/" + layerId + "/" + projectId + "/" + false;
        // move layer
        for (var i = 0; i < oldParent.childs.length; i++) {
          if (oldParent.childs[i] === oldLayer) {
            oldParent.childs.splice(i, 1);
          }
        }
      }
      if (withCopy) {
        this.copyElement(feature);
      }
      var request = new C4GAjaxRequest(url, "POST");
      request.addDoneCallback(function (data) {
        var newProjectId = parseInt(data.newProjectId, 10);
        feature.set('projectId', newProjectId);
        // and from the selection
        scope.selectInteraction.removeSelectedFeature(feature);
        var layer = scope.editor.mapsInterface.getLayerFromArray(layerId);
        var newLayerId = data.id;
        var newPid = data.pid;
        layer.projectId = newProjectId;
        layer.id = newLayerId;
        layer.content[0].id = parseInt(newLayerId, 10);
        layer.pid = newPid;
        var fnCallback = function fnCallback(parent) {
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
          var parent = scope.editor.mapsInterface.getLayerFromArray(newPid);
          fnCallback(parent);
        }
      });
      request.execute();
    }
  }, {
    key: "rotateElement",
    value: function rotateElement(feature, degrees) {
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
  }, {
    key: "deselectElement",
    value: function deselectElement(feature, noUpdate) {
      this.selectInteraction.removeSelectedFeature(feature);
      if (!noUpdate) {
        this.selectInteraction.updateFeatures();
      }
    }
  }, {
    key: "revertElement",
    value: function revertElement(feature) {
      var scope = this;
      var layerId = feature.get('layerId');
      var layer = this.mapsInterface.getLayerFromArray(layerId);
      $.ajax('/con4gis/element/revert/' + layerId, { method: 'PUT' }).done(function (data) {
        scope.editor.mapsInterface.removeLayerFromArray(layer.id);
        scope.editor.featureHandler.updateLayer(data, layer, feature, true);
        scope.editor.mapsInterface.proxy.layerController.showLayer(layer.id);
      });
    }
  }]);

  return ElementController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-element-ui-controller.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-element-ui-controller.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementUIController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

var _c4gLayer = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-layer */ "../MapsBundle/Resources/public/js/c4g-layer.js");

var _c4gEditorI18n = __webpack_require__(/*! ./c4g-editor-i18n */ "./Resources/public/js/c4g-editor-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for creating all view elements that interact with elements.
 */
var ElementUIController = exports.ElementUIController = function () {
  function ElementUIController(editor, selectInteraction, elementController) {
    _classCallCheck(this, ElementUIController);

    this._editor = editor;
    this._selectInteraction = selectInteraction;
    this._elementController = editor.elementController;
  }

  /**
   * Creates the button that triggers the move interaction of the feature.
   */


  _createClass(ElementUIController, [{
    key: "createMoveButton",
    value: function createMoveButton(index) {
      var scope = this;
      var modifyButtonElement = document.createElement('button');
      modifyButtonElement.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.EDITOR_FEATURE_MODIFY;
      modifyButtonElement.title = _c4gEditorI18n.langConstants.EDITOR_FEATURE_MODIFY;
      modifyButtonElement.setAttribute('feat_id', index);
      $(modifyButtonElement).click(function (event) {
        scope.modifyFeatureFunction(event);
      });
      return modifyButtonElement;
    }
  }, {
    key: "modifyFeatureFunction",
    value: function modifyFeatureFunction(event) {
      var modifyFeature = void 0,
          featureGeometry = void 0,
          translateInteraction = void 0,
          modifyInteraction = void 0,
          modifyButton = void 0,
          applyButton = void 0;

      var editor = this.editor;
      var scope = this;
      var selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
      modifyButton = event.target;
      // get feature that should be modified
      modifyFeature = selectedFeatures.item(modifyButton.getAttribute('feat_id'));
      if (!modifyFeature || typeof modifyFeature.getGeometry !== 'function') {
        return false;
      }
      featureGeometry = modifyFeature.getGeometry();
      modifyInteraction = false;
      // add interactions to map
      if (!(featureGeometry instanceof ol.geom.Point)) {
        modifyInteraction = new ol.interaction.Modify({
          features: new ol.Collection([modifyFeature])
        });
        scope.editor.options.mapController.map.addInteraction(modifyInteraction);
      }
      this.selectInteraction.selectInteraction.setActive(false);
      // add apply button
      applyButton = document.createElement('button');
      applyButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.EDITOR_FEATURE_APPLY;
      applyButton.title = _c4gEditorI18n.langConstants.EDITOR_FEATURE_APPLY;
      applyButton.setAttribute('feat_id', modifyButton.getAttribute('feat_id'));
      $(applyButton).click(function (event) {
        scope.applyFeatureModification(translateInteraction, modifyInteraction, modifyFeature, modifyButton, applyButton);
      });
      modifyButton = modifyButton.parentNode.replaceChild(applyButton, modifyButton);
    } // end of "modifyFeatureFunction()"


  }, {
    key: "applyFeatureModification",
    value: function applyFeatureModification(translateInteraction, modifyInteraction, modifyFeature, modifyButton, applyButton) {
      var change = {};
      var scope = this;
      var editor = this.editor;
      if (modifyInteraction) {
        // modify interaction for point geometries
        editor.options.mapController.map.removeInteraction(modifyInteraction);
        modifyInteraction.setActive(false);
        modifyInteraction = false;
        if (modifyFeature.getGeometry() instanceof ol.geom.Point) {
          var coordinates = ol.proj.toLonLat(modifyFeature.getGeometry().getCoordinates());
          change['locgeox'] = coordinates[0];
          change['locgeoy'] = coordinates[1];
        } else if (modifyFeature.getGeometry() instanceof ol.geom.Circle) {
          var _coordinates = ol.proj.toLonLat(modifyFeature.getGeometry().getCenter());
          change['locgeox'] = _coordinates[0];
          change['locgeoy'] = _coordinates[1];
          change['radius'] = modifyFeature.getGeometry().getRadius();
        } else {
          var geoJson = new ol.format.GeoJSON();
          change['geojson'] = geoJson.writeFeature(modifyFeature);
        }
      }
      // update feature measurements
      modifyFeature.set('measuredLength', _c4gMapsUtils.utils.measureGeometry(modifyFeature.getGeometry(), true));
      if (modifyFeature.getGeometry() instanceof ol.geom.Polygon) {
        modifyFeature.set('measuredArea', _c4gMapsUtils.utils.measureGeometry(modifyFeature.getGeometry()));
      }
      if (modifyFeature.getGeometry() instanceof ol.geom.Circle) {
        modifyFeature.set('measuredRadius', _c4gMapsUtils.utils.measureGeometry(modifyFeature.getGeometry()));
      }

      this.selectInteraction.selectInteraction.setActive(true);
      applyButton.parentNode.replaceChild(modifyButton, applyButton);
      scope.editor.applyFeatureModification = false;
      // call featurehandler
      scope.editor.featureHandler.modifyFeature(modifyFeature, change);
      // re-render list
      scope.selectInteraction.updateFeatures();
    }

    /**
     * Creates the button to delete a feature.
     */

  }, {
    key: "createDeleteButton",
    value: function createDeleteButton(index) {
      var scope = this;
      var deleteButtonElement = document.createElement('button');
      deleteButtonElement.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.EDITOR_FEATURE_DELETE;
      deleteButtonElement.title = _c4gEditorI18n.langConstants.EDITOR_FEATURE_DELETE;
      deleteButtonElement.setAttribute('feat_id', index);
      $(deleteButtonElement).click(function (event) {
        // scope.deleteFeature(event);
        scope.showDeleteDialog(event.target.getAttribute('feat_id'));
      });
      return deleteButtonElement;
    }
  }, {
    key: "showDeleteDialog",
    value: function showDeleteDialog(featureId) {
      var scope = this;
      var container = document.createElement("div");
      var deleteHintLabel = document.createElement("p");
      deleteHintLabel.innerText = _c4gEditorI18n.langConstants.EDITOR_FEATURE_DELETE_QUESTION;
      container.appendChild(deleteHintLabel);
      var confirmButton = document.createElement("button");
      $(confirmButton).addClass(_c4gMapsConstant.cssConstants.ICON + " c4g-editor-dialog-confirm");
      $(confirmButton).on('click', function (event) {
        scope.handleDeleteFeatureEvent(featureId);
      });
      container.appendChild(confirmButton);
      var cancelButton = document.createElement("button");
      $(cancelButton).addClass(_c4gMapsConstant.cssConstants.ICON + " c4g-editor-dialog-cancel");
      $(cancelButton).on('click', function (event) {
        scope.reloadSelectedFeatureView();
      });
      container.appendChild(cancelButton);
      this.addToEditor(container);
    }
  }, {
    key: "handleDeleteFeatureEvent",
    value: function handleDeleteFeatureEvent(featureIndex) {
      var selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
      var deleteFeature = selectedFeatures.item(featureIndex);
      this._elementController.deleteElement(deleteFeature);
    }

    /**
     * Creates the button to edit a feature.
     */

  }, {
    key: "createEditButton",
    value: function createEditButton(index) {
      var scope = this;
      var editButtonElement = document.createElement('button');
      editButtonElement.className = _c4gMapsConstant.cssConstants.ICON + ' c4g-btn-edit-data';
      editButtonElement.title = _c4gEditorI18n.langConstants.METADATA_EDIT;
      editButtonElement.setAttribute('feat_id', index);
      $(editButtonElement).click(function (event) {
        scope.handleEditFeatureEvent(event);
      });
      return editButtonElement;
    }
  }, {
    key: "handleEditFeatureEvent",
    value: function handleEditFeatureEvent(event) {
      var scope = this;
      var selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
      var feature = selectedFeatures.item(event.target.getAttribute('feat_id'));
      var layerId = feature.get('layerId');
      var url = "/con4gis/projectDataForm/" + this.editor.projectController.currentProject.id + "/" + layerId;
      var request = new C4GAjaxRequest(url);
      request.addDoneCallback(function (data) {
        scope.showEditDataDialog(data.headline, data.form, url, feature);
      });
      request.execute();
    }
  }, {
    key: "showEditDataDialog",
    value: function showEditDataDialog(headline, form, url, feature) {
      var scope = this;
      var container = document.createElement("div");
      container.innerHTML = form;
      // update view
      if (this.editor.selectView.selectContentHeadline) {
        this.editor.selectView.selectContentHeadline.innerHTML = headline;
      }
      this.addToEditor(container, true);
      // set click listener
      jQuery(document.getElementById("send-dialog")).on('click', function (event) {
        var request = new C4GAjaxRequest(url, "POST");
        var fields = container.getElementsByClassName('formdata');
        var data = {};
        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
          // if label is changed, update it in the feature
          if (field.id === "c4g_loc_label") {
            feature.set('label', field.value);
          }
          data[field.id.replace("c4g_", "")] = field.value.trim();
          if (field.type === "checkbox") {
            if (field.checked) {
              data[field.id.replace("c4g_", "")] = 1;
            }
          }
        }
        request.addRequestData(data);
        request.addDoneCallback(function (data) {
          // check if there was an error
          if (data.errorString) {
            // show the error above the form
            var label = document.createElement("span");
            label.classList.add("c4g-edit-data-error-label");
            label.innerHTML = data.errorString;
            scope.editor.selectView.selectContent.prepend(label);
          } else {
            // get the layer that contains the feature
            scope.elementController.editElement(data, feature);
          }
        });
        request.execute();
      });
      jQuery(document.getElementById("cancel-dialog")).on("click", function (event) {
        scope.reloadSelectedFeatureView();
      });
    }

    /**
     * Creates the button to copy a feature.
     */

  }, {
    key: "createCopyButton",
    value: function createCopyButton(index) {
      var scope = this;
      var copyButtonElement = document.createElement('button');
      copyButtonElement.className = _c4gMapsConstant.cssConstants.ICON + ' ' + ' c4g-btn-duplicate-data';
      copyButtonElement.title = _c4gEditorI18n.langConstants.DUPLICATE_ELEMENT;
      copyButtonElement.setAttribute('feat_id', index);
      $(copyButtonElement).click(function (event) {
        scope.handleCopyFeatureEvent(event);
      });
      return copyButtonElement;
    }
  }, {
    key: "handleCopyFeatureEvent",
    value: function handleCopyFeatureEvent(event) {
      var scope = this;
      var selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
      var feature = selectedFeatures.item(event.target.getAttribute('feat_id'));
      this.elementController.copyElement(feature);
      scope.editor.spinner.show();
    }

    /**
     * Creates the button to displace a feature.
     */

  }, {
    key: "createDisplaceButton",
    value: function createDisplaceButton(index) {
      var scope = this;
      var displaceButtonElement = document.createElement('button');
      displaceButtonElement.className = _c4gMapsConstant.cssConstants.ICON + ' ' + ' c4g-btn-displace-data';
      displaceButtonElement.title = _c4gEditorI18n.langConstants.DISPLACE_ELEMENT;
      displaceButtonElement.setAttribute('feat_id', index);
      $(displaceButtonElement).click(function (event) {
        scope.handleDisplaceFeatureEvent(event, false);
      });
      return displaceButtonElement;
    }
  }, {
    key: "handleDisplaceFeatureEvent",
    value: function handleDisplaceFeatureEvent(event, opt_copy) {
      var scope = this;
      var selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
      var feature = selectedFeatures.item(event.target.getAttribute('feat_id'));
      var layerId = feature.get('layerId');
      var projectSelect = this.createProjectSelectionForDisplace();
      var withCopy = opt_copy;
      var formContainer = document.createElement("div");
      // create buttons
      var confirmButton = document.createElement("button");
      confirmButton.className = "c4g-editor-dialog-confirm";
      confirmButton.title = "Bestätigen";
      var cancelButton = document.createElement("button");
      cancelButton.className = "c4g-editor-dialog-cancel";
      cancelButton.title = "Abbrechen";
      // clear selectContent
      $(cancelButton).on('click', function (event) {
        scope.reloadSelectedFeatureView();
      });
      $(confirmButton).on('click', function (event) {
        scope.elementController.displaceElement(feature, layerId, withCopy, projectSelect.value);
      });
      formContainer.appendChild(projectSelect);
      formContainer.appendChild(confirmButton);
      formContainer.appendChild(cancelButton);
      scope.addToEditor(formContainer);
    }

    /**
     * Creates the button to copy and displace a feature.
     */

  }, {
    key: "createCopyAndDisplaceButton",
    value: function createCopyAndDisplaceButton(index) {
      var scope = this;
      var copyDisplaceButton = document.createElement('button');
      copyDisplaceButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + ' c4g-btn-duplicate-displace-data';
      copyDisplaceButton.title = _c4gEditorI18n.langConstants.DUPLICATE_AND_DELETE;
      copyDisplaceButton.setAttribute('feat_id', index);
      $(copyDisplaceButton).click(function (event) {
        scope.handleDisplaceFeatureEvent(event, true);
      });
      return copyDisplaceButton;
    }
  }, {
    key: "createRotateButton",
    value: function createRotateButton(index) {
      var scope = this;
      var displaceButtonElement = document.createElement('button');
      displaceButtonElement.className = _c4gMapsConstant.cssConstants.ICON + ' ' + ' c4g-btn-rotate-data';
      displaceButtonElement.title = _c4gEditorI18n.langConstants.ROTATE_ELEMENT;
      displaceButtonElement.setAttribute('feat_id', index);
      $(displaceButtonElement).click(function (event) {
        scope.showRotationControls(event, false);
      });
      return displaceButtonElement;
    }
  }, {
    key: "showRotationControls",
    value: function showRotationControls(event) {
      var scope = this;
      var selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
      var feature = selectedFeatures.item(event.target.getAttribute('feat_id'));
      var controlContainer = document.createElement('div');
      var degreeSelect = document.createElement('select');
      var applyButton = document.createElement('button');
      for (var i = 30; i <= 360; i += 30) {
        var option = document.createElement('option');
        option.value = i;
        option.text = i + '°';
        degreeSelect.options.add(option);
      }
      $(applyButton).on('click', function (event) {
        scope.elementController.rotateElement(feature, $(degreeSelect).val());
      });
      controlContainer.appendChild(degreeSelect);
      controlContainer.appendChild(applyButton);
      this.addToEditor(controlContainer);
    }
  }, {
    key: "createDeselectButton",
    value: function createDeselectButton(index) {
      var scope = this;
      var deselectButton = document.createElement('button');
      deselectButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + ' c4g-btn-deselect-data';
      deselectButton.title = _c4gEditorI18n.langConstants.DESELECT_ELEMENT;
      deselectButton.setAttribute('feat_id', index);
      $(deselectButton).click(function (event) {
        scope.elementController.deselectElement(scope.selectInteraction.selectInteraction.getFeatures().item(event.target.getAttribute('feat_id')));
      });
      return deselectButton;
    }
  }, {
    key: "createRevertButton",
    value: function createRevertButton(index) {
      var scope = this;
      var revertButton = document.createElement('button');
      revertButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + ' c4g-btn-revert-data';
      revertButton.title = _c4gEditorI18n.langConstants.REVERT_ELEMENT;
      revertButton.setAttribute('feat_id', index);
      $(revertButton).click(function (event) {
        scope.elementController.revertElement(scope.selectInteraction.selectInteraction.getFeatures().item(event.target.getAttribute('feat_id')));
      });
      return revertButton;
    }
  }, {
    key: "createProjectSelectionForDisplace",
    value: function createProjectSelectionForDisplace() {
      var scope = this;
      var projectSelect = document.createElement("select");
      var projects = scope.editor.projectController.projects;
      for (var i = 0; i < projects.length; i++) {
        if (projects[i] === scope.editor.projectController.currentProject) {
          // moving the feature in the same project does not make sense
          continue;
        }
        var currentProject = projects[i];
        var option = document.createElement('option');
        option.value = currentProject.id;
        option.text = currentProject.name;
        projectSelect.options.add(option);
      }
      return projectSelect;
    }

    /**
     * Reloads the overview of the selected features and the possible operations.
     */

  }, {
    key: "reloadSelectedFeatureView",
    value: function reloadSelectedFeatureView() {
      this.selectInteraction.updateFeatures();
    }

    /**
     * Appends a given container to the editor selectContent container.
     * @param container
     * @param clear
     */

  }, {
    key: "addToEditor",
    value: function addToEditor(container) {
      var clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (clear) {
        this.selectInteraction.selectView.selectContent.innerHTML = "";
      }
      this.selectInteraction.selectView.selectContent.appendChild(container);
    }
  }, {
    key: "editor",
    get: function get() {
      return this._editor;
    }
  }, {
    key: "selectInteraction",
    get: function get() {
      return this._selectInteraction;
    }
  }, {
    key: "elementController",
    get: function get() {
      return this._elementController;
    }
  }]);

  return ElementUIController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-missing-layer-loader.js":
/*!*********************************************************!*\
  !*** ./Resources/public/js/c4g-missing-layer-loader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerLoader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gLayer = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-layer */ "../MapsBundle/Resources/public/js/c4g-layer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Loads missing resources when they are needed after the use of the application, e.g. layers for certain elements.
 */
var LayerLoader = exports.LayerLoader = function () {
  function LayerLoader(editor) {
    _classCallCheck(this, LayerLoader);

    this.editor = editor;
  }

  /**
   * Requests the layer for the given element from the server and adds it to the layer structure.
   * @param feature   The copied feature
   * @param layer     The copied layer
   * @param projectId The destination project id
   */


  _createClass(LayerLoader, [{
    key: "getElementLayer",
    value: function getElementLayer(feature, layer, projectId, opt_callback) {
      var scope = this;
      var layerId = layer.id;
      var request = new C4GAjaxRequest("/con4gis/elements/layer/" + layerId + "/" + projectId);
      request.addDoneCallback(function (data) {
        if (data.layer) {
          var elemLayer = new _c4gLayer.C4gLayer(data.layer);
          layer.pid = elemLayer.id;
          var fnAddLayer = function fnAddLayer(layer, layerId) {
            scope.editor.mapsInterface.addToLayerArray(layer);
            var index = scope.editor.mapsInterface.proxy.layerIds.indexOf(layerId);
            scope.editor.mapsInterface.insertIntoLayerIds(layer.id, index - 1);
          };
          if (!scope.editor.mapsInterface.getLayerFromArray(elemLayer.pid)) {
            // category layer does not exist either
            scope.getCategoryLayer(layerId, projectId, fnAddLayer, elemLayer);
          } else {
            fnAddLayer(elemLayer, layerId);
            var catLayer = scope.editor.mapsInterface.getLayerFromArray(elemLayer.pid);
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

  }, {
    key: "getCategoryLayer",
    value: function getCategoryLayer(layerId, projectId, callable, param) {
      var scope = this;
      var mapId = this.editor.options.mapController.data.mapId;
      var request = new C4GAjaxRequest("/con4gis/categories/layer/" + layerId + "/" + projectId + "/" + mapId);
      request.addDoneCallback(function (data) {
        if (data.layer) {
          var catLayer = new _c4gLayer.C4gLayer(data.layer);
          scope.editor.mapsInterface.addToLayerArray(catLayer);
          var index = scope.editor.mapsInterface.proxy.layerIds.indexOf(layerId);
          scope.editor.mapsInterface.insertIntoLayerIds(catLayer.id, index - 2);
          scope.editor.mapsInterface.addToLayerIds(catLayer.id);
          // concat empty string in case the id is an integer
          scope.editor.mapsInterface.proxy.activeLayerIds[catLayer.id + ''] = catLayer.id + '';
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
  }]);

  return LayerLoader;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-project-cache-controller.js":
/*!*************************************************************!*\
  !*** ./Resources/public/js/c4g-project-cache-controller.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectCacheController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProjectCacheController = exports.ProjectCacheController = function () {
  function ProjectCacheController(editor) {
    _classCallCheck(this, ProjectCacheController);

    this.editor = editor;
    this.objCache = {};
    this.objCache.selectedProject = 0;
    this.objCache.projectStores = {};
    this.setup();
  }

  // TODO cache baselayer selection

  /**
   * Performs an initial setup for the cache controller.
   */


  _createClass(ProjectCacheController, [{
    key: "setup",
    value: function setup() {
      this.registerCenterListener();
      this.loadCache();
    }

    /**
     * Updates the stored project selection.
     * @param projectId
     */

  }, {
    key: "setSelectedProject",
    value: function setSelectedProject(projectId) {
      this.objCache.selectedProject = projectId;
      this.saveCache();
    }

    /**
     * Returns the last cached selected project.
     */

  }, {
    key: "getSelectedProject",
    value: function getSelectedProject() {
      if (this.currentCache) {
        return this.currentCache.selectedProject;
      }
    }

    /**
     * Does a lookup in the cache object and returns the stored settings.
     * @param projectId
     */

  }, {
    key: "getSettingsForProject",
    value: function getSettingsForProject(projectId) {
      if (this.currentCache) {
        return this.currentCache.projectStores[projectId];
      }
    }

    /**
     * Registeres for the map_center-hook to store the current center of the map for the current project.
     */

  }, {
    key: "registerCenterListener",
    value: function registerCenterListener() {
      var scope = this;
      window.c4gMapsHooks = window.c4gMapsHooks || {};
      window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
      window.c4gMapsHooks.map_center_changed.push(function (center) {
        if (scope.editor.projectController.currentProject) {
          var id = scope.editor.projectController.currentProject.id;
          var arrCenter = [center[0], center[1]];
          scope.saveSettingsForProject(id, "mapCenter", arrCenter);
        }
      });
    }

    /**
     * Updates the cache object with the specified value at the specified key.
     * @param projectId
     * @param key
     * @param value
     */

  }, {
    key: "saveSettingsForProject",
    value: function saveSettingsForProject(projectId, key, value) {
      if (!this.objCache.projectStores[projectId]) {
        this.objCache.projectStores[projectId] = {};
      }
      this.objCache.projectStores[projectId][key] = value;
      this.saveCache();
    }

    /**
     * Saves the cache object to the browser cache.
     */

  }, {
    key: "saveCache",
    value: function saveCache() {
      _c4gMapsUtils.utils.storeValue('projectCache', JSON.stringify(this.objCache));
    }

    /**
     * Loads the cache object from the browser cache.
     */

  }, {
    key: "loadCache",
    value: function loadCache() {
      var cachedItem = _c4gMapsUtils.utils.getValue('projectCache');
      if (cachedItem) {
        this.fromCache = true;
        this.objCache = JSON.parse(cachedItem);
        // use currentCache property to serve the old cached data
        this.currentCache = jQuery.extend(true, {}, this.objCache);
      }
    }
  }]);

  return ProjectCacheController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-project-controller.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-project-controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gEditorProject = __webpack_require__(/*! ./c4g-editor-project */ "./Resources/public/js/c4g-editor-project.js");

var _c4gLayer = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-layer */ "../MapsBundle/Resources/public/js/c4g-layer.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProjectController = exports.ProjectController = function () {

  /**
   * Class properties
   */
  function ProjectController(editor) {
    _classCallCheck(this, ProjectController);

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


  _createClass(ProjectController, [{
    key: "getProjectById",
    value: function getProjectById(id) {
      for (var i = 0; i < this.projects.length; i++) {
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

  }, {
    key: "createProjects",
    value: function createProjects(jsonProjects) {
      for (var i = 0; i < jsonProjects.length; i++) {
        this.projects.push(new _c4gEditorProject.EditorProject(jsonProjects[i].id, jsonProjects[i].name));
      }
    }

    /**
     * Changes the currently selected project.
     * @param newProject
     */

  }, {
    key: "selectProject",
    value: function selectProject(newProject) {
      this._currentProject = newProject;
      // load project layers into editLayerGroup
      // remove old project layers from editLayerGroup
      var layers = this.editor.mapsInterface.getLayerArray();
      var features = [];
      for (var key in layers) {
        if (layers.hasOwnProperty(key)) {
          var layer = layers[key];
          if (layer.projectId === newProject.id) {
            // add all vectorlayers from childs of layer to editLayerGroup
            this.editor.addLayersToGroup(layer, true);
            // show layer when it is in the project
            this.editor.mapsInterface.showLayer(layer.id);
            var source = this.editor.featureHandler.getSourceForLayerId(layer.id);
            if (source) {
              source.forEachFeature(function (feature) {
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

      _c4gMapsUtils.utils.fitToExtent(_c4gMapsUtils.utils.getExtentForGeometries(features), this.editor.options.mapController.map);
      // TODO fit view to feature extent
    }

    /**
     * Applies the given changes to the given project.
     * @param projectId
     * @param changes
     */

  }, {
    key: "editProject",
    value: function editProject(projectId, changes) {
      var project = this.getProjectById(projectId);
      if (project) {
        for (var key in changes) {
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

  }, {
    key: "deleteProject",
    value: function deleteProject(project) {
      var scope = this;
      $.ajax('con4gis/project', {
        method: 'DELETE',
        data: {
          id: project.id
        }
      }).done(function (data) {
        if (data.success) {
          // delete project layers and reload starboard
          for (var i = 0; i < scope._projects.length; i++) {
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

  }, {
    key: "createProject",
    value: function createProject(projectData, callback) {
      var url = "con4gis/project/";
      $.ajax(url, { method: "POST", data: projectData }).done(function (data) {
        callback(data);
      });
    }

    /**
     * Adds a new project to the data structures.
     * @param data
     */

  }, {
    key: "addNewProject",
    value: function addNewProject(data) {
      // create new project object
      this._projects.push(new _c4gEditorProject.EditorProject(data.id, data.name));
      var projectLayer = new _c4gLayer.C4gLayer(data.projectLayer);
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

  }, {
    key: "deleteLayersForProject",
    value: function deleteLayersForProject(projectId) {
      var starboard = this.editor.mapsInterface.getStarboard();
      var layers = this.editor.mapsInterface.getLayerArray();
      for (var key in layers) {
        if (layers.hasOwnProperty(key)) {
          var layer = layers[key];
          // delete all layers that belong to the project
          if (layer.projectId === projectId) {
            var tabId = layer.tabId;
            if (starboard.initialized) {
              var tab = starboard.plugins["customTab" + tabId];
              var tabLayers = tab.layers;
              // delete layer from starboard, has the same key as in arrLayers
              delete tabLayers[key];
            }
            // delete features for layer
            if (layer.vectorLayer) {
              var source = this.editor.featureHandler.getSourceForLayerId(layer.id);
              if (source) {
                source.clear();
              }
            }
            // delete layer from arrLayers
            this.editor.mapsInterface.removeLayerFromArray(key);
            // check if the layer is listed as child in other layers
            if (layer.pid && layers[layer.pid]) {
              var parentLayer = layers[layer.pid];
              for (var i = 0; i < parentLayer.childs.length; i++) {
                var currentChild = parentLayer.childs[i];
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
  }, {
    key: "editor",
    get: function get() {
      return this._editor;
    }
  }, {
    key: "currentProject",
    get: function get() {
      return this._currentProject;
    },
    set: function set(value) {
      this._currentProject = value;
    }
  }, {
    key: "projects",
    get: function get() {
      return this._projects;
    }
  }, {
    key: "projectLayer",
    get: function get() {
      return this._projectLayer;
    },
    set: function set(value) {
      this._projectLayer = value;
    }
  }]);

  return ProjectController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-project-ui-controller.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-project-ui-controller.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectUIController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _c4gLayer = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-layer */ "../MapsBundle/Resources/public/js/c4g-layer.js");

var _c4gEditorI18n = __webpack_require__(/*! ./c4g-editor-i18n */ "./Resources/public/js/c4g-editor-i18n.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for creating all view elements that interact with a project. Handles all events that are fired on these view
 * elements.
 */
var ProjectUIController = exports.ProjectUIController = function () {

  /**
   * Class properties
   */
  function ProjectUIController(editor, projectController) {
    _classCallCheck(this, ProjectUIController);

    this._projectButtons = [];
    this._projectSelector = null;
    this._editor = editor;
    this._projectController = projectController;
  }

  /**
   * Creates and returns a button for editing a project. Attaches the click listener to the button.
   */


  _createClass(ProjectUIController, [{
    key: "createEditProjectButton",
    value: function createEditProjectButton() {
      var scope = this;
      var button = document.createElement("button");
      $(button).on('click', function (event) {
        scope.clearFeatureSelection();
        $(this).addClass("c4g-active");
        scope.projectButtons.forEach(function (element) {
          if (element !== this) {
            $(element).removeClass("c4g-active");
          }
        });
        scope.createEditProjectForm();
      });
      button.className = "c4g-project-edit";
      button.title = "Projekt bearbeiten";
      this.projectButtons.push(button);
      return button;
    }

    /**
     * Loads the project-edit form from the server and displays it in the editor.
     */

  }, {
    key: "createEditProjectForm",
    value: function createEditProjectForm() {
      var editor = this.editor;
      // do nothing if no project is selected
      if (!this.projectController.currentProject) {
        return;
      }
      var scope = this;
      var project = this.projectController.currentProject;
      var request = new C4GAjaxRequest("con4gis/projectForm/" + project.id, "GET");
      request.addDoneCallback(function (data) {
        // show dialog in first tab
        editor.tabs[0].activate();
        var formContainer = document.createElement("div");
        formContainer.innerHTML = data.form;
        // create buttons
        var confirmButton = document.createElement("button");
        confirmButton.className = "c4g-editor-dialog-confirm";
        confirmButton.title = "Bestätigen";
        var cancelButton = document.createElement("button");
        cancelButton.className = "c4g-editor-dialog-cancel";
        cancelButton.title = "Abbrechen";
        // clear selectContent
        $(cancelButton).on('click', function (event) {
          scope.cancelDialog();
        });
        $(confirmButton).on('click', function (event) {
          scope.editProject(formContainer, project);
        });
        formContainer.appendChild(confirmButton);
        formContainer.appendChild(cancelButton);
        editor.contentHeadline.innerHTML = "Projekt bearbeiten";
        editor.selectView.selectContent.innerHTML = "";
        editor.selectView.selectContent.appendChild(formContainer);
      });
      request.execute();
    }

    /**
     * Sends the project-edit request to the server and handles the response.
     */

  }, {
    key: "editProject",
    value: function editProject(container, project) {
      var scope = this;
      var request = new C4GAjaxRequest("con4gis/projectForm/" + project.id, "POST");
      // get data
      var data = {};
      var fields = container.getElementsByClassName('formdata');
      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field.id === "c4g_loc_label") {
          feature.set('label', field.value);
        }
        data[field.id.replace("c4g_", "")] = field.value.trim();
        if (field.type === "checkbox") {
          if (field.checked) {
            data[field.id.replace("c4g_", "")] = 1;
          }
        }
      }

      request.addRequestData(data);
      request.addDoneCallback(function (data) {
        if (data.errorString) {
          // show the error above the form
          var label = document.createElement("span");
          label.classList.add("c4g-edit-project-error-label");
          label.innerHTML = data.errorString;
          scope.editor.selectView.selectContent.prepend(label);
        } else {
          scope.editor.selectView.reloadHelpContent();
          scope.projectController.editProject(project.id, data);
          for (var _i = 0; _i < scope.projectSelector.options.length; _i++) {
            if (parseInt(scope.projectSelector.options[_i].value, 10) === project.id) {
              scope.projectSelector.options[_i].innerHTML = data.caption;
            }
          }
        }
      });
      request.execute();
    }

    /**
     * Creates and returns a button for deleting a project. Attaches the click listener to the button. Shows confirm dialog.
     */

  }, {
    key: "createDeleteProjectButton",
    value: function createDeleteProjectButton() {
      var scope = this;
      var button = document.createElement("button");
      button.className = "c4g-project-delete";
      $(button).on("click", function (event) {
        scope.clearFeatureSelection();
        $(this).addClass("c4g-active");
        scope.projectButtons.forEach(function (element) {
          if (element !== this) {
            $(element).removeClass("c4g-active");
          }
        });
        scope.createDeleteProjectForm();
      });
      button.title = "Projekt löschen";
      this.projectButtons.push(button);
      return button;
    }
  }, {
    key: "createDeleteProjectForm",
    value: function createDeleteProjectForm() {
      var editor = this.editor;
      var scope = this;
      if (!this.projectController.currentProject) {
        return;
      }
      // show confirm dialog
      var confirmForm = document.createElement("div");
      confirmForm.innerHTML = "Wollen Sie dieses Projekt wirklich löschen?";
      var confirmButton = document.createElement("button");
      confirmButton.className = "c4g-editor-dialog-confirm";
      confirmButton.title = "Bestätigen";
      var cancelButton = document.createElement("button");
      cancelButton.className = "c4g-editor-dialog-cancel";
      cancelButton.title = "Abbrechen";
      // clear selectContent

      $(cancelButton).on('click', function (event) {
        scope.cancelDialog();
      });
      $(confirmButton).on("click", function (event) {
        scope.deleteProject();
      });
      confirmForm.appendChild(confirmButton);
      confirmForm.appendChild(cancelButton);
      editor.tabs[0].activate();
      editor.contentHeadline.innerHTML = "Projekt löschen?";
      editor.selectView.selectContent.innerHTML = "";
      editor.selectView.selectContent.appendChild(confirmForm);
    }

    /**
     * Sends the project-delete request to the server and handles the response.
     */

  }, {
    key: "deleteProject",
    value: function deleteProject() {
      var project = this.projectController.currentProject;
      this.editor.selectView.reloadHelpContent();
      for (var i = 0; i < this.projectSelector.options.length; i++) {
        if (parseInt(this.projectSelector.options[i].value, 10) === project.id) {
          this.projectSelector.remove(this.projectSelector.options[i].index);
        }
      }
      this.projectController.deleteProject(project);
    }

    /**
     * Creates a selectbox with the selectable projects as options. Attaches an input listener to the selectbox.
     */

  }, {
    key: "createProjectSelect",
    value: function createProjectSelect() {
      var selectBox = void 0,
          option = void 0,
          scope = void 0,
          oldValue = void 0;

      scope = this;
      var projects = this.projectController.projects;
      selectBox = document.createElement('select');
      selectBox.id = 'c4g_projects_select';
      option = document.createElement('option');
      option.text = _c4gEditorI18n.langConstants.CHOOSE_PROJECT;
      option.value = "";
      option.disabled = true;
      option.selected = true;
      selectBox.options[0] = option;
      if (projects) {
        for (var key = 0; key < projects.length; key++) {
          option = document.createElement('option');
          option.text = projects[key].name;
          option.value = projects[key].id;
          selectBox.options[key + 1] = option;
        }
      }
      oldValue = selectBox.value;
      $(selectBox).on('change', function (event) {
        var currentVal = parseInt(this.value, 10);
        for (var i = 0; i < projects.length; i++) {
          if (projects[i].id === currentVal) {
            scope.changeProjectSelection(projects[i]);
            oldValue = currentVal;
            break;
          }
        }
      });
      this._projectSelector = selectBox;
      return selectBox;
    }

    /**
     * Event-Listener for the project selectbox. Handles the selection of a new project and updates the internal editor
     * structure as needed to reflect the change.
     */

  }, {
    key: "changeProjectSelection",
    value: function changeProjectSelection(newProject) {
      var editor = this.editor;
      this._projectController.selectProject(newProject);
      $(editor.viewTriggerBar).show();
      $(editor.contentHeadline).show();
      // cancel any running form on project change
      this.cancelDialog();
      editor.toggleDrawContent(true);
      // update views etc. if there is data cached for the selected project
      // TODO auslagern in setupEditorFromCache oder so ähnlich
      var cachedSettings = this.editor.cacheController.getSettingsForProject(newProject.id);
      if (cachedSettings) {
        // set map view when a cached center exists
        // const tmpView = editor.options.mapController.map.getView();
        // if (cachedSettings.mapCenter) {
        //   tmpView.setCenter(cachedSettings.mapCenter);
        //   editor.options.mapController.map.setView(tmpView);
        // }
        // if (cachedSettings.baselayer) {
        //   this.editor.options.mapController.proxy.baselayerController.showBaseLayer(cachedSettings.baselayer);
        // }
      }
      var projectOptions = this.projectSelector.options;
      for (var i = 0; i < projectOptions.length; i++) {
        if (parseInt(projectOptions[i].value, 10) === newProject.id) {
          this.projectSelector.options.selectedIndex = i;
        }
      }
      this.editor.cacheController.setSelectedProject(newProject.id);
    }

    /**
     * Creates and returns a button for creating a project. Attaches the click listener to the button.
     */

  }, {
    key: "createNewProjectButton",
    value: function createNewProjectButton() {
      var scope = this;
      var createButton = document.createElement('button');
      createButton.className = "c4g-project-create";
      // ".done" listener
      $(createButton).on('click', function (event) {
        scope.clearFeatureSelection();
        $(this).addClass("c4g-active");
        event.preventDefault();
        scope.projectButtons.forEach(function (element) {
          if (element !== this) {
            $(element).removeClass("c4g-active");
          }
        });
        scope.createNewProjectForm();
      });
      createButton.title = "Neues Projekt erstellen";
      this.projectButtons.push(createButton);
      return createButton;
    }

    /**
     * Loads the project-create form from the server and displays it in the editor.
     */

  }, {
    key: "createNewProjectForm",
    value: function createNewProjectForm() {
      var scope = this;
      var editor = this.editor;
      var url = '/con4gis/project/';
      $.ajax(url).done(function (data) {
        // activate tab with select view
        editor.tabs[0].activate();
        if (editor.selectView.selectContentHeadline) {
          editor.selectView.selectContentHeadline.innerHTML = data.headline;
        }
        editor.selectView.selectContent.innerHTML = data.form;
        $(document.getElementById("send-dialog")).on('click', function (event) {
          scope.createNewProject();
        });
        $(document.getElementById("cancel-dialog")).on("click", function (event) {
          scope.cancelDialog();
        });
      });
    }

    /**
     * Sends the project-create request to the server and handles the response.
     */

  }, {
    key: "createNewProject",
    value: function createNewProject() {
      var editor = this.editor;
      var fields = editor.selectView.selectContent.getElementsByClassName('formdata');
      var data = {};
      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        data[field.name] = field.value;
      }
      var scope = this;
      this._projectController.createProject(data, function (data) {
        scope.loadNewProject(data);
      });
    }

    /**
     * Loads a newly created project and changes the project selection to the created project.
     */

  }, {
    key: "loadNewProject",
    value: function loadNewProject(data) {
      var editor = this.editor;
      var name = data.name;
      var id = data.id;
      var newProject = { id: id, name: name };
      var option = document.createElement('option');
      this._projectController.addNewProject(data);
      option.text = name;
      option.value = id;
      option.selected = true;
      this.projectSelector.add(option);
      this.changeProjectSelection(newProject);
      editor.selectView.reloadHelpContent();
      editor.toggleDrawContent();
    }

    /**
     * Cancels an input form and restores the default content in the editor select view.
     */

  }, {
    key: "cancelDialog",
    value: function cancelDialog() {
      if (this.editor.selectView) {
        this.editor.selectView.reloadHelpContent();
        this.projectButtons.forEach(function (element) {
          $(element).removeClass("c4g-active");
        });
      }
    }

    /**
     * Creates a container for the UI buttons.
     */

  }, {
    key: "getButtonBar",
    value: function getButtonBar() {
      var projectDiv = document.createElement('div');
      projectDiv.className = 'c4g-projects-bar';
      projectDiv.appendChild(this.projectSelector);
      for (var i = 0; i < this.projectButtons.length; i++) {
        projectDiv.appendChild(this.projectButtons[i]);
      }
      return projectDiv;
    }

    /**
     * Unselects all currently selected features.
     */

  }, {
    key: "clearFeatureSelection",
    value: function clearFeatureSelection() {
      this.editor.clearFeatureSelection();
    }
  }, {
    key: "editor",
    get: function get() {
      return this._editor;
    }
  }, {
    key: "projectController",
    get: function get() {
      return this._projectController;
    }
  }, {
    key: "projectButtons",
    get: function get() {
      return this._projectButtons;
    }
  }, {
    key: "projectSelector",
    get: function get() {
      return this._projectSelector;
    }
  }]);

  return ProjectUIController;
}();

/***/ })

/******/ });
//# sourceMappingURL=c4g-editor.js.map