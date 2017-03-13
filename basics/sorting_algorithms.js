/* Insertion Sort */
const insertionSort = arr => {
  let val, x, y;

  for (x = 0; x < arr.length; x++) {
    val = arr[x];
    // Shift the values if they are larger than the value
    for (y = x - 1; y >= 0 && arr[y] > val; y--) {
      arr[y + 1] = arr[y];
    }
    // Insert the value in the free spot after shifting
    arr[y + 1] = val;
  }
  return arr;
};


const insertionSort2 = arr => {
  let sorted = [];
  let counter;

  for (let x = 0; x < arr.length; x++) {
    counter = sorted.length;
    while (counter >= 0) {
      if (counter === 0) {
        sorted.splice(0, 0, arr[x]);
        break;
      }
      if (arr[x] >= sorted[counter - 1]) {
        sorted.splice(counter, 0, arr[x]);
        break;
      }
      counter--;
    }
  }
  return sorted;
};


/* Selection Sort */
const selectionSort = arr => {
  let min, cur;

  for (let x = 0; x < arr.length; x++) {
    min = x;
    cur = arr[x];
    // Find the lowest value in the remaining part of the array
    for (let y = x; y < arr.length; y++) {
      if (arr[min] >= arr[y]) {
        min = y;
      }
    }
    // Swap min value with the x value
    arr[x] = arr[min];
    arr[min] = cur;
  }
  return arr;
};


let arr1 = [5, 3, 1, 9, 7];
let arr2 = ['a', 'r', 'd', 's', 'x', 'e'];

console.log(selectionSort(arr1));