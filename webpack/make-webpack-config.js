import loadersConfig from './config/loaders';
import pluginsConfig from './config/plugins';
import entryConfig from './config/entry';
import outputConfig from './config/output';
import resolveConfig from './config/resolve';

module.exports = (options)=> {
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
