const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'examples/src/index.html'),
  filename: './index.html',
});
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: path.join(__dirname, 'examples/src/index.jsx'),
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.styles\.s(a|c)ss$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: isDevelopment,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDevelopment,
          },
        },
      ],
    },
    {
      test: /\.s(a|c)ss$/,
      exclude: /\.styles.(s(a|c)ss)$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDevelopment,
          },
        },
      ],
    }],
  },
  plugins: [
    htmlWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  devServer: {
    port: 3000,
  },
};
