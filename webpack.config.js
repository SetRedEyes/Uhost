const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/shared.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'), 
    assetModuleFilename: './[name][ext]'
  },
  devServer: {
    static: './build',
    open: true,
    compress: true,
    port: 4000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/customers/customers.html',
      filename: 'customers.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/packages/packages.html',
      filename: 'packages.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/start-hosting/start-hosting.html',
      filename: 'start-hosting.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/images',
          to: './'
        },
        {
          from: './src/favicon.png',
          to: './'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'build.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }]
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      }
    ]
  }
}
