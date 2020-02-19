const path = require('path');

module.exports = {
    entry: ['./src/js/index.js', './src/sass/index.scss'],
    output: {
        filename: 'js/index.js',
        path: path.resolve(__dirname, '../../web/dist')
    },
    module: {
        rules: [{           
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: [/node_modules/] 
        }]
    }
}
