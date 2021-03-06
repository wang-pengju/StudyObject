var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('gulp-browserify'),
    cleancss = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    htmlmin = require('gulp-html-minify'),
    del = require('del');
// Styles
gulp.task('styles', function() {
  return gulp.src(['css/**/*.css'])
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleancss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

//html
gulp.task('page', function() {
  return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});
// Scripts
gulp.task('scripts', function() {
  return gulp.src(['js/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(uglify()) 
    .pipe(gulp.dest('dist/scripts'))
});
// Images
gulp.task('images', function() {
  return gulp.src(['image/**/*'])
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});
// Clean
gulp.task('clean', function(cb) {
  return del(['dist/images', 'dist/scripts', 'dist/styles','dist/*.html'], cb)
});
// Default task
gulp.task('default',['clean'],function() {
    gulp.start('styles', 'scripts', 'images','page');
});
// Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('css/**/*.css', ['styles']);
  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);
  // Watch image files
  gulp.watch('image/**/*', ['images']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
});