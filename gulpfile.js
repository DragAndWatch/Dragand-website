var gulp 		 = require('gulp'),
	sass 		 = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber		 = require('gulp-plumber'),
	minifyCSS 	 = require('gulp-minify-css'),
	rename		 = require('gulp-rename'),
	autoPrefixerBrowers = [
		'chrome >= 34',
		'safari >= 7',
		'opera >= 23',
		'ios >= 7',
		'android >= 4.0',
		'bb >= 10',
		'ie >= 10',
		'ie_mob >= 10',
		'ff >= 30'
	];

/*
 * Compile SCSS files
 */
gulp.task('style', function () {
	gulp.src('public/scss/main.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer(autoPrefixerBrowers))
		.pipe(gulp.dest('public/css'))
		.pipe(minifyCSS())
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('public/css'));
});

/*
 * Watch Files
 */
gulp.task('watch', ['style'], function() {
	gulp.watch('public/scss/**/*', ['style']);
});

/*
 * Default task (just gulp)
 */
gulp.task('default', ['style', 'watch']);