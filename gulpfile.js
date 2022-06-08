import gulp from "gulp";
import {path} from "./gulp/config/path.js";


global.app = {
    path: path,
    gulp: gulp
}

import {copy} from './gulp/tasks/copy.js';
import {reset} from './gulp/tasks/reset.js';
import {html} from './gulp/tasks/html.js';

function watcher (){
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, copy)
}
const mainTask = gulp.parallel(copy, html) // копіювання html файлів та інших файлів

const dev = gulp.series(reset, mainTask, watcher); // виконує задачі послідовно (reset на поч. щоб очищало папку dist потім copy)

gulp.task('default', dev)
