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
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import {cssConstants} from './c4g-editor-constant-css';
import {AlertHandler} from "./../../../../CoreBundle/Resources/public/js/AlertHandler";

/**
 * Class for creating all view elements that interact with a project. Handles all events that are fired on these view
 * elements.
 */
export class ProjectUIController {

  /**
   * Class properties
   */
  editor;
  projectButtons;
  projectSelector;
  projectController;
  projectBar;

  constructor(editor, projectController) {
    this._projectButtons = [];
    this._projectSelector = null;
    this._editor = editor;
    this._projectController = projectController;
    this._projectBar = null;

    this.deleteProject = this.deleteProject.bind(this);
    this.cancelDialog = this.cancelDialog.bind(this);
  }

  /**
   * Creates and returns a button for editing a project. Attaches the click listener to the button.
   */
  createEditProjectButton() {
    const scope = this;
    let button = document.createElement("button");
    jQuery(button).on('click', function (event) {
      scope.clearFeatureSelection();
      jQuery(this).addClass(cssConstants.ACTIVE);
      scope.projectButtons.forEach(function(element) {
        if (element !== this) {
          jQuery(element).removeClass(cssConstants.ACTIVE);
        }
      });
      scope.createEditProjectForm();
    });
    button.className = cssConstants.BUTTON_PROJECT_EDIT;
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
    if (!this.projectController.currentProject) {
      return;
    }
    let scope = this;
    let project = this.projectController.currentProject;
    let request = new C4GAjaxRequest("con4gis/projectForm/" + project.id, "GET");
    request.addDoneCallback(function (data) {
      // show dialog in first tab
      editor.tabs[0].activate();
      let formContainer = document.createElement("div");
      formContainer.innerHTML = data.form;
      // create buttons
      let confirmButton = document.createElement("button");
      confirmButton.className = cssConstants.EDITOR_DIALOG_CONFIRM;
      confirmButton.title = "Bestätigen";
      let cancelButton = document.createElement("button");
      cancelButton.className = cssConstants.EDITOR_DIALOG_CANCEL;
      cancelButton.title = "Abbrechen";
      // clear selectContent
      jQuery(cancelButton).on('click', function(event) {
        scope.cancelDialog();
      });
      jQuery(confirmButton).on('click', function(event) {
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
    let request = new C4GAjaxRequest("con4gis/projectForm/" + project.id + '/' + this.editor.configId, "POST");
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
        label.classList.add(cssConstants.PROJECT_ERROR_LABEL);
        label.innerHTML = data.errorString;
        scope.editor.selectView.selectContent.prepend(label);
      } else {
        scope.editor.selectView.reloadHelpContent();
        scope.projectController.editProject(project.id, data);
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
    button.className = cssConstants.BUTTON_PROJECT_DELETE;
    jQuery(button).on("click", function (event) {
      scope.clearFeatureSelection();
      jQuery(this).addClass(cssConstants.ACTIVE);
      scope.projectButtons.forEach(function(element) {
        if (element !== this) {
          jQuery(element).removeClass(cssConstants.ACTIVE);
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
    if (!this.projectController.currentProject) {
      return;
    }
    const ah = new AlertHandler();
    ah.showConfirmDialog(
      "Projekt löschen?",
      "Wollen Sie dieses Projekt wirklich löschen?",
      this.deleteProject,
      this.cancelDialog,
      "Bestätigen",
      "Abbrechen"
    );
  }

  /**
   * Sends the project-delete request to the server and handles the response.
   */
  deleteProject() {
    let project = this.projectController.currentProject;
    // activate first tab
    this.editor.tabs[0].activate();
    this.editor.selectView.reloadHelpContent();
    for (let i = 0; i < this.projectSelector.options.length; i++) {
      if (parseInt(this.projectSelector.options[i].value, 10) === project.id) {
        this.projectSelector.remove(this.projectSelector.options[i].index);
      }
    }
    // select "choose project"
    this.projectSelector.value = 0;
    this.projectController.deleteProject(project);
    if (window.c4gMapsHooks.project_deleted && window.c4gMapsHooks.project_deleted.length) {
      utils.callHookFunctions(window.c4gMapsHooks.project_deleted, {projectId: project.id})
    }
  }

  /**
   * Creates a selectbox with the selectable projects as options. Attaches an input listener to the selectbox.
   */
  createProjectSelect() {
    let selectBox,
      option,
      scope,
      oldValue;

    scope = this;
    const projects = this.projectController.projects;
    selectBox = document.createElement('select');
    selectBox.id = 'c4g_projects_select';
    option = document.createElement('option');
    option.text = langConstants.CHOOSE_PROJECT;
    option.value = "0";
    option.disabled = true;
    option.selected = true;
    selectBox.options[0] = option;
    if (projects) {
      for (let key = 0; key < projects.length; key++) {
        option = document.createElement('option');
        option.text = projects[key].name;
        option.value = projects[key].id;
        selectBox.options[key+1] = option;
      }
    }
    oldValue = selectBox.value;
    jQuery(selectBox).on('change', function(event) {
      let currentVal = parseInt(this.value, 10);
      for (let i = 0; i < projects.length; i++) {
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
  changeProjectSelection(newProject) {
    let editor = this.editor;
    this._projectController.selectProject(newProject);
    this.reloadProjectControls();
    if (window.c4gMapsHooks && window.c4gMapsHooks.project_changed && window.c4gMapsHooks.project_changed.length) {
      utils.callHookFunctions(window.c4gMapsHooks.project_changed, {newProject: newProject});
    }
    jQuery(editor.viewTriggerBar).show();
    jQuery(editor.contentHeadline).show();
    // cancel any running form on project change
    this.cancelDialog();
    editor.toggleDrawContent(true);
    // update views etc. if there is data cached for the selected project
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
    createButton.className = cssConstants.BUTTON_PROJECT_CREATE;
    // ".done" listener
    jQuery(createButton).on('click', function(event) {
      scope.clearFeatureSelection();
      jQuery(this).addClass(cssConstants.ACTIVE);
      event.preventDefault();
      scope.projectButtons.forEach(function(element) {
        if (element !== this) {
          jQuery(element).removeClass(cssConstants.ACTIVE);
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
    let scope = this;
    let editor = this.editor;
    let url = '/con4gis/project/';
    jQuery.ajax(url).done(function(data) {
      // activate tab with select view
      editor.tabs[0].activate();
      if (editor.selectView.selectContentHeadline) {
        editor.selectView.selectContentHeadline.innerHTML = data.headline;
      }
      editor.selectView.selectContent.innerHTML = data.form;
      jQuery(document.getElementById("send-dialog")).on('click', function(event) {
        scope.createNewProject();
      });
      jQuery(document.getElementById("cancel-dialog")).on("click", function(event) {
        scope.cancelDialog();
      });
    });
  }

  /**
   * Sends the project-create request to the server and handles the response.
   */
  createNewProject() {
    let editor = this.editor;
    let fields = editor.selectView.selectContent.getElementsByClassName('formdata');
    let data = {};
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      data[field.name] = field.value;
    }
    const scope = this;
    this._projectController.createProject(data, function(data) {
      scope.loadNewProject(data);
    });
  }

  /**
   * Loads a newly created project and changes the project selection to the created project.
   */
  loadNewProject(data) {
    let editor = this.editor;
    let name = data.name;
    let id = data.id;
    let newProject = {id: id, name: name, permissions: data.permissions};
    let option = document.createElement('option');
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
  cancelDialog() {
    if (this.editor.selectView) {
      this.editor.selectView.reloadHelpContent();
      this.projectButtons.forEach(function(element) {
        jQuery(element).removeClass(cssConstants.ACTIVE);
      });
    }
  }

  /**
   * Creates a container for the UI buttons.
   */
  getButtonBar() {
    let projectDiv = document.createElement('div');
    projectDiv.className = cssConstants.PROJECT_BUTTON_BAR;
    projectDiv.appendChild(this.projectSelector);
    for (let i = 0; i < this.projectButtons.length; i++) {
      if (this.checkPermissionForButton(this.projectButtons[i], this.projectController.currentProject)) {
        projectDiv.appendChild(this.projectButtons[i]);
      }
    }
    if (!this._projectBar) {
      this._projectBar = projectDiv;
    }
    return projectDiv;
  }

  reloadProjectControls() {
    let container = jQuery(this.editor.topToolbar).children('.'+ cssConstants.PROJECT_BUTTON_BAR)[0];
    container.replaceWith(this.getButtonBar());
  }

  checkPermissionForButton(button, project) {
    if (jQuery(button).hasClass(cssConstants.BUTTON_PROJECT_CREATE)) {
      // always show create project button
      return true;
    }
    if (!project) {
      // do not show button when no project is selected
      return false;
    }
    // return the write permission
    return project.permissions.project.write;
  }

  /**
   * Unselects all currently selected features.
   */
  clearFeatureSelection() {
    this.editor.clearFeatureSelection();
  }

  get editor() {
    return this._editor;
  }

  get projectController() {
    return this._projectController;
  }

  get projectButtons() {
    return this._projectButtons;
  }

  get projectSelector() {
    return this._projectSelector;
  }

  get projectBar() {
    return this._projectBar;
  }
}