import path from 'path';
import webpack from 'webpack';
import babelrc from './.babelrc';

var development = process.env.NODE_ENV !== 'production';

class WebpackConfig {
  constructor(outputDir, minify, sourcemaps) {
    this.entry = {
      vendor: [],
      app: path.join(__dirname, 'app', 'main.jsx')
    };

    this.output = {
      path: path.join(__dirname, outputDir),
      filename: 'app.js'
    };

    this.plugins = [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ];

    this.module = {
      noParse: [],
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: babelrc.presets
          }
        }
      ]
    };

    this.resolve = {
      alias: {}
    };

    if(sourcemaps) {
      this.devtool = 'source-map';
    }
    
    if(minify) {
      this.plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    this.addLibraryPlugin('React', 'react', path.join(__dirname, 'node_modules',
      'react', 'dist', 'react' + this.minFile() + '.js'), true);
    this.addLibraryPlugin('ReactDOM', 'react-dom', path.join(__dirname,
      'node_modules', 'react-dom', 'dist', 'react-dom' + this.minFile() + 
      '.js'), false);
    this.addLibraryPlugin('$', 'jquery', path.join(__dirname,
      'node_modules', 'jquery', 'dist', 'jquery' + this.minFile() + '.js'),
      false);
  }

  addLibraryPlugin(varName, moduleAlias, filename, dontParse) {
    let pluginConfig = {};

    this.resolve.alias[moduleAlias] = filename;

    this.entry.vendor.push(moduleAlias);

    pluginConfig[varName] = moduleAlias;
    this.plugins.push(new webpack.ProvidePlugin(pluginConfig));

    if(dontParse) {
      this.module.noParse.push(filename);
    }
  }

  minFile() {
    return development ? '' : '.min';
  }
}

export default new WebpackConfig('dist', !development, development);
