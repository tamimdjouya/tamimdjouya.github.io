myApp.controller("spelerController", function ($scope, LoadFactory) {

    $scope.newUser = {};
    $scope.clickUser = {};
    $scope.message = "";

    var localItems = JSON.parse(localStorage.getItem("users"));

    if (localItems != undefined && localItems.length > 0) {
        $scope.users = localItems;
    }
    else {
        $scope.users = [
            { username: "C.ronaldo", age: "30", fullName: "Christiano Ronaldo", team: "Ajax" },
            { username: "Messi", age: "32", fullName: "Lionel Messi", team: "Ajax" },
            { username: "Tamim", age: "22", fullName: "Tamim Djouya", team: "Ajax" },
        ];
    }


    $scope.saveUser = function () {
        var e = document.getElementById("team");
        var selectedTeam = e.options[e.selectedIndex].text;

        $scope.users.push({
            username: $scope.newUser.username,
            age: $scope.newUser.age,
            fullName: $scope.newUser.fullName,
            team: selectedTeam,

        });
        LoadFactory.addUser($scope.newUser.username, $scope.newUser.age, $scope.newUser.fullName, selectedTeam);
        $scope.message = "Player is succesvol added!";

    };

    $scope.selectUser = function (user) {
        console.log(user);
        $scope.clickedUser = user;
    }

    $scope.updateUser = function () {
        $scope.message = "Player is succesvol updated!";
        localStorage.setItem("users", JSON.stringify($scope.users));
    };
    $scope.deleteUser = function (users, clickedUser) {
        //$scope.users = LoadFactory.deleteUser($scope.users.indexOf($scope.clickedUser));
        $scope.users = LoadFactory.deleteUser($scope.users, $scope.clickedUser);
        $scope.message = "Player is succesvol deleted!";
    }

    $scope.clearMessage = function () {
        $scope.message = "";
    };

});