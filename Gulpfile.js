var gulp        = require('gulp');
var browserSync = require('browser-sync');
var less        = require('gulp-less')
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var watch       = require('gulp-watch');




//  first arguement is the files I want to watch, the second is the task to run
gulp.task('watch', function(){
  gulp.watch(['./clientReact/*.js'], ['react'])

  // gulp.watch("./server/views/*.html").on('change', browserSync.reload);
})

gulp.task('react', function(){
  return browserify({
            entries: './clientReact/main.js',
            extensions: ['.js'],
            debug: true
          })
          .transform('babelify', {presets: ["react", "es2015"]})
          .bundle()
          .pipe(source('build.js'))
          .pipe(gulp.dest('./public'))
})



gulp.task('default', ['react', 'watch'])