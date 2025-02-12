const gulp = require('gulp');
const compile = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');
const filter = require('gulp-filter');

gulp.task('build', () =>
    gulp.src('src/index.css')
      .pipe(sourcemaps.init())
        .pipe(compile())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'))
      
      .pipe(filter('**/*.css'))
      .pipe(clean())
      .pipe(rename({suffix:'.min'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest("dist")),
);
