describe('Controller: teamsController', function () {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var ctrl;
    var scope
    // Before each unit test, instantiate a new instance
    // of the controller
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        ctrl = $controller('teamsController', { $scope: scope });
    }));

    it('should have teams available on load', function () {
        expect(scope.teams).not.toBe(null);
    });


});

describe('Controller: teamsController', function () {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var ctrl;
    var scope;
    // Before each unit test, instantiate a new instance
    // of the controller
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('teamsController', { $scope: scope });
    }));

    it('should have array size +1 after save', function () {
        var teamToSave = scope.teams[0];
        var teamSizeBefore = scope.teams.length;
        scope.saveTeam(teamToSave);

        var expectedTeamSize = teamSizeBefore + 1;
        var actuallTeamSize = scope.teams.length;

        expect(expectedTeamSize).toBe(actuallTeamSize);

    });

});