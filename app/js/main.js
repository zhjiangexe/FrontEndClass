(function () {
    'use strict';
    require.config({
        // 從載入require.js那個頁面，其路徑當作baseUrl，這裡是在app底下
        // http://www.requirejs.cn/
        baseUrl: '.',
        paths: {
            angular: 'lib/angular'
        }
    });

    // Start the main app logic.
    require(['angular'], function (angular) {

    });
})();