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
  }, 0);
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