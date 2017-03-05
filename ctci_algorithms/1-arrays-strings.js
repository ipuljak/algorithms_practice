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