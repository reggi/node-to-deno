const { zipObject } = require('lodash');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack')
const pkg = require('./package.json')

const entry = {
  ...pkg.deno,
  "path-browserify": "./deno_modules/path.js",
}

const hoist = (key, dep) => {
  const data = {
    import: `import ${key} from '${dep}'`,
    assignment: key
  }
  return `${key};\n// hoist-for-deno-webpack: import ${key} from '${dep}'`
}

module.exports = {
  entry: zipObject(Object.values(entry), Object.keys(entry)),
  mode: "none",
  output: {
    filename: '[name]',
    path: __dirname,
    libraryTarget: 'commonjs-module'
  },
  externals: [nodeExternals()],
  externals: {
    "path": hoist('path', './path'),
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '// @ts-nocheck',
      raw: true
    }),
  ]
}