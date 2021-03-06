(function () {
    "use strict";

    function service($http, $resource) {

        var User = $resource("/currentUser", {

        });

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
        var getCategories = function () {
            return $http.get('/categories/')
                .then(function (res) {
                    return res.data;
                });
        };
        var getProfile = function () {
            return User.get().$promise;
        };
        var saveUser = function (userdata) {
            return User.save(userdata).$promise;
        };
        return {
            getArticles: getArticles,
            getTags: getTags,
            getCategories: getCategories,
            getProfile: getProfile,
            saveUser: saveUser
        };
    }

    angular
        .module("layout.module")
        .factory("service", service);

})();