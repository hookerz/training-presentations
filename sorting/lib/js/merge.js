/**
* This is the MergeDemo constructor complete with animation
* @method insert
* @method mergeSort
* @method merge
* @param {arr} - the array you want to mergeSort
* @param {tl} - timeline
* @constructor
*/
var MergeDemo = function() {
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
			tl.to($('.merge-list-index-' + left[i]).find('img'), 0.5, {y: '+=80', ease: Power2.easeOut});
		};

		// identify rightmost item, hightlight green and bump it down
		for (var i = 0; i < right.length; i++) {
			tl.to($('.merge-list-index-' + right[i]).find('img'), 0.5, {borderColor: 'blue'});
			tl.to($('.merge-list-index-' + right[i]).find('img'), 0.5, {y: '+=80', ease: Power2.easeOut});
		};

		return this.merge(this.mergeSort(left, tl),this.mergeSort(right, tl), tl);

	};

	this.merge = function(left, right, tl) {

		var result = [];
		var lLen = left.length;
		var rLen = right.length;
		var l = 0;
		var r = 0;
		var width = $('#egMerge ul li').width();

		while(l < lLen && r < rLen) {

			if(left[l] < right[r]) {   
				result.push(left[l++]); // if left item is less than right item, do nothing
			}
			else {

				// otherwise, switch the position
				tl.to($('.merge-list-index-' + left[l]).find('img'), 0.5, {x: '+=65', ease: Power4.easeInOut});
				tl.to($('.merge-list-index-' + right[r]).find('img'), 0.5, {x: '-=65', ease: Power4.easeInOut});

				result.push(right[r++]);				

			}
		}

		result = result.concat(left.slice(l)).concat(right.slice(r));

		// when in the right position, bump up in place
		for (var i = 0; i < result.length; i++) {

			tl.to($('.merge-list-index-' + result[i]).find('img'), 0.5, {y: '-=80', ease: Back.easeOut, onComplete: function() {
				TweenMax.to($('.merge-list-index-' + result[i]).find('img'), 0.5, {borderColor: 'black'});
			}});

		};

		return result; // return new array

	};

};



// merge sort animation
var mergeArray = new MergeDemo();
mergeArray.insert(egMergeArr);
console.log('unsorted ', egMergeArr);

$('#mergeReal').on('click', function() {
	var tl = new TimelineMax(),
	mergedArray = [];

	mergedArray = mergeArray.mergeSort(egMergeArr, tl);

	console.log('sorted', mergedArray);

});
