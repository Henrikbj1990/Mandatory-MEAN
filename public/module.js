(function () {
    "use strict";

    var admin = angular.module("module", ["articles", "ngRoute", "ngResource"]);
    admin.config(function ($routeProvider) {

        $routeProvider
        
        .when('/Content', {

            templateUrl: './articles/templates/showArticles.html',
            controller: 'articlesController'
        })

    });
}());