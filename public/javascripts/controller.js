(function () {
    "use strict";

    angular
        .module("layout.module", [])
        .controller("controller", controller);

    function controller($http, $scope, $rootScope, service, $location) {

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

        var getProfile = function () {
            service.getProfile().then(function (profile) {
                $scope.profile = profile;
                $rootScope.authenticated = true;
            });
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
        $scope.saveUser = function () {
            service.saveUser($scope.profile).then(function () {
                $('#alertBox').text("Success! It was saved.").show();
        });
          
        };

        getArticles();
        getTags();
        getCategories();
        getProfile();
    }

})();