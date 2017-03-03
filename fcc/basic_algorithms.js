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
 *  7. Check if a string ends with another string
 */
const endsWith = (str, target) => {
  // Easy way out:
  // return str.endsWith(target);
  // Still easy:
  return str.substring(str.length - target.length) === target;
};


/**
 *  8. Repeat a string n number of times
 */
const repeatNTimes = (str, n) => {
  let repeatedString = '';
  // Concatenate str to repeatedString n times
  while (n > 0) {
    repeatedString += str;
    n -= 1;
  }
  return repeatedString;
};


/**
 *  9. Truncate a string with the given length
 */
const truncate = (str, n) => {
  // If the string is shorter than the given lenth, then just return the string
  if (str.length <= n) {
    return str;
  }
  // Otherwise, truncate greedily if n > 3, non-greedily if n <= 3 and add '...'
  return n > 3 ? str.slice(0, n - 3) + '...' : str.slice(0, n) + '...';

};


/** 
 *  10. Split an array into groups the length of size and return as a 2-D array
 */
const chunkArray = (arr, size) => {
  let chunk = [];
  let index = 0;
  // Loop through the array and push sliced arrays of size 'size'
  while (index < arr.length) {
    chunk.push(arr.slice(index, index + size));
    index += size;
  }
  return chunk;
};


/**
 *  11. Return the remaining array after chopping off n elements from the head
 */
const removeFromHeader = (arr, n) => {
  return arr.slice(n);
};


/**
 *  12. Return true if all of the letters in the second string exist in the first
 */
const mutation = arr => {
  let word = arr[0].toLowerCase();
  let letters = arr[1].split('');
  for (var x = 0; x < letters.length; x++) {
    // Immediately return false if any of the letters don't exist
    if (word.indexOf(letters[x].toLowerCase()) === -1) {
      return false;
    }
  }
  // All letters exist, return true
  return true;
};


/**
 *  13. Remove all falsy values from an array
 */
const removeFalsy = arr => {
  return arr.filter(x => {
    return Boolean(x);
  });
};


/**
 *  14. Remove given arguments from the initial array
 */
// Have to use standard function notation to access arguments object
function removeGivens(arr) {
  // Access all of the arguments
  const args = Array.from(arguments);
  // Get an array of all the variables to filter out
  let vars = args.slice(1);
  // Filter out the vars from the array
  return args[0].filter(x => {
    return vars.indexOf(x) === -1;
  });
};


/**
 *  15. Find the lowest index a value should appear in an array once sorted
 */
const getIndexToInsert = (arr, n) => {
  // Sort the array properly
  arr = arr.sort((x, y) => {
    return x - y;
  });
  // Find the earliest position to insert
  for (var x = 0; x < arr.length; x++) {
    if (n <= arr[x]) {
      return x;
    }
  }
  // Otherwise return the length of the array if value is larger than whole array
  return arr.length;
};


/**
 *  16. Decode a ROT13 encoded string
 */
const rot13 = str => {
  // Replace each letter of the word
  return str.replace(/[A-Z]/g, y => {
    // Read the character code for the letter
    let yChar = y.charCodeAt(0);
    // Hacky solution to obtain the proper shifted character code
    return yChar < 78 ? String.fromCharCode(yChar + 13) : String.fromCharCode(yChar - 13);
  });
};