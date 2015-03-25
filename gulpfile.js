var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer');
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

    gulp.src(event.path, {read:false})
        .pipe(require('gulp-livereload')(lr));
}

gulp.task('sass', function() {
    return sass('./public/scss/')
    .on('error', function(err) { console.log(err.message); })
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
    gulp.watch(['./public/scss/**/*.*'], ['sass']);
    gulp.watch('./public/**/*.*', notifyLivereload);
    gulp.watch('./server.js', notifyLivereload);
    gulp.watch('./app/**/*.*', notifyLivereload);
    gulp.watch('./config/*.*', notifyLivereload);
});

gulp.task('default', ['connect', 'sass', 'watch']);
