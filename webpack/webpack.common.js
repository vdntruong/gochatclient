const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/index.js'), 
    // path.resolve(__dirname, '../src/styles/sass/index.sass')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../web/public/js')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          // style-loader
          { loader: 'style-loader' },
          // css-loader
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          // sass-loader
          { loader: 'sass-loader' }
        ],
        exclude: [/node_modules/]
      }
    ]
  }
}
