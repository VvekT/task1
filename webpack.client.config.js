const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackDevConfig = require('./webpack.dev.client.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

process.noDeprecation = true

let webpackConfig = {
  entry: {
    bundle: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-helmet',
      'prop-types',
      'history',
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: (process.env.REACT_APP_NODE_ENV === 'development') ? '[name].js' : '[name]_[chunkhash].js',
    chunkFilename: (process.env.REACT_APP_NODE_ENV === 'development') ? '[name].js' : '[name]_[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname
      }
    }),
    new HtmlWebpackPlugin({
        title: 'Willow SNOW',
        template: path.resolve(__dirname, './public/index.html'), // template file
        filename: 'index.html', // output file
        favicon: path.resolve(__dirname, ('./public/images/icon/favicon-32x32.png'))
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    static: path.join(__dirname, 'public'),
    allowedHosts: 'all'
  },
}

if (process.env.REACT_APP_NODE_ENV === 'production' || process.env.REACT_APP_NODE_ENV === 'staging') {
//   webpackConfig = merge(webpackConfig, webpackProdConfig)
    throw new Error('No configuration for production found!')
} else {
  webpackConfig = merge(webpackConfig, webpackDevConfig)
}

module.exports = webpackConfig
