import {cssConstants} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {C4gLayer} from "./../../../../MapsBundle/Resources/public/js/c4g-layer";
import {langConstants} from "./c4g-editor-i18n";

/**
 * Class for creating all view elements that interact with elements.
 */
export class ElementUIController {

  editor;
  selectInteraction;
  elementController;

  constructor(editor, selectInteraction, elementController) {
    this._editor = editor;
    this._selectInteraction = selectInteraction;
    this._elementController = editor.elementController;
  }

  /**
   * Creates the button that triggers the move interaction of the feature.
   */
  createMoveButton(index) {
    let scope = this;
    let modifyButtonElement = document.createElement('button');
    modifyButtonElement.className = cssConstants.ICON + ' ' + cssConstants.EDITOR_FEATURE_MODIFY;
    modifyButtonElement.title = langConstants.EDITOR_FEATURE_MODIFY;
    modifyButtonElement.setAttribute('feat_id', index);
    $(modifyButtonElement).click(function(event) {
      scope.modifyFeatureFunction(event);
    });
    return modifyButtonElement;
  }

  modifyFeatureFunction(event) {
    let modifyFeature,
      featureGeometry,
      translateInteraction,
      modifyInteraction,
      modifyButton,
      applyButton;

    let editor = this.editor;
    let scope = this;
    let selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
    modifyButton = event.target;
    // get feature that should be modified
    modifyFeature = selectedFeatures.item(modifyButton.getAttribute('feat_id'));
    if (!modifyFeature || typeof modifyFeature.getGeometry !== 'function') {
      return false;
    }
    featureGeometry = modifyFeature.getGeometry();
    translateInteraction = false;
    modifyInteraction = false;
    // add interactions to map
    if (!(featureGeometry instanceof ol.geom.LineString)) {
      translateInteraction = new ol.interaction.Translate({
        features: new ol.Collection([modifyFeature])
      });
      scope.editor.options.mapController.map.addInteraction(translateInteraction);
    }
    if (!(featureGeometry instanceof ol.geom.Point)) {
      modifyInteraction = new ol.interaction.Modify({
        features: new ol.Collection([modifyFeature])
      });
      scope.editor.options.mapController.map.addInteraction(modifyInteraction);
    }
    this.selectInteraction.selectInteraction.setActive(false);
    // add apply button
    applyButton = document.createElement('button');
    applyButton.className = cssConstants.ICON + ' ' + cssConstants.EDITOR_FEATURE_APPLY;
    applyButton.title = langConstants.EDITOR_FEATURE_APPLY;
    applyButton.setAttribute('feat_id', modifyButton.getAttribute('feat_id'));
    $(applyButton).click(function(event) {
      scope.applyFeatureModification(translateInteraction, modifyInteraction, modifyFeature, modifyButton, applyButton);
    });
    modifyButton = modifyButton.parentNode.replaceChild(applyButton, modifyButton);
  } // end of "modifyFeatureFunction()"


  applyFeatureModification(translateInteraction, modifyInteraction, modifyFeature, modifyButton, applyButton) {
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
    applyButton.parentNode.replaceChild(modifyButton, applyButton);
    scope.editor.applyFeatureModification = false;
    // call featurehandler
    scope.editor.featureHandler.modifyFeature(modifyFeature, change);
    // re-render list
    scope.selectInteraction.fnHandleSelection(this.selectInteraction.selectInteraction.getFeatures());
  }

  /**
   * Creates the button to delete a feature.
   */
  createDeleteButton(index) {
    let scope = this;
    let deleteButtonElement = document.createElement('button');
    deleteButtonElement.className = cssConstants.ICON + ' ' + cssConstants.EDITOR_FEATURE_DELETE;
    deleteButtonElement.title = langConstants.EDITOR_FEATURE_DELETE;
    deleteButtonElement.setAttribute('feat_id', index);
    $(deleteButtonElement).click(function(event) {
      // scope.deleteFeature(event);
      scope.showDeleteDialog(event.target.getAttribute('feat_id'));
    });
    return deleteButtonElement;
  }

