const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack');

module.exports = {
    
  entry: './src/APP.tsx',
  mode:"development",
  devtool: 'eval',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
        { 
          test: /\.tsx?$/, 
          loader: 'ts-loader' 
        },
        {
  				use: ['style-loader', 'css-loader'],
  				test: /\.css$/
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        }
    ],

  },
  plugins: [
    new webpack.DefinePlugin({
        WEBGL_RENDERER: true,
        CANVAS_RENDERER: true,
        USELOCALSTORAGE: true,
        'typeof SHADER_REQUIRE': JSON.stringify(false),
        'typeof CANVAS_RENDERER': JSON.stringify(true),
        'typeof WEBGL_RENDERER': JSON.stringify(true),
      }),
      new HtmlWebpackPlugin({
        filename: 'play.html',
        template: './src/React/pages/play.html'
    }),
  ]
}