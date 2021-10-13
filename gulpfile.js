const { src, watch, dest, series, parallel } = require('gulp');
const jison = require('gulp-jison');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function buildTypescript(){
    return src('./src/**/*.ts')
        .pipe(tsProject())
        .pipe(dest('dist'));
}

function buildJison(){
    return src('./src/**/*.jison')
        .pipe(jison({
            moduleType : 'commonjs'
        }))
        .pipe(dest('dist'));
}

exports.default = () => series(buildJison, buildTypescript);
exports.dev = () => watch('src/**/*.*', parallel(buildJison, buildTypescript));