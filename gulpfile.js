/*global require, console*/
'use strict';

var APP_PREFIX = "agenda-dimed",
    SRC_CODE = ['public/js/**/*.js'],
    SRC_LESS = ['public/less/**.less'],
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function () {
    gulp.src(SRC_CODE)
        .pipe(concat(APP_PREFIX + '.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js'));
});

gulp.task('styles', function () {
    gulp.src(SRC_LESS)
        .pipe(concat(APP_PREFIX + '.min.css'))
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/dist/css'));
});

gulp.task('default', function () {
    gulp.run('scripts', 'styles');

    gulp.watch('public/js/**/**.js', function () {
        gulp.run('scripts');
    });

    gulp.watch('public/less/**/**.less', function () {
        gulp.run('styles');
    });
});
