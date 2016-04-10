(function () {
    "use strict";

    angular
        .module("admin.categories", [])
        .controller("categoriesController", categoriesController);

    function categoriesController($scope, categoriesService, $window) {

        var getCategories = function () {
            categoriesService.getCategories().then(function (categories) {
                $scope.categories = categories;
            });
        };

        $scope.editCategory = function (id) {

            categoriesService.getCategory(id).then(function (category) {
                $scope.category = category;
            });
        };

        $scope.saveCategory = function () {
            categoriesService.saveCategory($scope.category).then(function () {
                getCategories();
            });
        };

        $scope.createCategory = function () {
            categoriesService.saveCategory($scope.category).then(function (data) {
                if (data.err) {
                    $scope.error = true;
                    $("#message").html(data.err);
                } else {
                    $window.location.href = "#/Categories";
                }
            });
        };

        $scope.deleteCategory = function (id) {
            categoriesService.deleteCategory(id).then(function () {
                getCategories();
            });
        };

        getCategories();
    }

})();