var gulp = require('gulp');

// gulp-load-plugins
/*var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();*/
// 上三行等于下一行
var $ = require('gulp-load-plugins')();

// gulp-task-listing
var taskListing = require('gulp-task-listing');

var argv = require('yargs').argv;

//
var gutil = require('gulp-util');

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


// gulp.task('default', ['help']);
// gulp.task('help', $.taskListing);

/*gulp.task('default', function() {
  gulp.task('help', $.taskListing);
});*/
