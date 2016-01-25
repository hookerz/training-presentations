/**
 * Adds reveal folder to js.
 * @tasks/scripts-reveal
 */

'use strict';

/**
 * @param gulp - function
 * @param bs - Browser sync instance
 * @param options - object
 * options.vendor : Path to the entry js file.
 * options.dist : Destination directory for file output.
 * @returns {Function}
 */
module.exports = function( gulp, bs, options ) {

  return function() {

    return gulp.src(options.reveal.src)
      .pipe(gulp.dest(options.dist))
      .pipe(bs.stream());

  };

};
