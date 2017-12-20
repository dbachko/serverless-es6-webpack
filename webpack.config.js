const dotenv = require('dotenv');
// const nodeExternals = require('webpack-node-externals');
// const webpack = require('webpack');

dotenv.config({ path: `${__dirname}/.env` });

module.exports = {
  entry: ['./handler.js'],
  target: 'node',
  // externals: [nodeExternals()], // ignore all modules in node_modules folder
  externals: ['.env'],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     TEST: JSON.stringify(process.env.TEST),
    //   },
    // }),
  ]
};
