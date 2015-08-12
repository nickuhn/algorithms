function selectionSort(arr) {
  for(i = 0; i < arr.length; i++) {
    curr = arr[i];
    lowest = i;
    for(j=i; j< arr.length; j++) {
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    arr[i] = arr[lowest];
    arr[lowest] = curr;
  }
  return arr;
}

var array1 = [4, 7, 1, 90, 12, 412, 3];
console.log('selection sort: ' + selectionSort(array1));
