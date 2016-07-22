angular.module('app').service('firstService', [function () {
    return {
        say3times: function (phrase) {
            var index, newPhrase = '';
            for (index = 0; index < 3; index++) {
                newPhrase = newPhrase + phrase;
            }
            return newPhrase;
        }
    };
}]);