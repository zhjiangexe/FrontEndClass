define(['angular'], function () {
    'use strict';
    // 建立firstModule
    var xModule = angular.module('xModule', []);

    // 建立firstModule的一個fmService
    xModule.factory('xService', [function () {
        return {
            countTotal: function (a, b) {
                var total = 0, index;
                if (a < b) {
                    for (index = a; index <= b; index++) {
                        total = total + index;
                    }
                } else {
                    total = 0;
                }
                return total;
            }
        };
    }]);
});