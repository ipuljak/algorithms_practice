/**
 *  =============================================
 *          Chapter 1: Arrays & Strings
 *  =============================================
 */


/**
 *  1.1 - Is Unique
 *  -> Implement an algorithm to determine if a string has all unique characters.
 */
const isUnique = str => {
  let letters = str.split('');
  let visited = [];
  // Go through every letter in the string
  for (let x = 0; x < letters.length; x++) {
    // Check if the letter has been visited yet
    if (visited.includes(letters[x])) {
      // Letters are not all unique, return false
      return false;
    }
    // Add it to the visited array if it has not
    visited.push(letters[x]);
  }
  // All letters are unique, return true
  return true;
};

// 1.1 - Tests
isUnique('hello') === false;
isUnique('zdzsdzfdz') === false;
isUnique('f  o') === false;
isUnique('') === true;
isUnique('congrats') === true;


/**
 *  1.2 - Check Permutations
 *  -> Given two strings, write a method to decide if one is a 
 *     permutation of the other.
 */
const checkPerm = (str1, str2) => {
  // If the strings are not of equal length, they cannot be permutations
  if (str1.length !== str2.length) {
    return false;
  }
  // Go through every letter in the first string
  for (let x = 0; x < str1.length; x++) {
    // If the letter is not in the second string, return false
    if (!str2.includes(str1[x])) {
      return false;
    }
    // Remove the character from the second string
    str2 = str2.replace(str1[x], '');
  }
  // If the second string is empty, all letters have been removed
  return str2 === '';
};

// 1.2 - Tests
checkPerm('hello', 'hello') === true;
checkPerm('olleh', 'hello') === true;
checkPerm('', '') === true;
checkPerm('f', '') === false;
checkPerm('cat', 'cth') === false;


/**
 *  1.3 - URLify
 *  -> Write a method to replace all spaces in a string with '%20'. You may 
 *  assume that the string has sufficient space at the end to hold the additional
 *  characters, and that you are given the "true" length of the string.
 */
const urlify = str => {
  // Replace all instances of whitespace with the special character
  let urlified = str.replace(/(\s)+/g, '%20');
  // Strip the end of the string if it trails with the special character
  if (urlified.endsWith('%20')) {
    return urlified.substr(0, urlified.length - 3);
  }
  return urlified;
};


/**
 *  1.4 - Palindrome Permutation
 *  -> Given a string, write a function to check if it is a permutation of a 
 *  palin­drome
 */
const palindromePerm = str => {
  let count = {};
  // Count all of the letters in the string
  str.split('').forEach(x => {
    count[x] ? count[x] += 1 : count[x] = 1;
  });

  // Keep track if we've found an odd amount of letters yet
  let foundOdd = false;
  let letters = Object.keys(count);

  // If we find more than one letter with an odd count, it cannot be a palindrome
  for (let x = 0; x < letters.length; x++) {
    // Check if the number is odd
    if (!(count[letters[x]] % 2 === 0)) {
      // If we haven't found an odd value yet, switch foundOdd to true
      if (!foundOdd) {
        foundOdd = true;
        // An odd already exists, return false as it cannot be a palindrome
      } else {
        return false;
      }
    }
  }
  // 0 or 1 odds exist, therefore a palindrome permutation exists
  return true;
};


/**
 *  1.5 - One Away
 *  There are three types of edits that can be performed on strings: insert a 
 *  character, remove a character, or replace a character. Given two strings, 
 *  write a function to check if they are one edit (or zero edits) away
 */
const oneAway = (a, b) => {
  // Calculate the longest and shortest string for later use
  let longest, shortest;
  if (a.length >= b) {
    longest = a;
    shortest = b;
  } else {
    longest = b;
    shortest = a;
  }

  // If one string has larger than 2 characters or more, it cannot be one away
  if (longest.length - shortest.length > 1) {
    return false;
  }

  // Replace case -> strings are of equal length
  if (longest.length === shortest.length) {
    // Keep track whether more than one position mismatch has been found
    let noMatch = false;
    for (let x = 0; x < shortest.length; x++) {
      if (longest[x] !== shortest[x]) {
        // If a mismatch has already been found, strings are more than "one away"
        if (noMatch) {
          return false;
        }
        noMatch = true;
      }
    }
  }

  // Insert/remove case -> strings are of one character length difference
  let i1 = i2 = 0;
  while (i2 < longest.length && i1 < shortest.length) {
    // If the characters aren't equal in this position
    if (shortest[i1] !== longest[i2]) {
      // And the indices aren't equal, cannot be replaced for "one away"
      if (i1 !== i2) {
        return false;
      }
      i2++;
    } else {
      i1++;
      i2++;
    }
  }

  // All conditions for insert, remove, and replace are satisfied for "one away"
  return true;
};


