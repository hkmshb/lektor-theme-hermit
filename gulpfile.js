const { src, dest, parallel, watch } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');


sass.compiler = require('node-sass');

function css() {
  return src('assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(cleanCSS())
    .pipe(dest('assets/css'));
}

const build = parallel(css);

watch(['assets/scss/**/*.scss'], function(cb) {
  build();
  cb();
});


exports.css = css;
exports.default = build;
