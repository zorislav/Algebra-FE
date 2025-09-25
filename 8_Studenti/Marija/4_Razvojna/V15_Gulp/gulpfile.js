const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const { compile } = require("handlebars");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp
    .src("style.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("dist"));
}

gulp.task("sass", compileSass);

function watchSass() {
  gulp.watch("style.scss", compileSass);
}

gulp.task("watch", watchSass);
