const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
      filename: './js/[name].[chunkhash].js',
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      minRatio: 0.8,
    }),
    new MiniCssExtractPlugin({
        filename: "./css/[name].[chunkhash].css",
    }),  
  ],
});