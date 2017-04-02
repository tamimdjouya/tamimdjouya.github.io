describe('Filter: age', function () {
    // Instantiate a new version of my module before each test
    beforeEach(module('myApp'));
    var filter;
    var scope

    // Before each unit test, instantiate a new instance
    // of the controller
    beforeEach(inject(function ($filter, $rootScope) {
        scope = $rootScope.$new();

        filter = $filter('age', { $scope: scope });
    }));

    it('should filter the age with year', function () {
        var input = "30"
        var output = "30 jaar"

        expect(filter(input)).toBe(output);

    });
});