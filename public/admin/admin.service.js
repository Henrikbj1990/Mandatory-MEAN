(function () {
    "use strict";

    function adminService($http) {

        var getUsers = function () {
            return $http.get('../users/')
                .then(function (res) {
                    return res.data;
                });
        };

        var deleteUser = function (id) {
            console.log(id);
            return $http.delete('../users/' + id)
                .then(function successCallback(response) {
                    console.log("user was deleted");
                }, function errorCallback(response) {
                    console.log(response);
                });
        };

        return {
            getUsers: getUsers,
            deleteUser: deleteUser
        };
    }

    angular
        .module("admin")
        .factory("adminService", adminService);

}());