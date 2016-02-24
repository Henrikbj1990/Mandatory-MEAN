(function () {
    "use strict";

    function adminService($http) {

        var getUsers = function () {
            return $http.get('../users/')
                .then(function (res) {
                    return res.data;
                });
        };

        return {
            getUsers: getUsers
        };
    }

    angular
        .module("admin")
        .factory("adminService", adminService);

}());