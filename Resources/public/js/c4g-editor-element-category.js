

export class ElementCategory {
  /**
   * Class properties
   */
  id;
  name;
  elementTypes;

  constructor(id, name, elementTypes) {
    this._id = id;
    this._name = name;
    this._elementTypes = elementTypes;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get elementTypes() {
    return this._elementTypes;
  }
}