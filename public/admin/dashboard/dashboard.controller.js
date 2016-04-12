(function () {
    "use strict";

    angular
        .module("admin.dashboard", [])
        .controller("dashboardController", dashboardController);

    function dashboardController($scope, dashboardService) {
        var getProfile = function () {
            service.getProfile().then(function (profile) {
                $scope.profile = profile;
                console.log(profile);
                $rootScope.authenticated = true;
            });
        }
    }


}())