const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        build: path.join(__dirname, 'app/app.js'),
        vendors: ['angular', 'angular-ui-router', 'angular-material', 'restangular']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    watch: true,

    devtool: NODE_ENV === 'development' ? 'source-map' : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': NODE_ENV
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'app/index.html'),
            chunks: ['build', 'vendors'],
            filename: 'index.html',
        }),
        new ExtractTextPlugin('css/[name].css', { allChunks: true })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'],
        alias: {
            components: path.join(__dirname, 'app/components'),
            common: path.join(__dirname, 'app/common')
        }
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplate: ['*-loader'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'app'),
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|mp3|wav|ico)$/,
                loader: 'url?limit=500000'
            },
            {
                test:  /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
};
