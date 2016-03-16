(function () {
    "use strict";

    var admin = angular.module("admin", ["admin.users", "ngRoute", "ngResource"]);
    admin.config(function ($routeProvider) {

        $routeProvider

            .when('/', {

                templateUrl: '/admin/templates/showUsers.html',
                controller: 'usersController'
            })
            .when('/newUser', {

                templateUrl: '/admin/templates/newUser.html',
                controller: 'usersController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}());