var gulp = require('gulp'),
    uglify = require("gulp-uglify");

gulp.task('minify-js', function () {
    gulp.src('dist/*.js') // 要压缩的js文件
    .pipe(uglify())
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});