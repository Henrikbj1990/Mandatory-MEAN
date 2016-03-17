(function () {
    "use strict";

    var admin = angular.module("admin", ["admin.dashboard", "admin.users", "admin.articles", "ngRoute", "ngResource"]);
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
        
        .when('/Articles', {

            templateUrl: './articles/templates/showArticles.html',
            controller: 'articlesController'
        })
        
        .when('/newArticle', {

            templateUrl: './articles/templates/newArticle.html',
            controller: 'articlesController'
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