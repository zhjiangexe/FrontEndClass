// 引入gulp
var gulp = require('gulp');
// 刪除資料夾或檔案
// https://www.npmjs.com/package/del
var del = require('del');

var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

var webpack = require('webpack-stream');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var browserSync = require('browser-sync').create();

// 設定常用路徑
var base_dir = '.';
var dirs = {
    bower: base_dir + '/bower_components',
    src: base_dir + '/src',
    dest: base_dir + '/app',
    tmp: base_dir + '/tmp'
};

// 第一個gulp-task，將bower下載來的套件，指定檔案並移往資料夾lib
/*
gulp api
- task:定義工作
- src:定義檔案讀取來源
- dest:定義檔案寫入目的
- pipe:管道輸送
*/
gulp.task('devgo', function () {
    del([dirs.dest + '/lib/*']);

    gulp.src(dirs.bower + '/angular/angular.js')
        .pipe(gulp.dest(dirs.dest + '/lib/'));

    gulp.src(dirs.bower + '/bootstrap/dist/**')
        .pipe(gulp.dest(dirs.dest + '/lib/bootstrap/'));

    gulp.src(dirs.bower + '/requirejs/require.js')
        .pipe(gulp.dest(dirs.dest + '/lib/'));
});

// 執行sass轉譯css工作
gulp.task('sass', function () {
    var sassLog = function (log) {
        // 提示錯誤
        console.log(log.message);
    };
    gulp.src(dirs.src + '/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sassLog))
        .pipe(gulp.dest(dirs.tmp + '/css/'))
        .pipe(concat('custom.css'))
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(dirs.dest + '/css/'));
});

// 監控scss路徑，如有修正則執行sass工作
gulp.task('sass-w', ['sass'], function () {
    gulp.watch(dirs.src + '/scss/**/*.scss', ['sass'])
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type);
        });
});

gulp.task('js', function () {

    gulp.src(dirs.src + '/js/app.js')
        .pipe(webpack({ devtool: 'cheap-module-eval-source-map' }))
        // .pipe(gulp.dest(dirs.tmp + '/js/'))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(rename('bundle.js'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(dirs.dest + '/js/'));
});

gulp.task('js-w', ['js'], function () {
    gulp.watch(dirs.src + '/js/*.js', ['js'])
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type);
        });
});

// 建立伺服器、監控並執行瀏覽器的刷新
gulp.task('serve', ['js', 'sass'], function () {
    var eventHandler = function (event) {
        console.log('File ' + event.path + ' was ' + event.type);
        browserSync.reload();
    };

    // https://www.browsersync.io/docs/options
    browserSync.init({
        host: 'localhost',
        port: 3000,
        server: { // 伺服器的基底資料夾路徑
            baseDir: base_dir + '/app',
            index: 'index.html'
        },
        online: false
    });

    gulp.watch(dirs.src + '/scss/**/*.scss', ['sass']).on('change', eventHandler);
    gulp.watch(dirs.src + '/js/**/*.js', ['js']).on('change', eventHandler);
    gulp.watch([dirs.dest + '/views/**/*.html', dirs.dest + '/index.html']).on('change', eventHandler);
    gulp.watch(dirs.dest + '/json/**/*.json').on('change', eventHandler);
});

gulp.task('clean', function () {
    del([dirs.tmp])
        .then(del([dirs.dest + '/css/**', '!' + dirs.dest + '/css']))
        .then(del([dirs.dest + '/js/bundle.js']));
});