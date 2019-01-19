var gulp = require('gulp');
var ts = require("gulp-typescript");
var merge = require("merge2");
var tsConfig = ts.createProject('tsconfig.json');

var src = 'src/node_modules/tss/**/*.ts*';

gulp.task('default', async () => {
    var tsResult = gulp.src(src)
        .pipe(tsConfig())

    gulp.src("package.json")
        .pipe(gulp.dest("dist"))

    gulp.src("README.md")
        .pipe(gulp.dest("dist"))
    
    return merge([
        tsResult.dts.pipe(gulp.dest("dist")),
        tsResult.js.pipe(gulp.dest("dist"))
    ])
});
