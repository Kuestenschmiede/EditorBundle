import {langConstantsGerman} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de";
import {langConstantsEnglish} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-en";
import {C4gLayer} from "./../../../../MapsBundle/Resources/public/js/c4g-layer";
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
/**
 * Class for creating all view elements that interact with a project. Handles all events that are fired on these view
 * elements.
 */
export class ProjectUIController {
  constructor(editor) {
    this.editor = editor;
    this.projectButtons = [];
    this.projectSelector = null;
  }

  /**
   * Creates and returns a button for editing a project. Attaches the click listener to the button.
   */
  createEditProjectButton() {
    const scope = this;
    let button = document.createElement("button");
    $(button).on('click', function (event) {
      scope.clearFeatureSelection();
      $(this).addClass("c4g-active");
      scope.projectButtons.forEach(function(element) {
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
  createEditProjectForm() {
    let editor = this.editor;
    // do nothing if no project is selected
    if (!editor.currentProject) {
      return;
    }
    let scope = this;
    let project = editor.currentProject;
    let request = new C4GAjaxRequest("con4gis/projectForm/" + project.id, "GET");
    request.addDoneCallback(function (data) {
      // show dialog in first tab
      editor.tabs[0].activate();
      let formContainer = document.createElement("div");
      formContainer.innerHTML = data.form;
      // create buttons
      let confirmButton = document.createElement("button");
      confirmButton.className = "c4g-editor-dialog-confirm";
      confirmButton.title = "Bestätigen";
      let cancelButton = document.createElement("button");
      cancelButton.className = "c4g-editor-dialog-cancel";
      cancelButton.title = "Abbrechen";
      // clear selectContent
      $(cancelButton).on('click', function(event) {
        scope.cancelDialog();
      });
      $(confirmButton).on('click', function(event) {
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
  editProject(container, project) {
    let scope = this;
    let request = new C4GAjaxRequest("con4gis/projectForm/" + project.id, "POST");
    // get data
    let data = {};
    let fields = container.getElementsByClassName('formdata');
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
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
      if (data.errorString) {
        // show the error above the form
        let label = document.createElement("span");
        label.classList.add("c4g-edit-project-error-label");
        label.innerHTML = data.errorString;
        scope.editor.selectView.selectContent.prepend(label);
      } else {
        scope.editor.selectView.reloadHelpContent();
        project.name = data.caption;
        for (let i = 0; i < scope.projectSelector.options.length; i++) {
          if (parseInt(scope.projectSelector.options[i].value, 10) === project.id) {
            scope.projectSelector.options[i].innerHTML = data.caption;
          }
        }
      }

    });
    request.execute();
  }

  /**
   * Creates and returns a button for deleting a project. Attaches the click listener to the button. Shows confirm dialog.
   */
  createDeleteProjectButton() {
    let scope = this;
    let button = document.createElement("button");
    button.className = "c4g-project-delete";
    $(button).on("click", function (event) {
      scope.clearFeatureSelection();
      $(this).addClass("c4g-active");
      scope.projectButtons.forEach(function(element) {
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

  createDeleteProjectForm() {
    let editor = this.editor;
    let scope = this;
    if (!editor.currentProject) {
      return;
    }
    let self = this;

    // show confirm dialog
    let confirmForm = document.createElement("div");
    confirmForm.innerHTML = "Wollen Sie dieses Projekt wirklich löschen?";
    let confirmButton = document.createElement("button");
    confirmButton.className = "c4g-editor-dialog-confirm";
    confirmButton.title = "Bestätigen";
    let cancelButton = document.createElement("button");
    cancelButton.className = "c4g-editor-dialog-cancel";
    cancelButton.title = "Abbrechen";
    // clear selectContent

    $(cancelButton).on('click', function(event) {
      scope.cancelDialog();
    });
    $(confirmButton).on("click", function(event) {
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
  deleteProject() {
    let project = this.editor.currentProject;
    let scope = this;
    let editor = this.editor;
    let request = new C4GAjaxRequest("con4gis/project", "DELETE");
    request.addRequestData(project);
    request.addDoneCallback(function(data) {
      if (data.success) {
        for (let i = 0; i < scope.editor.length; i++) {
          if (scope.editor[i] === project) {
            scope.editor.splice(i, 1);
          }
        }
        editor.selectView.reloadHelpContent();
        for (let i = 0; i < scope.projectSelector.options.length; i++) {
          if (parseInt(scope.projectSelector.options[i].value, 10) === project.id) {
            scope.projectSelector.remove(scope.projectSelector.options[i].index);
          }
        }
        // delete project layers and reload starboard
        scope.deleteLayersForProject(project.id);
        scope.editor.mapsInterface.updateStarboard();
        editor.currentProject = null;
        $(scope.projectSelector).change();
      }
    });
    request.execute();
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
    if (starboard.initialized) {
      const tab = starboard.plugins["customTab2"];
      console.log(tab.layers);
      console.log(layers);
    }
  }

  /**
   * Creates a selectbox with the selectable projects as options. Attaches an input listener to the selectbox.
   */
  createProjectSelect() {
    let selectBox,
      option,
      scope,
      oldValue,
      editor;

    scope = this;
    editor = this.editor;
    selectBox = document.createElement('select');
    selectBox.id = 'c4g_projects_select';
    option = document.createElement('option');
    option.text = langConstants.CHOOSE_PROJECT;
    option.value = "";
    option.disabled = true;
    option.selected = true;
    selectBox.options[0] = option;
    if (editor.projects) {
      for (let key = 0; key < editor.projects.length; key++) {
        option = document.createElement('option');
        option.text = editor.projects[key].name;
        option.value = editor.projects[key].id;
        selectBox.options[key+1] = option;
      }
    }

    oldValue = selectBox.value;
    $(selectBox).on('change', function(event) {
      let currentVal = parseInt(this.value, 10);
      for (let key in editor.projects) {
        if (editor.projects.hasOwnProperty(key)) {
          if (editor.projects[key].id === currentVal) {
            scope.changeProjectSelection(editor.projects[key]);
            oldValue = currentVal;
            break;
          }
        }
      }
    });
    this.projectSelector = selectBox;
    return selectBox;
  }

  /**
   * Event-Listener for the project selectbox. Handles the selection of a new project and updates the internal editor
   * structure as needed to reflect the change.
   */
  changeProjectSelection(newProject) {
    let editor = this.editor;
    editor.currentProject = newProject;
    // load project layers into editLayerGroup
    // remove old project layers from editLayerGroup
    let layers = editor.mapsInterface.getLayerArray();
    for (let key in layers) {
      if (layers.hasOwnProperty(key)) {
        let layer = layers[key];
        if ((layer.projectId === newProject.id)) {
          // add all vectorlayers from childs of layer to editLayerGroup
          editor.addLayersToGroup(layer, true);
          // show layer when it is in the project
          editor.mapsInterface.showLayer(layer.id);
          if (newProject.id === layer.projectId && layer.type === "projectLayer") {
            editor.projectLayer = layer;
          }
        } else {
          // hide non project layers
          editor.mapsInterface.hideLayer(layer.id);
        }
      }
    }
    $(editor.viewTriggerBar).show();
    $(editor.contentHeadline).show();
    // cancel any running form on project change
    this.cancelDialog();
    editor.toggleDrawContent(true);
    // update views etc. if there is data cached for the selected project
    // TODO auslagern in setupEditorFromCache oder so ähnlich
    const cachedSettings = this.editor.cacheController.getSettingsForProject(newProject.id);
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
    const projectOptions = this.projectSelector.options;
    for (let i = 0; i < projectOptions.length; i++) {
      if (parseInt(projectOptions[i].value, 10) === newProject.id) {
        this.projectSelector.options.selectedIndex = i;
      }
    }
    this.editor.cacheController.setSelectedProject(newProject.id);
  }

  /**
   * Creates and returns a button for creating a project. Attaches the click listener to the button.
   */
  createNewProjectButton() {
    let scope = this;
    let createButton = document.createElement('button');
    createButton.className = "c4g-project-create";
    // ".done" listener
    $(createButton).on('click', function(event) {
      scope.clearFeatureSelection();
      $(this).addClass("c4g-active");
      event.preventDefault();
      scope.projectButtons.forEach(function(element) {
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
  createNewProjectForm() {
    let url = "con4gis/project/";
    let scope = this;
    let editor = this.editor;
    let request = new C4GAjaxRequest(url);
    request.addDoneCallback(function(data) {
      // activate tab with select view
      editor.tabs[0].activate();
      if (editor.selectView.selectContentHeadline) {
        editor.selectView.selectContentHeadline.innerHTML = data.headline;
      }
      editor.selectView.selectContent.innerHTML = data.form;
      $(document.getElementById("send-dialog")).on('click', function(event) {
        scope.createNewProject(url);
      });
      $(document.getElementById("cancel-dialog")).on("click", function(event) {
        scope.cancelDialog();
      });
    });
    request.execute();
  }

  /**
   * Sends the project-create request to the server and handles the response.
   */
  createNewProject(url) {
    let editor = this.editor;
    let scope = this;
    let request = new C4GAjaxRequest(url, "POST");
    let fields = editor.selectView.selectContent.getElementsByClassName('formdata');
    let data = {};
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      data[field.name] = field.value;
    }

    request.addRequestData(data);
    request.addDoneCallback(function(data) {
      scope.loadNewProject(data);
    });
    request.execute();
  }

  /**
   * Loads a newly created project and changes the project selection to the created project.
   */
  loadNewProject(data) {
    let editor = this.editor;
    let name = data.name;
    let id = data.id;
    let newProject = {id: id, name: name};
    let option = document.createElement('option');
    let projectLayer = new C4gLayer(data.projectLayer);
    // add project layer to layer structure
    editor.mapsInterface.addToLayerArray(projectLayer);
    editor.mapsInterface.addToLayerIds(projectLayer.id);
    editor.mapsInterface.addToLayerChilds(projectLayer, projectLayer.pid);
    editor.mapsInterface.updateStarboard();
    editor.projectLayer = projectLayer;
    option.text = name;
    option.value = id;
    option.selected = true;
    this.projectSelector.add(option);
    editor.projects.push(newProject);
    this.changeProjectSelection(newProject);
    editor.selectView.reloadHelpContent();
    editor.toggleDrawContent();
  }

  /**
   * Cancels an input form and restores the default content in the editor select view.
   */
  cancelDialog() {
    this.editor.selectView.reloadHelpContent();
    this.projectButtons.forEach(function(element) {
      $(element).removeClass("c4g-active");
    });
  }

  /**
   * Creates a container for the UI buttons.
   */
  getButtonBar() {
    let projectDiv = document.createElement('div');
    projectDiv.className = 'c4g-projects-bar';
    projectDiv.appendChild(this.projectSelector);
    for (let i = 0; i < this.projectButtons.length; i++) {
      projectDiv.appendChild(this.projectButtons[i]);
    }
    return projectDiv;
  }

  /**
   * Unselects all currently selected features.
   */
  clearFeatureSelection() {
    this.editor.clearFeatureSelection();
  }
}