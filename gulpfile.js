const { series, dest, src } = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('./tsconfig.json');
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');

/**
 * Translates all typescript files into the 'out' dir.
 * @returns 
 */
function handleTypescript(cb) {
  tsProject.src()
    .pipe(tsProject())
    .js
    .pipe(dest('./out'));
  cb();
}

/**
 * Copies all files into the out dir.
 * @returns 
 */
function handleFiles() {
  return src(['./src/**/*', '!./src/**/*.ts'])
    .pipe(dest('./out'));
}

/**
 * Removes the content of the out dir.
 * @returns 
 */
function clean() {
  return del('./out/**', {force:true});
}

/**
 * Minifying all files in the out folder
 */
function compressJs() {
  return src(['./out/**/*.js'])
    .pipe(minify())
    .pipe(uglify({
      output: {
        beautify: true,
        comments: false
      }
    }))
    .pipe(dest('./out'))
}

exports.build = series(clean, handleTypescript, compressJs, handleFiles);
exports.clean = clean;
exports.default = series(clean, handleTypescript, compressJs, handleFiles);
