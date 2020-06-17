const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require("webpack");
var path = require('path');
var config = {
  entry: {
    'c4g-editor': './Resources/public/js/c4g-editor.js',
    'c4g-backend-editor': './Resources/public/js/c4g-backend-editor.js'
  },
  mode: "development",
  output: {
    filename: '[name].js',
    path: path.resolve('./Resources/public/build/')
  },
  devtool: "inline-source-map",
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