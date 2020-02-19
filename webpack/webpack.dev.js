const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        }]
    },
    watch: true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'GoChat Material UI',
            inject: false,
            template: require('html-webpack-template'),
            meta: [{
                name: 'description',
                content: 'A better default template for html-webpack-plugin.'
            }],
            mobile: true,
            lang: 'en-US',
            bodyHtmlSnippet: '<div id="root"></div>',
        })
    ]
})
