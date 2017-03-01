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
 *  3. 
 */