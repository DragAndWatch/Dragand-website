var gulp 		 = require('gulp'),
	useref 		 = require('gulp-useref'),
	gulpif 		 = require('gulp-if'),
	sass 		 = require('gulp-sass'),
	uglify		 = require('gulp-uglify'),
	rimraf		 = require('gulp-rimraf'),
	imagemin 	 = require('gulp-imagemin'),
	pngquant 	 = require('imagemin-pngquant'),
	autoprefixer = require('gulp-autoprefixer'),
	argv 		 = require('yargs').argv,
	ngAnnotate 	 = require('gulp-ng-annotate'),
	livereload 	 = require('gulp-livereload'),
	serve 		 = require('gulp-serve'),
	open 		 = require('gulp-open'),
	plumber		 = require('gulp-plumber'),
	notify 		 = require('gulp-notify'),
	minifyCSS 	 = require('gulp-minify-css'),
	rename		 = require('gulp-rename'),
	/*
	 * Config Path
	 */
	src			 = {
		path 	: 'public/assets',
		scss 	: 'public/assets/scss',
		fonts 	: 'public/assets/fonts',
		images	: 'public/assets/images',
		css		: 'public/assets/css',
		vendor	: 'public/assets/vendor'
	},
	dist		 = {
		path	: 'dist',
		fonts	: 'dist/assets/fonts',
		images	: 'dist/assets/images'
	},
	
	/*
	 * Use when gulp open navigator
	 *
	 * google-chrome (Linux)
	 * chrome (Windows)
	 * google chrome (OSX)
	 */
	port 		 = 4000,
	host		 = 'localhost',
	brower		 = 'google chrome',
	/*
	 * If your project is an angularProject change it to true
	 *
	 * Use before uglify, it will add automatic fix injection dependencies
	 */
	angularProject = false,
	/*
	 * Browers compatibility for AutoPrefixer
	 */
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
 * Clean 'dist' folder
 */
gulp.task('clean', function() {
	gulp.src(dist.path, {read: false}).pipe(rimraf());
});

/*
 * Move images to 'dist' folder and optimise all images
 */
gulp.task('images' , function () {
	gulp.src(src.images+'/**/*').pipe(gulp.dest('dist/assets/images'));
});

/*
 * Move fonts to 'dist' folder
 */
gulp.task('fonts', function() {
	gulp.src([
		src.vendor+'/font-awesome/fonts/**/*',
		src.fonts+'/**/*'
	])
		.pipe(gulp.dest(dist.fonts));
})

/*
 * Compile SCSS files
 */
gulp.task('style', function () {
	gulp.src(src.scss+'/main.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer(autoPrefixerBrowers))
		.pipe(gulp.dest(src.css))
		.pipe(minifyCSS())
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest(src.css))
		.pipe(livereload());
});

/*
 * Create folder dist
 */
gulp.task('dist', ['clean', 'images', 'fonts'], function() {

	var assets = useref.assets();

	var dist = gulp.src('public/index.html').pipe(assets);

		if(angularProject) {
			dist.pipe(gulpif('*.js', ngAnnotate()));
		}

		dist.pipe(assets.restore())
			.pipe(useref())
			.pipe(gulp.dest('dist/'));
});

/*
 * Launch Server
 */
gulp.task('server', serve({
	root: 'public/',
	port: port
}));

/*
 * Launch Chrome
 */
gulp.task('url', function(){
	gulp.src(src.path+'/index.html')
		.pipe(open('', {
			url: 'http://'+host+':'+port,
			app: brower
		}));
});

/*
 * Watch Files
 */
gulp.task('watch', ['style'], function() {
	gulp.watch(src.scss+'/**/*', ['style']);
	launchLiveReload();
});

/*
 * Default task (just gulp)
 */
gulp.task('default', ['watch', 'server', 'url'], function() {
	launchLiveReload();
});

/*
 * Test if use Livereload
 */
function useLiveReload() {
	if(argv.livereload) {
		return true;
	} else {
		return false;
	}
}

/*
 * Launch LiveReload
 */
function launchLiveReload() {
	if(useLiveReload()) {
		notify('Livereload used for your project.');
		livereload.listen();
	}
}