(function () {
    "use strict";

    var admin = angular.module("admin", ["admin.dashboard", "admin.users", "ngRoute", "ngResource"]);
    admin.config(function ($routeProvider) {

        $routeProvider

            .when('/Users', {

            templateUrl: './users/templates/showUsers.html',
            controller: 'usersController'
        })

        .when('/newUser', {

            templateUrl: './users/templates/newUser.html',
            controller: 'usersController'
        })

        .when('/', {

                templateUrl: '/admin/dashboard/view.html',
                controller: 'dashboardController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });
}());