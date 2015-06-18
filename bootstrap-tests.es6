/**
 * Universal preload for tests
 */
beforeEach(module("dbl"));
beforeEach(module("test-templates"));
before(() => {
    MockFirebase.override();
})
