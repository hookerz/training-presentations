'use strict';

var Util = require('./modules/utils');
var Bubble = require('./modules/Bubble');
var Merge = require('./modules/Merge');

// demo arrays
var introNums = [0,1,2,3,4,5,6,7,8,9];
var egBubbleArr = [0,1,2,3,4];
var egMergeArr = [2,0,3,1,5,4,7,6];
var egNativeArr = [0,1,2,3,4,5,6,7];

// shuffle on load/refresh
var util = new Util();
util.shuffle(egBubbleArr);
util.shuffle(egNativeArr);

// append the arrays
for (var i = 0; i < introNums.length; i++) {
	$("#introNums").append("<li class='intro-list'><img src='images/" + introNums[i] + ".png'/></li>");
};

for (i=0;i<egBubbleArr.length;i++) {
    $("#egBubble").append("<li class='bubble-list-index-" + egBubbleArr[i] +"'><img src='images/" + egBubbleArr[i] + ".png'/></li>");
}

for (i=0;i<egMergeArr.length;i++) {
    $("#egMerge").append("<li class='merge-list-index-" + egMergeArr[i] +"'><img src='images/" + egMergeArr[i] + ".png'/></li>");
}

for (i=0;i<egNativeArr.length;i++) {
    $("#egSort").append("<li class='sort-list-index-" + egNativeArr[i] +"'><img src='images/" + egNativeArr[i] + ".png'/></li>");
}

// intro anim
var tl = new TimelineMax();

tl.to('#logo', 0.75, {autoAlpha: 1, left: 20, ease: Power1.easeOut});
tl.to('.intro-slide h1', 0.75, {autoAlpha: 1, top: 0, ease: Power1.easeOut}, 0.4);
tl.to('.intro-slide h2', 0.75, {autoAlpha: 1, top: 0, ease: Power1.easeOut}, 0.7);
tl.to('.intro-slide img', 0.75, {autoAlpha: 1, top: 0, scale: 1, ease: Back.easeOut}, 1);

// intro nums animation
TweenMax.staggerTo('.intro-list', 0.5, {autoAlpha: 1, top: 0, ease: Power2.easeOut}, 0.05);
TweenMax.staggerTo('.intro-list', 0.5, {yoyo: true, repeat: -1, top: 40, repeatDelay: 0.025, ease: Power1.easeInOut}, 0.05);

// bubble sort animation
var bubbleArray = new Bubble();
bubbleArray.insert(egBubbleArr);

$('#sortReal').on('click', function() {

  var tl = new TimelineMax();

  bubbleArray.bubbleSort(egBubbleArr, tl);
  console.log(egBubbleArr);
     
});

// merge sort animation
var mergeArray = new Merge();
mergeArray.insert(egMergeArr);
console.log('unsorted ', egMergeArr);

$('#mergeReal').on('click', function() {
  var tl = new TimelineMax(),
  mergedArray = [];

  mergedArray = mergeArray.mergeSort(egMergeArr, tl);

  console.log('sorted', mergedArray);

});

// native sort animation
$('#nativeReal').on('click', function() {

	egNativeArr.sort();
	
	$('#egSort').css('display', 'none');
	
	for (i=0;i<egNativeArr.length;i++) {
	    $("#sortDump").append("<li class='list-index-" + egNativeArr[i] +"'><img src='images/" + egNativeArr[i] + ".png'/></li>");
	    
	    TweenMax.staggerTo('#sortDump li', 0.5, {autoAlpha: 1, top: 0, ease: Back.easeOut}, 0.05);
	    
	    TweenMax.to('#sortJoke', 0.5, {
	    	delay: 2,
	    	autoAlpha: 1, 
	    	top: 0, 
	    	ease: Power2.easeOut 
		});

		TweenMax.to('#sortJokeImg', 0.5, {
	    	delay: 2.15,
	    	autoAlpha: 1, 
	    	top: 0, 
	    	ease: Power2.easeOut 
		});
	}
	   
});
