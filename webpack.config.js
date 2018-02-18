const path = require('path');
const webpack = require('webpack');

const publicFolder = `${__dirname}/public`;

module.exports = {
	devtool: 'source-map',
	entry: [path.resolve(__dirname, './src/index.js')],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
			},
		],
	},
	output: {
		path: publicFolder,
		filename: './js/bundle.min.js',
		publicPath: '/',
	},
	node: {
		fs: 'empty',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		contentBase: publicFolder,
		port: 8080,
		stats: 'errors-only',
		historyApiFallback: true,
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
			sourceMap: true,
		}),
	],
};
