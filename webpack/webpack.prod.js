const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackTemplate = require('html-webpack-template');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(scss|sass)$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['public/js/bundle.js'],
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css"
    }),
    new HtmlWebpackPlugin({
      title: 'GoChat Material UI',
      inject: false,
      template: webpackTemplate,
      meta: [{
        name: 'description',
        content: 'A better default template for html-webpack-plugin.'
      }],
      mobile: true,
      lang: 'en-US',
      bodyHtmlSnippet: '<div id="root"></div>',
      filename: 'index.html'
    })
  ]
});
