"use strict"

var gulp     = require('gulp');
var ts       = require('gulp-typescript');
var tsconfig = require('../tsconfig.json');


gulp.task( 'ts', function () {
  return gulp.src('src/**/*.ts')
    .pipe(ts( tsconfig.compilerOptions ))
    .pipe(gulp.dest('app'));
} );
