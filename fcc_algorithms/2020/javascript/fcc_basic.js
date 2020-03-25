// Convert Celsius to Fahrenheit
function convertToF(celsius) {
    return celsius * 9 / 5 + 32;
}

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Factorialize a Number
function factorialize(num) {
    if (num === 0) return 1;
    return num * factorialize(num - 1);
}

// Find the Longest Word in a String - #1
function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map(x => x.length));
}

// Find the Longest Word in a String - #2
function findLongestWordLength(str) {
    return str.split(' ').reduce((a, b) => {
        return b.length > a.length ? b : a;
    }, '').length;
}

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
    return arr.reduce((a, b) => a.concat(Math.max(...b)), []);
}

// Confirm the Ending
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

// Repeat a String Repeat a String - #1
function repeatStringNumTimes(str, num) {
    if (num <= 0) return '';
    return [...Array(num).keys()].reduce((a, b) => a + str, '');
}

// Repeat a String Repeat a String - #2
function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
}

// Truncate a String
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}

// Finders Keepers
function findElement(arr, func) {
    for (let x = 0; x < arr.length; x++) {
        if (func(arr[x])) return arr[x];
    }

    return;
}

// Boo who
function booWho(bool) {
    return typeof bool === "boolean";
}

// Title Case a Sentence - #1
function titleCase(str) {
    return str.toLowerCase().split(' ').map(w => {
        let n = w.split('');
        n[0] = n[0].toUpperCase();
        return n.join('');
    }).join(' ');
}

// Title Case a Sentence - #2
function titleCase(str) {
    return str.toLowerCase().split(' ').map(w => w.replace(w[0], w[0].toUpperCase())).join(' ');
}

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
    return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));
}

// Falsy Bouncer
function bouncer(arr) {
    return arr.reduce((a, b) => b ? a.concat([b]) : a, []);
}

// Where do I Belong
function getIndexToIns(arr, num) {
    let sorted = arr.sort((a, b) => a - b);

    for (let x = 0; x < sorted.length; x++) {
        if (sorted[x] >= num) return x;
    }

    return sorted.length;
}

// Mutations
function mutation(arr) {
    return arr[1].toLowerCase().split('').reduce((a, b) => a && arr[0].toLowerCase().includes(b), true);
}

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
    if (size >= arr) return arr;
    return [arr.slice(0, size)].concat(chunkArrayInGroups(arr.slice(size), size));
}
