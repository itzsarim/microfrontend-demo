const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:8081/', // Public path for the remote app
    filename: 'bundle.js', // Standard bundle name for standalone access
  },
  mode: 'development',
  devServer: {
    port: 8081, // Port for the remote app
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
      name: 'counter_app', // Unique name for this application
      filename: 'remoteEntry.js', // The file that will be exposed to other applications
      exposes: {
        // Defines modules this app will expose to others
        './CounterApp': './src/CounterApp', // Expose the CounterApp component
      },
      shared: {
        // Shared dependencies to avoid duplication and ensure singletons
        react: {
          singleton: true, // Only one instance of React should be loaded
          requiredVersion: '^18.2.0', // Match version in package.json
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template for the remote app
    }),
  ],
};