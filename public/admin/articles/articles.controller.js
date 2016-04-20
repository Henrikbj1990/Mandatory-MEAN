(function () {
    "use strict";

    angular
        .module("admin.articles", [])
        .controller("articlesController", articlesController);

    function articlesController($scope, articlesService, usersService, $window) {

        var userName = "";

        var getArticles = function () {
            articlesService.getArticles().then(function (articles) {
                $scope.articles = articles;
            });
        };

        var getTags = function () {
            articlesService.getTags().then(function (tags) {
                $scope.tags = tags;
            });
        };

        var getCategories = function () {
            articlesService.getCategories().then(function (categories) {
                $scope.categories = categories;
            });
        };

        $scope.editArticle = function (id) {
            articlesService.getArticle(id).then(function (article) {
                $scope.article = article;
                array = article.tags;
            });
        };

        $scope.saveArticle = function () {
            articlesService.saveArticle($scope.article).then(function () {
                getArticles();
            });
        };

        $scope.createArticle = function () {
            var currentUser = usersService.getCurrentUser().then(function (user) {
                userName = user.username;

                $scope.article.created_by = userName;
                var date = formattedDate(new Date())
                $scope.article.tags = array;

                $scope.article.created_at = date;
                articlesService.saveArticle($scope.article).then(function () {
                    $window.location.href = "#/Articles";
                });
            });
        };

        function formattedDate(date) {
            var d = new Date(date || Date.now()),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [day, month, year].join('/');
        }


        $scope.deleteArticle = function (id) {
            articlesService.deleteArticle(id).then(function () {
                getArticles();
            });
        };

        var array = [];

        $scope.addTag = function (tag, id) {
            if ($.inArray(tag, array) == -1) {
                array.push(tag);
                $('#' + id).removeClass("label-default");
                $('#' + id).addClass("label-success");
            } else {
                var index = array.indexOf(tag);
                array.splice(index, 1);
                $('#' + id).removeClass("label-success");
                $('#' + id).addClass("label-default");
            }
            console.log(array);
        }
        $scope.removeTag = function (tags, tag) {
            console.log(tags);
            var index = tags.indexOf(tag);
            tags.splice(index, 1);
            console.log(tags);
        }

        getArticles();
        getTags();
        getCategories();
    }

})();