const webpack = require("webpack");
const path = require("path");
var argv = require('yargs').argv;

let config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./receiver.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __SECURE__: argv.secure === true ? true : false
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
}

module.exports = config;