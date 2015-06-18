module.exports = function(config) {
    config.set({
        frameworks: ["mocha", "chai-sinon"],
        files: [
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular.min.js",
            "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.0/angular-mocks.js",
            "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.min.js",
            "https://cdn.firebase.com/js/client/2.2.7/firebase.js",
            "https://cdn.firebase.com/libs/angularfire/1.1.1/angularfire.min.js",
            "mockfirebase.js",
            "bootstrap-tests.es6",
            "dbl/app.es6",
            "dbl/app.test.es6",
            "dbl/**/*.es6",
            "dbl/**/*.spec.es6",
            "dbl/**/*.html",
        ],
        exclude: [
            "dbl/app.devel.es6",
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        plugins: [
            "karma-mocha",
            "karma-chai-sinon",
            "karma-phantomjs-launcher",
            "karma-ng-html2js-preprocessor",
            "karma-babel-preprocessor",
        ],
        preprocessors: {
            "dbl/**/*.html": ["ng-html2js"],
            "bootstrap-tests.es6": ["babel"],
            "dbl/**/*.es6": ["babel"],
            "dbl/**/*.spec.es6": ["babel"],
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: "dbl/",
            moduleName: "test-templates",
        },
        babelPreprocessor: {
            options: {
                sourceMap: "inline"
            },
            filename: function (file) {
                return file.originalPath.replace(/\.es6$/, ".js");
            },
            sourceFileName: function (file) {
                return file.originalPath;
            },
        },
        browsers: ["PhantomJS"],
        singleRun: false
    });
};
