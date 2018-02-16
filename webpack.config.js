const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicFolder = `${__dirname}/public`;

module.exports = {
  devtool: 'source-map',
  entry: [path.resolve(__dirname, './src/index.js')],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //     publicPath: publicFolder,
      //   }),
      // },
    ],
  },
  output: {
    path: publicFolder,
    filename: './js/bundle.min.js',
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
  },
  plugins: [
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
    // new ExtractTextPlugin({
    //   filename: './css/main.css',
    //   disable: false,
    //   allChunks: true,
    // }),
  ],
};
