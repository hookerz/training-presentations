'use strict';

/**
* This is the MergeDemo constructor complete with animation
* @method insert
* @method mergeSort
* @method merge
* @param {arr} - the array you want to mergeSort
* @param {tl} - timeline
* @constructor
*/
var Merge = function() {
  var array = [];

  this.insert = function(item) {
    array.push(item);
  };

  // merge sort
  this.mergeSort = function(arr, tl) {
    var len = arr.length;
    if(len < 2)
      return arr;


    var mid = Math.floor(len/2); 
    var left = arr.slice(0,mid); 
    var right = arr.slice(mid);

    // identify leftmost item, hightlight green and bump it down
    for (var i = 0; i < left.length; i++) {
      tl.to($('.merge-list-index-' + left[i]).find('img'), 0.5, {borderColor: 'green'});
      tl.to($('.merge-list-index-' + left[i]).find('img'), 0.5, {y: '+=100', ease: Power2.easeOut});
    };

    // identify rightmost item, hightlight green and bump it down
    for (var i = 0; i < right.length; i++) {
      tl.to($('.merge-list-index-' + right[i]).find('img'), 0.5, {borderColor: 'blue'});
      tl.to($('.merge-list-index-' + right[i]).find('img'), 0.5, {y: '+=100', ease: Power2.easeOut});
    };

    return this.merge(this.mergeSort(left, tl),this.mergeSort(right, tl), tl);    
    
  };

  this.merge = function(left, right, tl) {

    var result = [];
    var lLen = left.length;
    var rLen = right.length;
    var l = 0;
    var r = 0;
    var width = $('.merge-list-index-' + right[r]).width();

    while(l < lLen && r < rLen) {

      if(left[l] < right[r]) {

        tl.to($('.merge-list-index-' + left[l]).find('img'), 0.5, {borderColor: 'black'});

        result.push(left[l++]); // if left item is less than right item, do nothing
        
      }
      else {

        // otherwise, switch the position
        tl.to($('.merge-list-index-' + left[l]).find('img'), 0.5, {x: '+=' + width, ease: Power4.easeInOut});
        tl.to($('.merge-list-index-' + right[r]).find('img'), 0.5, {x: '-=' + width, ease: Power4.easeInOut});

        result.push(right[r++]);        

      }

      tl.to($('.merge-list-index-' + right[r]).find('img'), 0.5, {borderColor: 'black'});
    }

    result = result.concat(left.slice(l)).concat(right.slice(r));

    // when in the right position, bump up in place
    for (var i = 0; i < result.length; i++) {

      tl.to($('.merge-list-index-' + result[i]).find('img'), 0.5, {y: '-=100', ease: Back.easeOut});
    };

    return result; // return new array

  };

};

module.exports = Merge;