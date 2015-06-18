angular.module("dbl").directive("dblFooter", () => {
    return {
        restrict: "E",
        controller: "DblFooterCtrl as dblFooter",
        templateUrl: "frame/footer.html",
    };
}).controller("DblFooterCtrl", function (auth) {
    this.isLoggedIn = auth.isLoggedIn;
    this.login = auth.initiateLogin;
});
