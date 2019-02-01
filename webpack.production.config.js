var path = require('path');
var config = {
  entry: './Resources/public/js/c4g-editor.js',
  mode: "production",
  output: {
    filename: 'c4g-editor.js',
    path: path.resolve('./Resources/public/build/')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
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