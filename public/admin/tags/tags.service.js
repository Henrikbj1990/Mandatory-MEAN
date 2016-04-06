(function () {
    "use strict";

    function tagsService($http, $resource) {

        var Tag = $resource("/tags/:id", {
            id: '@_id'
        });

        var getTag = function (id) {
            return Tag.get({
                id: id
            }).$promise;
        };

        var getTags = function () {
            return $http.get('/tags/')
                .then(function (res) {
                    return res.data;
                });
        };

        var saveTag = function (Tagdata) {
            return Tag.save(Tagdata).$promise;
        };

        var deleteTag = function (id) {
            return Tag.remove({
                id: id
            }).$promise;
        };

        return {
            getTag: getTag,
            getTags: getTags,
            saveTag: saveTag,
            deleteTag: deleteTag
        };
    }

    angular
        .module("admin.tags")
        .factory("tagsService", tagsService);

})();