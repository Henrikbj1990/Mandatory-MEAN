(function () {
    "use strict";

    angular
        .module("articles", [])
        .controller("articlesController", articlesController);

    function articlesController($scope, articlesService, $window) {

        var getArticles = function () {
            articlesService.getArticles().then(function (articles) {
                $scope.articles = articles;
            });
        };

        var getArticle = function () {
            articlesService.getArticle().then(function (article) {
                $scope.article = article;
            });
        };
        getArticles();
    }

})();