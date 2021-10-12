const { src, watch, dest } = require('gulp');
const jison = require('gulp-jison');

function defaultTask(){
    return src('./src/**/*.jison')
        .pipe(jison({
            moduleType: 'commonjs'
        }))
        .pipe(dest('./dist'));
}

exports.watch = () => watch('./src/**/*.jison', defaultTask);
exports.default = defaultTask;