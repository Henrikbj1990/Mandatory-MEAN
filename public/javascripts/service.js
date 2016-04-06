(function () {
    "use strict";

    function service($http, $resource) {
        var getArticles = function () {
            return $http.get('/articles/')
                .then(function (res) {
                    console.log("test");
                    return res.data;
                });
        };
        return {
            getArticles: getArticles
        };
    }

    angular
        .module("layout.module")
        .factory("service", service);

})();