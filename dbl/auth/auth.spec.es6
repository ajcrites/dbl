describe(`auth`, () => {
    let auth;
    let $rootScope;
    let firebaseUrl;

    beforeEach(inject((_auth_, _$rootScope_, _firebaseUrl_) => {
        auth = _auth_;
        $rootScope = _$rootScope_;
        firebaseUrl = _firebaseUrl_;
    }));

    describe(`initiateLogin`, () => {
        it(`initiates user login`, () => {
            auth.initiateLogin()
            auth.ref.changeAuthState({
                uid: "test",
            });
            auth.ref.flush();
            // Trigger promise resolution
            $rootScope.$apply();

            expect(auth.isLoggedIn()).to.be.true;
        });
    });
});
