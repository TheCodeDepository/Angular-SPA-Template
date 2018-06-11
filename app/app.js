var MainMenuMod = angular.module("mainMenuModule", ["ngRoute","moment-picker"]);

MainMenuMod.config(function ($routeProvider) {
        $routeProvider
            .when("/tfl", {

            })
            .when("/addRecord", {
                templateUrl: "app/addRecord/addRecordForm.html"
            })   
            .otherwise({
                templateUrl: "pageNotFound.html"
            });
    });

