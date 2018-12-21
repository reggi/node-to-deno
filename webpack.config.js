const path = require('path');

module.exports = {
  mode: "production",
  entry: "./node/example.js",
  node: {
    console: true,
    global: true,
    process: true,
    __filename: true,
    __dirname: true,
    Buffer: true,
    setImmediate: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'example.js',
    libraryTarget: 'commonjs-module'
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules
    extensions: [".js", ".ts", ".jsx", ".css"],
  },
  
  target: "node", // enum  // the environment in which the bundle should run
    
}