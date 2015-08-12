function binarySearch(arr, val) {
  var index = Math.floor(arr.length/2);
  if (arr[index] === val) {
    return true;
  } else if (arr[index] < val && arr.length > 1) {
    return binarySearch(arr.splice(index, arr.length), val);
  } else if (arr[index] > val && arr.length > 1) {
    return binarySearch(arr.splice(0, index), val);
  } else {
    return false;
  }
}

var arraySorted = [1, 3, 4, 7, 12, 90, 412];
console.log('Binary Search True: ' + binarySearch(arraySorted, 90));
console.log('Binary Search False: ' + binarySearch(arraySorted, 42));
