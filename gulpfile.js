'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var googleWebFonts = require('gulp-google-webfonts');
var autoprefixer = require('gulp-autoprefixer');


// Build sass
// -------------------------------------------------------------------------------
gulp.task('sass', function () {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./assets/'))
        .pipe(livereload());
});


// Watch for updates
// -------------------------------------------------------------------------------
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
});


// Default: Build all the things!
// -------------------------------------------------------------------------------
gulp.task('default', function() {
    gulp.start('sass', 'fonts');
});
