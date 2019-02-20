export class ElementType {
  /**
   * Class properties
   */
  id;
  name;
  categoryId;
  styleId;

  constructor(id, name, categoryId, styleId) {
    this._id = id;
    this._name = name;
    this._categoryId = categoryId;
    this._styleId = styleId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get categoryId() {
    return this._categoryId;
  }

  get styleId() {
    return this._styleId;
  }
}