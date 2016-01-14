'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./public/scripts/main.js",
    output: {
        filename: "public/bundle.js"
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test:   /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};