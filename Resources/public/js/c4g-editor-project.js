export class EditorProject {

  /**
   * Class properties
   */
  id;
  name;
  _additionalData; // map for plugin fields

  constructor(id, name) {
    this._id = id;
    this._name = name;
    this._additionalData = {};
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get additionalData() {
    return this._additionalData;
  }

  set additionalData(value) {
    this._additionalData = value;
  }

  /**
   * Adds a key/value field to addionalData
   * @param key
   * @param value
   */
  addData(key, value) {
    this._additionalData[key] = value;
  }
}