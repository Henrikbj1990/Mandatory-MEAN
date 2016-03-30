(function () {
    "use strict";

    angular
        .module("admin.dashboard", [])
        .controller("dashboardController", dashboardController);

    function dashboardController($scope, dashboardService) {
        $scope.visitors = [];
        
        $scope.status = "test";
    }


}())