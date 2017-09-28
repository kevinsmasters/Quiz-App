var gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', [], function(){
    browserSync.init({
        server: './'
    });

    gulp.watch(['./app/*.js']).on('change', browserSync.reload);
    gulp.watch(['./*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
