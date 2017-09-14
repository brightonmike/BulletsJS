const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: { 
		path: path.join(__dirname, 'public'), 
		filename: 'bullets.js' 
	},
	devtool: "sourcemap",
	devServer: {
		contentBase: './public'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-0'],
					plugins: [
						["transform-es2015-for-of", {
							"loose": true
						}]
					],
				}
			},
		]
	}
}