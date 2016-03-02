(function () {
    "use strict";

    var admin = angular.module("admin", ['ngRoute']);
    admin.config(function ($routeProvider) {

        $routeProvider

            .when('/editUser', {
                templateUrl: 'templates/editUser.html',
                controller: 'adminController'
            })
            .when('/', {

                templateUrl: 'templates/showUsers.html',
                controller: 'adminController'
            })
            .when('/newUser', {

                templateUrl: 'templates/newUser.html',
                controller: 'adminController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}());