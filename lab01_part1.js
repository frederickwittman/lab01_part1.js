// Fred Wittman
// Lab 01
// COSC 3020-01
// 13 September 2019

function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
}
  return arr;
}

function insertionSortReverse(arr) {
  for (var i = arr.length - 2; i >= 0; i--) {
    var val = arr[i];
    var j;
    for (j = i; j < arr.length - 1 && arr[j+1] < val; j++){
      arr[j] = arr[j+1];
    }
    arr[j] = val;
}
  return arr;
}

// I used playcode.io to write my function and test it.

function testInsertionSort () {
  arr = Array.from({length: 10}, () => Math.floor(Math.random() * 40));
  arr1 = insertionSort(arr);
  for (var i = 0; i < arr.length - 1; i++){
    if(arr1[i] > arr[i + 1]){
      console.log("Not sorted correctly.");
      console.log(arr1)
      return
    }
  }
  console.log("Sorted correctly.")
  console.log(arr1)
}

function testInsertionSortReverse () {
  arr = Array.from({length: 10}, () => Math.floor(Math.random() * 40));
  arr1 = insertionSortReverse(arr);
  for (var i = 0; i < arr.length - 1; i++){
    if(arr1[i] > arr[i + 1]){
      console.log("Not sorted correctly.")
      console.log(arr1)
      return
    }
  }
  console.log("Sorted correctly.")
  console.log(arr1);
  
}

testInsertionSort();
testInsertionSortReverse();
