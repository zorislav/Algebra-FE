const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass',function(){
    return gulp.src('style.scss').pipe(sass()).pipe(cssnano()).pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('*.scss' ,gulp.series('sass'));
    
});

gulp.task('default', gulp.series('sass', 'watch'));