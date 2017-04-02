var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/main.html',
        
        })

        .when('/speler', {
            templateUrl: 'views/speler.html',
            controller: 'spelerController'

        })

        .when('/wedstrijd', {
            templateUrl: 'views/wedstrijd.html',
            controller: 'wedstrijdController',

        })

        .when('/teams', {
            templateUrl: 'views/teams.html',
            controller: 'teamsController',

        })
});








