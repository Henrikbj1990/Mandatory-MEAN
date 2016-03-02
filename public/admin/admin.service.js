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

        var editUser = function (id) {

            return $http.get('../users/editUser/' + id)
                .then(function successCallback(res) {
                    console.log(res);
                }, function errorCallback(response) {
                    console.log(response);
                });
        }

        return {
            getUsers: getUsers,
            deleteUser: deleteUser,
            editUser: editUser
        };
    }

    angular
        .module("admin")
        .factory("adminService", adminService);

}());