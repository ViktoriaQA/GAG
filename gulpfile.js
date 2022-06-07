import gulp from "gulp";
import {path} from "./gulp/config/path.js";


global.app = {
    path: path,
    gulp: gulp
}

import {copy} from './gulp/tasks/copy.js';

function watcher (){
    gulp.watch(path.watch.files, copy)
}

const dev = gulp.series(copy, watcher); // виконує задачі послідовно

gulp.task('default',dev)
