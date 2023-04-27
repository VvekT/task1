const webpack = require('webpack')
const path = require('path')

const webpackDevConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|public\/)/,
        include: path.join(__dirname, 'src'),
        use:['babel-loader']
      }, {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: ['url-loader', 'file-loader']
      }, {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'file-loader'],
      }, {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['file-loader']
      }, {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_NODE_ENV': JSON.stringify(process.env.REACT_APP_NODE_ENV),
      'process.env.BROWSER': JSON.stringify(true)
    }),
  ]
}

module.exports = webpackDevConfig
