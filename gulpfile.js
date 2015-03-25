var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    lr = require('tiny-lr')();

gulp.task('connect', function() {
    var app = require('./server.js');
    app.use(require('connect-livereload')());
    app.listen(8080);
    lr.listen(8082);
});

// Notifies livereload of changes detected
// by `gulp.watch()`
function notifyLivereload(event) {

  // `gulp.watch()` events provide an absolute path
  // so we need to make it relative to the server root
  var fileName = require('path').relative(__dirname, event.path);

  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('sass', function() {
    return sass('./public/scss/')
    .on('error', function(err) { console.log(err.message); })
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
    gulp.watch(['./public/scss/**/*.*'], ['sass']);
    gulp.watch('./public/**/*.*', notifyLivereload);
});

gulp.task('default', ['connect', 'watch', 'sass']);
