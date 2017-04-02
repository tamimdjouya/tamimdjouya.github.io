myApp.factory('LoadFactory', function () {


    function deleteUser(users, user) {
        users.splice((user), 1);

        localStorage.setItem("users", JSON.stringify(users));
        return users;
    }


    function addUser(username, age, fullName, selectedTeam) {
        var users = null;
        var localItems = JSON.parse(localStorage.getItem("users"));

        if (localItems != undefined && localItems.length > 0) {
            users = localItems;
        }
        else {
            users = [
                { username: "C.ronaldo", age: "30", fullName: "Christiano Ronaldo", team: "Ajax" },
                { username: "Messi", age: "32", fullName: "Lionel Messi", team: "Ajax" },
                { username: "Tamim", age: "22", fullName: "Tamim Djouya", team: "Ajax" }
            ];
        }
        users.push({
            username: username,
            age: age,
            fullName: fullName,
            team: selectedTeam,
        });

        localStorage.setItem("users", JSON.stringify(users));
    }


    return {
        deleteUser: deleteUser,
        addUser: addUser
    };
});