(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./config":2}],2:[function(require,module,exports){
'use strict';

var config = {};

module.exports = config;

},{}]},{},[1])


//# sourceMappingURL=main.build.js.map
