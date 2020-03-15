const webpack = require('webpack');

const config = {
    entry: './public/my_project.js',
    output: {
        path: __dirname,
        filename: './public/build/my_project.bundle.js'
    },
    devtool: 'source-map',
    module: {
    },
    plugins: [
    ],
    devServer: {
        index: './public/index.html',
        openPage: './public/index.html',
        open: true
    }
};

module.exports = config;
