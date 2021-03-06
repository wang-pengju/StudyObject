var gulp=require('gulp'),
    less=require('gulp-less'),
    cssclean=require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    del=require('del');
//less转css
gulp.task('testLess',function(){
   return gulp.src('less/busstop.less')
       .pipe(sourcemaps.init())
       .pipe(less())//less转css
       .pipe(sourcemaps.write())
       .pipe(cssclean())//压缩css文件
       .pipe(gulp.dest('dest/css'));
});
//压缩image
gulp.task('testImages', function() {
    gulp.src('image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/image'))
});
//监听文件
gulp.task('testWatch',function(){
	//当所有less文件发生改变时，调用testLess任务
	gulp.watch('less/**/*.less',['testLess']);
    //当所有less文件发生改变时，调用testLess任务
    gulp.watch('./**/*.html',['testHtml']);
    livereload.listen();
    gulp.watch(['dest/**']).on('change', livereload.changed);
})
//压缩html
gulp.task('testHtml',function(){
	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src('index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dest/'));
})
//清除记录
gulp.task('clean',function(){
    return del('dest/*');
})
//打开静态浏览器
gulp.task("watch", function() {
    browserSync.init({
        files: [
            "./dest/*/*.html",
            "./dest/*/*.css"
        ],
        logLevel: "debug",
        logPrefix: "insgeek",
        server: {
            baseDir: "./dest"
        },
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        },
        browser: "chrome"
    });
});
//默认任务
gulp.task('default',['clean'],function(cb) {
    gulp.start('testHtml','testLess','testImages');
    setTimeout(function(){ gulp.start('watch')},500);
});