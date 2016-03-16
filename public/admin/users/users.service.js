(function () {
    "use strict";

    function usersService($http, $resource) {

        var User = $resource("../users/:id", {
            id: '@_id'
        });

        var getUser = function (id) {
            return User.get({
                id: id
            }).$promise;
        };

        var getUsers = function () {
            return $http.get('../users/')
                .then(function (res) {
                    return res.data;
                });
        };

        var saveUser = function (userdata) {
            return User.save(userdata).$promise;
        };

        var deleteUser = function (id) {
            console.log("delete user")
            return User.remove({
                id: id
            }).$promise;
        };

        return {
            getUser: getUser,
            getUsers: getUsers,
            saveUser: saveUser,
            deleteUser: deleteUser
        };

    }

    angular
        .module("admin.users")
        .factory("usersService", usersService);

})();