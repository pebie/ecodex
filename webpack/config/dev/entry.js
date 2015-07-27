/**
 * Created by bouchez on 31/07/15.
 */
import path from 'path';

module.exports = ()=> {
  return {
    get: (options)=> {
      return {
        module: [path.join(options.srcPath, 'index.js'), 'webpack/hot/only-dev-server'],
        common: ['react', 'react-router', 'webpack/hot/only-dev-server'],
        client: ['webpack-dev-server/client?http://localhost:8080']
      };
    }
  };
};

