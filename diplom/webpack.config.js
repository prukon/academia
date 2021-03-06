'use strict';

let path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: [
              ["@babel/env", {
                targets: {
                  ie: "11",
                  firefox:"60",
                  chrome: "67",
                  safari:"11.1"
                },
                useBuiltIns: "usage"
              }]
            ],
            plugins: ["es6-promise"]
          }
        }
      }
    ]
  },
  // plugins: [
  //   new UglifyJsPlugin()
  // ]
};