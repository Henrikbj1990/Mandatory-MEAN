(function () {
    "use strict";

    angular
        .module("layout.module", [])
        .controller("controller", controller);

    function controller($scope, service) {

        $scope.filter = "";

        $scope.filterTag = function (tag) {
            $scope.filter = tag;
        }

        $scope.resetFilter = function () {
            $scope.filter = "";
        }

        var getArticles = function () {
            service.getArticles().then(function (articles) {
                $scope.articles = articles;
                $scope.tags = articles.tags;
            });
        };
        var getTags = function () {
            service.getTags().then(function (articles) {
                $scope.allTags = articles;
            });
        };
        getArticles();
        getTags();
    }

})();