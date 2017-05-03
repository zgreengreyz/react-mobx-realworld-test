'use strict';

const gulp = require('gulp');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
// const react = require('gulp-react');
// const reactDom = require('react-dom');
// const sass = require('gulp-sass');

const paths = {
  scripts: './src/script/*.js',
  // styles: './src/style/*.sass',
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

// gulp.task('sass', () => {
// 	return gulp.src(paths.styles)
// 	    .pipe(sass().on('error', sass.logError))
// 		.pipe(gulp.dest('./dest/css'))
// 		.pipe(connect.reload());
	
// });

gulp.task('build', () => {
	return browserify({entries: './src/script/index.js', 
					extensions: ['.js'], 
					debug: true})
        .transform(babelify)//, {presets: ['react', 'es2015']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dest/script'))
        .pipe(connect.reload())
});

gulp.task('watch', () => {
	// gulp.watch(paths.styles, ['sass']);
	gulp.watch(paths.scripts, ['build']);
	gulp.watch(paths.templates, ['template']);
});

gulp.task('default', ['build', 'watch', 'template', 'connect']);