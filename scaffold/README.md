# Presentation Scaffold using reveal.js

# This scaffold is based off the hook standards scaffold:  https://github.com/hookerz/gulp-hook-standards-scaffold
# standards scaffold docs:  https://github.com/hookerz/gulp-hook-standards-scaffold/blob/master/README.md

# reveal.js repo:  https://github.com/hakimel/reveal.js/

The presentation markup hierarchy needs to be .reveal > .slides > section where the section represents one slide and can be repeated indefinitely. If you place multiple section elements inside of another section they will be shown as vertical slides. The first of the vertical slides is the "root" of the others (at the top), and will be included in the horizontal sequence