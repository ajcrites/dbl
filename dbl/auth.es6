angular.module("dbl").factory("auth", (firebaseUrl, $firebaseAuth) => {
    var ref = new Firebase(firebaseUrl),
        auth = $firebaseAuth(ref),
        sessionAuth = auth.$getAuth();

    return {
        hasStoredAuth: () => {
            return !!sessionAuth.uid;
        },
        getUid: () => {
            return sessionAuth.uid;
        },
        initiateLogin: function () {
            return auth.$authWithOAuthPopup("google")
                .then(authData => sessionAuth = authData)
                .catch(err => alert(err));
        },
    };
});
