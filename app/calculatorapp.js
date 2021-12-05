var myapp = angular.module('myapp', []);

myapp.filter('reverse', [function() {
    return function(string) {
        return string.split('').reverse().join('');
    }
}]);

myapp.factory('playerLocalApi', function() {
    var data = [
        {
            "id" : "1",
            "name" : "local tester1",
            "age" : "12"
        }
    ];
    // var data = [
    //     {
    //         "id" : "1",
    //         "name" : "local tester1",
    //         "age" : "12"
    //     },
    //     {
    //         "id" : "2",
    //         "name" : "local tester2",
    //         "age" : "16"
    //     }
    // ];

    var playerLocalApi = {};
    playerLocalApi.getPlayer = function() {
        return data;
    };

    return playerLocalApi;
});

myapp.controller('calculatorController', function($scope) {
    $scope.add = function() {
        $scope.sum = $scope.num1 + $scope.num2;
    }
});