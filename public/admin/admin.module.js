(function () {
    "use strict";

    var admin = angular.module("admin", ["admin.dashboard", "admin.users", "admin.articles", "admin.tags", "admin.categories", "ngRoute", "ngResource"]);

    admin.config(function ($routeProvider) {

        $routeProvider

            .when('/Users', {
            isLogin: true,
            templateUrl: './users/templates/showUsers.html',
            controller: 'usersController'

        })

        .when('/newUser', {

            templateUrl: './users/templates/newUser.html',
            controller: 'usersController',
            isLogin: true
        })

        .when('/Articles', {

            templateUrl: './articles/templates/showArticles.html',
            controller: 'articlesController',
            isLogin: true
        })

        .when('/newArticle', {

            templateUrl: './articles/templates/newArticle.html',
            controller: 'articlesController',
            isLogin: true
        })

        .when('/Tags', {

            templateUrl: './tags/templates/showTags.html',
            controller: 'tagsController',
            isLogin: true
        })

        .when('/newTag', {

                templateUrl: './tags/templates/newTag.html',
                controller: 'tagsController',
                isLogin: true
            })
            .when('/Categories', {

                templateUrl: './categories/templates/showCategories.html',
                controller: 'categoriesController',
                isLogin: true
            })

        .when('/newCategory', {

            templateUrl: './categories/templates/newCategory.html',
            controller: 'categoriesController',
            isLogin: true
        })

        .when('/', {
            templateUrl: '/admin/dashboard/view.html',
            controller: 'dashboardController',
            isLogin: true
        })

    });
    admin.run(function ($rootScope, usersService) {
        usersService.getCurrentUser().then(function (user) {
            $rootScope.currentUser = user;
        })
    })

}());