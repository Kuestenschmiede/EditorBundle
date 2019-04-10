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
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "echo-loader",
        }, {
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.'),
          path.resolve('./../MapsBundle')
        ],
      }
    ]
  }
};

module.exports = config;