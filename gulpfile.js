var gulp = require("gulp"),
    sourcemaps = require("gulp-sourcemaps"),
    babel = require("gulp-babel"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    ngAnnotate = require("gulp-ng-annotate"),
    serve = require("gulp-serve"),
    del = require("del"),
    eslint = require("gulp-eslint");

var paths = {
    app: ["dbl/app.es6", "dbl/app.devel.es6", "!dbl/app.test.es6", "dbl/**/*.es6", "!dist", "!dbl/**/*.spec.es6"],
};

gulp.task("default", ["lint", "build", "watch", "serve"]);

gulp.task("build", function () {
    gulp
        .src(paths.app)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(rename(function (path) {
            path.extname = ".js";
        }))
        .pipe(ngAnnotate())
        .pipe(concat("app.js"))
        .pipe(uglify())
        .pipe(rename("app.min.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dbl/dist"));
});

gulp.task("serve", serve("dbl"));

gulp.task("watch", function () {
    gulp.watch(paths.app, ["clean", "lint", "build"]);
});

gulp.task("clean", function (done) {
    del(["dbl/dist"], done);
});

gulp.task("lint", function () {
    gulp.src(paths.app)
        .pipe(eslint({
            // currently ignored by eslint, hence the .eslintrc declaration
            // parser: "babel-eslint",
            globals: {
                angular: true,
                console: true,
                Firebase: true,
                localStorage: true,
                alert: true,
            },
            rules: {
                strict: 0,
                "comma-dangle": 0,
                "no-console": 0,
                "no-alert": 0,
            },
        }))
        .pipe(eslint.format());
});
