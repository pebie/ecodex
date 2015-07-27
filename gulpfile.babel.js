var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack/make-webpack-config');

// The development server (the recommended option for development)
gulp.task('default', ['webpack-dev-server']);

gulp.task('webpack-dev-server', function (callback) {
  var myConfig = Object.create(webpackConfig());
  new WebpackDevServer(webpack(myConfig), {
    publicPath: myConfig.output.publicPath,
    hot: true,
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
