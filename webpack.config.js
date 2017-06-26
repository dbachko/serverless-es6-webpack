var nodeExternals = require('webpack-node-externals');


module.exports = {
  entry: './handler.js',
  target: 'node',
  externals: [nodeExternals()], // ignore all modules in node_modules folder
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};
