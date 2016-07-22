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