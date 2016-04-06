(function () {
    "use strict";

    var admin = angular.module("module", ["articles", "profile", "ngRoute", "ngResource"]);
    admin.config(function ($routeProvider) {

        $routeProvider

            .when('/Content', {
            templateUrl: './articles/templates/showArticles.html',
            controller: 'articlesController'
        })

        .when('/Profile', {
            templateUrl: './profile/templates/profile.html',
            controller: 'profileController'
        })
        

    });
}());