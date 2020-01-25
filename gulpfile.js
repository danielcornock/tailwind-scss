'use strict';

var gulp = require('gulp');
var sass = require('gulp-scss-combine');
var concat = require('gulp-concat');

gulp.task('default', mergeSass);

function mergeSass(done) {
  return gulp
    .src(['modules/*.scss']) // Reads all files in src
    .pipe(concat('index.scss')) // Merges all of the files into theme.scss
    .pipe(sass()) // Serves to remove @import statements from the output
    .pipe(gulp.dest('./')); // Writes the file to root
}
