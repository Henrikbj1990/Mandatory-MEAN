(function () {
    "use strict";

    angular
        .module("admin.articles", [])
        .controller("articlesController", articlesController);

    function articlesController($scope, articlesService, usersService, $window) {

        var getArticles = function () {
            articlesService.getArticles().then(function (articles) {
                $scope.articles = articles;
            });
        };

        $scope.editArticle = function (id) {

            articlesService.getArticle(id).then(function (article) {
                $scope.article = article;
            });
        };

        $scope.saveArticle = function () {
            articlesService.saveArticle($scope.article).then(function () {
                getArticles();
            });
        };

        $scope.createArticle = function () {
            var currentUser = usersService.getCurrentUser();
            console.log(currentUser);
            articlesService.saveArticle($scope.article).then(function () {
                $window.location.href = "#/Articles";
            });
        };

        $scope.deleteArticle = function (id) {
            articlesService.deleteArticle(id).then(function () {
                getArticles();
            });
        };

        getArticles();
    }

})();