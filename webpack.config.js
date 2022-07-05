const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['react-refresh/babel'],
        },
        // exclude: /node_modules/,
        // include: [],
      },
      /* {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }, */
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './src'),
    },
    compress: true,
    hot: 'only',
    open: false,
  },
};
