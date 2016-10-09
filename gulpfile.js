var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var watch = require('gulp-watch');
var exec = require('child_process').exec;

var buildTs = function() {
     return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist")); 
}

gulp.task("default", function () {
      buildTs();
});

gulp.task("watch-ts", function () {
    watch("src/**/*.ts", function(vinyl) {
        buildTs();
    });
});


