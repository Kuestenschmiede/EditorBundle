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
export class ElementCategory {
  /**
   * Class properties
   */
  _id;
  _name;
  _elementTypes;
  _visible;

  constructor(id, name, elementTypes) {
    this._id = id;
    this._name = name;
    this._elementTypes = elementTypes;
    this._visible = true;
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

  get visible() {
    return this._visible;
  }

  set visible(value) {
    this._visible = value;
  }
}