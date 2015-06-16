angular.module("dbl", ["firebase", "ui.router"])
.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state("home", {
            url: "/",
            controller: "ResourcesListCtrl as resourcesList",
            templateUrl: "resources/list.html",
        })
    ;

    $urlRouterProvider.otherwise("/");
});
