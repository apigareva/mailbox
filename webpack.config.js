const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    context: __dirname + '/app',
    entry: './app.js',
    output: {
        filename: 'build.js',
        library: 'app'
    },

    watch: true,

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': NODE_ENV
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin('css/[name].css', { allChunks: true })
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'],
        alias: {
            components: `${__dirname}/app/components`,
            common: `${__dirname}/app/common`
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
                include: __dirname + '/app',
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
                test:  /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
};
