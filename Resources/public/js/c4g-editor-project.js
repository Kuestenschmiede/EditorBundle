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
export class EditorProject {

  /**
   * Class properties
   */
  id;
  name;
  _permissions;
  _additionalData; // map for plugin fields

  constructor(id, name, permissions) {
    this._id = id;
    this._name = name;
    this._permissions = permissions;
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

  get permissions() {
    return this._permissions;
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