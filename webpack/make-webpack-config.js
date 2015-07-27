import process from 'process';
import path from 'path';
import loadersConfig from './config/loaders';
import pluginsConfig from './config/plugins';
import entryConfig from './config/dev/entry';
import outputConfig from './config/dev/output';
import resolveConfig from './config/dev/resolve';

module.exports = ()=> {
  let options = {
    hotComponents: true,
    separateStylesheet: false,
    srcPath: path.join(process.cwd(), 'src'),
    debug: true,
    devtool: 'eval-cheap-module-source-map'
  };
  let commonLoaders = loadersConfig().getCommons(options);
  let stylesheetLoaders = loadersConfig().getStylesheets(options);
  let plugins = pluginsConfig().get(options);
  let entry = entryConfig().get(options);
  let output = outputConfig().get(options);
  let resolve = resolveConfig().get(options);

  return {
    target: 'web',
    cache: 'true',
    entry: entry,
    resolve: resolve,
    output: output,
    module: {
      loaders: commonLoaders.concat(stylesheetLoaders)
    },
    plugins: plugins,
    debug: options.debug,
    devtool: options.devtool,
    devServer: {
      contentBase: './tmp',
      historyApiFallback: true
    }
  };
};
