const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    
    filename: 'bundle.js'
  },
  resolve: {
    fallback: {

      "crypto": "node_modules/crypto-browserify",
      "stream": "node_modules/stream-browserify",
      "buffer": require.resolve("buffer/"),
      "assert": require.resolve("assert/"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
    }
  },
  
};
