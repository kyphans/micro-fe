const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    },
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 3003
  },
  output: {
    publicPath: 'http://localhost:3003/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote',
      library: { type: 'var', name: 'remote' },
      filename: 'remoteEntry.js',
      exposes: {
        './ReactWebpack': './src/ReactWebpack'
      },
      shared: {
        '@stitches/react': {
          singleton: true,
          eager: true, // Ensure eager loading is set to true
          requiredVersion: false
        },
        react: {
          singleton: true,
          eager: true,
          version: '0',
          requiredVersion: false
        },
        'react-dom': {
          requiredVersion: false,
          eager: true,
          singleton: true,
          version: '0'
        },
        '@repo/ui': {
          singleton: true,
          requiredVersion: false
        },
        '@repo/data-context': {
          singleton: true,
          requiredVersion: false
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
