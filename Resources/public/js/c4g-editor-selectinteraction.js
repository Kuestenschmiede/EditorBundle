/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
import {langConstants} from "./c4g-editor-i18n";
import {FeatureInteraction} from "./c4g-editor-feature-interaction";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {cssConstants} from "./c4g-editor-constant-css";
import {TranslateAllInteraction} from "./c4g-translate-all-interaction";
import {Collection} from "ol";
import {Style, Circle, Stroke, Fill, Icon} from "ol/style";
import {shiftKeyOnly} from "ol/events/condition";
import {DragBox, Modify} from "ol/interaction";
import {toLonLat} from "ol/proj";
import {Polygon, Point, LineString} from "ol/geom";
import {default as CircleGeom} from "ol/geom/Circle";
import {GeoJSON} from "ol/format";
import {add} from "ol/coordinate";
import {SimpleGeometry} from "ol/geom/SimpleGeometry";

export class EditorSelectInteraction {
  /**
   * EditorSelectInteraction constructor
   * @param editor
   * @param selectView
   */
  constructor(editor, selectView) {
    this._elementUiController = null;
    this._editor = editor;
    this._selectView = selectView;
  }

  /**
   * Creates the interactions for selecting features and the resulting triggers.
   * @returns {{selectInteraction: *, boxInteraction: *}}
   */
  createSelectInteraction() {
    let editor = this.editor;
    let scope = this;
    let selectCollection = new Collection();

    let styleFn = function (feature, projection) {
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
          if (typeof styleArray[0].getImage === 'function' && styleArray[0].getImage() instanceof Icon) {
            styleRadius = 5;
          } else {
            styleRadius = 4;
          }
        }

        // create border style
        styleArray.push(
          new Style({
            image: new Circle({
              stroke: new Stroke({
                color: 'rgba(255,255,255,.7)',
                width: 5
              }),
              radius: styleRadius
            }),
            stroke: new Stroke({
              color: 'rgba(255,255,255,.7)',
              width: 5
            }),
            fill: new Fill({
              color: 'rgba(255,255,255,.5)'
            })
          })
        );
        return styleArray;
      }
    };
    let filter = function(feature, layer) {
      // returns true when the projectId of the given feature equals the current project id
      if (feature && typeof feature.get === "function"
        && editor.projectController.currentProject && editor.projectController.currentProject.permissions.data.write) {
        return feature.get('projectId') === editor.projectController.currentProject.id;
      } else {
        return false;
      }
    };
    let selectInteraction = new FeatureInteraction(selectCollection, filter, styleFn);
    selectInteraction.onSelect(function(feature, collection) {
      scope.fnHandleSelection(collection);
    });
    selectInteraction.onTranslateend(function(feature) {
      scope.applyFeatureTranslation(feature);
    });
    let selectBoxInteraction = new DragBox({condition: shiftKeyOnly});

    selectBoxInteraction.on('boxend', function (e) {
      var extent = selectBoxInteraction.getGeometry().getExtent();

      editor.editLayerGroup.getLayers().forEach(function (layerGroup) {
        layerGroup.getLayers().forEach(function(layer) {
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
    return {selectInteraction: selectInteraction, boxInteraction: selectBoxInteraction};
  }

  /**
   * Applies a feature transformation.
   * @param feature
   */
  applyFeatureTranslation(feature) {
    let change = {};
    if (feature.getGeometry().getType() === 'Point') {
      let coordinates = toLonLat(feature.getGeometry().getCoordinates());
      change['locgeox'] = coordinates[0];
      change['locgeoy'] = coordinates[1];
    } else if (feature.getGeometry().getType() === 'Circle') {
      let coordinates = toLonLat(feature.getGeometry().getCenter());
      change['locgeox'] = coordinates[0];
      change['locgeoy'] = coordinates[1];
      change['radius'] = feature.getGeometry().getRadius();
    } else {
      let geoJson = new GeoJSON();
      change['geojson'] = geoJson.writeFeature(feature);
    }
    // update feature measurements
    feature.set('measuredLength', utils.measureGeometry(feature.getGeometry(), true));
    if (feature.getGeometry().getType() === 'Polygon') {
      feature.set('measuredArea', utils.measureGeometry(feature.getGeometry()));
    }
    if (feature.getGeometry().getType() === 'Circle') {
      feature.set('measuredRadius', utils.measureGeometry(feature.getGeometry()));
    }
    // call featurehandler
    this.editor.featureHandler.modifyFeature(feature, change);
    // re-render list
    this.updateFeatures();
  }

  addModificationInteractions(modifyFeature) {
    let featureGeometry = modifyFeature.getGeometry();
    let translateInteraction = false;
    let modifyInteraction = false;
    // add interactions to map
    if (!(featureGeometry.getType() === 'Point')) {
      modifyInteraction = new Modify({
        features: new Collection([modifyFeature])
      });
      this.editor.options.mapController.map.addInteraction(modifyInteraction);
    }
  }

  /**
   * Removes the given feature from the selected features.
   * @param feature
   */
  removeSelectedFeature(feature) {
    this.selectInteraction.removeFeature(feature);
  }

  /**
   * Refreshes the feature list.
   */
  updateFeatures() {
    this.fnHandleSelection(this.selectInteraction.getFeatures());
  }

  /**
   * Draws the duplicate of a layer onto the map.
   * @param layer         C4gLayer
   * @param opt_offset    bool  Should the feature be drawn with an offset?
   */
  showNewLayer(layer, opt_offset) {
    let scope = this;
    let change = {};

    this.editor.mapsInterface.addToLayerArray(layer);
    this.editor.mapsInterface.updateStarboard();
    this.editor.mapsInterface.showLayer(layer.id);
    layer.vectorLayer.getLayers().forEach(function(element, index, array) {
      element.getSource().forEachFeature(function(feature) {
        // set layerId, needed for later feature removal
        feature.set('layerId', layer.id);
        // set additional display properties
        feature.set('name', layer.layername);
        feature.set('projectId', layer.projectId);
        if (layer.content && layer.content[0] && layer.content[0].locationStyle) {
          feature.set('styleId', layer.content[0].locationStyle);
        }
        if (opt_offset) {
          if (feature.getGeometry().getType() === 'Point') {
            let coordinates = feature.getGeometry().getCoordinates();
            coordinates = add(coordinates, [10, 10]);
            feature.setGeometry(new Point(coordinates));
            coordinates = toLonLat(coordinates);
            change['locgeox'] = coordinates[0];
            change['locgeoy'] = coordinates[1];
          } else if (feature.getGeometry().getType() === 'Circle') {
            let center = feature.getGeometry().getCenter();
            center = add(center, [30, 30]);
            feature.setGeometry(new CircleGeom(center, feature.getGeometry().getRadius()));
            center = toLonLat(center);
            change['locgeox'] = center[0];
            change['locgeoy'] = center[1];
          } else {
            feature.getGeometry().translate(30, 30);
            let geoJson = new GeoJSON();
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
  fnHandleSelection(selectedFeatures) {
    var outerDiv,
      inputNameElement,
      modifyButtonElement,
      deleteButtonElement,
      featureCount,
      selectedFeature,
      modifyFeatureFunction,
      deleteFeatureFunction,
      renderSelectedFeaturesList;

    let scope = this;
    let selectInteraction = this.selectInteraction;

    // if (typeof scope.editor.applyFeatureModification === 'function') {
    //   scope.editor.applyFeatureModification();
    // }

    renderSelectedFeaturesList = function () {
      featureCount = selectedFeatures.getLength();
      scope.selectView.selectContent.innerHTML = '';
      if (featureCount > 0) {
        if (featureCount > 1) {
          scope.selectView.selectContent.appendChild(scope.createMultiEditButtonBar());
        }
        for (let i = 0; i < featureCount; i += 1) {
          selectedFeature = selectedFeatures.item(i);
          outerDiv = document.createElement('div');
          // add name inputfield
          inputNameElement = document.createElement('input');
          inputNameElement.type = 'text';
          inputNameElement.id = i;
          inputNameElement.setAttribute(
            'value',
            selectedFeature.get('name')
          );
          inputNameElement.setAttribute('feat_id', i);
          inputNameElement.setAttribute('disabled', true);
          outerDiv.appendChild(inputNameElement);
          if (selectedFeature.getGeometry().getType() !== 'Point') {
            // add modify button
            outerDiv.appendChild(scope._elementUiController.createMoveButton(i));
          }
          // add delete button
          outerDiv.appendChild(scope._elementUiController.createDeleteButton(i));
          // add edit button
          outerDiv.appendChild(scope._elementUiController.createEditButton(i));
          // add copy button
          outerDiv.appendChild(scope._elementUiController.createCopyButton(i));
          if (scope.editor.projectController.projects.length > 1) {
            // add displace button
            // outerDiv.appendChild(scope._elementUiController.createDisplaceButton(i));
            // add copy&displace button
            // outerDiv.appendChild(scope._elementUiController.createCopyAndDisplaceButton(i));
          }

          // add rotation button
          // outerDiv.appendChild(scope._elementUiController.createRotateButton(i));
          // add deselect button
          outerDiv.appendChild(scope._elementUiController.createDeselectButton(i));
          // add revert button
          outerDiv.appendChild(scope._elementUiController.createRevertButton(i));
          scope.selectView.selectContent.appendChild(outerDiv);
          if (selectedFeature.get('measuredLength')) {
            let label = "";
            if (selectedFeature.getGeometry().getType() === 'LineString') {
              label = langConstants.LENGTH;
            } else if (selectedFeature.getGeometry().getType() === 'Polygon') {
              label = langConstants.PERIMETER;
            } else if (selectedFeature.getGeometry().getType() === 'Circle') {
              label = langConstants.RADIUS;
            }
            let paragraphElement = document.createElement('p');
            paragraphElement.innerHTML += '<strong>' + label + ':</strong> ' + selectedFeature.get('measuredLength').htmlValue;
            scope.selectView.selectContent.appendChild(paragraphElement);
          }
          if (selectedFeature.get('measuredArea')) {
            let paragraphElement = document.createElement('p');
            paragraphElement.innerHTML += '<strong>' + langConstants.SURFACEAREA + ':</strong> ' + selectedFeature.get('measuredArea').htmlValue;
            scope.selectView.selectContent.appendChild(paragraphElement);
          }
          if (selectedFeature.get('measuredRadius')) {
            let paragraphElement = document.createElement('p');
            paragraphElement.innerHTML += '<strong>' + langConstants.RADIUS + ':</strong> ' + selectedFeature.get('measuredRadius').htmlValue;
            scope.selectView.selectContent.appendChild(paragraphElement);
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
    }; // end of "renderSelectedFeaturesList"

    renderSelectedFeaturesList();
  }; // end of "fnHandleSelection"

  createMultiEditButtonBar() {
    const scope = this;
    let bar = document.createElement('div');
    let deselectButton = document.createElement('button');
    deselectButton.title = langConstants.BUTTON_DESELECT_ALL;
    jQuery(deselectButton).addClass(cssConstants.BUTTON_DESELECT_ALL);
    jQuery(deselectButton).on('click', function(event) {
      scope.deselectAllElements();
    });
    let deleteButton = document.createElement('button');
    deleteButton.title = langConstants.BUTTON_DELETE_ALL;
    jQuery(deleteButton).addClass(cssConstants.BUTTON_DELETE_ALL);
    jQuery(deleteButton).on('click', function(event) {
      scope.showDeleteConfirmDialog(bar);
    });
    let translateButton = document.createElement('button');
    translateButton.title = langConstants.BUTTON_TRANSLATE_ALL;
    jQuery(translateButton).addClass(cssConstants.BUTTON_TRANSLATE_ALL);
    jQuery(translateButton).on('click', function(event) {
      // exchange interactions
      scope.selectInteraction.deactivate();
      scope._editor.options.mapController.map.removeInteraction(scope.selectInteraction);
      let translateAll = new TranslateAllInteraction(
        scope.selectInteraction.getFeatures().getArray(),
        scope.editor.options.mapController.map
      );
      translateAll.activate();
      scope._editor.options.mapController.map.addInteraction(translateAll);
      // exchange button
      let applyTranslationButton = document.createElement('button');
      applyTranslationButton.title = langConstants.BUTTON_APPLY_TRANSLATE;
      jQuery(applyTranslationButton).addClass(cssConstants.BUTTON_APPLY);
      jQuery(applyTranslationButton).on('click', function (event) {
        applyTranslationButton.replaceWith(translateButton);
        let features = scope.selectInteraction.getFeatures().getArray();
        for (let i = 0; i < features.length; i++) {
          scope.applyFeatureTranslation(features[i]);
        }
        // exchange interactions back
        translateAll.deactivate();
        scope._editor.options.mapController.map.removeInteraction(translateAll);
        scope.selectInteraction.activate();
        scope._editor.options.mapController.map.addInteraction(scope.selectInteraction);
      });
      this.replaceWith(applyTranslationButton);
      scope.toggleButtons(true);
      applyTranslationButton.removeAttribute('disabled');
    });
    bar.appendChild(translateButton);
    bar.appendChild(deleteButton);
    if (this.editor.projectController.projects.length > 1) {
      let displaceButton = document.createElement('button');
      displaceButton.title = langConstants.BUTTON_DISPLACE_ALL;
      jQuery(displaceButton).addClass(cssConstants.BUTTON_DISPLACE_ALL);
      jQuery(displaceButton).on('click', function(event) {
        scope.showDisplaceDialog(bar, false);
      });
      let copyDisplaceButton = document.createElement('button');
      copyDisplaceButton.title = langConstants.BUTTON_COPY_DISPLACE_ALL;
      jQuery(copyDisplaceButton).addClass(cssConstants.BUTTON_COPY_DISPLACE_ALL);
      jQuery(copyDisplaceButton).on('click', function(event) {
        scope.showDisplaceDialog(bar, true);
      });
      // bar.appendChild(displaceButton);
      // bar.appendChild(copyDisplaceButton);
    }
    bar.appendChild(deselectButton);
    return bar;
  }

  /**
   * Function for disabling/enabling all buttons in the editor.
   * @param hide
   */
  toggleButtons(hide) {
    let nodes = this._selectView.selectContent.querySelectorAll('button');
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].setAttribute('disabled', !!hide);
    }
  }

  showDeleteConfirmDialog(buttonBar) {
    const scope = this;
    let confirmLabel = document.createElement("p");
    confirmLabel.innerText = langConstants.CONFIRM_DELETE_ALL;
    const confirmButton = document.createElement("button");
    jQuery(confirmButton).addClass(cssConstants.ICON + " c4g-editor-dialog-confirm");
    jQuery(confirmButton).on('click', function(event) {
      scope.deleteAllElements();
    });
    const cancelButton = document.createElement("button");
    jQuery(cancelButton).addClass(cssConstants.ICON + " c4g-editor-dialog-cancel");
    jQuery(cancelButton).on('click', function(event) {
      scope.elementUiController.reloadSelectedFeatureView();
    });
    buttonBar.appendChild(confirmLabel);
    buttonBar.appendChild(confirmButton);
    buttonBar.appendChild(cancelButton);
  }

  deleteAllElements() {
    let arrFeatures = this.selectInteraction.getFeatures().getArray();
    // we have to use the same technique as in deselectAllElements
    while (arrFeatures.length !== 0) {
      for (let i = 0; i < arrFeatures.length; i++) {
        this._elementUiController.elementController.deleteElement(arrFeatures[i]);
      }
    }
  }

  deselectAllElements(noUpdate) {
    let arrFeatures = this.selectInteraction.getFeatures().getArray();
    // this is needed because the array is modified in place by the deselection
    // the for loop will half the length of the array by the time it completes
    // so the whole runtime will be log(n) * n, so that's not too bad
    while (arrFeatures.length !== 0) {
      for (let i = 0; i < arrFeatures.length; i++) {
        this._elementUiController.elementController.deselectElement(arrFeatures[i], true);
      }
    }
    if (!noUpdate) {
      this.updateFeatures();
    }
  }

  showDisplaceDialog(bar, withCopy) {
    const scope = this;
    let formContainer = document.createElement('div');
    let projectSelect = this._elementUiController.createProjectSelectionForDisplace();
    let confirmButton = document.createElement("button");
    confirmButton.className = "c4g-editor-dialog-confirm";
    confirmButton.title = langConstants.BUTTON_CONFIRM;
    let cancelButton = document.createElement("button");
    cancelButton.className = "c4g-editor-dialog-cancel";
    cancelButton.title = langConstants.BUTTON_CANCEL;
    jQuery(confirmButton).on('click', function(event) {
      scope.displaceAllElements(jQuery(projectSelect).val(), withCopy);
    });
    jQuery(cancelButton).on('click', function(event) {
      scope._elementUiController.reloadSelectedFeatureView();
    });
    formContainer.appendChild(projectSelect);
    formContainer.appendChild(confirmButton);
    formContainer.appendChild(cancelButton);
    bar.appendChild(formContainer);
  }

  displaceAllElements(projectId, withCopy) {
    let arrFeatures = this.selectInteraction.getFeatures().getArray();
    // we have to use the same technique as in deselectAllElements
    for (let i = 0; i < arrFeatures.length; i++) {
      let feature = arrFeatures[i];
      this._elementUiController.elementController.displaceElement(feature, feature.get('layerId'), withCopy, projectId);
    }
  }

  get elementUiController() {
    return this._elementUiController;
  }

  set elementUiController(value) {
    this._elementUiController = value;
  }

  get editor() {
    return this._editor;
  }

  get selectView() {
    return this._selectView;
  }
}