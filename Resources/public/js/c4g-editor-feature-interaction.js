export class FeatureInteraction extends ol.interaction.Pointer {

  constructor(collection, fnFilter, style) {
    super();
    this.collection = collection;
    // feature interactions are mapped in these by id => interaction object
    this.translateInteractions = {};
    this.selectListener = [];
    this.translateListener = [];
    this.styleFunction = style;
    this.styleMap = {};
    this._active = true;
  }

  /**
   * Selects a feature and adds a translateInteraction on mousedown, when there is a feature at the event.target.
   * @param event
   * @returns {boolean}
   */
  handleDownEvent(event) {
    if (this._active) {
      let map = event.map;
      let feature = map.forEachFeatureAtPixel(event.pixel, function(feature) {
        return feature;
      });
      if (feature) {
        this.addFeature(feature);
        let translateInteraction = this.addTranslateInteractionForFeature(feature, map);
        translateInteraction.handleEvent(event);
      }
      return !!feature;
    }
  }

  handleDragEvent(event) {
    // do nothing
  }

  handleMoveEvent(event) {
    // do nothing
  }

  /**
   * Deactivates all translate interactions on mouseup.
   * @param event
   */
  handleUpEvent(event) {
    let array = this.collection.getArray();
    for (let i = 0; i < array.length; i++) {
      let id = array[i].getId();
      this.translateInteractions[id].setActive(false);
    }
  }

  /**
   * Creates a translate interaction for a given feature on the given map. Callbacks in the translateListeners array
   * are called on the 'translateend' event when there occurred a real translation to the feature.
   * @param feature
   * @param map
   */
  addTranslateInteractionForFeature(feature, map) {
    const scope = this;
    let translateInteraction = new ol.interaction.Translate({
      features: new ol.Collection([feature])
    });
    map.addInteraction(translateInteraction);
    this.translateInteractions[feature.getId()] = translateInteraction;
    let changed = false;
    translateInteraction.on('translating', function(event) {
      changed = true;
    });
    translateInteraction.on('translateend', function(event) {
      // only apply a change if there was a real translation of the feature
      if (changed) {
        for (let i = 0; i < scope.translateListener.length; i++) {
          scope.translateListener[i](feature);
        }
        changed = false;
      }
    });
    return translateInteraction;
  }

  getFeatures() {
    return this.collection;
  }

  /**
   * Adds a callback to the selectListener array.
   * @param fnCallback
   */
  onSelect(fnCallback) {
    this.selectListener.push(fnCallback);
  }

  /**
   * Adds a callback to the translateListener array.
   * @param fnCallback
   */
  onTranslateend(fnCallback) {
    this.translateListener.push(fnCallback);
  }

  /**
   * Checks if the collection contains a given feature.
   * @param feature
   * @returns {boolean}
   */
  collectionContains(feature) {
    let arrFeatures = this.collection.getArray();
    for (let i = 0; i < arrFeatures.length; i++) {
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
  addFeature(feature) {
    if (!this.collectionContains(feature)) {
      this.collection.push(feature);
      this.styleMap[feature.get('styleId')] = feature.getStyle();
      feature.setStyle(this.styleFunction(feature));
      for (let i = 0; i < this.selectListener.length; i++) {
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
  removeFeature(feature) {
    feature.setStyle(this.styleMap[feature.get('styleId')]);
    this.collection.remove(feature);
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}