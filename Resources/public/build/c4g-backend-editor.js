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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/c4g-backend-editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js":
/*!**********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js ***!
  \**********************************************************************/
/*! exports provided: langConstantsGerman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langConstantsGerman", function() { return langConstantsGerman; });

/**
 * Language constants (en)
 */

var langConstantsGerman = {
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
/*! exports provided: langConstantsEnglish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langConstantsEnglish", function() { return langConstantsEnglish; });
/**
 * Language constants (en)
 */
var langConstantsEnglish = {
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
/*! exports provided: cssConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssConstants", function() { return cssConstants; });


var cssConstants = {
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
/*! exports provided: Sideboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sideboard", function() { return Sideboard; });
/* harmony import */ var _c4g_maps_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");
/* harmony import */ var _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var _c4g_maps_misc_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "../MapsBundle/Resources/public/js/c4g-maps-misc-spinner.js");
/* harmony import */ var _c4g_maps_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./c4g-maps-i18n */ "../MapsBundle/Resources/public/js/c4g-maps-i18n.js");




"use strict";
/**
 * Base class for sideboard structures. Provides standard configurations which are equal for each sideboard element.
 */


class Sideboard extends ol.control.Control {
  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              options  misc configuration options
   *
   */
  constructor(options) {
    super(options);
    this.options = $.extend({
      create: true,
      extDiv: false,
      defaultOpen: false,
      mapController: undefined,
      name: 'sideboard',
      direction: 'right'
    }, options); //active Identifier (which side is this element on?)
    //cssname needed to set the css class correctly

    switch (this.options.direction) {
      case 'left':
        this.identifier = 'Portside';
        this.cssname = 'portside';
        break;

      case 'right':
        this.identifier = 'Starboard';
        this.cssname = 'starboard';
        break;
    } //this.cssname = this.identifier.charAt(0).toLowerCase() + this.identifier.slice(1);


    this.initialized = false;
    this.options.tipLabel = this.options.tipLabel || this.options.headline || _c4g_maps_i18n__WEBPACK_IMPORTED_MODULE_3__["langConstants"].CTRL_SIDEBOARD;
    this.container = document.createElement('div');
    this.element = document.createElement('div');
    this.button = undefined;
    this.spinner = undefined; // mainstructure elements

    this.wrapper = undefined;
    this.titleBar = undefined;
    this.headline = undefined;
    this.topToolbar = undefined;
    this.contentContainer = undefined;
    this.bottomToolbar = undefined;
    this.statusBar = undefined;
    this.sections = [];
    this.viewTriggerBar = undefined;
    this.views = [];
    this.activeView = undefined;
    this.pausedView = undefined;

    if (this.options.create && this.options.mapController) {
      this.create();
    } // inheritance-stuff
    // ol.control.Control.call(this, {
    //   element: element,
    //   target: options.target
    // });

  }

  /**
   * Creates the basic html-elements for the sideboard
   *
   * @return  {boolean}  'true' on success
   */
  create() {
    var self, initClass, titleButtonBar, closeButton, capitalizedName, hideButton, caching;
    caching = this.options.caching;
    capitalizedName = _c4g_maps_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].capitalizeFirstLetter(this.options.name);
    self = this; // Do not hide when it is initialized open, or in an external div

    if (this.options.extDiv) {
      initClass = ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OPEN; // if (caching) {
      //     utils.storeValue(this.options.name, '1');
      // }
    } else {
      initClass = ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE; // if (caching) {
      //     utils.storeValue(this.options.name, '0');
      // }

      this.options.mapController["active" + this.identifier] = this.options.mapController["active" + this.identifier] || false;
      this.button = document.createElement('button');
      $(this.button).on('click', function (event) {
        event.stopPropagation(); // loose focus, otherwise it looks messy

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
    } // Set attributes


    $(this.container).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-container' + ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OL_UNSELECTABLE + initClass);
    $(this.element).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-control' + ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OL_UNSELECTABLE + ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OL_CONTROL + initClass); // Set initial dimensions

    if (this.options.direction === 'right') {
      //this.container.style.minWidth = '250px';
      //this.container.style[this.options.direction] = '-1920px';
      this.container.style[this.options.direction] = '-100%';
    } else {
      //this.container.style.minWidth = '250px';
      //this.container.style[this.options.direction] = '-1920px';
      this.container.style[this.options.direction] = '-100%';
    } // Place container


    if (this.options.extDiv) {
      document.getElementById(this.options.extDiv).appendChild(this.container); //     this.options.mapController["active" + this.identifier] = this;
    } else {
      if (this.options.direction === 'left') {
        $('#' + this.options.mapController.map.getTarget() + ' > div > div.' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OL_OVERLAYCONTAINER_SE).append(this.container);
      } else {
        this.options.mapController.$overlaycontainer_stopevent.append(this.container);
      }
    } // Build content-area
    //
    // Wrapper


    this.wrapper = document.createElement('div');
    this.wrapper.className = 'c4g-' + this.cssname + '-wrapper';
    this.container.appendChild(this.wrapper); // Titlebar

    this.titleBar = document.createElement('div');
    this.titleBar.className = 'c4g-' + this.cssname + '-titlebar';
    this.wrapper.appendChild(this.titleBar); // Triggerbar

    this.viewTriggerBar = document.createElement('div');
    this.viewTriggerBar.className = 'c4g-' + this.cssname + '-viewtriggerbar'; // Top-Toolbar

    this.topToolbar = this.addSection({
      className: 'c4g-' + this.cssname + '-top-toolbar',
      target: this.wrapper
    }); // Content-Container

    this.contentContainer = this.addSection({
      className: 'c4g-' + this.cssname + '-content-container',
      target: this.wrapper
    }); // add content headline

    this.contentHeadline = document.createElement('div');
    this.contentHeadline.className = 'contentHeadline';
    this.contentHeadline.innerHTML = '';
    this.contentContainer.appendChild(this.contentHeadline); // Bottom-Toolbar

    this.bottomToolbar = this.addSection({
      className: 'c4g-' + this.cssname + '-bottom-toolbar c4g-close',
      target: this.wrapper
    }); // Statusbar

    this.statusBar = document.createElement('div');
    this.statusBar.className = 'c4g-' + this.cssname + '-statusbar c4g-close';
    this.wrapper.appendChild(this.statusBar); // Add spinner

    this.spinner = new _c4g_maps_misc_spinner__WEBPACK_IMPORTED_MODULE_2__["Spinner"]({
      target: this.contentContainer,
      className: _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].LARGE
    }); // Fill titlebar
    //
    // Headline

    this.headline = document.createElement('span');
    this.headline.className = 'c4g-' + this.cssname + '-headline';
    this.headline.innerHTML = this.options.headline;
    this.titleBar.appendChild(this.headline); // Buttonbar

    titleButtonBar = document.createElement('div');
    titleButtonBar.className = _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CONTROL + ' ' + 'c4g-' + this.cssname + '-buttonbar';
    this.titleBar.appendChild(titleButtonBar);

    if (this.options.direction === 'left') {
      // Hidebutton
      hideButton = document.createElement('button');
      hideButton.className = _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].PORTSIDE_HIDE;
      hideButton.title = _c4g_maps_i18n__WEBPACK_IMPORTED_MODULE_3__["langConstants"].HIDE;
      $(hideButton).click(function (event) {
        event.preventDefault();
        self.close(true);
        return false;
      });
      titleButtonBar.appendChild(hideButton);
    } // Closebutton


    closeButton = document.createElement('button');
    closeButton.className = 'c4g-' + this.cssname + '-close';
    closeButton.title = _c4g_maps_i18n__WEBPACK_IMPORTED_MODULE_3__["langConstants"].CLOSE;
    $(closeButton).click(function (event) {
      event.preventDefault();
      self.close();
      return false;
    });
    titleButtonBar.appendChild(closeButton); //Add spinner for left sided sideboard elements

    this.spinner = new _c4g_maps_misc_spinner__WEBPACK_IMPORTED_MODULE_2__["Spinner"]({
      target: this.contentContainer,
      className: _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].LARGE
    }); // Handle external DIV and default state
    // catch touch events and stop their propagation
    // otherwise touch-scrolling will be stopped by ol3

    $(this.container).on('touchstart touchmove touchend', function (event) {
      event.stopPropagation();
    }); // Bind the update method to the map-resize event

    this.options.mapController.map.on('change:size', this.update, this); // Show open if desired

    if (this.options.defaultOpen || this.options.caching && _c4g_maps_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].getValue(this.options.name) == '1') {
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


  update(opt_event) {
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
    } // Top-Toolbar


    if (this.topToolbar) {
      if (this.topToolbar.innerHTML) {
        // this.topToolbar.style.display = 'block';
        this.topToolbar.style.display = '';
        contentContainerOuterHeight -= $(this.topToolbar).outerHeight(true);
      } else {
        this.topToolbar.style.display = 'none';
      }
    } // Bottom-toolbar


    if (this.bottomToolbar) {
      if (this.bottomToolbar.innerHTML) {
        // this.bottomToolbar.style.display = 'block';
        this.bottomToolbar.style.display = '';
        contentContainerOuterHeight -= $(this.bottomToolbar).outerHeight(true);
      } else {
        this.bottomToolbar.style.display = 'none';
      }
    } // Content-container


    $(this.contentContainer).outerHeight(contentContainerOuterHeight); // Correct width

    if (this.options) {
      if (this.options.mapController["active" + this.identifier] === this) {
        //this.container.style.width = 'auto';
        containerOffsetWidth = this.container.offsetWidth;
        this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
          $(element).css(self.options.direction, containerOffsetWidth);
        }); //only move the toggle button on starboard elements

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


  open(opt_options) {
    var containerOffsetWidth, self;
    self = this; // Call initialize-functions, if existent

    if (!this.initialized) {
      if (typeof this.init === 'function') {
        this.initialized = this.init(opt_options);
      } else {
        this.initialized = true;
      }
    } // call preOpenFunctions


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
        } //close other active sideboard on this side


        this.options.mapController["active" + this.identifier].close(true, true);
      } else {
        // slide other elements when no other sideboard was active on this side
        this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
          $(element).css(self.options.direction, containerOffsetWidth);
        });
      }

      $(this.container).removeClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE).addClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OPEN).css(this.options.direction, 0);

      if (this.options.direction === 'left') {
        $(this.element).removeClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE).addClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OPEN);
      } else {
        $(this.element).removeClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE).addClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OPEN).css(this.options.direction, containerOffsetWidth);
      } // set this as active Sideboard


      this.options.mapController["active" + this.identifier] = this; // check if a view needs to be reactivated

      if (this.activeView) {
        this.activeView.activate();
      }

      if ($(this.statusBar).hasClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE)) {
        $(this.statusBar).removeClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE).addClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OPEN);
      }

      if ($(this.bottomToolbar).hasClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE)) {
        $(this.bottomToolbar).removeClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE).addClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OPEN);
      } // show container to fix resizing issue


      $(this.container).css('visibility', 'visible');
      this.update();

      if (this.options.caching) {
        _c4g_maps_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].storeValue(this.options.name, '1');
      } // call postOpenFunctions


      if (typeof this.postOpenFunction === 'function') {
        this.postOpenFunction();
      }

      return true;
    }

    return false;
  } // end of "open"


  isOpen() {
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


  close(opt_hide, opt_openOtherSideboard) {
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

      $(this.container).removeClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OPEN).addClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE).css(direction, -containerOffsetWidth);
      $(this.element).removeClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].OPEN).addClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].CLOSE).css(direction, 0);

      if (!opt_openOtherSideboard) {
        // slide other elements
        this.options.mapController[direction + "SlideElements"].forEach(function (element) {
          $(element).css(direction, 0);
        });
      } // hide container to fix resizing issue


      $(this.container).css('visibility', 'hidden'); // check if a view needs to be deactivated

      if (this.activeView) {
        this.activeView.deactivate(true);
      } // Remove active Sideboardentry


      this.options.mapController["active" + this.identifier] = false;

      if (this.options.caching) {
        _c4g_maps_utils__WEBPACK_IMPORTED_MODULE_0__["utils"].storeValue(this.options.name, '0');
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


  toggle(opt_hide) {
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


  makeButton(opt_options) {
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
    } else if (typeof options.label === 'object') {
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


  addSection(opt_options) {
    var options, section, element;
    options = $.extend({
      type: 'div',
      className: '',
      target: undefined
    }, opt_options); // try to create the new section

    try {
      section = document.createElement(options.type);
    } catch (e) {
      console.warn('Cannot create section. "' + options.type + ' is not a valid HTML-node.');
      return false;
    }

    section.className = options.className; // try to append the section to the given target

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
      if (newElement && typeof newElement === 'object') {
        if (!(element && element === newElement)) {
          if (element) {
            this.removeChild(element);
          }

          this.appendChild(newElement);
          element = newElement;
        }
      }
    }; // add to sections-array


    this.sections.push(section);
    return section;
  } // end of "addSection"

  /**
   * @TODO
   * [addView description]
   *
   * @param  {[type]}  options  [description]
   */


  addView(options, opt_viewScope) {
    var self, viewScope, additionalTriggerClass, trigger, view;
    self = this;
    viewScope = opt_viewScope || this;
    options = $.extend({
      // name: undefined,
      triggerConfig: undefined,
      // @TODO doku format: {opt_target: [string|htmlObject], opt_className: [string], opt_tipLabel: [string]}
      sectionElements: [],
      // @TODO doku format: [{section: [sectionObject], element: [elementObject]}]
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
      } // open Sideboard if closed


      if (opt_openSideboard && !self.isOpen()) {
        self.open();
      } // Deactivate current activeView, if existent


      if (typeof viewScope.activeView === 'object' && viewScope.activeView !== view) {
        viewScope.activeView.deactivate();
      }

      viewScope.activeView = view; // Handle sub-views

      if (view.activeView) {
        view.activeView.activate();
      } // Call initialize-functions, if existent


      if (!view.initialized) {
        if (typeof options.initFunction === 'function') {
          view.initialized = options.initFunction();
        } else {
          view.initialized = true;
        }
      } // Display elements in given sections


      if (options.sectionElements && options.sectionElements.length > 0) {
        for (i = 0; i < options.sectionElements.length; i += 1) {
          options.sectionElements[i].section.setElement(options.sectionElements[i].element);
        }
      } // Change trigger-state, if existent


      if (trigger) {
        $(trigger).addClass('c4g-active');
      } // Call activate function, if existent


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

      if (typeof viewScope.activeView === 'object' && viewScope.activeView === view) {
        if (trigger && !view.paused) {
          $(trigger).removeClass('c4g-active');
        } // Handle sub-views


        if (view.activeView) {
          view.activeView.deactivate(view.paused);
        } // Call deactivate function, if existent


        if (typeof options.deactivateFunction === 'function') {
          return options.deactivateFunction(view.paused);
        }
      }

      return true;
    };

    if (typeof options.triggerConfig === 'object') {
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

      options.triggerConfig.className = _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_1__["cssConstants"].ICON + additionalTriggerClass;
      trigger = this.makeButton(options.triggerConfig);
    }

    this.views.push(view);
    return view;
  } // end of "addView"


} // end of "add methods"

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-control-zoomlevel.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-control-zoomlevel.js ***!
  \***********************************************************************/
/*! exports provided: Zoomlevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zoomlevel", function() { return Zoomlevel; });
/* harmony import */ var _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

'use strict';

class Zoomlevel extends ol.control.Control {
  constructor(options) {
    super(options);
    var self, element, updateZoomlevel;
    self = this;

    if (!options || !options.mapController) {
      console.warn('Zoomlevel control needs to know the map.');
      return false;
    } // default options


    options = $.extend({
      className: _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);
    let mapView = options.mapController.map.getView();
    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = mapView.getZoom();

    updateZoomlevel = function () {
      element.innerHTML = parseInt(mapView.getZoom());
    };

    options.mapController.map.getView().on('change:resolution', function () {
      updateZoomlevel();
    });
    this.view = mapView; // inheritance-stuff

    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  }

}

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-i18n.js":
/*!**********************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-i18n.js ***!
  \**********************************************************/
/*! exports provided: langConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langConstants", function() { return langConstants; });
/* harmony import */ var _c4g_maps_constant_i18n_de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var _c4g_maps_constant_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-en.js");
/**
 *  This script imports all different languages and exports the one that is valid for the configured language.
 */


let language = {};

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    language = _c4g_maps_constant_i18n_de__WEBPACK_IMPORTED_MODULE_0__["langConstantsGerman"];
  } else if (mapData.lang === "en") {
    language = _c4g_maps_constant_i18n_en__WEBPACK_IMPORTED_MODULE_1__["langConstantsEnglish"];
  } else {
    // fallback
    language = _c4g_maps_constant_i18n_en__WEBPACK_IMPORTED_MODULE_1__["langConstantsEnglish"];
  }
} else {
  language = _c4g_maps_constant_i18n_en__WEBPACK_IMPORTED_MODULE_1__["langConstantsEnglish"];
}

let langConstants = language;

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-misc-spinner.js":
/*!******************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-misc-spinner.js ***!
  \******************************************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

'use strict';

class Spinner {
  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  constructor(opt_options) {
    var options, target, spinnerSpan;
    options = opt_options || {}; // default options

    options = $.extend({
      className: '',
      target: '.' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].OL_VIEWPORT
    }, options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    this.element = document.createElement('div');
    this.element.className = _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].SPINNER + options.className + ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HIDE;
    $(options.target).append(this.element);
    spinnerSpan = document.createElement('span');
    spinnerSpan.className = _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].ICON + ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);
    this.additionalActivationCounter = 0;
  }

  show() {
    if ($(this.element).hasClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HIDE)) {
      $(this.element).removeClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HIDE);
    } else {
      this.additionalActivationCounter += 1;
    }
  }

  hide() {
    if ($(this.element).hasClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HIDE)) {//console.warn('Spinner is already hidden.');
    } else {
      if (this.additionalActivationCounter === 0) {
        $(this.element).addClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HIDE);
      } else {
        this.additionalActivationCounter -= 1;
      }
    }
  }

}

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-misc-tooltippopup.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-misc-tooltippopup.js ***!
  \***********************************************************************/
/*! exports provided: TooltipPopUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipPopUp", function() { return TooltipPopUp; });
/* harmony import */ var _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

'use strict';

class TooltipPopUp {
  /**
   * @TODO
   * [TooltipPopUp description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  constructor(opt_options) {
    var self, addClassName, closeButton;
    self = this;
    this.options = opt_options || {}; // default options

    this.options = $.extend({
      // className: ''
      // closeFunction: null
      // map: null
      horizontal: false,
      closeable: false,
      offset: [1, -1],
      position: [0, 0]
    }, this.options); // prepare additional classes

    addClassName = '';

    if (this.options.className) {
      addClassName = ' ' + this.options.className;
    }

    if (this.options.horizontal) {
      addClassName += ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HORIZONTAL;
    }

    if (this.options.closeable) {
      addClassName += ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].CLOSEABLE;
    }

    this.element = document.createElement('div');
    this.element.className = _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].TOOLTIP_POPUP + addClassName;

    if (this.options.closeable) {
      closeButton = document.createElement('button');
      closeButton.className = _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].ICON + ' ' + _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].POPUP_CLOSE;
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

  close() {
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


  show() {
    if ($(this.element).hasClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HIDE)) {
      $(this.element).removeClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HIDE);
    }
  }
  /**
   * @TODO
   * [hide description]
   *
   * @return  {[type]}  [description]
   */


  hide() {
    if (!$(this.element).hasClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HIDE)) {
      $(this.element).addClass(_c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__["cssConstants"].HIDE);
    }
  }
  /**
   * @TODO
   * [getContent description]
   *
   */


  getContent() {
    return this.contentContainer.innerHTML;
  }
  /**
   * @TODO
   * [getPosition description]
   *
   */


  getPosition() {
    return this.overlay.getPosition();
  }
  /**
   * @TODO
   * [setContent description]
   *
   * @param  {[type]}  content  [description]
   */


  setContent(content) {
    this.contentContainer.innerHTML = content;
  }
  /**
   * @TODO
   * [setPosition description]
   *
   * @param  {[type]}  coordinates  [description]
   */


  setPosition(coordinates) {
    this.overlay.setPosition(coordinates);
  }

} // End of "add methods to TooltipPopUp"

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-de.js":
/*!*******************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-popup-info-de.js ***!
  \*******************************************************************/
/*! exports provided: trim, isMobile, fnStandardInfoPopup, fnReducedInfoPopup, fnHeader, fnFooter, fnGetTranslate_Type, fnContent, fnContentAerodrome, fnContentNatural, fnContentProtectedArea, fnContentLanduse, fnMessstation, fnContentRoute, fnContentPetrol, fnContentHistoric, fnContentBarriers, fnContentTourism, fnContentAmenity, fnContentStorage, fnContentInformationCity, fnContentEmergency, fnContentCuisine, fnContentShipping, fnContentHydrants, fnContentStreetsTraffic, fnContentSports, fnArztInfo, fnKraftwerkInfo, fnWertstoffinfo, fnAdditionalBuildingInfos, fnSicherheitAdditional, fnWreckInfo, fnKlosterAdditional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnStandardInfoPopup", function() { return fnStandardInfoPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnReducedInfoPopup", function() { return fnReducedInfoPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnHeader", function() { return fnHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnFooter", function() { return fnFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnGetTranslate_Type", function() { return fnGetTranslate_Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContent", function() { return fnContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentAerodrome", function() { return fnContentAerodrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentNatural", function() { return fnContentNatural; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentProtectedArea", function() { return fnContentProtectedArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentLanduse", function() { return fnContentLanduse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnMessstation", function() { return fnMessstation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentRoute", function() { return fnContentRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentPetrol", function() { return fnContentPetrol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentHistoric", function() { return fnContentHistoric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentBarriers", function() { return fnContentBarriers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentTourism", function() { return fnContentTourism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentAmenity", function() { return fnContentAmenity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentStorage", function() { return fnContentStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentInformationCity", function() { return fnContentInformationCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentEmergency", function() { return fnContentEmergency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentCuisine", function() { return fnContentCuisine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentShipping", function() { return fnContentShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentHydrants", function() { return fnContentHydrants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentStreetsTraffic", function() { return fnContentStreetsTraffic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentSports", function() { return fnContentSports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnArztInfo", function() { return fnArztInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnKraftwerkInfo", function() { return fnKraftwerkInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnWertstoffinfo", function() { return fnWertstoffinfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnAdditionalBuildingInfos", function() { return fnAdditionalBuildingInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnSicherheitAdditional", function() { return fnSicherheitAdditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnWreckInfo", function() { return fnWreckInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnKlosterAdditional", function() { return fnKlosterAdditional; });
/*
  K?stenschmiede GmbH Software & Design 2011 - 2018
 @author     K?stenschmiede <http://www.kuestenschmiede.de>
 @license    http://opensource.org/licenses/lgpl-3.0.html
*/
function trim(b) {
  return b.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
}

function translate(b) {
  var a = trim(b);
  return "yes" == a || "Yes" == a ? "Ja" : "no" == a ? "Nein" : "No" == a ? "nein" : "limited" == a ? "Eingeschr\u00e4nkt" : "designated" == a ? "Ja" : "wood" == a ? "Holz" : "metal" == a ? "Metall" : "concrete" == a ? "Beton" : "plastic" == a ? "Plastik" : "stone" == a ? "Stein" : "steel" == a ? "Stahl" : "brick" == a ? "Ziegel" : "reinforced_concrete" == a ? "Stahlbeton" : "masonry" == a ? "Mauerwerk" : b;
}

var fnStandardInfoPopup = function (b, a) {
  var c = b.getProperties(),
      d = "",
      e;

  if ("function" === typeof a) {
    var f = a.call(b)[0].getImage();
    if (f) try {
      e = f.getSrc();
    } catch (g) {
      e = "";
    }
  } else {
    f = a.getImage();

    try {
      e = f.getSrc();
    } catch (h) {
      e = "";
    }
  }

  d += fnHeader(c, e);
  d += fnContent(c);
  d += fnFooter(c, b.get("osm_type") + "/" + b.getId());
  return '<div class="c4g_popup_text">' + d + "</div>";
},
    fnReducedInfoPopup = function (b, a) {
  var c = b.getProperties(),
      d = "",
      e = !1,
      f;
  f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();
  if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;
  "hotel" == c.tourism && (e = !0);
  "guest_house" == c.tourism && (e = !0);
  "chalet" == c.tourism && (e = !0);
  "hostel" == c.tourism && (e = !0);
  "alpine_hut" == c.tourism && (e = !0);
  if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;
  if ("museum" == c.tourism || "museum" == c.amenity) e = !0;
  "cinema" == c.amenity && (e = !0);
  "theatre" == c.amenity && (e = !0);
  if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;
  "playground" == c.leisure && (e = !0);
  c.aerialway && (e = !0);
  if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;
  "station" == c.railway && (e = !0);
  "swimming" == c.sport && (e = !0);
  "swimming_pool" == c.leisure && (e = !0);
  "swimming_pool" == c.amenity && (e = !0);
  "waterpark" == c.leisure && (e = !0);
  c.water_park && (e = !0);
  "sports_centre" == c.leisure && (e = !0);

  switch (e) {
    case !1:
      d += fnHeader(c, f);
      d += fnContent(c);
      d += fnFooter(c, b.get("osm_type") + "/" + b.getId());
      break;

    case !0:
      d += fnHeader(c, f);
  }

  return '<div class="c4g_popup_text">' + d + "</div>";
};
function fnHeader(b, a) {
  var c = "",
      d = "32px";
  a && -1 != a.indexOf("icon_mapcil") && (d = "250px", a = a.replace("icon_mapcil", "logo_mapcil"));

  if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
    if (b.name) var e = b.name;
    b["piste:name"] && (e = b["piste:name"]);
    b["xmas:name"] && (e = b["xmas:name"]);
    b["xmas:location"] && (e = b["xmas:location"]);
    c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
  } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');

  c += fnGetTranslate_Type(b);
  return '<div class="c4g_popup_header">' + c + "</div>";
}
function fnFooter(b, a) {
  var c = "",
      d = !1;
  b["addr:housename"] && (c += "Geb\u00e4udename: " + b["addr:housename"] + "<br/>", d = !0);
  b["addr:floor"] ? (c += "Etage: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "Etage: " + b["addr:level"] + "<br/>", d = !0);
  b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);
  b["addr:postcode"] && (c += b["addr:postcode"] + " ");
  b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);
  if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
    var e = b.sqkm.length % 3,
        f = 0 < e ? b.sqkm.substring(0, e) : "";

    for (i = 0; i < Math.floor(b.sqkm.length / 3); i++) f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));

    c += "Fl\u00e4che: " + f + " Km\u00b2<br/>";
  } else c += "Fl\u00e4che " + b.sqkm + "<br/>";
  b["contact:phone"] && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('Telefon: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);
  b.phone && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('Telefon: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);
  b["contact:fax"] ? (c += "Telefax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "Telefax: " + b.fax + "<br/>", d = !0);
  b["contact:email"] ? (c += 'E-Mail-Adresse: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'E-Mail-Adresse: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);
  d && (c += "<br/>");

  if (b.opening_hours) {
    d = b.opening_hours;

    for (e = 0; 0 == e || 0 < d.indexOf(";");) d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\u00e4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), d = d.replace('"Please make a reservation"', '"Bitte vereinbaren Sie einen Termin"'), d = d.replace("off", "ausgenommen"), 0 < e && (d = d.replace(";", "<br/>")), e++;

    c += '\u00d6ffnungszeiten: <br/><div class="c4g_open_text">' + d + "</div>";
    c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
  }

  if (b["xmas:opening_hours"]) {
    d = b["xmas:opening_hours"];

    for (e = 0; 0 == e || 0 < d.indexOf(";");) d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\u00e4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), 0 < e && (d = d.replace(";", "<br/>")), e++;

    c += '\u00d6ffnungszeiten: <br/><div class="c4g_open_text">' + d + "</div>";
    c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
  }

  b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');
  b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');
  b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Link zu Wikipedia</a><br/>');
  b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Link zu Wikimedia</a><br/>');
  b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Webcam: <a href="' + d + '" target="_blank">Link zur Webcam</a><br/>');
  b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');
  d = "";
  b.internet_access && (d += "Internetzugriff: " + translate(b.internet_access) + "<br/>");
  b["internet_access:fee"] && (d += "Internet Geb\u00fchr: " + translate(b["internet_access:fee"]) + "<br/>");
  b["wifi_access:operator"] && (d += "wifi Betreiber: " + b["wifi_access:operator"] + "<br/>");
  b["wifi_access:technology"] && (d += "wifi Technologie: " + b["wifi_access:technology"] + "<br/>");
  b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");
  "" != d && (c += 'Internetzugang vorhanden<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");
  b.wheelchair && (c += "rollstuhlgeeignet: " + translate(b.wheelchair) + "<br/>");
  b["wheelchair:description"] && (c += "Beschreibung: " + b["wheelchair:description"] + "<br/>");
  b["wheelchair:entrance_width"] && (c += "Breite des Eingangs in CM: " + b["wheelchair:entrance_width"] + "<br/>");
  b["wheelchair:step_height"] && (c += "H\u00f6he der Stufe am Eingang in CM: " + b["wheelchair:step_height"] + "<br/>");
  b["wheelchair:rooms"] && (c += "Anzahl rollstuhlgerechter R\u00e4ume: " + b["wheelchair:rooms"] + "<br/>");
  b["wheelchair:places"] && (c += "Anzahl der Rollstuhlpl\u00e4tze: " + b["wheelchair:places"] + "<br/>");
  b["cent:places"] && (c += "Anzahl der Rollstuhlpl\u00e4tze: " + b["wheelchair:places"] + "<br/>");
  b["ramp:wheelchair"] && (c += "Rampe f\u00fcr Rollstuhlfahrer: " + b["ramp:wheelchair"] + "<br/>");
  b["capacity:disabled"] && (c += "Behindertenparkpl\u00e4tze: " + translate(b["capacity:disabled"]) + "<br/>");
  b["toilets:wheelchair"] && (c += "Behinderdengerechte Toilette: " + translate(b["toilets:wheelchair"]) + "<br/>");
  b.centralkey && (c += "Zentralschl\u00fcssel: " + b.centralkey + "<br/>");
  b.note && (c += b.note + "<br/>");
  b.description && (c += b.description + "<br/>");
  b.operator && (c += "Betreiber: " + b.operator + "<br/>");
  b.ref && (c += "Referenz: " + b.ref + "<br/>");
  "yes" == b.lit && (c += "Dieses Objekt ist beleuchtet.<br/>");
  b.shop && (d = "", b.brand && (d += "Markenzeichen: " + b.brand + "<br/>"), b.sells && (d += "Verkaufs: " + b.sells + "<br/>"), b.origin && (d += "Herkunftsl\u00e4nder: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "Gro\u00dfh\u00e4ndler: Ja<br/>"), "" != d && (c += 'Weitere Angaben zum Shop: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));
  a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">Link zur OpenStreetMap</a><br/>'));
  return c = '<div class="c4g_popup_footer">' + c + "</div>";
}
function fnGetTranslate_Type(b) {
  var a = "";
  if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "Arzt<br/>";
  if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "Krankenhaus mit Notaufnahme<br/>" : a + "Krankenhaus<br/>";
  "dentist" == b.amenity && (a += "Zahnarzt<br/>");
  if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "Apotheke<br/>";
  if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "Physiotherapeut<br/>";
  if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "Ergotherapeut<br/>";
  if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "Psychotherapeut<br/>";
  "alternative" == b.healthcare && (a += "Alternativ- und Komplement\u00e4rmediziner<br/>");
  "midwife" == b.healthcare && (a += "Hebamme<br/>");
  if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "Logop\u00e4de<br/>";
  "yes" == b["health_speciality:music_therapy"] && (a += "Musiktherapeut<br/>");
  "veterinary" == b.amenity && (a += "Tierarzt<br/>");
  "fire_station" == b.amenity && (a += "Feuerwehrhaus<br/>");
  "fire_extinguisher" == b.emergency && (a += "Feuerl\u00f6scher<br/>");
  "aed" == b.emergency && (a += "Mobiler Defibrilator<br/>");
  "defibrillator" == b.emergency && (a += "Mobiler Defibrilator<br/>");
  "phone" == b.emergency && (a += "Notrufs\u00e4ule<br/>");
  "police" == b.amenity && (a += "Polizeiwache<br/>");
  "ambulance_station" == b.emergency && (a += "Rettungswache<br/>");
  "technical" == b.emergency_service && (a += "Technisches Hilfswerk<br/>");
  "water" == b.emergency_service && (a += "Wasserrettungsstation<br/>");
  "baywatch" == b.waterway && (a += "Wasserwacht<br/>");
  "air" == b.emergency_service && (a += "Rettungshubschrauber<br/>");
  "emergency_access_point" == b.highway && (a += "Notfallpunkt<br/>");
  if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "Rettungsbootstation<br/>";
  "life_ring" == b.emergency && (a += "Rettungsring<br/>");
  "siren" == b.emergency && (a += "Sirene<br/>");
  "life_ring" == b.amenity && (a += "Rettungsring<br/>");
  "rescue_station" == b.amenity && (a += "Rettungsstation<br/>");
  "fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "Unterflurhydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "\u00dcberflurhydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "Wandhydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "Saugstelle<br/>"));
  "suction_point" == b.emergency && (a += "Saugstelle<br/>");
  "fire_water_pond" == b.emergency && (a += "L\u00f6schteich<br/>");
  "mountain" == b.emergency_service && (a += "Bergrettungsstation<br/>");
  "water_tank" == b.emergency && (a += "L\u00f6schwassertank<br/>");
  "container" == b.recycling_type && (a += "Recycling Container<br/>");
  "recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "Absaugstation<br/>" : "recycling" == b.amenity && (a += "Wertstoffhof<br/>");
  "yes" == b["diet:pescetarian"] ? a += "pescetarische Gerichte vorhanden<br/>" : "only" == b["diet:pescetarian"] && (a += "nur pescetarische Gerichte<br/>");
  "yes" == b["diet:vegetarian"] ? a += "vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "nur vegetarische Gerichte<br/>");
  "yes" == b["diet:lacto_vegetarian"] ? a += "lacto-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "nur lacto-vegetarische Gerichte<br/>");
  "yes" == b["diet:ovo_vegetarian"] ? a += "ovo-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "nur ovo-vegetarische Gerichte<br/>");
  "yes" == b["diet:vegan"] ? a += "vegane Gerichte vorhanden<br/>" : "only" == b["diet:vegan"] && (a += "nur vegane Gerichte<br/>");
  "yes" == b["diet:fruitarian"] ? a += "frutarische Gerichte vorhanden<br/>" : "only" == b["diet:fruitarian"] && (a += "nur frutarische Gerichte<br/>");
  "yes" == b["diet:raw"] ? a += "rohk\u00f6stliche Gerichte vorhanden<br/>" : "only" == b["diet:raw"] && (a += "nur rohk\u00f6stliche Gerichte<br/>");
  "yes" == b["diet:gluten_free"] ? a += "glutenfreie Gerichte vorhanden<br/>" : "only" == b["diet:gluten_free"] && (a += "nur glutenfreie Gerichte<br/>");
  "yes" == b["diet:dairy_free"] ? a += "milchfreie Gerichte vorhanden<br/>" : "only" == b["diet:dairy_free"] && (a += "nur milchfreie Gerichte<br/>");
  "yes" == b["diet:lactose_free"] ? a += "laktosefreie Gerichte vorhanden<br/>" : "only" == b["diet:lactose_free"] && (a += "nur laktosefreie Gerichte<br/>");
  "yes" == b["diet:halal"] ? a += "Hal\u0101l Gerichte vorhanden<br/>" : "only" == b["diet:halal"] && (a += "nur Hal\u0101l Gerichte<br/>");
  "yes" == b["diet:kosher"] ? a += "koschere Gerichte vorhanden<br/>" : "only" == b["diet:kosher"] && (a += "nur koschere Gerichte<br/>");
  "pub" == b.amenity && (a += "Gastst\u00e4tte<br/>");
  "bar" == b.amenity && (a += "Bar<br/>");
  "yes" == b.frozen_yogurt && (a += "Frozen Yogurt im Angebot<br/>");
  "yes" == b.slush_ice && (a += "Slush Ice im Angebot<br/>");
  "yes" == b.cake && (a += "Kuchenteilchen, Geb\u00e4ck etc. im Angebot<br/>");
  "yes" == b.coffee && (a += "Kaffeegetr\u00e4nke im Angebot<br/>");
  "yes" == b.drinks && (a += "Getr\u00e4nke im Angebot<br/>");
  "biergarten" == b.amenity && (a += "Biergarten<br/>");
  "restaurant" == b.amenity && (a += "Restaurant<br/>");
  "fast_food" == b.amenity && (a += "Fast Food Restaurant<br/>");
  if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "Caf\u00e9, Bistro<br/>";
  if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "Eiscafe<br/>";
  "alpine_hut" == b.tourism && (a += "Bergh\u00fctte<br/>");
  "aquarium" == b.tourism && (a += "Aquarium<br/>");
  "apartment" == b.tourism && (a += "Ferienwohnung<br/>");
  "attraction" == b.tourism && (a += "Sehensw\u00fcrdigkeit<br/>");
  "artwork" == b.tourism && (a += "Skulptur<br/>");
  "camp_site" == b.tourism && (a += "Campingplatz<br/>");
  "caravan_site" == b.tourism && (a += "Wohnmobilstellplatz<br/>");
  "chalet" == b.tourism && (a += "Ferienwohnung /-haus<br/>");
  "gallery" == b.tourism && (a += "Kunstgalerie<br/>");
  "guest_house" == b.tourism && (a += "Pension, Gasthaus, Bed & Breakfast<br/>");
  "hostel" == b.tourism && (a += "Jugendherberge, Hostel<br/>");
  "hotel" == b.tourism && (a += "Hotel<br/>");
  "motel" == b.tourism && (a += "Motel<br/>");
  "museum" == b.tourism && (a += "Museum<br/>");
  "picnic_site" == b.tourism && (a += "Rast- und Picknickplatz<br/>");
  "theme_park" == b.tourism && (a += "Freizeit- oder Themenpark<br/>");
  "viewpoint" == b.tourism && (a += "Aussichtspunkt<br/>");
  "wilderness_hut" == b.tourism && (a += "Schutzh\u00fctte<br/>");
  "wine_cellar" == b.tourism && (a += "Weinkeller<br/>");
  "zoo" == b.tourism && (a += "Zoo / Tierpark<br/>", "enclosure" == b.zoo && (a += "mit Wildgehege<br/>"), "petting_zoo" == b.zoo && (a += "mit Streichelzoo<br/>"), "falconry" == b.zoo && (a += "mit Falknerei<br/>"));
  "trail_riding_station" == b.tourism && (a += "Wanderreitstation<br/>");
  "fishing" == b.club && (a += "Angelverein<br/>");
  "sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");
  "amateur_radio" == b.club && (a += "Amateurfunker<br/>");
  "art" == b.club && (a += "Kunstverein<br/>");
  "astronomy" == b.club && (a += "Astronomieverein<br/>");
  "automobile" == b.club && (a += "Automobilverein<br/>");
  "board_games" == b.club && (a += "Brettspielverein<br/>");
  "card_games" == b.club && (a += "Kartenspielverein<br/>");
  "charity" == b.club && (a += "Charity-Verein<br/>");
  "chess" == b.club && (a += "Schachverein<br/>");
  "cinema" == b.club && (a += "Kinoverein<br/>");
  "cooking" == b.club && (a += "Kochverein<br/>");
  "culture" == b.club && (a += "Kulturverein<br/>");
  "doityourself" == b.club && (a += "doityourself-Verein<br/>");
  "equestrian" == b.club && (a += "Reitverein<br/>");
  "ethnic" == b.club && (a += "Ethnischer Verein<br/>");
  "fan" == b.club && (a += "Fanverein<br/>");
  "freemasonry" == b.club && (a += "Freimaurer-Verein<br/>");
  "game" == b.club && (a += "Spieleverein<br/>");
  "history" == b.club && (a += "Historischer-Verein / Verein f\u00fcr Geschichte<br/>");
  "hunting" == b.club && (a += "Jagdverein<br/>");
  "linux" == b.club && (a += "Linux-Verein<br/>");
  "motorcycle" == b.club && (a += "Motorradverein<br/>");
  "music" == b.club && (a += "Musikverein<br/>");
  "nature" == b.club && (a += "Naturverein<br/>");
  "nudism" == b.club && (a += "Nudisten-Verein / FKK-Verein<br/>");
  "photography" == b.club && (a += "Fotografieverein<br/>");
  "politics" == b.club && (a += "Verein f\u00fcr Politik<br/>");
  "relegion" == b.club && (a += "Politischer-Verein<br/>");
  "scout" == b.club && (a += "Pfadfinderin/Pfadfinder<br/>");
  "smoke" == b.club && (a += "Raucherverein<br/>");
  "sport" == b.club && (a += "Sportverein<br/>");
  "theatre" == b.club && (a += "Theaterverein<br/>");
  "veterans" == b.club && (a += "Veteranen<br/>");
  "amusement_arcade" == b.leisure && (a += "Spielhalle<br/>");
  "beach_resort" == b.leisure && (a += "Standbad<br/>");
  "bird_hide" == b.leisure && (a += "Vogelbeobachtungspunkt<br/>");
  "common" == b.leisure && (a += "\u00d6ffentliche Gr\u00fcnfl\u00e4chen<br/>");
  "club" == b.leisure && (a += "Club/Verein<br/>");
  "dance" == b.leisure && (a += "Tanzen<br/>");
  "dog_park" == b.leisure && (a += "Hundepark<br/>");
  "firepit" == b.leisure && (a += "Feuerstelle<br/>");
  "fishing" == b.leisure && (a += "Angelstelle<br/>");
  "garden" == b.leisure && (a += "Garten<br/>");
  "golf_course" == b.leisure && (a += "Golfplatz<br/>");
  "hackerspace" == b.leisure && (a += "Ort f\u00fcr Hackertreffen<br/>");
  "horse_riding" == b.leisure && (a += "Reitstall / Reiterhof<br/>");
  "ice_rink" == b.leisure && (a += "Eislaufbahn<br/>");
  "nature_reserve" == b.leisure && (a += "Naturschutzgebiet (NSG)<br/>");
  "park" == b.leisure && (a += "Gr\u00fcnanlage<br/>");
  "miniature_golf" == b.leisure && (a += "Minigolf<br/>");
  "pitch" == b.leisure && (a += "Spielfeld<br/>");
  "pitch" == b.leisure && "yes" == b.building && (a += "Sporthalle<br/>");
  "playground" == b.leisure && "yes" == b.building ? a += "Spielscheune<br/>" : "playground" == b.leisure && (a += "Spielplatz<br/>");
  "social_club" == b.leisure && (a += "Treffpunkt f\u00fcr Freizeitgruppen<br/>");
  "spa" == b.leisure && (a += "Heilbad / Spa<br/>");
  "sports_centre" == b.leisure && (a += "Sportzentrum<br/>");
  "climbing_adventure" == b.sport && (a += "Seilgarten<br/>");
  "stadium" == b.leisure && (a += "Stadion<br/>");
  "swimming_pool" == b.leisure && (a += "Schwimmbecken<br/>");
  "track" == b.leisure && (a += "Rennbahn<br/>");
  "water_park" == b.leisure && (a += "Wasserpark<br/>");
  "wildlife_hide" == b.leisure && (a += "Wildbeobachtungspunkt<br/>");
  "adult_gaming_centre" == b.leisure && (a += "Spielothek<br/>");
  "bowling_alley" == b.leisure && "10pin" == b.sport && (a += "Bowlingcenter<br/>");
  "bowling_alley" == b.leisure && "9pin" == b.sport && (a += "Kegelbahn<br/>");
  if ("karting" == b.sport || "motor" == b.sport) a += "Kart-/Motorsport<br/>";
  if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";
  if (b["piste:type"]) switch (b["piste:type"]) {
    case "skitour":
      a += "Piste f\u00fcr Skitouren<br/>";
      break;

    case "downhill":
      a += "Skiabfahrt<br/>";
      break;

    case "sled":
      a += "Rodelberg / Rodelstrecke<br/>";
      break;

    case "nordic":
      a += "Langlauf Piste<br/>";
      break;

    case "hike":
      a += "Schneeschuh- und Winterwanderweg<br/>";
      break;

    case "snow_park":
      a += "Snow-Park<br/>";
  }
  if (b.sport) switch (b.sport) {
    case "surfing":
      a += "Surfen<br/>";
      break;

    case "kitesurfing":
      a += "Kitesurfen<br/>";
      break;

    case "water_ski":
      a += "Wasserski<br/>";
  }
  if (b.aerialway) switch (b.aerialway) {
    case "cable_bar":
      a += "Lift mit Gondeln<br/>";
      break;

    case "gondola":
      a += "Lift mit Gondeln<br/>";
      break;

    case "chair_lift":
      a += "Sessellift<br/>";
      break;

    case "mixed_lift":
      a += "Lift mit Sesseln und Gondeln<br/>";
      break;

    case "drag_lift":
      a += "Skilift<br/>";
      break;

    case "t-bar":
      a += "T-Lift<br/>";
      break;

    case "t-bar":
      a += "T-Lift (einseitig)<br/>";
      break;

    case "platter":
      a += "Lift mit Sitzscheibe<br/>";
      break;

    case "rope_tow":
      a += "B\u00fcgellift<br/>";
      break;

    case "magic_carpet":
      a += "Bef\u00f6rderungsband<br/>";
      break;

    default:
      a += "unbekannt";
  }
  "mosque" == b.building && (a += "Moschee<br/>");
  "synagogue" == b.building && (a += "Synagoge<br/>");
  "apartments" == b.building && (a += "Wohnung<br/>");
  "farm" == b.building && (a += "Farm<br/>");
  "hotel" == b.building && (a += "Hotel<br/>");
  "house" == b.building && (a += "Haus<br/>");
  "detached" == b.building && (a += "Freistehend<br/>");
  "residential" == b.building && (a += "Residenz<br/>");
  if ("domitory" == b.building || "residential plus" == b.building) a += "Wohnheim<br/>";
  "terrace" == b.building && (a += "Terrasse<br/>");
  "houseboat" == b.building && (a += "Hausboot<br/>");
  "bungalow" == b.building && (a += "Bungalow<br/>");
  "static_caravan" == b.building && (a += "Stehender Wohnwagen<br/>");
  "commercial" == b.building && (a += "Kommerziell<br/>");
  "retail" == b.building && (a += "Verkauf<br/>");
  "warehouse" == b.building && (a += "Lagerhaus<br/>");
  "bakehouse" == b.building && (a += "Backstube<br/>");
  "temple" == b.building && (a += "Tempel<br/>");
  "shrine" == b.building && (a += "Schrein<br/>");
  "civic" == b.building && (a += "B\u00fcrgerlich<br/>");
  "stadium" == b.building && (a += "Stadium<br/>");
  "train_station" == b.building && (a += "Bahnhof<br/>");
  "university" == b.building && (a += "Universit\u00e4t<br/>");
  "public" == b.building && (a += "\u00d6ffentliches Geb\u00e4ude<br/>");
  "bridge" == b.building && (a += "Br\u00fccke<br/>");
  "bunker" == b.building && (a += "Bunker<br/>");
  "cabin" == b.building && (a += "H\u00fctte<br/>");
  "conservatory" == b.building && (a += "Wintergarten<br/>");
  "construction" == b.building && (a += "Im Bau<br/>");
  "garage" == b.building && (a += "Garage<br/>");
  "garages" == b.building && (a += "Garagen<br/>");
  "greenhouse" == b.building && (a += "Gew\u00e4chshaus<br/>");
  "hangar" == b.building && (a += "Hangar<br/>");
  "hut" == b.building && (a += "H\u00fctte<br/>");
  "pavillion" == b.building && (a += "Pavillion<br/>");
  "roof" == b.building && (a += "\u00dcberdacht<br/>");
  "shed" == b.building && (a += "Gartenh\u00e4uschen<br/>");
  "transformer_tower" == b.building && (a += "Transformator Turm<br/>");
  "service" == b.building && (a += "Service-Stelle<br/>");
  "kiosk" == b.building && (a += "Kiosk<br/>");
  "carport" == b.building && (a += "Carport<br/>");
  "ruins" == b.building && (a += "Ruinen<br/>");
  "gambling" == b.amenity && (a += "Spielhalle<br/>");
  "library" == b.amenity && (a += "B\u00fccherei<br/>");
  "fountain" == b.amenity && (a += "Brunnen<br/>");
  "attraction" == b.amenity && (a += "Sehensw\u00fcrdigkeit<br/>");
  if ("social_centre" == b.amenity || "club" == b.amenity) a += "Verein / Club<br/>";
  "townhall" == b.amenity && (a += "Rathaus / B\u00fcrgerhaus<br/>");
  "bench" == b.amenity && (a += "Parkbank<br/>");
  if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "Friedhof<br/>";
  "post_box" == b.amenity && (a += "Briefkasten<br/>");
  "post_office" == b.amenity && (a += "Postamt<br/>");
  "telephone" == b.amenity && (a += "Telefon<br/>");
  "atm" == b.amenity && (a += "Geldautomat<br/>");
  "bank" == b.amenity && (a += "Bankfiliale<br/>");
  "toilets" == b.amenity && "yes" == b.diaper ? a += "\u00d6ffentliche Toilette mit Wickeltisch<br/>" : "toilets" == b.amenity && (a += "\u00d6ffentliche Toilette<br/>");
  "school" == b.amenity && "1" == b["isced:level"] ? a += "Grundschule<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "Sekundarstufe I<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "Sekundarstufe II<br/>" : "school" == b.amenity && (a += "Schule<br/>");
  "kindergarten" == b.amenity && (a += "Kindergarten<br/>");
  "internet_cafe" == b.amenity && (a += "Internetcaf\u00e9<br/>");
  "daycare" == b.amenity && (a += "Kinder- und Jugendtagesst\u00e4tte<br/>");
  "childcare" == b.amenity && (a += "Kinder- und Jugendtagesst\u00e4tte<br/>");
  "university" == b.amenity && (a += "Universit\u00e4t/Hochschule<br/>");
  "college" == b.amenity && (a += "Universit\u00e4t/Hochschule<br/>");
  "shelter" == b.amenity && (a += "Unterstand<br/>");
  "bbq" == b.amenity && (a += "Grillplatz<br/>");
  "nightclub" == b.amenity && (a += "Diskothek / Nachtklub<br/>");
  "bicycle_parking" == b.amenity && (a += "Fahrradparkplatz<br/>");
  "bicycle_rental" == b.amenity && (a += "Fahrradverleih<br/>");
  "boat_sharing" == b.amenity && (a += "Bootsverleih<br/>");
  "car_sharing" == b.amenity && (a += "Car-Sharing<br/>");
  "cinema" == b.amenity && (a += "Kino<br/>");
  "swimming_pool" == b.amenity && (a += "Schwimmbad<br/>");
  if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "Botschaft<br/>";
  "embassy" == b.amenity && "consulate" == b.diplomatic && (a += "Konsulate<br/>");
  "embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "Generalkonsulate<br/>");
  "embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "Honorarkonsulate<br/>");
  "embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "St\u00e4ndige Vertretung<br/>");
  "embassy" == b.amenity && "delegation" == b.diplomatic && (a += "Delegation<br/>");
  "embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "Hochkommissariat<br/>");
  "Barfusspfad" == b.amenity && (a += "Barfu\u00dfpfad<br/>");
  "casino" == b.amenity && (a += "Casino<br/>");
  "spa" == b.amenity && (a += "Heilbad / Spa<br/>");
  "stables" == b.amenity && (a += "Reitstall / Reiterhof<br/>");
  "watering_place" == b.amenity && (a += "Wasserstelle / Tr\u00e4nke<br/>");
  "yes" == b.watering_place && (a += "Wasserstelle / Tr\u00e4nke<br/>");
  "water_point" == b.amenity && (a += "gro\u00dfe Trinkwasserstelle<br/>");
  "taxi" == b.amenity && (a += "Taxi<br/>");
  "car_wash" == b.amenity && (a += "Autowaschanlage<br/>");
  "brothel" == b.amenity && (a += "Bordell, Freudenhaus<br/>");
  "stripclub" == b.amenity && (a += "Stripclub<br/>");
  "swingerclub" == b.amenity && (a += "Swingerclub<br/>");
  "planetarium" == b.amenity && (a += "Planetarium<br/>");
  "courthouse" == b.amenity && (a += "Gericht<br/>");
  "crematorium" == b.amenity && (a += "Krematorium<br/>");
  if ("crypt" == b.amenity || "crypt" == b.building) a += "Krypta<br/>";
  "hunting_stand" == b.amenity && (a += "Hochsitz<br/>");
  "photo_booth" == b.amenity && (a += "Fotoautomat<br/>");
  "prison" == b.amenity && (a += "Gef\u00e4ngnis<br/>");
  "ranger_station" == b.amenity && (a += "National Park Ranger Station<br/>");
  "register_office" == b.amenity && (a += "Standesamt<br/>");
  "marketplace" == b.amenity && (a += "Marktplatz / Wochenmarkt<br/>");
  "solarium" == b.amenity && (a += "Solarium<br/>");
  "sauna" == b.amenity && (a += "Sauna<br/>");
  "shower" == b.amenity && (a += "\u00f6ffentliche Dusche<br/>");
  if ("waste_disposal" == b.amenity && (a += "M\u00fcllentsorgung auf \u00f6ffentlichen Pl\u00e4tzen<br/>", b.waste)) switch (a += "Art: ", b.waste) {
    case "trash":
      a += "Allgemeiner M\u00fcll<br/>";
      break;

    case "oil":
      a += "Oil<br/>";
      break;

    case "drugs":
      a += "Pharmazeutisch<br/>";
      break;

    case "organic":
      a += "Kompost<br/>";
      break;

    case "plastic":
      a += "Plastik<br/>";
      break;

    case "rubble":
      a += "Schutt<br/>";
      break;

    case "cigarettes":
      a += "Zigaretten<br/>";
      break;

    default:
      a += "Allgemeiner M\u00fcll<br/>";
  }
  if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "Hunde-Code M\u00fcllcontainer<br/>";
  if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "Pfadfinderheim<br/>";
  "ferry_terminal" == b.amenity && (a += "F\u00e4hrhafen<br/>");
  "bureau_de_change" == b.amenity && (a += "Geldwechselstube<br/>");
  "youth_club" == b.amenity && (a += "Jugendzentrum<br/>");
  "festival_grounds" == b.amenity && (a += "Festivalgel\u00e4nde<br/>");
  if ("yes" == b.openfire || "yes" == b.fireplace) a += "Offene Feuerstelle<br/>";
  if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {
    case "admission_tickets":
      a += "Eintrittskartenautomat<br/>";
      break;

    case "animal_feed":
      a += "Tierfutterautomat<br/>";
      break;

    case "bicycle_tube":
      a += "Fahrradschlauchautomat<br/>";
      break;

    case "books":
      a += "B\u00fccherautomat<br/>";
      break;

    case "candles":
      a += "Kerzenautomat<br/>";
      break;

    case "cigarettes":
      a += "Zigarettenautomat<br/>";
      break;

    case "chemist":
      a += "Apotheken/Drogerie Automat<br/>";
      break;

    case "condoms":
      a += "Kondomautomat<br/>";
      break;

    case "drinks":
      a += "Getr\u00e4nkeautomat<br/>";
      break;

    case "electronics":
      a += "Automat f\u00fcr Elektro-Zubeh\u00f6r<br/>";
      break;

    case "elongated_coin":
      a += "M\u00fcnzpr\u00e4gungsautomat<br/>";
      break;

    case "excrement_bags":
      a += "Hundet\u00fctenspender<br/>";
      break;

    case "feminine_hygiene":
      a += "Automat f\u00fcr Damenhygieneprodukte<br/>";
      break;

    case "first_aid":
      a += "Erste-Hilfe-Automat<br/>";
      break;

    case "fishing_tackle":
      a += "Automat f\u00fcr Angelzubeh\u00f6r<br/>";
      break;

    case "fishing_bait":
      a += "Angelk\u00f6derautomat<br/>";
      break;

    case "flowers":
      a += "Blumenautomat<br/>";
      break;

    case "food":
      a += "Lebensmittel-Automat<br/>";
      break;

    case "ice_cubes":
      a += "Eisw\u00fcrfelautomat<br/>";
      break;

    case "ice_cream":
      a += "Automat f\u00fcr Speiseeis<br/>";
      break;

    case "ink_cartridges":
      a += "Druckerpatronen Automat<br/>";
      break;

    case "laundry_detergent":
      a += "Waschmittelautomat<br/>";
      break;

    case "public_transport_tickets":
      a += "Fahrkartenautomat<br/>";
      break;

    case "newspaper":
      a += "Zeitungsautomat<br/>";
      break;

    case "parcel_pickup":
      a += "Packstation<br/>";
      break;

    case "parcel_mail_in":
      a += "Paketstation<br/>";
      break;

    case "parking_tickets":
      a += "Parkscheinautomat<br/>";
      break;

    case "photos":
      a += "Fotoautomat<br/>";
      break;

    case "sex_toys":
      a += "Automat f\u00fcr Sexspielzeug<br/>";
      break;

    case "SIM_cards":
      a += "Automat f\u00fcr SIM Karten<br/>";
      break;

    case "stamps":
      a += "Briefmarkenautomat<br/>";
      break;

    case "sweets":
      a += "S\u00fc\u00dfigkeitenautomat<br/>";
      break;

    case "syringes":
      a += "Spritzenautomat<br/>";
      break;

    case "toll":
      a += "Maut-Automat<br/>";
      break;

    case "toys":
      a += "Spielzeugautomat<br/>";
      break;

    case "umbrellas":
      a += "Regenschirmautomat<br/>";
      break;

    default:
      a += "Verkaufsautomat<br/>";
  } else a += "Verkaufsautomat<br/>";
  "arts_centre" == b.amenity && (a += "Kulturzentrum<br/>");
  "artwork" == b.amenity && (a += "Kunstwerk / Kunstobjekt<br/>");
  "museum" == b.amenity && (a += "Museum<br/>");
  "theatre" == b.amenity && (a += "Theater<br/>");
  "cathedral" == b.building && (a += "Kathedrale<br/>");
  "church" == b.building && (a += "Kirche<br/>");
  "chapel" == b.building && (a += "Kapelle<br/>");
  "place_of_worship" == b.amenity && (a += "Kirche / Kultst\u00e4tte<br/>");
  "village" == b.abandoned && (a += "Verlassene Stadt<br/>");
  "theme_park" == b["abandoned:tourism"] && (a += "Verlassener Vergn\u00fcgungspark<br/>");
  "prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "KZ Gedenkst\u00e4tte<br/>");
  "yes" == b.abandoned && "bunker" == b.military && (a += "Verlassene Bunkeranlage<br/>");
  "yes" == b.abandoned && "barracks" == b.military && (a += "Verlassene Milit\u00e4rbaracken<br/>");
  "yes" == b.abandoned && "airfield" == b.military && (a += "Verlassene Milit\u00e4rflugplatz<br/>");
  "monastery" == b.historic && (a += "Historisches Kloster<br/>");
  "monastery" == b.amenity && (a += "Kloster<br/>");
  "monastery" == b.building && (a += "Kloster<br/>");
  "manor" == b.historic && (a += "Gutshaus / Herrenhaus<br/>");
  "boundary_stone" == b.historic && (a += "Historischer Grenzstein<br/>");
  "milestone" == b.historic && (a += "Historischer Meilenstein<br/>");
  "monument" == b.historic && (a += "Monument<br/>");
  "palace" == b.historic && (a += "Palast<br/>");
  "mine" == b.historic && (a += "Verlassene Mine<br/>");
  "ruins" == b.historic && (a += "Ruine<br/>");
  "harbour" == b.historic_usage && (a += "historischer Hafen<br/>");
  "rune_stone" == b.historic && (a += "Runenstein<br/>");
  "battlefield" == b.historic && (a += "Schlachtfeld<br/>");
  "blacksmith" == b.historic && (a += "Historische Schmiede<br/>");
  if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "Schrein / Bildstock<br/>";
  "city_gate" == b.historic && (a += "Stadttor<br/>");
  "wayside_cross" == b.historic && (a += "Wegkreuz<br/>");
  "monument" == b.amenity && (a += "Denkmal<br/>");
  "memorial" == b.historic && (a += "Denkmal<br/>");
  "optical_telegraph" == b.historic && (a += "Optischer Telegraph<br/>");
  if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {
    case "defensive":
      a += "Burg<br/>";
      break;

    case "palace":
      a += "Palast<br/>";
      break;

    case "stately":
      a += "Schloss<br/>";
      break;

    case "manor":
      a += "Herrenhaus<br/>";
      break;

    case "fortress":
      a += "Festung<br/>";
      break;

    case "castrum":
      a += "R\u00f6misches Milit\u00e4rlager<br/>";
      break;

    case "shiro":
      a += "Shiro<br/>";
      break;

    case "kremlin":
      a += "Kreml<br/>";
      break;

    default:
      a += "Schloss / Burg<br/>";
  } else a += "Schloss / Burg<br/>";
  "archaeological_site" == b.historic && (a += "Arch\u00e4ologische Fundst\u00e4tte<br/>");
  if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {
    case "tumulus":
      a += "H\u00fcgelgrab<br/>";
      break;

    case "rock-cut":
      a += "Felsgrab<br/>";
      break;

    case "hypogeum":
      a += "Hypog\u00e4um<br/>";
      break;

    case "war_grave":
      a += "Soldatenfriedhof<br/>";
      break;

    case "mausoleum":
      a += "Mausoleum<br/>";
      break;

    case "columbarium":
      a += "Kolumbarium<br/>";
      break;

    case "crypt":
      a += "Krypta<br/>";
      break;

    case "pyramid":
      a += "Pyramide<br/>";
      break;

    case "sarcophagus":
      a += "Sarkophag<br/>";
      break;

    case "vault":
      a += "Gruft<br/>";
      break;

    case "tombstone":
      a += "Grabstein<br/>";
      break;

    default:
      a += "Historische Grabst\u00e4tte<br/>";
  } else a += "Historische Grabst\u00e4tte<br/>";
  "accountant" == b.office && (a += "Buchhalter / Wirtschaftpr\u00fcfer<br/>");
  "administrative" == b.office && (a += "Kreis- bzw. Gemeindebeh\u00f6rde<br/>");
  "architect" == b.office && (a += "Architekturb\u00fcro<br/>");
  "association" == b.office && (a += "Verein, Vereinigung bzw. Interessengemeinschaft<br/>");
  "physician" == b.office && (a += "Arzt<br/>");
  "camping" == b.office && (a += "Rezeption Campingplatz oder B\u00fcro Freizeitpark<br/>");
  "company" == b.office && (a += "Sitz einer privaten Firma<br/>");
  "educational_institution" == b.office && (a += "Bildungseinrichtung<br/>");
  "employment_agency" == b.office && (a += "Job-Center / Arbeitsvermittlung<br/>");
  "estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
  "forestry" == b.office && (a += "Forstamt<br/>");
  "foundation" == b.office && (a += "Gesch\u00e4ftsstelle einer Stiftung<br/>");
  "government" == b.office && (a += "Beh\u00f6rde / Regierungseinrichtung<br/>");
  "guide" == b.office && (a += "B\u00fcro f\u00fcr Touristenf\u00fchrungen<br/>");
  "insurance" == b.office && (a += "Versicherungsb\u00fcro<br/>");
  "it" == b.office && (a += "IT-Unternehmen<br/>");
  "lawyer" == b.office && (a += "Rechtsanwaltskanzlei<br/>");
  "newspaper" == b.office && (a += "Zeitungsredaktion<br/>");
  "ngo" == b.office && (a += "B\u00fcro einer Nichtregierungsorganisation<br/>");
  "notary" == b.office && (a += "Notar<br/>");
  "political_party" == b.office && (a += "B\u00fcro einer politischen Partei<br/>");
  "quango" == b.office && (a += "B\u00fcro einer halbstaatlichen Organisation<br/>");
  "realtor" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
  "real_estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
  "register" == b.office && (a += "Standesamt<br/>");
  "religion" == b.office && (a += "B\u00fcro einer religi\u00f6sen Instanz<br/>");
  "research" == b.office && (a += "Forschungsunternehmen oder -institut<br/>");
  "tax" == b.office && (a += "Finanzamt<br/>");
  "telecommunication" == b.office && (a += "Telekommunikationsfirma<br/>");
  "travel_agent" == b.office && (a += "Sitz eines Reiseunternehmens<br/>");
  "water_utility" == b.office && (a += "Wasserwirtschaftsamt<br/>");
  "therapist" == b.office && (a += "Therapeut<br/>");
  "city" == b.place && (a += "Gro\u00dfstadt<br/>");
  "town" == b.place && (a += "Stadt/Kleinstadt<br/>");
  "village" == b.place && (a += "Dorf<br/>");
  "continent" == b.place && (a += "Kontinent<br/>");
  "ocean" == b.place && (a += "Ozean</br>");
  "track" == b.highway && (a += "Forst-, Wald und Feldweg<br/>");
  "raceway" == b.highway && (a += "Motorsportbahn<br/>");
  "designated" == b.bicycle && (a += "Radweg<br/>");
  "path" == b.highway && (a += "Fu\u00dfweg<br/>");
  "parking" == b.amenity && (a += "Parkplatz<br/>");
  "services" == b.highway && (a += "Rastst\u00e4tte<br/>");
  "rest_area" == b.highway && (a += "Rastplatz<br/>");
  "turning_circle" == b.highway && (a += "Wendeplatz/Wendehammer<br/>");
  "service" == b.highway && (a += "Zufahrtsstra\u00dfe / Erschlie\u00dfungsweg<br/>");
  "motorway" == b.highway && (a += "Autobahn<br/>");
  "motorway_junction" == b.highway && (a += "Autobahnauffahrt<br/>");
  "bridleway" == b.highway && (a += "Reitweg<br/>");
  "yes" == b.oneway && (a += "Einbahnstra\u00dfe<br/>");
  "yes" == b.park_ride && (a += "Park and Ride<br/>");
  "unknown" == b.park_ride && (a += "Park and Ride<br/>");
  "bus" == b.park_ride && (a += "Park and Ride<br/>");
  "tram" == b.park_ride && (a += "Park and Ride<br/>");
  "bus_stop" == b.highway && (a += "Bushaltestelle<br/>");
  "pedestrian" == b.highway && (a += "Fu\u00dfg\u00e4ngerzone<br/>");
  "street_lamp" == b.highway && (a += "Strassenlaterne<br/>");
  "traffic_signals" == b.highway && (a += "Ampel<br/>");
  "traffic_signals" == b.crossing && (a += "Fu\u00dfg\u00e4ngerampel<br/>");
  "speed_camera" == b.highway && (a += "Blitzer<br/>");
  "yes" == b.traffic_calming && (ret += "Verkehrsberuhigter Bereich</br>");
  "bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");
  "chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");
  "choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\u00f6glich</br>");
  "cushion" == b.traffic_calming && (a += "Bodenwelle mit L\u00fccken aus mehreren rechteckigen Huckeln</br>");
  "hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\u00e4nge von 2-4M</br>");
  "island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");
  "rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");
  "table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\u00fcck</br>");
  "buoy_cardinal" == b["seamark:type"] && (a += "Kardinalstonne<br/>");
  "buoy_lateral" == b["seamark:type"] && (a += "Lateraltonne<br/>");
  "buoy_isolated_danger" == b["seamark:type"] && (a += "Gefahrentonne<br/>");
  "perch" == b["seamark:beacon_lateral:shape"] && (a += "Pricke<br/>");
  "fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "Schiffstankstelle<br/>" : "fuel" == b.amenity && (a += "Tankstelle<br/>");

  if ("charging_station" == b.amenity) {
    var a = a + "Ladestation / Stromtankstelle<br/>",
        c = b.voltage;

    if (b.car) {
      switch (b.car) {
        case "yes":
          a += "F\u00fcr Autos: Ja";
          break;

        case "no":
          a += "F\u00fcr Autos: Nein";
          break;

        default:
          a += "F\u00fcr Autos: Unbekannt";
      }

      a += "<br/>";
    } else a += "F\u00fcr Autos: Unbekannt<br/>";

    if (b.bicycle) {
      switch (b.bicycle) {
        case "yes":
          a += "F\u00fcr E-Bike: Ja";
          break;

        case "no":
          a += "F\u00fcr E-Bike: Nein";
          break;

        default:
          a += "F\u00fcr E-Bike: Unbekannt";
      }

      a += "<br/>";
    } else a += "F\u00fcr E-Bike: Unbekannt<br/>";

    "no" == b["socket:schuko"] && (a += "Stecker Schuko: Nein<br/>");
    "yes" == b["socket:schuko"] && (a += "Stecker Schuko: Ja<br/>");
    "no" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Nein<br/>");
    "yes" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Ja<br/>");
    "no" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Nein<br/>");
    "yes" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Ja<br/>");
    "no" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Nein<br/>");
    "yes" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Ja<br/>");
    "no" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Nein<br/>");
    "yes" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Ja<br/>");
    "no" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Nein<br/>");
    "yes" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Ja<br/>");
    "no" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Nein<br/>");
    "yes" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Ja<br/>");
    "no" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Nein<br/>");
    "yes" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Ja<br/>");
    "no" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Nein<br/>");
    "yes" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Ja<br/>");
    "Nein" == b["socket:nema_14_50"] && (a += "Stecker Nema 14  50: Nein<br/>");
    "yes" == b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: Ja<br/>");
    "nein" == b["socket:bs1363"] && (a += "Stecker BS 1363: Nein<br/>");
    "yes" == b["socket:bs1363"] && (a += "Stecker BS 1363: Ja<br/>");
    "no" == b["socket:type1"] && (a += "Stecker Typ 1:Nein<br/>");
    "yes" == b["socket:type1"] && (a += "Stecker Typ 1: Ja<br/>");
    "no" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Nein<br/>");
    "yes" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Ja<br/>");
    "Nein" == b["socket:type2"] && (a += "Stecker Typ 2: Nein<br/>");
    "yes" == b["socket:type2"] && (a += "Stecker Typ 2: Ja<br/>");
    "no" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Nein<br/>");
    "yes" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Ja<br/>");
    "no" == b["socket:type3"] && (a += "Stecker Typ: Nein<br/>");
    "yes" == b["socket:type3"] && (a += "Stecker Typ 3: Ja<br/>");
    "no" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Nein<br/>");
    "yes" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Ja<br/>");
    "no" == b["socket:magne_charge"] && (a += "Stecker Magne : Nein<br/>");
    "yes" == b["socket:magne_charge"] && (a += "Stecker Magne : Ja<br/>");
    "no" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");
    "yes" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");
    "no" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Nein<br/>");
    "yes" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Ja<br/>");
    "no" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Nein<br/>");
    "yes" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Ja<br/>");
    b["socket:schuko"] && (a += "Stecker Schuko: " + b["socket:schuko"] + "<br/>");
    b["socket:cee_blue"] && (a += "Stecker CEE Blau: " + b["socket:cee_blue"] + "<br/>");
    b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: " + b["socket:cee_red_16a"] + "<br/>");
    b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: " + b["socket:cee_red_32a"] + "<br/>");
    b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: " + b["socket:cee_red_64a"] + "<br/>");
    b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: " + b["socket:cee_red_125a"] + "<br/>");
    b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: " + b["socket:nema_5_15"] + "<br/>");
    b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: " + b["socket:nema_5_20"] + "<br/>");
    b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: " + b["socket:nema_14_30"] + "<br/>");
    b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: " + b["socket:nema_14_50"] + "<br/>");
    b["socket:bs1363"] && (a += "Stecker BS 1363: " + b["socket:bs1363"] + "<br/>");
    b["socket:type1"] && (a += "Stecker Typ 1: " + b["socket:type1"] + "<br/>");
    b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: " + b["socket:schuko"] + "<br/>");
    b["socket:type2"] && (a += "Stecker Typ 2: " + b["socket:type2"] + "<br/>");
    b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: " + b["socket:type2_combo"] + "<br/>");
    b["socket:type3"] && (a += "Stecker Typ 3: " + b["socket:type3"] + "<br/>");
    b["socket:chademo"] && (a += "Stecker CHAdeMO: " + b["socket:chademo"] + "<br/>");
    b["socket:magne_charge"] && (a += "Stecker Magne : " + b["socket:magne_charge"] + "<br/>");
    b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: " + b["socket:tesla_standard"] + "<br/>");
    b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: " + b["socket:tesla_supercharge"] + "<br/>");
    b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: " + b["socket:tesla_roadster"] + "<br/>");
    a += "<br/>";
    b.voltage && (a += "Volt: " + c + "<br/>");
  }

  "yes" == b.tunnel && (a += "Tunnel<br/>");
  if (b.bridge) switch (a += "Br\u00fccken-Typ: ", b.bridge) {
    case "swing":
      a += "Drehbr\u00fccke";
      break;

    case "aqueduct":
      a += "Historische Wasserpipeline";
      break;

    case "bascule":
      a += "Klapp bzw. Wippbr\u00fccke";
      break;

    case "boardwalk":
      a += "Bohlenweg";
      break;

    case "cantilever":
      a += "Auslegerbr\u00fccke";
      break;

    case "covered":
      a += "gedeckte Br\u00fccke";
      break;

    case "drawbridge":
      a += "Klappbr\u00fccke";
      break;

    case "humpback":
      a += "Drehbr\u00fccke";
      break;

    case "lift":
      a += "Hubbr\u00fccke";
      break;

    case "low_water_crossing":
      a += "Irische Br\u00fccke";
      break;

    case "moveable":
      a += "Bewegliche Br\u00fccken";
      break;

    case "pontoon":
      a += "Schwimmbr\u00fccke";
      break;

    case "suspension":
      a += "H\u00e4ngebr\u00fccke";
      break;

    case "trestle":
      a += "Trestle-Br\u00fccke";
      break;

    case "viaduct":
      a += "Viadukt";
  }
  if (b["bridge:movable"]) switch (b["bridge:movable"]) {
    case "swing":
      a += "Drehbr\u00fccke";
      break;

    case "bascule":
      a += "Klapp bzw. Wippbr\u00fccke";
      break;

    case "drawbridge":
      a += "Klappbr\u00fccke";
      break;

    case "lift":
      a += "Hubbr\u00fccke";
      break;

    case "submersible":
      a += "Senkbr\u00fccke";
      break;

    case "transporter":
      a += "Schwebef\u00e4hre";
      break;

    case "retractable":
      a += "Schubbr\u00fccke";
  }
  if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "Seniorenheim / Pflegeheim<br/>";
  "social_facility" == b.amenity && (a += "Allg. soziale Einrichtung<br/>");

  if (b.social_facility) {
    "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Seniorenheim<br/>");
    "assisted_living" == b.social_facility && (a += "Betreutes Wohnen<br/>");
    "outreach" == b.social_facility && (a += "Beratungsstelle<br/>");
    "workshop" == b.social_facility && (a += "soziale Werkstatt<br/>");
    if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "Ambulanter Pflegedienst<br/>";
    "shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Tages- u. Kurzzeitpflege<br/>");
    "shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "Notunterkunft<br/>");
    "food_bank" == b.social_facility && (a += "Lebensmittelhilfe<br/>");
    "hospice" == b.social_facility && (a += "Hospiz<br/>");
  }

  b.brewery && (a += "Ausgeschenkte Biersorten: " + b.brewery + "<br/>");
  "alcohol" == b.shop && (a += "Spirituosenladen<br/>");
  "bakery" == b.shop && (a += "B\u00e4ckerei<br/>");
  "beverages" == b.shop && (a += "Getr\u00e4nkehandel<br/>");
  "butcher" == b.shop && (a += "Fleischerei<br/>");
  "cheese" == b.shop && (a += "K\u00e4sefachgesch\u00e4ft<br/>");
  "chocolate" == b.shop && (a += "Schokoladenfachgesch\u00e4ft<br/>");
  "coffee" == b.shop && (a += "Kaffeefachgesch\u00e4ft<br/>");
  "confectionery" == b.shop && (a += "S\u00fc\u00dfwarenladen<br/>");
  "convenience" == b.shop && (a += "Lebensmittelgesch\u00e4ft<br/>");
  "deli" == b.shop && (a += "Feinkostladen<br/>");
  "dairy" == b.shop && (a += "Milchladen<br/>");
  "farm" == b.shop && (a += "Hofladen<br/>");
  "greengrocer" == b.shop && (a += "Gem\u00fcseh\u00e4ndler<br/>");
  "grocery" == b.shop && (a += "Lebensmittelgesch\u00e4ft<br/>");
  "organic" == b.shop && (a += "Bio-Laden, Reformhaus<br/>");
  "pasta" == b.shop && (a += "Pastagesch\u00e4ft<br/>");
  "seafood" == b.shop && (a += "Fischfachgesch\u00e4ft<br/>");
  "tea" == b.shop && (a += "Teefachgesch\u00e4ft<br/>");
  "wine" == b.shop && (a += "Weinhandlung<br/>");
  "department_store" == b.shop && (a += "Kaufhaus<br/>");
  "general" == b.shop && (a += "Gemischtwarenhandlung<br/>");
  "kiosk" == b.shop && (a += "Kiosk<br/>");
  "mall" == b.shop && (a += "Einkaufszentrum<br/>");
  "supermarket" == b.shop && (a += "Supermarkt<br/>");
  "baby_goods" == b.shop && (a += "Babyfachmarkt<br/>");
  "bag" == b.shop && (a += "Taschen und Koffer<br/>");
  "boutique" == b.shop && (a += "Boutique<br/>");
  "clothes" == b.shop && (a += "Bekleidung<br/>");
  "fabric" == b.shop && (a += "Textilgesch\u00e4ft<br/>");
  "fashion" == b.shop && (a += "Fashion<br/>");
  "jewelry" == b.shop && (a += "Juwelier<br/>");
  "leather" == b.shop && (a += "Lederwaren<br/>");
  "shoes" == b.shop && (a += "Schuhfachgesch\u00e4ft<br/>");
  "variety_store" == b.shop && (a += "Ein-Euro-Laden<br/>");
  "chemist" == b.shop && (a += "Drogerie<br/>");
  "cosmetics" == b.shop && (a += "Kosmetikfachgesch\u00e4ft<br/>");
  "drugstore" == b.shop && (a += "Drogerie oder Apotheke (veraltet)<br/>");
  "perfumery" == b.shop && (a += "Parf\u00fcmerie<br/>");
  "erotic" == b.shop && (a += "Erotikhandel<br/>");
  "hairdresser" == b.shop && (a += "Friseur<br/>");
  "hearing_aids" == b.shop && (a += "H\u00f6rger\u00e4te<br/>");
  "herbalist" == b.shop && (a += "Kr\u00e4uterhandel<br/>");
  "massage" == b.shop && (a += "Massagesalon<br/>");
  "medical_supply" == b.shop && (a += "Sanit\u00e4tshaus<br/>");
  "optician" == b.shop && (a += "Optiker<br/>");
  "tattoo" == b.shop && (a += "T\u00e4towierer<br/>");
  "bathroom_furnishing" == b.shop && (a += "Badm\u00f6bel und -accessoires<br/>");
  "doityourself" == b.shop && (a += "Baumarkt/Baustoffhandel<br/>");
  "energy" == b.shop && (a += "Energiehandel<br/>");
  "florist" == b.shop && (a += "Blumengesch\u00e4ft<br/>");
  "furnace" == b.shop && (a += "Ofenfachgesch\u00e4ft<br/>");
  "garden_centre" == b.shop && (a += "Gartencenter<br/>");
  "gas" == b.shop && (a += "Fachgesch\u00e4ft f\u00fcr technische Gase<br/>");
  "glaziery" == b.shop && (a += "Glaserei<br/>");
  "hardware" == b.shop && (a += "Eisenwaren<br/>");
  "houseware" == b.shop && (a += "Haushaltswaren und Inneneinrichtung<br/>");
  "locksmith" == b.shop && (a += "Schl\u00fcsseldienst<br/>");
  "paint" == b.shop && (a += "Farbenfachgesch\u00e4ft<br/>");
  "trade" == b.shop && (a += "Baustoffhandel<br/>");
  "antiques" == b.shop && (a += "Antiquit\u00e4ten<br/>");
  "bed" == b.shop && (a += "Betten- und Matratzengesch\u00e4ft<br/>");
  "candles" == b.shop && (a += "Kerzengesch\u00e4ft<br/>");
  "carpet" == b.shop && (a += "Teppichfachhandel<br/>");
  "curtain" == b.shop && (a += "Gardinenfachgesch\u00e4ft<br/>");
  "furniture" == b.shop && (a += "M\u00f6bel- und Einrichtungshaus<br/>");
  "interior_decoration" == b.shop && (a += "Innendekoration / Raumausstattung<br/>");
  "kitchen" == b.shop && (a += "K\u00fcchen<br/>");
  "window_blind" == b.shop && (a += "Jalousien und Roll\u00e4den<br/>");
  "computer" == b.shop && (a += "Computer-Fachh\u00e4ndler<br/>");
  "electronics" == b.shop && (a += "Elektronikmarkt<br/>");
  "hifi" == b.shop && (a += "Hifi-Fachh\u00e4ndler<br/>");
  "mobile_phone" == b.shop && (a += "Handy-Shop<br/>");
  "radiotechnics" == b.shop && (a += "Radio- und Fernsehtechnik<br/>");
  "vacuum_cleaner" == b.shop && (a += "Staubsaugerfachgesch\u00e4ft<br/>");
  "bicycle" == b.shop && (a += "Fahrradfachgesch\u00e4ft<br/>");
  "car" == b.shop && (a += "Autohaus<br/>");
  "car_repair" == b.shop && (a += "Autowerkstatt<br/>");
  "car_parts" == b.shop && (a += "Autoteilefachgesch\u00e4ft<br/>");
  if ("dive" == b.shop || "scuba_diving" == b.shop) a += "Tauchausr\u00fcstung<br/>";
  "fishing" == b.shop && (a += "Angelfachgesch\u00e4ft<br/>");
  "free_flying" == b.shop && (a += "Fallschirmausr\u00fcstung<br/>");
  "hunting" == b.shop && (a += "Jagdausr\u00fcstung<br/>");
  "motorcycle" == b.shop && (a += "Motorradgesch\u00e4ft<br/>");
  "outdoor" == b.shop && (a += "Trekking-/Outdoorladen<br/>");
  "sports" == b.shop && (a += "Sportgesch\u00e4ft<br/>");
  "tyres" == b.shop && (a += "Reifenfachhandel<br/>");
  "water_sports" == b.shop && (a += "Wassersportbedarf<br/>");
  "art" == b.shop && (a += "Kunstladen<br/>");
  "craft" == b.shop && (a += "Kunsthandwerk<br/>");
  "frame" == b.shop && (a += "Bilderrahmengesch\u00e4ft<br/>");
  "music" == b.shop && (a += "Musikgesch\u00e4ft<br/>");
  "music_instrument" == b.shop && (a += "Musikhaus<br/>");
  "photo" == b.shop && (a += "Fotofachgesch\u00e4ft<br/>");
  "video" == b.shop && (a += "Videothek<br/>");
  "video_games" == b.shop && (a += "Videospiele<br/>");
  "anime" == b.shop && (a += "Anime<br/>");
  "books" == b.shop && (a += "Buchhandlung<br/>");
  "gift" == b.shop && (a += "Andenken, Reisemitbringsel, Souveniershop<br/>");
  "newsagent" == b.shop && (a += "Zeitungsh\u00e4ndler<br/>");
  "stationery" == b.shop && (a += "Schreibwaren<br/>");
  "ticket" == b.shop && (a += "Ticketshop<br/>");
  "copyshop" == b.shop && (a += "Kopierladen<br/>");
  "funeral_directors" == b.shop && (a += "Bestattungsunternehmen<br/>");
  "laundry" == b.shop && (a += "Waschsalon / W\u00e4scherei<br/>");
  "dry_cleaning" == b.shop && (a += "chemische Reinigung<br/>");
  "money_lender" == b.shop && (a += "Geldverleiher<br/>");
  "pawnbroker" == b.shop && (a += "Pfandhaus / Pfandleiher<br/>");
  "pet" == b.shop && (a += "Zoo- und Tierhandlung<br/>");
  "pyrotechnics" == b.shop && (a += "Feuerwerk<br/>");
  "religion" == b.shop && (a += "Religi\u00f6se Artikel<br/>");
  "beauty" == b.shop && (a += "Sch\u00f6nheitssalon<br/>");
  "solarium" == b.shop && (a += "Solarium<br/>");
  "tobacco" == b.shop && (a += "Tabakwaren<br/>");
  "toys" == b.shop && (a += "Spielwaren<br/>");
  "travel_agency" == b.shop && (a += "Reiseb\u00fcro<br/>");
  "market_hall" == b.shop && (a += "Markthalle<br/>");
  "vacant" == b.shop && (a += "leerstehendes Ladenlokal<br/>");
  "weapons" == b.shop && (a += "Waffenladen<br/>");
  "lottery" == b.gambling && (a += "Lottoannahmestelle<br/>");
  "fish" == b.pet && (a += "Aquaristik<br/>");
  "agriucultural_engines" == b.craft && (a += "Landmaschinenbau<br/>");
  "basket_maker" == b.craft && (a += "Korbmacher<br/>");
  "beekeeper" == b.craft && (a += "Imker<br/>");
  "blacksmith" == b.craft && (a += "Schmied<br/>");
  "brewery" == b.craft && (a += "Brauerei<br/>");
  "yes" == b.microbrewery && (a += "Hausbrauerei<br/>");
  "boatbuilder" == b.craft && (a += "Bootsbauer<br/>");
  "bookbinder" == b.craft && (a += "Buchbinder<br/>");
  "builder" == b.craft && (a += "Hausbau<br/>");
  "carpenter" == b.craft && (a += "Tischler/Schreiner, Zimmermann<br/>");
  "carpet_layer" == b.craft && (a += "Teppichleger<br/>");
  "caterer" == b.craft && (a += "Catering<br/>");
  "clockmaker" == b.craft && (a += "Uhrmacher<br/>");
  "confectionery" == b.craft && (a += "Konditorei<br/>");
  "dressmaker" == b.craft && (a += "Schneider<br/>");
  "electrician" == b.craft && (a += "Elektriker<br/>");
  "gardener" == b.craft && (a += "Garten- und Landschaftsbauer<br/>");
  "glaziery" == b.craft && (a += "Glaserei<br/>");
  "handicraft" == b.craft && (a += "Handwerkskunst<br/>");
  "hvac" == b.craft && (a += "K\u00e4lteanlagenbauer f\u00fcr L\u00fcftungs-, Heizungs- und Klimatechnik<br/>");
  "insulation" == b.craft && (a += "W\u00e4rmed\u00e4mmung von Geb\u00e4uden<br/>");
  "jeweller" == b.craft && (a += "Juwelier, Gold-/Silber-Schmied<br/>");
  "key_cutter" == b.craft && (a += "Schl\u00fcsselmacher<br/>");
  "locksmith" == b.craft && (a += "Schl\u00fcsseldienst<br/>");
  "metal_construction" == b.craft && (a += "Metallbauer<br/>");
  "optician" == b.craft && (a += "Optiker<br/>");
  "painter" == b.craft && (a += "Maler<br/>");
  "parquet_layer" == b.craft && (a += "Parkettverleger<br/>");
  "photographer" == b.craft && (a += "Fotograf<br/>");
  "photographic_laboratory" == b.craft && (a += "Fotolabor<br/>");
  "plasterer" == b.craft && (a += "Gipser, Verputzer, Stuckateur<br/>");
  "plumber" == b.craft && (a += "Anlagenmechaniker Sanit\u00e4r-, Heizungs- und Klimatechnik.<br/>");
  "pottery" == b.craft && (a += "T\u00f6pferei<br/>");
  "rigger" == b.craft && (a += "Riggemacher (Takelage f\u00fcr Segelschiffe)<br/>");
  "roofer" == b.craft && (a += "Dachdecker<br/>");
  "saddler" == b.craft && (a += "Sattler<br/>");
  "sailmaker" == b.craft && (a += "Segelmacher<br/>");
  "sawmill" == b.craft && (a += "Holzverarbeitungsbetrieb<br/>");
  "scaffolder" == b.craft && (a += "Ger\u00fcstbauer<br/>");
  "sculptor" == b.craft && (a += "Bildhauer<br/>");
  "shoemaker" == b.craft && (a += "Schuhmacher<br/>");
  "stand_builder" == b.craft && (a += "Messe- / Standbauer<br/>");
  "stonemason" == b.craft && (a += "Steinmetz<br/>");
  "sun_protection" == b.craft && (a += "Rolladen- und Jalousiebauer<br/>");
  "sweep" == b.craft && (a += "Schornsteinfeger<br/>");
  "tailor" == b.craft && (a += "Schneider<br/>");
  "tiler" == b.craft && (a += "Fliesen-, Platten- und Mosaikleger<br/>");
  "tinsmith" == b.craft && (a += "Spengler, Klempner<br/>");
  "upholsterer" == b.craft && (a += "Polsterer<br/>");
  "watchmaker" == b.craft && (a += "Uhrmacher<br/>");
  "window_construction" == b.craft && (a += "Fensterbauer<br/>");
  "machines" == b.rental && (a += "Maschinenverleih<br/>");
  "car_rental" == b.amenity && (a += "Autoverleih<br/>");
  "allotments" == b.landuse && (a += "Schrebergarten<br/>");
  "basin" == b.landuse && (a += "Regenwasserr\u00fcckhaltebecken<br/>");
  "brownfield" == b.landuse && (a += "Vorher bebautes Land<br/>");
  "commercial" == b.landuse && (a += "Industriegebiet<br/>");
  "construction" == b.landuse && (a += "Baugebiet<br/>");
  "farmland" == b.landuse && (a += "Ackerfl\u00e4che<br/>");
  "farmyard" == b.landuse && (a += "landwirtschaftlicher Betrieb<br/>");
  "forest" == b.landuse && (a += "Forst<br/>");
  "garages" == b.landuse && (a += "Garagenkomplex<br/>");
  "grass" == b.landuse && (a += "Rasenfl\u00e4chen<br/>");
  "greenfield" == b.landuse && (a += "Bauerwartungsland<br/>");
  "greenhouse_horticulture" == b.landuse && (a += "Gew\u00e4chshaus-Fl\u00e4che<br/>");
  "industrial" == b.landuse && (a += "Gewerbe-/Industriegebiet<br/>");
  "landfill" == b.landuse && (a += "M\u00fclldeponie<br/>");
  "meadow" == b.landuse && (a += "Gr\u00fcnfl\u00e4che<br/>");
  "orchard" == b.landuse && (a += "Obstplantage<br/>");
  "plant_nursery" == b.landuse && (a += "Baumschule<br/>");
  "quarry" == b.landuse && (a += "Sand- und Kiesgrube<br/>");
  "railway" == b.landuse && (a += "Gebiet f\u00fcr Eisenbahnnutzung<br/>");
  "recreation_ground" == b.landuse && (a += "Erholungsgebiet<br/>");
  "reservoir" == b.landuse && (a += "Wasserreservoir<br/>");
  "residential" == b.landuse && (a += "Wohngebiet<br/>");
  "retail" == b.landuse && (a += "Einkaufszentrum<br/>");
  "salt_pond" == b.landuse && (a += "Saline<br/>");
  "village_green" == b.landuse && (a += "Gr\u00fcnfl\u00e4che<br/>");
  "vineyard" == b.landuse && (a += "Weinberg<br/>");
  "pond" == b.landuse && (a += "kleiner Teich<br/>");
  "salt_pond" == b.landuse && (a += "Saline<br/>");
  "animal_keeping" == b.landuse && (a += "Weide, Paddock f\u00fcr Tierhaltung<br/>");
  "yes" == b.entrance && (a += "Eingang zum Geb\u00e4ude<br/>");
  "main" == b.entrance && (a += "Haupteingang<br/>");
  "service" == b.entrance && (a += "Hinterausgang f\u00fcr Angestellte oder Zulieferer<br/>");
  "exit" == b.entrance && (a += "Ausgang des Geb\u00e4udes<br/>");
  "emergency" == b.entrance && (a += "Notausgang<br/>");
  "bay" == b.natural && (a += "Bucht<br/>");
  "beach" == b.natural && (a += "Strand<br/>");
  "wood" == b.natural && (a += "nat\u00fcrlicher Wald<br/>");
  "glacier" == b.natural && (a += "Gletscher<br/>");
  "cave_entrance" == b.natural && (a += "H\u00f6hle<br/>");
  "spring" == b.natural && (a += "nat\u00fcrliche Quelle<br/>");
  "waterfall" == b.natural && (a += "Wasserfall<br/>");
  "scrub" == b.natural && (a += "unkultiviertes Buschland<br/>");
  "grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");
  "wetland" == b.natural && (a += "Feuchtgebiet<br/>");
  "tree" == b.natural && (a += "Baum");
  "peak" == b.natural && "yes" == b["summit:cross"] && (a += "Gipfelkreuz<br/>");
  "tree_row" == b.natural && (a += "Baumreihe / Allee<br/>");
  "heath" == b.natural && (a += "Heide<br/>");
  "moor" == b.natural && (a += "Hochmoor<br/>");
  "grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");
  "fell" == b.natural && (a += "Grasland oberhalb der Baumgrenze<br/>");
  "bare_rock" == b.natural && (a += "Nackter Fels<br/>");
  "scree" == b.natural && (a += "Schutt (Hangschutt)<br/>");
  "volcano" == b.natural && (a += "Vulkan<br/>");
  "valley" == b.natural && (a += "Tal<br/>");
  "stone" == b.natural && (a += "Findling<br/>");
  "sea" == b.natural && (a += "Meer<br/>");
  "national_park" == b.boundary && (a += "Nationalpark<br/>");
  "protected_area" == b.boundary && (a += "Schutzgebiet<br/>");
  "yes" == b.mountain_pass && (a += "Gebirgspass<br/>");
  "waterfall" == b.waterway && (a += "Wasserfall<br/>");
  "canal" == b.waterway && (a += "Kanal<br/>");
  "canal" == b.water && (a += "Kanal<br/>");
  "river" == b.waterway && (a += "Fluss<br/>");
  "river" == b.water && (a += "Fluss<br/>");
  "riverbank" == b.waterway && (a += "Fluss<br/>");
  "ditch" == b.waterway && (a += "Entw\u00e4sserungsgraben<br/>");
  "stream" == b.waterway && (a += "Bach<br/>");
  "ferry" == b.route && (a += "F\u00e4hrverbindung<br/>");
  "turning_point" == b.waterway && (a += "Wendestelle<br/>");
  if ("lake" == b.water || "water" == b.natural) a += "See<br/>";
  "cove" == b.water && (a += "kleine Bucht<br/>");
  "lagoon" == b.water && (a += "Lagune<br/>");
  "pond" == b.water && (a += "Teich<br/>");
  "reservoir" == b.water && (a += "Wasserreservoir<br/>");
  "oxbow" == b.water && (a += "Altwassersee<br/>");
  "lock" == b.water && (a += "Schleusenkammer<br/>");
  "moat" == b.water && (a += "Burggraben<br/>");
  "wastewater" == b.water && (a += "Kl\u00e4ranlage<br/>");
  "guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "Gastliegeplatz<br/>" : "pier" == b.man_made && (a += "Anlegestelle<br/>");
  "boatyard" == b.waterway && (a += "Schiffswerft<br/>");
  "mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "Dalben<br/>");
  "foot" == b.route && (a += "Wanderweg<br/>");
  "hiking" == b.route && (a += "Wanderweg<br/>");
  if ("yes" == b.hiking && "information" == b.tourism) a += "Wegweiser<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {
    case "board":
      a += "Informationstafel<br/>";
      break;

    case "map":
      a += "Informationstafel mit Karte<br/>";
      break;

    case "office":
      a += "Touristeninformation<br/>";
      break;

    case "terminal":
      a += "Informationsterminal<br/>";
      break;

    case "audioguide":
      a += "Audioguide<br/>";
      break;

    case "guidepost":
      a += "Wegweiser<br/>";
      break;

    case "tactile_map":
      a += "Blindenkarte 2D<br/>";
      break;

    case "tactile_model":
      a += "Blindenkarte 3D<br/>";
      break;

    case "route_marker":
      a += "Wegerkennungsmarker<br/>";
      break;

    default:
      a += "Informationstafel<br/>";
  } else a += "Informationstafel<br/>";
  "bicycle" == b.route && (a += "Radwanderweg<br/>");
  "mtb" == b.route && (a += "Mountainbikeroute<br/>");
  "horse" == b.route && (a += "Reitwanderweg<br/>");
  "coastline" == b.natural && (a += "K\u00fcstenlinie<br/>");
  "cliff" == b.natural && (a += "Klippe<br/>");
  "dam" == b.waterway && (a += "Staudamm<br/>");
  "weir" == b.waterway && (a += "Wehr<br/>");
  "lock_gate" == b.waterway && (a += "Schleusentor<br/>");
  "yes" == b.lock && (a += "Schleuse<br/>");
  "sluice_gate" == b.waterway && (a += "Siel<br/>");
  "pumping_station" == b.man_made && (a += "Sch\u00f6pfwerk<br/>");
  "groyne" == b.man_made && (a += "Buhne<br/>");
  "dyke" == b.man_made && (a += "Deich<br/>");
  "levee" == b.man_made && (a += "Deich<br/>");
  "watermill" == b.man_made && (a += "Wasserm\u00fchle<br/>");
  "airfield" == b.military && (a += "Milit\u00e4rflugplatz<br/>");
  "naval_base" == b.military && (a += "Marinest\u00fctzpunkt<br/>");
  "range" == b.military && (a += "Waffen\u00fcbungsplatz<br/>");
  "military" == b.landuse && (a += "milit\u00e4risch genutztes Gebiet<br/>");
  "training_area" == b.military && (a += "Truppen\u00fcbungsplatz<br/>");
  "exclusion_zone" == b.military && (a += "milit\u00e4risch genutztes Gebiet<br/>");
  "danger_area" == b.military && (a += "milit\u00e4rische Gefahrenzone<br/>");
  "barracks" == b.military && (a += "Kaserne<br/>");
  "nuclear_explosion_site" == b.military && (a += "Atomwaffentestgel\u00e4nde<br/>");
  "yes" == b.construction ? a += "Baustelle<br/>" : "construction" == b.highway && (a += "Baustelle<br/>");
  "petroleum_well" == b.man_made && (a += "Erd\u00f6lpumpe<br/>");
  "storage_tank" == b.man_made && (a += "Speichertank<br/>");
  "wastewater_plant" == b.man_made && (a += "Kl\u00e4ranlage<br/>");
  "silo" == b.man_made && (a += "Silo<br/>");
  "water_tower" == b.man_made && (a += "Wasserturm<br/>");
  "windmill" == b.man_made && (a += "Windm\u00fchle<br/>");
  "monitoring_station" == b.man_made && (a += "Messstation");
  "crane" == b.man_made && (a += "Kran");
  "lighthouse" == b.man_made && (a += "Leuchtturm");
  "beacon" == b.man_made && (a += "Leuchtfeuer");
  "breakwater" == b.man_made && (a += "Wellenbrecher");
  "lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "Strassenlaterne<br/>");
  "lantern" == b.light_source && (a += "Strassenlaterne<br/>");
  "floodlight" == b.light_source && (a += "Flutlicht<br/>");
  "signal_lamp" == b.light_source && (a += "Signallicht<br/>");
  "aviation" == b.light_source && (a += "Befeuerung<br/>");
  "warning" == b.light_source && (a += "Warnlicht<br/>");
  if (b.light_source && b["light:method"]) switch (a += "Licht Art: ", b["light:method"]) {
    case "gas":
      a += "Gas";
      break;

    case "electric":
      a += "Elektrisch";
      break;

    case "incandescent":
      a += "strahlend";
      break;

    case "halogen":
      a += "Halogen";
      break;

    case "discharge":
      a += "Entladungslicht";
      break;

    case "metal-halide":
      a += "Halogen-Metalldampflampe";
      break;

    case "neon":
      a += "Neon";
      break;

    case "sodium":
      a += "Natriumdampflampe";
      break;

    case "high_pressure_sodium":
      a += "Hochdruck Natriumdampflampe";
      break;

    case "low_pressure_sodium":
      a += "Niedrigdruck Natriumdampflampe";
      break;

    case "fluorescent":
      a += "Fluoreszenzlampe";
      break;

    case "mercury":
      a += "Quecksilberlampe";
      break;

    case "LED":
      a += "LED";
      break;

    case "laser":
      a += "Laser";
      break;

    case "arc":
      a += "Lichtbogen";
      break;

    default:
      a += "Unbekannt";
  }
  "drinking_water" == b.amenity && (a += "Trinkwasser<br/>");
  "yes" == b.drinking_water && (a += "Trinkwasser<br/>");
  "works" == b.man_made ? a += "Industriegeb\u00e4ude<br/>" : "industrial" == b.building ? a += "Industriegeb\u00e4ude<br/>" : "industrial" == b.landuse ? a += "Industriegebiet<br/>" : "industrial" == b.abutters ? a += "Industriegebiet<br/>" : "commercial" == b.abutters && (a += "Gewerbegebiet<br/>");
  if (b["generator:source"]) switch (a += "Anlagen-Typ: ", b["generator:source"]) {
    case "biomass":
      a += "Biogasanlage";
      break;

    case "biofuel":
      a += "Biogasanlage";
      break;

    case "biogas":
      a += "Biogasanlage";
      break;

    case "coal":
      a += "Kohlekraftwerk";
      break;

    case "oil":
      a += "\u00d6lraffinerie";
      break;

    case "waste":
      a += "M\u00fcllverbrennungsanlage";
      break;

    case "wind":
      a += "Windkraftwerk";
      break;

    case "solar":
      a += "Solarkraftwerk";
      break;

    case "hydro":
      a += "Wasserkraftwerk";
      break;

    case "tidal":
      a += "Gezeitenkraftwerk";
      break;

    case "wave":
      a += "Wellenkraftwerk";
      break;

    case "geothermal":
      a += "Geothermie";
      break;

    case "osmotic":
      a += "Osmosekraftwerk";
      break;

    case "nuclear":
      a += "Atomkraftwerk";
      break;

    default:
      a += "unbekannt<br/>";
  }
  "photovoltaic" == b.power_source && (a += "Solarkraftwerk");
  "line" == b.power && (a += "Hochspannungs-\u00dcbertragungsleitung<br/>");
  "cable" == b.power && (a += "Untergrundkabel<br/>");
  "cable_distribution_cabinet" == b.power && (a += "Kabelverteilerschrank<br/>");
  "plant" == b.power && (a += "Elektrizit\u00e4tskraftwerk<br/>");
  "station" == b.power && (a += "Elektrizit\u00e4tskraftwerk<br/>");
  "sub_station" == b.power && (a += "Elektrizit\u00e4tskraftwerk<br/>");
  "compensator" == b.power && (a += "Kompensator<br/>");
  "converter" == b.power && (a += "Konverter<br/>");
  "generator" == b.power && (a += "Generator<br/>");
  "heliostat" == b.power && (a += "Heliostat<br/>");
  "insulator" == b.power && (a += "Isulator<br/>");
  "busbar" == b.line && (a += "Sammelschiene<br/>");
  "bay" == b.line && (a += "Verbindung Schaltung und Sammelschiene<br/>");
  "minor_line" == b.power && (a += "Nebenlinie<br/>");
  "pole" == b.power && (a += "Pfahl<br/>");
  "portal" == b.power && (a += "H-f\u00f6rmiger Mast<br/>");
  "catenary_mast" == b.power && (a += "Fahrleitungsmast<br/>");
  "substation" == b.power && (a += "Umspannwerk<br/>");
  "switch" == b.power && (a += "Lastschalter<br/>");
  "terminal" == b.power && (a += "Terminal / Anschluss<br/>");
  "tower" == b.power && (a += "Hochspannungsleitungs<br/>");
  "transformer" == b.power && (a += "Nebenlinie<br/>");
  if (b.barrier) switch (b.barrier) {
    case "bollard":
      a += "Poller, Pfosten<br/>";
      break;

    case "cycle_barrier":
      a += "Umlaufsperre, Dr\u00e4ngelgitter<br/>";
      break;

    case "gate":
      a += "Tor, Schranke<br/>";
      break;

    case "chain":
      a += "Kette<br/>";
      break;

    case "lift_gate":
      a += "Schlagbaum<br/>";
      break;

    case "wall":
      a += "L\u00e4rmschutzwand<br/>";
      break;

    case "toll_booth":
      a += "Mautstelle<br/>";
      break;

    case "fence":
      switch (b.fence_type) {
        case "barbed_wire":
          a += "Stacheldrahtzaun<br/>";
          break;

        case "wood":
          a += "Holzzaun<br/>";
          break;

        case "chain_link":
          a += "Maschendrahtzaun<br/>";
          break;

        case "electric":
          a += "Weidezaun<br/>";
          break;

        case "railing":
          a += "Gel\u00e4nder<br/>";
          break;

        case "wire":
          a += "einfacher Drahtzaun<br/>";
          break;

        case "metal":
          a += "Metallzaun<br/>";
          break;

        case "pole":
          a += "Holzpf\u00e4hle<br/>";
          break;

        default:
          a += "Zaun<br/>";
      }

      break;

    case "block":
      a += "Block<br/>";
      break;

    case "ditch":
      a += "Graben<br/>";
      break;

    case "border_control":
      a += "Grenzkontrolle<br/>";
      break;

    case "hedge":
      a += "Hecke<br/>";
      break;

    case "retaining_wall":
      a += "St\u00fctzmauer<br/>";
      break;

    case "cattle_grid":
      a += "Weiderost<br/>";
      break;

    case "horse_stile":
      a += "Zaun\u00fcbertritt<br/>";
      break;

    default:
      a += "unbekannt<br/>";
  }
  "noise_barrier" == b.wall && (a += "L\u00e4rmschutzwand<br/>");
  "retaining_wall" == b.designation && (a += "L\u00e4rmschutzwand<br/>");
  "noise_barrier" == b.designation && (a += "L\u00e4rmschutzwand<br/>");
  "surveillance" == b.man_made && (a += "\u00dcberwachter Bereich<br/>");
  if (b.aeroway) switch (a += "Flughafen: ", b.aeroway) {
    case "aerodrome":
      a += "Flugplatz";
      break;

    case "apron":
      a += "Vorfeld";
      break;

    case "gate":
      a += "gate";
      break;

    case "helipad":
      a += "Hubschrauberlandeplatz";
      break;

    case "hangar":
      a += "Hangar";
      break;

    case "runway":
      a += "Start-/Landebahn";
      break;

    case "taxiway":
      a += "Rollweg";
      break;

    case "terminal":
      a += "Flughafengeb\u00e4ude";
      break;

    default:
      a += "unbekannt<br/>";
  }
  "halt" == b.railway && (a += "Bahn-Haltepunkt<br/>");
  "crossing" == b.railway && (a += "Bahn\u00fcbergang<br/>");
  "level_crossing" == b.railway && (a += "Bahn\u00fcbergang<br/>");
  "station" == b.railway && (a += "Bahnhof<br/>");
  "bus_station" == b.amenity && (a += "Busbahnhof<br/>");
  "bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "Busbahnhof<br/>");
  "rail" == b.railway && (a += "Bahnlinie<br/>", "contact_line" == b.electrified && (a += "elektrifizierte Bahntrasse mit Oberleitung<br/>"));
  "tram" == b.railway && (a += "Stra\u00dfenbahnlinie<br/>");
  if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "Slipanlage<br/>";
  if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {
    case "ferry":
      a += "F\u00e4hrhafen<br/>";
      break;

    case "container":
      a += "Containerhafen<br/>";
      break;

    case "marina":
      "marina" != b.leisure && (a += "Jachthafen<br/>");
      break;

    case "navel_base":
      a += "Marine-Hafen<br/>";
      break;

    case "tanker":
      a += "Hafen f\u00fcr \u00d6ltanker<br/>";
      break;

    case "passenger":
      a += "Personenschifffahrt<br/>";
      break;

    case "bulk":
      a += "Sch\u00fcttgut-Hafen<br/>";
      break;

    default:
      a += "Hafen<br/>";
  } else a += "Hafen<br/>";
  "marina" == b.leisure && (a += "Jachthafen<br/>");
  "wreck" == b.historic && (a += "Wrack<br/>");
  "animal_shelter" == b.amenity && (a += "Tierheim<br/>");
  "shelter" == b.animal && (a += "Tierheim<br/>");
  "horse_walker" == b.animal && (a += "Pferdelauftrainer<br/>");
  "yes" == b.animal_shelter && (a += "Tierheim<br/>");
  "dog" == b.animal_shelter && (a += "Tierheim<br/>");
  "cat" == b.animal_shelter && (a += "Tierheim<br/>");
  "animal_boarding" == b.amenity && (a += "Tierpension<br/>");
  "yes" == b.animal_boarding && (a += "Tierpension<br/>");
  "dog" == b.animal_boarding && (a += "Tierpension<br/>");
  "horse" == b.animal_boarding && (a += "Tierpension<br/>");
  "cat" == b.animal_boarding && (a += "Tierpension<br/>");
  "dog;cat" == b.animal_boarding && (a += "Tierpension<br/>");
  "cat;dog" == b.animal_boarding && (a += "Tierpension<br/>");
  if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "Tiertraining<br/>";
  "swimming" == b.animal && (a += "Badestelle f\u00fcr Hunde<br/>");
  if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "F\u00fctterungsstelle<br/>";
  if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "Wildf\u00fctterung<br/>";
  if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "Futterraufe<br/>";
  "manger" == b.amenity && (a += "Krippe<br/>");
  "birdhouse" == b.man_made && (a += "Vogelhaus<br/>");
  "stork" == b.birds_nest && (a += "Storchennest<br/>");
  "nest_box" == b.amenity && (a += "Nistkasten<br/>");
  "wellness" == b.animal && (a += "Hundesalon<br/>");
  "cemetery" == b.animal && (a += "Kleintierfriedhof<br/>");
  if ("stable" == b.building || "stable" == b["building:use"]) a += "Pferdestall<br/>";
  "cowshed" == b.building && (a += "Kuhstall<br/>");
  "sty" == b.building && (a += "Schweinestall<br/>");
  "barn" == b.building && (a += "Scheune / landwirtsch. Lagerhalle<br/>");
  "farm_auxiliary" == b.building && (a += "landwirtschaftl. Nebengeb\u00e4ude<br/>");
  if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "Flusskilometer<br/>";
  "milestone" == b.highway && (a += "Strassenkilometer<br/>");
  "market" == b["xmas:feature"] && (a += "Weihnachtsmarkt<br/>");
  "tree" == b["xmas:feature"] && (a += "Weihnachtsbaumverkauf<br/>");
  "event" == b["xmas:feature"] && (a += "Weihnachtsevent<br/>");
  "pyramid" == b["xmas:feature"] && (a += "Weihnachtspyramide<br/>");
  return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}
var fnContent = function (b) {
  var a;
  a = "" + fnContentGeneralInformations(b);
  a += fnContentHealthcare(b);
  a += fnContentAerodrome(b);
  a += fnContentCuisine(b);
  a += fnContentShipping(b);
  a += fnContentHydrants(b);
  a += fnContentSports(b);
  a += fnContentStreetsTraffic(b);
  a += fnContentInformationCity(b);
  a += fnContentEmergency(b);
  a += fnContentStorage(b);
  a += fnContentAmenity(b);
  a += fnContentTourism(b);
  a += fnContentRoute(b);
  a += fnContentPetrol(b);
  a += fnContentBarriers(b);
  a += fnContentLanduse(b);
  a += fnContentNatural(b);
  a += fnKlosterAdditional(b);
  a += fnSicherheitAdditional(b);
  a += fnAdditionalBuildingInfos(b);
  a += fnKraftwerkInfo(b);
  a += fnMessstation(b);
  a += fnWertstoffinfo(b);
  (a += fnContentProtectedArea(b)) && (a = "<br/>" + a);
  return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = function (b) {
  var a = "";
  b.aerodrome && ("international" == b.aerodrome && (a += "Flughafentype: internationaler Flugplatz<br/>"), "regional" == b.aerodrome && (a += "Flughafentype: regionaler Flugplatz<br/>"), "gliding" == b.aerodrome && (a += "Flughafentype: Segelflugplatz<br/>"), "private" == b.aerodrome && (a += "Flughafentype: Privatflugplatz<br/>"));
  b.iata && (a += "IATA-Code: " + b.iata + "<br/>");
  b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");
  return a;
},
    fnContentNatural = function (b) {
  var a = "";

  if (b.forest || b.wood) {
    if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "Laubwald<br/>";
    if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "Nadelwald<br/>";
    if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "Mischwald<br/>";
    "leafless" == b.leaf_type && (a += "Blattlose Vegetation<br/>");
    "evergreen" == b.wood && (a += "immergr\u00fcn<br/>");
    "palm" == b.wood && (a += "Palmen<br/>");
    "nipa_palm" == b.wood && (a += "Nipapalmen<br/>");
    "eucalypt" == b.wood && (a += "Eukalypten<br/>");
    if ("filao" == b.wood || "casuarina" == b.wood) a += "Kasuarinengew\u00e4chse<br/>";
  }

  if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "Laubbaum<br/>" : a + "Nadelbaum<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "durch Gr\u00f6\u00dfe und herausragender Position sich deutlich aus seinem Umfeld hervorhebender Baum.<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "alter, unter besonderem Schutz stehender Baum.<br/>";
  "manger" == b["feeding:type"] && (a += "Futterbeh\u00e4lter: Futterraufe<br/>");
  "automated" == b["feeding:type"] && (a += "Automat<br/>");
  if (b["feeding:for"]) switch (b["feeding:for"]) {
    case "sheep":
      a += "Tier: Schaaf<br/>";
      break;

    case "horse":
      a += "Tier: Pferd<br/>";
      break;

    case "cow":
      a += "Tier: Kuh<br/>";
      break;

    case "rabbit":
      a += "Tier: Kaninchen<br/>";
      break;

    case "bunny":
      a += "Tier: Hase<br/>";
      break;

    case "cat":
      a += "Tier: Katze </br>";
      break;

    case "swan":
      a += "Tier: Schwan </br>";
      break;

    case "guinea pig":
      a += "Tier: Meerschweinchen </br>";
      break;

    case "donkey":
      a += "Tier: Esel </br>";
      break;

    case "squirrel":
      a += "Tier: Eichh\u00f6rnchen </br>";
      break;

    case "pig":
      a += "Tier: Schwein </br>";
      break;

    case "deer":
      a += "Tier: Reh </br>";
      break;

    case "guinea pig":
      a += "Tier: Meerschweinchen </br>";
      break;

    case "monkey":
      a += "Tier: Affe </br>";
      break;

    case "camel":
      a += "Tier: Kamel </br>";
      break;

    case "goat":
      a += "Tier: Ziege </br>";
      break;

    case "hamster":
      a += "Tier: Hamster </br>";
      break;

    case "alpaca":
      a += "Tier: Alpaka </br>";
      break;

    default:
      a += "Tiere: nicht bekannt<br/>";
  }
  if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {
    case "hay":
      a += "F\u00fcttern mit: Heu</br>";
      break;

    case "grain":
      a += "F\u00fcttern mit: Getreide</br>";
      break;

    case "corn":
      a += "F\u00fcttern mit: Korn</*br>";
      break;

    default:
      a += "F\u00fcttern mit: nicht bekannt</br>";
  }
  "volcano" == b.natural && "active" == b.status && (a += "Aktiver Vulkan<br/>");
  "volcano" == b.natural && "dormant" == b.status && (a += "Ruhender Vulkan<br/>");
  "volcano" == b.natural && "extinct" == b.status && (a += "Erloschener Vulkan<br/>");
  "volcano" == b.natural && "stratovolcano" == b.type && (a += "Vulkantyp:Schichtvulkan<br/>");
  "volcano" == b.natural && "shield" == b.type && (a += "Vulkantyp:Schildvulkan<br/>");
  "volcano" == b.natural && "scoria" == b.type && (a += "Vulkantyp:Schlacken- und Aschenkegel<br/>");
  return a;
},
    fnContentProtectedArea = function (b) {
  var a = "",
      c = "";
  "protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "Beschreibung: Strenges Naturreservat, Wildnisgebiet<br/>"), "2" == c && (a = "Beschreibung: Nationalpark<br/>"), "3" == c && (a = "Beschreibung: Naturmonument<br/>"), "4" == c && (a = "Beschreibung: Biotop/Artenschutzgebiet mit Management<br/>"), "5" == c && (a = "Beschreibung: Gesch\u00fctzte Landschaft/Gesch\u00fctztes marines Gebiet<br/>"), "6" == c && (a = "Beschreibung: Ressourcenschutzgebiet mit Management<br/>"), "7" == c && (a = "Beschreibung: Lokal gesch\u00fctzte Bereiche<br/>"), "97" == c && (a = "Beschreibung: Gesch\u00fctzt oder ausgezeichnet durch Vereinbarungen auf kontinentaler Ebene<br/>"), "98" == c && (a = "Beschreibung: Gesch\u00fctzt oder ausgezeichnet durch zwischenstaatliche- oder internationale Vereinbarungen<br/>"), "99" == c && (a = "andere <br/>"), "21" == c && (a = "Beschreibung: Gemeindebefinden (heilige Orte, assoziatice Orte)<br/>"), "22" == c && (a = "Beschreibung: Kulturelle Werte (Kulturg\u00fcter, historisches Erbe, Denkmalschutz)<br/>"), "23" == c && (a = "Beschreibung: Schutz zu Gundsten der Wirtschaft<br/>"), "24" == c && (a = "Beschreibung: Politische Schutzgebiete<br/>"), "25" == c && (a = "Beschreibung: Milit\u00e4rische Schutzgebiete<br/>"), "26" == c && (a = "Beschreibung: Historische Schutzgebiete<br/>"), "29" == c && (a = "Beschreibung: Weitere gesellschaftliche Schutzgebiete<br/>"), "11" == c && (a = "Beschreibung: Bodenschutz (Vorgabe zum Fruchtbarkeitserhalt und Erosionsschutz)<br/>"), "12" == c && (a = "Beschreibung: Wasserschutzgebiet (Trinkwasserschutzgebiet, Heilquellenschutzgebiet,..)<br/>"), "13" == c && (a = "Beschreibung: Klima und Luft (Kaltluftenstehung/Frischluftversorgung, Immissionsschutz,..)<br/>"), "14" == c && (a = "Beschreibung: Artenschutzgebiet (Angelverbot, Fischereischutzzone, Jagdschutzgebiet, Vogelschutzgebiet,..)<br/>"), "15" == c && (a = 'Beschreibung: "Standortausstattung": Retentionsraum (gesetzlich gesch\u00fctztes \u00dcberschwemmungsgebiet) <br/>'), "16" == c && (a = "Beschreibung: Dauerhafte Gefahrenbereiche (Lebensschutz, Bodenbewegungsgebiet,..)<br/>"), "19" == c && (a = "Beschreibung: Weitere nationale Gebiete<br/>"));
  return a;
},
    fnContentLanduse = function (b) {
  var a = "";
  "quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");
  "open_stable" == b["animal_keeping:type"] && (a += "Offenstall<br/>");
  "field_shelter" == b["animal_keeping:type"] && (a += "Weide mit Unterstand<br/>");
  "paddock" == b["animal_keeping:type"] && (a += "Paddock<br/>");
  b.animal_keeping && (a += "Tiere: Perde<br/>");
  return a;
},
    fnMessstation = function (b) {
  var a = "";
  "yes" == b["monitoring:water_level"] && (a += "Pegelstand<br/>");
  "yes" == b["monitoring:seismic_activity"] && (a += "seismische Aktivit\u00e4ten<br/>");
  "yes" == b["monitoring:tide_gauge"] && (a += "Tidestand<br/>");
  "yes" == b["monitoring:weather"] && (a += "Wetterdaten<br/>");
  "yes" == b["monitoring:air_quality"] && (a += "Luftqualit\u00e4t<br/>");
  return a;
},
    fnContentRoute = function (b) {
  var a = "";
  b.route && ("yes" == b.roundtrip && (a += "Rundweg<br/>"), b.length && (a += "L\u00e4nge/Distanz: " + b.length + "<br/>"), b.distance && (a += "L\u00e4nge/Distanz: " + b.distance + "<br/>"), b.symbol && (a += "Symbol: " + b.symbol + "<br/>"));
  return a;
},
    fnContentPetrol = function (b) {
  var a = "";
  "fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "Biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "Ethanol<br/>"), "yes" == b["fuel:e10"] && (a += "E10<br/>"), "yes" == b["fuel:lpg"] && (a += "Autogas<br/>"), "yes" == b["fuel:cng"] && (a += "Erdgas<br/>"), "diesel" == b.fuel && (a += "Diesel<br/>"), "lpg" == b.fuel && (a += "Autogas<br/>"), "yes" == b["fuel:octane_95"] && (a += "Super Bleifrei<br/>"), "yes" == b["fuel:octane_98"] && (a += "Super Plus<br/>"), "yes" == b["fuel:octane_100"] && (a += "V-Power Racing<br/>"), "yes" == b["fuel:octane_102"] && (a += "Ultimate<br/>"), "yes" == b["fuel:diesel"] && (a += "Diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "Ladestation / Stromtankstelle<br/>"));
  return a;
},
    fnContentHistoric = function (b) {
  var a = "";
  if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {
    case "megalith":
      a += "Megalith<br/>";
      break;

    case "bigstone":
      a += "Findling<br/>";
      break;

    case "tumulus":
      a += "H\u00fcgelgrab<br/>";
      break;

    case "fortification":
      a += "historischer Graben / Wall<br/>";
      break;

    default:
      a += "unbekannt<br/>";
  }
  return a;
},
    fnContentBarriers = function (b, a) {
  var c = "";
  if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "Material: " + translate(b.material) + "<br/>");
  return c;
},
    fnContentTourism = function (b) {
  var a = "";

  if ("camp_site" == b.tourism) {
    "yes" == b.dog && (a += "Hunde erlaubt<br/>");
    "no" == b.dog && (a += "Hunde nicht erlaubt<br/>");
    b.stars && (a += b.stars + "Sterne<br/>");
    b.caravans && (a += "Wohnmobilstellpl\u00e4tze<br/>");
    if ("yes" == b.openfire || "yes" == b.fireplace) a += "Feuerstellen vorhanden<br/>";
    "yes" == b.washing_machine && (a += "Waschmaschinen<br/>");
    "yes" == b.dryer && (a += "Trockner<br/>");
    "yes" == b.group_only && (a += "Nutzung nur durch Gruppen<br/>");
    "reception" == b.camp_site && (a += "Reception vorhanden<br/>");
  }

  "information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "Topografische Karte</br>"), "street" == b.map_type && (a += "Stra\u00dfenkarte</br>"), "scheme" == b.map_type && (a += "Schematische Karte</br>"), "toposcope" == b.map_type && (a += "Schematische Karte</br>"));
  "information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "Karte einer Anlage</br>"), "city" == b.map_size && (a += "Stadtplan</br>"), "region" == b.map_size && (a += "Karte der Region</br>"));
  "geology" == b.board_type && (a += "Geologische Informationen<br/>");
  "history" == b.board_type && (a += "Historische Informationen<br/>");
  "nature" == b.board_type && (a += "Informationen \u00fcber Natur<br/>");
  "notice" == b.board_type && (a += "Allgemeine Information<br/>");
  "plants" == b.board_type && (a += "Informationen \u00fcber Pflanzen<br/>");
  "wildlife" == b.board_type && (a += "Informationen \u00fcber Wild<br/>");
  return a;
},
    fnContentAmenity = function (b) {
  var a = "";
  "boat_sharing" == b.amenity && (a += b.boattype + "<br/>");
  "embassy" == b.amenity && (a += b.country + "<br/>");
  if (b.vending) switch (b.vending) {
    case "admission_tickets":
      a += "Tickets<br/>";
      break;

    case "animal_feed":
      a += "Tierfutter<br/>";
      break;

    case "books":
      a += "B\u00fccher<br/>";
      break;

    case "candles":
      a += "Kerzen<br/>";
      break;

    case "cigarettes":
      a += "Zigaretten<br/>";
      break;

    case "condoms":
      a += "Kondome<br/>";
      break;

    case "drinks":
      a += "Getr\u00e4nke<br/>";
      break;

    case "first_aid":
      a += "Erste Hilfe Artikel<br/>";
      break;

    case "fishing_tackle":
      a += "Angelequipment<br/>";
      break;

    case "flowers":
      a += "Blumen<br/>";
      break;

    case "ice_cream":
      a += "Eis<br/>";
      break;

    case "laundry_detergent":
      a += "Waschmittel<br/>";
      break;

    case "newspapers":
      a += "Zeitung<br/>";
      break;

    case "SIM_cards":
      a += "SIM-Karten<br/>";
      break;

    case "sweets":
      a += "S\u00fc\u00dfigkeiten<br/>";
      break;

    case "parcel_pickup":
      a += "Paketstation<br/>";
      break;

    case "ice_cubes":
      a += "Eisw\u00fcrfel<br/>";
      break;

    case "public_transport_tickets":
      a += "Tickets f\u00fcr \u00f6ffentliche Verkehrsmittel<br/>";
      break;

    case "parking_ticket":
      a += "Parkticket<br/>";
      break;

    case "sex_toys":
      a += "Sexspielzeug<br/>";
      break;

    case "stamps":
      a += "Briefmarken<br/>";
      break;

    case "toll":
      a += "Mauttickets<br/>";
      break;

    case "umbrellas":
      a += "Regenschirme<br/>";
      break;

    default:
      a += "Inhalt unbekannt<br/>";
  }
  "post_box" == b.amenity && (b.collection_times && (a += "Leerungszeiten: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "Vom Auto aus erreichbar. <br/>"));
  return a;
},
    fnContentStorage = function (b) {
  var a = "";

  if ("storage_tank" == b.man_made) {
    if (b.content) {
      var c = b.content;

      switch (c) {
        case "fuel":
          c = "Diesel";
          break;

        case "oil":
          c = "\u00d6l";
          break;

        case "gas":
          c = "Gas";
          break;

        case "slurry":
          c = "G\u00fclle";
          break;

        case "cement":
          c = "Zement";
          break;

        case "water":
          c = "Wasser";
          break;

        case "manure":
          c = "D\u00fcnger";
          break;

        case "silage":
          c = "Silage";
      }

      a += "Inhalt: " + c + "<br/>";
    }

    if (b.contents) {
      c = b.contents;

      switch (c) {
        case "fuel":
          c = "Diesel";
          break;

        case "oil":
          c = "\u00d6l";
          break;

        case "gas":
          c = "Gas";
          break;

        case "slurry":
          c = "G\u00fclle";
          break;

        case "cement":
          c = "Zement";
          break;

        case "water":
          c = "Wasser";
          break;

        case "manure":
          c = "D\u00fcnger";
          break;

        case "silage":
          c = "Silage";
      }

      a += "Inhalt: " + c + "<br/>";
    }
  }

  b.storage && ("gas" == b.storage && (a += "Inhalt: Gas<br/>"), "oil" == b.storage && (a += "Inhalt: \u00d6l<br/>"));
  return a;
},
    fnContentInformationCity = function (b) {
  var a = "";
  b["name:de"] && (a += "deutscher Name: " + b["name:de"] + "<br/>");
  if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
    var c = b.population.length % 3,
        d = 0 < c ? b.population.substring(0, c) : "";

    for (i = 0; i < Math.floor(b.population.length / 3); i++) d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));

    a += "Einwohnerzahl: " + d + "<br/>";
  } else a += "Einwohnerzahl " + b.population + "<br/>";
  1E4 >= b.population && (a += "Einwohnerzahl: " + b.population + "<br/>");
  return a;
},
    fnContentEmergency = function (b) {
  var a = "";
  b.lifeboat && ("inshore" == b.lifeboat ? a += "Einsatzgebiet: Inshore (Binnen)<br/>" : "offshore" == b.lifeboat && (a += "Einsatzgebiet: Offshore (Buten)<br/>"));
  b["lifeboat:class"] && (a += "Bootstyp: " + b["lifeboat:class"] + "<br/>");

  if (b["siren:type"]) {
    var c = b["siren:type"];

    switch (c) {
      case "mechanical":
        c = "mechanisch";
        break;

      case "electronic":
        c = "elektronisch";
        break;

      case "pneumatic":
        c = "pneumatisch";
        break;

      case "electromechanic":
        c = "elektromechanisch";
    }

    a += "Typ: " + c + "<br/>";
  }

  if (b["siren:purpose"]) {
    c = b["siren:purpose"];

    switch (c) {
      case "air_raid":
        c = "Luftschutz";
        break;

      case "tornado":
        c = "Tornado";
        break;

      case "storm":
        c = "Sturm";
        break;

      case "civil_defense":
        c = "Bev\u00f6lkerungsschutz";
        break;

      case "fire":
        c = "Feuer";
    }

    a += "Nutzung: " + c + "<br/>";
  }

  b["siren:model"] && (a += "Model: " + b["siren:model"] + "<br/>");
  b["siren:range"] && (a += "H\u00f6rweite: " + b["siren:range"] + "<br/>");
  return a;
},
    fnContentCuisine = function (b) {
  var a = "";

  if (b.cuisine) {
    var c = "",
        a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "Spezialit\u00e4ten: " : a + "K\u00fcche: ";
    "arabic" == b.cuisine && (c += "arabisch<br/>");
    "italian" == b.cuisine && (c += " italienisch<br/>");
    "international" == b.cuisine && (c += " international<br/>");
    "regional" == b.cuisine && (c += " regional<br/>");
    "chinese" == b.cuisine && (c += " chinesisch<br/>");
    "greek" == b.cuisine && (c += " griechisch<br/>");
    "african" == b.cuisine && (c += " afrikanisch<br/>");
    "german" == b.cuisine && (c += " deutsch<br/>");
    "mexican" == b.cuisine && (c += " mexikanisch<br/>");
    "french" == b.cuisine && (c += " franz\u00f6sisch<br/>");
    "indian" == b.cuisine && (c += " indisch<br/>");
    "iranian" == b.cuisine && (c += " iranisch<br/>");
    "lebanese" == b.cuisine && (c += " libanesisch<br/>");
    "thai" == b.cuisine && (c += " thail\u00e4ndisch<br/>");
    "balkan" == b.cuisine && (c += " balkan<br/>");
    "turkish" == b.cuisine && (c += " t\u00fcrkisch<br/>");
    "bavarian" == b.cuisine && (c += " bayrisch<br/>");
    "czech" == b.cuisine && (c += " tschechisch<br/>");
    "portuguese" == b.cuisine && (c += " portugiesisch<br/>");
    "spanish" == b.cuisine && (c += " spanisch<br/>");
    "japanese" == b.cuisine && (c += " japanisch<br/>");
    "fish" == b.cuisine && (c += " Fisch<br/>");
    "brazilian" == b.cuisine && (c += " brasilianisch<br/>");
    "asian" == b.cuisine && (c += " asiatisch<br/>");
    "mediterranean" == b.cuisine && (c += " mediterran<br/>");
    "seafood" == b.cuisine && (c += " Meeresfr\u00fcchte<br/>");
    "ice_cream" == b.cuisine && (c += " Eiscrem<br/>");
    "burger" == b.cuisine && (c += " Fast Food<br/>");
    "frozen_yogurt" == b.cuisine && (c += " Frozen Yogurt<br/>");
    "" == c && (c = b.cuisine + "<br/>");
    a += c;
  }

  return a;
},
    fnContentShipping = function (b) {
  var a = "";
  b.harbour = "yes";
  "yes" == b["access:tide"] && (a += "Zufahrtsbeschr\u00e4nkung durch Tide</br>");
  "yes" == b["access:swell"] && (a += "Zufahrtsbeschr\u00e4nkung durch Schwell</br>");
  "yes" == b["access:ice"] && (a += "Zufahrtsbeschr\u00e4nkung durch Eis</br>");
  b.vhf_channel && (a += "UKW-Kanal: " + b.vhf_channel + "</br>");
  b.mmsi && (a += "MMSI-Nummer: " + b.mmsi + "</br>");
  b["harbour:information"] && (a += "Information :" + b["harbour:information"] + "</br>");
  "yes" == b.motorboat && (a += "Fahren mit Motor erlaubt</br>");
  "no" == b.motorboat && (a += "Fahren mit Motor nicht erlaubt</br>");
  b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");
  "yes" == b.intermittent && (a += "Fluss zeitweise ausgetrocknet</br>");
  "yes" == b.tidal && (a += "Gezeiten beeinflussen die Str\u00f6mung</br>");
  b.draft && (a += "Fahrwassertiefe: " + b.draft + " m</br>");
  if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "Funktionsweise: Handbetrieb, Slipwagen<br/>"), "car" == b.operating && (a += "Funktionsweise: mit Auto, Bootsanh\u00e4nger<br/>"), "cable_winch" == b.operating && (a += "Funktionsweise: Seilwinde<br/>"), "travellift" == b.operating && (a += "Funktionsweise: Travellift<br/>"), "crane" == b.man_made && (a += "mit Kran<br/>", b["crane:maxload"] && (a += "Maximale Last: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "Maximaler Tiefgang: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "Maximale Bootsl\u00e4nge: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "Mit Fahrzeug erreichbar<br/>");
  a += fnWreckInfo(b);

  if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) {
    var c = b.duration;
    "" != c && "undefined" != c && null != c && (a += "Fahrtzeit in Std. : " + c + "<br/>");
    "yes" == b.motorcar && (a += "Autos erlaubt <br/>");
    "no" == b.motorcar && (a += "Autos nicht erlaubt <br/>");
    "no" == b.motor_vehicle && (a += "Fahrzeuge nicht erlaubt <br/>");
    "yes" == b.motor_vehicle && (a += "Fahrzeuge erlaubt <br/>");
    "yes" == b.vehicle && (a += "Fahrzeuge erlaubt <br/>");
    "no" == b.vehicle && (a += "Keine Fahrzeuge<br/>");
    "no" == b.bicycle && (a += "Keine Fahrr\u00e4der<br/>");
    "no" == b.bicycle && (a += "Fahrr\u00e4der erlaubt<br/>");
    "yes" == b.hgv && (a += "LKW erlaubt <br/>");
    "no" == b.hgv && (a += "LKW nicht erlaubt <br/>");
    "yes" == b.foot && (a += "Fussg\u00e4nger erlaubt <br/>");
    "no" == b.foot && (a += "Fussg\u00e4nger nicht erlaubt <br/>");
    "yes" == b.bicycle && (a += "Fahrradfahrer erlaubt <br/>");
    "no" == b.bicycle && (a += "Fahrradfahrer nicht erlaubt <br/>");
    "yes" == b["ferry:cable"] && (a += "Seilf\u00e4hre<br/>");
  }

  if (b["seamark:light:1:colour"]) {
    c = b["seamark:light:1:colour"];

    switch (c) {
      case "white":
        c = "Wei\u00df";
        break;

      case "red":
        c = "Rot";
        break;

      case "green":
        c = "Gr\u00fcn";
        break;

      case "blue":
        c = "Blau";
        break;

      case "yellow":
        c = "Gelb";
        break;

      case "amber":
        c = "Bernsteinfarben";
    }

    a += "Farbe des Lichts: " + c + "<br/>";
  }

  "lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "Periode: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "H\u00f6he: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "Reichweite: " + b["seamark:light:1:range"] + " sm<br/>"));

  if (b["seamark:light:colour"]) {
    c = b["seamark:light:colour"];

    switch (c) {
      case "white":
        c = "Wei\u00df";
        break;

      case "red":
        c = "Rot";
        break;

      case "green":
        c = "Gr\u00fcn";
        break;

      case "blue":
        c = "Blau";
        break;

      case "yellow":
        c = "Gelb";
        break;

      case "amber":
        c = "Bernsteinfarben";
    }

    a += "Farbe des Lichts: " + c + "<br/>";
  }

  "lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "H\u00f6he: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "Reichweite: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "Periode: " + b["seamark:light:period"] + "<br/>"));
  return a;
},
    fnContentHydrants = function (b) {
  var a = "";

  if ("fire_hydrant" == b.emergency) {
    var c = b["fire_hydrant:count"];
    "undefined" != c && null != c && "" != c && (a += "Anzahl: " + c + "<br/>");
    c = b["fire_hydrant:diameter"];
    "undefined" != c && null != c && "" != c && (a += "Rohrdurchmesser: " + c + " mm<br/>");
    c = b["fire_hydrant:pressure"];
    "undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Druck in bar / Saugleitung: Saugleitung<br/>" : a + ("Druck in bar / Saugleitung: " + c + "<br/>"));
    c = b["fire_hydrant:position"];
    "undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Fahrbahn<br/>" : "parking_lot" == c ? a += "Position: Parkbucht<br/>" : "sidewalk" == c ? a += "Position: B\u00fcrgersteig<br/>" : "green" == c && (a += "Position: Wiese<br/>"));
    c = b.water_volume;
    "undefined" != c && null != c && "" != c && (a += "Volumen: " + c + "<br/>");
    c = b["fire_hydrant:awwa_class"];
    "undefined" != c && null != c && "" != c ? a += "AWWA Klasse: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Durchfluss: " + c + "<br/>"));
    c = b.water_source;
    "undefined" != c && null != c && "" != c && "main" != c && (a += "Wasserquelle: " + c + "<br/>");
    c = b["couplings:type"];
    "undefined" != c && null != c && "" != c && (a += "Kopplungstyp: " + c + "<br/>");
    c = b["couplings:diameter"];
    "undefined" != c && null != c && "" != c && (a += "Kopplungsdurchmesser: " + c + "<br/>");
    c = b["pillar:type"];
    "dry_barrel" === c && (a += "Typ \u00dcberflurhydrant: " + c + "<br/>");
    "fire_hydrant" === b["disused:emergency"] && (a += "Aktuell unbrauchbar.");
    "" == a && (a = "Keine Details vorhanden.");
  }

  return a;
},
    fnContentStreetsTraffic = function (b) {
  var a = "";
  "yes" == b["red_turn:right"] && (a += "Ampel mit Gr\u00fcnpfeil<br/>");
  "no" == b["red_turn:right"] && (a += "Ampel ohne Gr\u00fcnpfeil<br/>");
  b.bridge && (b.height && (a += "H\u00f6he \u00fcber dem Grund: " + b.height + " m<br/>"), b.length && (a += "L\u00e4nge der Br\u00fccke: " + b.length + " m<br/>"), b.bridge_ref && (a += "Bauwerksnummer: " + b.bridge_ref + "<br/>"), b.start_date && (a += "Baujahr: " + b.start_date + "</br>;"), b.maxweight && (a += "Tragf\u00e4higkeit: " + b.maxweight + " t</br>"));
  b.highway && "yes" == b.toll && (a += "Mautpflichtige Stra\u00dfe<br/>");
  "yes" == b["toll:hgv"] && (a += "Mautpflichtige Stra\u00dfe f\u00fcr LKWs<br/>");

  if (b.surface) {
    var c = b.surface,
        a = a + "Oberfl\u00e4che: ";

    switch (c) {
      case "grass":
        a += "Gras<br/>";
        break;

      case "paved":
        a += "versiegelt<br/>";
        break;

      case "asphalt":
        a += "Asphalt<br/>";
        break;

      case "cobblestone":
        a += "Naturstein unbehauen<br/>";
        break;

      case "sett":
        a += "behauenes Steinpflaster<br/>";
        break;

      case "concrete":
        a += "Beton<br/>";
        break;

      case "unpaved":
        a += "ohne Stra\u00dfenbelag<br/>";
        break;

      case "paving_stones":
        a += "Pflastersteine<br/>";
        break;

      case "compacted":
        a += "verdichtete Deckschicht aus Natursteinmaterial<br/>";
        break;

      case "dirt":
        a += "unbefestigt<br/>";
        break;

      case "fine_gravel":
        a += "Splitt/Kies<br/>";
        break;

      case "grass_paver":
        a += "Rasengittersteine<br/>";
        break;

      case "gravel":
        a += "Schotter<br/>";
        break;

      case "earth":
        a += "naturbelassene Oberfl\u00e4che<br/>";
        break;

      case "ground":
        a += "naturbelassene Oberfl\u00e4che<br/>";
        break;

      case "metal":
        a += "Metall<br/>";
        break;

      case "mud":
        a += "Matsch, Morast<br/>";
        break;

      case "sand":
        a += "Sand<br/>";
        break;

      case "wood":
        a += "Holz<br/>";
        break;

      case "tartan":
        a += "Tartan- oder Kunststoffbelag<br/>";
        break;

      case "artificial_turf":
        a += "Kunstrasen<br/>";
        break;

      case "clay":
        a += "Ascheplatz<br/>";
        break;

      default:
        a += "unbekannt<br/>";
    }
  }

  "grade1" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Asphalt, Beton oder Pflastersteine)<br/>");
  "grade2" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Schotter oder andere verdichtete Materialien)<br/>");
  "grade3" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter oder ausgebesserter Weg, der harten und weichen Untergrund enth\u00e4lt (z. B. Feinschotter-, Sand- oder Erdweg)<br/>");
  "grade4" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, haupts\u00e4chlich weiche Materialien, Pflanzenwuchs entlang der Spurmitte (z. B. Gras-, Sand- oder Erdweg)<br/>");
  "grade5" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, Oberfl\u00e4che besteht aus Sand, Erde etc., oft nur Abdruck in Gras, teilweise schwer von umgebendem Gel\u00e4nde unterscheidbar<br/>");
  "yes" == b.motorcycle && (a += "<br/>mit dem Auto befahrbar.<br/>");
  "no" == b.motorcycle && (a += "<br/>keine motorisierten Fahrzeuge zugelassen.<br/>");
  "excellent" == b.trail_visibility && (a += "Wegerkennbarkeit: Gut ausgewiesener Weg<br/>");
  "good" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegmarkierung sichbar, aber manchmal etwas schwer zu finden<br/>");
  "intermediate" == b.trail_visibility && (a += "Wegerkennbarkeit: Weg nicht durchgegend sichbar<br/>");
  "bad" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegspur ist kaum zu erkennen<br/>");
  "horrible" == b.trail_visibility && (a += "Wegerkennbarkeit: Oft kein Weg vorhanden<br/>");
  "no" == b.trail_visibility && (a += "Wegerkennbarkeit: Meistens keine Wegspur zu erkennen<br/>");
  "hiking" == b.sac_scale && (a += "Weg: Weg gut gebahnt. (Schwierigskeitstyp: 1)</br>");
  "mountain_hiking" == b.sac_scale && (a += "Weg: Durchgehend gut ersichtlicher und gut begehbarer Weg (Schwierigskeitstyp: 2)</br>");
  "demanding_mountain_hiking" == b.sac_scale && (a += "Weg: Heikle Stellen k\u00f6nnen mit Seilen oder Ketten gesichert sein. Leitern sind m\u00f6glich. Eventuell sind die H\u00e4nde f\u00fcrs Gleichgewicht n\u00f6tig. (Schwierigskeitstyp: 3)</br>");
  "alphine_hiking" == b.sac_scale && (a += "Weg: Wegspur kaum vorhanden. An gewissen Stellen ben\u00f6tigt man die H\u00e4nde zum weiterkommen (Schwierigskeitstyp: 4)</br>");
  "demanding_alphine_hiking" == b.sac_scale && (a += "Weg: Oft weglos, einzelne einfache Kletterstellen bis II. (Schwierigskeitstyp: 5)</br>");
  "difficult_alpine_hiking" == b.sac_scale && (a += "Weg: Schwieriges Alpinenwandern,Kletterstellen bis II. Schwierigskeitstyp: 6</br>");
  b["mtb:name"] && (a += "Fahrradstrecke :" + b["mtb:name"] + "</br>");
  "0" == b["mtb:scale"] && (a += "Mountainbikestrecke: Keine besondere Schwierigkeiten.</br>Wegbeschaffenheit: fester und griffiger Untergrund.</br>Hindernisse: Keine Hindernisse</br>Gef\u00e4lle: Leicht bis m\u00e4\u00dfig</br>Kurven: weit</br>Fahrtechnik: keine besonderes fahrtechnisches K\u00f6nnen n\u00f6tig</br>");
  "1" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\u00e4lt flache Wurzeln und kleinere Steine. H\u00e4ufig auch vereizelte Wasserrinnen und Erosionssch\u00e4den</br>Wegbeschaffenheit: loserer Untergrund m\u00f6glich, kleine Wurzeln und Steine</br>Hindernisse: kleine Hindernisse, Wasserrinnen, Erosionssch\u00e4den</br>Gef\u00e4lle: bis zu 40%</br>Kurven: eng</br>Fahrtechnik: Fahrtechnische Grundkentnisse n\u00f6tig. Hindernisse k\u00f6nnen \u00fcberrollt werden</br>");
  "2" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\u00e4lt gr\u00f6\u00dfere Wurzeln und Steine. H\u00e4ufig auch vereizelte Wasserrinnen und Erosionssch\u00e4den</br>Wegbeschaffenheit: Untergrund meist nicht verfestigt, gr\u00f6\u00dfere Wurzeln und Steine</br>Hindernisse:  flache Abs\u00e4tze und Treppen</br>Gef\u00e4lle: bis zu 70%</br>Kurven: leichte Spitzkehren</br>Fahrtechnik: Fortgeschrittene Fahrtechnik n\u00f6tig.</br>");
  "3" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg findet man verblockte Singletrails mit vielen gr\u00f6\u00dferen Felsbrocken und/oder Wurzelpassagen</br>Wegbeschaffenheit: verblockt, viele gro\u00dfe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\u00f6ll</br>Hindernisse:  hohe Abs\u00e4tze</br>Gef\u00e4lle: 70% oder mehr</br>Kurven: enge Spitzkehren</br>Fahrtechnik: Sehr gute Bike-Beherrschung n\u00f6tig.</br>");
  "4" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg sind sehr steile und stark verblockte Singletrails mit gro\u00dfen Felsbrocken und/oder anspruchsvollen Wurzelpassagen, dazwischen h\u00e4ufig loses Ger\u00f6ll und extreme Steilrampen</br>Wegbeschaffenheit: verblockt, viele gro\u00dfe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\u00f6ll</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\u00e4tze</br>Gef\u00e4lle: 70% oder mehr</br>Kurven:  \u00d6senartige Spitzkehren</br>Fahrtechnik: Perfekte Bike-Beherrschung mit Trial-Techniken n\u00f6tig.</br>");
  "5" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg wird charakterisiert durch blockartiges Gel\u00e4nde mit Gegenanstiegen, Ger\u00f6llfeldern und Erdrutschen, \u00f6senartigen Spitzkehren, mehreren hohen, direkt aufeinanderfolgenden Abs\u00e4tzen und Hindernissen wie umgefallenen B\u00e4umen</br>Wegbeschaffenheit: verblockt mit Gegenanstiegen / rutschiger Untergrund, loses Ger\u00f6ll / der Weg ist eher ein Wandersteig</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\u00e4tze</br>Gef\u00e4lle: 70% oder mehr</br>Kurven:  \u00d6senartige Spitzkehren mit Hindernissen</br>Fahrtechnik: excellente Bike-Beherrschung spezieller Trial-Techniken n\u00f6tig.</br>");
  "6" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg ist hochanspruchsvoll, und selbst f\u00fcr Profis und Trial-Fahrer nicht passierbar</br>Wegbeschaffenheit:  Gro\u00dfteils nur noch kletterbar</br>Hindernisse: Abs\u00e4tze > 2 m, Leitern, Trittstufen, Kletterstellen bei denen man beide H\u00e4nde braucht.</br>Gef\u00e4lle: 100% oder mehr</br>Kurven: - </br>Fahrtechnik:  hier reicht auch die beste Fahrtechnik nicht mehr</br>");
  "10" == b.maxspeed && (a += "Vekehrsber\u00fchigter Bereich. Hier gilt eine maximale Fahrgeschwindigkeit von 10 Km/h sowie die Regel rechts vor links.</br>");
  "30" == b.maxspeed && (a += "Vekehrsber\u00fchigter Bereich. Hier gilt rechts vor links sowie eine maximale Geschwindigkeit von 30 Km/h</br>");
  "50" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \u00fcberschritten werden </br>");
  "70" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \u00fcberschritten werden </br>");
  "80" == b.maxspeed && (a += "Maximale Geschwindigkeit von 80 Km/h darf nicht \u00fcberschritten werden.</br>");
  "100" == b.maxspeed && (a += "Maximale Geschwindigkeit von 100 Km/h darf nicht \u00fcberschritten werden.</br>");
  "no" == b.overtaking && (a += "\u00dcberholverbot, Fahrzeuge d\u00fcrfen nicht \u00fcberholen !</br>");
  "yes" == b.noexit && (a += "Die Stra\u00dfe endet hier, es handelt sich um eine Sackgasse</br>");
  "yes" == b.oneway && (a += "Es handelt sich hier um eine Einbahnstra\u00dfe, sie d\u00fcrfen diese Stra\u00dfe nur in eine Richtung befahren</br>");
  "designated" == b.priority_road && (a += "Es handelt sich hierbei um eine Vorfahrtsstra\u00dfe, derjenige, der sich auf dieser befindet, hat gegen\u00fcber anderen Fahrzeugen die Vorfahrt!</br>");
  "end" == b.priority_road && (a += "Die Vorfahrtsstra\u00dfe endet hier und die Regelung wird aufgehoben</br>");
  "emergency_bay" == b.highway && (a += "Hier befindet sich eine Bucht die nur in Notf\u00e4llen zur Benuzung zur Verf\u00fcgung steht</br>");
  "yes" == b.traffic_calming && (a += "Verkehrsberuhigter Bereich</br>");
  "bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");
  "chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");
  "choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\u00f6glich</br>");
  "cushion" == b.traffic_calming && (a += "Bodenwelle mit L\u00fccken aus mehreren rechteckigen Huckeln</br>");
  "hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\u00e4nge von 2-4M</br>");
  "island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");
  "rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");
  "table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\u00fcck</br>");

  if ("parking" == b.amenity && ("yes" == b.fee && (a += "kostenpflichtig<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
    var d = "unbekannt";
    "yes" != c && (d = c);
    a += "Frauenparkpl\u00e4tze (Anzahl: " + d + ") <br/>";
  }

  b.park_ride && ("bus" == b.park_ride && (a += "Busanbindung<br/>"), "tram" == b.park_ride && (a += "Bahnanbindung<br/>"), "unknown" == b.park_ride && (a += "Verkehrsmittel unbekannt<br/>"));
  b["railway:position"] && (a += "Streckenkilometer<br/>Position: " + b["railway:position"] + "<br/>");
  b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");
  return a;
},
    fnContentSports = function (b) {
  var a = "";
  "9pin" == b.sport && (a += "M\u00f6gliche Sportart: Kegeln<br/>");
  "10pin" == b.sport && (a += "M\u00f6gliche Sportart: Bowling<br/>");
  "american_football" == b.sport && (a += "M\u00f6gliche Sportart: American Football<br/>");
  "aikido" == b.sport && (a += "M\u00f6gliche Sportart: Aikido<br/>");
  "archery" == b.sport && (a += "M\u00f6gliche Sportart: Bogenschie\u00dfen<br/>");
  "athletics" == b.sport && (a += "M\u00f6gliche Sportart: Leichtathletik<br/>");
  "australian_football" == b.sport && (a += "M\u00f6gliche Sportart: Australian Football<br/>");
  "base" == b.sport && (a += "M\u00f6gliche Sportart: Objektspringen<br/>");
  "badminton" == b.sport && (a += "M\u00f6gliche Sportart: Badminton<br/>");
  "baseball" == b.sport && (a += "M\u00f6gliche Sportart: Baseball<br/>");
  "basketball" == b.sport && (a += "M\u00f6gliche Sportart: Basketball<br/>");
  "beachvolleyball" == b.sport && (a += "M\u00f6gliche Sportart: Beachvolleyball<br/>");
  "bmx" == b.sport && (a += "M\u00f6gliche Sportart: BMX<br/>");
  "boules" == b.sport && (a += "M\u00f6gliche Sportart: Boccia<br/>");
  "boule" == b.sport && (a += "M\u00f6gliche Sportart: Boccia<br/>");
  "bowls" == b.sport && (a += "M\u00f6gliche Sportart: Bowls<br/>");
  "boxing" == b.sport && (a += "M\u00f6gliche Sportart: Boxen<br/>");
  "canadian_football" == b.sport && (a += "M\u00f6gliche Sportart: Canadian Football<br/>");
  "canoe" == b.sport && (a += "M\u00f6gliche Sportart: Paddeln<br/>");
  "chess" == b.sport && (a += "M\u00f6gliche Sportart: Schach<br/>");
  "cliff_diving" == b.sport && (a += "M\u00f6gliche Sportart: Klippenspringen<br/>");
  "climbing" == b.sport && (a += "M\u00f6gliche Sportart: Klettern<br/>");
  "climbing_adventure" == b.sport && (a += "M\u00f6gliche Sportart: Klettern<br/>");
  "cricket" == b.sport && (a += "M\u00f6gliche Sportart: Cricket<br/>");
  "cricket_nets" == b.sport && (a += "M\u00f6gliche Sportart: Cricket Netz<br/>");
  "croquet" == b.sport && (a += "M\u00f6gliche Sportart: Croquet<br/>");
  "curling" == b.sport && (a += "M\u00f6gliche Sportart: Curling<br/>");
  "cycling" == b.sport && (a += "M\u00f6gliche Sportart: Radrennen, Radsport<br/>");
  "dog_racing" == b.sport && (a += "M\u00f6gliche Sportart: Hunderennen<br/>");
  if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";
  "fencing" == b.sport && (a += "M\u00f6gliche Sportart: Fechten<br/>");
  "equestrian" == b.sport && (a += "M\u00f6gliche Sportart: Reiten<br/>");
  "football" == b.sport && (a += "M\u00f6gliche Sportart: American Football<br/>");
  "free_flying" == b.sport && (a += "M\u00f6gliche Sportart: Freeflying<br/>");
  "gaelic_games" == b.sport && (a += "M\u00f6gliche Sportart: Gaelic games<br/>");
  "golf" == b.sport && (a += "M\u00f6gliche Sportart: Golf<br/>");
  "gymnastics" == b.sport && (a += "M\u00f6gliche Sportart: Gymnastik<br/>");
  "hockey" == b.sport && (a += "M\u00f6gliche Sportart: Hockey<br/>");
  "horseshoes" == b.sport && (a += "M\u00f6gliche Sportart: Hufeisenwerfen<br/>");
  "horse_racing" == b.sport && (a += "M\u00f6gliche Sportart: Pferderennen<br/>");
  "ice_stock" == b.sport && (a += "M\u00f6gliche Sportart: Eisstockschie\u00dfen<br/>");
  "judo" == b.sport && (a += "M\u00f6gliche Sportart: Judo<br/>");
  "karting" == b.sport && (a += "M\u00f6gliche Sportart: Kartfahren<br/>");
  "kitesurfing" == b.sport && (a += "M\u00f6gliche Sportart: Kitesurfing<br/>");
  "korfball" == b.sport && (a += "M\u00f6gliche Sportart: Korfball<br/>");
  "motor" == b.sport && (a += "M\u00f6gliche Sportart: Motorsport<br/>");
  "multi" == b.sport && (a += "M\u00f6gliche Sportart: Mehrfachsport<br/>");
  "obstacle_course" == b.sport && (a += "M\u00f6gliche Sportart: Hindernislauf<br/>");
  "orienteering" == b.sport && (a += "M\u00f6gliche Sportart: Orientierungslauf<br/>");
  "paddle_tennis" == b.sport && (a += "M\u00f6gliche Sportart: Paddle-Tennis<br/>");
  "paragliding" == b.sport && (a += "M\u00f6gliche Sportart: Gleitschirmfliegen<br/>");
  "Pelota" == b.sport && (a += "M\u00f6gliche Sportart: Pelota<br/>");
  "rasquet" == b.sport && (a += "M\u00f6gliche Sportart: Racquetball<br/>");
  "rowing" == b.sport && (a += "M\u00f6gliche Sportart: Rudern<br/>");
  "rugby_league" == b.sport && (a += "M\u00f6gliche Sportart: Rugby League<br/>");
  "rugby_union" == b.sport && (a += "M\u00f6gliche Sportart: Rugby Union<br/>");
  "running" == b.sport && (a += "M\u00f6gliche Sportart: Laufsport<br/>");
  "scuba_diving" == b.sport && (a += "M\u00f6gliche Sportart: Sporttauchen<br/>");
  "shooting" == b.sport && (a += "M\u00f6gliche Sportart: Sportschie\u00dfen<br/>");
  "skating" == b.sport && (a += "M\u00f6gliche Sportart: Eislaufsport<br/>");
  "skateboard" == b.sport && (a += "M\u00f6gliche Sportart: Skateboard<br/>");
  "skiing" == b.sport && (a += "M\u00f6gliche Sportart: Skifahren<br/>");
  "soccer" == b.sport && (a += "M\u00f6gliche Sportart: Fu\u00dfball<br/>");
  "surfing" == b.sport && (a += "M\u00f6gliche Sportart: Surfen<br/>");
  "swimming" == b.sport && (a += "M\u00f6gliche Sportart: Schwimmen<br/>");
  "table_tennis" == b.sport && (a += "M\u00f6gliche Sportart: Tischtennis<br/>");
  "taekwondo" == b.sport && (a += "M\u00f6gliche Sportart: Taekwondo<br/>");
  "team_handball" == b.sport && (a += "M\u00f6gliche Sportart: Handball<br/>");
  "tennis" == b.sport && (a += "M\u00f6gliche Sportart: Tennis<br/>");
  "toboggan" == b.sport && (a += "M\u00f6gliche Sportart: Rodeln<br/>");
  "volleyball" == b.sport && (a += "M\u00f6gliche Sportart: Volleyball<br/>");
  "water_ski" == b.sport && (a += "M\u00f6gliche Sportart: Wasserski<br/>");
  "weightlifting" == b.sport && (a += "M\u00f6gliche Sportart: Gewichtheben<br/>");
  "wrestling" == b.sport && (a += "M\u00f6gliche Sportart: Ringen<br/>");
  return a;
};
function fnArztInfo(b) {
  var a = "",
      c = "",
      d = b["healthcare:speciality"];
  "" != d && ("general" == d && (c += "Allgemeinmedizin<br/>"), "allergology" == d && (c += "Allergologie<br/>"), "anaesthetics" == d && (c += "An\u00e4sthesiologie<br/>"), "biochemistry" == d && (c += "Medizinische und chemische Labordiagnostik<br/>"), "biological_haematology" == d && (c += "Biologische H\u00e4matologie<br/>"), "biology" == d && (c += "Medizinische Biologie<br/>"), "cardiology" == d && (c += "Kardiologie<br/>"), "cardiac_surgery" == d && (c += "Kardiovaskularchirurgie<br/>"), "child_psychiatry" == d && (c += "Kinder- u. Jugendpsychatrie<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "Zahn-, Mund-, Kiefer- und Gesichtschirurgie<br/>"), "dermatology" == d && (c += "Hautkrankheiten<br/>"), "dermatovenereology" == d && (c += "Haut- und Geschlechtskrankheiten<br/>"), "diagnostic_radiology" == d && (c += "Diagnostische Radiologie<br/>"), "emergency" == d && (c += "Unfall- und Notfallmedizin<br/>"), "endocrinology" == d && (c += "Endokrinologie<br/>"), "gastroenterological_surgery" == d && (c += "Gastroenterologische Chirurgie<br/>"), "gastroenterology" == d && (c += "Gastroenterologie<br/>"), "geriatrics" == d && (c += "Geriatrie<br/>"), "gynaecology" == d && (c += "Geburtshilfe und Frauenheilkunde<br/>"), "haematology" == d && (c += "Allgemeine H\u00e4matologie<br/>"), "hepatology" == d && (c += "Hepatologie<br/>"), "immunology" == d && (c += "Immunologie<br/>"), "infectious_diseases" == d && (c += "Ansteckende Krankheiten<br/>"), "intensive" == d && (c += "Intensivmedizin<br/>"), "internal" == d && (c += "Allgemeine (innere) Medizin<br/>"), "maxillofacial_surgery" == d && (c += "Mund-Kiefer-Gesichtschirurgie<br/>"), "nephrology" == d && (c += "Nierenkrankheiten<br/>"), "neurology" == d && (c += "Neurologie<br/>"), "neurophysiology" == d && (c += "Klinische Neurophysiologie<br/>"), "neuropsychiatry" == d && (c += "Neuropsychiatrie(Neurologie und Psychiatrie)<br/>"), "neurosurgery" == d && (c += "Neurochirurgie<br/>"), "nuclear" == d && (c += "Nuklearmedizin<br/>"), "occupational" == d && (c += "Arbeitsmedizin <br/>"), "oncology" == d && (c += "Onkologie<br/>"), "ophthalmology" == d && (c += "Augenheilkunde<br/>"), "orthopaedics" == d && (c += "Orthop\u00e4die<br/>"), "otolaryngology" == d && (c += "Hals-Nasen-Ohren-Heilkunde<br/>"), "paediatric_surgery" == d && (c += "Kinderchirurgie<br/>"), "paediatrics" == d && (c += "Kinderheilkunde<br/>"), "palliative" == d && (c += "Palliativmedizin<br/>"), "physiatry" == d && (c += "Physikalischeund Rehabilitative Medizin<br/>"), "plastic_surgery" == d && (c += "Plastische Chirurgie<br/>"), "proctology" == d && (c += "Proktologie<br/>"), "psychiatry" == d && (c += "Psychiatrie<br/>"), "pulmonology" == d && (c += "Lungen- und Bronchialheilkunde<br/>"), "radiology" == d && (c += "Radiologie<br/>"), "radiotherapy" == d && (c += "Strahlentherapie<br/>"), "rheumatology" == d && (c += "Rheumatologie<br/>"), "stomatology" == d && (c += "Stomatologie<br/>"), "surgery" == d && (c += "Chirurgie<br/>"), "surgical_oncology" == d && (c += "Krebschirurgie<br/>"), "thoracic_surgery" == d && (c += "Thoraxchirurgie<br/>"), "transplant" == d && (c += "Transplantationsmedizin<br/>"), "trauma" == d && (c += "Unfallchirurgie<br/>"), "tropical" == d && (c += "Tropenmedizin<br/>"), "urology" == d && (c += "Urologie<br/>"), "vascular_surgery" == d && (c += "Gef\u00e4\u00dfchirurgie<br/>"), "venereology" == d && (c += "Geschlechtskrankheiten<br/>"), "acupuncture" == d && (c += "Akupunktur<br/>"), "naturopathy" == d && (c += "Naturheilkunde<br/>"), "chiropractic" == d && (c += "Chiropraktik <br/>"), "homeopathy" == d && (c += "Hom\u00f6opathie<br/>"), "osteopathy" == d && (c += "Osteopathie<br/>"));
  "" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "Notfallmedizin<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "An\u00e4sthesie<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "Dermatologie<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "Hals, Nasen, Ohren (HNO)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "Arbeitsnmedizin<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "innere Medizin<br/>"), "yes" == b["health_specialty:neurology"] && (c += "Neurologie<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "Augenheilkunde<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "Palliativmedizin<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "Psychatrie<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "Gyn\u00e4kologie<br/>"), "yes" == b["health_specialty:urology"] && (c += "Urologie<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "Schmerzmedizin<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "Umweltmedizin<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "Intensivmedizin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "Kinder- u. Jugendmedizin<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "Physikalische und Rehabilitative Medizin<br/>"), "yes" == b["health_specialty:radiology"] && (c += "Radiologie<br/>"), "yes" == b["health_specialty:general"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "Ergotherapie<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "Pneumologie<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "Akupunktur<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "Orthop\u00e4die<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "Chiropraktik<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "Sportmedizin<br/>"));
  "" != c && (a = a + "Fachgebiete: " + ('<div class="c4g_open_text">' + c + "</div>"));
  return a;
}
function fnKraftwerkInfo(b) {
  var a = "";

  if (b["generator:method"]) {
    a += "Erzeugungsart: ";

    switch (b["generator:method"]) {
      case "combustion":
        a += "Verbrennung";
        break;

      case "thermal":
        a += "thermische Nutzung (z.B. Solarthermie)";
        break;

      case "pumping":
        a += "durch Pumpen (z.B. die Nutzung von Geothermie)";
        break;

      case "photovoltaic":
        a += "Photovoltaik";
        break;

      case "gasification":
        a += "Vergasung, danach Verbrennung";
        break;

      case "anaerobic_digestion":
        a += "Erzeugung von Biogas durch Verg\u00e4rung";
        break;

      case "pyrolysis":
        a += "Pyrolyse, Aufspaltung durch hohe Temperaturen";
        break;

      case "fission":
        a += "Kernspaltung";
        break;

      case "fusion":
        a += "Kernfusion";
        break;

      default:
        a += "unbekannt<br/>";
    }

    a += "<br/>";
  }

  if (b.power_source) {
    a += "Erzeugungsart: ";

    switch (b.power_source) {
      case "photovoltaic":
        a += "Photovoltaik";
        break;

      default:
        a += "unbekannt<br/>";
    }

    a += "<br/>";
  }

  b["generator:output:electricity"] && (a += "elekt. Energieerzeugung: " + b["generator:output:electricity"] + "<br/>");
  b["generator:output:heat"] && (a += "therm. Energieerzeugung: " + b["generator:output:heat"] + "<br/>");
  b["generator:output:cold"] && (a += "therm. Energieerzeugung: " + b["generator:output:cold"] + "<br/>");
  b["generator:output"] && (a += "Nennleistung: " + b["generator:output"] + "<br/>");
  b["generator:output:hot_air"] && (a += "Art des Transportmediums: " + b["generator:output:hot_air"] + "<br/>");
  b["generator:output:cold_water"] && (a += "Art des Transportmediums: " + b["generator:output:cold_water"] + "<br/>");
  b["generator:output:cold_air"] && (a += "Art des Transportmediums: " + b["generator:output:cold_air"] + "<br/>");
  b["generator:output:compressed_air"] && (a += "Art des Transportmediums: " + b["generator:output:compressed_air"] + "<br/>");
  b["generator:output:steam"] && (a += "Art des Transportmediums: " + b["generator:output:steam"] + "<br/>");
  b["generator:output:vacuum"] && (a += "Art des Transportmediums: " + b["generator:output:vacuum"] + "<br/>");
  b["generator:output:battery_charging"] && (a += "Art des Transportmediums: " + b["generator:output:battery_charging"] + "<br/>");
  "PWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-1" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-2" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-3" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-4" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-5" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-6" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "PHWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "GCR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "FBR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "RBMK-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "RBMK-1500" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "VVER" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "CANDU" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "CPR-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "EPR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "tokamak" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "stellarator" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "ICF" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "cold-fusion" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Horizontal-Achsen Windenergieanlage<br/>");
  "wind_turbine" == b["generator:method"] && "vertical_turbine" == b["generator:type"] && (a += "Generatortyp: Vertikalrotor<br/>");
  "francis_turbine" == b["generator:type"] && (a += "Generatortyp: Francis-Turbine<br/>");
  "kaplan_turbine" == b["generator:type"] && (a += "Generatortyp: Kaplan-Turbine<br/>");
  "pelton_turbine" == b["generator:type"] && (a += "Generatortyp: Pelton-Turbine<br/>");
  "stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit horizontaler Achse<br/>");
  "stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit vertikaler Achse<br/>");
  "steam_turbine" == b["generator:type"] && (a += "Generatortyp: Dampfturbine<br/>");
  "heat_pump" == b["generator:type"] && (a += "Generatortyp: W\u00e4rmepumpe<br/>");
  "solar_thermal_collector" == b["generator:type"] && (a += "Generatortyp: Sonnenkollektor<br/>");
  "solar_photovoltaic_panel" == b["generator:type"] && (a += "Generatortyp: Photovoltaic-System<br/>");
  "steam_generator" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");
  "gas_turbine" == b["generator:type"] && (a += "Generatortyp: Gasturbine<br/>");
  "combined_cycle" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");
  "reciprocating_engine" == b["generator:type"] && (a += "Generatortyp: Verbrennungsmotor/Blockheizkraftwerk<br/>");
  return a;
}
function fnWertstoffinfo(b) {
  var a = "";
  if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "Altglascontainer</br>"), "yes" == b["recycling:shoes"] && (a += "Schuhentsorgung</br>"), "yes" == b["recycling:cooking_oil"] && (a += "Speise-\u00d6l-Entsorgung</br>"), "yes" == b["recycling:paper"] && (a += "Papierentsorgung</br>"), "yes" == b["recycling:engine_oil"] && (a += "\u00d6l-Entsorgung (Maschinen-, Alt-und Motor\u00f6l)</br>"), "yes" == b["recycling:clothes"] && (a += "Altkleidercontainer</br>"), "yes" == b["recycling:car_batteries"] && (a += "Auto-Batterien-Entsorgung</br>"), "yes" == b["recycling:cans"] && (a += "Blechdosenentsorgung</br>"), "yes" == b["recycling:scrap_metal"] && (a += "Altmetallentsorgung</br>"), "yes" == b["recycling:plastic"] && (a += "Plastikentsorgung</br>"), "yes" == b["recycling:batterries"] && (a += "Batterieentsorgung</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "Plastikflaschenentsorgung</br>"), "yes" == b["recycling:green_waste"] && (a += "Gr\u00fcnabf\u00e4lle</br>"), "yes" == b["recycling:hardcore"] && (a += "Bauschutt und Stra\u00dfenmaterial Entsorgung</br>");
  return a;
}

var fnContentGeneralInformations = function (b) {
  var a = "";
  b.width && (a += "Breite: " + b.width + " m<br/>");
  b.height && (a += "H\u00f6he: " + b.height + " m<br/>");
  b.maxwidth && (a += "Maximalbreite: " + b.maxwidth + " m<br/>");
  b.maxheight && (a += "Maximalh\u00f6he: " + b.maxheight + " m<br/>");
  b.maxweight && (a += "Maximalgewicht: " + b.maxweight + " t<br/>");
  b.maxspeed && (a += "H\u00f6chstgeschwindigkeit: " + b.maxspeed + " km/h<br/>");
  b.min_age && (a += "Mindestalter: " + b.min_age + "<br/>");
  b.max_age && (a += "Maximalalter: " + b.max_age + "<br/>");
  "yes" == b.nudism && (a += "Freik\u00f6rperkultur<br/>");
  "yes" == b.ruins && (a += "Ruine<br/>");
  b.ele && (a += "H\u00f6he \u00fcber NN: " + b.ele + " m<br/>");
  b["xmas:day_date"] && (a += "Dauer von - bis: " + b["xmas:day_date"] + "<br/>");
  b["rotor:diameter"] && (a += "Rotordurchmesser: " + b["rotor:diameter"] + " m<br/>");
  b["xmas:note"] && (a += "Hinweis: " + b["xmas:note"] + "<br/>");
  "port" == b["seamark:beacon_lateral:category"] && (a += "Backbord<br/>");
  "starboard" == b["seamark:beacon_lateral:category"] && (a += "Steuerbord<br/>");
  "yes" == b["service:bicycle:retail"] && (a += "Fahrradverkauf<br/>");
  "yes" == b["service:bicycle:repair"] && (a += "Fahrradreparatur<br/>");
  "yes" == b["service:bicycle:rental"] && (a += "Fahrradverleih<br/>");
  "yes" == b["service:bicycle:pump"] && (a += "Benutzung einer Luftpumpe m\u00f6glich<br/>");
  "yes" == b["service:bicycle:diy"] && (a += "Benutzung von Werkzeug m\u00f6glich<br/>");
  "yes" == b["service:bicycle:cleaning"] && (a += "Fahrr\u00e4der werden gewaschen<br/>");
  "yes" == b["service:bicycle:second_hand"] && (a += "Verkauf von gebrauchten Fahrr\u00e4dern<br/>");
  "yes" == b["service:bicycle:charging"] && (a += "Elektro-Fahrr\u00e4der k\u00f6nnen geladen werden<br/>");
  "yes" == b.cafe && (a += "Kleine Caf\u00e9-Ecke<br/>");
  "yes" == b.breakfast && (a += "Besonderes Fr\u00fchst\u00fccksangebot<br/>");
  "yes" == b.snack && (a += "Back-Snacks warm oder kalt<br/>");
  "yes" == b.indoor_seating && (a += "Sitzm\u00f6glichkeiten im Innenbereich<br/>");
  "yes" == b.outdoor_seating && (a += "Sitzm\u00f6glichkeiten im Au\u00dfenbereich<br/>");
  "yes" == b.self_service && (a += "Selbstbedienungsb\u00e4ckerei<br/>");
  "yes" == b.bakehouse && (a += "Backstube<br/>");
  "yes" == b.pastry_shop && (a += "Geb\u00e4ck aus der Konditorei<br/>");
  "yes" == b.fair_trade && (a += "einige Fair-Trade-Produkte im Sortiment<br/>");
  "only" == b.fair_trade && (a += "fast ausschlie\u00dflich Fair-Trade-Produkte im Sortiment<br/>");
  "no" == b.fair_trade && (a += "keine Fair-Trade-Produkte im Sortiment<br/>");
  return a;
},
    fnContentHealthcare = function (b) {
  var a = "";
  if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");
  "yes" == b.dispensing && (a += "Apotheke mit Rezepteinl\u00f6sung<br/>");
  "abused" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Menschen die Misshandlung erlitten haben<br/>");
  "child" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Kinder<br/>");
  "disabled" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Menschen mit k\u00f6rperlicher oder geistiger Behinderung<br/>");
  "diseased" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Erkrankte Menschen<br/>");
  "drug_addicted" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Drogens\u00fcchtige<br/>");
  "homeless" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Obdachlose<br/>");
  "juvenile" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Jugendliche und Teenager<br/>");
  "mental_health" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Menschen mit psychischen Problemen<br/>");
  "migrant" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Menschen mit Migrationshintergrund<br/>");
  "orphan" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Waisen<br/>");
  "senior" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Senioren<br/>");
  "underprivileged" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Arme oder benachteiligte Menschen<br/>");
  "unemployed" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Arbeitslose<br/>");
  "victim" == b["social_facility:for"] && (a += "Einrichtung f\u00fcr: Opfer eines Verbrechens<br/>");
  return a;
};

function fnAdditionalBuildingInfos(b) {
  var a = "";
  b["building:color"] && (a += "Geb\u00e4udenfarbe: " + b["building:color"] + "</br>");
  b["building:height"] && (a += "Geb\u00e4udenh\u00f6he: " + b["building:height"] + " m</br>");
  b["building:level"] && (a += "Etage: " + b["building:level"] + "</br>");
  b["building:part"] && (a += "Geb\u00e4udeteile: " + b["building:part"] + "</br>");
  b["roof:color"] && (a += "Dachfarbe: " + b["roof:colour"] + "</br>");
  b["roof:shape"] && (a += "Dachform: " + b["roof:shape"] + "</br>");
  b["roof:height"] && (a += "Dachh\u00f6he: " + b["roof:height"] + " m</br>");
  b["roof:material"] && (a += "Dachmaterial: " + b["roof:material"] + " </br>");
  b["roof:orientation"] && (a += "Dachausrichtung: " + b["roof:orientation"] + " </br>");
  b["roof:direction"] && (a += "Dachausrichtung: " + b["roof:direction"] + " </br>");
  b["building:type"] && (a += "Geb\u00e4udentyp: " + b["building:type"] + "</br>");
  return a;
}
function fnSicherheitAdditional(b) {
  var a = "";
  "surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "Innenbereich wird \u00fcberwacht"), "outdoor" == b.surveillance && (a += "Au\u00dfenbereich wird \u00fcberwacht"), "public" == b.surveillance && (a += "\u00d6ffentliche \u00dcberwachung"), "camera" == b["surveillance:type"] && (a += "\u00dcberwachungstyp: Kamera"), "guard" == b["surveillance:type"] && (a += "\u00dcberwachungstyp: W\u00e4chter"), "ALPR" == b["surveillance:type"] && (a += "\u00dcberwachungstyp: ALPR"), "town" == b["surveillance:zone"] && (a += "\u00dcberwachungsbereich: Ort"), "parking" == b["surveillance:zone"] && (a += "\u00dcberwachungsbereich: Parkplatz"), "traffic" == b["surveillance:zone"] && (a += "\u00dcberwachungsbereich: Verkehr"), "shop" == b["surveillance:zone"] && (a += "\u00dcberwachungsbereich: Shops"), "bank" == b["surveillance:zone"] && (a += "\u00dcberwachungsbereich: Bank"), "building" == b["surveillance:zone"] && (a += "\u00dcberwachungsbereich: Geb\u00e4ude"));
  return a;
}
function fnWreckInfo(b) {
  var a = "";
  "wreck" == b.historic && (b["wreck:date_sunk"] && (a += "Gesunken am: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "Tiefe: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "Freiraum: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "Anerkannt seit: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "Gewicht: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "L\u00e4nge: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "Breite: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "Ladung: Holz<br/>" : "coal" == b["wreck:cargo"] ? a + "Ladung: Kohle<br/>" : a + ("Ladung: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Ja<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Nein<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Ja<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Nein<br/>"), "yes" == b.access && (a += "Zutritt m\u00f6glich<br/>"), "no" == b.access && (a += "Zutritt nicht m\u00f6glich<br/>"), "permit_required" == b.access && (a += "Zutritt nur mit Genehmigung<br/>"));
  return a;
}
function fnKlosterAdditional(b) {
  var a = "";
  if (b["monastery:type"]) switch (b["monastery:type"]) {
    case "monastery":
      a += "Typ: Kl\u00f6sterliche Gemeinschaft (monastery)<br/>";
      break;

    case "convent":
      a += "Typ: Bettelm\u00f6nch Gemeinschaft (convent)<br/>";
      break;

    case "canonry":
      a += "Typ: Kanonikat (canonry)<br/>";
      break;

    case "commandry":
      a += "Typ: Milit\u00e4r gef\u00fchrt (commandry)<br/>";
      break;

    case "hermitage":
      a += "Typ: Einsiedelei (hermitage)<br/>";
      break;

    default:
      a += "Typ: unbekannt<br/>";
  }
  b["community:gender"] && ("male" == b["community:gender"] && (a += "Geschlecht: M\u00e4nnergemeinschaft<br/>"), "female" == b["community:gender"] && (a += "Geschlecht: Frauengemeinschaft<br/>"));
  b.religious_rank && ("abbey" == b.religious_rank ? a += "Religi\u00f6ser Rang: Abtei<br/>" : "abbey" == b.religious_rank && (a += "Religi\u00f6ser Rang: Erzabtei<br/>"));
  "yes" == b.shrine && (a += "Besonderheit: Heiligengrab / Reliquienschrein<br/>");
  "yes" == b.sanctuary && (a += "Besonderheit: Heiligtum / Altarraum (Sanktuar)<br/>");
  if (b.religion) switch (b.religion) {
    case "animist":
      a += "Religion: animistisch<br/><br/>";
      break;

    case "bahai":
      a += "Religion: bahai<br/>";
      break;

    case "buddhist":
      a += "Religion: buddhistisch<br/>";
      break;

    case "christian":
      a += "Religion: christlich<br/>";
      break;

    case "hindu":
      a += "Religion: hinduistisch<br/>";
      break;

    case "IglesiaNiCristo":
      a += "Religion: IglesiaNiCristo<br/>";
      break;

    case "jain":
      a += "Religion: jain<br/>";
      break;

    case "jewish":
      a += "Religion: j\u00fcdisch<br/>";
      break;

    case "multifaith":
      a += "Religion: pluralistisch<br/>";
      break;

    case "muslim":
      a += "Religion: muslimisch<br/>";
      type += "Moschee<br/>";
      break;

    case "pagan":
      a += "Religion: heidnisch<br/>";
      break;

    case "pastafarian":
      a += "Religion: pastafarisch<br/>";
      break;

    case "scientologist":
      a += "Religion: scientologisch<br/>";
      break;

    case "shinto":
      a += "Religion: schintoistisch<br/>";
      break;

    case "sikh":
      a += "Religion: sikh<br/>";
      break;

    case "spiritualist":
      a += "Religion: spiritistisch<br/>";
      break;

    case "taoist":
      a += "Religion: taoistisch<br/>";
      break;

    case "unitarian":
      a += "Religion: unitarian<br/>";
      break;

    case "yazidi":
      a += "Religion: yazidi<br/>";
      break;

    case "zoroastrian":
      a += "Religion: zoroastrisch<br/>";
      break;

    default:
      a += "Religion: unbekannt<br/>";
  }
  if (b.denomination) switch (b.denomination) {
    case "anglican":
      a += "Konfession: Anglikanische Gemeinschaft<br/><br/>";
      break;

    case "baptist":
      a += "Konfession: Baptisten<br/>";
      break;

    case "catholic":
      a += "Konfession: Katholische Kirche, ohne genauere Spezifizierung<br/>";
      break;

    case "roman_catholic":
      a += "Konfession: R\u00f6misch-Katholische Kirche<br/>";
      break;

    case "old_catholic":
      a += "Konfession: Altkatholische Kirche (Schweiz: Christ-Katholisch)<br/>";
      break;

    case "greek_catholic":
      a += "Konfession: Griechisch-Katholische Kirche, Sammelbezeichnung f\u00fcr die mit Rom unierten Ostkirchen des byzantinischen Ritus<br/>";
      break;

    case "evangelical":
      a += "Konfession: Evangelikalismus ist eine theologische Richtung innerhalb des Protestantismus. Achtung! Nicht verwechseln mit der evangelischen (= protestantischen) Kirche<br/>";
      break;

    case "jehovahs_witness":
      a += "Konfession: Zeugen Jehovas<br/>";
      break;

    case "lutheran":
      a += "Konfession: Lutheraner, evangelisch-lutherisch<br/>";
      break;

    case "mennonite":
      a += "Konfession: Mennoniten<br/>";
      break;

    case "messianic_jewish":
      a += "Konfession: Messianische Juden, stehen theologisch den evangelikalen Christen nahe.<br/>";
      break;

    case "methodist":
      a += "Konfession: Methodist Church (engl. Methodism)<br/>";
      break;

    case "mormon":
      a += "Konfession: Mormonen<br/>";
      break;

    case "new_apostolic":
      a += "Konfession: Neuapostolische Kirche<br/>";
      break;

    case "orthodox":
      a += "Konfession: Orthodox, ohne genauere Spezifizierung<br/>";
      break;

    case "greek_orthodox":
      a += "Konfession: Griechisch-Orthodox<br/>";
      break;

    case "coptic_orthodox":
      a += "Konfession: Koptische Kirche, ist die christliche altorientalische Kirche \u00c4gyptens.<br/>";
      break;

    case "pentecostal":
      a += "Konfession: Pfingstbewegung<br/>";
      break;

    case "presbyterian":
      a += "Konfession: Presbyterianische Kirchen<br/>";
      break;

    case "protestant":
      a += "Konfession: Evangelische Kirchen<br/>";
      break;

    case "quaker":
      a += "Konfession: Qu\u00e4ker<br/>";
      break;

    case "reformed":
      a += "Konfession: Evangelisch-reformierte<br/>";
      break;

    case "russian_orthodox":
      a += "Konfession: Russisch-Orthodox<br/>";
      break;

    case "seventh_day_adventist":
      a += "Konfession: Siebenten-Tags-Adventisten<br/>";
      break;

    case "christian_community":
      a += "Konfession: Die Christengemeinschaft ist eine christliche Kirche, die sich als selbst\u00e4ndige Kultusgemeinschaft versteht.<br/>";
      break;

    case "adventist":
      a += "Konfession: Adventisten, nicht alle Adventisten sind Siebenten-Tags-Adventisten.<br/>";
      break;

    case "alliance":
      a += "Konfession: Christian and Missionary Alliance (C&MA) is an evangelical Protestant denomination within Christianity.<br/>";
      break;

    case "assemblies_of_god":
      a += "Konfession: Assemblies of God, ist eine pfingstlerische Denomination.<br/>";
      break;

    case "apostolic":
      a += "Konfession: Apostolische Kirche<br/>";
      break;

    case "armenian_apostolic":
      a += "Konfession: Armenische Apostolische Kirche, ist eine altorientalische Kirche.<br/>";
      break;

    case "assyrian":
      a += "Konfession: Assyrische Kirche des Ostens, auch Apostolische Kirche des Ostens, ist eine autokephale und v\u00f6llig eigenst\u00e4ndige Ostkirche syrischer Tradition in Nachfolge des altchristlichen Katholikats von Seleukia-Ktesiphon.<br/>";
      break;

    case "christ_scientist":
      a += "Konfession: Christian Science (deutsch: Christliche Wissenschaft) ging aus der Neugeist-Bewegung hervor.<br/>";
      break;

    case "church_of_scotland":
      a += "Konfession: Church of Scotland (dt. Kirche Schottlands) ist die Nationalkirche in Schottland. Im Sprachgebrauch auch \u201ethe Kirk\u201c genannt.<br/>";
      break;

    case "czechoslovak_hussite":
      a += "Konfession: Tschechoslowakische Hussitische Kirche, ist eine christliche Kirche, die durch Abspaltung von der R\u00f6misch-Katholischen Kirche entstanden ist. Oft auch Neuhussitische Kirche genannt, vornehmlich in Tschechien verbreitet, aber auch in der Slowakei<br/>";
      break;

    case "dutch_reformed":
      a += "Konfession: Niederl\u00e4ndisch-reformierte Kirche, (einschlie\u00dflich NGK und \u00e4hnliche Kirchen in S\u00fcdafrika)<br/>";
      break;

    case "exclusive_brethren":
      a += "Konfession: Exclusive Brethren<br/>";
      break;

    case "foursquare":
      a += "Konfession: International Church of the Foursquare Gospel<br/>";
      break;

    case "kimbanguist":
      a += "Konfession: Kimbanguistenkirche, ist eine afrikanische, unabh\u00e4ngige, christliche Kirche.<br/>";
      break;

    case "living_waters_church":
      a += "Konfession: Living Waters Christian Church<br/>";
      break;

    case "mariavite":
      a += "Konfession: Mariavitismus<br/>";
      break;

    case "maronite":
      a += "Konfession: Syrisch-maronitische Kirche, ist eine mit Rom unierte, christliche Kirche, die den r\u00f6mischen Papst als Oberhaupt anerkennt.<br/>";
      break;

    case "moravian":
      a += "Konfession: Herrnhuter Br\u00fcdergemeine, (auch: Unitas Fratrum, Evangelische oder Erneuerte Br\u00fcder-Unit\u00e4t, engl. Moravian Church) ist eine aus der b\u00f6hmischen Reformation herkommende \u00fcberkonfessionell-christliche Glaubensbewegung.<br/>";
      break;

    case "nazarene":
      a += "Konfession: Kirche des Nazareners, ist eine Freikirche und Heiligungsgemeinde in methodistischer Tradition.<br/>";
      break;

    case "nondenominational":
      a += "Konfession: Nondenominational Christianity<br/>";
      break;

    case "old_believers":
      a += "Konfession: Altorthodoxe, (h\u00e4ufiger Altgl\u00e4ubige) ist eine Sammelbezeichnung f\u00fcr religi\u00f6se Str\u00f6mungen und Gruppen innerhalb der russisch-orthodoxen Tradition.<br/>";
      break;

    case "polish_catholic":
      a += "Konfession: Polnisch-Katholische Kirche<br/>";
      break;

    case "salvation_army":
      a += "Konfession: Heilsarmee, ist eine christliche Freikirche mit ausgepr\u00e4gter sozialer T\u00e4tigkeit.<br/>";
      break;

    case "santo_daime":
      a += "Konfession: Santo Daime, ist einer synkretistischen religi\u00f6se Bewegung aus Brasilien.<br/>";
      break;

    case "serbian_orthodox":
      a += "Konfession: Serbisch-Orthodoxe Kirche, bezeichnet die orthodoxe Kirche von Serbien und die ihr nachgeordneten Kirchen.<br/>";
      break;

    case "spiritism":
      a += "Konfession: Spiritismus, oder Spiritualismus die Lehre des Spiritisten Allan Kardec<br/>";
      break;

    case "united":
      a += "Konfession: United Church of Canada, ist die zweitgr\u00f6\u00dfte Kirche in Kanada.<br/>";
      break;

    case "united_church_of_christ":
      a += "Konfession: United Church of Christ, ist eine Kirche in den USA.<br/>";
      break;

    case "united_free_church_of_scotland":
      a += "Konfession: United Free Church of Scotland, ist eine presbyterianische Freikirche in Schottland.<br/>";
      break;

    case "united_methodist":
      a += "Konfession: Evangelisch-methodistische Kirche, (engl. United Methodist Church (UMC)) ist eine christliche Kirche in der wesleyanischen Tradition.<br/>";
      break;

    case "united_reformed":
      a += "Konfession: United Reformed Church, (Vereinigte Reformierte Kirche, URC) ist eine reformierte Kirche in Gro\u00dfbritannien.<br/>";
      break;

    case "uniting":
      a += "Konfession: Uniting Church in Australia (UCA) ist die drittgr\u00f6\u00dfte christliche Denomination in Australien.<br/>";
      break;

    case "church_of_sweden":
      a += "Konfession: Schwedische Kirche, ist die evangelisch-lutherische Kirche und ehemalige Staatskirche Schwedens.<br/>";
      break;

    case "mission_covenant_church_of_sweden":
      a += "Konfession: Schwedische Missionskirche ist eine reformierte Kirche in Schweden.<br/>";
      break;

    case "alternative":
      a += "Konfession: alternative<br/>";
      break;

    case "ashkenazi":
      a += "Konfession: ashkenazi<br/>";
      break;

    case "buchari":
      a += "Konfession: buchari<br/>";
      break;

    case "conservative":
      a += "Konfession: conservative<br/>";
      break;

    case "egalitarian":
      a += "Konfession: egalitarian<br/>";
      break;

    case "hasidic":
      a += "Konfession: hasidic<br/>";
      break;

    case "humanistic":
      a += "Konfession: humanistic<br/>";
      break;

    case "kabbalah":
      a += "Konfession: kabbalah<br/>";
      break;

    case "kabbalistic":
      a += "Konfession: kabbalistic<br/>";
      break;

    case "karaite":
      a += "Konfession: karaite<br/>";
      break;

    case "liberal":
      a += "Konfession: liberal<br/>";
      break;

    case "lubavitch":
      a += "Konfession: lubavitch<br/>";
      break;

    case "lubavitch_messianic":
      a += "Konfession: lubavitch_messianic<br/>";
      break;

    case "mizrachi_baghdadi":
      a += "Konfession: mizrachi_baghdadi<br/>";
      break;

    case "mizrachi_chida":
      a += "Konfession: mizrachi_chida<br/>";
      break;

    case "mizrachi_jerusalemite":
      a += "Konfession: mizrachi_jerusalemite<br/>";
      break;

    case "mizrachi_livorno":
      a += "Konfession: mizrachi_livorno<br/>";
      break;

    case "mizrachi_moroccan":
      a += "Konfession: mizrachi_moroccan<br/>";
      break;

    case "modern_orthodox":
      a += "Konfession: modern_orthodox<br/>";
      break;

    case "neo_orthodox":
      a += "Konfession: neo_orthodox<br/>";
      break;

    case "nondenominational":
      a += "Konfession: nondenominational<br/>";
      break;

    case "orthodox":
      a += "Konfession: orthodox<br/>";
      break;

    case "orthodox_ashkenaz":
      a += "Konfession: orthodox_ashkenaz<br/>";
      break;

    case "orthodox_sefard":
      a += "Konfession: orthodox_sefard<br/>";
      break;

    case "progressive":
      a += "Konfession: progressive<br/>";
      break;

    case "reconstructionist":
      a += "Konfession: reconstructionist<br/>";
      break;

    case "reform":
      a += "Konfession: reform<br/>";
      break;

    case "renewal":
      a += "Konfession: renewal<br/>";
      break;

    case "samaritan":
      a += "Konfession: samaritan<br/>";
      break;

    case "sefardi":
      a += "Konfession: sefardi<br/>";
      break;

    case "sefardi_amsterdam":
      a += "Konfession: sefardi_amsterdam<br/>";
      break;

    case "sefardi_london":
      a += "Konfession: sefardi_london<br/>";
      break;

    case "traditional":
      a += "Konfession: traditional<br/>";
      break;

    case "ultra_orthodox":
      a += "Konfession: ultra_orthodox<br/>";
      break;

    case "unaffiliated":
      a += "Konfession: unaffiliated<br/>";
      break;

    case "yemenite":
      a += "Konfession: yemenite<br/>";
      break;

    case "yemenite_baladi":
      a += "Konfession: yemenite_baladi<br/>";
      break;

    case "yemenite_shami":
      a += "Konfession: yemenite_shami<br/>";
      break;

    case "ahmadiya":
      a += "Konfession: ahmadiya<br/>";
      break;

    case "alaouite":
      a += "Konfession: alaouite<br/>";
      break;

    case "druze":
      a += "Konfession: druze<br/>";
      break;

    case "ibadi":
      a += "Konfession: ibadi<br/>";
      break;

    case "ismaili":
      a += "Konfession: ismaili<br/>";
      break;

    case "shia":
      a += "Konfession: shia<br/>";
      break;

    case "sunni":
      a += "Konfession: sunni<br/>";
      break;

    case "nichiren":
      a += "Konfession: nichiren<br/>";
      break;

    case "jodo_shinshu":
      a += "Konfession: jodo_shinshu<br/>";
      break;

    case "jodo_shu":
      a += "Konfession: jodo_shu<br/>";
      break;

    case "vajrayana":
      a += "Konfession: vajrayana<br/>";
      break;

    case "shingon_shu":
      a += "Konfession: shingon_shu<br/>";
      break;

    case "zen":
      a += "Konfession: zen<br/>";
      break;

    case "thai_mahanikaya":
      a += "Konfession: thai_mahanikaya<br/>";
      break;

    case "thai_thammayut":
      a += "Konfession: thai_thammayut<br/>";
      break;

    case "asatru":
      a += "Konfession: asatru<br/>";
      break;

    case "celtic":
      a += "Konfession: celtic<br/>";
      break;

    case "greco-roman":
      a += "Konfession: greco-roman<br/>";
      break;

    case "wicca":
      a += "Konfession: wicca<br/>";
      break;

    case "irani":
      a += "Konfession: irani<br/>";
      break;

    case "parsi":
      a += "Konfession: parsi<br/>";
      break;

    default:
      a += "unbekannt<br/>";
  }
  if (b.community) switch (b.community) {
    case "AA":
      a += "Ordensgemeinschaft (AA): Augustinians of the Assumption <br/>";
      break;

    case "BSCM":
      a += "Ordensgemeinschaft (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";
      break;

    case "CBMV":
      a += "Ordensgemeinschaft (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";
      break;

    case "CO":
      a += "Ordensgemeinschaft (CO): Oratorians<br/>";
      break;

    case "CMC":
      a += "Ordensgemeinschaft (CMC): Congregation of the Mother Co-Redemptrix<br/>";
      break;

    case "CRSP":
      a += "Ordensgemeinschaft (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";
      break;

    case "CSJ":
      a += "Ordensgemeinschaft (CSJ): Carmel Saint-Joseph<br/>";
      break;

    case "CSSP":
      a += "Ordensgemeinschaft (CSSP): Congr\u00e9gation du Saint-Esprit<br/>";
      break;

    case "CSSR":
      a += "Ordensgemeinschaft (CSSR): Congr\u00e9gation du Tr\u00e8s Saint R\u00e9dempteur<br/>";
      break;

    case "FCJM":
      a += "Ordensgemeinschaft (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";
      break;

    case "FMGB":
      a += "Ordensgemeinschaft (FMGB): Suore Francescane Missionarie di Ges\u00f9 Bambino<br/>";
      break;

    case "FMH":
      a += "Ordensgemeinschaft (FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";
      break;

    case "FMM":
      a += "Ordensgemeinschaft (FMM): Franciscaines missionnaires de Marie<br/>";
      break;

    case "FSC":
      a += "Ordensgemeinschaft (FSC): Fr\u00e8res des \u00c9coles chr\u00e9tiennes<br/>";
      break;

    case "MCCI":
      a += "Ordensgemeinschaft (MCCI): Missionnaires comboniens du Sacr\u00e9-C\u0153ur<br/>";
      break;

    case "MSFS":
      a += "Ordensgemeinschaft (MSFS): Missionnaires de Saint Fran\u00e7ois de Sales<br/>";
      break;

    case "OCart":
      a += "Ordensgemeinschaft (OCart): Order of the Carthusians<br/>";
      break;

    case "OCC":
      a += "Ordensgemeinschaft (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";
      break;

    case "OCD":
      a += "Ordensgemeinschaft (OCD): Ordre des Carmes d\u00e9chaux<br/>";
      break;

    case "OCSO":
      a += "Ordensgemeinschaft (OCSO): Zisterzienserorden der strengeren Observanz (Trappisten)<br/>";
      break;

    case "OFM":
      a += "Ordensgemeinschaft (OFM): Ordre des Fr\u00e8res Mineurs (Franziskaner)<br/>";
      break;

    case "OFMCap":
      a += "Ordensgemeinschaft (OFMCap): Ordre des Fr\u00e8res Mineurs Capucins<br/>";
      break;

    case "OFMConv":
      a += "Ordensgemeinschaft (OFMConv): Ordre des Fr\u00e8res Mineurs Conventuels<br/>";
      break;

    case "OFS":
      a += "Ordensgemeinschaft (OFS): Franciscans secular Third Order<br/>";
      break;

    case "OMI":
      a += "Ordensgemeinschaft (OMI): Oblats de Marie<br/>";
      break;

    case "OP":
      a += "Ordensgemeinschaft (OP): Ordre des Fr\u00e8res Pr\u00eacheurs<br/>";
      break;

    case "OPraem":
      a += "Ordensgemeinschaft (OPraem): Ordre des chanoines r\u00e9guliers de Pr\u00e9montr\u00e9<br/>";
      break;

    case "OSB":
      a += "Ordensgemeinschaft (OSB): Order of Saint Benedict<br/>";
      break;

    case "OSC":
      a += "Ordensgemeinschaft (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";
      break;

    case "OSSS":
      a += "Ordensgemeinschaft (OSSS): Ordre de Sainte-Brigitte<br/>";
      break;

    case "OVM":
      a += "Ordensgemeinschaft (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";
      break;

    case "PSDP":
      a += "Ordensgemeinschaft (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";
      break;

    case "PFJ":
      a += "Ordensgemeinschaft (PFJ): Petits Fr\u00e8res de J\u00e9sus<br/>";
      break;

    case "SDB":
      a += "Ordensgemeinschaft (SDB): Soci\u00e9t\u00e9 de Saint Fran\u00e7ois de Sales<br/>";
      break;

    case "SJ":
      a += "Ordensgemeinschaft (SJ): Compagnie de J\u00e9sus<br/>";
      break;

    case "SOC":
      a += "Ordensgemeinschaft (SOC): Order of Cistercians<br/>";
      break;

    case "SSCC":
      a += "Ordensgemeinschaft (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";
      break;

    case "SSF":
      a += "Ordensgemeinschaft (SSF): Society of St Francis<br/>";
      break;

    case "SSJE":
      a += "Ordensgemeinschaft (SSJE): Society of St John the Evangelist<br/>";
      break;

    case "SSpS":
      a += "Ordensgemeinschaft (SSpS): Steyler Missionsschwestern<br/>";
      break;

    case "TOR":
      a += "Ordensgemeinschaft (TOR): Terzo Ordine Regolare di San Francesco<br/>";
      break;

    default:
      a += "unbekannt<br/>";
  }
  return a;
}

var fnTestInfoPopup = function (b) {
  b = b.getProperties();
  var a = "",
      c;

  for (c in b) a = a + c + "=" + b[c] + "<br/>";

  return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-en.js":
/*!*******************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-popup-info-en.js ***!
  \*******************************************************************/
/*! exports provided: trim, isMobile, fnStandardInfoPopup, fnReducedInfoPopup, fnHeader, fnFooter, fnGetTranslate_Type, fnContent, fnContentAerodrome, fnContentNatural, fnContentProtectedArea, fnContentLanduse, fnMessstation, fnContentRoute, fnContentPetrol, fnContentHistoric, fnContentBarriers, fnContentTourism, fnContentAmenity, fnContentStorage, fnContentInformationCity, fnContentEmergency, fnContentCuisine, fnContentShipping, fnContentHydrants, fnContentStreetsTraffic, fnContentSports, fnArztInfo, fnKraftwerkInfo, fnWertstoffinfo, fnAdditionalBuildingInfos, fnSicherheitAdditional, fnWreckInfo, fnKlosterAdditional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnStandardInfoPopup", function() { return fnStandardInfoPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnReducedInfoPopup", function() { return fnReducedInfoPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnHeader", function() { return fnHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnFooter", function() { return fnFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnGetTranslate_Type", function() { return fnGetTranslate_Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContent", function() { return fnContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentAerodrome", function() { return fnContentAerodrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentNatural", function() { return fnContentNatural; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentProtectedArea", function() { return fnContentProtectedArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentLanduse", function() { return fnContentLanduse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnMessstation", function() { return fnMessstation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentRoute", function() { return fnContentRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentPetrol", function() { return fnContentPetrol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentHistoric", function() { return fnContentHistoric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentBarriers", function() { return fnContentBarriers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentTourism", function() { return fnContentTourism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentAmenity", function() { return fnContentAmenity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentStorage", function() { return fnContentStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentInformationCity", function() { return fnContentInformationCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentEmergency", function() { return fnContentEmergency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentCuisine", function() { return fnContentCuisine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentShipping", function() { return fnContentShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentHydrants", function() { return fnContentHydrants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentStreetsTraffic", function() { return fnContentStreetsTraffic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentSports", function() { return fnContentSports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnArztInfo", function() { return fnArztInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnKraftwerkInfo", function() { return fnKraftwerkInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnWertstoffinfo", function() { return fnWertstoffinfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnAdditionalBuildingInfos", function() { return fnAdditionalBuildingInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnSicherheitAdditional", function() { return fnSicherheitAdditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnWreckInfo", function() { return fnWreckInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnKlosterAdditional", function() { return fnKlosterAdditional; });
/*
  K?stenschmiede GmbH Software & Design 2011 - 2018
 @author     K?stenschmiede <http://www.kuestenschmiede.de>
 @license    http://opensource.org/licenses/lgpl-3.0.html
*/
function trim(b) {
  return b.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
}

function translate(b) {
  var a = trim(b);
  return "yes" == a || "Yes" == a ? "yes" : "no" == a || "No" == a ? "no" : "limited" == a ? "limited" : "designated" == a ? "designated" : "wood" == a ? "wood" : "metal" == a ? "metal" : "concrete" == a ? "concrete" : "plastic" == a ? "plastic" : "stone" == a ? "stone" : "steel" == a ? "steel" : "brick" == a ? "brick" : "reinforced_concrete" == a ? "reinforced_concrete" : "masonry" == a ? "masonry" : b;
}

var fnStandardInfoPopup = function (b, a) {
  var c = b.getProperties(),
      d = "",
      e;

  if ("function" === typeof a) {
    var f = a.call(b)[0].getImage();
    if (f) try {
      e = f.getSrc();
    } catch (g) {
      e = "";
    }
  } else {
    f = a.getImage();

    try {
      e = f.getSrc();
    } catch (h) {
      e = "";
    }
  }

  d += fnHeader(c, e);
  d += fnContent(c);
  d += fnFooter(c, b.get("osm_type") + "/" + b.getId());
  return '<div class="c4g_popup_text">' + d + "</div>";
},
    fnReducedInfoPopup = function (b, a) {
  var c = b.getProperties(),
      d = "",
      e = !1,
      f;
  f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();
  if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;
  "hotel" == c.tourism && (e = !0);
  "guest_house" == c.tourism && (e = !0);
  "chalet" == c.tourism && (e = !0);
  "hostel" == c.tourism && (e = !0);
  "alpine_hut" == c.tourism && (e = !0);
  if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;
  if ("museum" == c.tourism || "museum" == c.amenity) e = !0;
  "cinema" == c.amenity && (e = !0);
  "theatre" == c.amenity && (e = !0);
  if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;
  "playground" == c.leisure && (e = !0);
  c.aerialway && (e = !0);
  if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;
  "station" == c.railway && (e = !0);
  "swimming" == c.sport && (e = !0);
  "swimming_pool" == c.leisure && (e = !0);
  "swimming_pool" == c.amenity && (e = !0);
  "waterpark" == c.leisure && (e = !0);
  c.water_park && (e = !0);
  "sports_centre" == c.leisure && (e = !0);

  switch (e) {
    case !1:
      d += fnHeader(c, f);
      d += fnContent(c);
      d += fnFooter(c, b.get("osm_type") + "/" + b.getId());
      break;

    case !0:
      d += fnHeader(c, f);
  }

  return '<div class="c4g_popup_text">' + d + "</div>";
};
function fnHeader(b, a) {
  var c = "",
      d = "32px";
  a && -1 != a.indexOf("icon_mapcil") && (d = "250px", a = a.replace("icon_mapcil", "logo_mapcil"));

  if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
    if (b.name) var e = b.name;
    b["piste:name"] && (e = b["piste:name"]);
    b["xmas:name"] && (e = b["xmas:name"]);
    b["xmas:location"] && (e = b["xmas:location"]);
    c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
  } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');

  c += fnGetTranslate_Type(b);
  return '<div class="c4g_popup_header">' + c + "</div>";
}
function fnFooter(b, a) {
  var c = "",
      d = !1;
  b["addr:housename"] && (c += "housename: " + b["addr:housename"] + "<br/>", d = !0);
  b["addr:floor"] ? (c += "floor: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "level: " + b["addr:level"] + "<br/>", d = !0);
  b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);
  b["addr:postcode"] && (c += b["addr:postcode"] + " ");
  b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);
  if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
    var e = b.sqkm.length % 3,
        f = 0 < e ? b.sqkm.substring(0, e) : "";

    for (i = 0; i < Math.floor(b.sqkm.length / 3); i++) f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));

    c += "area: " + f + " Km\u00b2<br/>";
  } else c += "area " + b.sqkm + "<br/>";
  b["contact:phone"] && (c = isMobile() ? c + ('phone: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('phone: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);
  b.phone && (c = isMobile() ? c + ('phone: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('phone: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);
  b["contact:fax"] ? (c += "fax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "fax: " + b.fax + "<br/>", d = !0);
  b["contact:email"] ? (c += 'email: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'email: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);
  d && (c += "<br/>");

  if (b.opening_hours) {
    d = b.opening_hours;

    for (e = 0; 0 == e || 0 < d.indexOf(";");) 0 < e && (d = d.replace(";", "<br/>")), e++;

    c += 'opening hours: <br/><div class="c4g_open_text">' + d + "</div>";
    c = 0 < d.indexOf("PH") ? c + "(PH = public holiday)<br/>" : c + "<br/>";
  }

  if (b["xmas:opening_hours"]) {
    d = b["xmas:opening_hours"];

    for (e = 0; 0 == e || 0 < d.indexOf(";");) 0 < e && (d = d.replace(";", "<br/>")), e++;

    c += 'opening hours: <br/><div class="c4g_open_text">' + d + "</div>";
    c = 0 < d.indexOf("PH") ? c + "(PH = public holiday)<br/>" : c + "<br/>";
  }

  b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>');
  b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>');
  b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Wikipedia link</a><br/>');
  b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Wikimedia link</a><br/>');
  b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'webcam: <a href="' + d + '" target="_blank">webcam link</a><br/>');
  b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');
  d = "";
  b.internet_access && (d += "internet access: " + translate(b.internet_access) + "<br/>");
  b["internet_access:fee"] && (d += "fee: " + translate(b["internet_access:fee"]) + "<br/>");
  b["wifi_access:operator"] && (d += "wifi operator: " + b["wifi_access:operator"] + "<br/>");
  b["wifi_access:technology"] && (d += "wifi technology: " + b["wifi_access:technology"] + "<br/>");
  b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");
  "" != d && (c += 'internet access available<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");
  b.wheelchair && (c += "wheelchair: " + translate(b.wheelchair) + "<br/>");
  b["wheelchair:description"] && (c += "description: " + b["wheelchair:description"] + "<br/>");
  b["wheelchair:entrance_width"] && (c += "entrance width (cm): " + b["wheelchair:entrance_width"] + "<br/>");
  b["wheelchair:step_height"] && (c += "step height (cm): " + b["wheelchair:step_height"] + "<br/>");
  b["wheelchair:rooms"] && (c += "rooms: " + b["wheelchair:rooms"] + "<br/>");
  b["wheelchair:places"] && (c += "places: " + b["wheelchair:places"] + "<br/>");
  b["cent:places"] && (c += "places: " + b["wheelchair:places"] + "<br/>");
  b["ramp:wheelchair"] && (c += "ramp: " + b["ramp:wheelchair"] + "<br/>");
  b["capacity:disabled"] && (c += "capacity parking: " + translate(b["capacity:disabled"]) + "<br/>");
  b["toilets:wheelchair"] && (c += "toilets: " + translate(b["toilets:wheelchair"]) + "<br/>");
  b.centralkey && (c += "centralkey: " + b.centralkey + "<br/>");
  b.note && (c += b.note + "<br/>");
  b.description && (c += b.description + "<br/>");
  b.operator && (c += "operator: " + b.operator + "<br/>");
  b.ref && (c += "reference: " + b.ref + "<br/>");
  "yes" == b.lit && (c += "This object is illuimanted.<br/>");
  b.shop && (d = "", b.brand && (d += "brand: " + b.brand + "<br/>"), b.sells && (d += "sells: " + b.sells + "<br/>"), b.origin && (d += "source market: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "distributor: yes<br/>"), "" != d && (c += 'further particulars: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));
  a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">OpenStreetMap link</a><br/>'));
  return c = '<div class="c4g_popup_footer">' + c + "</div>";
}
function fnGetTranslate_Type(b) {
  var a = "";
  if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "doctor<br/>";
  if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "hospital with emergency facilities<br/>" : a + "hospital<br/>";
  "dentist" == b.amenity && (a += "dentist<br/>");
  if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "pharmacy<br/>";
  if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "physiotherapist<br/>";
  if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "occupational_therapist<br/>";
  if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "psychotherapist<br/>";
  "alternative" == b.healthcare && (a += "alternative<br/>");
  "midwife" == b.healthcare && (a += "midwife<br/>");
  if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "speech_therapist<br/>";
  "yes" == b["health_speciality:music_therapy"] && (a += "music_therapy<br/>");
  "veterinary" == b.amenity && (a += "veterinary<br/>");
  "fire_station" == b.amenity && (a += "fire station<br/>");
  "fire_extinguisher" == b.emergency && (a += "fire extinguisher<br/>");
  "aed" == b.emergency && (a += "aed<br/>");
  "defibrillator" == b.emergency && (a += "defibrillator<br/>");
  "phone" == b.emergency && (a += "call box<br/>");
  "police" == b.amenity && (a += "police<br/>");
  "ambulance_station" == b.emergency && (a += "ambulance station<br/>");
  "technical" == b.emergency_service && (a += "technical<br/>");
  "water" == b.emergency_service && (a += "water<br/>");
  "baywatch" == b.waterway && (a += "baywatch<br/>");
  "air" == b.emergency_service && (a += "rescue helicopter<br/>");
  "emergency_access_point" == b.highway && (a += "emergency access point<br/>");
  if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "lifeboat station<br/>";
  "life_ring" == b.emergency && (a += "life ring<br/>");
  "siren" == b.emergency && (a += "siren<br/>");
  "life_ring" == b.amenity && (a += "life ring<br/>");
  "rescue_station" == b.amenity && (a += "rescue station<br/>");
  "fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "underground hydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "pillar hydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "wall hydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "suction point<br/>"));
  "suction_point" == b.emergency && (a += "suction point<br/>");
  "fire_water_pond" == b.emergency && (a += "fire protection pond<br/>");
  "mountain" == b.emergency_service && (a += "mountain rescue service<br/>");
  "water_tank" == b.emergency && (a += "fire water tank<br/>");
  "container" == b.recycling_type && (a += "Recycling container<br/>");
  "recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "suction station<br/>" : "recycling" == b.amenity && (a += " buyback centre<br/>");
  "yes" == b["diet:pescetarian"] ? a += "pescetarian available<br/>" : "only" == b["diet:pescetarian"] && (a += "just pescetarian<br/>");
  "yes" == b["diet:vegetarian"] ? a += "vegetarian vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "just vegetarian<br/>");
  "yes" == b["diet:lacto_vegetarian"] ? a += "lacto_vegetarian available<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "just lacto vegetarian<br/>");
  "yes" == b["diet:ovo_vegetarian"] ? a += "ovo vegetarian available<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "just ovo_vegetarian<br/>");
  "yes" == b["diet:vegan"] ? a += "vegan available<br/>" : "only" == b["diet:vegan"] && (a += "just vegan<br/>");
  "yes" == b["diet:fruitarian"] ? a += "fruitarian available<br/>" : "only" == b["diet:fruitarian"] && (a += "hust fruitarian<br/>");
  "yes" == b["diet:raw"] ? a += "raw availaibe<br/>" : "only" == b["diet:raw"] && (a += "just raw<br/>");
  "yes" == b["diet:gluten_free"] ? a += "gluten free available<br/>" : "only" == b["diet:gluten_free"] && (a += "just gluten free<br/>");
  "yes" == b["diet:dairy_free"] ? a += "dairy free available<br/>" : "only" == b["diet:dairy_free"] && (a += "just dairy free<br/>");
  "yes" == b["diet:lactose_free"] ? a += "lactose free available<br/>" : "only" == b["diet:lactose_free"] && (a += "just lactose free<br/>");
  "yes" == b["diet:halal"] ? a += "halal available<br/>" : "only" == b["diet:halal"] && (a += "just halal<br/>");
  "yes" == b["diet:kosher"] ? a += "kosher available<br/>" : "only" == b["diet:kosher"] && (a += "just kosher<br/>");
  "pub" == b.amenity && (a += "pub<br/>");
  "bar" == b.amenity && (a += "bar<br/>");
  "yes" == b.frozen_yogurt && (a += "frozen yogurt<br/>");
  "yes" == b.slush_ice && (a += "slush ice<br/>");
  "yes" == b.cake && (a += "cake<br/>");
  "yes" == b.coffee && (a += "coffee<br/>");
  "yes" == b.drinks && (a += "drinks<br/>");
  "biergarten" == b.amenity && (a += "biergarten<br/>");
  "restaurant" == b.amenity && (a += "restaurant<br/>");
  "fast_food" == b.amenity && (a += "fast food<br/>");
  if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "cafe<br/>";
  if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "ice cream<br/>";
  "alpine_hut" == b.tourism && (a += "alpine hut<br/>");
  "aquarium" == b.tourism && (a += "aquarium<br/>");
  "apartment" == b.tourism && (a += "apartment<br/>");
  "attraction" == b.tourism && (a += "attraction<br/>");
  "artwork" == b.tourism && (a += "artwork<br/>");
  "camp_site" == b.tourism && (a += "camp site<br/>");
  "caravan_site" == b.tourism && (a += "caravan site<br/>");
  "chalet" == b.tourism && (a += "chalet<br/>");
  "gallery" == b.tourism && (a += "gallery<br/>");
  "guest_house" == b.tourism && (a += "guest house<br/>");
  "hostel" == b.tourism && (a += "hostel<br/>");
  "hotel" == b.tourism && (a += "hotel<br/>");
  "motel" == b.tourism && (a += "motel<br/>");
  "museum" == b.tourism && (a += "museum<br/>");
  "picnic_site" == b.tourism && (a += "picnic site<br/>");
  "theme_park" == b.tourism && (a += "theme park<br/>");
  "viewpoint" == b.tourism && (a += "viewpoint<br/>");
  "wilderness_hut" == b.tourism && (a += "wilderness_hut<br/>");
  "wine_cellar" == b.tourism && (a += "wine cellar<br/>");
  "zoo" == b.tourism && (a += "zoo<br/>", "enclosure" == b.zoo && (a += "enclosure<br/>"), "petting_zoo" == b.zoo && (a += "petting zoo<br/>"), "falconry" == b.zoo && (a += "falconry<br/>"));
  "trail_riding_station" == b.tourism && (a += "trail riding station<br/>");
  "fishing" == b.club && (a += "fishing club<br/>");
  "sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");
  "amateur_radio" == b.club && (a += "amateur radio club<br/>");
  "art" == b.club && (a += "art club<br/>");
  "astronomy" == b.club && (a += "astronomy club<br/>");
  "automobile" == b.club && (a += "automobile club<br/>");
  "board_games" == b.club && (a += "board games club<br/>");
  "card_games" == b.club && (a += "card games club<br/>");
  "charity" == b.club && (a += "charity club<br/>");
  "chess" == b.club && (a += "chess club<br/>");
  "cinema" == b.club && (a += "cinema club<br/>");
  "cooking" == b.club && (a += "cooking club<br/>");
  "culture" == b.club && (a += "culture club<br/>");
  "doityourself" == b.club && (a += "doityourself club<br/>");
  "equestrian" == b.club && (a += "equestrian club<br/>");
  "ethnic" == b.club && (a += "ethnic club<br/>");
  "fan" == b.club && (a += "fan club<br/>");
  "freemasonry" == b.club && (a += "freemasonry club<br/>");
  "game" == b.club && (a += "game club<br/>");
  "history" == b.club && (a += "history club<br/>");
  "hunting" == b.club && (a += "hunting club<br/>");
  "linux" == b.club && (a += "linux club<br/>");
  "motorcycle" == b.club && (a += "motorcycle club<br/>");
  "music" == b.club && (a += "music club<br/>");
  "nature" == b.club && (a += "nature club<br/>");
  "nudism" == b.club && (a += "nudism club<br/>");
  "photography" == b.club && (a += "photography club<br/>");
  "politics" == b.club && (a += "politics club<br/>");
  "religion" == b.club && (a += "religion club<br/>");
  "scout" == b.club && (a += "scout club<br/>");
  "smoke" == b.club && (a += "smoke club<br/>");
  "sport" == b.club && (a += "sport club<br/>");
  "theatre" == b.club && (a += "theatre club<br/>");
  "veterans" == b.club && (a += "veterans club<br/>");
  "amusement_arcade" == b.leisure && (a += "penny arcade / gambling hall<br/>");
  "beach_resort" == b.leisure && (a += "beach resort<br/>");
  "bird_hide" == b.leisure && (a += "bird hide<br/>");
  "common" == b.leisure && (a += "common<br/>");
  "club" == b.leisure && (a += "club<br/>");
  "dance" == b.leisure && (a += "dance<br/>");
  "dog_park" == b.leisure && (a += "dog_park<br/>");
  "firepit" == b.leisure && (a += "firepit<br/>");
  "fishing" == b.leisure && (a += "fishing<br/>");
  "garden" == b.leisure && (a += "garden<br/>");
  "golf_course" == b.leisure && (a += "golf course<br/>");
  "hackerspace" == b.leisure && (a += "hackerspace<br/>");
  "horse_riding" == b.leisure && (a += "horse riding<br/>");
  "ice_rink" == b.leisure && (a += "ice rink<br/>");
  "nature_reserve" == b.leisure && (a += "nature reserve<br/>");
  "park" == b.leisure && (a += "park<br/>");
  "miniature_golf" == b.leisure && (a += "miniature golf<br/>");
  "pitch" == b.leisure && (a += "pitch<br/>");
  "pitch" == b.leisure && "yes" == b.building && (a += "gym<br/>");
  "playground" == b.leisure && "yes" == b.building ? a += "playground<br/>" : "playground" == b.leisure && (a += "playground<br/>");
  "social_club" == b.leisure && (a += "social club<br/>");
  "spa" == b.leisure && (a += "spa<br/>");
  "sports_centre" == b.leisure && (a += "sports centre<br/>");
  "climbing_adventure" == b.sport && (a += "climbing adventure<br/>");
  "stadium" == b.leisure && (a += "stadium<br/>");
  "swimming_pool" == b.leisure && (a += "swimming pool<br/>");
  "track" == b.leisure && (a += "track<br/>");
  "water_park" == b.leisure && (a += "water park<br/>");
  "wildlife_hide" == b.leisure && (a += "wildlife hide<br/>");
  "adult_gaming_centre" == b.leisure && (a += "adult gaming_centre<br/>");
  "bowling_alley" == b.leisure && "10pin" == b.sport && (a += "10pin bowling_alley<br/>");
  "bowling_alley" == b.leisure && "9pin" == b.sport && (a += "9pin bowling_alley<br/>");
  if ("karting" == b.sport || "motor" == b.sport) a += "karting<br/>";
  if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";
  if (b["piste:type"]) switch (b["piste:type"]) {
    case "skitour":
      a += "skitour<br/>";
      break;

    case "downhill":
      a += "downhill<br/>";
      break;

    case "sled":
      a += "sled<br/>";
      break;

    case "nordic":
      a += "nordic<br/>";
      break;

    case "hike":
      a += "hike<br/>";
      break;

    case "snow_park":
      a += "snow park<br/>";
  }
  if (b.sport) switch (b.sport) {
    case "surfing":
      a += "surfing<br/>";
      break;

    case "kitesurfing":
      a += "kitesurfing<br/>";
      break;

    case "water_ski":
      a += "water ski<br/>";
  }
  if (b.aerialway) switch (b.aerialway) {
    case "cable_bar":
      a += "cable bar<br/>";
      break;

    case "gondola":
      a += "gondola<br/>";
      break;

    case "chair_lift":
      a += "chair lift<br/>";
      break;

    case "mixed_lift":
      a += "mixed lift<br/>";
      break;

    case "drag_lift":
      a += "drag lift<br/>";
      break;

    case "t-bar":
      a += "t-bar<br/>";
      break;

    case "t-bar":
      a += "t-bar<br/>";
      break;

    case "platter":
      a += "platter<br/>";
      break;

    case "rope_tow":
      a += "rope tow<br/>";
      break;

    case "magic_carpet":
      a += "magic carpet<br/>";
      break;

    default:
      a += "unknown";
  }
  "mosque" == b.building && (a += "mosque<br/>");
  "synagogue" == b.building && (a += "synagogue<br/>");
  "temple" == b.building && (a += "temple<br/>");
  "apartments" == b.building && (a += "apartments<br/>");
  "farm" == b.building && (a += "farm<br/>");
  "hotel" == b.building && (a += "hotel<br/>");
  "house" == b.building && (a += "house<br/>");
  "detached" == b.building && (a += "detached<br/>");
  "residential" == b.building && (a += "residential<br/>");
  if ("domitory" == b.building || "residential plus" == b.building) a += "domitory<br/>";
  "terrace" == b.building && (a += "terrace<br/>");
  "houseboat" == b.building && (a += "houseboat<br/>");
  "bungalow" == b.building && (a += "bungalow<br/>");
  "static_caravan" == b.building && (a += "static caravan<br/>");
  "commercial" == b.building && (a += "commercial<br/>");
  "retail" == b.building && (a += "retail<br/>");
  "warehouse" == b.building && (a += "warehouse<br/>");
  "bakehouse" == b.building && (a += "bakehouse<br/>");
  "shrine" == b.building && (a += "shrine<br/>");
  "civic" == b.building && (a += "civic<br/>");
  "stadium" == b.building && (a += "stadium<br/>");
  "train_station" == b.building && (a += "train station<br/>");
  "university" == b.building && (a += "university<br/>");
  "public" == b.building && (a += "public<br/>");
  "bridge" == b.building && (a += "bridge<br/>");
  "bunker" == b.building && (a += "bunker<br/>");
  "cabin" == b.building && (a += "cabin<br/>");
  "conservatory" == b.building && (a += "conservatory<br/>");
  "construction" == b.building && (a += "construction<br/>");
  "garage" == b.building && (a += "garage<br/>");
  "garages" == b.building && (a += "garages<br/>");
  "greenhouse" == b.building && (a += "greenhouse<br/>");
  "hangar" == b.building && (a += "hangar<br/>");
  "hut" == b.building && (a += "hut<br/>");
  "pavillion" == b.building && (a += "pavillion<br/>");
  "roof" == b.building && (a += "roof<br/>");
  "shed" == b.building && (a += "shed<br/>");
  "transformer_tower" == b.building && (a += "transformer tower<br/>");
  "service" == b.building && (a += "service<br/>");
  "kiosk" == b.building && (a += "kiosk<br/>");
  "carport" == b.building && (a += "carport<br/>");
  "ruins" == b.building && (a += "ruins<br/>");
  "gambling" == b.amenity && (a += "penny arcade<br/>");
  "library" == b.amenity && (a += "library<br/>");
  "fountain" == b.amenity && (a += "fountain<br/>");
  "attraction" == b.amenity && (a += "attraction<br/>");
  if ("social_centre" == b.amenity || "club" == b.amenity) a += "social centre<br/>";
  "townhall" == b.amenity && (a += "townhall<br/>");
  "bench" == b.amenity && (a += "bench<br/>");
  if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "grave yard<br/>";
  "post_box" == b.amenity && (a += "post box<br/>");
  "post_office" == b.amenity && (a += "post office<br/>");
  "telephone" == b.amenity && (a += "telephone<br/>");
  "atm" == b.amenity && (a += "atm<br/>");
  "bank" == b.amenity && (a += "bank<br/>");
  "toilets" == b.amenity && "yes" == b.diaper ? a += "toilets with diaper changing table<br/>" : "toilets" == b.amenity && (a += "toilets<br/>");
  "school" == b.amenity && "1" == b["isced:level"] ? a += "primary school<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "secondary school<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "secondary schools<br/>" : "school" == b.amenity && (a += "school<br/>");
  "kindergarten" == b.amenity && (a += "kindergarten<br/>");
  "internet_cafe" == b.amenity && (a += "internet cafe<br/>");
  "daycare" == b.amenity && (a += "daycare<br/>");
  "childcare" == b.amenity && (a += "childcare<br/>");
  "university" == b.amenity && (a += "university<br/>");
  "college" == b.amenity && (a += "college<br/>");
  "shelter" == b.amenity && (a += "shelter<br/>");
  "bbq" == b.amenity && (a += "bbq<br/>");
  "nightclub" == b.amenity && (a += "nightclub<br/>");
  "bicycle_parking" == b.amenity && (a += "bicycle parking<br/>");
  "bicycle_rental" == b.amenity && (a += "bicycle rental<br/>");
  "boat_sharing" == b.amenity && (a += "boat sharing<br/>");
  "car_sharing" == b.amenity && (a += "car sharing<br/>");
  "cinema" == b.amenity && (a += "cinema<br/>");
  "swimming_pool" == b.amenity && (a += "swimming pool<br/>");
  if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "embassy<br/>";
  "embassy" == b.amenity && "consulate" == b.diplomatic && (a += "consulate<br/>");
  "embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "consulate general<br/>");
  "embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "honorary consulate<br/>");
  "embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "permanent mission<br/>");
  "embassy" == b.amenity && "delegation" == b.diplomatic && (a += "delegation<br/>");
  "embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "high commission<br/>");
  "Barfusspfad" == b.amenity && (a += "barefoodpath<br/>");
  "casino" == b.amenity && (a += "casino<br/>");
  "spa" == b.amenity && (a += "spa<br/>");
  "stables" == b.amenity && (a += "stables<br/>");
  "watering_place" == b.amenity && (a += "watering place<br/>");
  "yes" == b.watering_place && (a += "watering place<br/>");
  "water_point" == b.amenity && (a += "water point<br/>");
  "taxi" == b.amenity && (a += "taxi<br/>");
  "car_wash" == b.amenity && (a += "car wash<br/>");
  "brothel" == b.amenity && (a += "brothel<br/>");
  "stripclub" == b.amenity && (a += "stripclub<br/>");
  "swingerclub" == b.amenity && (a += "swingerclub<br/>");
  "planetarium" == b.amenity && (a += "planetarium<br/>");
  "courthouse" == b.amenity && (a += "court house<br/>");
  "crematorium" == b.amenity && (a += "crematorium<br/>");
  if ("crypt" == b.amenity || "crypt" == b.building) a += "crypt<br/>";
  "hunting_stand" == b.amenity && (a += "hunting stand<br/>");
  "photo_booth" == b.amenity && (a += "photo booth<br/>");
  "prison" == b.amenity && (a += "prison<br/>");
  "ranger_station" == b.amenity && (a += "ranger station<br/>");
  "register_office" == b.amenity && (a += "register office<br/>");
  "marketplace" == b.amenity && (a += "marketplace<br/>");
  "solarium" == b.amenity && (a += "solarium<br/>");
  "sauna" == b.amenity && (a += "sauna<br/>");
  "shower" == b.amenity && (a += "shower<br/>");
  if ("waste_disposal" == b.amenity && (a += "waste disposal<br/>", b.waste)) switch (a += "Typ: ", b.waste) {
    case "trash":
      a += "General<br/>";
      break;

    case "oil":
      a += "Oil<br/>";
      break;

    case "drugs":
      a += "Pharmaceutical<br/>";
      break;

    case "organic":
      a += "Organic<br/>";
      break;

    case "plastic":
      a += "Plastic<br/>";
      break;

    case "rubble":
      a += "Rubble<br/>";
      break;

    case "cigarettes":
      a += "Cigarettes<br/>";
      break;

    default:
      a += "General<br/>";
  }
  if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "dog waste station<br/>";
  if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "scout camp<br/>";
  "ferry_terminal" == b.amenity && (a += "ferry terminal<br/>");
  "bureau_de_change" == b.amenity && (a += "bureau de change<br/>");
  "youth_club" == b.amenity && (a += "youth club<br/>");
  "festival_grounds" == b.amenity && (a += "festival grounds<br/>");
  if ("yes" == b.openfire || "yes" == b.fireplace) a += "fireplace<br/>";
  if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {
    case "admission_tickets":
      a += "vending machine admission tickets<br/>";
      break;

    case "animal_feed":
      a += "vending machine animal feed<br/>";
      break;

    case "bicycle_tube":
      a += "vending machine bicycle tube<br/>";
      break;

    case "books":
      a += "vending machine books<br/>";
      break;

    case "candles":
      a += "vending machine candles<br/>";
      break;

    case "cigarettes":
      a += "vending machine cigarettes<br/>";
      break;

    case "chemist":
      a += "vending machine chemist<br/>";
      break;

    case "condoms":
      a += "vending machine condoms<br/>";
      break;

    case "drinks":
      a += "vending machine drinks<br/>";
      break;

    case "electronics":
      a += "vending machine electronics<br/>";
      break;

    case "elongated_coin":
      a += "vending machine elongated_coin<br/>";
      break;

    case "excrement_bags":
      a += "vending machine excrement_bags<br/>";
      break;

    case "feminine_hygiene":
      a += "vending machine feminine_hygiene<br/>";
      break;

    case "first_aid":
      a += "vending machine first_aid<br/>";
      break;

    case "fishing_tackle":
      a += "vending machine fishing tackle<br/>";
      break;

    case "fishing_bait":
      a += "vending machine fishing bait<br/>";
      break;

    case "flowers":
      a += "vending machine flowers<br/>";
      break;

    case "food":
      a += "vending machine food<br/>";
      break;

    case "ice_cubes":
      a += "vending machine ice cubes<br/>";
      break;

    case "ice_cream":
      a += "vending machine ice cream<br/>";
      break;

    case "ink_cartridges":
      a += "vending machine ink cartridges<br/>";
      break;

    case "laundry_detergent":
      a += "vending machine laundry detergent<br/>";
      break;

    case "public_transport_tickets":
      a += "vending machine public transport tickets<br/>";
      break;

    case "newspaper":
      a += "vending machine newspaper<br/>";
      break;

    case "parcel_pickup":
      a += "vending machine parcel pickup<br/>";
      break;

    case "parcel_mail_in":
      a += "Packege station<br/>";
      break;

    case "parking_tickets":
      a += "vending machine parking tickets<br/>";
      break;

    case "photos":
      a += "vending machine photos<br/>";
      break;

    case "sex_toys":
      a += "vending machine sex_toys<br/>";
      break;

    case "SIM_cards":
      a += "vending machine SIM_cards<br/>";
      break;

    case "stamps":
      a += "vending machine stamps<br/>";
      break;

    case "sweets":
      a += "vending machine sweets<br/>";
      break;

    case "syringes":
      a += "vending machine syringes<br/>";
      break;

    case "toll":
      a += "vending machine toll<br/>";
      break;

    case "toys":
      a += "vending machine toys<br/>";
      break;

    case "umbrellas":
      a += "vending machine umbrellas<br/>";
      break;

    default:
      a += "vending machine<br/>";
  } else a += "vending machine<br/>";
  "arts_centre" == b.amenity && (a += "arts centre<br/>");
  "artwork" == b.amenity && (a += "artwork<br/>");
  "museum" == b.amenity && (a += "museum<br/>");
  "theatre" == b.amenity && (a += "theatre<br/>");
  "cathedral" == b.building && (a += "cathedral<br/>");
  "church" == b.building && (a += "church<br/>");
  "chapel" == b.building && (a += "chapel<br/>");
  "place_of_worship" == b.amenity && (a += "place of worship<br/>");
  "village" == b.abandoned && (a += "abandoned village<br/>");
  "theme_park" == b["abandoned:tourism"] && (a += "abandoned theme park<br/>");
  "prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "abandoned concentration camp<br/>");
  "yes" == b.abandoned && "bunker" == b.military && (a += "abandoned bunker<br/>");
  "yes" == b.abandoned && "barracks" == b.military && (a += "abandoned barracks<br/>");
  "yes" == b.abandoned && "airfield" == b.military && (a += "abandoned airfield<br/>");
  "monastery" == b.historic && (a += "historic monastery<br/>");
  "monastery" == b.amenity && (a += "monastery<br/>");
  "monastery" == b.building && (a += "monastery<br/>");
  "manor" == b.historic && (a += "historic manor<br/>");
  "boundary_stone" == b.historic && (a += "historic boundary stone<br/>");
  "milestone" == b.historic && (a += "historic milestone<br/>");
  "monument" == b.historic && (a += "monument<br/>");
  "palace" == b.historic && (a += "historic palace<br/>");
  "mine" == b.historic && (a += "historic mine<br/>");
  "ruins" == b.historic && (a += "ruins<br/>");
  "harbour" == b.historic_usage && (a += "historic harbour<br/>");
  "rune stone" == b.historic && (a += "rune stone<br/>");
  "battlefield" == b.historic && (a += "historic battlefield<br/>");
  "blacksmith" == b.historic && (a += "historic blacksmith<br/>");
  if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "shrine<br/>";
  "city_gate" == b.historic && (a += "historic city gate<br/>");
  "wayside_cross" == b.historic && (a += "historic wayside cross<br/>");
  "monument" == b.amenity && (a += "monument<br/>");
  "memorial" == b.historic && (a += "memorial<br/>");
  "optical_telegraph" == b.historic && (a += "historic optical telegraph<br/>");
  if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {
    case "defensive":
      a += "defensive castle<br/>";
      break;

    case "palace":
      a += "palace<br/>";
      break;

    case "stately":
      a += "stately castle<br/>";
      break;

    case "manor":
      a += "manor<br/>";
      break;

    case "fortress":
      a += "fortress<br/>";
      break;

    case "castrum":
      a += "castrum<br/>";
      break;

    case "shiro":
      a += "shiro<br/>";
      break;

    case "kremlin":
      a += "kremlin<br/>";
      break;

    default:
      a += "castle<br/>";
  } else a += "castle<br/>";
  "archaeological_site" == b.historic && (a += "archaeological site<br/>");
  if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {
    case "tumulus":
      a += "tumulus<br/>";
      break;

    case "rock-cut":
      a += "rock<br/>";
      break;

    case "hypogeum":
      a += "hypogeum<br/>";
      break;

    case "war_grave":
      a += "war grave<br/>";
      break;

    case "mausoleum":
      a += "mausoleum<br/>";
      break;

    case "columbarium":
      a += "columbarium<br/>";
      break;

    case "crypt":
      a += "crypt<br/>";
      break;

    case "pyramid":
      a += "pyramid<br/>";
      break;

    case "sarcophagus":
      a += "sarcophagus<br/>";
      break;

    case "vault":
      a += "vault<br/>";
      break;

    case "tombstone":
      a += "tombstone<br/>";
      break;

    default:
      a += "historic tomb<br/>";
  } else a += "historic tomb<br/>";
  "accountant" == b.office && (a += "accountant<br/>");
  "administrative" == b.office && (a += "administrative<br/>");
  "architect" == b.office && (a += "architect<br/>");
  "association" == b.office && (a += "association<br/>");
  "physician" == b.office && (a += "physician<br/>");
  "camping" == b.office && (a += "camping office<br/>");
  "company" == b.office && (a += "company<br/>");
  "educational_institution" == b.office && (a += "educational institution<br/>");
  "employment_agency" == b.office && (a += "employment agency<br/>");
  "estate_agent" == b.office && (a += "estate agent<br/>");
  "forestry" == b.office && (a += "forestry<br/>");
  "foundation" == b.office && (a += "foundation<br/>");
  "government" == b.office && (a += "government<br/>");
  "guide" == b.office && (a += "guide office<br/>");
  "insurance" == b.office && (a += "insurance<br/>");
  "it" == b.office && (a += "it office<br/>");
  "lawyer" == b.office && (a += "lawyer<br/>");
  "newspaper" == b.office && (a += "newspaper<br/>");
  "ngo" == b.office && (a += "ngo office<br/>");
  "notary" == b.office && (a += "notary<br/>");
  "political_party" == b.office && (a += "political party<br/>");
  "quango" == b.office && (a += "quango office<br/>");
  "realtor" == b.office && (a += "realtor<br/>");
  "real_estate_agent" == b.office && (a += "real estate agent<br/>");
  "register" == b.office && (a += "register<br/>");
  "religion" == b.office && (a += "religious office<br/>");
  "research" == b.office && (a += "research office<br/>");
  "tax" == b.office && (a += "tax office<br/>");
  "telecommunication" == b.office && (a += "telecommunication office<br/>");
  "travel_agent" == b.office && (a += "travel agent<br/>");
  "water_utility" == b.office && (a += "water utility office<br/>");
  "therapist" == b.office && (a += "therapist<br/>");
  "city" == b.place && (a += "city<br/>");
  "town" == b.place && (a += "town<br/>");
  "village" == b.place && (a += "village<br/>");
  "continent" == b.place && (a += "continent<br/>");
  "ocean" == b.place && (a += "ocean</br>");
  "track" == b.highway && (a += "track<br/>");
  "raceway" == b.highway && (a += "raceway<br/>");
  "designated" == b.bicycle && (a += "cycle path<br/>");
  "path" == b.highway && (a += "food path<br/>");
  "parking" == b.amenity && (a += "parking<br/>");
  "services" == b.highway && (a += "services<br/>");
  "rest_area" == b.highway && (a += "rest area<br/>");
  "turning_circle" == b.highway && (a += "turning circle<br/>");
  "service" == b.highway && (a += "service road<br/>");
  "motorway" == b.highway && (a += "motorway<br/>");
  "motorway_junction" == b.highway && (a += "motorway junction<br/>");
  "bridleway" == b.highway && (a += "bridleway<br/>");
  "yes" == b.oneway && (a += "oneway<br/>");
  "yes" == b.park_ride && (a += "park and ride<br/>");
  "unknown" == b.park_ride && (a += "park and ride<br/>");
  "bus" == b.park_ride && (a += "park and ride<br/>");
  "tram" == b.park_ride && (a += "park and ride<br/>");
  "bus_stop" == b.highway && (a += "bus stop<br/>");
  "pedestrian" == b.highway && (a += "pedestrian<br/>");
  "street_lamp" == b.highway && (a += "street lamp<br/>");
  "traffic_signals" == b.highway && (a += "traffic signals<br/>");
  "traffic_signals" == b.crossing && (a += "traffic signals<br/>");
  "speed_camera" == b.highway && (a += "speed camera<br/>");
  "yes" == b.traffic_calming && (ret += "traffic calming</br>");
  "bump" == b.traffic_calming && (a += "bump</br>");
  "chicane" == b.traffic_calming && (a += "chicane</br>");
  "choker" == b.traffic_calming && (a += "choker</br>");
  "cushion" == b.traffic_calming && (a += "cushion</br>");
  "hump" == b.traffic_calming && (a += "hump</br>");
  "island" == b.traffic_calming && (a += "island</br>");
  "rumble_strip" == b.traffic_calming && (a += "rumble_strip</br>");
  "table" == b.traffic_calming && (a += "table</br>");
  "buoy_cardinal" == b["seamark:type"] && (a += "buoy cardinal<br/>");
  "buoy_lateral" == b["seamark:type"] && (a += "buoy lateral<br/>");
  "buoy_isolated_danger" == b["seamark:type"] && (a += "buoy isolated_danger<br/>");
  "perch" == b["seamark:beacon_lateral:shape"] && (a += "perch<br/>");
  "fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "fuel station<br/>" : "fuel" == b.amenity && (a += "fuel<br/>");

  if ("charging_station" == b.amenity) {
    var a = a + "charging station<br/>",
        c = b.voltage;

    if (b.car) {
      switch (b.car) {
        case "yes":
          a += "Car: yes";
          break;

        case "no":
          a += "Car: No";
          break;

        default:
          a += "Cars: unkown";
      }

      a += "<br/>";
    } else a += "Cars: unkown<br/>";

    if (b.bicycle) {
      switch (b.bicycle) {
        case "yes":
          a += "E-Bike: yes";
          break;

        case "no":
          a += "E-Bike: no";
          break;

        default:
          a += "E-Bike: unkown";
      }

      a += "<br/>";
    } else a += "E-Bike: unkown<br/>";

    b["socket:schuko"] && (a += "Schuko socket: " + b["socket:schuko"] + "<br/>");
    b["socket:cee_blue"] && (a += "Cee blue socket " + b["socket:cee_blue"] + "<br/>");
    b["socket:cee_red_16a"] && (a += "Cee red 16a socket " + b["socket:cee_red_16a"] + "<br/>");
    b["socket:cee_red_32a"] && (a += "Cee red 32a socket " + b["socket:cee_red_32a"] + "<br/>");
    b["socket:cee_red_64a"] && (a += "Cee red 64a socket " + b["socket:cee_red_64a"] + "<br/>");
    b["socket:cee_red_125a"] && (a += "Cee red 125a socket " + b["socket:cee_red_125a"] + "<br/>");
    b["socket:nema_5_15"] && (a += "Nema 5 15 socket " + b["socket:nema_5_15"] + "<br/>");
    b["socket:nema_5_20"] && (a += "Nema 5 20 socket " + b["socket:nema_5_20"] + "<br/>");
    b["socket:nema_14_30"] && (a += "Nema 14 30 socket " + b["socket:nema_14_30"] + "<br/>");
    b["socket:nema_14_50"] && (a += "Nema 14 50 socket " + b["socket:nema_14_50"] + "<br/>");
    b["socket:bs1363"] && (a += "Bs1363 socket " + b["socket:bs1363"] + "<br/>");
    b["socket:type1"] && (a += "Type 1 socket " + b["socket:type1"] + "<br/>");
    b["socket:type1_combo"] && (a += "Type 1 combo socket " + b["socket:schuko"] + "<br/>");
    b["socket:type2"] && (a += "Type 2 socket " + b["socket:type2"] + "<br/>");
    b["socket:type2_combo"] && (a += "Type 2 combo socket " + b["socket:type2_combo"] + "<br/>");
    b["socket:type3"] && (a += "Type 3 socket " + b["socket:type3"] + "<br/>");
    b["socket:chademo"] && (a += "Chademo socket " + b["socket:chademo"] + "<br/>");
    b["socket:magne_charge"] && (a += "Magne charge socket " + b["socket:magne_charge"] + "<br/>");
    b["socket:tesla_standard"] && (a += "Tesla standard socket " + b["socket:tesla_standard"] + "<br/>");
    b["socket:tesla_supercharge"] && (a += "Tesla supercharge: " + b["socket:tesla_supercharge"] + "<br/>");
    b["socket:tesla_roadster"] && (a += "Tesla_roadster socket " + b["socket:tesla_roadster"] + "<br/>");
    a += "<br/>";
    b.voltage && (a += "Volt: " + c + "<br/>");
  }

  "yes" == b.tunnel && (a += "tunnel<br/>");
  if (b.bridge) switch (a += "bridge: ", b.bridge) {
    case "swing":
      a += "swing";
      break;

    case "aqueduct":
      a += "aqueduct";
      break;

    case "bascule":
      a += "flap bridge";
      break;

    case "boardwalk":
      a += "boardwalk";
      break;

    case "cantilever":
      a += "cantilever";
      break;

    case "covered":
      a += "covered";
      break;

    case "drawbridge":
      a += "drawbridge";
      break;

    case "humpback":
      a += "humpback";
      break;

    case "lift":
      a += "lift";
      break;

    case "low_water_crossing":
      a += "low water crossing";
      break;

    case "moveable":
      a += "moveable";
      break;

    case "pontoon":
      a += "pontoon";
      break;

    case "suspension":
      a += "suspension";
      break;

    case "trestle":
      a += "trestle";
      break;

    case "viaduct":
      a += "viaduct";
  }
  if (b["bridge:movable"]) switch (b["bridge:movable"]) {
    case "swing":
      a += "swing";
      break;

    case "bascule":
      a += "bascule";
      break;

    case "drawbridge":
      a += "drawbridge";
      break;

    case "lift":
      a += "lift";
      break;

    case "submersible":
      a += "submersible";
      break;

    case "transporter":
      a += "transporter";
      break;

    case "retractable":
      a += "retractable";
  }
  if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "nursing home / retirement home<br/>";
  "social_facility" == b.amenity && (a += "social facility<br/>");

  if (b.social_facility) {
    "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "senior group home<br/>");
    "assisted_living" == b.social_facility && (a += "assisted living<br/>");
    "outreach" == b.social_facility && (a += "outreach<br/>");
    "workshop" == b.social_facility && (a += "workshop<br/>");
    if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "ambulatory care<br/>";
    "shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "senior shelter<br/>");
    "shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "abused shelter<br/>");
    "food_bank" == b.social_facility && (a += "food bank<br/>");
    "hospice" == b.social_facility && (a += "hospice<br/>");
  }

  b.brewery && (a += "brand of beer: " + b.brewery + "<br/>");
  "alcohol" == b.shop && (a += "alcohol shop<br/>");
  "bakery" == b.shop && (a += "bakery shop<br/>");
  "beverages" == b.shop && (a += "beverages shop<br/>");
  "butcher" == b.shop && (a += "butcher shop<br/>");
  "cheese" == b.shop && (a += "cheese shop<br/>");
  "chocolate" == b.shop && (a += "chocolate shop<br/>");
  "coffee" == b.shop && (a += "coffee shop<br/>");
  "confectionery" == b.shop && (a += "confectionery shop<br/>");
  "convenience" == b.shop && (a += "convenience shop<br/>");
  "deli" == b.shop && (a += "deli shop<br/>");
  "dairy" == b.shop && (a += "dairy shop<br/>");
  "farm" == b.shop && (a += "farm shop<br/>");
  "greengrocer" == b.shop && (a += "greengrocer shop<br/>");
  "grocery" == b.shop && (a += "grocery shop<br/>");
  "organic" == b.shop && (a += "organic shop<br/>");
  "pasta" == b.shop && (a += "pasta shop<br/>");
  "seafood" == b.shop && (a += "seafood shop<br/>");
  "tea" == b.shop && (a += "tea shop<br/>");
  "wine" == b.shop && (a += "wine shop<br/>");
  "department_store" == b.shop && (a += "department store<br/>");
  "general" == b.shop && (a += "general shop<br/>");
  "kiosk" == b.shop && (a += "kiosk<br/>");
  "mall" == b.shop && (a += "mall<br/>");
  "supermarket" == b.shop && (a += "supermarket<br/>");
  "baby_goods" == b.shop && (a += "baby goods shop<br/>");
  "bag" == b.shop && (a += "bag shop<br/>");
  "boutique" == b.shop && (a += "boutique<br/>");
  "clothes" == b.shop && (a += "clothes shop<br/>");
  "fabric" == b.shop && (a += "fabric shop<br/>");
  "fashion" == b.shop && (a += "fashion shop<br/>");
  "jewelry" == b.shop && (a += "jewelry shop<br/>");
  "leather" == b.shop && (a += "leather shop<br/>");
  "shoes" == b.shop && (a += "shoes shop<br/>");
  "variety_store" == b.shop && (a += "variety store<br/>");
  "chemist" == b.shop && (a += "chemist<br/>");
  "cosmetics" == b.shop && (a += "cosmetics shop<br/>");
  "drugstore" == b.shop && (a += "drugstore<br/>");
  "perfumery" == b.shop && (a += "perfumery<br/>");
  "erotic" == b.shop && (a += "erotic shop<br/>");
  "hairdresser" == b.shop && (a += "hairdresser<br/>");
  "hearing_aids" == b.shop && (a += "hearing aids<br/>");
  "herbalist" == b.shop && (a += "herbalist<br/>");
  "massage" == b.shop && (a += "massage<br/>");
  "medical_supply" == b.shop && (a += "medical supply shop<br/>");
  "optician" == b.shop && (a += "optician<br/>");
  "tattoo" == b.shop && (a += "tattoo<br/>");
  "bathroom_furnishing" == b.shop && (a += "bathroom furnishing<br/>");
  "doityourself" == b.shop && (a += "doityourself<br/>");
  "energy" == b.shop && (a += "energy<br/>");
  "florist" == b.shop && (a += "florist<br/>");
  "furnace" == b.shop && (a += "furnace shop<br/>");
  "garden_centre" == b.shop && (a += "garden centre<br/>");
  "gas" == b.shop && (a += "gas<br/>");
  "glaziery" == b.shop && (a += "glaziery<br/>");
  "hardware" == b.shop && (a += "hardware shop<br/>");
  "houseware" == b.shop && (a += "houseware shop<br/>");
  "locksmith" == b.shop && (a += "locksmith<br/>");
  "paint" == b.shop && (a += "paint shop<br/>");
  "trade" == b.shop && (a += "trade<br/>");
  "antiques" == b.shop && (a += "antiques shop<br/>");
  "bed" == b.shop && (a += "bed shop<br/>");
  "candles" == b.shop && (a += "candles shop<br/>");
  "carpet" == b.shop && (a += "carpet shop<br/>");
  "curtain" == b.shop && (a += "curtain shop<br/>");
  "furniture" == b.shop && (a += "furniture store<br/>");
  "interior_decoration" == b.shop && (a += "interior decoration company<br/>");
  "kitchen" == b.shop && (a += "kitchen shop<br/>");
  "window_blind" == b.shop && (a += "window blind shop<br/>");
  "computer" == b.shop && (a += "computer shop<br/>");
  "electronics" == b.shop && (a += "electronics shop<br/>");
  "hifi" == b.shop && (a += "hifi shop<br/>");
  "mobile_phone" == b.shop && (a += "mobile phone shop<br/>");
  "radiotechnics" == b.shop && (a += "radiotechnics shop<br/>");
  "vacuum_cleaner" == b.shop && (a += "vacuum cleaner shop<br/>");
  "bicycle" == b.shop && (a += "bicycle shop<br/>");
  "car" == b.shop && (a += "car shop<br/>");
  "car repair" == b.shop && (a += "car repair<br/>");
  "car_parts" == b.shop && (a += "car parts shop<br/>");
  if ("dive" == b.shop || "scuba_diving" == b.shop) a += "scuba diving shop<br/>";
  "fishing" == b.shop && (a += "fishing shop<br/>");
  "free_flying" == b.shop && (a += "free flying shop<br/>");
  "hunting" == b.shop && (a += "hunting shop<br/>");
  "motorcycle" == b.shop && (a += "motorcycle shop<br/>");
  "outdoor" == b.shop && (a += "outdoor shop<br/>");
  "sports" == b.shop && (a += "sports shop<br/>");
  "tyres" == b.shop && (a += "tyres<br/>");
  "water_sports" == b.shop && (a += "water sports shop<br/>");
  "art" == b.shop && (a += "art<br/>");
  "craft" == b.shop && (a += "craft<br/>");
  "frame" == b.shop && (a += "frame shop<br/>");
  "music" == b.shop && (a += "music shop<br/>");
  "music_instrument" == b.shop && (a += "music instruments shop<br/>");
  "photo" == b.shop && (a += "photo shop<br/>");
  "video" == b.shop && (a += "video<br/>");
  "video_games" == b.shop && (a += "video games<br/>");
  "anime" == b.shop && (a += "anime<br/>");
  "books" == b.shop && (a += "books shop<br/>");
  "gift" == b.shop && (a += "gift shop<br/>");
  "newsagent" == b.shop && (a += "newsagent<br/>");
  "stationery" == b.shop && (a += "stationery<br/>");
  "ticket" == b.shop && (a += "ticket shop<br/>");
  "copyshop" == b.shop && (a += "copyshop<br/>");
  "funeral_directors" == b.shop && (a += "funeral directors<br/>");
  "laundry" == b.shop && (a += "laundry<br/>");
  "dry_cleaning" == b.shop && (a += "dry cleaning<br/>");
  "money_lender" == b.shop && (a += "money lender<br/>");
  "pawnbroker" == b.shop && (a += "pawnbroker<br/>");
  "pet" == b.shop && (a += "pet shop<br/>");
  "pyrotechnics" == b.shop && (a += "pyrotechnics shop<br/>");
  "religion" == b.shop && (a += "religion<br/>");
  "beauty" == b.shop && (a += "beauty<br/>");
  "solarium" == b.shop && (a += "solarium<br/>");
  "tobacco" == b.shop && (a += "tobacco shop<br/>");
  "toys" == b.shop && (a += "toys shop<br/>");
  "travel_agency" == b.shop && (a += "travel agency<br/>");
  "market_hall" == b.shop && (a += "market hall<br/>");
  "vacant" == b.shop && (a += "vacant<br/>");
  "weapons" == b.shop && (a += "weapons shop<br/>");
  "lottery" == b.gambling && (a += "lottery<br/>");
  "fish" == b.pet && (a += "fishkeeping<br/>");
  "agriucultural_engines" == b.craft && (a += "agriucultural engines<br/>");
  "basket_maker" == b.craft && (a += "basket maker<br/>");
  "beekeeper" == b.craft && (a += "beekeeper<br/>");
  "blacksmith" == b.craft && (a += "blacksmith<br/>");
  "brewery" == b.craft && (a += "brewery<br/>");
  "yes" == b.microbrewery && (a += "micro-brewery<br/>");
  "boatbuilder" == b.craft && (a += "boatbuilder<br/>");
  "bookbinder" == b.craft && (a += "bookbinder<br/>");
  "builder" == b.craft && (a += "housebuilding<br/>");
  "carpenter" == b.craft && (a += "carpenter, woodworker, joiner<br/>");
  "carpet_layer" == b.craft && (a += "carpet layer<br/>");
  "caterer" == b.craft && (a += "caterer<br/>");
  "clockmaker" == b.craft && (a += "clockmaker<br/>");
  "confectionery" == b.craft && (a += "confectionery<br/>");
  "dressmaker" == b.craft && (a += "dressmaker<br/>");
  "electrician" == b.craft && (a += "electrician<br/>");
  "gardener" == b.craft && (a += "gardener, landscaper<br/>");
  "glaziery" == b.craft && (a += "glaziery<br/>");
  "handicraft" == b.craft && (a += "handicraft<br/>");
  "hvac" == b.craft && (a += "heating, ventilation and air-conditioning technology (HVAC)<br/>");
  "insulation" == b.craft && (a += "thermal insulation<br/>");
  "jeweller" == b.craft && (a += "jeweller, gold-/silversmiths<br/>");
  "key_cutter" == b.craft && (a += "key cutter<br/>");
  "locksmith" == b.craft && (a += "locksmith<br/>");
  "metal_construction" == b.craft && (a += "metalworker<br/>");
  "optician" == b.craft && (a += "optician<br/>");
  "painter" == b.craft && (a += "painter<br/>");
  "parquet_layer" == b.craft && (a += "parquet layer<br/>");
  "photographer" == b.craft && (a += "photographer<br/>");
  "photographic_laboratory" == b.craft && (a += "photographic laboratory<br/>");
  "plasterer" == b.craft && (a += "plasterer<br/>");
  "plumber" == b.craft && (a += "plumber<br/>");
  "pottery" == b.craft && (a += "pottery<br/>");
  "rigger" == b.craft && (a += "ship rigger<br/>");
  "roofer" == b.craft && (a += "roofer<br/>");
  "saddler" == b.craft && (a += "saddler<br/>");
  "sailmaker" == b.craft && (a += "sailmaker<br/>");
  "sawmill" == b.craft && (a += "sawmill<br/>");
  "scaffolder" == b.craft && (a += "scaffolder<br/>");
  "sculptor" == b.craft && (a += "sculptor<br/>");
  "shoemaker" == b.craft && (a += "shoemaker<br/>");
  "stand_builder" == b.craft && (a += "exhibition stand builder<br/>");
  "stonemason" == b.craft && (a += "stonemason<br/>");
  "sun_protection" == b.craft && (a += "constructor for sun protection, venetian blind, shutter<br/>");
  "sweep" == b.craft && (a += "chimney sweep<br/>");
  "tailor" == b.craft && (a += "tailor<br/>");
  "tiler" == b.craft && (a += "tiler<br/>");
  "tinsmith" == b.craft && (a += "tinsmith, metalworker<br/>");
  "upholsterer" == b.craft && (a += "upholsterer<br/>");
  "watchmaker" == b.craft && (a += "watchmaker<br/>");
  "window_construction" == b.craft && (a += "window constructor<br/>");
  "machines" == b.rental && (a += "rental park for machines<br/>");
  "car_rental" == b.amenity && (a += "car rental company<br/>");
  "allotments" == b.landuse && (a += "allotment garden<br/>");
  "basin" == b.landuse && (a += "holding reservoir<br/>");
  "brownfield" == b.landuse && (a += "brownfield<br/>");
  "commercial" == b.landuse && (a += "commercial area<br/>");
  "construction" == b.landuse && (a += "construction area<br/>");
  "farmland" == b.landuse && (a += "farmland<br/>");
  "farmyard" == b.landuse && (a += "farmyard<br/>");
  "forest" == b.landuse && (a += "forest<br/>");
  "garages" == b.landuse && (a += "garages<br/>");
  "grass" == b.landuse && (a += "grass<br/>");
  "greenfield" == b.landuse && (a += "greenfield<br/>");
  "greenhouse_horticulture" == b.landuse && (a += "greenhouse horticulture<br/>");
  "industrial" == b.landuse && (a += "industry area<br/>");
  "landfill" == b.landuse && (a += "landfill<br/>");
  "meadow" == b.landuse && (a += "meadow<br/>");
  "orchard" == b.landuse && (a += "orchard<br/>");
  "plant_nursery" == b.landuse && (a += "plant nursery<br/>");
  "quarry" == b.landuse && (a += "quarry<br/>");
  "railway" == b.landuse && (a += "railway<br/>");
  "recreation_ground" == b.landuse && (a += "recreation ground<br/>");
  "reservoir" == b.landuse && (a += "reservoir<br/>");
  "residential" == b.landuse && (a += "residential<br/>");
  "retail" == b.landuse && (a += "retrail<br/>");
  "salt_pond" == b.landuse && (a += "salt pond<br/>");
  "village_green" == b.landuse && (a += "village green<br/>");
  "vineyard" == b.landuse && (a += "vineyard<br/>");
  "pond" == b.landuse && (a += "pond<br/>");
  "salt_pond" == b.landuse && (a += "salt pond<br/>");
  "animal_keeping" == b.landuse && (a += "animal keeping<br/>");
  "yes" == b.entrance && (a += "entrance<br/>");
  "main" == b.entrance && (a += "main-entrance<br/>");
  "service" == b.entrance && (a += "rear exit for staffing and suppliers<br/>");
  "exit" == b.entrance && (a += "exit<br/>");
  "emergency" == b.entrance && (a += "emergency<br/>");
  "bay" == b.natural && (a += "bay<br/>");
  "beach" == b.natural && (a += "beach<br/>");
  "wood" == b.natural && (a += "wood<br/>");
  "glacier" == b.natural && (a += "glacier<br/>");
  "cave_entrance" == b.natural && (a += "cave entrance<br/>");
  "spring" == b.natural && (a += "spring<br/>");
  "waterfall" == b.natural && (a += "waterfall<br/>");
  "scrub" == b.natural && (a += "scrub<br/>");
  "grassland" == b.natural && (a += "grassland<br/>");
  "wetland" == b.natural && (a += "wetland<br/>");
  "tree" == b.natural && (a += "tree");
  "peak" == b.natural && "yes" == b["summit:cross"] && (a += "cross on the summit of a mountain<br/>");
  "tree_row" == b.natural && (a += "tree row, alley of trees<br/>");
  "heath" == b.natural && (a += "heath<br/>");
  "moor" == b.natural && (a += "moor<br/>");
  "grassland" == b.natural && (a += "grassland<br/>");
  "fell" == b.natural && (a += "grasland above the tree land<br/>");
  "bare_rock" == b.natural && (a += "bare rock<br/>");
  "scree" == b.natural && (a += "scree<br/>");
  "volcano" == b.natural && (a += "volcano<br/>");
  "valley" == b.natural && (a += "valley<br/>");
  "stone" == b.natural && (a += "stone<br/>");
  "sea" == b.natural && (a += "sea<br/>");
  "national_park" == b.boundary && (a += "national park<br/>");
  "protected_area" == b.boundary && (a += "protected area<br/>");
  "yes" == b.mountain_pass && (a += "mountain pass<br/>");
  "waterfall" == b.waterway && (a += "waterfall<br/>");
  "canal" == b.waterway && (a += "canal<br/>");
  "canal" == b.water && (a += "canal<br/>");
  "river" == b.waterway && (a += "river<br/>");
  "river" == b.water && (a += "river<br/>");
  "riverbank" == b.waterway && (a += "river<br/>");
  "ditch" == b.waterway && (a += "ditch<br/>");
  "stream" == b.waterway && (a += "stream<br/>");
  "ferry" == b.route && (a += "ferry<br/>");
  "turning_point" == b.waterway && (a += "turning point<br/>");
  if ("lake" == b.water || "water" == b.natural) a += "lake<br/>";
  "cove" == b.water && (a += "cove<br/>");
  "lagoon" == b.water && (a += "lagoon<br/>");
  "pond" == b.water && (a += "pond<br/>");
  "reservoir" == b.water && (a += "waterreservoir<br/>");
  "oxbow" == b.water && (a += "oxbow lake<br/>");
  "lock" == b.water && (a += "lock chamber<br/>");
  "moat" == b.water && (a += "castle moat<br/>");
  "wastewater" == b.water && (a += "wastewater treatment plant<br/>");
  "guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "gastrointestinal<br/>" : "pier" == b.man_made && (a += "pier<br/>");
  "boatyard" == b.waterway && (a += "boatyard<br/>");
  "mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "dolphin<br/>");
  "foot" == b.route && (a += "footpath<br/>");
  "hiking" == b.route && (a += "hiking trail<br/>");
  if ("yes" == b.hiking && "information" == b.tourism) a += "direction board<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {
    case "board":
      a += "direction board<br/>";
      break;

    case "map":
      a += "direction board with a map<br/>";
      break;

    case "office":
      a += "tourist information office<br/>";
      break;

    case "terminal":
      a += "tourist information terminal<br/>";
      break;

    case "audioguide":
      a += "audioguide<br/>";
      break;

    case "guidepost":
      a += "guidepost<br/>";
      break;

    case "tactile_map":
      a += "tactile map<br/>";
      break;

    case "tactile_model":
      a += "tactile model<br/>";
      break;

    case "route_marker":
      a += "route marker<br/>";
      break;

    default:
      a += "direction board<br/>";
  } else a += "direction board<br/>";
  "bicycle" == b.route && (a += "cycle track<br/>");
  "mtb" == b.route && (a += "mountain bike route<br/>");
  "horse" == b.route && (a += "bridleway<br/>");
  "coastline" == b.natural && (a += "coastline<br/>");
  "cliff" == b.natural && (a += "cliff<br/>");
  "dam" == b.waterway && (a += "dam<br/>");
  "weir" == b.waterway && (a += "weir<br/>");
  "lock_gate" == b.waterway && (a += "lock gate<br/>");
  "yes" == b.lock && (a += "lock<br/>");
  "sluice_gate" == b.waterway && (a += "sluice gate<br/>");
  "pumping_station" == b.man_made && (a += "pumping station<br/>");
  "groyne" == b.man_made && (a += "groyne<br/>");
  "dyke" == b.man_made && (a += "dyke<br/>");
  "levee" == b.man_made && (a += "levee<br/>");
  "watermill" == b.man_made && (a += "watermill<br/>");
  "airfield" == b.military && (a += "military airfield<br/>");
  "naval_base" == b.military && (a += "naval base<br/>");
  "range" == b.military && (a += "military range<br/>");
  "military" == b.landuse && (a += "military land use<br/>");
  "training_area" == b.military && (a += "military training area<br/>");
  "exclusion_zone" == b.military && (a += "military exclusion zone<br/>");
  "danger_area" == b.military && (a += "military danger area<br/>");
  "barracks" == b.military && (a += "barracks<br/>");
  "nuclear_explosion_site" == b.military && (a += "military nuclear explosion site<br/>");
  "yes" == b.construction ? a += "construction<br/>" : "construction" == b.highway && (a += "construction<br/>");
  "petroleum_well" == b.man_made && (a += "petroleum well<br/>");
  "storage_tank" == b.man_made && (a += "storage tank<br/>");
  "wastewater_plant" == b.man_made && (a += "wastewater plant<br/>");
  "silo" == b.man_made && (a += "silo<br/>");
  "water_tower" == b.man_made && (a += "water tower<br/>");
  "windmill" == b.man_made && (a += "windmill<br/>");
  "monitoring_station" == b.man_made && (a += "monitoring station");
  "crane" == b.man_made && (a += "crane");
  "lighthouse" == b.man_made && (a += "lighthouse");
  "beacon" == b.man_made && (a += "beacon");
  "breakwater" == b.man_made && (a += "breakwater");
  "lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "street lamp<br/>");
  "lantern" == b.light_source && (a += "street lamp");
  "floodlight" == b.light_source && (a += "floodlight<br/>");
  "signal_lamp" == b.light_source && (a += "signal lamp<br/>");
  "aviation" == b.light_source && (a += "aviation<br/>");
  "warning" == b.light_source && (a += "warning<br/>");
  if (b.light_source && b["light:method"]) switch (a += "Light Typ: ", b["light:method"]) {
    case "gas":
      a += "Gas";
      break;

    case "electric":
      a += "electric";
      break;

    case "incandescent":
      a += "incandescent";
      break;

    case "halogen":
      a += "halogen";
      break;

    case "discharge":
      a += "discharge";
      break;

    case "metal-halide":
      a += "metal-halide";
      break;

    case "neon":
      a += "neon";
      break;

    case "sodium":
      a += "Natriumdampflampe";
      break;

    case "high_pressure_sodium":
      a += "high pressure sodium";
      break;

    case "low_pressure_sodium":
      a += "low pressure sodium";
      break;

    case "fluorescent":
      a += "Fluorescent";
      break;

    case "mercury":
      a += "Mercury";
      break;

    case "LED":
      a += "LED";
      break;

    case "laser":
      a += "Laser";
      break;

    case "arc":
      a += "Arc";
      break;

    default:
      a += "Unkown";
  }
  "drinking_water" == b.amenity && (a += "drinking water<br/>");
  "yes" == b.drinking_water && (a += "drinking water<br/>");
  "works" == b.man_made ? a += "industrial building<br/>" : "industrial" == b.building ? a += "industrial building<br/>" : "industrial" == b.landuse ? a += "industrial area<br/>" : "industrial" == b.abutters ? a += "industrial area<br/>" : "commercial" == b.abutters && (a += "commercial<br/>");
  if (b["generator:source"]) switch (a += "installation: ", b["generator:source"]) {
    case "biomass":
      a += "biomass";
      break;

    case "biofuel":
      a += "biofuel";
      break;

    case "biogas":
      a += "biogas";
      break;

    case "coal":
      a += "coal";
      break;

    case "oil":
      a += "oil";
      break;

    case "waste":
      a += "waste";
      break;

    case "wind":
      a += "wind";
      break;

    case "solar":
      a += "solar";
      break;

    case "hydro":
      a += "hydro";
      break;

    case "tidal":
      a += "tidal";
      break;

    case "wave":
      a += "wave";
      break;

    case "geothermal":
      a += "geothermal";
      break;

    case "osmotic":
      a += "osmotic";
      break;

    case "nuclear":
      a += "nuclear";
      break;

    default:
      a += "unknown<br/>";
  }
  "photovoltaic" == b.power_source && (a += "photovoltaic");
  "line" == b.power && (a += "power line<br/>");
  "cable" == b.power && (a += "cable<br/>");
  "cable_distribution_cabinet" == b.power && (a += "cable distribution cabinet<br/>");
  "plant" == b.power && (a += "plant<br/>");
  "station" == b.power && (a += "station<br/>");
  "sub_station" == b.power && (a += "substation<br/>");
  "compensator" == b.power && (a += "compensator<br/>");
  "converter" == b.power && (a += "converter<br/>");
  "generator" == b.power && (a += "generator<br/>");
  "heliostat" == b.power && (a += "heliostat<br/>");
  "insulator" == b.power && (a += "insulator<br/>");
  "busbar" == b.line && (a += "busbar<br/>");
  "bay" == b.line && (a += "bay<br/>");
  "minor_line" == b.power && (a += "minor line<br/>");
  "pole" == b.power && (a += "pole<br/>");
  "portal" == b.power && (a += "portal<br/>");
  "catenary_mast" == b.power && (a += "catenary mast<br/>");
  "substation" == b.power && (a += "substation<br/>");
  "switch" == b.power && (a += "switch<br/>");
  "terminal" == b.power && (a += "terminal<br/>");
  "tower" == b.power && (a += "tower<br/>");
  "transformer" == b.power && (a += "transformer<br/>");
  if (b.barrier) switch (b.barrier) {
    case "bollard":
      a += "bollard<br/>";
      break;

    case "cycle_barrier":
      a += "cycle barrier<br/>";
      break;

    case "gate":
      a += "gate<br/>";
      break;

    case "chain":
      a += "chain<br/>";
      break;

    case "lift_gate":
      a += "lift gate<br/>";
      break;

    case "wall":
      a += "wall<br/>";
      break;

    case "toll_booth":
      a += "toll booth<br/>";
      break;

    case "fence":
      switch (b.fence_type) {
        case "barbed_wire":
          a += "barbed wire<br/>";
          break;

        case "wood":
          a += "wood<br/>";
          break;

        case "chain_link":
          a += "chain link<br/>";
          break;

        case "electric":
          a += "electric<br/>";
          break;

        case "railing":
          a += "railing<br/>";
          break;

        case "wire":
          a += "wire<br/>";
          break;

        case "metal":
          a += "metal<br/>";
          break;

        case "pole":
          a += "pole<br/>";
          break;

        default:
          a += "fence<br/>";
      }

      break;

    case "block":
      a += "block<br/>";
      break;

    case "ditch":
      a += "ditch<br/>";
      break;

    case "border_control":
      a += "border control<br/>";
      break;

    case "hedge":
      a += "hedge<br/>";
      break;

    case "retaining_wall":
      a += "retaining wall<br/>";
      break;

    case "cattle_grid":
      a += "cattle grid<br/>";
      break;

    case "horse_stile":
      a += "horse stile<br/>";
      break;

    default:
      a += "unknown<br/>";
  }
  "noise_barrier" == b.wall && (a += "noise barrier<br/>");
  "retaining_wall" == b.designation && (a += "noise barrier<br/>");
  "noise_barrier" == b.designation && (a += "noise barrier<br/>");
  "surveillance" == b.man_made && (a += "surveillance<br/>");
  if (b.aeroway) switch (a += "airport: ", b.aeroway) {
    case "aerodrome":
      a += "airport";
      break;

    case "apron":
      a += "apron";
      break;

    case "gate":
      a += "gate";
      break;

    case "helipad":
      a += "helipad";
      break;

    case "hangar":
      a += "hangar";
      break;

    case "runway":
      a += "runway";
      break;

    case "taxiway":
      a += "taxiway";
      break;

    case "terminal":
      a += "terminal";
      break;

    default:
      a += "unknown<br/>";
  }
  "stop" == b.railway && (a += "railway stop<br/>");
  "crossing" == b.railway && (a += "crossing<br/>");
  "level_crossing" == b.railway && (a += "lvel crossing<br/>");
  "station" == b.railway && (a += "station<br/>");
  "bus_station" == b.amenity && (a += "bus station<br/>");
  "bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "bus station<br/>");
  "rail" == b.railway && (a += "railway<br/>", "contact_line" == b.electrified && (a += "overhead contact line<br/>"));
  "tram" == b.railway && (a += "tram<br/>");
  if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "slipway<br/>";
  if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {
    case "ferry":
      a += "ferry<br/>";
      break;

    case "container":
      a += "container<br/>";
      break;

    case "marina":
      "marina" != b.leisure && (a += "marina<br/>");
      break;

    case "navel_base":
      a += "navel base<br/>";
      break;

    case "tanker":
      a += "tanker<br/>";
      break;

    case "passenger":
      a += "passenger<br/>";
      break;

    case "bulk":
      a += "bulk<br/>";
      break;

    default:
      a += "habour<br/>";
  } else a += "habour<br/>";
  "marina" == b.leisure && (a += "marina<br/>");
  "wreck" == b.historic && (a += "wreck<br/>");
  "animal_shelter" == b.amenity && (a += "animal shelter<br/>");
  "shelter" == b.animal && (a += "shelter<br/>");
  "horse_walker" == b.animal && (a += "horse walker<br/>");
  "yes" == b.animal_shelter && (a += "animal shelter<br/>");
  "dog" == b.animal_shelter && (a += "animal shelter<br/>");
  "cat" == b.animal_shelter && (a += "animal shelter<br/>");
  "animal_boarding" == b.amenity && (a += "animal boarding<br/>");
  "yes" == b.animal_boarding && (a += "animal boarding<br/>");
  "dog" == b.animal_boarding && (a += "animal boarding<br/>");
  "horse" == b.animal_boarding && (a += "animal boarding<br/>");
  "cat" == b.animal_boarding && (a += "animal boarding<br/>");
  "dog;cat" == b.animal_boarding && (a += "animal boarding<br/>");
  "cat;dog" == b.animal_boarding && (a += "animal boarding<br/>");
  if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "animal training<br/>";
  "swimming" == b.animal && (a += "swimming for dogs<br/>");
  if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "animal feeding<br/>";
  if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "wildlife feeding<br/>";
  if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "feeding rack<br/>";
  "manger" == b.amenity && (a += "manger<br/>");
  "birdhouse" == b.man_made && (a += "birdhouse<br/>");
  "stork" == b.birds_nest && (a += "storck<br/>");
  "nest_box" == b.amenity && (a += "nest box<br/>");
  "wellness" == b.animal && (a += "dog parlour<br/>");
  "cemetery" == b.animal && (a += "small animal cemetery<br/>");
  if ("stable" == b.building || "stable" == b["building:use"]) a += "stable<br/>";
  "cowshed" == b.building && (a += "cowshed<br/>");
  "sty" == b.building && (a += "sty<br/>");
  "barn" == b.building && (a += "barn<br/>");
  "farm_auxiliary" == b.building && (a += "farm auxiliary<br/>");
  if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "milestone of waterway distance<br/>";
  "milestone" == b.highway && (a += "milestone<br/>");
  "market" == b["xmas:feature"] && (a += "Christmas fair<br/>");
  "tree" == b["xmas:feature"] && (a += "sale of Chrismas trees<br/>");
  "event" == b["xmas:feature"] && (a += "Chrismas event<br/>");
  "pyramid" == b["xmas:feature"] && (a += "Chrismas pyramid<br/>");
  return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}
var fnContent = function (b) {
  var a;
  a = "" + fnContentGeneralInformations(b);
  a += fnContentHealthcare(b);
  a += fnContentAerodrome(b);
  a += fnContentCuisine(b);
  a += fnContentShipping(b);
  a += fnContentHydrants(b);
  a += fnContentSports(b);
  a += fnContentStreetsTraffic(b);
  a += fnContentInformationCity(b);
  a += fnContentEmergency(b);
  a += fnContentStorage(b);
  a += fnContentAmenity(b);
  a += fnContentTourism(b);
  a += fnContentRoute(b);
  a += fnContentPetrol(b);
  a += fnContentBarriers(b);
  a += fnContentLanduse(b);
  a += fnContentNatural(b);
  a += fnKlosterAdditional(b);
  a += fnSicherheitAdditional(b);
  a += fnAdditionalBuildingInfos(b);
  a += fnKraftwerkInfo(b);
  a += fnMessstation(b);
  a += fnWertstoffinfo(b);
  (a += fnContentProtectedArea(b)) && (a = "<br/>" + a);
  return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = function (b) {
  var a = "";
  b.aerodrome && ("international" == b.aerodrome && (a += "type of airport: international<br/>"), "regional" == b.aerodrome && (a += "type of airport: regional<br/>"), "gliding" == b.aerodrome && (a += "type of airport: gliding<br/>"), "private" == b.aerodrome && (a += "type of airport: private<br/>"));
  b.iata && (a += "IATA-Code: " + b.iata + "<br/>");
  b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");
  return a;
},
    fnContentNatural = function (b) {
  var a = "";

  if (b.forest || b.wood) {
    if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "broadleaved<br/>";
    if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "needleleaved<br/>";
    if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "mixed<br/>";
    "leafless" == b.leaf_type && (a += "leafless<br/>");
    "evergreen" == b.wood && (a += "evergreen<br/>");
    "palm" == b.wood && (a += "palm<br/>");
    "nipa_palm" == b.wood && (a += "nipa palm<br/>");
    "eucalypt" == b.wood && (a += "eucalypt<br/>");
    if ("filao" == b.wood || "casuarina" == b.wood) a += "casuarina<br/>";
  }

  if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "broad-leaved<br/>" : a + "conifer<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "landmark<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "natural monument<br/>";
  "manger" == b["feeding:type"] && (a += "manger:rack for fodder<br/>");
  "automated" == b["feeding:type"] && (a += "automated<br/>");
  if (b["feeding:for"]) switch (b["feeding:for"]) {
    case "sheep":
      a += "animal: sheep<br/>";
      break;

    case "horse":
      a += "animal: horse<br/>";
      break;

    case "cow":
      a += "animal: cow<br/>";
      break;

    case "rabbit":
      a += "animal: rabbit<br/>";
      break;

    case "bunny":
      a += "animal: bunny<br/>";
      break;

    case "cat":
      a += "animal: cat </br>";
      break;

    case "swan":
      a += "animal: swan </br>";
      break;

    case "guinea pig":
      a += "animal: guinea pig </br>";
      break;

    case "donkey":
      a += "animal: donkey </br>";
      break;

    case "squirrel":
      a += "animal: squirrel </br>";
      break;

    case "pig":
      a += "animal: pig </br>";
      break;

    case "deer":
      a += "animal: deer </br>";
      break;

    case "guinea pig":
      a += "animal: guinea pig </br>";
      break;

    case "monkey":
      a += "animal: monkey </br>";
      break;

    case "camel":
      a += "animal: camel </br>";
      break;

    case "goat":
      a += "animal: goat </br>";
      break;

    case "hamster":
      a += "animal: hamster </br>";
      break;

    case "alpaca":
      a += "animal: alpaca </br>";
      break;

    default:
      a += "animal: unknown<br/>";
  }
  if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {
    case "hay":
      a += "feed with: hay</br>";
      break;

    case "grain":
      a += "feed with: grain</br>";
      break;

    case "corn":
      a += "feed with: corn</*br>";
      break;

    default:
      a += "feed with: unknown</br>";
  }
  "volcano" == b.natural && "active" == b.status && (a += "active volcano<br/>");
  "volcano" == b.natural && "dormant" == b.status && (a += "dormant volcano<br/>");
  "volcano" == b.natural && "extinct" == b.status && (a += "extinct volcano<br/>");
  "volcano" == b.natural && "stratovolcano" == b.type && (a += "type of volcanism:stratovolcano<br/>");
  "volcano" == b.natural && "shield" == b.type && (a += "type of volcanism:shield<br/>");
  "volcano" == b.natural && "scoria" == b.type && (a += "type of volcanism:scoria<br/>");
  return a;
},
    fnContentProtectedArea = function (b) {
  var a = "",
      c = "";
  "protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "description: Strict Nature Reserve, Wilderness Area<br/>"), "2" == c && (a = "description: National Park<br/>"), "3" == c && (a = "description: Natural Monument or Feature<br/>"), "4" == c && (a = "description: Habitat/Species Management Area<br/>"), "5" == c && (a = "description: Protected Landscape/ Seascape<br/>"), "6" == c && (a = "description: Protected area with sustainable use of natural resources<br/>"), "7" == c && (a = "description: nature-feature area<br/>"), "97" == c && (a = "description: protected by continental agreements<br/>"), "98" == c && (a = "description: protected by interstate- or international conventions<br/>"), "99" == c && (a = "other continental or international national protected areas <br/>"), "21" == c && (a = "description: Community life: religious, sacred areas, associative locations, recreation<br/>"), "22" == c && (a = "description: Cultural assets (cultural assets and - efforts, districts historical heritage, monument conservation)<br/>"), "23" == c && (a = "description: Protection in favor of economics<br/>"), "24" == c && (a = "description: Political protection<br/>"), "25" == c && (a = "description: Military areas (military refuges, test area)<br/>"), "26" == c && (a = "description: Historic: for colonial-stuff and protectorates.<br/>"), "29" == c && (a = "description: other social protected areas<br/>"), "11" == c && (a = "description: soil: crop yield, erosion protection, ...<br/>"), "12" == c && (a = "description: water: water protection area, fresh water, drinking water, springs, ...<br/>"), "13" == c && (a = 'description: climate and -air: gasper supply/cold air, ...for emission-, immission control in OSM existent, see "Low Emission Zone" (LEZ)<br/>'), "14" == c && (a = "description: species: no fishing, protected for fishery, protected for hunting, plants, ...<br/>"), "15" == c && (a = "description: location condition: floodwater retention area, protection forest, grazing land, ...<br/>"), "16" == c && (a = 'description: longtime hazard area: contamination, earth-moving area, "problem sites" ...<br/>'), "19" == c && (a = "description: other national resources protected areas<br/>"));
  return a;
},
    fnContentLanduse = function (b) {
  var a = "";
  "quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");
  "open_stable" == b["animal_keeping:type"] && (a += "open stable<br/>");
  "field_shelter" == b["animal_keeping:type"] && (a += "field shelter<br/>");
  "paddock" == b["animal_keeping:type"] && (a += "paddock<br/>");
  b.animal_keeping && (a += "animals: horses<br/>");
  return a;
},
    fnMessstation = function (b) {
  var a = "";
  "yes" == b["monitoring:water_level"] && (a += "water level<br/>");
  "yes" == b["monitoring:seismic_activity"] && (a += "seismic activity<br/>");
  "yes" == b["monitoring:tide_gauge"] && (a += "tide gauge<br/>");
  "yes" == b["monitoring:weather"] && (a += "weather<br/>");
  "yes" == b["monitoring:air_quality"] && (a += "air quality<br/>");
  return a;
},
    fnContentRoute = function (b) {
  var a = "";
  b.route && ("yes" == b.roundtrip && (a += "roundtrip<br/>"), b.length && (a += "length: " + b.length + "<br/>"), b.distance && (a += "distance: " + b.distance + "<br/>"), b.symbol && (a += "symbol: " + b.symbol + "<br/>"));
  return a;
},
    fnContentPetrol = function (b) {
  var a = "";
  "fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "e85<br/>"), "yes" == b["fuel:e10"] && (a += "e10<br/>"), "yes" == b["fuel:lpg"] && (a += "lpg<br/>"), "yes" == b["fuel:cng"] && (a += "cng<br/>"), "diesel" == b.fuel && (a += "diesel<br/>"), "lpg" == b.fuel && (a += "lpg<br/>"), "yes" == b["fuel:octane_95"] && (a += "octane 95<br/>"), "yes" == b["fuel:octane_98"] && (a += "octane 98<br/>"), "yes" == b["fuel:octane_100"] && (a += "octane 100<br/>"), "yes" == b["fuel:octane_102"] && (a += "octane 102<br/>"), "yes" == b["fuel:diesel"] && (a += "diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "charging station / loading station<br/>"));
  return a;
},
    fnContentHistoric = function (b) {
  var a = "";
  if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {
    case "megalith":
      a += "megalith<br/>";
      break;

    case "bigstone":
      a += "bigstone<br/>";
      break;

    case "tumulus":
      a += "tumulus<br/>";
      break;

    case "fortification":
      a += "fortification<br/>";
      break;

    default:
      a += "unknown<br/>";
  }
  return a;
},
    fnContentBarriers = function (b, a) {
  var c = "";
  if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "material: " + translate(b.material) + "<br/>");
  return c;
},
    fnContentTourism = function (b) {
  var a = "";

  if ("camp_site" == b.tourism) {
    "yes" == b.dog && (a += "dogs allowed<br/>");
    "no" == b.dog && (a += "dogs forbidden<br/>");
    b.stars && (a += b.stars + "stars<br/>");
    b.caravans && (a += "caravan sites<br/>");
    if ("yes" == b.openfire || "yes" == b.fireplace) a += "Thers is an openfire. <br/>";
    "yes" == b.washing_machine && (a += "washing machine<br/>");
    "yes" == b.dryer && (a += "dryer<br/>");
    "yes" == b.group_only && (a += "use for groups only<br/>");
    "reception" == b.camp_site && (a += "reception available<br/>");
  }

  "information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "topo</br>"), "street" == b.map_type && (a += "street</br>"), "scheme" == b.map_type && (a += "scheme</br>"), "toposcope" == b.map_type && (a += "toposcope</br>"));
  "information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "map of site</br>"), "city" == b.map_size && (a += "city map</br>"), "region" == b.map_size && (a += "map of region</br>"));
  "geology" == b.board_type && (a += "geologic information<br/>");
  "history" == b.board_type && (a += "historic information<br/>");
  "nature" == b.board_type && (a += "information about nature<br/>");
  "notice" == b.board_type && (a += "general information<br/>");
  "plants" == b.board_type && (a += "information about plants<br/>");
  "wildlife" == b.board_type && (a += "information about wildlife<br/>");
  return a;
},
    fnContentAmenity = function (b) {
  var a = "";
  "boat_sharing" == b.amenity && (a += b.boattype + "<br/>");
  "embassy" == b.amenity && (a += b.country + "<br/>");
  if (b.vending) switch (b.vending) {
    case "admission_tickets":
      a += "tickets<br/>";
      break;

    case "animal_feed":
      a += "animal feed<br/>";
      break;

    case "books":
      a += "books<br/>";
      break;

    case "candles":
      a += "candles<br/>";
      break;

    case "cigarettes":
      a += "cigarettes<br/>";
      break;

    case "condoms":
      a += "condoms<br/>";
      break;

    case "drinks":
      a += "drinks<br/>";
      break;

    case "first_aid":
      a += "first aid articles<br/>";
      break;

    case "fishing_tackle":
      a += "fishing tackle<br/>";
      break;

    case "flowers":
      a += "flowers<br/>";
      break;

    case "ice_cream":
      a += "ice cream<br/>";
      break;

    case "laundry_detergent":
      a += "laundry detergent<br/>";
      break;

    case "newspapers":
      a += "newspapers<br/>";
      break;

    case "SIM_cards":
      a += "sIM-cards<br/>";
      break;

    case "sweets":
      a += "sweets<br/>";
      break;

    case "parcel_pickup":
      a += "parcel pickup<br/>";
      break;

    case "ice_cubes":
      a += "ice cubes<br/>";
      break;

    case "public_transport_tickets":
      a += "public transport tickets<br/>";
      break;

    case "parking_ticket":
      a += "parking tickets<br/>";
      break;

    case "sex_toys":
      a += "sex toys<br/>";
      break;

    case "stamps":
      a += "stamps<br/>";
      break;

    case "toll":
      a += "toll<br/>";
      break;

    case "umbrellas":
      a += "umbrellas<br/>";
      break;

    default:
      a += "content unknown<br/>";
  }
  "post_box" == b.amenity && (b.collection_times && (a += "collection times: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "accessible by car. <br/>"));
  return a;
},
    fnContentStorage = function (b) {
  var a = "";

  if ("storage_tank" == b.man_made) {
    if (b.content) {
      var c = b.content;

      switch (c) {
        case "fuel":
          c = "fuel";
          break;

        case "oil":
          c = "oil";
          break;

        case "gas":
          c = "gas";
          break;

        case "slurry":
          c = "slurry";
          break;

        case "cement":
          c = "cement";
          break;

        case "water":
          c = "water";
          break;

        case "manure":
          c = "manure";
          break;

        case "silage":
          c = "silage";
      }

      a += "content: " + c + "<br/>";
    }

    if (b.contents) {
      c = b.contents;

      switch (c) {
        case "fuel":
          c = "fuel";
          break;

        case "oil":
          c = "oil";
          break;

        case "gas":
          c = "gas";
          break;

        case "slurry":
          c = "slurry";
          break;

        case "cement":
          c = "cement";
          break;

        case "water":
          c = "water";
          break;

        case "manure":
          c = "manure";
          break;

        case "silage":
          c = "silage";
      }

      a += "content: " + c + "<br/>";
    }
  }

  b.storage && ("gas" == b.storage && (a += "content: gas<br/>"), "oil" == b.storage && (a += "content: oil<br/>"));
  return a;
},
    fnContentInformationCity = function (b) {
  var a = "";
  b["name:de"] && (a += "german name: " + b["name:de"] + "<br/>");
  if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
    var c = b.population.length % 3,
        d = 0 < c ? b.population.substring(0, c) : "";

    for (i = 0; i < Math.floor(b.population.length / 3); i++) d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));

    a += "population: " + d + "<br/>";
  } else a += "population " + b.population + "<br/>";
  1E4 >= b.population && (a += "population: " + b.population + "<br/>");
  return a;
},
    fnContentEmergency = function (b) {
  var a = "";
  b.lifeboat && ("inshore" == b.lifeboat ? a += "application: inshore<br/>" : "offshore" == b.lifeboat && (a += "application: offshore<br/>"));
  b["lifeboat:class"] && (a += "type of boat: " + b["lifeboat:class"] + "<br/>");

  if (b["siren:type"]) {
    var c = b["siren:type"];

    switch (c) {
      case "mechanical":
        c = "mechanical";
        break;

      case "electronic":
        c = "electronic";
        break;

      case "pneumatic":
        c = "pneumatic";
        break;

      case "electromechanic":
        c = "electromechanic";
    }

    a += "Typ: " + c + "<br/>";
  }

  if (b["siren:purpose"]) {
    c = b["siren:purpose"];

    switch (c) {
      case "air_raid":
        c = "air raid";
        break;

      case "tornado":
        c = "tornado";
        break;

      case "storm":
        c = "storm";
        break;

      case "civil_defense":
        c = "civil defence";
        break;

      case "fire":
        c = "fire";
    }

    a += "use: " + c + "<br/>";
  }

  b["siren:model"] && (a += "model: " + b["siren:model"] + "<br/>");
  b["siren:range"] && (a += "range of siren: " + b["siren:range"] + "<br/>");
  return a;
},
    fnContentCuisine = function (b) {
  var a = "";

  if (b.cuisine) {
    var c = "",
        a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "specialties: " : a + "cuisine: ";
    "arabic" == b.cuisine && (c += "arabic<br/>");
    "italian" == b.cuisine && (c += " italian<br/>");
    "international" == b.cuisine && (c += " international<br/>");
    "regional" == b.cuisine && (c += " regional<br/>");
    "chinese" == b.cuisine && (c += " chinese<br/>");
    "greek" == b.cuisine && (c += " greek<br/>");
    "african" == b.cuisine && (c += " african<br/>");
    "german" == b.cuisine && (c += " german<br/>");
    "mexican" == b.cuisine && (c += " mexican<br/>");
    "french" == b.cuisine && (c += " french<br/>");
    "indian" == b.cuisine && (c += " indian<br/>");
    "iranian" == b.cuisine && (c += " iranian<br/>");
    "lebanese" == b.cuisine && (c += " lebanese<br/>");
    "thai" == b.cuisine && (c += " thai<br/>");
    "balkan" == b.cuisine && (c += " balkan<br/>");
    "turkish" == b.cuisine && (c += " turkish<br/>");
    "bavarian" == b.cuisine && (c += " bavarian<br/>");
    "czech" == b.cuisine && (c += " czech<br/>");
    "portuguese" == b.cuisine && (c += " portuguese<br/>");
    "spanish" == b.cuisine && (c += " spanish<br/>");
    "japanese" == b.cuisine && (c += " japanese<br/>");
    "fish" == b.cuisine && (c += " fish<br/>");
    "brazilian" == b.cuisine && (c += " brazilian<br/>");
    "asian" == b.cuisine && (c += " asian<br/>");
    "mediterranean" == b.cuisine && (c += "mediterranean<br/>");
    "seafood" == b.cuisine && (c += " seafood<br/>");
    "ice_cream" == b.cuisine && (c += " ice cream<br/>");
    "burger" == b.cuisine && (c += " burger<br/>");
    "frozen_yogurt" == b.cuisine && (c += " frozen yogurt<br/>");
    "" == c && (c = b.cuisine + "<br/>");
    a += c;
  }

  return a;
},
    fnContentShipping = function (b) {
  var a = "";
  b.harbour = "yes";
  "yes" == b["access:tide"] && (a += "Access restricted by tide</br>");
  "yes" == b["access:swell"] && (a += "access restricted by swell</br>");
  "yes" == b["access:ice"] && (a += "access restricted by ice</br>");
  b.vhf_channel && (a += "UKW-Channel: " + b.vhf_channel + "</br>");
  b.mmsi && (a += "MMSI-Number: " + b.mmsi + "</br>");
  b["harbour:information"] && (a += "information :" + b["harbour:information"] + "</br>");
  "yes" == b.motorboat && (a += "motorboat allowed</br>");
  "no" == b.motorboat && (a += "motorboat prohibited </br>");
  b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");
  "yes" == b.intermittent && (a += "river intermittent dried out</br>");
  "yes" == b.tidal && (a += "tidal influence the flow</br>");
  b.draft && (a += " driving depth of water: " + b.draft + " m</br>");
  if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "operating: by hand<br/>"), "car" == b.operating && (a += "operating: by car, boat trailer<br/>"), "cable_winch" == b.operating && (a += "operating: with cable winch<br/>"), "travellift" == b.operating && (a += "operating: by travellift<br/>"), "crane" == b.man_made && (a += "by crane<br/>", b["crane:maxload"] && (a += "maxload: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "maximum permissible draught: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "maximum permissible length of a ship: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "accessible by vehicle<br/>");
  a += fnWreckInfo(b);
  if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) fahrzeit = b.duration, "" != fahrzeit && "undefined" != fahrzeit && null != fahrzeit && (a += "duration in hours : " + fahrzeit + "<br/>"), "yes" == b.motorcar && (a += "motorcars allowed<br/>"), "no" == b.motorcar && (a += "motorcars prohibited<br/>"), "no" == b.motor_vehicle && (a += "motor vehicles prohibited<br/>"), "yes" == b.motor_vehicle && (a += "motor vehicles allowed<br/>"), "yes" == b.vehicle && (a += "vehicles allowed<br/>"), "no" == b.vehicle && (a += "no vehicles<br/>"), "no" == b.bicycle && (a += "no bicycles<br/>"), "no" == b.bicycle && (a += "bicycles allowed<br/>"), "yes" == b.hgv && (a += "hgv allowed<br/>"), "no" == b.hgv && (a += "hgv prohibited<br/>"), "yes" == b.foot && (a += "pedestrian allowed<br/>"), "no" == b.foot && (a += "pedestrian prohibited <br/>"), "yes" == b.bicycle && (a += "cyclist allowed <br/>"), "no" == b.bicycle && (a += "cyclist prohibited <br/>"), "yes" == b["ferry:cable"] && (a += "cable ferry<br/>");

  if (b["seamark:light:1:colour"]) {
    var c = b["seamark:light:1:colour"];

    switch (c) {
      case "white":
        c = "white";
        break;

      case "red":
        c = "red";
        break;

      case "green":
        c = "green";
        break;

      case "blue":
        c = "blue";
        break;

      case "yellow":
        c = "yellow";
        break;

      case "amber":
        c = "amber";
    }

    a += "colour of light: " + c + "<br/>";
  }

  "lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "light character: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "period: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "height: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "range: " + b["seamark:light:1:range"] + " sm<br/>"));

  if (b["seamark:light:colour"]) {
    c = b["seamark:light:colour"];

    switch (c) {
      case "white":
        c = "white";
        break;

      case "red":
        c = "red";
        break;

      case "green":
        c = "green";
        break;

      case "blue":
        c = "blue";
        break;

      case "yellow":
        c = "yellow";
        break;

      case "amber":
        c = "amber";
    }

    a += "colour of light: " + c + "<br/>";
  }

  "lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "light character: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "height: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "range: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "period: " + b["seamark:light:period"] + "<br/>"));
  return a;
},
    fnContentHydrants = function (b) {
  var a = "";

  if ("fire_hydrant" == b.emergency) {
    var c = b["fire_hydrant:count"];
    "undefined" != c && null != c && "" != c && (a += "Number: " + c + "<br/>");
    c = b["fire_hydrant:diameter"];
    "undefined" != c && null != c && "" != c && (a += "Pipe diameter: " + c + " mm<br/>");
    c = b["fire_hydrant:pressure"];
    "undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Pressure in bar / Suction: Suction<br/>" : a + ("Pressure in bar / Suction: " + c + "<br/>"));
    c = b["fire_hydrant:position"];
    "undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Lane<br/>" : "parking_lot" == c ? a += "Position: Parking Lot<br/>" : "sidewalk" == c ? a += "Position: Sidewalk<br/>" : "green" == c && (a += "Position: Green<br/>"));
    c = b.water_volume;
    "undefined" != c && null != c && "" != c && (a += "Volume: " + c + "<br/>");
    c = b["fire_hydrant:awwa_class"];
    "undefined" != c && null != c && "" != c ? a += "AWWA Class: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Flow rate: " + c + "<br/>"));
    c = b.water_source;
    "undefined" != c && null != c && "" != c && "main" != c && (a += "Water source: " + c + "<br/>");
    c = b["couplings:type"];
    "undefined" != c && null != c && "" != c && (a += "Couplings type: " + c + "<br/>");
    c = b["couplings:diameter"];
    "undefined" != c && null != c && "" != c && (a += "Couplings diameter: " + c + "<br/>");
    c = b["pillar:type"];
    "dry_barrel" === c && (a += "Pillar type: " + c + "<br/>");
    "fire_hydrant" === b["disused:emergency"] && (a += "Currently disused");
    "" == a && (a = "No details available.");
  }

  return a;
},
    fnContentStreetsTraffic = function (b) {
  var a = "";
  "yes" == b["red_turn:right"] && (a += "red turn: allowed to turn to the right<br/>");
  "no" == b["red_turn:right"] && (a += "red turn: prohibited to turn to the right<br/>");
  b.bridge && (b.height && (a += "height: " + b.height + " m<br/>"), b.length && (a += "length: " + b.length + " m<br/>"), b.bridge_ref && (a += "bridge ref: " + b.bridge_ref + "<br/>"), b.start_date && (a += "start date: " + b.start_date + "</br>;"), b.maxweight && (a += "maxweight: " + b.maxweight + " t</br>"));
  b.highway && "yes" == b.toll && (a += "toll highway<br/>");
  "yes" == b["toll:hgv"] && (a += "HGV toll<br/>");

  if (b.surface) {
    var c = b.surface,
        a = a + "surface: ";

    switch (c) {
      case "grass":
        a += "grass<br/>";
        break;

      case "paved":
        a += "paved<br/>";
        break;

      case "asphalt":
        a += "asphalt<br/>";
        break;

      case "cobblestone":
        a += "cobblestone<br/>";
        break;

      case "sett":
        a += "sett<br/>";
        break;

      case "concrete":
        a += "concrete<br/>";
        break;

      case "unpaved":
        a += "unpaved<br/>";
        break;

      case "paving_stones":
        a += "paving stones<br/>";
        break;

      case "compacted":
        a += "compacted<br/>";
        break;

      case "dirt":
        a += "dirt<br/>";
        break;

      case "fine_gravel":
        a += "fine gravel<br/>";
        break;

      case "grass_paver":
        a += "grass paver<br/>";
        break;

      case "gravel":
        a += "gravel<br/>";
        break;

      case "earth":
        a += "earth<br/>";
        break;

      case "ground":
        a += "ground<br/>";
        break;

      case "metal":
        a += "metal<br/>";
        break;

      case "mud":
        a += "mud<br/>";
        break;

      case "sand":
        a += "sand<br/>";
        break;

      case "wood":
        a += "wood<br/>";
        break;

      case "tartan":
        a += "tartan<br/>";
        break;

      case "artificial_turf":
        a += "artificial turf<br/>";
        break;

      case "clay":
        a += "clay<br/>";
        break;

      default:
        a += "unknown<br/>";
    }
  }

  "grade1" == b.tracktype && (a += "path surface: Solid. Usually a paved or heavily compacted hardcore surface.<br/>");
  "grade2" == b.tracktype && (a += "path surface: Mostly solid. Usually an unpaved track with surface of gravel mixed with a varying amount of sand, silt, and clay.<br/>");
  "grade3" == b.tracktype && (a += "path surface: Even mixture of hard and soft materials. Almost always an unpaved track.<br/>");
  "grade4" == b.tracktype && (a += "path surface: Mostly soft. Almost always an unpaved track prominently with soil/sand/grass, but with some hard materials, or compressed materials mixed in.<br/>");
  "grade5" == b.tracktype && (a += "path surface: Soft. Almost always an unpaved track lacking hard materials, uncompacted, with surface of soil/sand/grass.<br/>");
  "yes" == b.motorcycle && (a += "<br/>motorcyle allowed.<br/>");
  "no" == b.motorcycle && (a += "<br/>motorcycles prohibited.<br/>");
  "excellent" == b.trail_visibility && (a += "trail visibility: Unambiguous path or markers everywhere<br/>");
  "good" == b.trail_visibility && (a += "trail visibility: Next marker always visible, but sometimes has to be searched for.<br/>");
  "intermediate" == b.trail_visibility && (a += "trail visibility: Track mostly visible<br/>");
  "bad" == b.trail_visibility && (a += "trail visibility: Path sometimes invisible, route partly pathless<br/>");
  "horrible" == b.trail_visibility && (a += "trail visibility: Often pathless<br/>");
  "no" == b.trail_visibility && (a += "trail visibility: Mostly pathless<br/>");
  "hiking" == b.sac_scale && (a += "trail: Trail well cleared. (SAC Scale: T1 (yellow))</br>");
  "mountain_hiking" == b.sac_scale && (a += "trail: Trail with continuous line and balanced ascent (SAC Scale: T2 (red))</br>");
  "demanding_mountain_hiking" == b.sac_scale && (a += "trail: exposed sites may be secured with ropes or chains, possible need to use hands for balance (SAC Scale: T3 (red))</br>");
  "alphine_hiking" == b.sac_scale && (a += "trail: sometimes need for hand use to get ahead (SAC Scale: T4 (blue))</br>");
  "demanding_alphine_hiking" == b.sac_scale && (a += "trail: single plainly climbing up to second grade (SAC Scale: T5 (blue))</br>");
  "difficult_alpine_hiking" == b.sac_scale && (a += "trail: climbing up to second grade (SAC Scale: T6 (blue))</br>");
  b["mtb:name"] && (a += "cycleway :" + b["mtb:name"] + "</br>");
  "0" == b["mtb:scale"] && (a += "Mountainbikeroute: Very easy way - Gravel or packed earth. No particular difficulties. Mostly forest and meadow paths (highway=path). Sections with steps, rocks, or roots are not expected. Wide curves, easy to moderate slope. No special skills are needed to ride this. Easy to ride uphill.</br>Surface: solid and handy</br>Obstacles: no obstacles</br>Gradient: mild to moderate</br>Bends: wide</br>Driving skills: no special driving skills required</br>");
  "1" == b["mtb:scale"] && (a += "Mountainbikeroute: Smaller obstacles like roots and small stones. Erosion damage may increase difficulty. Soil may be loose in places. Tight turns, but no hairpin turns. Riding requires care and attention, but no special skill. Obstacles can be ridden over. Difficult to ride uphill.</br>Surface: loose surface possible, small roots and stones</br>Obstacles: small obstacles, water gutter, erosion damage</br>Gradient: < 40%</br>Bends: wide</br>Driving skills: basic driving skills required, obstacles can be passed over</br>");
  "2" == b["mtb:scale"] && (a += "Mountainbikeroute: Obstacles such as large rocks and stones. Soil is often loose.  Steps are expected. Wider hairpin turns, steepness of up to 70%. Requires some advanced riding skills. Only very skilled riders can go uphill on this.</br>Surface: surface usually not compacted, larger roots and stones.</br>Obstacles: plain steps and stairs</br>Gradient: < 70%</br>Bends: easy hairpins</br>Driving skills: advanced driving skills required</br>");
  "3" == b["mtb:scale"] && (a += "Mountainbikeroute: Many sections with large obstacles such as boulders and large roots. Many hairpin and off-balance turns. Slippery surface and talus sections may be found. The surface may be very slippery. Constant concentration and very good skills needed. Nearly impossible to ride uphill.</br>Surface: many large roots / rocks or slippery ground, loose scree</br>Obstacles: drags, hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins</br>Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins</br>");
  "4" == b["mtb:scale"] && (a += "Mountainbikeroute: Very steep and difficult, with sections having large boulders and roots. Frequent loose debris. Very steep sections with very tight hairpin turns and high steps that will cause the chainring to hit the ground. Some trials techniques will be necessary. Nearly impossible to ride uphill.</br>Surface: many large roots / rocks or slippery ground, loose scree</br>Obstacles: drags, hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins</br>Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins</br>");
  "5" == b["mtb:scale"] && (a += "Mountainbikeroute: Very steep and difficult with big boulder fields and debris, and landslides. Speed must be carried for counter-ascents. If at all only short passages are available for accelerating and braking. Fallen trees may make very steep passages even more difficult. Very few Mountainbikers can actually ride at this level. Most will have to push.</br>Surface: counter-ascents / rocks or slippery ground, loose scree / path is rather a Alpine hiking (>T4) path</br>Obstacles: drags, combinations of hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins with obstacles</br>Driving skills: excellent bike control with special trial skills required, moving the front and rear wheel is limited</br>");
  "6" == b["mtb:scale"] && (a += "Mountainbikeroute: Classify ways with 6 that are not rideable at all for a mtbiker. E.g. Chains or stemples (metal rungs) on a via ferrata or simply unsecured alpine pathes that are not even partly rideable for the very best mtbikers (using trial techniques). Steepness is often >45\u00b0. If used for single points, then this highlights exceptionally difficult spots. Often spotting is impossible and falling may be lethal.</br>Surface: Path is rather a Alpine hiking (T5 or T6) path or bare rock without visible path.</br>Obstacles: Steps over 2m, rock faces,...</br>Gradient: >100%</br>Bends: no bends can be distinguished as such.</br>Driving skills: only the very best trial specialists or vertriders will try to ride these spots. Walking the place first to find a way to clear is needed.</br>");
  "10" == b.maxspeed && (a += 'traffic-calmed sector: maxspeed 10 Km/h and "right over left"</br>');
  "30" == b.maxspeed && (a += 'traffic-calmed sector: "right over left" and maxspeed 30 Km/h</br>');
  "50" == b.maxspeed && (a += "maxspeed 50 Km/h</br>");
  "70" == b.maxspeed && (a += "maxspeed 50 Km/h</br>");
  "80" == b.maxspeed && (a += "maxspeed 80 Km/h</br>");
  "100" == b.maxspeed && (a += "maxspeed  100 Km/h</br>");
  "no" == b.overtaking && (a += "No overtaking!</br>");
  "yes" == b.noexit && (a += "noexit</br>");
  "yes" == b.oneway && (a += "oneway</br>");
  "designated" == b.priority_road && (a += "priority road designated</br>");
  "end" == b.priority_road && (a += "priority road ends</br>");
  "emergency_bay" == b.highway && (a += "emergency bay</br>");
  "yes" == b.traffic_calming && (a += "traffic calming</br>");
  "bump" == b.traffic_calming && (a += "bump</br>");
  "chicane" == b.traffic_calming && (a += "chicane</br>");
  "choker" == b.traffic_calming && (a += "choker</br>");
  "cushion" == b.traffic_calming && (a += "cushion</br>");
  "hump" == b.traffic_calming && (a += "hump</br>");
  "island" == b.traffic_calming && (a += "island</br>");
  "rumble_strip" == b.traffic_calming && (a += "rumble strip</br>");
  "table" == b.traffic_calming && (a += "table</br>");

  if ("parking" == b.amenity && ("yes" == b.fee && (a += "fee required<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
    var d = "unkown";
    "yes" != c && (d = c);
    a += "ladies parking spaces (numbers: " + d + ") <br/>";
  }

  b.park_ride && ("bus" == b.park_ride && (a += "bus connection<br/>"), "tram" == b.park_ride && (a += "tram connection<br/>"), "unknown" == b.park_ride && (a += "park ride unkown<br/>"));
  b["railway:position"] && (a += "railway<br/>position: " + b["railway:position"] + "<br/>");
  b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");
  return a;
},
    fnContentSports = function (b) {
  var a = "";
  "9pin" == b.sport && (a += "possible sport : 9pin<br/>");
  "10pin" == b.sport && (a += "possible sport : 10pin<br/>");
  "american_football" == b.sport && (a += "possible sport : american football<br/>");
  "aikido" == b.sport && (a += "possible sport : aikido<br/>");
  "archery" == b.sport && (a += "possible sport : archery<br/>");
  "athletics" == b.sport && (a += "possible sport : athletics<br/>");
  "australian_football" == b.sport && (a += "possible sport : australian football<br/>");
  "base" == b.sport && (a += "possible sport : base<br/>");
  "badminton" == b.sport && (a += "possible sport : badminton<br/>");
  "baseball" == b.sport && (a += "possible sport : baseball<br/>");
  "basketball" == b.sport && (a += "possible sport : basketball<br/>");
  "beachvolleyball" == b.sport && (a += "possible sport : beachvolleyball<br/>");
  "bmx" == b.sport && (a += "possible sport : bmx<br/>");
  "boules" == b.sport && (a += "possible sport : boules<br/>");
  "boule" == b.sport && (a += "possible sport : boule<br/>");
  "bowls" == b.sport && (a += "possible sport : bowls<br/>");
  "boxing" == b.sport && (a += "possible sport : boxing<br/>");
  "canadian_football" == b.sport && (a += "possible sport : canadian football<br/>");
  "canoe" == b.sport && (a += "possible sport : canoe<br/>");
  "chess" == b.sport && (a += "possible sport : chess<br/>");
  "cliff_diving" == b.sport && (a += "possible sport : cliff diving<br/>");
  "climbing" == b.sport && (a += "possible sport : climbing<br/>");
  "climbing_adventure" == b.sport && (a += "possible sport : adventure climbing<br/>");
  "cricket" == b.sport && (a += "possible sport : cricket<br/>");
  "cricket_nets" == b.sport && (a += "possible sport : cricket nets<br/>");
  "croquet" == b.sport && (a += "possible sport : croquet<br/>");
  "curling" == b.sport && (a += "possible sport : curling<br/>");
  "cycling" == b.sport && (a += "possible sport : cycling<br/>");
  if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";
  "dog_racing" == b.sport && (a += "possible sport : dog racing<br/>");
  "fencing" == b.sport && (a += "possible sport : fencing<br/>");
  "equestrian" == b.sport && (a += "possible sport : equestrian<br/>");
  "football" == b.sport && (a += "possible sport: american football<br/>");
  "free_flying" == b.sport && (a += "possible sport: free flying<br/>");
  "gaelic_games" == b.sport && (a += "possible sport: gaelic games<br/>");
  "golf" == b.sport && (a += "possible sport: golf<br/>");
  "gymnastics" == b.sport && (a += "possible sport: gymnastik<br/>");
  "hockey" == b.sport && (a += "possible sport: hockey<br/>");
  "horseshoes" == b.sport && (a += "possible sport: horseshoes<br/>");
  "horse_racing" == b.sport && (a += "possible sport: horse racing<br/>");
  "ice_stock" == b.sport && (a += "possible sport: ice stock<br/>");
  "judo" == b.sport && (a += "possible sport: judo<br/>");
  "karting" == b.sport && (a += "possible sport: karting<br/>");
  "kitesurfing" == b.sport && (a += "possible sport: kitesurfing<br/>");
  "korfball" == b.sport && (a += "possible sport: korfball<br/>");
  "motor" == b.sport && (a += "possible sport: motor<br/>");
  "multi" == b.sport && (a += "possible sport: multi<br/>");
  "obstacle_course" == b.sport && (a += "possible sport: obstacle course<br/>");
  "orienteering" == b.sport && (a += "possible sport: orienteering<br/>");
  "paddle_tennis" == b.sport && (a += "possible sport: paddle-tennis<br/>");
  "paragliding" == b.sport && (a += "possible sport: paragliding<br/>");
  "Pelota" == b.sport && (a += "possible sport: Pelota<br/>");
  "rasquet" == b.sport && (a += "possible sport: racquet<br/>");
  "rowing" == b.sport && (a += "possible sport: rowing<br/>");
  "rugby_league" == b.sport && (a += "possible sport: rugby league<br/>");
  "rugby_union" == b.sport && (a += "possible sport: rugby union<br/>");
  "running" == b.sport && (a += "possible sport: running<br/>");
  "scuba_diving" == b.sport && (a += "possible sport: scuba diving<br/>");
  "shooting" == b.sport && (a += "possible sport: shooting<br/>");
  "skating" == b.sport && (a += "possible sport: skating<br/>");
  "skateboard" == b.sport && (a += "possible sport: skateboard<br/>");
  "skiing" == b.sport && (a += "possible sport: skiing<br/>");
  "soccer" == b.sport && (a += "possible sport: soccer<br/>");
  "surfing" == b.sport && (a += "possible sport: surfing<br/>");
  "swimming" == b.sport && (a += "possible sport: swimming<br/>");
  "table_tennis" == b.sport && (a += "possible sport: table tennis<br/>");
  "taekwondo" == b.sport && (a += "possible sport: taekwondo<br/>");
  "team_handball" == b.sport && (a += "possible sport: team handball<br/>");
  "tennis" == b.sport && (a += "possible sport: tennis<br/>");
  "toboggan" == b.sport && (a += "possible sport: toboggan<br/>");
  "volleyball" == b.sport && (a += "possible sport: volleyball<br/>");
  "water_ski" == b.sport && (a += "possible sport: water ski<br/>");
  "weightlifting" == b.sport && (a += "possible sport: weightlifting<br/>");
  "wrestling" == b.sport && (a += "possible sport: wrestling<br/>");
  return a;
};
function fnArztInfo(b) {
  var a = "",
      c = "",
      d = b["healthcare:speciality"];
  "" != d && ("general" == d && (c += "general<br/>"), "allergology" == d && (c += "allergology<br/>"), "anaesthetics" == d && (c += "anaesthetics<br/>"), "biochemistry" == d && (c += "biochemistry<br/>"), "biological_haematology" == d && (c += "biological haematology<br/>"), "biology" == d && (c += "biology<br/>"), "cardiology" == d && (c += "cardiology<br/>"), "cardiac_surgery" == d && (c += "cardiac surgery<br/>"), "child_psychiatry" == d && (c += "child psychiatry<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "dental-, oral-, maxillo- and facial-surgery<br/>"), "dermatology" == d && (c += "dermatology<br/>"), "dermatovenereology" == d && (c += "dermatovenereology<br/>"), "diagnostic_radiology" == d && (c += "diagnostic radiology<br/>"), "emergency" == d && (c += "emergency<br/>"), "endocrinology" == d && (c += "endocrinology<br/>"), "gastroenterological_surgery" == d && (c += "gastroenterological surgery<br/>"), "gastroenterology" == d && (c += "gastroenterology<br/>"), "geriatrics" == d && (c += "geriatrics<br/>"), "gynaecology" == d && (c += "gynaecology<br/>"), "haematology" == d && (c += "haematology<br/>"), "hepatology" == d && (c += "hepatology<br/>"), "immunology" == d && (c += "immunology<br/>"), "infectious_diseases" == d && (c += "infectious diseases<br/>"), "intensive" == d && (c += "intensive<br/>"), "internal" == d && (c += "internal<br/>"), "maxillofacial_surgery" == d && (c += "maxillofacial surgery<br/>"), "nephrology" == d && (c += "nephrology<br/>"), "neurology" == d && (c += "neurology<br/>"), "neurophysiology" == d && (c += "neurophysiology<br/>"), "neuropsychiatry" == d && (c += "neuropsychiatry<br/>"), "neurosurgery" == d && (c += "neurosurgery<br/>"), "nuclear" == d && (c += "nuclear<br/>"), "occupational" == d && (c += "occupational <br/>"), "oncology" == d && (c += "oncology<br/>"), "ophthalmology" == d && (c += "ophthalmology<br/>"), "orthopaedics" == d && (c += "orthopaedics<br/>"), "otolaryngology" == d && (c += "otolaryngology<br/>"), "paediatric_surgery" == d && (c += "paediatric surgery<br/>"), "paediatrics" == d && (c += "paediatrics<br/>"), "palliative" == d && (c += "palliative<br/>"), "physiatry" == d && (c += "physiatry<br/>"), "plastic_surgery" == d && (c += "plastic surgery<br/>"), "proctology" == d && (c += "proctology<br/>"), "psychiatry" == d && (c += "psychiatry<br/>"), "pulmonology" == d && (c += "pulmonology<br/>"), "radiology" == d && (c += "radiology<br/>"), "radiotherapy" == d && (c += "radiotherapy<br/>"), "rheumatology" == d && (c += "rheumatology<br/>"), "stomatology" == d && (c += "stomatology<br/>"), "surgery" == d && (c += "surgery<br/>"), "surgical_oncology" == d && (c += "surgical oncology<br/>"), "thoracic_surgery" == d && (c += "thoracic surgery<br/>"), "transplant" == d && (c += "transplant<br/>"), "trauma" == d && (c += "trauma<br/>"), "tropical" == d && (c += "tropical<br/>"), "urology" == d && (c += "urology<br/>"), "vascular_surgery" == d && (c += "vascular surgery<br/>"), "venereology" == d && (c += "venereology<br/>"), "acupuncture" == d && (c += "acupuncture<br/>"), "naturopathy" == d && (c += "naturopathy<br/>"), "chiropractic" == d && (c += "chiropractic <br/>"), "homeopathy" == d && (c += "homeopathy<br/>"), "osteopathy" == d && (c += "osteopathy<br/>"));
  "" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "family medicine<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "emergency medicine<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "anaesthesiology<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "dermatology<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "ear, nose, throat (ENT specialist)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "occupational medicine<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "internal medicine<br/>"), "yes" == b["health_specialty:neurology"] && (c += "neurology<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "ophthalmology<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "palliative medicine<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "psychiatry<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "gynaecology<br/>"), "yes" == b["health_specialty:urology"] && (c += "urology<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "pain medicine<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "environmental medicine<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "intensive care medicin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "paediatrics<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "physiatry<br/>"), "yes" == b["health_specialty:radiology"] && (c += "radiology<br/>"), "yes" == b["health_specialty:general"] && (c += "general<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "occupational therapy<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "pulmonology<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "acupuncture<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "orthopaedics<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "chiropractic<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "sports medicine<br/>"));
  "" != c && (a = a + "subjects: " + ('<div class="c4g_open_text">' + c + "</div>"));
  return a;
}
function fnKraftwerkInfo(b) {
  var a = "";

  if (b["generator:method"]) {
    a += "method of generation: ";

    switch (b["generator:method"]) {
      case "combustion":
        a += "combustion";
        break;

      case "thermal":
        a += "thermal";
        break;

      case "pumping":
        a += "pumping";
        break;

      case "photovoltaic":
        a += "photovoltaic";
        break;

      case "gasification":
        a += "gasification";
        break;

      case "anaerobic_digestion":
        a += "anaerobic digestion";
        break;

      case "pyrolysis":
        a += "pyrolysis";
        break;

      case "fission":
        a += "fission";
        break;

      case "fusion":
        a += "fusion";
        break;

      default:
        a += "unknown<br/>";
    }

    a += "<br/>";
  }

  if (b.power_source) {
    a += "power source: ";

    switch (b.power_source) {
      case "photovoltaic":
        a += "photovoltaic";
        break;

      default:
        a += "unknown<br/>";
    }

    a += "<br/>";
  }

  b["generator:output:electricity"] && (a += "electricity generation: " + b["generator:output:electricity"] + "<br/>");
  b["generator:output:heat"] && (a += "heat generation: " + b["generator:output:heat"] + "<br/>");
  b["generator:output:cold"] && (a += "cold generation: " + b["generator:output:cold"] + "<br/>");
  b["generator:output"] && (a += "output: " + b["generator:output"] + "<br/>");
  b["generator:output:hot_air"] && (a += "hot-air generation: " + b["generator:output:hot_air"] + "<br/>");
  b["generator:output:cold_water"] && (a += "cold water generation: " + b["generator:output:cold_water"] + "<br/>");
  b["generator:output:cold_air"] && (a += "cold air generation: " + b["generator:output:cold_air"] + "<br/>");
  b["generator:output:compressed_air"] && (a += "compressed air generation: " + b["generator:output:compressed_air"] + "<br/>");
  b["generator:output:steam"] && (a += "steam generation: " + b["generator:output:steam"] + "<br/>");
  b["generator:output:vacuum"] && (a += "vacuum generation: " + b["generator:output:vacuum"] + "<br/>");
  b["generator:output:battery_charging"] && (a += "battery charging: " + b["generator:output:battery_charging"] + "<br/>");
  "PWR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-1" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-2" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-3" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-4" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-5" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-6" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "PHWR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "GCR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "FBR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "RBMK-1000" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "RBMK-1500" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "VVER" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "CANDU" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "CPR-1000" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "EPR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "tokamak" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "stellarator" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "ICF" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "cold-fusion" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "generator method: horizontal axis wind turbine<br/>");
  "wind_turbine" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "generator method: vertical axis wind turbine<br/>");
  "francis_turbine" == b["generator:type"] && (a += "generator type: francis-turbine<br/>");
  "kaplan_turbine" == b["generator:type"] && (a += "generator type: kaplan-turbine<br/>");
  "pelton_turbine" == b["generator:type"] && (a += "generator type: pelton-turbine<br/>");
  "stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "generator method: horizontal axis sea current power station<br/>");
  "stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "generator type: vertical axis sea current power station<br/>");
  "steam_turbine" == b["generator:type"] && (a += "generator type: steam turbine<br/>");
  "heat_pump" == b["generator:type"] && (a += "generator type: heat pump<br/>");
  "solar_thermal_collector" == b["generator:type"] && (a += "generator type: solar thermal collector<br/>");
  "solar_photovoltaic_panel" == b["generator:type"] && (a += "generator type: solar photovoltaic panel<br/>");
  "steam_generator" == b["generator:type"] && (a += "generator type: steam generator<br/>");
  "gas_turbine" == b["generator:type"] && (a += "generator type: gas turbine<br/>");
  "combined_cycle" == b["generator:type"] && (a += "generator type: combined cycle<br/>");
  "reciprocating_engine" == b["generator:type"] && (a += "generator type: reciprocating engine<br/>");
  return a;
}
function fnWertstoffinfo(b) {
  var a = "";
  if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "glass container</br>"), "yes" == b["recycling:shoes"] && (a += "shoe container</br>"), "yes" == b["recycling:cooking_oil"] && (a += "recycling of cooking oil</br>"), "yes" == b["recycling:paper"] && (a += "recycling of paper</br>"), "yes" == b["recycling:engine_oil"] && (a += "recycling of engine oil</br>"), "yes" == b["recycling:clothes"] && (a += "recycling of clothes</br>"), "yes" == b["recycling:car_batteries"] && (a += "recycling of car batteries</br>"), "yes" == b["recycling:cans"] && (a += "recycling of cans</br>"), "yes" == b["recycling:scrap_metal"] && (a += "recycling of scrap metal</br>"), "yes" == b["recycling:plastic"] && (a += "recycling of plastic</br>"), "yes" == b["recycling:batterries"] && (a += "recycling of batterries</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "recycling of plastic bottles</br>"), "yes" == b["recycling:green_waste"] && (a += "recycling of green waste</br>"), "yes" == b["recycling:hardcore"] && (a += "recycling of hardcore</br>");
  return a;
}

var fnContentGeneralInformations = function (b) {
  var a = "";
  b.width && (a += "width: " + b.width + " m<br/>");
  b.height && (a += "height: " + b.height + " m<br/>");
  b.maxwidth && (a += "maxwidth: " + b.maxwidth + " m<br/>");
  b.maxheight && (a += "maxheight: " + b.maxheight + " m<br/>");
  b.maxweight && (a += "maxweight: " + b.maxweight + " t<br/>");
  b.maxspeed && (a += "maxspeed: " + b.maxspeed + " km/h<br/>");
  b.min_age && (a += "minimum age: " + b.min_age + "<br/>");
  b.max_age && (a += "maximum age: " + b.max_age + "<br/>");
  "yes" == b.nudism && (a += "nudism<br/>");
  "yes" == b.ruins && (a += "ruins<br/>");
  b.ele && (a += "height above sea level: " + b.ele + " m<br/>");
  b["xmas:day_date"] && (a += "period from - till: " + b["xmas:day_date"] + "<br/>");
  b["rotor:diameter"] && (a += "diameter of rotor: " + b["rotor:diameter"] + " m<br/>");
  b["xmas:note"] && (a += "information: " + b["xmas:note"] + "<br/>");
  "port" == b["seamark:beacon_lateral:category"] && (a += "port<br/>");
  "starboard" == b["seamark:beacon_lateral:category"] && (a += "starboard<br/>");
  "yes" == b["service:bicycle:retail"] && (a += "retail bicycles<br/>");
  "yes" == b["service:bicycle:repair"] && (a += "repair bicycles<br/>");
  "yes" == b["service:bicycle:rental"] && (a += "rental bicycles<br/>");
  "yes" == b["service:bicycle:pump"] && (a += "use of a pump is possible<br/>");
  "yes" == b["service:bicycle:diy"] && (a += "diy is possible<br/>");
  "yes" == b["service:bicycle:cleaning"] && (a += "cleaning bicycles<br/>");
  "yes" == b["service:bicycle:second_hand"] && (a += "sale of second hand bicycles<br/>");
  "yes" == b["service:bicycle:charging"] && (a += "charging electric bikes is possible<br/>");
  "yes" == b.cafe && (a += "cafe<br/>");
  "yes" == b.breakfast && (a += "breakfast<br/>");
  "yes" == b.snack && (a += "snack<br/>");
  "yes" == b.indoor_seating && (a += "indoor seating<br/>");
  "yes" == b.outdoor_seating && (a += "outdoor seating<br/>");
  "yes" == b.self_service && (a += "self service<br/>");
  "yes" == b.bakehouse && (a += "bakehouse<br/>");
  "yes" == b.pastry_shop && (a += "pastry shop<br/>");
  "yes" == b.fair_trade && (a += "fair trade<br/>");
  "only" == b.fair_trade && (a += "only fair trade<br/>");
  "no" == b.fair_trade && (a += "no fair trade<br/>");
  return a;
},
    fnContentHealthcare = function (b) {
  var a = "";
  if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");
  "yes" == b.dispensing && (a += "pharmacy with dispensing<br/>");
  "abused" == b["social_facility:for"] && (a += "social facility for: abused people<br/>");
  "child" == b["social_facility:for"] && (a += "social facility for: children<br/>");
  "disabled" == b["social_facility:for"] && (a += "social facility for: disabled people<br/>");
  "diseased" == b["social_facility:for"] && (a += "social facility for: diseased people<br/>");
  "drug_addicted" == b["social_facility:for"] && (a += "social facility for: drug addicted people<br/>");
  "homeless" == b["social_facility:for"] && (a += "social facility for: homeless<br/>");
  "juvenile" == b["social_facility:for"] && (a += "social facility for: juvenile and teenager<br/>");
  "mental_health" == b["social_facility:for"] && (a += "social facility for: people with mental health problems<br/>");
  "migrant" == b["social_facility:for"] && (a += "social facility for: migrants<br/>");
  "orphan" == b["social_facility:for"] && (a += "social facility for: orphans<br/>");
  "senior" == b["social_facility:for"] && (a += "social facility for: seniors<br/>");
  "underprivileged" == b["social_facility:for"] && (a += "social facility for: underprivileged people<br/>");
  "unemployed" == b["social_facility:for"] && (a += "social facility for: unemployed<br/>");
  "victim" == b["social_facility:for"] && (a += "social facility for: victims<br/>");
  return a;
};

function fnAdditionalBuildingInfos(b) {
  var a = "";
  b["building:color"] && (a += "building color: " + b["building:color"] + "</br>");
  b["building:height"] && (a += "building height: " + b["building:height"] + " m</br>");
  b["building:level"] && (a += "level: " + b["building:level"] + "</br>");
  b["building:part"] && (a += "building part: " + b["building:part"] + "</br>");
  b["roof:color"] && (a += "roof color: " + b["roof:colour"] + "</br>");
  b["roof:shape"] && (a += "roof shape: " + b["roof:shape"] + "</br>");
  b["roof:height"] && (a += "roof height: " + b["roof:height"] + " m</br>");
  b["roof:material"] && (a += "roof material: " + b["roof:material"] + " </br>");
  b["roof:orientation"] && (a += "roof orientation: " + b["roof:orientation"] + " </br>");
  b["roof:direction"] && (a += "roof direction: " + b["roof:direction"] + " </br>");
  b["building:type"] && (a += "building type: " + b["building:type"] + "</br>");
  return a;
}
function fnSicherheitAdditional(b) {
  var a = "";
  "surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "indoor surveillance"), "outdoor" == b.surveillance && (a += "outdoor surveillance"), "public" == b.surveillance && (a += "public surveillance"), "camera" == b["surveillance:type"] && (a += "type of surveillance: camera"), "guard" == b["surveillance:type"] && (a += "type of surveillance: guard"), "ALPR" == b["surveillance:type"] && (a += "type of surveillance: ALPR"), "town" == b["surveillance:zone"] && (a += "zone of surveillance: town"), "parking" == b["surveillance:zone"] && (a += "zone of surveillance: parking"), "traffic" == b["surveillance:zone"] && (a += "zone of surveillance: traffic"), "shop" == b["surveillance:zone"] && (a += "zone of surveillance: shop"), "bank" == b["surveillance:zone"] && (a += "zone of surveillance: bank"), "building" == b["surveillance:zone"] && (a += "zone of surveillance: building"));
  return a;
}
function fnWreckInfo(b) {
  var a = "";
  "wreck" == b.historic && (b["wreck:date_sunk"] && (a += "sunk: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "depth: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "clearance: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "commissioned: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "gross tonnage: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "length: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "width: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "cargo: timber<br/>" : "coal" == b["wreck:cargo"] ? a + "cargo: coal<br/>" : a + ("cargo: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "visible at low tide: yes<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "visible at low tide: no<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "visible at high tide: yes<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "visible at high tide: no<br/>"), "yes" == b.access && (a += "accessible<br/>"), "no" == b.access && (a += "no access possible<br/>"), "permit_required" == b.access && (a += "permit required for acces<br/>"));
  return a;
}
function fnKlosterAdditional(b) {
  var a = "";
  if (b["monastery:type"]) switch (b["monastery:type"]) {
    case "monastery":
      a += "type: monastery<br/>";
      break;

    case "convent":
      a += "type: convent<br/>";
      break;

    case "canonry":
      a += "type: canonry<br/>";
      break;

    case "commandry":
      a += "type: commandry<br/>";
      break;

    case "hermitage":
      a += "type: hermitage<br/>";
      break;

    default:
      a += "type: unknown<br/>";
  }
  b["community:gender"] && ("male" == b["community:gender"] && (a += "gender: male<br/>"), "female" == b["community:gender"] && (a += "gender: female<br/>"));
  b.religious_rank && ("abbey" == b.religious_rank ? a += "religious rank: abbey<br/>" : "abbey" == b.religious_rank && (a += "religious rank: abbey<br/>"));
  "yes" == b.shrine && (a += "feature: shrine<br/>");
  "yes" == b.sanctuary && (a += "feature: sanctuary<br/>");
  if (b.religion) switch (b.religion) {
    case "animist":
      a += "religion: animist<br/><br/>";
      break;

    case "bahai":
      a += "religion: bahai<br/>";
      break;

    case "buddhist":
      a += "religion: buddhist<br/>";
      break;

    case "christian":
      a += "religion: christian<br/>";
      break;

    case "hindu":
      a += "religion: hindu<br/>";
      break;

    case "IglesiaNiCristo":
      a += "religion: IglesiaNiCristo<br/>";
      break;

    case "jain":
      a += "religion: jain<br/>";
      break;

    case "jewish":
      a += "religion: jewish<br/>";
      break;

    case "multifaith":
      a += "religion: multifaith<br/>";
      break;

    case "muslim":
      a += "religion: muslim<br/>";
      type += "Mosque<br/>";
      break;

    case "pagan":
      a += "religion: pagan<br/>";
      break;

    case "pastafarian":
      a += "religion: pastafarian<br/>";
      break;

    case "scientologist":
      a += "religion: scientologist<br/>";
      break;

    case "shinto":
      a += "religion: shinto<br/>";
      break;

    case "sikh":
      a += "religion: sikh<br/>";
      break;

    case "spiritualist":
      a += "religion: spiritualist<br/>";
      break;

    case "taoist":
      a += "religion: taoist<br/>";
      break;

    case "unitarian":
      a += "religion: unitarian<br/>";
      break;

    case "yazidi":
      a += "religion: yazidi<br/>";
      break;

    case "zoroastrian":
      a += "eligion: zoroastrian<br/>";
      break;

    default:
      a += "religion: unknown<br/>";
  }
  if (b.denomination) switch (b.denomination) {
    case "anglican":
      a += "denomination: Anglican<br/><br/>";
      break;

    case "baptist":
      a += "denomination: Baptist<br/>";
      break;

    case "catholic":
      a += "denomination: Catholic<br/>";
      break;

    case "roman_catholic":
      a += "denomination: Roman Catholic<br/>";
      break;

    case "old_catholic":
      a += "denomination: Old Catholic<br/>";
      break;

    case "greek_catholic":
      a += "denomination: Greek Catholic<br/>";
      break;

    case "evangelical":
      a += "denomination: Evangelical";

    case "jehovahs_witness":
      a += "denomination: Jehovahs Witness<br/>";
      break;

    case "lutheran":
      a += "denomination: Lutheran<br/>";
      break;

    case "mennonite":
      a += "denomination: Mennonite<br/>";
      break;

    case "messianic_jewish":
      a += "denomination: Messianic Jewish<br/>";
      break;

    case "methodist":
      a += "denomination: Methodist<br/>";
      break;

    case "mormon":
      a += "denomination: Mormon<br/>";
      break;

    case "new_apostolic":
      a += "denomination: New Apostolic<br/>";
      break;

    case "orthodox":
      a += "denomination: Orthodox<br/>";
      break;

    case "greek_orthodox":
      a += "denomination: Greek Orthodox<br/>";
      break;

    case "coptic_orthodox":
      a += "denomination: coptic orthodox<br/>";
      break;

    case "pentecostal":
      a += "denomination: pentecostal<br/>";
      break;

    case "presbyterian":
      a += "denomination: Presbyterian<br/>";
      break;

    case "protestant":
      a += "denomination: Protestant<br/>";
      break;

    case "quaker":
      a += "denomination: Quaker<br/>";
      break;

    case "reformed":
      a += "denomination: Reformed<br/>";
      break;

    case "russian_orthodox":
      a += "denomination: Russian-Orthodox<br/>";
      break;

    case "seventh_day_adventist":
      a += "denomination: Seventh Day Adventist<br/>";
      break;

    case "christian_community":
      a += "denomination: Christian Community<br/>";
      break;

    case "adventist":
      a += "denomination: Adventist<br/>";
      break;

    case "alliance":
      a += "denomination: Alliance<br/>";
      break;

    case "assemblies_of_god":
      a += "denomination: Assemblies of God<br/>";
      break;

    case "apostolic":
      a += "denomination: Apostolic<br/>";
      break;

    case "armenian_apostolic":
      a += "denomination: Armenian Apostolic<br/>";
      break;

    case "assyrian":
      a += "denomination: Assyrian<br/>";
      break;

    case "christ_scientist":
      a += "denomination: Christ Scientist<br/>";
      break;

    case "church_of_scotland":
      a += "denomination: Church of Scotland<br/>";
      break;

    case "czechoslovak_hussite":
      a += "denomination: Czechoslovak Hussite<br/>";
      break;

    case "dutch_reformed":
      a += "denomination: Dutch Reformed<br/>";
      break;

    case "exclusive_brethren":
      a += "denomination: Exclusive Brethren<br/>";
      break;

    case "foursquare":
      a += "denomination: Foursquare<br/>";
      break;

    case "kimbanguist":
      a += "denomination: Kimbanguist<br/>";
      break;

    case "living_waters_church":
      a += "denomination: Living Waters Church<br/>";
      break;

    case "mariavite":
      a += "denomination: Mariavite<br/>";
      break;

    case "maronite":
      a += "denomination: Maronite<br/>";
      break;

    case "moravian":
      a += "denomination: Moravian<br/>";
      break;

    case "nazarene":
      a += "denomination: Nazarene<br/>";
      break;

    case "nondenominational":
      a += "denomination: Nondenominational<br/>";
      break;

    case "old_believers":
      a += "denomination: Old Believers<br/>";
      break;

    case "polish_catholic":
      a += "denomination: Polish-Catholic<br/>";
      break;

    case "salvation_army":
      a += "denomination: Salvation Army<br/>";
      break;

    case "santo_daime":
      a += "denomination: Santo Daime<br/>";
      break;

    case "serbian_orthodox":
      a += "denomination: Serbisch-Orthodox<br/>";
      break;

    case "spiritism":
      a += "denomination: Spiritism<br/>";
      break;

    case "united":
      a += "denomination: United<br/>";
      break;

    case "united_church_of_christ":
      a += "denomination: United Church of Christ<br/>";
      break;

    case "united_free_church_of_scotland":
      a += "denomination: United Free Church of Scotland<br/>";
      break;

    case "united_methodist":
      a += "denomination: United Methodist<br/>";
      break;

    case "united_reformed":
      a += "denomination: United Reformed<br/>";
      break;

    case "uniting":
      a += "denomination: Uniting<br/>";
      break;

    case "church_of_sweden":
      a += "denomination: Church of Sweden<br/>";
      break;

    case "mission_covenant_church_of_sweden":
      a += "denomination: Mission Covenant Church Of Sweden<br/>";
      break;

    case "alternative":
      a += "denomination: alternative<br/>";
      break;

    case "ashkenazi":
      a += "denomination: ashkenazi<br/>";
      break;

    case "buchari":
      a += "denomination: buchari<br/>";
      break;

    case "conservative":
      a += "denomination: conservative<br/>";
      break;

    case "egalitarian":
      a += "denomination: egalitarian<br/>";
      break;

    case "hasidic":
      a += "denomination: hasidic<br/>";
      break;

    case "humanistic":
      a += "denomination: humanistic<br/>";
      break;

    case "kabbalah":
      a += "denomination: kabbalah<br/>";
      break;

    case "kabbalistic":
      a += "denomination: kabbalistic<br/>";
      break;

    case "karaite":
      a += "denomination: karaite<br/>";
      break;

    case "liberal":
      a += "denomination: liberal<br/>";
      break;

    case "lubavitch":
      a += "denomination: lubavitch<br/>";
      break;

    case "lubavitch_messianic":
      a += "denomination: lubavitch messianic<br/>";
      break;

    case "mizrachi_baghdadi":
      a += "denomination: mizrachi baghdadi<br/>";
      break;

    case "mizrachi_chida":
      a += "denomination: mizrachi chida<br/>";
      break;

    case "mizrachi_jerusalemite":
      a += "denomination: mizrachi jerusalemite<br/>";
      break;

    case "mizrachi_livorno":
      a += "denomination: mizrachi livorno<br/>";
      break;

    case "mizrachi_moroccan":
      a += "denomination: mizrachi moroccan<br/>";
      break;

    case "modern_orthodox":
      a += "denomination: modern orthodox<br/>";
      break;

    case "neo_orthodox":
      a += "denomination: neo orthodox<br/>";
      break;

    case "nondenominational":
      a += "denomination: nondenominational<br/>";
      break;

    case "orthodox":
      a += "denomination: orthodox<br/>";
      break;

    case "orthodox_ashkenaz":
      a += "denomination: orthodox ashkenaz<br/>";
      break;

    case "orthodox_sefard":
      a += "denomination: orthodox sefard<br/>";
      break;

    case "progressive":
      a += "denomination: progressive<br/>";
      break;

    case "reconstructionist":
      a += "denomination: reconstructionist<br/>";
      break;

    case "reform":
      a += "denomination: reform<br/>";
      break;

    case "renewal":
      a += "denomination: renewal<br/>";
      break;

    case "samaritan":
      a += "denomination: samaritan<br/>";
      break;

    case "sefardi":
      a += "denomination: sefardi<br/>";
      break;

    case "sefardi_amsterdam":
      a += "denomination: sefardi amsterdam<br/>";
      break;

    case "sefardi_london":
      a += "denomination: sefardi london<br/>";
      break;

    case "traditional":
      a += "denomination: traditional<br/>";
      break;

    case "ultra_orthodox":
      a += "denomination: ultra orthodox<br/>";
      break;

    case "unaffiliated":
      a += "denomination: unaffiliated<br/>";
      break;

    case "yemenite":
      a += "denomination: yemenite<br/>";
      break;

    case "yemenite_baladi":
      a += "denomination: yemenite baladi<br/>";
      break;

    case "yemenite_shami":
      a += "denomination: yemenite shami<br/>";
      break;

    case "ahmadiya":
      a += "denomination: ahmadiya<br/>";
      break;

    case "alaouite":
      a += "denomination: alaouite<br/>";
      break;

    case "druze":
      a += "denomination: druze<br/>";
      break;

    case "ibadi":
      a += "denomination: ibadi<br/>";
      break;

    case "ismaili":
      a += "denomination: ismaili<br/>";
      break;

    case "shia":
      a += "denomination: shia<br/>";
      break;

    case "sunni":
      a += "denomination: sunni<br/>";
      break;

    case "nichiren":
      a += "denomination: nichiren<br/>";
      break;

    case "jodo_shinshu":
      a += "denomination: jodo shinshu<br/>";
      break;

    case "jodo_shu":
      a += "denomination: jodo shu<br/>";
      break;

    case "vajrayana":
      a += "denomination: vajrayana<br/>";
      break;

    case "shingon_shu":
      a += "denomination: shingon shu<br/>";
      break;

    case "zen":
      a += "denomination: zen<br/>";
      break;

    case "thai_mahanikaya":
      a += "denomination: thai mahanikaya<br/>";
      break;

    case "thai_thammayut":
      a += "denomination: thai thammayut<br/>";
      break;

    case "asatru":
      a += "denomination: asatru<br/>";
      break;

    case "celtic":
      a += "denomination: celtic<br/>";
      break;

    case "greco_roman":
      a += "denomination: greco roman<br/>";
      break;

    case "wicca":
      a += "denomination: wicca<br/>";
      break;

    case "irani":
      a += "denomination: irani<br/>";
      break;

    case "parsi":
      a += "denomination: parsi<br/>";
      break;

    default:
      a += "unknown<br/>";
  }
  if (b.community) switch (b.community) {
    case "AA":
      a += "community (AA): Augustinians of the Assumption <br/>";
      break;

    case "BSCM":
      a += "community (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";
      break;

    case "CBMV":
      a += "community (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";
      break;

    case "CO":
      a += "community (CO): Oratorians<br/>";
      break;

    case "CMC":
      a += "community (CMC): Congregation of the Mother Co-Redemptrix<br/>";
      break;

    case "CRSP":
      a += "community (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";
      break;

    case "CSJ":
      a += "community (CSJ): Carmel Saint-Joseph<br/>";
      break;

    case "CSSP":
      a += "community (CSSP): Congr\u00e9gation du Saint-Esprit<br/>";
      break;

    case "CSSR":
      a += "community (CSSR): Congr\u00e9gation du Tr\u00e8s Saint R\u00e9dempteur<br/>";
      break;

    case "FCJM":
      a += "community (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";
      break;

    case "FMGB":
      a += "community (FMGB): Suore Francescane Missionarie di Ges\u00f9 Bambino<br/>";
      break;

    case "FMH":
      a += "community(FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";
      break;

    case "FMM":
      a += "community (FMM): Franciscaines missionnaires de Marie<br/>";
      break;

    case "FSC":
      a += "community (FSC): Fr\u00e8res des \u00c9coles chr\u00e9tiennes<br/>";
      break;

    case "MCCI":
      a += "community (MCCI): Missionnaires comboniens du Sacr\u00e9-C\u0153ur<br/>";
      break;

    case "MSFS":
      a += "community (MSFS): Missionnaires de Saint Fran\u00e7ois de Sales<br/>";
      break;

    case "OCart":
      a += "community (OCart): Order of the Carthusians<br/>";
      break;

    case "OCC":
      a += "community (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";
      break;

    case "OCD":
      a += "community (OCD): Ordre des Carmes d\u00e9chaux<br/>";
      break;

    case "OCSO":
      a += "community (OCSO): Trappists (lat. Ordo Cisterciensis Strictioris Observantiae)<br/>";
      break;

    case "OFM":
      a += "community (OFM): Ordre des Fr\u00e8res Mineurs (Franziskaner)<br/>";
      break;

    case "OFMCap":
      a += "community (OFMCap): Ordre des Fr\u00e8res Mineurs Capucins<br/>";
      break;

    case "OFMConv":
      a += "community (OFMConv): Ordre des Fr\u00e8res Mineurs Conventuels<br/>";
      break;

    case "OFS":
      a += "community (OFS): Franciscans secular Third Order<br/>";
      break;

    case "OMI":
      a += "community (OMI): Oblats de Marie<br/>";
      break;

    case "OP":
      a += "community (OP): Ordre des Fr\u00e8res Pr\u00eacheurs<br/>";
      break;

    case "OPraem":
      a += "community (OPraem): Ordre des chanoines r\u00e9guliers de Pr\u00e9montr\u00e9<br/>";
      break;

    case "OSB":
      a += "community (OSB): Order of Saint Benedict<br/>";
      break;

    case "OSC":
      a += "community (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";
      break;

    case "OSSS":
      a += "community (OSSS): Ordre de Sainte-Brigitte<br/>";
      break;

    case "OVM":
      a += "community (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";
      break;

    case "PSDP":
      a += "community (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";
      break;

    case "PFJ":
      a += "community (PFJ): Petits Fr\u00e8res de J\u00e9sus<br/>";
      break;

    case "SDB":
      a += "community (SDB): Soci\u00e9t\u00e9 de Saint Fran\u00e7ois de Sales<br/>";
      break;

    case "SJ":
      a += "community (SJ): Compagnie de J\u00e9sus<br/>";
      break;

    case "SOC":
      a += "community (SOC): Order of Cistercians<br/>";
      break;

    case "SSCC":
      a += "community (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";
      break;

    case "SSF":
      a += "community (SSF): Society of St Francis<br/>";
      break;

    case "SSJE":
      a += "community (SSJE): Society of St John the Evangelist<br/>";
      break;

    case "SSpS":
      a += "community (SSpS): Steyler Missionsschwestern<br/>";
      break;

    case "TOR":
      a += "community (TOR): Terzo Ordine Regolare di San Francesco<br/>";
      break;

    default:
      a += "unknown<br/>";
  }
  return a;
}

var fnTestInfoPopup = function (b) {
  b = b.getProperties();
  var a = "",
      c;

  for (c in b) a = a + c + "=" + b[c] + "<br/>";

  return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-utils.js":
/*!***********************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-utils.js ***!
  \***********************************************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony import */ var _c4g_maps_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var _c4g_maps_control_zoomlevel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "../MapsBundle/Resources/public/js/c4g-maps-control-zoomlevel.js");
/* harmony import */ var _c4g_maps_popup_info_de__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c4g-maps-popup-info-de */ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-de.js");
/* harmony import */ var _c4g_maps_popup_info_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./c4g-maps-popup-info-en */ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-en.js");




let popupFunctions = _c4g_maps_popup_info_de__WEBPACK_IMPORTED_MODULE_2__;

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    popupFunctions = _c4g_maps_popup_info_de__WEBPACK_IMPORTED_MODULE_2__;
  } else if (mapData.lang === "en") {
    popupFunctions = _c4g_maps_popup_info_en__WEBPACK_IMPORTED_MODULE_3__;
  } else {
    // fallback
    popupFunctions = _c4g_maps_popup_info_en__WEBPACK_IMPORTED_MODULE_3__;
  }
} else {
  popupFunctions = _c4g_maps_popup_info_en__WEBPACK_IMPORTED_MODULE_3__;
}

var utils = {
  /**
   *  Converts the first letter of a given string to uppercase, leaving the remaining string untouched.
   *
   *  @param    {string}    the string to capitalize
   *
   *  @return   {string}    the capitalized string
   */
  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  /**
   * Generate an unique id.
   *
   * The id is 9 characters long and prefixed with an underscore.
   *
   * @return  {string}  The generated id.
   */
  getUniqueId: function () {
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
  encodeGeoJsonProperty: function (input) {
    var output;

    if (!input) {
      return '';
    }

    output = input.replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/Ä/g, '&Auml;').replace(/ä/g, '&auml;').replace(/Ö/g, '&Ouml;').replace(/ö/g, '&ouml;').replace(/Ü/g, '&Uuml;').replace(/ü/g, '&uuml;');
    return output;
  },
  // end of encodeGeoJsonProperty()

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
  decodeGeoJsonProperty: function (input) {
    var output;

    if (!input) {
      return '';
    }

    if (typeof input !== "string") {
      input = input + "";
    }

    output = input.replace(/\\\\/g, '\\').replace(/\'\'/g, '\"').replace(/&Auml;/g, 'Ä').replace(/&auml;/g, 'ä').replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü;').replace(/&uuml;/g, 'ü');
    return output;
  },
  // end of decodeGeoJsonProperty()

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
  setUrlParam: function (param, opt_getKey, opt_execute) {
    var link, searchParam, paramReplaced, i;

    if (typeof param === undefined) {
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
        opt_getKey = opt_getKey.toLowerCase(); // replace parameter if already existent

        searchParam = location.search.replace(/([^=\?\&]+)=([^&]+)/gi, function (match, key, value, offset, originString) {
          if (key === opt_getKey) {
            paramReplaced = true;
            return key + '=' + param;
          }

          return match;
        }); // otherwise append as new parameter

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
  },
  // end of setUrlParam()

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
  getUrlParam: function (opt_getKey) {
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
  },
  // end of getUrlParam()

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
  deltaEncode: function (arrInput) {
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
  },
  // end of deltaEncode()

  /**
   * Decode a delta-encoded array.
   * See `deltaEncode` function for more detailed information.
   *
   * @param   {array<numbers>}  arrInput  [description]
   *
   * @return  {array<numbers>}            [description]
   */
  deltaDecode: function (arrInput) {
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
  },
  // end of deltaDecode()

  /**
   * Check and call functions in `arrHookFunctions` with given `parameters`.
   *
   * @param   {array<function>}   arrHookFunctions  [description]
   * @param   {mixed}             parameters        [description]
   */
  callHookFunctions: function (arrHookFunctions, parameters) {
    var j;

    if (arrHookFunctions && arrHookFunctions.length > 0) {
      for (j = 0; j < arrHookFunctions.length; j += 1) {
        if (typeof arrHookFunctions[j] === 'function') {
          arrHookFunctions[j](parameters);
        }
      }
    }
  },
  // end of "callHookFunctions()"

  /**
   * Convert a hex-formated color value into rgba()-format.
   *
   * @param   {string|number}  hex          [description]
   * @param   {string|number}  opt_opacity  [description]
   *
   * @return  {string}                      [description]
   */
  getRgbaFromHexAndOpacity: function (hex, opt_opacity, opt_array) {
    var bigint, r, g, b, a;
    bigint = parseInt(hex, 16);

    if (opt_opacity && opt_opacity.value) {
      opt_opacity.value = parseInt(opt_opacity.value);
    }

    if (opt_opacity && typeof opt_opacity !== 'number') {
      if (typeof opt_opacity === 'object' && opt_opacity.value) {
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
  measureGeometry: function (geometry, opt_forceLineMeasure, opt_forceSurfaceMeasure) {
    var value, sphere, coordinates, coord1, coord2, result, i;

    if (!geometry) {
      return false;
    } //sphere = new ol.Sphere(6378137);


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
      var edgeCoordinate = [center[0] + radius, center[1]]; //var wgs84Sphere = new ol.Sphere(6378137);

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
      var edgeCoordinate = [center[0] + radius, center[1]]; //var wgs84Sphere = new ol.Sphere(6378137);

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
  getExtentForGeometries: function (arrGeometries) {
    var extentSource;

    if (!arrGeometries) {
      console.warn('Geometries missing for extent calculation');
      return false;
    }

    extentSource = new ol.source.Vector();
    extentSource.addFeatures(arrGeometries);
    return extentSource.getExtent() || ol.Extent([0, 0, 0, 0]);
  },
  // end of getExtentForGeometries()

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
  fitToExtents: function (extents, map, opt_padding, opt_animationDuration) {
    var view, padding, extent, key;

    if (!extents || !map) {
      console.warn('Missing extent or map for fitExtent');
      return false;
    } //extent = ol.extent.createEmpty();


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
  },
  // end of fitToExtents

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
  fitToExtent: function (extent, map, opt_padding, opt_animationDuration, opt_minZoom, opt_maxZoom, opt_minResolution) {
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
    } // animate the "fitting" when a duration is given and its greater than 0


    if (opt_animationDuration && opt_animationDuration > 0) {
      view.animate({
        start: +new Date(),
        duration: opt_animationDuration,
        resolution: view.getResolution(),
        center: [0, 0]
      });
    }

    try {
      view.fit(extent, map.getSize(), {
        padding: [25, 25, 25, 25]
      }); //view.fit(extent, map.getSize());
      //view.setZoom(view.getZoom()-1);

      return true;
    } catch (e) {
      return false;
    }
  },
  // end of fitToExtent()

  /**
   * Convenience function to run all placeholder functions at once.
   *
   * @param   {string}                      strInput   [description]
   * @param   {ol.Feature}                  feature    [description]
   * @param   {ol.layer.Layer | undefined}  opt_layer  [description]
   *
   * @return  {string}                                 [description]
   */
  replaceAllPlaceholders: function (strInput, feature, opt_layer) {
    var strOutput; // only check the first two parameters as they will be used by all placeholder-functions
    // -> for performance

    if (!strInput || !feature) {
      return strInput;
    }

    strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer);
    strOutput = this.replaceEditorVarsPlaceholders(strOutput, feature);
    strOutput = this.replaceAttributePlaceholders(strOutput, feature);
    return strOutput;
  },
  // end of replaceAllPlaceholders()

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
  replaceFunctionPlaceholders: function (strInput, feature, layer) {
    var strOutput;

    if (!strInput || !feature || !layer) {
      return strInput;
    }

    strOutput = strInput.replace(/\$\{FN([^\}]*)\}/g, function (match, functionName, offset, originString) {
      var style; // check if function exists

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
  },
  // end of replaceFunctionPlaceholders()

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
  replaceEditorVarsPlaceholders: function (strInput, feature) {
    var strOutput;

    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }

    strOutput = strInput.replace(/\$\{(EV?[LV])([^\}]*)\}/g, function (match, type, evKey, offset, originString) {
      var editorVars, i; // check if feature has editorVars

      if (feature.get('editorVars')) {
        editorVars = feature.get('editorVars'); // search for editorVar with key == evKey

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
  },
  // end of replaceEditorVarsPlaceholders()

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
  replaceAttributePlaceholders: function (strInput, feature) {
    var strOutput;

    if (!strInput || !feature || typeof feature.get !== 'function') {
      return strInput;
    }

    strOutput = strInput.replace(/\$\{([^\}]*)\}/g, function (match, attr, offset, originString) {
      return feature.get(attr) || '';
    }); // end of replace()

    return strOutput;
  },
  // end of replaceAttributePlaceholders()
  objectToArray: function (object) {
    if (object && typeof object === 'object') {
      object = Object.keys(object).map(function (key) {
        return object[key];
      });
    }

    return object;
  },

  // end of objectToArray()
  getVectorLayer(source, style) {
    var fnStyle; // make sure that the style is a function

    if (typeof style === 'function') {
      fnStyle = style;
    } else if (style !== undefined) {
      fnStyle = function () {
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
  getCurrentSubdomain() {
    return window.location.href;
  },

  getValue: function (key) {
    return localStorage[key] || '';
  },
  storeValue: function (key, value) {
    localStorage[key] = value; // only strings
  }
};

/***/ }),

/***/ "./Resources/public/js/c4g-backend-editor.js":
/*!***************************************************!*\
  !*** ./Resources/public/js/c4g-backend-editor.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackendEditor = void 0;

var _c4gMapsConstant = __webpack_require__(/*! ../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");

var _c4gMapsControlSideboard = __webpack_require__(/*! ../../../../MapsBundle/Resources/public/js/c4g-maps-control-sideboard */ "../MapsBundle/Resources/public/js/c4g-maps-control-sideboard.js");

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../../../../MapsBundle/Resources/public/js/c4g-maps-misc-tooltippopup */ "../MapsBundle/Resources/public/js/c4g-maps-misc-tooltippopup.js");

var _c4gMapsI18n = __webpack_require__(/*! ../../../../MapsBundle/Resources/public/js/c4g-maps-i18n */ "../MapsBundle/Resources/public/js/c4g-maps-i18n.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

'use strict';

var BackendEditor =
/*#__PURE__*/
function (_Sideboard) {
  _inherits(BackendEditor, _Sideboard);

  /**
   * Constructor
   *
   * @constructor
   * @extend {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   */
  function BackendEditor(options) {
    var _this;

    _classCallCheck(this, BackendEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BackendEditor).call(this, options)); // extend options

    _this.options = $.extend({
      name: 'editor',
      type: 'frontend',
      dataField: false,
      create: true,
      mapController: undefined,
      drawModes: ['Point', 'Line', 'Polygon', 'Circle', 'Freehand'],
      direction: 'left',
      headline: _c4gMapsI18n.langConstants.EDITOR // initMode: 'select'

    }, options);

    if (!_this.options.mapController) {
      console.warn('Coul not initiallize Editor, without valid mapController.');
      return _possibleConstructorReturn(_this, false);
    } //window.c4gMapsHooks.editor_loadTabs = [];
    //window.c4gMapsHooks.editor_featureChanged = [];


    _this.tabs = []; // @TODO
    // this.typeLayer = undefined;
    // this.activeMode = this.options.initMode;
    // this.vectorSource = new ol.source.Vector();
    // this.activeDrawInteraction = undefined;

    _this.lastDrawInteraction = undefined;
    _this.proxy = _this.options.mapController.proxy;

    if (_this.options.dataField && typeof _this.options.dataField === 'string') {
      _this.options.dataField = $(_this.options.dataField) || false;
    } // call parent constructor


    _c4gMapsControlSideboard.Sideboard.call(_assertThisInitialized(_assertThisInitialized(_this)), _this.options);

    return _this;
  }

  _createClass(BackendEditor, [{
    key: "init",

    /**
     * Executed when the editor will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */
    value: function init(opt_externalinit) {
      var self, layerStyleFunction, viewSelect;
      self = this;
      this.spinner.show();

      layerStyleFunction = function layerStyleFunction(feature, projection) {
        var styleId;

        if (feature && typeof feature.get === 'function') {
          // get the styleId of the current feature
          styleId = feature.get('styleId'); // and execute the appropriate function

          if (self.proxy.locationStyleController.arrLocStyles[styleId]) {
            return self.proxy.locationStyleController.arrLocStyles[styleId].style(feature, projection);
          }
        }

        return false;
      }; // Add editor layers


      this.editPointLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: layerStyleFunction
      });
      this.editLineLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: layerStyleFunction
      });
      this.editPolygonLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: layerStyleFunction
      });
      this.editCircleLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: layerStyleFunction
      });
      this.editFreehandLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: layerStyleFunction
      });
      this.editLayerGroup = new ol.layer.Group({
        layers: new ol.Collection([this.editFreehandLayer, this.editCircleLayer, this.editPolygonLayer, this.editLineLayer, this.editPointLayer]),
        visible: true
      });
      this.options.mapController.map.addLayer(this.editLayerGroup); // Add and activate select view

      this.tabs.push(this.addSelectView());
      this.tabs[0].activate(); //   AJAX: get editor config

      $.getJSON(self.options.mapController.data.api.editor + '/' + self.options.mapController.data.beEditorProfile) // Create views for draw-features with at least one locationstyle
      .done(function (data) {
        data = self.prepareEditorStyleData(data); // Draw-point view

        if (data.styles_point.length && data.styles_point.length > 0) {
          self.tabs.push(self.addDrawView({
            type: 'Point',
            styleIds: data.styles_point
          }));
        } // Draw-line view


        if (data.styles_line.length && data.styles_line.length > 0) {
          self.tabs.push(self.addDrawView({
            type: 'LineString',
            styleIds: data.styles_line
          }));
        } // Draw-polygon view


        if (data.styles_polygon.length && data.styles_polygon.length > 0) {
          self.tabs.push(self.addDrawView({
            type: 'Polygon',
            styleIds: data.styles_polygon
          }));
        } // Draw-circle view


        if (data.styles_circle.length && data.styles_circle.length > 0) {
          self.tabs.push(self.addDrawView({
            type: 'Circle',
            styleIds: data.styles_circle
          }));
        } // Draw-freehand view


        if (data.styles_freehand.length && data.styles_freehand.length > 0) {
          self.tabs.push(self.addDrawView({
            type: 'Freehand',
            styleIds: data.styles_freehand
          }));
        } // Call hook function for dynamically added tabs


        if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.editor_loadTabs) === 'object') {
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.editor_loadTabs, self);
        }

        return true;
      }).fail(function () {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the editor configuration...');
        return false;
      }).always(function () {
        var layers;

        if (self.options.type === 'backend') {
          // import GeoJSON when in backend mode
          self.importGeoJSON();
        } else {
          // load session-features when in frontend mode
          self.load();
        } // Add autosave to the layers when a feature is added


        layers = self.editLayerGroup.getLayers();
        layers.forEach(function (element, index, array) {
          element.getSource().on('addfeature', function () {
            self.save();
          });
        }); //self.editPointLayer.getSource().on('addfeature', function () {self.save(); });
        //self.editLineLayer.getSource().on('addfeature', function () {self.save(); });
        //self.editPolygonLayer.getSource().on('addfeature', function () {self.save(); });

        self.spinner.hide();
      });

      if (opt_externalinit) {
        this.initialized = true;
      }

      return true;
    }
  }, {
    key: "prepareEditorStyleData",
    value: function prepareEditorStyleData(data) {
      var returnData = {};
      returnData.styles_point = [];
      returnData.styles_linestring = [];
      returnData.styles_polygon = [];
      returnData.styles_circle = [];
      returnData.styles_freehand = [];

      for (var key in data.drawStyles) {
        if (data.drawStyles.hasOwnProperty(key)) {
          var currentDrawstyle = data.drawStyles[key];

          for (var i = 0; i < currentDrawstyle.categories.length; i++) {
            var currentCategory = currentDrawstyle.categories[i];

            for (var j = 0; j < currentCategory.elements.length; j++) {
              returnData["styles_" + key].push(currentCategory.elements[j].styleId);
            }
          }
        }
      }

      if (returnData.styles_linestring) {
        returnData.styles_line = returnData.styles_linestring;
      }

      console.log(returnData);
      return returnData;
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
        this.options.mapController.map.removeLayer(this.editLayerGroup);
      }
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
        this.options.mapController.map.addLayer(this.editLayerGroup);
      }
    }
  }, {
    key: "addSelectView",
    value: function addSelectView() {
      var self, selectInteraction, selectBoxInteraction, selectedFeatures, selectContentWrapper, selectContentHeadline, selectContent, selectContentInfo, selectView, fnHandleSelection;
      self = this;
      selectContentWrapper = document.createElement('div');
      selectContentHeadline = document.createElement('div');
      selectContentHeadline.innerHTML = _c4gMapsI18n.langConstants.EDITOR_VIEW_TRIGGER_SELECT;
      selectContentHeadline.className = 'contentHeadline';
      selectContentWrapper.appendChild(selectContentHeadline);
      selectContent = document.createElement('div');
      selectContent.className = _c4gMapsConstant.cssConstants.EDITOR_CONTENT_SELECT;
      selectContentInfo = document.createElement('p');
      selectContentInfo.innerHTML = _c4gMapsI18n.langConstants.EDITOR_SELECT_INFO;
      selectContentInfo.innerHTML += '<br><br><sub>' + _c4gMapsI18n.langConstants.EDITOR_SELECT_INFO_ADDITIONAL + '</sub>';
      selectContent.appendChild(selectContentInfo);
      selectContentWrapper.appendChild(selectContent);
      selectView = this.addView({
        name: 'select',
        triggerConfig: {
          tipLabel: _c4gMapsI18n.langConstants.EDITOR_VIEW_TRIGGER_SELECT,
          className: _c4gMapsConstant.cssConstants.EDITOR_VIEW_TRIGGER_SELECT,
          withHeadline: true
        },
        sectionElements: [{
          section: this.contentContainer,
          element: selectContentWrapper
        }, {
          section: this.topToolbar,
          element: this.viewTriggerBar
        }],
        initFunction: function initFunction() {
          selectInteraction = new ol.interaction.Select({
            layers: self.editLayerGroup.getLayers().getArray(),
            toggleCondition: ol.events.condition.platformModifierKeyOnly,
            style: function style(feature, projection) {
              var styleId, styleArray, styleRadius;

              if (feature && typeof feature.get === 'function') {
                // get the styleId of the current feature
                styleId = feature.get('styleId'); // and execute the appropriate function

                if (self.proxy.locationStyleController.arrLocStyles[styleId]) {
                  styleArray = self.proxy.locationStyleController.arrLocStyles[styleId].style(feature, projection);

                  if (typeof styleArray[0].getImage === 'function' && styleArray[0].getImage() instanceof ol.style.Icon) {
                    styleRadius = 5;
                  } else {
                    styleRadius = parseInt(styleArray[0].getImage().getRadius(), 10) + 4;
                  }

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
              }

              return false;
            }
          }); // selectInteraction

          selectedFeatures = selectInteraction.getFeatures();
          selectBoxInteraction = new ol.interaction.DragBox({
            condition: ol.events.condition.shiftKeyOnly
          });
          selectBoxInteraction.on('boxend', function (e) {
            var extent = selectBoxInteraction.getGeometry().getExtent();
            self.editLayerGroup.getLayers().forEach(function (layer) {
              layer.getSource().forEachFeatureIntersectingExtent(extent, function (feature) {
                selectedFeatures.push(feature);
              });
            });
            fnHandleSelection();
          }); // clear selection when drawing a new box and when clicking on the map

          selectBoxInteraction.on('boxstart', function (e) {
            selectedFeatures.clear();
            fnHandleSelection();
          });

          fnHandleSelection = function fnHandleSelection() {
            var i, j, label, editorVars, headlineElement, inputNameElement, modifyButtonElement, deleteButtonElement, paragraphElement, strongElement, inputElement, featureCount, selectedFeature, blurOnEnter, inputChangeHandler, nameChangeHandler, modifyFeatureFunction, deleteFeatureFunction, renderSelectedFeaturesList;

            if (typeof self.applyFeatureModification === 'function') {
              self.applyFeatureModification();
            }

            blurOnEnter = function blurOnEnter(event) {
              if (event.which === 13) {
                try {
                  event.target.blur();
                } catch (ignore) {}
              }
            }; // end of "blurOnEnter()"


            nameChangeHandler = function nameChangeHandler(event) {
              var changedFeature;
              changedFeature = selectedFeatures.item(event.target.getAttribute('feat_id'));
              changedFeature.set('tooltip', _c4gMapsUtils.utils.encodeGeoJsonProperty(event.target.value || ''));
              self.save(); // Call hook to notify the feature change

              if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.editor_featureChanged) === 'object') {
                _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.editor_featureChanged, {
                  feature: changedFeature,
                  action: 'renamed'
                });
              }
            }; // end of "nameChangeHandler()"


            inputChangeHandler = function inputChangeHandler(event) {
              var currentVars, changedFeature;
              changedFeature = selectedFeatures.item(event.target.getAttribute('feat_id'));
              currentVars = changedFeature.get('editorVars');
              currentVars[event.target.getAttribute('var_id')].value = _c4gMapsUtils.utils.encodeGeoJsonProperty(event.target.value || '');
              changedFeature.set('editorVars', currentVars);
              self.save(); // Call hook to notify the feature change

              if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.editor_featureChanged) === 'object') {
                _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.editor_featureChanged, {
                  feature: changedFeature,
                  action: 'changed_var'
                });
              }
            }; // end of "inputChangeHandler()"


            modifyFeatureFunction = function modifyFeatureFunction(event) {
              var modifyFeature, featureGeometry, translateInteraction, modifyInteraction, modifyButton, applyButton;

              if (typeof self.applyFeatureModification === 'function') {
                self.applyFeatureModification();
              }

              modifyButton = event.target; // get feature that should be modified

              modifyFeature = selectedFeatures.item(modifyButton.getAttribute('feat_id'));

              if (!modifyFeature || typeof modifyFeature.getGeometry !== 'function') {
                return false;
              }

              featureGeometry = modifyFeature.getGeometry();
              translateInteraction = false;
              modifyInteraction = false;

              if (!(featureGeometry instanceof ol.geom.LineString)) {
                translateInteraction = new ol.interaction.Translate({
                  features: new ol.Collection([modifyFeature])
                });
                self.options.mapController.map.addInteraction(translateInteraction);
              }

              if (!(featureGeometry instanceof ol.geom.Point)) {
                modifyInteraction = new ol.interaction.Modify({
                  features: new ol.Collection([modifyFeature])
                });
                self.options.mapController.map.addInteraction(modifyInteraction);
              }

              selectInteraction.setActive(false); // add apply button

              applyButton = document.createElement('button');
              applyButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.EDITOR_FEATURE_APPLY;
              applyButton.title = _c4gMapsI18n.langConstants.EDITOR_FEATURE_APPLY;
              applyButton.setAttribute('feat_id', i);

              self.applyFeatureModification = function (event) {
                if (translateInteraction) {
                  translateInteraction.setActive(false);
                  self.options.mapController.map.removeInteraction(translateInteraction);
                  translateInteraction = false;
                }

                if (modifyInteraction) {
                  self.options.mapController.map.removeInteraction(modifyInteraction);
                  modifyInteraction.setActive(false);
                  modifyInteraction = false;
                }

                selectInteraction.setActive(true);
                applyButton = applyButton.parentNode.replaceChild(modifyButton, applyButton);
                self.save();
                self.applyFeatureModification = false; // Call hook to notify the feature change

                if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.editor_featureChanged) === 'object') {
                  _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.editor_featureChanged, {
                    feature: modifyFeature,
                    action: 'edited'
                  });
                }
              };

              $(applyButton).click(self.applyFeatureModification);
              modifyButton = modifyButton.parentNode.replaceChild(applyButton, modifyButton);
            }; // end of "modifyFeatureFunction()"


            deleteFeatureFunction = function deleteFeatureFunction(event) {
              var featureIndex, featureGeometry, featureSource, deleteFeature;

              if (typeof self.applyFeatureModification === 'function') {
                self.applyFeatureModification();
              }

              featureIndex = event.target.getAttribute('feat_id');
              deleteFeature = selectedFeatures.item(featureIndex);
              featureGeometry = deleteFeature.getGeometry(); // find right source

              if (featureGeometry instanceof ol.geom.Point) {
                featureSource = self.editPointLayer.getSource();
              } else if (featureGeometry instanceof ol.geom.LineString) {
                featureSource = self.editLineLayer.getSource();
              } else if (featureGeometry instanceof ol.geom.Polygon) {
                featureSource = self.editPolygonLayer.getSource();
              } else if (featureGeometry instanceof ol.geom.Circle) {
                featureSource = self.editCircleLayer.getSource();
              } else {
                // could not find right source
                console.warn('Could not delete the feature. Unable to find appropriate source.');
                return false;
              } // remove Feature from the source


              try {
                featureSource.removeFeature(deleteFeature);
              } catch (ignore) {
                if (featureGeometry instanceof ol.geom.LineString) {
                  featureSource = self.editFreehandLayer.getSource();
                  featureSource.removeFeature(deleteFeature);
                }
              } // and from the selection


              selectedFeatures.remove(deleteFeature); // rerender the selectionList

              renderSelectedFeaturesList();
              self.save(); // Call hook to notify the feature change
              // Maybe pass the remaining features instead of the deletedFeature ?
              // Or maybe a second hook for deletion, where both is passed ?

              if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.editor_featureChanged) === 'object') {
                _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.editor_featureChanged, {
                  feature: deleteFeature,
                  action: 'deleted'
                });
              }
            }; // end of "deleteFeatureFunction()"


            renderSelectedFeaturesList = function renderSelectedFeaturesList() {
              featureCount = selectedFeatures.getLength();
              selectContent.innerHTML = '';

              if (featureCount > 0) {
                for (i = 0; i < featureCount; i += 1) {
                  selectedFeature = selectedFeatures.item(i);
                  headlineElement = document.createElement('h4'); // add name inputfield

                  inputNameElement = document.createElement('input');
                  inputNameElement.type = 'text';
                  inputNameElement.id = i;
                  inputNameElement.setAttribute('value', _c4gMapsUtils.utils.decodeGeoJsonProperty(selectedFeature.get('tooltip') || ''));
                  inputNameElement.setAttribute('feat_id', i);
                  $(inputNameElement).keydown(blurOnEnter);
                  inputNameElement.onchange = nameChangeHandler;
                  headlineElement.appendChild(inputNameElement); // add modify button

                  modifyButtonElement = document.createElement('button');
                  modifyButtonElement.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.EDITOR_FEATURE_MODIFY;
                  modifyButtonElement.title = _c4gMapsI18n.langConstants.EDITOR_FEATURE_MODIFY;
                  modifyButtonElement.setAttribute('feat_id', i);
                  $(modifyButtonElement).click(modifyFeatureFunction);
                  headlineElement.appendChild(modifyButtonElement); // add delete button

                  deleteButtonElement = document.createElement('button');
                  deleteButtonElement.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.EDITOR_FEATURE_DELETE;
                  deleteButtonElement.title = _c4gMapsI18n.langConstants.EDITOR_FEATURE_DELETE;
                  deleteButtonElement.setAttribute('feat_id', i);
                  $(deleteButtonElement).click(deleteFeatureFunction);
                  headlineElement.appendChild(deleteButtonElement);
                  selectContent.appendChild(headlineElement);

                  if (selectedFeature.get('measuredLength')) {
                    if (selectedFeature.getGeometry() instanceof ol.geom.LineString) {
                      label = _c4gMapsI18n.langConstants.LENGTH;
                    } else if (selectedFeature.getGeometry() instanceof ol.geom.Polygon) {
                      label = _c4gMapsI18n.langConstants.PERIMETER;
                    } else {
                      label = _c4gMapsI18n.langConstants.RADIUS;
                    }

                    paragraphElement = document.createElement('p');
                    paragraphElement.innerHTML += '<strong>' + label + ':</strong> ' + selectedFeature.get('measuredLength').htmlValue;
                    selectContent.appendChild(paragraphElement);
                  }

                  if (selectedFeature.get('measuredArea')) {
                    paragraphElement = document.createElement('p');
                    paragraphElement.innerHTML += '<strong>' + _c4gMapsI18n.langConstants.SURFACEAREA + ':</strong> ' + selectedFeature.get('measuredArea').htmlValue;
                    selectContent.appendChild(paragraphElement);
                  }

                  if (selectedFeature.get('measuredRadius')) {
                    paragraphElement = document.createElement('p');
                    paragraphElement.innerHTML += '<strong>' + _c4gMapsI18n.langConstants.RADIUS + ':</strong> ' + selectedFeature.get('measuredRadius').htmlValue;
                    selectContent.appendChild(paragraphElement);
                  } // check and append editor-vars


                  editorVars = selectedFeature.get('editorVars');

                  for (j = 0; j < editorVars.length; j += 1) {
                    paragraphElement = document.createElement('p');
                    strongElement = document.createElement('strong');
                    strongElement.innerHTML = editorVars[j].label;
                    inputElement = document.createElement('input');
                    inputElement.type = 'text';
                    inputElement.id = i + '-' + j;
                    inputElement.setAttribute('value', _c4gMapsUtils.utils.decodeGeoJsonProperty(editorVars[j].value || ''));
                    inputElement.setAttribute('feat_id', i);
                    inputElement.setAttribute('var_id', j);
                    $(inputElement).keydown(blurOnEnter);
                    inputElement.onchange = inputChangeHandler;
                    paragraphElement.appendChild(strongElement);
                    paragraphElement.appendChild(document.createElement('br'));
                    paragraphElement.appendChild(inputElement);
                    selectContent.appendChild(paragraphElement);
                  }
                }

                selectContentHeadline.style.display = 'none'; // self.statusBar.innerHTML = featureCount;
              } else {
                selectContent.appendChild(selectContentInfo); // self.statusBar.innerHTML = 0;

                selectContentHeadline.style.display = '';
              }

              self.update();
            }; // end of "renderSelectedFeaturesList"


            renderSelectedFeaturesList();
          }; // end of "fnHandleSelection"


          selectInteraction.on('select', function (event) {
            fnHandleSelection(event.target.getFeatures());
          });
          self.options.mapController.map.addInteraction(selectInteraction);
          self.options.mapController.map.addInteraction(selectBoxInteraction);
          return true;
        },
        activateFunction: function activateFunction() {
          // Disable mapHover
          self.options.mapController.mapHover.deactivate(); // Reset display, if no features are selected

          if (selectInteraction.getFeatures().getLength() < 1) {
            selectContent.innerHTML = '';
            selectContent.appendChild(selectContentInfo); // self.statusBar.innerHTML = 0;

            selectContentHeadline.style.display = '';
          } // Enable interaction


          selectInteraction.setActive(true);
          self.options.mapController.map.addInteraction(selectInteraction);
          selectBoxInteraction.setActive(true);
          self.options.mapController.map.addInteraction(selectBoxInteraction);
          return true;
        },
        deactivateFunction: function deactivateFunction() {
          if (typeof self.applyFeatureModification === 'function') {
            self.applyFeatureModification();
          } // Disable interaction


          selectInteraction.setActive(false);
          self.options.mapController.map.removeInteraction(selectInteraction);
          selectBoxInteraction.setActive(false);
          self.options.mapController.map.removeInteraction(selectBoxInteraction); // enable mapHover

          self.options.mapController.mapHover.activate();
          return true;
        }
      });
      return selectView;
    }
  }, {
    key: "addDrawView",
    value: function addDrawView(options) {
      var self, TRIGGER_DRAW, drawContent, optionsDiv, enableInstantMeasureCheckbox, enableInstantMeasureCheckboxLabel, // enableFreehandDrawCheckbox,
      // enableFreehandDrawCheckboxLabel,
      checkboxChangeHandler, drawView, addDrawStyle, olType;
      self = this;
      options = $.extend({
        type: 'Point',
        styleIds: []
      }, options);

      checkboxChangeHandler = function checkboxChangeHandler(event) {// var interaction = self.options.mapController.map.interaction;
        // self.options.mapController.map.removeInteraction(interaction);
        // //self.options.mapController.map.addInteraction(interaction);
      };

      TRIGGER_DRAW = 'EDITOR_VIEW_TRIGGER_DRAW_' + options.type.toUpperCase();
      drawContent = document.createElement('div');
      drawContent.className = _c4gMapsConstant.cssConstants['EDITOR_DRAW_CONTENT_' + options.type.toUpperCase()];
      drawContent.innerHTML = '<h4>' + _c4gMapsI18n.langConstants[TRIGGER_DRAW] + '</h4>';

      if (options.type.toLowerCase() !== 'point') {
        optionsDiv = document.createElement('div');
        optionsDiv.className = _c4gMapsConstant.cssConstants.EDITOR_DRAW_OPTIONS;
        drawContent.appendChild(optionsDiv);
        enableInstantMeasureCheckbox = document.createElement('input');
        enableInstantMeasureCheckbox.type = 'checkbox';
        enableInstantMeasureCheckbox.id = 'enableInstantMeasureFor' + options.type;
        optionsDiv.appendChild(enableInstantMeasureCheckbox);
        enableInstantMeasureCheckboxLabel = document.createElement('label');
        enableInstantMeasureCheckboxLabel.setAttribute('for', 'enableInstantMeasureFor' + options.type);
        enableInstantMeasureCheckboxLabel.innerHTML = _c4gMapsI18n.langConstants.EDITOR_ENABLE_INSTANT_MEASURE;
        optionsDiv.appendChild(enableInstantMeasureCheckboxLabel);
        optionsDiv.appendChild(document.createElement('br')); // enableFreehandDrawCheckbox = document.createElement('input');
        // enableFreehandDrawCheckbox.type = 'checkbox';
        // enableFreehandDrawCheckbox.id = 'enableFreehandDrawFor' + options.type;
        // enableFreehandDrawCheckbox.onchange = checkboxChangeHandler;
        // optionsDiv.appendChild(enableFreehandDrawCheckbox);
        //
        // enableFreehandDrawCheckboxLabel = document.createElement('label');
        // enableFreehandDrawCheckboxLabel.setAttribute('for', 'enableFreehandDrawFor' + options.type);
        // enableFreehandDrawCheckboxLabel.innerHTML = langConstants.EDITOR_ENABLE_FREEHAND_DRAW;
        // optionsDiv.appendChild(enableFreehandDrawCheckboxLabel);
      }

      addDrawStyle = function addDrawStyle(styleId) {
        var interactionView, source, interaction, features, editorStyle, style, styleData, styleIcon, svgSrc, styleImage, styleTriggerLabel, featureIdCount, name; // Style "shortcut"

        style = self.proxy.locationStyleController.arrLocStyles[styleId].style()[0];
        editorStyle = self.proxy.locationStyleController.arrLocStyles[styleId].editor;
        styleData = self.proxy.locationStyleController.arrLocStyles[styleId].locStyleArr;
        svgSrc = styleData.svgSrc;
        featureIdCount = 0; // Create label for interaction-trigger

        styleTriggerLabel = document.createElement('span'); // @TODO use css-class for dimensions

        styleTriggerLabel.style.display = 'block';
        styleTriggerLabel.style.minWidth = '30px';
        styleTriggerLabel.style.minHeight = '30px';
        styleTriggerLabel.style.margin = '2px'; // "style.getImage().getImage()", does not work in every case

        styleImage = style.getImage() || undefined;

        if (editorStyle.iconSrc || styleImage instanceof ol.style.Icon) {
          styleIcon = document.createElement('img');

          if (editorStyle.iconSrc && editorStyle.iconSrc.indexOf('.') != -1) {
            styleIcon.src = editorStyle.iconSrc;

            if (styleData.editor_icon_size) {
              styleIcon.height = styleData.editor_icon_size[0];
              styleIcon.width = styleData.editor_icon_size[1];
            } else {
              styleIcon.height = '32';
              styleIcon.width = '32';
            }
          } else {
            styleIcon.src = styleImage.getSrc();
            styleIcon.scale = styleImage.getScale();
          }

          styleTriggerLabel.appendChild(styleIcon);
        } else if (svgSrc) {
          if (styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext("2d");
            var height = styleData.icon_size[0] * styleData.icon_scale;
            var width = styleData.icon_size[1] * styleData.icon_scale;
            var strokewidth = 0;

            if (styleData.strokewidth && styleData.strokewidth.value) {
              strokewidth = styleData.strokewidth.value;
            }

            canvas.height = height + 2 * strokewidth;
            canvas.width = width + 2 * strokewidth;
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
            } // if (styleData.icon_opacity.value && (styleData.icon_opacity.value > 0)) {
            //     ctx.globalAlpha = (styleData.icon_opacity.value / 100);
            // }


            var img = new Image();
            img.src = styleData.svgSrc;
            img.zIndex = 100;

            img.onload = function () {
              ctx.drawImage(img, strokewidth, strokewidth, width, height);
            };

            styleIcon = canvas;
            styleTriggerLabel.style.width = width * scale + 'px';
            styleTriggerLabel.style.height = height * scale + 'px';
          }
        } else {
          styleTriggerLabel.style.background = style.getFill().getColor();
          styleTriggerLabel.style.border = '1px solid ' + style.getStroke().getColor();
        } // Create interactionView
        //   "addView" will be used for this, because the functionality
        //   ist mostly equal


        name = self.proxy.locationStyleController.arrLocStyles[styleId].name.replace("&#40;", "(").replace("&#41;", ")");
        interactionView = self.addView({
          name: 'draw:' + (self.proxy.locationStyleController.arrLocStyles[styleId].tooltip || name),
          triggerConfig: {
            label: styleTriggerLabel,
            tipLabel: self.proxy.locationStyleController.arrLocStyles[styleId].tooltip || name,
            className: _c4gMapsConstant.cssConstants.EDITOR_DRAW_TRIGGER,
            target: drawContent,
            withHeadline: true
          },
          sectionElements: [{
            section: self.contentContainer,
            element: drawContent
          }, {
            section: self.topToolbar,
            element: self.viewTriggerBar
          }],
          initFunction: function initFunction() {
            var interactionStyleImage, activeSketch, activeTooltip; // Only show original icon, when the drawing POIs

            if (options.type.toLowerCase() === 'point' && style.getImage()) {
              interactionStyleImage = style.getImage();
            } else {
              interactionStyleImage = new ol.style.Circle({
                fill: style.getFill(),
                stroke: style.getStroke(),
                radius: 5
              });
            } // Get appropriate source


            switch (options.type.toLowerCase()) {
              case 'freehand':
                source = self.editFreehandLayer.getSource();
                break;

              case 'circle':
                source = self.editCircleLayer.getSource();
                break;

              case 'polygon':
                source = self.editPolygonLayer.getSource();
                break;

              case 'linestring':
                source = self.editLineLayer.getSource();
                break;

              case 'point':
              default:
                source = self.editPointLayer.getSource();
                break;
            }

            olType = options.type;

            if (olType == 'Freehand') {
              olType = 'LineString';
            }

            features = new ol.Collection();
            interaction = new ol.interaction.Draw({
              features: features,
              source: source,
              type: olType,
              freehand: options.type == 'Freehand',
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
            }); // @TODO doku
            //

            interaction.on('drawstart', function (event) {
              activeSketch = event.feature;
              activeSketch.set('styleId', styleId);

              if (enableInstantMeasureCheckbox && enableInstantMeasureCheckbox.checked) {
                activeTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
                  map: self.options.mapController.map,
                  position: event.coordinate,
                  horizontal: true
                });
              }
            }, self); // @TODO doku
            //

            self.options.mapController.map.on('pointermove', function (event) {
              if (enableInstantMeasureCheckbox && enableInstantMeasureCheckbox.checked && activeSketch) {
                if (activeTooltip && _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue == "0.00") {
                  activeTooltip.close();
                  activeTooltip = null;
                } else if (!activeTooltip && _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue && _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).rawValue != "0.00") {
                  activeTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
                    map: self.options.mapController.map,
                    position: event.coordinate,
                    horizontal: true
                  });
                }

                if (activeTooltip) {
                  activeTooltip.setPosition(event.coordinate);
                  activeTooltip.setContent(_c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true).htmlValue);
                }
              }
            }, self); // @TODO doku
            //

            interaction.on('drawend', function (event) {
              var i, vars, editorVars, name; // name the feature

              featureIdCount += 1;
              name = self.proxy.locationStyleController.arrLocStyles[styleId].name.replace("&#40;", "(").replace("&#41;", ")");
              activeSketch.set('tooltip', (self.proxy.locationStyleController.arrLocStyles[styleId].tooltip || name) + ' (' + featureIdCount + ')'); // add styleId

              activeSketch.set('styleId', styleId); // add measurements to the feature

              activeSketch.set('measuredLength', _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry(), true));

              if (options.type.toLowerCase() === 'polygon') {
                activeSketch.set('measuredArea', _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry()));
              }

              if (options.type.toLowerCase() === 'circle') {
                activeSketch.set('measuredRadius', _c4gMapsUtils.utils.measureGeometry(activeSketch.getGeometry()));
              } //activeSketch.setStyle(self.proxy.locationStyleController.arrLocStyles[styleId].style);
              // add editor-vars


              vars = editorStyle.vars;
              editorVars = [];

              for (i = 0; i < vars.length; i += 1) {
                editorVars[i] = {};
                editorVars[i].key = vars[i].key;
                editorVars[i].label = vars[i].value;
                editorVars[i].value = '';
              }

              activeSketch.set('editorVars', editorVars); // reset active-element variables

              activeSketch = null;

              if (activeTooltip) {
                activeTooltip.close();
                activeTooltip = null;
              }
            }, self);
            self.options.mapController.map.addInteraction(interaction);
            return true;
          },
          // end of "initFunction()"
          activateFunction: function activateFunction() {
            // deactivate mapHover
            self.options.mapController.mapHover.deactivate(); // Reset feature-list

            features.clear(); // Enable interaction
            // self.options.mapController.map.addInteraction(interaction);

            interaction.setActive(true);
            return true;
          },
          deactivateFunction: function deactivateFunction() {
            // reactivate mapHover
            self.options.mapController.mapHover.activate(); // finish drawings, if not already done

            if (options.type.toLowerCase() !== 'point') {
              try {
                interaction.finishDrawing();
              } catch (ignore) {// 0_o
              }
            } // Remove from map
            // self.options.mapController.map.removeInteraction(interaction);


            interaction.setActive(false);
            return true;
          }
        }, drawView);
        return interactionView;
      };

      drawView = self.addView({
        name: 'draw:' + options.type.toLowerCase(),
        triggerConfig: {
          tipLabel: _c4gMapsI18n.langConstants[TRIGGER_DRAW],
          className: _c4gMapsConstant.cssConstants[TRIGGER_DRAW],
          withHeadline: true
        },
        sectionElements: [{
          section: self.contentContainer,
          element: drawContent
        }, {
          section: self.topToolbar,
          element: self.viewTriggerBar
        }],
        initFunction: function initFunction() {
          var i, styleId, neededStyles, sortAndAddStyles; // Show loading animation

          self.spinner.show();
          neededStyles = [];
          /**
           * @TODO
           * [sortAndAddStyles description]
           *
           * @return  {[type]}  [description]
           */

          sortAndAddStyles = function sortAndAddStyles(arrStyleIds) {
            var j, locationStyles, drawInteraction, styleIds; // prepare

            locationStyles = self.proxy.locationStyleController.arrLocStyles;
            styleIds = arrStyleIds || options.styleIds;

            if (!styleIds || !locationStyles) {
              return false;
            } // sort


            styleIds.sort(function (a, b) {
              //ToDo check
              if (locationStyles[a] && locationStyles[b] && locationStyles[a].editor) {
                if (!locationStyles[a].editor.sort && !locationStyles[b].editor.sort || locationStyles[a].editor.sort === locationStyles[b].editor.sort) {
                  if (!locationStyles[a].name || !locationStyles[b].name) {
                    return !locationStyles[b].name ? -1 : 1;
                  }

                  return locationStyles[a].name.toLowerCase() > locationStyles[b].name.toLowerCase() ? 1 : -1;
                }

                if (!locationStyles[a].editor.sort || !locationStyles[b].editor.sort) {
                  return !locationStyles[b].editor.sort ? -1 : 1;
                }

                return locationStyles[a].editor.sort > locationStyles[b].editor.sort ? 1 : -1;
              } else {
                return -1;
              }
            }); // end sort
            // create

            for (j = 0; j < styleIds.length; j += 1) {
              drawInteraction = addDrawStyle(styleIds[j]); // activate the first drawStyle

              if (j === 0) {
                drawInteraction.activate();
              }
            } // success


            self.update();
            return true;
          }; // end of "sortAndAddStyles"
          // Make sure that all needed styles are loaded


          if (!self.proxy.locationStyleController.arrLocStyles) {
            // no styles are loaded, so load all styles
            self.proxy.locationStyleController.arrLocStyles = {};
            neededStyles = options.styleIds;
          } else {
            // check wich styles are missing
            for (i = 0; i < options.styleIds.length; i += 1) {
              styleId = options.styleIds[i];

              if (!self.proxy.locationStyleController.arrLocStyles[styleId] || !self.proxy.locationStyleController.arrLocStyles[styleId].style) {
                neededStyles.push(styleId);
              }
            }
          }

          if (neededStyles.length > 0) {
            if (!self.proxy) {
              console.warn('Could not load locStyles, as the map-proxy was not initiallized.');
            }

            self.proxy.locationStyleController.loadLocationStyles(neededStyles, {
              done: function done() {
                sortAndAddStyles();
              },
              always: function always() {
                // Hide loading-animation
                self.spinner.hide();
                self.update();
              }
            });
          } else {
            sortAndAddStyles();
            self.update();
            self.spinner.hide();
          }

          return true;
        },
        activateFunction: function activateFunction() {
          return true;
        },
        deactivateFunction: function deactivateFunction() {
          return true;
        }
      });
      return drawView;
    }
    /**
     * If opt_slot is empty, the function will just save the data in the sessionStorage.
     * [save description]
     *
     * @param   {[type]}  opt_slot  [description]
     *
     * @return  {[type]}            [description]
     */

  }, {
    key: "save",
    value: function save(opt_slot) {
      var format, saveData, slotName, storage;

      if (this.options.type === 'backend') {
        return this.exportGeoJSON();
      }

      format = new ol.format.GeoJSON();
      saveData = {};
      saveData.points = format.writeFeatures(this.editPointLayer.getSource().getFeatures());
      saveData.lines = format.writeFeatures(this.editLineLayer.getSource().getFeatures());
      saveData.polygons = format.writeFeatures(this.editPolygonLayer.getSource().getFeatures());
      saveData.circles = format.writeFeatures(this.editCircleLayer.getSource().getFeatures());
      saveData.freehand = format.writeFeatures(this.editFreehandLayer.getSource().getFeatures());
      slotName = 'c4gMaps_';
      slotName += this.options.mapController.data.mapId;
      slotName += '_' + window.location.pathname;

      if (!opt_slot) {
        storage = window.sessionStorage;
      } else {
        slotName += '_' + opt_slot;
        storage = window.localStorage;
      } // Call hook functions before save


      if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.editor_onSave) === 'object') {
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.editor_onSave, saveData);
      }

      storage.setItem(slotName, JSON.stringify(saveData));
    }
    /**
     * If opt_slot is empty, the function will just load the data from the sessionStorage.
     * [load description]
     *
     * @param   {[type]}  opt_slot  [description]
     *
     * @return  {boolean}            [description]
     */

  }, {
    key: "load",
    value: function load(opt_slot) {
      var i, self, format, loadData, featureCollection, slotName, storage, neededStyles, styleId, importFeatures;
      self = this;
      format = new ol.format.GeoJSON();
      self.spinner.show();
      slotName = 'c4gMaps_';
      slotName += this.options.mapController.data.mapId;
      slotName += '_' + window.location.pathname;

      if (!opt_slot) {
        storage = window.sessionStorage;
      } else {
        slotName += '_' + opt_slot;
        storage = window.localStorage;
      }

      loadData = storage.getItem(slotName);

      if (!loadData) {
        self.spinner.hide();
        return false;
      }

      loadData = JSON.parse(loadData);
      featureCollection = [];
      neededStyles = [];
      featureCollection = format.readFeatures(loadData.points).concat(format.readFeatures(loadData.lines), format.readFeatures(loadData.polygons), format.readFeatures(loadData.circles), format.readFeatures(loadData.freehand));

      for (i = 0; i < featureCollection.length; i += 1) {
        styleId = featureCollection[i].get('styleId');

        if ((!self.proxy.locationStyleController.arrLocStyles[styleId] || !self.proxy.locationStyleController.arrLocStyles[styleId].style) && $.inArray(styleId, neededStyles) === -1) {
          neededStyles.push(styleId);
        }
      }

      importFeatures = function importFeatures() {
        self.editPointLayer.getSource().addFeatures(format.readFeatures(loadData.points));
        self.editLineLayer.getSource().addFeatures(format.readFeatures(loadData.lines));
        self.editPolygonLayer.getSource().addFeatures(format.readFeatures(loadData.polygons));
        self.editCircleLayer.getSource().addFeatures(format.readFeatures(loadData.circles));
        self.editFreehandLayer.getSource().addFeatures(format.readFeatures(loadData.freehand));
      };

      if (neededStyles.length > 0) {
        if (!self.proxy) {
          console.warn('Could not load locStyles, as the map-proxy was not initiallized.');
          return false;
        }

        self.proxy.locationStyleController.loadLocationStyles(neededStyles, {
          done: function done() {
            importFeatures(); // Call hook functions on load

            if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.editor_onLoad) === 'object') {
              _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.editor_onLoad, loadData);
            }
          },
          always: function always() {
            // Hide loading-animation
            self.spinner.hide();
          }
        });
      } else {
        importFeatures();
        self.spinner.hide(); // Call hook functions on load

        if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.editor_onLoad) === 'object') {
          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.editor_onLoad, loadData);
        }
      }
    } // End of "load"

    /**
     * @TODO: [export description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "exportGeoJSON",
    value: function exportGeoJSON() {
      var format, features;
      format = new ol.format.GeoJSON();
      features = this.editPointLayer.getSource().getFeatures();
      features = features.concat(this.editLineLayer.getSource().getFeatures());
      features = features.concat(this.editPolygonLayer.getSource().getFeatures());
      features = features.concat(this.editCircleLayer.getSource().getFeatures());
      features = features.concat(this.editFreehandLayer.getSource().getFeatures());
      features = format.writeFeatures(features); // features = JSON.stringify(features);

      if (this.options.type === 'backend' && this.options.dataField) {
        this.options.dataField.val(features);
        return true;
      } else {
        return features;
      }
    } // end of "export"

    /**
     * @TODO: [import description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "importGeoJSON",
    value: function importGeoJSON(opt_geojson) {
      var self, styleId, format, features, points, freehand, lines, polygons, circles, neededStyles, importFeatures, i;
      self = this;

      if (this.options.type === 'backend' && this.options.dataField) {
        features = this.options.dataField.val();
      } else if (opt_geojson) {
        features = opt_geojson;
      } else {
        return false;
      }

      if (!features) {
        // no features to load
        return false;
      } // try {
      //   features = JSON.parse(features);
      // } catch (ignore) {}


      format = new ol.format.GeoJSON();

      try {
        features = format.readFeatures(features);
      } catch (ignore) {
        console.warn('Could not load features: Invalid JSON string...');
        return false;
      }

      neededStyles = [];
      points = [];
      freehand = [];
      lines = [];
      polygons = [];
      circles = [];

      for (i = 0; i < features.length; i += 1) {
        styleId = features[i].get('styleId') || features[i].get('locstyle') || false;

        if (features[i] && typeof features[i].getGeometry === 'function') {
          if (features[i].getGeometry() instanceof ol.geom.Point) {
            points.push(features[i]);
          } else if (features[i].getGeometry() instanceof ol.geom.LineString) {
            if (features.options && features.options.type && features.options.type.toLowerCase() == 'freehand') {
              freehand.push(features[i]);
            } else {
              lines.push(features[i]);
            }
          } else if (features[i].getGeometry() instanceof ol.geom.Polygon) {
            polygons.push(features[i]);
          } else if (features[i].getGeometry() instanceof ol.geom.Circle) {
            circles.push(features[i]);
          }
        } else {
          console.warn('Cannot load feature without geometry.');
          return false;
        }

        if (styleId && (!self.proxy.locationStyleController.arrLocStyles[styleId] || !self.proxy.locationStyleController.arrLocStyles[styleId].style) && $.inArray(styleId, neededStyles) === -1) {
          neededStyles.push(styleId);
        }
      }

      importFeatures = function importFeatures() {
        self.editPointLayer.getSource().addFeatures(points);
        self.editLineLayer.getSource().addFeatures(lines);
        self.editPolygonLayer.getSource().addFeatures(polygons);
        self.editCircleLayer.getSource().addFeatures(circles);
        self.editFreehandLayer.getSource().addFeatures(freehand);

        _c4gMapsUtils.utils.fitToExtent(_c4gMapsUtils.utils.getExtentForGeometries(points.concat(lines, polygons, circles, freehand)), self.options.mapController.map, [25, 25, 25, self.container.offsetWidth + 25], 1000);
      };

      self.spinner.show();

      if (neededStyles.length > 0) {
        if (!self.proxy) {
          console.warn('Could not load locStyles, as the map-proxy was not initiallized.');
          return false;
        }

        self.proxy.locationStyleController.loadLocationStyles(neededStyles, {
          done: function done() {
            importFeatures();
          },
          always: function always() {
            // Hide loading-animation
            self.spinner.hide();
          }
        });
      } else {
        importFeatures();
        self.spinner.hide();
      }
    } // end of "import"

  }]);

  return BackendEditor;
}(_c4gMapsControlSideboard.Sideboard); // add backend editor to maps


exports.BackendEditor = BackendEditor;
window.c4gMapsHooks = window.c4gMapsHooks || {};
window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
window.c4gMapsHooks.mapController_addControls.push(function (params) {
  console.log("hook called");
  var mapController = params.mapController;
  var mapData = mapController.data; // mapController.map.removeControl(mapController.controls.editor);

  var editor = new BackendEditor({
    tipLabel: _c4gMapsI18n.langConstants.CTRL_EDITOR,
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

/***/ })

/******/ });