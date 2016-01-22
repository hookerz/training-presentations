'use strict';

var TweenMax = require('../vendor/TweenMax');

/**
* util brings in TweenMax and the shuffle fn
* @method shuffle
* @param {array} - the array you want to shuffle
* @constructor
*/
module.exports = function() {

  // shuffle array function
  this.shuffle = function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

};