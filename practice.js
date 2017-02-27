let array, myArray, oldArray, newArray;
let string, myString, oldString, newString;
let val, myVal, singleVal;
let data, myData;


/**
 * ==========================
 *  ARRAY FUNCTIONS PRACTICE
 * ==========================
 */


// Use the map function to add 3 to every value in the variable oldArray, and save the results into variable newArray. oldArray should not change.
oldArray = [4, 3, 1];

newArray = oldArray.map(x => {
  return x + 5;
});

// Use the reduce method to sum all the values in array and assign it to singleVal.
array = [4, 5, 6, 7, 8];

singleVal = array.reduce((x, y) => {
  return x + y;
});

// Use filter to create a new array with all the values from oldArray which are less than 6. The oldArray should not change.
oldArray = [1,2,3,4,5,6,7,8,9,10];

newArray = oldArray.filter(x => {
   return x < 6;
});

// Use sort to sort array from largest to smallest.
array = [1, 4, 12, 2];

array.sort((x, y) => {
  return y - x;
});


/**
 * ===========================
 *      BASIC ALGORITHMS
 * ===========================
 */


/**
 *  1. Reverse a string
 */
const reverseString = str => {
  // Use the array's reverse function to help reverse the string
  return str.split('').reverse().join('');
};


/**
 *  2. Factorialize a number
 */
const factorialize = num => {
  let count = 1;
  // Multiply each number from 1-num with the counter
  for (var x = 1; x < num + 1; x++) {
    count *= x;
  }
  return count;
};


/**
 *  3. Check for palindromes
 */
const isPalindrome = str => {
  // Clean the string -> remove non-alphanumeric characters and make it lower case
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  // Compare the string to it's reversed copy
  return str === str.split('').reverse().join('');
};


/**
 *  4. Find the length of the longest word in a string
 */
const findLongestWord = str => {
  let words = str.split(' ');
  // Find the longest word by comparing each of the words
  let longestWord = words.reduce((x, y) => {
    return x.length > y.length ? x : y;
  });
  return longestWord.length;
};


/** 
 *  5. Return the string with the first letter of each word capitalized
 */
const capitalizeAll = str => {
  let words = str.split(' ');
  // Capitalize each of the words from the string
  let capitalized = words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalized.join(' ');
};


/**
 *  6. Return the largest number from each sub-array of an array
 */
const largestOfFour = arr => {
  // Iterate through each sub-array
  return arr.map(subArr => {
    // Find the largest value in the array
    return subArr.reduce((x, y) => {
      return x > y ? x : y;
    });
  });
};

