const gulp = require('gulp');
const connect = require('gulp-connect');

const WATCHED_FILES = ['*.html']
const COMMAND = {
  RELOAD: 'reload',
  SERVE: 'serve'
};

gulp.task(COMMAND.RELOAD, () => gulp.src(WATCHED_FILES)
  .pipe(connect.reload()));

gulp.task(COMMAND.SERVE, () => {
  connect.server({
    root: '.',
    port: 8000,
    host: '0.0.0.0',
    livereload: true
  });

  gulp.watch(WATCHED_FILES, gulp.series(COMMAND.RELOAD))
});
