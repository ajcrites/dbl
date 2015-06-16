angular.module("dbl").controller("ResourcesListCtrl", function (resources) {
    this.resources = resources.list;
});
