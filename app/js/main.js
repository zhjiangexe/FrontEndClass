(function () {
    'use strict';
    require.config({
        // 從載入require.js那個頁面，其路徑當作baseUrl，這裡是在app底下
        // http://www.requirejs.cn/
        baseUrl: '.',
        paths: {
            angular: 'lib/angular',
            app: 'js/app',
            ngModule: 'js/module',
            controller: 'js/controller',
            service: 'js/service'
        }
    });

    // 這裡的require有其順序
    require(['angular', 'ngModule/first_module', 'app', 'service/first_service', 'controller/index_controller'], function () {
        // 當所有的套件、module、controller都載入了才執行angular的啟動
        angular.bootstrap(document, ['app']);
    });
})();