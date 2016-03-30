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
            var userName = "";
            var currentUser = usersService.getCurrentUser().then(function (user) {
                userName = user.username;

                $scope.article.created_by = userName;
                var d = new Date();
                var curr_date = d.getDate();
                var curr_month = d.getMonth() + 1; //Months are zero based
                var curr_year = d.getFullYear();
                $scope.article.created_at = curr_date + "-" + curr_month + "-" + curr_year;
                articlesService.saveArticle($scope.article).then(function () {
                    $window.location.href = "#/Articles";
                });
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