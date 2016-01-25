# Hook Training Presentations

A collection of informative and resourceful presentations dealing with all things javascript. Made with ♥ by and for Hook devs!

# Presentation Scaffold using reveal.js

The presentation base scaffold is based off the hook standards scaffold:  https://github.com/hookerz/gulp-hook-standards-scaffold
<br>
standards scaffold docs:  https://github.com/hookerz/gulp-hook-standards-scaffold/blob/master/README.md

Markup - Here's a barebones example
```html
<pre>
    <body>
    	<head>
    		<link rel="stylesheet" href="css/reveal.css">
    		<link rel="stylesheet" href="css/zenburn.css">
    		<link rel="stylesheet" href="css/hook.css">
    		<link rel="stylesheet" href="css/index.css">
    	</head>
        <div class="reveal">
            <div class="slides">
                <section>Slide 1</section>
                <section>Slide 2</section>
            </div>
        </div>
        <script src="js/head.min.js"></script>
        <script src="js/reveal.min.js"></script>
        <script>
            // Full list of configuration options available at:
			// https://github.com/hakimel/reveal.js#configuration
			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,

				transition: 'slide', // none/fade/slide/convex/concave/zoom

				// Optional reveal.js plugins
				dependencies: [
					{ src: 'js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: 'js/plugin/zoom-js/zoom.js', async: true },
					{ src: 'js/plugin/notes/notes.js', async: true }
				]
			});
        </script>
    </body>

</pre>
```

The presentation markup hierarchy needs to be .reveal > .slides > section where the section represents one slide and can be repeated indefinitely. If you place multiple section elements inside of another section they will be shown as vertical slides. The first of the vertical slides is the "root" of the others (at the top), and will be included in the horizontal sequence.

Markup - Vertical slides
```html
<pre>
	<div class="reveal">
	    <div class="slides">
	        <section>Single Horizontal Slide</section>
	        <section>
	            <section>Vertical Slide 1</section>
	            <section>Vertical Slide 2</section>
	        </section>
	    </div>
	</div>
</pre>
```

reveal.js repo/docs:  https://github.com/hakimel/reveal.js/

