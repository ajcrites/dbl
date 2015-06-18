angular.module("dbl").directive("dblHeader", () => {
    return {
        restrict: "E",
        controller: "DblHeaderCtrl as dblHeader",
        templateUrl: "frame/header.html",
    };
}).controller("DblHeaderCtrl", function (auth) {
    this.isLoggedIn = auth.isLoggedIn;
    this.logout = auth.logout;
});
