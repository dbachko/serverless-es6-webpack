module.exports = {
  entry: './handler.js',
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            'transform-es2015-modules-commonjs',
            'transform-runtime'
          ],
          presets: [
            ['env', {
              modules: 'commonjs',
              targets: {
                'node': '6.10'
              }
            }]
          ]
        }
      }
    }]
  }
};
