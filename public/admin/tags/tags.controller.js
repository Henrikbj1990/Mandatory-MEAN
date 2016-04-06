(function () {
    "use strict";

    angular
        .module("admin.tags", [])
        .controller("tagsController", tagsController);

    function tagsController($scope, tagsService, $window) {

        var getTags = function () {
            tagsService.getTags().then(function (tags) {
                $scope.tags = tags;
            });
        };

        $scope.editTag = function (id) {

            tagsService.getTag(id).then(function (tag) {
                $scope.tag = tag;
            });
        };

        $scope.saveTag = function () {
            tagsService.saveTag($scope.tag).then(function () {
                getTags();
            });
        };

        $scope.createTag = function () {
            tagsService.saveTag($scope.tag).then(function () {
                $window.location.href = "#/Tags";
            });
        };



        $scope.deleteTag = function (id) {
            tagsService.deleteTag(id).then(function () {
                getTags();
            });
        };

        getTags();
    }

})();