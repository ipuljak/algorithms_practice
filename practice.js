// Use the map function to add 3 to every value in the variable oldArray, and save the results into variable newArray. oldArray should not change.

let oldArray = [4, 3, 1];

let newArray = oldArray.map(x => {
  return x + 5;
});

// Use the reduce method to sum all the values in array and assign it to singleVal.

let array = [4, 5, 6, 7, 8];

let singleVal = array.reduce((x, y) => {
  return x + y;
});

// Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.

oldArray = [1,2,3,4,5,6,7,8,9,10];

newArray = oldArray.filter(x => {
   return x < 6;
});
