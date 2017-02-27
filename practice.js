/**
 * ==========================
 *  ARRAY FUNCTIONS EXAMPLES
 * ==========================
 */


/** 
 *  MAP
 *    -> Add 5 to each value in the array
 */
const add5 = arr => {
  return arr.map(x => {
    return x + 5;
  });
};


/**
 *  REDUCE
 *    -> Sum all the values in the array
 */
const sumArray = arr => {
  return arr.reduce((x, y) => {
    return x + y;
  });
};


/**
 *  FILTER
 *    -> Return all values in array smaller than 6
 */
const smallerThan6 = arr => {
  return arr.filter(x => {
    return x < 6;
  });
};


/**
 *  SORT
 *    -> Sort the array from largest to smallest
 */
const sortLargeToSmall = arr => {
  return sort((x, y) => {
    return y - x;
  });
};


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


/**
 *  
 */