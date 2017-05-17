'use strict';

const gulp = require('gulp');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const glob = require('glob');

const paths = {
  scripts: './src/script/**/**/*.js',
  templates: './src/*.html'
};

gulp.task('connect', () => {
	connect.server({
			port: 5000,
			livereload: true,
			root: './dest'
		});
});

gulp.task('template', () => {
	return gulp.src(paths.templates)
		.pipe(gulp.dest('./dest'))
		.pipe(connect.reload());
});

gulp.task('build', () => {
	return browserify({entries: glob.sync(paths.scripts), 
					extensions: ['.js'], 
					debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dest/script'))
        .pipe(connect.reload())
});

gulp.task('watch', () => {
	gulp.watch(paths.scripts, ['build']);
	gulp.watch(paths.templates, ['template']);
});

gulp.task('default', ['build', 'watch', 'template', 'connect']);