  showDeleteDialog(featureId) {
    const scope = this;
    const container = document.createElement("div");
    let deleteHintLabel = document.createElement("p");
    deleteHintLabel.innerText = langConstants.EDITOR_FEATURE_DELETE_QUESTION;
    container.appendChild(deleteHintLabel);
    const confirmButton = document.createElement("button");
    $(confirmButton).addClass(cssConstants.ICON + " c4g-editor-dialog-confirm");
    $(confirmButton).on('click', function(event) {
      scope.handleDeleteFeatureEvent(featureId);
    });
    container.appendChild(confirmButton);
    const cancelButton = document.createElement("button");
    $(cancelButton).addClass(cssConstants.ICON + " c4g-editor-dialog-cancel");
    $(cancelButton).on('click', function(event) {
      scope.reloadSelectedFeatureView();
    });
    container.appendChild(cancelButton);
    this.addToEditor(container);
  }

  handleDeleteFeatureEvent(featureIndex) {
    let selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
    let deleteFeature = selectedFeatures.item(featureIndex);
    this._elementController.deleteElement(deleteFeature);
  }

  /**
   * Creates the button to edit a feature.
   */
  createEditButton(index) {
    let scope = this;
    let editButtonElement = document.createElement('button');
    editButtonElement.className = cssConstants.ICON + ' c4g-btn-edit-data';
    editButtonElement.title = langConstants.METADATA_EDIT;
    editButtonElement.setAttribute('feat_id', index);
    $(editButtonElement).click(function(event) {
      scope.handleEditFeatureEvent(event);
    });
    return editButtonElement;
  }

  handleEditFeatureEvent(event) {
    let scope = this;
    let selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
    let feature = selectedFeatures.item(event.target.getAttribute('feat_id'));
    let layerId = feature.get('layerId');
    let url = "/con4gis/projectDataForm/" + this.editor.projectController.currentProject.id + "/" + layerId;
    let request = new C4GAjaxRequest(url);
    request.addDoneCallback(function(data) {
      scope.showEditDataDialog(data.headline, data.form, url, feature);
    });
    request.execute();
  }

