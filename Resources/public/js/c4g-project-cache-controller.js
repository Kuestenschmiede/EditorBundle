import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";

export class ProjectCacheController {

  constructor(editor) {
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
  setup() {
    this.registerCenterListener();
    this.loadCache();
  }

  /**
   * Updates the stored project selection.
   * @param projectId
   */
  setSelectedProject(projectId) {
    this.objCache.selectedProject = projectId;
    this.saveCache();
  }

  /**
   * Returns the last cached selected project.
   */
  getSelectedProject() {
    if (this.currentCache) {
      return this.currentCache.selectedProject;
    }
  }

  /**
   * Does a lookup in the cache object and returns the stored settings.
   * @param projectId
   */
  getSettingsForProject(projectId) {
    if (this.currentCache) {
      return this.currentCache.projectStores[projectId];
    }
  }

  /**
   * Registeres for the map_center-hook to store the current center of the map for the current project.
   */
  registerCenterListener() {
    let scope = this;
    window.c4gMapsHooks = window.c4gMapsHooks || {};
    window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
    window.c4gMapsHooks.map_center_changed.push(function(center) {
      if (scope.editor.projectController.currentProject) {
        let id = scope.editor.projectController.currentProject.id;
        let arrCenter = [center[0], center[1]];
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
  saveSettingsForProject(projectId, key, value) {
    if (!this.objCache.projectStores[projectId]) {
      this.objCache.projectStores[projectId] = {};
    }
    this.objCache.projectStores[projectId][key] = value;
    this.saveCache();
  }

  /**
   * Saves the cache object to the browser cache.
   */
  saveCache() {
    utils.storeValue('projectCache', JSON.stringify(this.objCache));
  }

  /**
   * Loads the cache object from the browser cache.
   */
  loadCache() {
    let cachedItem = utils.getValue('projectCache');
    if (cachedItem) {
      this.fromCache = true;
      this.objCache = JSON.parse(cachedItem);
      // use currentCache property to serve the old cached data
      this.currentCache = jQuery.extend(true, {}, this.objCache);
    }
  }

}