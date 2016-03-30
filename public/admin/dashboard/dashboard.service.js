(function () {
    "use strict";

    function dashboardService($http) {

        var getVisitors = function () {

        }
        
        var getUserStatus = function () {
            return $http.get('/status/');
        };

        return {
            getVisitors: getVisitors,
            getUserStatus: getUserStatus
        }

    }

    angular
        .module("admin.dashboard")
        .factory("dashboardService", dashboardService);

}())