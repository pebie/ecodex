import process from 'process';
import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack/make-webpack-config';
import clean from 'gulp-clean';

gulp.task('default', ['dev']);

var options = {
  separateStylesheet: true,
  srcPath: path.join(process.cwd(), 'src')
};

//Clean client repository
gulp.task('clean', function () {
  return gulp.src('./server/client/', {read: false})
    .pipe(clean());
});

//Production environement
gulp.task('prod', ['clean'], function (callback) {
  process.env.NODE_ENV = 'production';
  let myConfig = Object.create(webpackConfig(options));
  options.minimize = true;
  webpack(myConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack-build-production', err);
    }
    gutil.log('webpack-build-production', stats.toString({
      colors: true
    }));
    callback();
  });
});

//Development environement within a webpack server
gulp.task('dev', function () {
  process.env.NODE_ENV = 'development';
  options = {
    hotComponents: true,
    separateStylesheet: false,
    srcPath: path.join(process.cwd(), 'src'),
    debug: true,
    devtool: 'eval-cheap-module-source-map'
  };
  let myConfig = Object.create(webpackConfig(options));
  new WebpackDevServer(webpack(myConfig), {
    publicPath: myConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: [
      {
        path: new RegExp('/api/(.*)'),
        target: 'http://localhost:3001/'
      }
    ],
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', function (err) {
      if (err) {
        throw new gutil.PluginError('webpack-dev-server', err);
      }
      gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/');
    });
});
