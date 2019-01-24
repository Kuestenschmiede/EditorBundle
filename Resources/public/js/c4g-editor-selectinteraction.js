import {ElementUIController} from "./c4g-element-ui-controller";
import {langConstants} from "./c4g-editor-i18n";
import {FeatureInteraction} from "./c4g-editor-feature-interaction";

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
    let selectCollection = new ol.Collection();
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
          if (typeof styleArray[0].getImage === 'function' && styleArray[0].getImage() instanceof ol.style.Icon) {
            styleRadius = 5;
          } else {
            styleRadius = parseInt(styleArray[0].getImage().getRadius(), 10) + 4;
          }
        }

        // create border style
        styleArray.push(
          new ol.style.Style({
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
          })
        );
        return styleArray;
      }
    };
    //     return false;
    //   }
    // }); // selectInteraction
    //
    // let selectedFeatures = selectInteraction.getFeatures();
    //
    let selectInteraction = new FeatureInteraction(selectCollection, null, styleFn);
    selectInteraction.onSelect(function(feature, collection) {
      scope.fnHandleSelection(collection);
    });
    let selectBoxInteraction = new ol.interaction.DragBox({condition: ol.events.condition.shiftKeyOnly});

    selectBoxInteraction.on('boxend', function (e) {
      var extent = selectBoxInteraction.getGeometry().getExtent();

      editor.editLayerGroup.getLayers().forEach(function (layerGroup) {
        layerGroup.getLayers().forEach(function(layer) {
          layer.getSource().forEachFeatureIntersectingExtent(extent, function (feature) {
            if (layer.getStyleFunction()) {
              feature.setStyle(layer.getStyleFunction());
            }
            // check if the feature belongs to the current project
            if (feature.get('projectId') === scope.editor.projectController.currentProject.id) {
              // select feature
              selectInteraction.handleDownEvent(e.mapBrowserEvent);
            }
          })
        });
      });
    });

    // clear selection when drawing a new box and when clicking on the map
    selectBoxInteraction.on('boxstart', function (e) {
      // selectedFeatures.clear();
      // scope.fnHandleSelection(new ol.Collection());
    });

    this.selectInteraction = selectInteraction;
    this.selectBoxInteraction = selectBoxInteraction;
    return {selectInteraction: selectInteraction, boxInteraction: selectBoxInteraction};
  }

  addModificationInteractions(modifyFeature) {
    let featureGeometry = modifyFeature.getGeometry();
    let translateInteraction = false;
    let modifyInteraction = false;
    // add interactions to map
    // if (!(featureGeometry instanceof ol.geom.LineString)) {
      translateInteraction = new ol.interaction.Translate({
        features: new ol.Collection([modifyFeature])
      });
      this.editor.options.mapController.map.addInteraction(translateInteraction);
    // }

    if (!(featureGeometry instanceof ol.geom.Point)) {
      modifyInteraction = new ol.interaction.Modify({
        features: new ol.Collection([modifyFeature])
      });
      this.editor.options.mapController.map.addInteraction(modifyInteraction);
    }
    // this.selectInteraction.setActive(false);
    // add apply button
    // this.applyFeatureModification(translateInteraction, modifyInteraction, modifyFeature);

  }

  // TODO muss noch umgebaut werden, muss aus der feature interaction heraus on translateend aufgerufen werden
  applyFeatureModification(translateInteraction, modifyInteraction, modifyFeature) {
    let change = {};
    let scope = this;
    let editor = this.editor;
    if (translateInteraction) {
      // translate interaction for geometries != LineString
      translateInteraction.setActive(false);
      editor.options.mapController.map.removeInteraction(translateInteraction);
      translateInteraction = false;
      if (modifyFeature.getGeometry() instanceof ol.geom.Point) {
        let coordinates = ol.proj.toLonLat(modifyFeature.getGeometry().getCoordinates());
        change['locgeox'] = coordinates[0];
        change['locgeoy'] = coordinates[1];
      } else if (modifyFeature.getGeometry() instanceof ol.geom.Circle) {
        change['radius'] = modifyFeature.getGeometry().getRadius();
      } else {
        let geoJson = new ol.format.GeoJSON();
        change['geojson'] = geoJson.writeFeature(modifyFeature);
      }
    }
    if (modifyInteraction) {
      // modify interaction for point geometries
      editor.options.mapController.map.removeInteraction(modifyInteraction);
      modifyInteraction.setActive(false);
      modifyInteraction = false;
      if (modifyFeature.getGeometry() instanceof ol.geom.Point) {
        let coordinates = ol.proj.toLonLat(modifyFeature.getGeometry().getCoordinates());
        change['locgeox'] = coordinates[0];
        change['locgeoy'] = coordinates[1];
      } else if (modifyFeature.getGeometry() instanceof ol.geom.Circle) {
        let coordinates = ol.proj.toLonLat(modifyFeature.getGeometry().getCenter());
        change['locgeox'] = coordinates[0];
        change['locgeoy'] = coordinates[1];
        change['radius'] = modifyFeature.getGeometry().getRadius();
      } else {
        let geoJson = new ol.format.GeoJSON();
        change['geojson'] = geoJson.writeFeature(modifyFeature);
      }
    }
    // update feature measurements
    modifyFeature.set('measuredLength', utils.measureGeometry(modifyFeature.getGeometry(), true));
    if (modifyFeature.getGeometry() instanceof ol.geom.Polygon) {
      modifyFeature.set('measuredArea', utils.measureGeometry(modifyFeature.getGeometry()));
    }
    if (modifyFeature.getGeometry() instanceof ol.geom.Circle) {
      modifyFeature.set('measuredRadius', utils.measureGeometry(modifyFeature.getGeometry()));
    }

    this.selectInteraction.selectInteraction.setActive(true);
    // applyButton.parentNode.replaceChild(modifyButton, applyButton);
    this.editor.applyFeatureModification = false;
    // call featurehandler
    this.editor.featureHandler.modifyFeature(modifyFeature, change);
    // re-render list
    scope.selectInteraction.fnHandleSelection(this.selectInteraction.selectInteraction.getFeatures());
  }

  /**
   * Removes the given feature from the selected features.
   * @param feature
   */
  removeSelectedFeature(feature) {
    this.selectInteraction.removeFeature(feature);
  }

  removeSelectedFeatureById(featureId) {
    let feature = this.selectInteraction.getFeatures().item(featureId);
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
          if (feature.getGeometry() instanceof ol.geom.Point) {
            let coordinates = feature.getGeometry().getCoordinates();
            coordinates = ol.coordinate.add(coordinates, [10, 10]);
            feature.setGeometry(new ol.geom.Point(coordinates));
            coordinates = ol.proj.toLonLat(coordinates);
            change['locgeox'] = coordinates[0];
            change['locgeoy'] = coordinates[1];
          } else if (feature.getGeometry() instanceof ol.geom.Circle) {
            let center = feature.getGeometry().getCenter();
            center = ol.coordinate.add(center, [30, 30]);
            feature.setGeometry(new ol.geom.Circle(center, feature.getGeometry().getRadius()));
            center = ol.proj.toLonLat(center);
            change['locgeox'] = center[0];
            change['locgeoy'] = center[1];
          } else {
            feature.getGeometry().translate(30, 30);
            let geoJson = new ol.format.GeoJSON();
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
    var headlineElement,
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
        for (let i = 0; i < featureCount; i += 1) {
          selectedFeature = selectedFeatures.item(i);
          headlineElement = document.createElement('h4');
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
          headlineElement.appendChild(inputNameElement);
          // add modify button
          headlineElement.appendChild(scope._elementUiController.createMoveButton(i));
          // add delete button
          headlineElement.appendChild(scope._elementUiController.createDeleteButton(i));
          // add edit button
          headlineElement.appendChild(scope._elementUiController.createEditButton(i));
          // add copy button
          headlineElement.appendChild(scope._elementUiController.createCopyButton(i));
          // add displace button
          headlineElement.appendChild(scope._elementUiController.createDisplaceButton(i));
          // add copy&displace button
          headlineElement.appendChild(scope._elementUiController.createCopyAndDisplaceButton(i));
          // add rotation button
          headlineElement.appendChild(scope._elementUiController.createRotateButton(i));
          // add deselect button
          headlineElement.appendChild(scope._elementUiController.createDeselectButton(i));
          scope.selectView.selectContent.appendChild(headlineElement);
          if (selectedFeature.get('measuredLength')) {
            let label = "";
            if (selectedFeature.getGeometry() instanceof ol.geom.LineString) {
              label = langConstants.LENGTH;
            } else if (selectedFeature.getGeometry() instanceof ol.geom.Polygon){
              label = langConstants.PERIMETER;
            } else if (selectedFeature.getGeometry() instanceof ol.geom.Circle){
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
  }; // end of "fnHandleSelection"


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