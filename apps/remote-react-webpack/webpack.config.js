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
    port: 3002
  },
  output: {
    publicPath: 'http://localhost:3002/'
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
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remoteReact',
      library: { type: 'var', name: 'remoteReact' },
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
        tailwindcss: {
          singleton: true,
          requiredVersion: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
