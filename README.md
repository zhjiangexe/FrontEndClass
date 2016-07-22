# FrontEndClass

1. 準備開發工具 [Note](http://www.evernote.com/l/AAeap5z2RL5GcKsxuoJnLJG8G7e4dV18gZU/)
    - vscode：準備編輯器(.vscode：統一編輯器環境)
    - eslint：準備程式碼檢測工具：統一程式碼格式

2. 專案的資料夾架構設計 & 套件引用
    - folder & file
        - app
            - lib
            - views, css, images, js, index.html
        - package.json, node_modules
        - bower.json, bower_components
        - gulpfile.js
        - .gitignore
        - .eslintrc.json

    - 套件下載
        - `npm init`
        - `npm install --save-dev gulp del`
        - `bower init`
        - `bower install --save requirejs#2.2.0 angular#1.5.8 bootstrap#3.3.6`

    - 使用gulp及引用套件
        - 建立gulpfile.js
        - 編寫第一個gulp.task任務是將bower_components中會用到的套件檔案移到app/lib底下
        - `gulp devgo`：即執行gulp.task('devgo', function(){...})

    - 引用套件
        - index.html引入需要的css
        - 編寫main.js透過require.js引入相依的js檔

3. angular起手式
    - 先將index.html上的require.js那行註解，其方式會再回來討論
    - angualr
        - 建立ng.module app
        - 建立ng.controller indexControler
        - 建立ng.service firstService
        - 讓indexControler引入使用firstService
        - 建立第二個ng.module xModule
        - xModule底下直接寫一個ng.service xService
        - 讓app引入xModule
        - 讓indexControler使用xService

    - 先將前面的部分做個版控，之後在4.gulp還有其他做法
    - require.js
        - 重新解開index.html上的require.js註解，並將其他引入的js註解
        - 設定main.js: paths, require, 載入後的程序設定
        - 將所有ngModule, ngController, ngService檔案加上requirejs所需設定define(['angular'], function () {});

4. 使用gulp結合js檔、使用sass編寫css、監控變化、建立伺服器
    - sass
        - `npm i --save-dev gulp-sass gulp-sourcemaps gulp-concat gulp-autoprefixer gulp-minify-css`
        - 新增資料夾src/sass
        - 編寫gulp.task('sass'), 監控變化
            - sass
            - tmp
            - concat
            - autoprefixer
            - minifyCss
            - sourcemaps
        -index.html引入css

    - 建立伺服器 & livereload
        - `npm i --save-dev browser-sync`
        - 編寫gulp.task('serve')

    - js
        - `npm i --save-dev webpack webpack-stream gulp-rename gulp-uglify`
        - 新增資料夾src/js
        - 編寫gulp.task('js'), 監控變化
        - index.html重新引入angular.js, bundle.js