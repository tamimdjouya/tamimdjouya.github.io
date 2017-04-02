myApp.controller('teamsController', ['$scope', '$log', function ($scope, $log) {
    $scope.newTeam = {};
    $scope.message = "";

    var localItems = JSON.parse(localStorage.getItem("teams"));

    if (localItems != undefined && localItems.length > 0) {
        $scope.teams = localItems;
    }
    else {
        $scope.teams = [
            { teamname: "Real Madrid", email: "Christiano Ronaldo", location: "Zoetermeer" },
            { teamname: "Barcelona", email: "Lionel Messi", location: "Den Haag" },
            { teamname: "Ajax", email: "Tamim Djouya", location: "Gouda" }
        ];
    }



    $scope.saveTeam = function () {
        $scope.teams.push({
            teamname: $scope.newTeam.teamname,
            email: $scope.newTeam.email,
            location: $scope.newTeam.location
        });
        $scope.newTeam = {};
        $scope.message = "Team is succesvol added!";

        localStorage.setItem("teams", JSON.stringify($scope.teams));
    };

    $scope.deleteTeam = function () {
        $scope.teams.splice($scope.teams.indexOf($scope.clickedTeam), 1);
        $scope.message = "Team is succesvol deleted!";
        localStorage.setItem("teams", JSON.stringify($scope.teams));
    };

    $scope.selectTeam = function (team) {
        console.log(team);
        $scope.clickedTeam = team;
    }

    $scope.updateTeam = function () {
        $scope.message = "Team is succesvol updated!";
        localStorage.setItem("teams", JSON.stringify($scope.teams));
    };


}]);