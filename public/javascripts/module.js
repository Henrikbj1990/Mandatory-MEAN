(function () {
    "use strict";

    var module = angular.module("module", ["layout.module", "ngRoute", "ngResource"]);
    module.config(function () {


    });
    module.run(function ($rootScope) {
        $rootScope.authenticated = false;
    });
}());