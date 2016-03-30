(function () {
    "use strict";

    function usersService($http, $resource) {

        var User = $resource("/users/:id", {
            id: '@_id'
        });
        
        var getCurrentUser = function () {
            return $http.get('/profile')
            .then(function (res){
                console.log(res.data);
                return res.data;
            })
        }

        var getUser = function (id) {
            return User.get({
                id: id
            }).$promise;
        };

        var getUsers = function () {
            return $http.get('/users/')
                .then(function (res) {
                    return res.data;
                });
        };

        var saveUser = function (userdata) {
            return User.save(userdata).$promise;
        };

        var deleteUser = function (id) {
            return User.remove({
                id: id
            }).$promise;
        };

        return {
            getUser: getUser,
            getUsers: getUsers,
            saveUser: saveUser,
            deleteUser: deleteUser,
            getCurrentUser: getCurrentUser
        };

    }

    angular
        .module("admin.users")
        .factory("usersService", usersService);

})();