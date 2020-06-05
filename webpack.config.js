const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;
const distPath = path.resolve(__dirname, 'public');

const config = {
  entry: {
    main: ['@babel/polyfill', './src/js/index.js'],
  },
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: isDevelopment },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
              plugins: [require('cssnano'), require('autoprefixer')],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: isProduction,
      },
    }),
  ],
  optimization: isProduction
    ? {
        minimizer: [
          new OptimizeCssAssetsWebpackPlugin(),
          new TerserWebpackPlugin(),
        ],
      }
    : {},
  devServer: {
    port: 9000,
    compress: true,
    hot: isDevelopment,
    open: true,
  },
};

module.exports = config;
