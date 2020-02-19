const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        // nó sẽ clean thư mục`dist/js & dist/css` trước khi build 
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist/bundle'],
        }),
        // nó sẽ minify file css
        new MiniCssExtractPlugin({
            filename: "css/index.css"
        }),
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
            filename: 'index.html'
        })
    ]
});
