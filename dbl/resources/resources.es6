angular.module("dbl").factory("resources", (firebaseUrl, $firebaseArray) => {
    var ref = new Firebase(firebaseUrl + "/resource"),
        list = $firebaseArray(ref);

    return {
        list: list,
    };
});
