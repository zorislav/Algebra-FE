const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('sass', function(){
  return gulp.src('style.scss')
      .pipe(sass())
      .pipe(cssnano())
      .pipe(gulp.dest('dist'));
});

gulp.task('js', function(){
  return gulp.src('dist/myscripts.js')
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
  gulp.watch('*.scss', gulp.series('sass'));
});


gulp.task('default', gulp.series('js', 'sass', 'watch'));