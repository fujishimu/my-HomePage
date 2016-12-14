var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', () => {
  return gulp.src(['./jade/**/*.jade', '!./jade/**/_*.jade'])
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./html/'));
});
