var path = require('path');

var webpack = require('webpack');

module.exports = {
	entry: './src/main.jsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		loaders: [
			{
				test: /\.sass$/,
				loaders: [
					'style-loader',
					'css-loader?modules=true&localIdentName=[name]__[local]--[hash:base64:6]&minimize=true'
				]
			},
			{
				test: /\.sass$/,
				loader: "sass-loader"
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(js|jsx)$/,
			    exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			}
		]
	},
	/* production build */
	/*plugins:[
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	]*/

};