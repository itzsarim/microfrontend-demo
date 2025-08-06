const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:8080/', // Public path for the host app
  },
  mode: 'development',
  devServer: {
    port: 8080, // Port for the host app
    historyApiFallback: true, // Important for React Router
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host_app', // Unique name for this application
      remotes: {
        // Defines remote applications this host will consume
        // 'alias': 'remote_name@remote_url/remoteEntry.js'
        counter_app: 'counter_app@http://localhost:8081/remoteEntry.js',
      },
      shared: {
        // Shared dependencies to avoid duplication and ensure singletons
        react: {
          singleton: true, // Only one instance of React should be loaded
          requiredVersion: '^18.2.0', // Match version in package.json
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: '^6.23.1',
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template for the host app
    }),
  ],
};