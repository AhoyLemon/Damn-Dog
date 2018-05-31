var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    wait        = require('gulp-wait');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
      server: {
        baseDir: './'
      }
    });

    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', function() {
      console.log('FUCK!')
      browserSync.reload;
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("./sass/damn.scss")
    .pipe(wait(300))
    .pipe(
      sass( { includePaths: ['./sass/partials'] })
      .on('error', sass.logError)
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream())
    .pipe(browserSync.reload);
});

gulp.task('default', ['serve']);