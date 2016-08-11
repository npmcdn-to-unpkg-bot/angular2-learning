'use strict';

var gulp          = require( "gulp" );
var rename        = require( "gulp-rename" );
var jade          = require( "gulp-jade" );
var errorHandler  = require( './error-handler.js' );


// site templates
gulp.task( 'jade', function() {
  return jadeToTemplate( "./src/**/!(_)*.jade", "app", function( path ) {
    if( path.basename === 'index' ) {
      path.dirname = '../';
      path.basename = 'index';
    }
    return path;
  } );
} );


//----------------------------------
function jadeToTemplate ( srcFiles, destPath, renameOptions ) {
  var promise;

  promise = gulp.src( srcFiles )
    .pipe( errorHandler.start() )
    .pipe( jade( { pretty: true, doctype:'html' } ) )
    .pipe( errorHandler.stop() );


  if( renameOptions ) {
    promise = promise.pipe(rename( renameOptions ) );
  }

  promise = promise.pipe( gulp.dest( destPath ) );

  return promise;
}
