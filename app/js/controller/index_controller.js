// requirejs的define
define(['angular'], function () {
    'use strict';
    angular.module('app').controller('indexControler', ['xService', 'firstService', function (xService, firstService) {
        var _this = this;
        _this.rock = 'rockman';
        _this.repeat = function (phrase) {
            _this.important = firstService.say3times(phrase);
        };
        console.log(xService.countTotal(1, 10));
    }]);
});