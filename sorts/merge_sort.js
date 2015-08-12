//Merge Sort
function merge(arr1, arr2) {
  var p1 = 0;
  var p2 = 0;
  var mergedArray = [];
  while(p1 < arr1.length && p2 < arr2.length) {
    if(arr1[p1] < arr2[p2]) {
      mergedArray.push(arr1[p1]);
      p1++;
    } else {
      mergedArray.push(arr2[p2]);
      p2++
    }
  }
  while(p1<arr1.length) {
    mergedArray.push(arr1[p1]);
    p1++;
  }
  while(p2<arr2.length) {
    mergedArray.push(arr2[p2]);
    p2++;
  }
  return mergedArray;
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }
  return merge(mergeSort(arr.slice(Math.floor(arr.length/2), arr.length)), mergeSort(arr.slice(0, Math.floor(arr.length/2))));
}

var array1 = [4, 7, 1, 90, 12, 412, 3];
console.log('merge sort: ' + mergeSort(array1));
