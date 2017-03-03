/**
 * ===========================
 *     ADVANCED ALGORITHMS
 * ===========================
 */


/**
 *  1. Validate US telephone numbers
 */
const telephoneCheck = str => {
  const reg = /^(1(\-|\s)?)?(\(\d{3}\)|(\d{3}))(\-|\s)?\d{3}(\-|\s)?\d{4}$/;
  return reg.test(str);
};


/**
 *  2. Write a function which takes an album's id (like 2548), a property 
 *     prop (like "artist" or "tracks"), and a value (like "Addicted to Love") 
 *     to modify the data in this collection. If prop isn't "tracks" and value
 *     isn't empty (""), update or set the value for that record album's property
 *     Your function must always return the entire collection object
 */
// Data
let collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

let collectionCopy = JSON.parse(JSON.stringify(collection));

const updateRecords = (id, prop, value) => {
  // If the value is empty, delete the prop from the collection
  if (value === '') {
    delete collection[id][prop];
    return collection;
  }
  // If the prop is not 'tracks'
  if (prop !== 'tracks') {
    // Set the prop to be value
    collection[id][prop] = value;
    // If the prop is 'tracks'
  } else {
    // If tracks already exists, add the value to it
    if (collection[id][prop]) {
      collection[id][prop].push(value);
      // If tracks does not exist, create the tracks array and add the value to it
    } else {
      collection[id][prop] = [value];
    }
  }
  return collection;
};


/**
 *  3. Create a function that takes two or more arrays and returns an array of
 *     the symmetrical difference of the provided arrays
 */
// Have to use standard function notation to access arguments object
function sym(args) {
  // Access all of the arguments
  const arrs = Array.prototype.slice.call(arguments);
  // Compute the symmetrical difference between two arrays
  function symDiff(arr1, arr2) {
    let diff = [];
    // Find unique values in the first array
    for (var x = 0; x < arr1.length; x++) {
      if (!diff.includes(arr1[x]) && !arr2.includes(arr1[x])) {
        diff.push(arr1[x]);
      }
    }
    // Find unique values in the second array
    for (var x = 0; x < arr2.length; x++) {
      if (!diff.includes(arr2[x]) && !arr1.includes(arr2[x])) {
        diff.push(arr2[x]);
      }
    }
    return diff;
  }
  // Compute the symmetrical difference across all arrays
  return arrs.reduce(symDiff);
}


/**
 *  4. Design a cash register drawer that accepts purchase price (first argument)
 *     payment (second argument), and cash in drawer (third argument)
 */

// Example:

// checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], 
// ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], 
// ["ONE HUNDRED", 100.00]]) 

// should return:

// [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], 
// ["DIME", 0.20], ["PENNY", 0.04]]

const checkCashRegister = (price, cash, cid) => {
  // Money value definitions
  const values = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'ONE': 1.00,
    'FIVE': 5.00,
    'TEN': 10.00,
    'TWENTY': 20.00,
    'ONE HUNDRED': 100.00
  };

  // Calculate the total amount in the register
  const calculateCID = cid => {
    return cid.reduce((x, y) => {
      return x + y[1];
    }, 0).toFixed(2);
  };

  // Get the register's total
  const total = calculateCID(cid);
  // Check if we have sufficient funds
  if (cash - price > total) {
    return 'Insufficient Funds';
  }
  // If we use up all of our funds, close up shop
  if (cash - price == total) {
    return 'Closed';
  }

  // Define some variables to maintain as we give out the change
  let change = parseFloat((cash - price).toFixed(2));
  let returned = [];
  let current = [];
  cid = cid.reverse();

  // Go through each type of value, largest to smallest
  for (var x = 0; x < cid.length; x++) {
    current = [cid[x][0], 0.00];
    // While we can give out sufficient change with a particular value
    while (change >= values[cid[x][0]] && cid[x][1] > 0) {
      // Add the currency amount to the currently observed value type
      current[1] = parseFloat((current[1] + values[cid[x][0]]).toFixed(2));
      // Subtract the amount we used from the change register
      cid[x][1] = parseFloat((cid[x][1] - values[cid[x][0]]).toFixed(2));
      // Subtract the amount we used from the remaining change need
      change = parseFloat((change - values[cid[x][0]]).toFixed(2));
    }
    // If we used the current currency value, add it to the returned array
    if (current[1] != 0) {
      returned.push(current);
    }
  }
  // It wasn't possible to give this amount of change back
  if (change > 0) {
    return 'Insufficient Funds';
  }
  // Finally return the array with items by largest to smallest value type
  return returned;
};


/**
 *  5. Update the inventory stored in a 2D array given another 2D array
 */
const updateInventory = (arr1, arr2) => {
  // Go through each item in the new inventory array
  arr2.forEach(item => {
    // Go through each item in the current inventory array
    let foundMatch = false;
    for (var x = 0; x < arr1.length; x++) {
      // If there is a match, update the quantity
      if (item[1] === arr1[x][1]) {
        arr1[x][0] += item[0];
        // We found a match, set the flag and break the loop
        foundMatch = true;
        break;
      }
    }
    // If a match hasn't been found, add the item to the inventory
    if (!foundMatch) {
      arr1.push(item);
    }
  });
  // Sort the current inventory alphabetically and return it
  return arr1.sort((x, y) => {
    // Shouldn't be any equals so only need to return 1/-1
    return (x[1] < y[1]) ? -1 : 1;
  });
};


/**
 *  6. Return the total number of permutations of a string that 
 *     don't have repeated consecutive letters
 */
