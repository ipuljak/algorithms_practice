// Sum All Numbers in a Range
function sumAll(arr) {
    let sum = 0;

    for (let x = Math.min(...arr); x <= Math.max(...arr); x++) {
        sum += x;
    }

    return sum;
}


// Diff Two Arrays - #1
function diffArray(arr1, arr2) {
    let a1 = arr1.filter(x => !arr2.includes(x));
    let a2 = arr2.filter(x => !arr1.includes(x));
    return a1.concat(a2);
}


// Diff Two Arrays - 2
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(x => !arr1.includes(x) || !arr2.includes(x));
}


// Seek and Destroy
function destroyer(arr) {
    let map = {};
    Array.from(arguments).slice(1).forEach(x => map[x] = true);
    return arr.reduce((a, b) => !map[b] ? a.concat([b]) : a, []);
}


// Wherefore art thou - #1
function whatIsInAName(collection, source) {
    return collection.reduce((a, b) => {
        for (let property in source) {
            if (!b[property] || b[property] !== source[property]) {
                return a;
            }
        }

        return a.concat([b]);
    }, []);
}


// Wherefore art thou - #2
function whatIsInAName(collection, source) {
    return collection.filter(x => {
        return Object.keys(source).every(y => {
            return x[y] && x[y] === source[y];
        });
    });
}


// Spinal Tap Case - #1
function spinalCase(str) {
    let result = '';
    let letters = str.split('');

    for (let x = 0; x < letters.length; x++) {
        if (/[\W\_\s]/.test(letters[x])) {
            result += '-';
        } else {
            if (/[A-Z]/.test(letters[x])) {
                if (result && result[result.length - 1] !== '-') {
                    result += '-';
                }
            }

            result += letters[x];
        }
    }

    return result.toLowerCase();
}


// Spinal Tap Case - #2
function spinalCase(str) {
    return str
        // Lookahead - matches '' when followed by [A-Z]
        .split(/\s|_|(?=[A-Z])/)
        .join('-')
        .toLowerCase();
}


// Pig Latin
function translatePigLatin(str) {
    if (/^[aeiou]/i.test(str)) return str + 'way';
    const regex = /^[^aeiou]+(?=[aeiou])?/i;
    return str.replace(regex, '') + str.match(regex)[0] + 'ay';
}


// Search and Replace
function myReplace(str, before, after) {
    return str.split(' ').map(word => {
        if (word === before) {
            return word[0] === word[0].toUpperCase() ?
                after[0].toUpperCase() + after.slice(1) : after;
        }

        return word;
    }).join(' ');
}


// DNA Pairing
function pairElement(str) {
    const map = {
        A: "T",
        T: "A",
        G: "C",
        C: "G"
    };

    return str.split('').map(i => [i, map[i]]);
}


// Missing letters - #1
function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(str[0]);

    for (let x = 0; x < str.length; x++) {
        if (!alphabet.includes(str.slice(0, x + 1))) {
            return alphabet[index + x];
        }
    }

    return;
}


// Missing letters - #2
function fearNotLetter(str) {
    for (let x = 1; x < str.length; x++) {
        if (str.charCodeAt(x) - str.charCodeAt(x - 1) !== 1) {
            return String.fromCharCode(str.charCodeAt(x - 1) + 1);
        }
    }

    return;
}


// Sorted Union
function uniteUnique(arr) {
    const map = {};
    const flatArr = [...arguments].flat();

    return flatArr.reduce((a, b) => {
        if (map[b]) return a;
        map[b] = true;
        return a.concat(b);
    }, []);
}


// Convert HTML Entities
function convertHTML(str) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };

    return str
        .split('')
        .map(x => map[x] ? map[x] : x)
        .join('');
}


// Sum All Odd Fibonacci Numbers - #1
function sumFibs(num) {
    if (num === 1) return 1;
    let arr = [1, 1];

    while (arr[arr.length - 1] < num) {
        let next = arr[arr.length - 1] + arr[arr.length - 2];
        if (next > num) break;
        arr.push(next);
    }

    return arr.reduce((a, b) => b % 2 !== 0 ? a + b : a, 0);
}


// Sum All Odd Fibonacci Numbers - #2
function sumFibs(num) {
    if (num === 1) return 1;
    let arr = [1, 1];
    let next;

    while ((next = arr[0] + arr[1]) <= num) {
        arr.unshift(next);
    }

    return arr.reduce((a, b) => b % 2 !== 0 ? a + b : a, 0);
}


// Sum All Primes
function sumPrimes(num) {
    function isPrime(val) {
        if (val < 2) return false;

        for (let x = 2; x < val; x++) {
            if (val % x === 0) return false;
        }

        return true;
    }

    return [...Array(num).keys(), num]
        .filter(isPrime)
        .reduce((a, b) => a + b, 0);
}


// Smallest Common Multiple
function isCommonMultiple(num, min, max) {
    for (let x = min; x <= max; x++) {
        if (num % x !== 0) return false;
    }

    return true;
}

function smallestCommons(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let current = max;

    while (!isCommonMultiple(current, min, max)) {
        current++;
    }

    return current;
}


// Drop it
function dropElements(arr, func) {
    while (arr.length) {
        if (func(arr[0])) return arr;
        arr.shift();
    }

    return [];
}


// Steamroller
function steamrollArray(arr) {
    let newArr = [];

    function flatten(item) {
        if (Array.isArray(item)) {
            item.forEach(flatten);
        } else {
            newArr.push(item);
        }
    }

    arr.forEach(flatten);
    return newArr;
}


// Binary Agents
function binaryAgent(str) {
    return str
        .split(' ')
        .map(x => String.fromCharCode(parseInt(x, 2)))
        .join('');
}


// Everything Be True
function truthCheck(collection, pre) {
    return collection.every(item => item[pre]);
}


// Arguments Optional
function addTogether() {
    const args = Array.from(arguments);

    if (!args.every(x => typeof x === 'number')) return;
    if (args.length === 2) return arguments[0] + arguments[1];

    return function (item) {
        if (typeof item !== 'number') return;
        return args[0] + item;
    }
}


// Make a Person
var Person = function (firstAndLast) {
    let firstName = firstAndLast.split(' ')[0];
    let lastName = firstAndLast.split(' ')[1];

    this.getFirstName = function () {
        return firstName;
    };

    this.getLastName = function () {
        return lastName;
    };

    this.getFullName = function () {
        return firstName + " " + lastName;
    };

    this.setFirstName = function (name) {
        firstName = name;
    };

    this.setLastName = function (name) {
        lastName = name;
    };

    this.setFullName = function (name) {
        firstName = name.split(' ')[0];
        lastName = name.split(' ')[1];
    }
};


// Map the Debris
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    return arr.map(item => {
        return {
            name: item.name,
            orbitalPeriod: Math.round((2 * Math.PI) * Math.sqrt(((earthRadius + item.avgAlt) ** 3) / GM))
        };
    });
}
