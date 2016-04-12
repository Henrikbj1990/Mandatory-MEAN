(function () {
    "use strict";

    function dashboardService($http) {

        var getProfile = function () {
            return User.get().$promise;
        };

        return {
            getProfile: getProfile
        }

    }

    angular
        .module("admin.dashboard")
        .factory("dashboardService", dashboardService);

}())