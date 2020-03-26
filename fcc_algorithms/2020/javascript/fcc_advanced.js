// Palindrome Checker - #1
function palindrome(str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
    return str.split('').reverse().join('') === str;
}


// Palindrome Checker - #2
function palindrome(str) {
    let start = 0;
    let end = str.length - 1;
    let regex = /[\W_]/;

    while (start < end) {
        // Shift start
        while (regex.test(str[start])) {
            start++;
        }

        // Shift end
        while (regex.test(str[end])) {
            end--;
        }

        // Comparison
        if (str[start].toLowerCase() !== str[end].toLowerCase()) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}


// Roman Numeral Converter
function convertToRoman(num) {
    let str = '';
    let romans = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ]

    function getClosestRoman(val) {
        for (let x = 0; x < romans.length; x++) {
            if (val >= romans[x][0]) {
                return romans[x];
            }
        }
    }

    while (num !== 0) {
        let val = getClosestRoman(num);
        str += val[1];
        num -= val[0];
    }

    return str;
}
