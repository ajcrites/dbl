describe("auth", () => {
    var auth;

    beforeEach(inject((_auth_) => {
        auth = _auth_;
        sinon.spy(auth, "auth");
    }));

    it("auth check", () => {
        auth.auth();

        expect(auth.auth).to.have.been.called;
    });

    afterEach(() => {
        auth.auth.restore();
    });
});
