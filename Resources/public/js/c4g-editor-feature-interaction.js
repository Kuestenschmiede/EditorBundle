
export class FeatureInteraction extends ol.interaction.Pointer {
  // TODO aktuell bleiben features ausgewählt. Dies könnten wir beibehalten. Oder es wird nur das aktuell ausgewählte
  // TODO feature im Editor dargestellt. Wenn wir es beibehalten, müssen wir einen Button "Auswahl aufheben" haben.
  // TODO was ist das intuitivste?
  constructor(collection, fnFilter, style) {
    super();
    this.collection = collection;
    // feature interactions are mapped in these by id => interaction object
    this.translateInteractions = {};
    this.selectListener = [];
  }

  handleDownEvent(event) {
    let map = event.map;
    let feature = map.forEachFeatureAtPixel(event.pixel, function(feature) {
      return feature;
    });
    if (feature) {
      if (!this.collectionContains(feature)) {
        this.collection.push(feature);
      }
      for (let i = 0; i < this.selectListener.length; i++) {
        // call every listener with the feature and the whole collection as parameters
        this.selectListener[i](feature, this.collection);
      }
      let translateInteraction = new ol.interaction.Translate({
        features: new ol.Collection([feature])
      });
      // TODO on translateend muss das feature/der layer aktualisiert werden
      map.addInteraction(translateInteraction);
      this.translateInteractions[feature.getId()] = translateInteraction;
      translateInteraction.handleEvent(event);
    }
    return !!feature;
  }

  handleDragEvent(event) {
    // do nothing
  }

  handleMoveEvent(event) {
    // do nothing
  }

  handleUpEvent(event) {
    let array = this.collection.getArray();
    for (let i = 0; i < array.length; i++) {
      let id = array[i].getId();
      this.translateInteractions[id].setActive(false);
    }
  }

  getFeatures() {
    return this.collection;
  }

  onSelect(fnCallback) {
    this.selectListener.push(fnCallback);
  }

  collectionContains(feature) {
    let arrFeatures = this.collection.getArray();
    for (let i = 0; i < arrFeatures.length; i++) {
      if (feature === arrFeatures[i]) {
        return true;
      }
    }
    return false;
  }

}