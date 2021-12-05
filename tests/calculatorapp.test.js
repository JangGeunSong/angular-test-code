describe('calculator app tests', function() {

    beforeEach(module('myapp'));

    describe('add controller test', function() {
        var $controller;

        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
        }));

        it('1 + 1 should equal 2', function() {
            var $scope = {};
            var controller = $controller('calculatorController', {$scope: $scope});

            $scope.num1 = 1;
            $scope.num2 = 2;
            $scope.add();

            expect($scope.sum).toBe(3);
        })
    });

    describe('reverse string filter test', function() {
        
        var reverse;

        beforeEach(inject (function ($filter) {
            reverse = $filter('reverse', {});
        }));

        it('should reverse a string', function() {
            expect(reverse('india')).toBe('aidni'); // pass test
            // expect(reverse('don')).toBe('don'); // fail test
        });

    });

    describe('player service api test', function() {
        var data = [
            {
                "id" : "1",
                "name" : "local tester1",
                "age" : "12"
            },
            {
                "id" : "2",
                "name" : "local tester2",
                "age" : "16"
            }
        ];
        var playerLocalApi = {};

        beforeEach(inject(function(_playerLocalApi_) {
            playerLocalApi = _playerLocalApi_;
        }));

        it('should return search player data', function() {
            expect(playerLocalApi.getPlayer()).toEqual(data);
        })
    });

});