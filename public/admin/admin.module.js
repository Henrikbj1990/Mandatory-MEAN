(function () {
    "use strict";

    var admin = angular.module("admin", ["admin.users", "ngRoute", "ngResource"]);
    admin.config(function ($routeProvider) {

        $routeProvider

            .when('/editUser', {
                templateUrl: 'templates/editUser.html',
                controller: 'usersController'
            })
            .when('/', {

                templateUrl: 'templates/showUsers.html',
                controller: 'usersController'
            })
            .when('/newUser', {

                templateUrl: 'templates/newUser.html',
                controller: 'usersController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}());