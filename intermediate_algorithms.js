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
 *  7. Take each character, get its pair, and return the results as a 2D array
 *     Base pairs are a pair of AT and CG
 */
const pairElement = str => {
  // Define all of the possible pairings
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  // Create all of the pairs
  let letters = str.split('');
  return letters.map(x => {
    return [x, pairs[x]];
  });
};


/**
 *  8. Find the missing leters in the alphabetic letter range
 */
const fearNotLetter = str => {
  let letters = str.split('');
  // Observe each letter
  for (var x = 0; x < letters.length - 1; x++) {
    // If the next charCode is not an increment of 1, return the next charCode
    if (letters[x].charCodeAt() + 1 !== letters[x + 1].charCodeAt()) {
      return String.fromCharCode(letters[x].charCodeAt() + 1);
    }
  }
  return undefined;
};


/**
 *  9. Check if a value is classified as a boolean primitive
 */
const booWho = bool => {
  return typeof (bool) === 'boolean';
};


/**
 *  10. Takes two or more arrays and returns a new array of unique values
 *      in the original order
 */
// Have to use standard function notation to access arguments object
function uniteUnique(arr) {
  // Access all of the arguments
  const args = Array.from(arguments);
  // Flatten the arguments into one array
  let flattened = args.reduce((x, y) => {
    return x.concat(y);
  });
  // Push unique arguments into a new array as they are read in
  let uniques = [];
  flattened.forEach(x => {
    if (!uniques.includes(x)) {
      uniques.push(x);
    }
  });
  return uniques;
}


/**
 *  11. Convert the characters &, <, >, ", ' in a string to their HTML entities
 */
const convertHTML = str => {
  let letters = str.split('');
  return letters.map(x => {
    switch (x) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&​quot;';
      case "'":
        return '&​apos;';
      default:
        return x;
    }
  }).join('');
};


/**
 *  12. Convert a string to spinal case
 */
const spinalCase = str => {
  str = str
    // Greedily add a '-' in front of every capitalized letter
    .replace(/[A-Z]/g, x => {
      return '-' + x.toLowerCase();
    })
    // Replace all special characters including spaces with a '-'
    .replace(/(?:[\W_]{1,})/gi, x => {
      return '-';
    });
  // Remove a '-' from the head if it exists
  return str[0] === '-' ? str.slice(1) : str;
};


/**
 *  13. Sum all odd fibonacci numbers
 */
const sumFibs = num => {
  let fibs = [1];
  let counter = 1;
  // Get the list of fibonaccis
  while (counter <= num) {
    fibs.unshift(counter);
    counter = fibs[0] + fibs[1];
  }
  // Sum all of the odd fibonaccis
  return fibs.reduce((x, y) => {
    return y % 2 ? x : x + y;
  });
};


/**
 *  14. Sum all of the primes up to and including the given number
 */
const sumPrimes = num => {
  // Return true if a number is a prime
  const isPrime = num => {
    if (num === 2) return true;
    if (num > 2) {
      for (var x = 2; x < num; x++) {
        if ((num % x) === 0) return false;
      }
      return true;
    }
    return false;
  };
  // Calculate the sum of all the primes in the range from 0 -> num
  let sum = 0;
  for (var x = 0; x <= num; x++) {
    if (isPrime(x)) sum += x;
  }
  return sum;
};


/**
 *  15. Find the smallest common multiple that can be evenly divided by both
 *      as well as by all the sequential numbers in the range between them
 */
const smallestCommons = arr => {
  // Returns true if each number in arr divides evenly in multiple
  const checkCommons = (arr, multiple) => {
    for (var x = arr[0]; x < arr[1]; x++) {
      if ((multiple % x) !== 0) return false;
    }
    return true;
  };
  // Sort the array
  arr = arr.sort((x, y) => x - y);
  // Check commons for all values for each multiple of arr's max value
  let multiple = arr[1];
  while (!checkCommons(arr, multiple)) {
    multiple += arr[1];
  }
  return multiple;
};


/**
 *  16. Looks through an array (first argument) that returns the first element
 *      in the array that passes a truth test (second argument)
 */
