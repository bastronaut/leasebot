"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

// global css
// loaders.push({
// 	test: /\.css$/,
// 	exclude: /[\/\\]src[\/\\]/,
// 	loaders: [
// 		'style?sourceMap',
// 		'css'
// 	]
// });
// local scss modules
// loaders.push({
// 	test: /\.scss$/,
// 	exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
// 	loaders: [
// 		'style?sourceMap',
// 		'css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]',
// 		'postcss',
// 		'sass'
// 	]
// });

// local css modules
// loaders.push({
// 	test: /\.css$/,
// 	exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
// 	loaders: [
// 		'style?sourceMap',
// 		'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
// 	]
// });


// img modules // hack
loaders.push({
	test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
	loader: 'url-loader',
	query: {
		name: 'static/media/[name].[hash:8].[ext]',
	}
});

loaders.push({
	test: /\.css$/,
	loader: ExtractTextPlugin.extract("style-loader", "css-loader")
})

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.jsx' // your app's entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html'
		}),
		new ExtractTextPlugin("style.css", {
	      allChunks: true
	  })
	]
};