/**
 *  1.6 - String Compression
 *  Implement a method to perform basic string compression using the counts of 
 *  repeated characters. For example, the string aabcccccaaa would become 
 *  a2blc5a3. If the "compressed" string would not become smaller than the 
 *  original string, your method should return the original string. You can 
 *  assume the string has only uppercase and lowercase letters (a - z).
 */
const compression = str => {
  let compressed = current = str[0];
  let count = 1;

  // Go through each character maintaining a running count of occurances per letter
  for (let x = 1; x < str.length; ++x) {
    // If the letter changes, add in the variables to the compressed string and reset
    if (current !== str[x]) {
      compressed += count + str[x];
      current = str[x];
      count = 1;
    } else {
      ++count;
    }
  }
  // Add the last count
  compressed += count;

  // Only return the compressed string if it's shorter than the given string
  return compressed.length >= str.length ? str : compressed;
};


/**
 *  1.7 - Rotate Matrix
 *  Given an image represented by an NxN matrix, where each pixel in the image 
 *  is 4 bytes, write a method to rotate the image by 90 degrees.
 */
const rotateMatrix = arr => {
  // Construct an array of n empty arrays (where n is number of rows in arr)
  let rotated = arr.map(x => {
    return [];
  });

  // Rotate each value and place it in the proper spot in the rotated array
  for (let x = 0; x < arr.length; ++x) {
    for (let y = 0; y < arr[x].length; ++y) {
      rotated[y][x] = arr[x][y];
    }
  }

  // Finally reverse each row to finish the rotation
  return rotated.map(x => x.reverse());
};


/**
 *  1.8 - Zero Matrix
 *  Write an algorithm such that if an element in an MxN matrix is 0, its entire
 *  row and column are set to 0.
 */
const zeroMatrix = arr => {
  // Construct an array of n empty arrays (where n is number of rows in arr)
  let zero = arr.map(x => {
    return [];
  });

  // Record the index of all rows/columns that have a 0 and populate the new matrix
  let rows = columns = [];
  for (let x = 0; x < arr.length; ++x) {
    for (let y = 0; y < arr[x].length; ++y) {
      // If the value is a 0, record the indices of the rows and columns 
      if (arr[x][y] === 0) {
        rows.push(x);
        columns.push(y);
      }
      // Populate the new matrix with value
      zero[x][y] = arr[x][y];
    }
  }

  // Make each value in the entire row 0 if it contained a 0
  for (let r = 0; r < rows.length; ++r) {
    for (let a = 0; a < zero[rows[r]].length; ++a) {
      zero[rows[r]][a] = 0;
    }
  }

  // Make each value in the entire column 0 if it contained a 0
  for (let a = 0; a < zero.length; ++a) {
    for (let c = 0; c < columns.length; ++c) {
      zero[a][columns[c]] = 0;
    }
  }

  return zero;
};


/**
 *  1.9 - String Rotation
 *  Assume you have a method isSubstringwhich checks if one word is a substring
 *  of another. Given two strings, sl and s2, write code to check if s2 is a 
 *  rotation of sl using only one call to isSubstring (e.g., "waterbottle" is a 
 *  rotation of"erbottlewat").
 */
const isSubstring = (str, substr) => {
  // Return true if substr is a substring of str
  return str.includes(substr);
};

const stringRotation = (str1, str2) => {
  // If the strings are not of equal length, it cannot be a true rotation
  if (str1.length !== str2.length) {
    return false;
  }

  // Concatenate str1 to str1 to ensure the whole str2 substring will fit inside
  return isSubstring(str1 + str1, str2);
};