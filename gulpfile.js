var gulp = require('gulp');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var inject = require('gulp-inject');
var plumber = require('gulp-plumber');
var cache = require('gulp-cache');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');

// Require config
var config = require('./config');

// Environment, either dev or prod
var ENV = gutil.env.env;
var isDev = (ENV === 'dev');
var isProd = (ENV === 'prod');

// Get config for either for dev or prod
var configUsed = config[ENV];
Object.assign(configUsed, config.general);

gulp.task('browser-sync', function() {
  browserSync({
    server: { 
       baseDir: configUsed.baseFolder
    }
  });
});

gulp.task('clean', function() {
  return del(['dist/**/*.js', 'dist/**/*.css', 'dist/**/*.html']);
});

gulp.task('copy-index-html', function() {
    gulp.src(configUsed.indexPath)
    .pipe(gulp.dest(configUsed.baseFolder));
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src(configUsed.images)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(configUsed.styleDest));
});

gulp.task('sass', function(){
  gulp.src([configUsed.sassSrc])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(configUsed.styleDest))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts:development', function(){
  var watcher = browserify({
    entries: [configUsed.entry],
    transform: [ 
      [ babelify, { presets: ['es2015'] }]
    ],
    debug: true,
    plugin: [watchify],
    cache: {}, 
    packageCache: {}, 
    fullconfig: true
  });

  return watcher.on('update', function() {
    watcher.bundle()
      .pipe(source(configUsed.buildFileName))
      .pipe(gulp.dest(configUsed.buildDest))
      .pipe(browserSync.reload({stream:true}))
  })
  .bundle()
    .pipe(source(configUsed.buildFileName))
    .pipe(gulp.dest(configUsed.buildDest));

});

gulp.task('scripts:production', function(){
  var b = browserify({
    entries: [configUsed.entry],
    transform: [ 
      [ babelify, { presets: ['es2015'] }]
    ],
    debug: false,
    cache: {}, 
    packageCache: {}, 
    fullconfig: true
  });

  return b.bundle()
    .pipe(source(configUsed.buildFileName))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    //.pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(configUsed.buildDest));

});

gulp.task('watch', ['browser-sync', 'sass', 'scripts:development'], function(){
  gulp.watch(configUsed.styleSrc, ['sass']);
  gulp.watch(configUsed.indexPath, ['bs-reload']);
});

gulp.task('build', ['clean', 'images', 'sass', 'scripts:production', 'copy-index-html']);