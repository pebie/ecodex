/**
 * Created by bouchez on 31/07/15.
 */
import path from 'path';
import process from 'process';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = ()=> {
  return {
    getCommons: (options)=> {
      return [
        {
          test: /\.jsx?$/,
          loaders: options.hotComponents ? ['react-hot', 'babel'] : ['babel'],
          include: path.join(process.cwd(), 'src')
        }
      ];
    },

    getImages: (options)=> {
      return [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
      ];
    },

    getStylesheets: (options)=> {
      let separateCSS = {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      };

      let dontSeparateCSS = {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: [path.join(process.cwd(), 'src'), path.join(process.cwd(), 'node_modules')]
      };

      let sass = (options.separateStylesheet) ? separateCSS : dontSeparateCSS;

      return [sass, {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
      ];
    }
  };
};
