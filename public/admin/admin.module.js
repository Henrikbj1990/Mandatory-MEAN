(function () {
    "use strict";

    var admin = angular.module("admin", ["admin.dashboard", "admin.users", "admin.articles", "admin.tags", "admin.categories", "ngRoute", "ngResource"]);
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
            controller: 'articlesController',
            isLogin: true
        })

        .when('/newArticle', {

            templateUrl: './articles/templates/newArticle.html',
            controller: 'articlesController'
        })

        .when('/Tags', {

            templateUrl: './tags/templates/showTags.html',
            controller: 'tagsController'
        })

        .when('/newTag', {

                templateUrl: './tags/templates/newTag.html',
                controller: 'tagsController'
            })
            .when('/Categories', {

                templateUrl: './categories/templates/showCategories.html',
                controller: 'categoriesController'
            })

        .when('/newCategory', {

            templateUrl: './categories/templates/newCategory.html',
            controller: 'categoriesController'
        })

        .when('/', {
            templateUrl: '/admin/dashboard/view.html',
            controller: 'dashboardController'
        })

    });
    admin.run(function ($rootScope, usersService, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            usersService.getCurrentUser().then(function (user) {
                if (!user) {
                    $location.path('/test')
                }
                $rootScope.currentUser = user;
            })
        });

    });
}());