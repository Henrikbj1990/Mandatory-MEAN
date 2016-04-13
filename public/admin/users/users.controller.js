(function () {
    "use strict";

    angular
        .module("admin.users", [])
        .controller("usersController", usersController);

    function usersController($scope, usersService, $window) {

        var getUsers = function () {
            usersService.getUsers().then(function (users) {
                $scope.users = users;
            });
        };
        var getRoles = function () {
            usersService.getRoles().then(function (roles) {
                $scope.roles = roles;
            });
        };


        var resetUser = function () {
            $scope.user = $scope.user || {};
            $scope.user.username = "";
            $scope.user.password = "";
            $scope.user.name = "";
            $scope.user.role = "";
            $scope.user._id = null;
        };

        $scope.openCreateUserModal = function () {
            resetUser();
            $scope.modalTitle = "Create user";
        };

        $scope.editUser = function (id) {
            usersService.getUser(id).then(function (user) {
                $scope.user = user;
                console.log($scope.user.role);

            });
        };

        $scope.saveUser = function () {
            usersService.saveUser($scope.user).then(function () {
                getUsers();
            });
        };

        $scope.createUser = function () {
            usersService.saveUser($scope.user).then(function () {
                $window.location.href = "#/Users";
            });
        };

        $scope.deleteUser = function (id) {
            usersService.deleteUser(id).then(function () {
                getUsers();
            });
        };

        $scope.performDeleteUser = function () {
            usersService.deleteUser($scope.user._id).then(function () {
                getUsers();
            });
        };

        getUsers();
        resetUser();
        getRoles();
    }

})();