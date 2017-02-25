var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
};

gulp.task('css', function() {
    return gulp.src('./css/app.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets'],
        }))
        .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
        .pipe(gulp.dest(config.publicDir + '/fonts'));
});

// Watchers
gulp.task('watch', function() {
    gulp.watch('./css/*.scss', []);
})

gulp.task('default', ['css', 'fonts', 'watch']);