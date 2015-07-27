/**
 * Created by bouchez on 31/07/15.
 */
import path from 'path';
import process from 'process';

module.exports = () => {
  return {
    get: (options)=> {
      return {
        path: path.join(process.cwd(), 'tmp'),
        publicPath: '/',
        filename: '[name].js',
        library: ['Example', '[name]'],
        pathInfo: true
      };
    }
  };
};
