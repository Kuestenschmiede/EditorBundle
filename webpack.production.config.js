/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

var path = require('path');
var config = {
  entry: {
    'c4g-editor': './Resources/public/js/c4g-editor.js',
    'c4g-backend-editor': './Resources/public/js/c4g-backend-editor.js'
  },
  mode: "production",
  output: {
    filename: '[name].js',
    path: path.resolve('./Resources/public/build/')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.'),
          path.resolve('./Resources/public/js/components'),
          path.resolve('./../MapsBundle')
        ],
      }
    ]
  }
};

module.exports = config;