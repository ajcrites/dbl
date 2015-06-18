/**
 * Maintain the title app-wide.
 * `link` is injectable -- ultimately use services to determine
 * what the title should be
 */
angular.module("dbl").directive("dblTitle", () => {
    return {
        link: scope => {
            scope.title = "Developer Bucket List";
        },
        template: "{{title}}",
    };
});
