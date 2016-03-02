(function () {
    "use strict";

    function adminController($scope, adminService) {
        getUsers();

        function getUsers() {
            adminService.getUsers().then(function (data) {
                $scope.users = data;
            })
        };

        $scope.deleteUser = function (id) {

            adminService.deleteUser(id).then(getUsers());

        }
        $scope.editUser = function (id) {

            adminService.editUser(id);

        }
    }
    angular
        .module("admin")
        .controller("adminController", adminController);
}());