  showEditDataDialog(headline, form, url, feature) {
    let scope = this;
    let container = document.createElement("div");
    container.innerHTML = form;
    // update view
    if (this.editor.selectView.selectContentHeadline) {
      this.editor.selectView.selectContentHeadline.innerHTML = headline;
    }
    this.addToEditor(container, true);
    // set click listener
    jQuery(document.getElementById("send-dialog")).on('click', function(event) {
      let request = new C4GAjaxRequest(url, "POST");
      let fields = container.getElementsByClassName('formdata');
      let data = {};
      for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
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
      request.addDoneCallback(function(data) {
        // check if there was an error
        if (data.errorString) {
          // show the error above the form
          let label = document.createElement("span");
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
    jQuery(document.getElementById("cancel-dialog")).on("click", function(event) {
      scope.reloadSelectedFeatureView();
    });
  }

  /**
   * Creates the button to copy a feature.
   */
  createCopyButton(index) {
    let scope = this;
    let copyButtonElement = document.createElement('button');
    copyButtonElement.className = cssConstants.ICON + ' ' + ' c4g-btn-duplicate-data';
    copyButtonElement.title = langConstants.DUPLICATE_ELEMENT;
    copyButtonElement.setAttribute('feat_id', index);
    $(copyButtonElement).click(function(event) {
      scope.handleCopyFeatureEvent(event);
    });
    return copyButtonElement;
  }

  handleCopyFeatureEvent(event) {
    let scope = this;
    let selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
    let feature = selectedFeatures.item(event.target.getAttribute('feat_id'));
    this.elementController.copyElement(feature);
    scope.editor.spinner.show();
  }

  /**
   * Creates the button to displace a feature.
   */
  createDisplaceButton(index) {
    let scope = this;
    let displaceButtonElement = document.createElement('button');
    displaceButtonElement.className = cssConstants.ICON + ' ' + ' c4g-btn-displace-data';
    displaceButtonElement.title = langConstants.DISPLACE_ELEMENT;
    displaceButtonElement.setAttribute('feat_id', index);
    $(displaceButtonElement).click(function(event) {
      scope.handleDisplaceFeatureEvent(event, false);
    });
    return displaceButtonElement;
  }

  handleDisplaceFeatureEvent(event, opt_copy) {
    let scope = this;
    let selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
    let feature = selectedFeatures.item(event.target.getAttribute('feat_id'));
    let layerId = feature.get('layerId');
    let projectSelect = document.createElement("select");
    let projects = scope.editor.projectController.projects;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i] === scope.editor.currentProject) {
        // moving the feature in the same project does not make sense
        continue;
      }
      let currentProject = projects[i];
      let option = document.createElement('option');
      option.value = currentProject.id;
      option.text = currentProject.name;
      projectSelect.options.add(option);
    }
    let withCopy = opt_copy;
    let formContainer = document.createElement("div");
    // create buttons
    let confirmButton = document.createElement("button");
    confirmButton.className = "c4g-editor-dialog-confirm";
    confirmButton.title = "Bestätigen";
    let cancelButton = document.createElement("button");
    cancelButton.className = "c4g-editor-dialog-cancel";
    cancelButton.title = "Abbrechen";
    // clear selectContent
    $(cancelButton).on('click', function(event) {
      scope.reloadSelectedFeatureView();
    });
    $(confirmButton).on('click', function(event) {
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
  createCopyAndDisplaceButton(index) {
    let scope = this;
    let copyDisplaceButton = document.createElement('button');
    copyDisplaceButton.className = cssConstants.ICON + ' ' + ' c4g-btn-duplicate-displace-data';
    copyDisplaceButton.title = langConstants.DUPLICATE_AND_DELETE;
    copyDisplaceButton.setAttribute('feat_id', index);
    $(copyDisplaceButton).click(function(event) {
      scope.handleDisplaceFeatureEvent(event, true);
    });
    return copyDisplaceButton;
  }

  createRotateButton(index) {
    let scope = this;
    let displaceButtonElement = document.createElement('button');
    displaceButtonElement.className = cssConstants.ICON + ' ' + ' c4g-btn-rotate-data';
    displaceButtonElement.title = langConstants.ROTATE_ELEMENT;
    displaceButtonElement.setAttribute('feat_id', index);
    $(displaceButtonElement).click(function(event) {
      scope.showRotationControls(event, false);
    });
    return displaceButtonElement;
  }

  showRotationControls(event) {
    const scope = this;
    let selectedFeatures = this.selectInteraction.selectInteraction.getFeatures();
    let feature = selectedFeatures.item(event.target.getAttribute('feat_id'));
    let controlContainer = document.createElement('div');
    let degreeSelect = document.createElement('select');
    let applyButton = document.createElement('button');
    for (let i = 30; i <= 360; i += 30) {
      let option = document.createElement('option');
      option.value = i;
      option.text = i + '°';
      degreeSelect.options.add(option);
    }
    $(applyButton).on('click', function(event) {
      scope.elementController.rotateElement(feature, $(degreeSelect).val());
    });
    controlContainer.appendChild(degreeSelect);
    controlContainer.appendChild(applyButton);
    this.addToEditor(controlContainer);
  }

  createDeselectButton(index) {
    let scope = this;
    let deselectButton = document.createElement('button');
    deselectButton.className = cssConstants.ICON + ' ' + ' c4g-btn-deselect-data';
    deselectButton.title = langConstants.DESELECT_ELEMENT;
    deselectButton.setAttribute('feat_id', index);
    $(deselectButton).click(function(event) {
      scope.elementController.deselectElement(scope.selectInteraction.selectInteraction.getFeatures().item(event.target.getAttribute('feat_id')));
    });
    return deselectButton;
  }

  createRevertButton(index) {
    let scope = this;
    let revertButton = document.createElement('button');
    revertButton.className = cssConstants.ICON + ' ' + ' c4g-btn-revert-data';
    revertButton.title = langConstants.REVERT_ELEMENT;
    revertButton.setAttribute('feat_id', index);
    $(revertButton).click(function(event) {
      scope.elementController.revertElement(scope.selectInteraction.selectInteraction.getFeatures().item(event.target.getAttribute('feat_id')));
    });
    return revertButton;
  }

  /**
   * Reloads the overview of the selected features and the possible operations.
   */
  reloadSelectedFeatureView() {
    this.selectInteraction.updateFeatures();
  }

  /**
   * Appends a given container to the editor selectContent container.
   * @param container
   * @param clear
   */
  addToEditor(container, clear = false) {
    if (clear) {
      this.selectInteraction.selectView.selectContent.innerHTML = "";
    }
    this.selectInteraction.selectView.selectContent.appendChild(container);
  }


  get editor() {
    return this._editor;
  }

  get selectInteraction() {
    return this._selectInteraction;
  }

  get elementController() {
    return this._elementController;
  }
}