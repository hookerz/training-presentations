// demo arrays
var egBubbleArr = ["images/1.png", "images/3.png", "images/2.png", "images/4.png", "images/0.png"];
var egMergeArr = ["images/1.png", "images/3.png", "images/2.png", "images/4.png", "images/0.png"];
var egQuickArr = ["images/1.png", "images/3.png", "images/2.png", "images/4.png", "images/0.png"];

// shuffle array function
function shuffle(array) {
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

// shuffle on load/refresh
shuffle(egBubbleArr);
shuffle(egMergeArr);
shuffle(egQuickArr);

// bubble sort
function bubbleSort(arr){
   var len = arr.length; 
   for (var i = len-1; i >=0; i--) {
     for(var j = 1; j<=i; j++) { 
       if(arr[j-1]>arr[j]) {
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}

// merge sort
function mergeSort(arr){
   var len = arr.length;
   if(len <2)
      return arr;
   
    var mid = Math.floor(len/2), 
       left = arr.slice(0,mid), 
       right =arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
  
 
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  
  while(l < lLen && r < rLen) {
     if(left[l] < right[r]) {   
       result.push(left[l++]);
     }
     else {     
       result.push(right[r++]);
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
}

// quick sort
function quickSort(arr, left, right) {
   var len = arr.length,
   pivot,
   partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

// append array to ul element
for (i=0;i<egBubbleArr.length;i++) {
    $("#egBubble").append("<li><img src='" + egBubbleArr[i] + "'/></li>");
}


for (i=0;i<egMergeArr.length;i++) {
    $("#egMerge").append("<li><img src='" + egMergeArr[i] + "'/></li>");
}

for (i=0;i<egQuickArr.length;i++) {
    $("#egSort").append("<li><img src='" + egQuickArr[i] + "'/></li>");
}


// $('#sortReal').on('click', function() {
// 	console.log(egBubbleArr);
// 	bubbleSort(egBubbleArr);

// 	for (var i=0;i<egBubbleArr.length;i++) {
// 		$("#bubbleDump").append("<li><img src='" + egBubbleArr[i] + "'/></li>");
// 		TweenMax.staggerTo('#bubbleDump li', 0.5, {autoAlpha: 1, top: 0, ease: Back.easeOut}, 0.05);
// 	}
	   
// });


// intro anim
var tl = new TimelineMax();

tl.to('#logo', 0.75, {autoAlpha: 1, left: 20, ease: Power1.easeOut});
tl.to('.intro-slide h1', 0.75, {autoAlpha: 1, top: 0, ease: Power1.easeOut}, 0.25);
tl.to('.intro-slide h2', 0.75, {autoAlpha: 1, top: 0, ease: Power1.easeOut}, 0.5);
tl.to('.intro-slide img', 0.75, {autoAlpha: 1, top: 0, scale: 1, ease: Back.easeOut}, 0.75);

// bubble sort anim tl's
var bubbleFrameOne = new TimelineMax({paused: true});

bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortTwo', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {left: 65, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortTwo', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortTwo', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortThree', 0.5, {top: 0, borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {left: 125, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortThree', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortThree', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFour', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {left: 185, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFour', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFour', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFive', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {left: 262, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFive', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFive', 0.5, {borderColor: 'black', ease:Power1.easeOut});

var bubbleFrameTwo = new TimelineMax({paused: true});

bubbleFrameTwo.to('#bSortOneS2', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortTwoS2', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {left: 65, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortTwoS2', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortTwoS2', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortThreeS2', 0.5, {top: 0, borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {left: 125, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortThreeS2', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortThreeS2', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortFourS2', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {left: 193, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortFourS2', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortFourS2', 0.5, {borderColor: 'black', ease:Power1.easeOut});

$('#bSortStageOne').on('click', function(){
	if ($('.bubble-sort-frame-one').hasClass('played')) {
		bubbleFrameOne.reverse();
	} else {
		bubbleFrameOne.play();
	};

	$('.bubble-sort-frame-one').toggleClass('played');
});

$('#bSortStageTwo').on('click', function(){
	if ($('.bubble-sort-frame-two').hasClass('played')) {
		bubbleFrameTwo.reverse();
	} else {
		bubbleFrameTwo.play();
	};

	$('.bubble-sort-frame-two').toggleClass('played');
})

// eg bubble
var egBubbleArr = []; 
egBubbleArr[0] = "images/4.png";
egBubbleArr[1] = "images/0.png";
egBubbleArr[2] = "images/2.png";
egBubbleArr[3] = "images/1.png";
egBubbleArr[4] = "images/3.png";