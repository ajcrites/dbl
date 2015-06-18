angular.module("dbl", ["firebase", "ui.router"])
.config(($stateProvider, $urlRouterProvider) => {
    /**
     * App effectively has only one page and needs only one controller
     *
     * States are used for deep linking
     */
    $stateProvider
        .state("home", {
            url: "/",
            controller: "ResourcesListCtrl as resourcesList",
            templateUrl: "resources/list.html",
        })
    ;

    $urlRouterProvider.otherwise("/");
});
