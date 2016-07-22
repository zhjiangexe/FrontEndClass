// 引入gulp
var gulp = require('gulp');
// 刪除資料夾或檔案
// https://www.npmjs.com/package/del
var del = require('del');

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