'use strict';

var plumber = require('gulp-plumber');
var gutil   = require('gulp-util');

function start() {
  return plumber( { errorHandler: function( err ) {
    gutil.log( gutil.colors.red( err ) );
    this.emit( 'end' );
  } } );
}

module.exports = {
  start: start,
  stop: plumber.stop
};
