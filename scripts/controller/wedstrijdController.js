myApp.controller('wedstrijdController', ['$scope','$log', function ($scope, $log) {
    $scope.newMatch = {};
    $scope.message = "";

    var localItems = JSON.parse(localStorage.getItem("matches"));

    if (localItems != undefined && localItems.length > 0) {
        $scope.matches = localItems;
    }
    else {
        $scope.matches = [
            { game: "1", home: "DSO", out: "Ajax", date: 05-05-2017 },
            { game: "2", home: "Feyenoord", out: "AZ", date: 06-05-2017 },
            { game: "3", home: "Ajax", out: "DSO", date: 05-09-2017 }
        ];
    }

    $scope.showPopup = function () {

        alert(strUser);
    };

    $scope.saveMatch = function () {
       
        var e = document.getElementById("teamHome");
        var teamHome = e.options[e.selectedIndex].text;
        var e = document.getElementById("teamOut");
        var teamOut = e.options[e.selectedIndex].text;

        $scope.getDatetime = new Date();
       console.log("tijd van nu: " + $scope.getDatetime);
        
        console.log("geselecteerde tijd: " + $scope.date);

        $scope.matches.push({
            home: teamHome,
            out:  teamOut,
            date: $scope.matchDate
        });

        $scope.newMatch = {};
        $scope.message = "Match is succesvol added!";
        console.log($scope.newMatch.hom);
        localStorage.setItem("matches", JSON.stringify($scope.matches));
    };

    $scope.deleteMatch = function () {
        $scope.matches.splice($scope.matches.indexOf($scope.clickedMatch), 1);
        $scope.message = "Match is succesvol deleted!";
        localStorage.setItem("matches", JSON.stringify($scope.matches));
    };

    $scope.selectMatch = function (match) {
        console.log(match);
        $scope.clickedMatch = match;
    }

    $scope.updateMatch = function () {
        $scope.message = "Match is succesvol updated!";
        localStorage.setItem("matches", JSON.stringify($scope.matches));
    };


}]);