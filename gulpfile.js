// Grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    bower = require('gulp-bower'),
    babel = require('gulp-babel'),
    browserSync = require('browser-sync').create();



gulp.task('bullets-js', function() {
  return gulp.src([           
          // core - needed if you want to use any of the components below
          'bullets-core.js',
          
          // Pick the components you need in your project
          './modules/bullets-menu.js',
  ])
    .pipe(babel({
        presets: ['es2015'],
        compact: false
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('bulletsJS.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('default', function() {
  gulp.start('bullets-js');
});