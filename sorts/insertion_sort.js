//Insertion Sort
function insertionSort(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    curr = arr[i];
    for (var j = i - 1; j >= 0 && (arr[j] > curr); j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curr;
  }
  return arr;
}

var array1 = [4, 7, 1, 90, 12, 412, 3];
console.log('insertion sort: ' + insertionSort(array1));
