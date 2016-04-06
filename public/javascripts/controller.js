(function () {
    "use strict";

    angular
        .module("layout.module", [])
        .controller("controller", controller);

    function controller($scope, service) {

        var getArticles = function () {
            service.getArticles().then(function (articles) {
                $scope.articles = articles;
                $scope.tags = articles.tags;
            });
        };
        getArticles();
    }

})();