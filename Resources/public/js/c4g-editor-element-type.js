/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
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