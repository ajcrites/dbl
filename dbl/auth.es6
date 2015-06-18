/**
 * Manage Firebase Authentication
 *
 * Currently only uses Google authentication
 */
angular.module("dbl").factory("auth", (firebaseUrl, $firebaseAuth, $firebaseObject) => {
    /**
     * Retrieve the user's auth information when this service loads (when it is
     * first needed) for use with the session
     */
    let auth = $firebaseAuth(new Firebase(firebaseUrl)),
        sessionAuth = auth.$getAuth();

    return {
        isLoggedIn: () => {
            return sessionAuth && !!sessionAuth.uid;
        },
        /**
         * Initiate Firebase auth login process for Google OAuth
         */
        initiateLogin: () => {
            return auth.$authWithOAuthPopup("google", {scope: "profile, email"})
                .then(authData => sessionAuth = authData)
                .then(auth.createUser)
                .catch(err => alert(err));
        },
        /**
         * Attempt to create a user account for DBL if one does not exist already
         */
        createUser: () => {
            let userRef = new Firebase(firebaseUrl + "/user/" + sessionAuth.uid),
                user = $firebaseObject(userRef);

            user.$loaded().then(() => {
                if (!user.$value) {
                    user.name = sessionAuth.google.displayName;
                    user.email = sessionAuth.google.email;
                    user.$save();
                }
            });
        },
        /**
         * Destroy current auth session
         */
        logout: () => {
            auth.$unauth();
            sessionAuth = null;
        },
    };
});
