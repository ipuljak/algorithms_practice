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
