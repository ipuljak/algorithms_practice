/**
 * ===========================
 *   INTERMEDIATE ALGORITHMS
 * ===========================
 */


/**
 *  1. Return the sum of two numbers and all in between
 */
const sumAll = arr => {
  // First sort the values
  arr = arr.sort((x, y) => x - y);
  // Add in all of the numbers
  let sum = 0;
  for (var x = arr[0]; x <= arr[1]; x++) {
    sum += x;
  }
  return sum;
};


/**
 *  2. Return the symmetric difference of two arrays
 */
const diffArray = (arr1, arr2) => {
  // Concatenate the two arrays and filter through it
  return arr1.concat(arr2).filter(x => {
    // Only return the value if it doesn't exist in both given arrays
    if (!(arr1.includes(x) && arr2.includes(x))) {
      return x;
    }
  });
};


/**
 *  3. Convert the given number into a roman numeral
 */
const toRoman = num => {
  // A switch function that finds the appropriate roman symbol based on given number
  const findClosestRoman = num => {
    switch (true) {
      case num >= 1000:
        return [1000, 'M'];
      case num >= 900:
        return [900, 'CM'];
      case num >= 500:
        return [500, 'D'];
      case num >= 400:
        return [400, 'CD'];
      case num >= 100:
        return [100, 'C'];
      case num >= 90:
        return [90, 'XC'];
      case num >= 50:
        return [50, 'L'];
      case num >= 40:
        return [40, 'XL'];
      case num >= 10:
        return [10, 'X'];
      case num >= 9:
        return [9, 'IX'];
      case num >= 5:
        return [5, 'V'];
      case num >= 4:
        return [4, 'IV'];
      default:
        return [1, 'I'];
    }
  };

  // Construct the roman number while deconstructing the actual number
  let roman = '';
  while (num !== 0) {
    let vals = findClosestRoman(num);
    num -= vals[0];
    roman += vals[1];
  }
  return roman;
};


/**
 *  4. Look through an array of objects and return an array of all objects
 *     that have matching property and value pairs
 */
const whatIsInAName = (collection, source) => {
  // Get all of the keys from the source
  let sKeys = Object.keys(source);
  // Go through each object in the collection
  return collection.filter(x => {
    // Go through each key from the source
    for (var i = 0; i < sKeys.length; i++) {
      // Check if the key exists in the current object and the values match
      if (!(x[sKeys[i]] && x[sKeys[i]] === source[sKeys[i]])) {
        // Return false if it does not exist/match
        return false;
      }
    }
    // Return the whole object if all keys exist and match
    return x;
  });
};


/**
 *  5. Perform a search and replace using the provided arguments
 *     while keeping the same case
 */
const myReplace = (str, before, after) => {
  let index = str.indexOf(before);
  // Convert after to uppercase if necessary
  if (before[0].toUpperCase() === before[0]) {
    after = after[0].toUpperCase() + after.slice(1)
  }
  // Replace the word
  return str.replace(before, after);
};


/**
 *  6. Translate the provided string to pig latin
 */
const translatePigLatin = str => {
  // Check if the word starts with a vowel
  if (str.match(/^[aeiou]/)) {
    return str + 'way';
  } else {
    // Move the leading group of consanants to the end of the string
    let consonants;
    return str.replace(/(?:(?![aeiou])[a-z]){1,}/, x => {
      consonants = x;
      return '';
    }) + consonants + 'ay';
  }
};


/**
 *  7. 
 */