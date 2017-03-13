/**
 * Map Implementation
 * @param {any_type[]} arr
 * @param {function} fn
 * @return {any_type[]}
 */
const map2 = (arr, fn) => {
  let mapped_arr = [];
  for (let x = 0; x < arr.length; x++) {
    mapped_arr.push(fn(arr[x]));
  }
  return mapped_arr;
};


/**
 * Reduce Implementation
 * @param {any_type[]} arr
 * @param {function} fn
 * @param {value} carry
 * @return {value}
 */
const reduce2 = (arr, fn, carry) => {
  if (arr.length === 0) {
    return carry;
  } else {
    return reduce2(arr.slice(1), fn, fn(carry, arr[0]));
  }
};


/**
 * Filter Implementation
 * @param {any_type[]} arr
 * @param {function} fn
 * @return {value}
 */
const filter2 = (arr, fn) => {
  let filtered_arr = [];
  for (let x = 0; x < arr.length; x++) {
    if (fn(arr[x])) {
      filtered_arr.push(arr[x]);
    }
  }
  return filtered_arr;
};