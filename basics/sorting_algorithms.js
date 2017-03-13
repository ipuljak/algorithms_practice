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


/* Merge Sort */
const merge = (left, right) => {
  let result = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] <= right[0]) {
      result.push(left[0]);
      left = left.slice(1);
    } else {
      result.push(right[0]);
      right = right.slice(1);
    }
  }

  for (let x = 0; x < left.length; x++) {
    result.push(left[x]);
  }

  for (let y = 0; y < right.length; y++) {
    result.push(right[y]);
  }

  return result;
};

const mergeSort = arr => {
  // Base case - list must be sorted at this point
  if (arr.length < 2) {
    return arr;
  }

  let left = [];
  let right = [];

  for (let x = 0; x < arr.length; x++) {
    if (x < (arr.length / 2)) {
      left.push(arr[x]);
    } else {
      right.push(arr[x]);
    }
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
};