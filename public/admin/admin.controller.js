(function () {
    "use strict";

    angular
        .module("admin", [])
        .controller("adminController", adminController);

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
    }
}());