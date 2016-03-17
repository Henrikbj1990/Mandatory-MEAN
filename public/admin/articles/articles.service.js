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

        var saveArticle = function (articledata) {
            return Article.save(articledata).$promise;
        };

        var deleteArticle = function (id) {
            return Article.remove({
                id: id
            }).$promise;
        };

        return {
            getArticle: getArticle,
            getArticles: getArticles,
            saveArticle: saveArticle,
            deleteArticle: deleteArticle
        };

    }

    angular
        .module("admin.articles")
        .factory("articlesService", articlesService);

})();