const permAlone = str => {
  let perms = [];
  let letters = str.split('');

  // Swap two elements in an array
  const swap = (arr, x, y) => {
    let b = arr[x];
    arr[x] = arr[y];
    arr[y] = b;
    return arr;
  };

  // Heap's algorithm for generating array permutations
  const generate = (n, A) => {
    if (n === 1) {
      perms.push(A.join(''));
      return A;
    } else {
      for (var i = 0; i < n - 1; i++) {
        generate(n - 1, A);
        if (n % 2 === 0) {
          A = swap(A, i, n - 1);
        } else {
          A = swap(A, 0, n - 1);
        }
      }
      generate(n - 1, A);
    }
  };

  // Generate a list of permutations on the letters for perms array
  generate(letters.length, letters);

  // Remove any permutations which have repeating letters
  perms = perms.filter(x => {
    // Regular expression which searches for repeating characters
    let regx = /\1(\w)\1+/g;
    return !regx.test(x);
  });

  // Finally return the length of the perms without repeats array
  return perms.length;
};


/**
 *  7. Convert a date range consisting of two dates formated as 
 *     YYYY-MM-DD into a more readable format
 *       - If the date range ends in less than a year from where it begins,
 *         do not display the ending year
 *       - If the date range begins in the current and ends within on year,
 *         the year should not be displayed at the beginning of the range
 *       - If the range ends in the same month that it begins, do not display
 *         the ending year or month
 */
const makeFriendlyDates = arr => {
  // Predefined months of the year
  const months =
    ['January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'];

  // Digit endings in English
  const ending = digit => {
    switch (digit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  // Convert the date to a more computable format
  arr = arr.map(x => {
    return x.split('-').map(y => {
      return parseInt(y);
    });
  });

  // Calculate if there is a difference in years
  let YEAR_DIFFERENCE = false;
  // Later year
  if (arr[1][0] - arr[0][0] > 1) {
    YEAR_DIFFERENCE = true;
  }
  // Same year
  if (arr[1][0] - arr[0][0] === 1) {
    // Later month
    if (arr[1][1] - arr[0][1] > 0) {
      YEAR_DIFFERENCE = true;
    } else {
      // Same month
      if (arr[1][1] - arr[0][1] === 0) {
        // Same or later day
        if (arr[1][2] >= arr[0][2]) {
          YEAR_DIFFERENCE = true;
        }
      }
    }
  }

  // Calculate if it's in the same year
  let CURRENT_YEAR = false;
  if (arr[0][0] === 2016) {
    CURRENT_YEAR = true;
  }

  // Build the first date
  let dates = [];
  let month = months[arr[0][1] - 1];
  let day = arr[0][2].toString() + ending(arr[0][2]);
  let yStr = ', ' + arr[0][0].toString();
  let year = YEAR_DIFFERENCE || (!CURRENT_YEAR && !YEAR_DIFFERENCE) ? yStr : '';
  dates.push(month + ' ' + day + year);

  // Build the second date
  let mStr = months[arr[1][1] - 1];
  month = !YEAR_DIFFERENCE && month === mStr && arr[0][0] === arr[1][0] ? '' : mStr + ' ';
  day = arr[1][2].toString() + ending(arr[1][2]);
  yStr = ', ' + arr[1][0].toString();
  year = YEAR_DIFFERENCE ? yStr : '';

  // Check that the dates are not equal
  if (arr[0].join('') !== arr[1].join('')) {
    dates.push(month + day + year);
  }

  return dates;
};


/**
 *  8. Fill in an object constructor with methods to make a person
 */
let Person = function (firstAndLast) {
  // Private Person properties
  let fullName = firstAndLast;
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  // Person getter functions
  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => fullName;

  // Person setter functions
  this.setFirstName = first => {
    firstName = first;
    fullName = first + ' ' + lastName;
  };

  this.setLastName = last => {
    lastName = last;
    fullName = firstName + ' ' + last;
  };

  this.setFullName = firstAndLast => {
    fullName = firstAndLast;
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
  };
};


/**
 *  9. Return a new array that transofrms the element's average
 *     altitude into their orbital periods
 */
const orbitalPeriod = arr => {
  // GM and radius constant values for earth
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  // Function to calculate the orbitalPeriod for a given altitude
  const orbitalHelper = alt => {
    let expression = Math.pow(earthRadius + alt, 3) / GM;
    expression = 2 * Math.PI * Math.sqrt(expression);
    return Math.round(expression);
  };

  // Go through each item in the array and calculate their orbital periods
  return arr.map(x => {
    // Construct a new object for the data
    let obj = {
      name: x.name,
      orbitalPeriod: orbitalHelper(x.avgAlt)
    };
    return obj;
  });
};


/**
 *  10. Given an array arr, find element pairs whose sum equal the 
 *      second argument arg and return the sum of their indices
 *      - If multiple pairs are possible that have the same numeric elements
 *        but different indices, return the smallest sum of indices
 *      - Once an element has been used, it cannot be reused to pair with another
 */
const pairwise = (arr, arg) => {
  // Keep a running sum
  let sum = 0;
  // Go through items in the array. This loop is greedy from smallest to 
  // largest, so we will always find the best pairs first
  for (var x = 0; x < arr.length; x++) {
    // Look for pairs in further items in the array
    for (var y = x + 1; y < arr.length; y++) {
      // If a pair has been found
      if (arr[x] + arr[y] === arg) {
        // Add the sum of the indices to the running counter
        sum += x + y;
        // Set the values in the array to NaN so that the loop skips them over
        arr[x] = NaN;
        arr[y] = NaN;
      }
    }
  }
  // Finally return the calculated sum of the indices
  return sum;
};