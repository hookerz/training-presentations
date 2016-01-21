// demo arrays
var introNums = [0,1,2,3,4,5,6,7,8,9];
var egBubbleArr = [0,1,2,3,4];
var egMergeArr = [2,0,3,1];
var egNativeArr = [0,1,2,3,4,5,6,7];

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
// shuffle(egMergeArr);
shuffle(egNativeArr);