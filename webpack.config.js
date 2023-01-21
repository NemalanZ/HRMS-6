const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const publicPath = '/';

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: publicPath,
    assetModuleFilename: "assets/img/[hash][ext][query]"
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: "./index.html",
      favicon: "./public/favicon.png",
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },

      {
        test: /\.(css|scss)$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },


      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },

      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        type: "asset",
      },
    ]
  },

  devServer: {
    hot: true,
    port: 8001,
    open: true,
    historyApiFallback: true,
    historyApiFallback: {
      disableDotRule: true
    },
  },

  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },

  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },
  // proxy: {
  //   '/api': 'http://localhost:3000',
  //   changeOrigin: true,
  // },
}

