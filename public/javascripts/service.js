(function () {
    "use strict";

    function service($http, $resource) {
        var getArticles = function () {
            return $http.get('/articles/')
                .then(function (res) {
                    return res.data;
                });
        };
        var getTags = function () {
            return $http.get('/tags/')
                .then(function (res) {
                    return res.data;
                });
        };
        return {
            getArticles: getArticles,
            getTags: getTags
        };
    }

    angular
        .module("layout.module")
        .factory("service", service);

})();