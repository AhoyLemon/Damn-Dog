var gulp        = require('gulp'),
    //browserSync = require('browser-sync').create(),
    livereload = require('gulp-livereload'),
    sass        = require('gulp-sass'),
    wait        = require('gulp-wait');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  gulp.src("./sass/damn.scss")
    .pipe(
      sass( { includePaths: ['./sass/partials'] })
      .on('error', sass.logError)
    )
    .pipe(gulp.dest("./css"))
    .pipe(wait(600))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen({ basePath: './' });
  gulp.watch("sass/**/*.scss", ['sass']);
});