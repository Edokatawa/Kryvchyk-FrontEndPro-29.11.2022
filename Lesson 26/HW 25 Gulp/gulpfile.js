const gulp = require("gulp");
const less = require("gulp-less");
const cleanCss = require("gulp-clean-css");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

const paths = {
    styles: {
        src: "src/css/**/*.less",
        dest: "build/css/",
    },
    scripts: {
        src: ["src/js/**/*.js", "src/main.js"],
        dest: "build/js/",
    },
};

const gulpStylesMinBuild = async () =>
    gulp.src(paths.styles.src).pipe(less()).pipe(cleanCss()).pipe(concat("styles.min.css")).pipe(gulp.dest(paths.styles.dest));

const gulpScriptsMinBuild = async () =>
    gulp.src(paths.scripts.src).pipe(babel()).pipe(uglify()).pipe(concat("result.min.js")).pipe(gulp.dest(paths.scripts.dest));

const gulpWatchAppFiles = () => {
    gulp.watch(paths.styles.src, gulpStylesMinBuild);
    gulp.watch(paths.scripts.src, gulpScriptsMinBuild);
};

gulp.task("less", gulpStylesMinBuild);
gulp.task("js", gulpScriptsMinBuild);

gulp.task("watch-app", gulpWatchAppFiles);
gulp.task("build-app", gulp.parallel("less", "js"));
