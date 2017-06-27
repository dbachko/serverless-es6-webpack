var nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: './handler.js',
  target: 'node',
  externals: [nodeExternals()], // ignore all modules in node_modules folder
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  plugins: []
};
