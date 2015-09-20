var gulp = require('gulp');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('styles', function(){
  gulp.src(['src/styles/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts:development', function(){
  var watcher = watchify(browserify({
    entries: ['./src/scripts/app.js'],
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function() {
    watcher.bundle()
      .pipe(source('build.js'))
      .pipe(rename({suffix: '.min'}))      
      .pipe(gulp.dest('dist/src'))
      .pipe(browserSync.reload({stream:true}))
      console.log('Updated');
  })
  .bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('dist/src'));

});

gulp.task('scripts:production', function(){
  var b = browserify({
    entries: ['./src/scripts/app.js'],
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  });

  return b.bundle()
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/build'));

});

gulp.task('default', ['browser-sync', 'scripts'], function(){
  gulp.watch("src/styles/**/*.scss", ['styles']);
  gulp.watch("*.html", ['bs-reload']);
});

gulp.task('build', ['images', 'styles', 'scripts:production']);