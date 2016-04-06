(function () {
    "use strict";

    function categoriesService($http, $resource) {

        var Category = $resource("/categories/:id", {
            id: '@_id'
        });

        var getCategory = function (id) {
            return Category.get({
                id: id
            }).$promise;
        };

        var getCategories = function () {
            return $http.get('/categories/')
                .then(function (res) {
                    return res.data;
                });
        };

        var saveCategory = function (Categorydata) {
            return Category.save(Categorydata).$promise;
        };

        var deleteCategory = function (id) {
            return Category.remove({
                id: id
            }).$promise;
        };

        return {
            getCategory: getCategory,
            getCategories: getCategories,
            saveCategory: saveCategory,
            deleteCategory: deleteCategory
        };
    }

    angular
        .module("admin.categories")
        .factory("categoriesService", categoriesService);

})();