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
import {cssConstants} from "./c4g-editor-constant-css";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {C4gLayer} from "./../../../../MapsBundle/Resources/public/js/c4g-layer";
import {langConstants} from "./c4g-editor-i18n";
import {RotationInteraction} from "./c4g-rotation-interaction";

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

    $(event.target.parentNode).children('button').each(function(idx, elem) {
      elem.setAttribute('disabled', true);
    });
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
    scope.selectInteraction.updateFeatures();
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
    $(confirmButton).addClass(cssConstants.ICON + " " + cssConstants.EDITOR_DIALOG_CONFIRM);
    $(confirmButton).on('click', function(event) {
      scope.handleDeleteFeatureEvent(featureId);
    });
    container.appendChild(confirmButton);
    const cancelButton = document.createElement("button");
    $(cancelButton).addClass(cssConstants.ICON + " " + cssConstants.EDITOR_DIALOG_CANCEL);
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
    editButtonElement.className = cssConstants.ICON + ' ' + cssConstants.BUTTON_EDIT_DATA;
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
          label.classList.add(cssConstants.DATA_ERROR_LABEL);
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
    copyButtonElement.className = cssConstants.ICON + ' ' + cssConstants.BUTTON_DUPLICATE_DATA;
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
    displaceButtonElement.className = cssConstants.ICON + ' ' + cssConstants.BUTTON_DISPLACE_DATA;
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
    let projectSelect = this.createProjectSelectionForDisplace();
    let withCopy = opt_copy;
    let formContainer = document.createElement("div");
    // create buttons
    let confirmButton = document.createElement("button");
    confirmButton.className = cssConstants.EDITOR_DIALOG_CONFIRM;
    confirmButton.title = "Bestätigen";
    let cancelButton = document.createElement("button");
    cancelButton.className = cssConstants.EDITOR_DIALOG_CANCEL;
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
    copyDisplaceButton.className = cssConstants.ICON + ' ' + cssConstants.BUTTON_DUPLICATE_DISPLACE_DATA;
    copyDisplaceButton.title = langConstants.DUPLICATE_AND_DELETE;
    copyDisplaceButton.setAttribute('feat_id', index);
    $(copyDisplaceButton).click(function(event) {
      scope.handleDisplaceFeatureEvent(event, true);
    });
    return copyDisplaceButton;
  }

  createRotateButton(index) {
    let scope = this;
    let rotateButtonElement = document.createElement('button');
    rotateButtonElement.className = cssConstants.ICON + ' ' + cssConstants.BUTTON_ROTATE_DATA;
    rotateButtonElement.title = langConstants.ROTATE_ELEMENT;
    rotateButtonElement.setAttribute('feat_id', index);
    $(rotateButtonElement).click(function(event) {
      // exchange interactions
      scope.editor.options.mapController.map.removeInteraction(scope.selectInteraction.selectInteraction);
      let rotateInteraction = new RotationInteraction(scope.selectInteraction.selectInteraction.getFeatures().item(event.target.getAttribute('feat_id')));
      scope.editor.options.mapController.map.addInteraction(rotateInteraction);
      // swap buttons
      let applyButton = document.createElement('button');
      $(applyButton).addClass(cssConstants.BUTTON_APPLY);
      $(applyButton).on('click', function (event) {
        // exchange interactions back
        scope.editor.options.mapController.map.removeInteraction(scope.selectInteraction.selectInteraction);
        scope.editor.options.mapController.map.addInteraction(rotateInteraction);
        applyButton.replaceWith(rotateButtonElement);
      });
      this.replaceWith(applyButton);
    });
    return rotateButtonElement;
  }

  showRotationControls(event) {
  }

  createDeselectButton(index) {
    let scope = this;
    let deselectButton = document.createElement('button');
    deselectButton.className = cssConstants.ICON + ' ' + cssConstants.BUTTON_DESELECT_DATA;
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
    revertButton.className = cssConstants.ICON + ' ' + cssConstants.BUTTON_REVERT_DATA;
    revertButton.title = langConstants.REVERT_ELEMENT;
    revertButton.setAttribute('feat_id', index);
    $(revertButton).click(function(event) {
      scope.elementController.revertElement(scope.selectInteraction.selectInteraction.getFeatures().item(event.target.getAttribute('feat_id')));
    });
    return revertButton;
  }

  createProjectSelectionForDisplace() {
    const scope = this;
    let projectSelect = document.createElement("select");
    let projects = scope.editor.projectController.projects;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i] === scope.editor.projectController.currentProject) {
        // moving the feature in the same project does not make sense
        continue;
      }
      let currentProject = projects[i];
      let option = document.createElement('option');
      option.value = currentProject.id;
      option.text = currentProject.name;
      projectSelect.options.add(option);
    }
    return projectSelect;
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