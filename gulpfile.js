var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
