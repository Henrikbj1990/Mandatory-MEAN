(function () {
    "use strict";

    function articlesService($http, $resource) {

        var Article = $resource("/articles/:id", {
            id: '@_id'
        });

        var getArticle = function (id) {
            return Article.get({
                id: id
            }).$promise;
        };

        var getArticles = function () {
            return $http.get('/articles/')
                .then(function (res) {
                    return res.data;
                });
        };

        return {
            getArticle: getArticle,
            getArticles: getArticles,
        };

    }

    angular
        .module("articles")
        .factory("articlesService", articlesService);

})();