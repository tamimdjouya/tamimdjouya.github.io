describe('Controller: spelerController', function () {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var ctrl;
    var scope;
    // Before each unit test, instantiate a new instance
    // of the controller
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('spelerController', { $scope: scope });
    }));

    it('should have array size -1 after delete', function () {
        var userToDelete = scope.users[0];
        var userSizeBefore = scope.users.length;
        scope.deleteUser(userToDelete);
        if (userSizeBefore < 0) {
            return;
        }
        var expectedUsersSize = userSizeBefore - 1;
        var actuallUserSize = scope.users.length;

        expect(expectedUsersSize).toBe(actuallUserSize);

    });

});

describe('Controller: spelerController', function () {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var ctrl;
    var scope;
    // Before each unit test, instantiate a new instance
    // of the controller
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('spelerController', { $scope: scope });
    }));

    it('Age should be a integer', function () {

        var ageInteger = scope.users[0].age;

        expect(ageInteger).toMatch(/\d{1,}/);

    });

});