(function () {
    "use strict";

    angular
        .module("layout.module", [])
        .controller("controller", controller);

    function controller($scope, service) {

        $scope.filter = "";

        $scope.filterTag = function (tag) {
            $scope.filter = tag;
            $scope.articleFilter = tag;
        }
        $scope.filterCategory = function (category) {
            $scope.filter = {
                category: category
            };
            $scope.articleFilter = category;
        }

        $scope.resetFilter = function () {
            $scope.filter = "";
            $scope.articleFilter = "";

        }

        var getArticles = function () {
            service.getArticles().then(function (articles) {
                $scope.articles = articles;
                $scope.tags = articles.tags;
            });
        };
        var getTags = function () {
            service.getTags().then(function (allTags) {
                $scope.allTags = allTags;
            });
        };
        var getCategories = function () {
            service.getCategories().then(function (categories) {
                $scope.categories = categories;
            });
        };
        getArticles();
        getTags();
        getCategories();
    }

})();