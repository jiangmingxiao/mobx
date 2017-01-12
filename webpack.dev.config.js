var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/js/ts.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle_[hash].js',
    },
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx' , '.tsx'],
        modulesDirectories: ['node_modules'],
    },
    node: {
        fs: 'empty',
    },
    /*eslint: {
        configFile: path.join(__dirname, '.eslintrc'),
    },*/
    module: {
       /* preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint'
            },
        ],*/
        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', 'less' , 'postcss'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel'],
            },
            {   test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.woff\d?(\?.+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff',
            },
            {
                test: /\.ttf(\?.+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream',
            },
            {
                test: /\.eot(\?.+)?$/,
                loader: 'url?limit=10000',
            },
            {
                test: /\.svg(\?.+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml',
            },
            {
                test: /\.png$/,
                loader: 'url?limit=10000&mimetype=image/png',
            },
            {
                test: /\.gif$/,
                loader: 'url?limit=10000&mimetype=image/gif'
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true
        }),
        new webpack.ProvidePlugin({
            React:"react"
        })
    ],
    postcss: function () {
        return [
            require('postcss-import')({ // Import all the css files...
                glob: true,
                root:'node_modules',
                path:['node_modules','src/css'],
                onImport: function (files) {
                    files.forEach(this.addDependency); // ...and add dependecies from the main.css files to the other css files...
                }.bind(this) // ...so they get hot–reloaded when something changes...
            }),
            require('postcss-focus')(), // ...add a :focus to ever :hover...
            require('autoprefixer')({ // ...and add vendor prefixes...
                browsers: ['last 2 versions', 'IE > 8'] // ...supporting the last 2 major browser versions and IE 8 and up...
            }),
            require('precss'),
            require('postcss-reporter')({ // This plugin makes sure we get warnings in the console
                clearMessages: true
            })
        ];
    },
};
