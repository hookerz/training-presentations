'use strict';

var config = require('./config');

var LoadImages = LoadImages || function(a, d, z) {
	a instanceof Array || (a = [a]);
	for (var e = a.length, f = 0, g = e; g--;) {
		var b = document.createElement("img");
		b.onload = function() {
			f++; 
			f >= e && isFunction(d) && d(z)
		};
		b.src = a[g]; 
	}
};

var isFunction = isFunction || function(functionToCheck) {
	var getType = {};
	return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
};

LoadImages([
	'images/advantage.jpg',
	'images/core.jpg',
	'images/frameworks.png',
	'images/functions-in-out.png',
	'images/funk.jpg',
	'images/pulp.png',
	'images/deku.png',
	'images/lodash.png',
	'images/ramda.jpg',
	'images/react.png',
	'images/underscore.png',
	'images/vue.jpg',
	'images/robit.png',
	'images/blah.jpg',
	'images/refactor.jpg',
	'images/thou.jpg',
	'images/PureMichigan.jpg',
	'images/fp-dino.jpg',
	'images/arrow-functions.jpg',
	'images/end-fp.jpg',
	'images/fighting.gif',
	'images/goku.gif',
	'images/library.gif',
	'images/gage-x.jpg'
], imagesAreLoaded);

function imagesAreLoaded() {

	document.querySelector('#loadingOverlay').style.display = 'none';

	console.log('images are loaded');
};