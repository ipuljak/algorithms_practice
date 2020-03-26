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


// Caesars Cipher
function rot13(str) {
    function shiftLetter(letter) {
        if (/[\W_]/.test(letter)) return letter;
        const code = letter.charCodeAt(0);
        const shifted = code + (code > 77 ? -13 : 13);
        return String.fromCharCode(shifted);
    }

    return str
        .split('')
        .map(shiftLetter)
        .join('');
}


// Telephone Number Validator
function telephoneCheck(str) {
    const country = /^((\(1\))|1)?[\s-]?/;
    const area = /((\(\d{3}\))|\d{3})[\s-]?/;
    const number = /\d{3}[\s-]?\d{4}$/;
    const regex = new RegExp(country.source + area.source + number.source, "g");
    return regex.test(str);
}


// Cash Register
function checkCashRegister(price, cash, cid) {
    // Function to help add decimals
    const addDecimals = (a, b) => parseFloat((a + b).toFixed(2));

    // Function to calculate how much change is available
    const countBank = _ => bank.reduce((a, b) => addDecimals(a, b[1]), 0);

    // Function to find the closest change match to the current diff
    const findChange = diff => {
        for (let x = bank.length - 1; x >= 0; x--) {
            if (diff >= map[bank[x][0]] && bank[x][1] > 0) {
                return bank[x][0];
            }
        }
    }

    // Function to update the change & bank by changing the given value amount
    const addChange = val => {
        const changeIndex = change.findIndex(x => x[0] === val);
        const bankIndex = bank.findIndex(x => x[0] === val);

        if (changeIndex >= 0) {
            change[changeIndex][1] = addDecimals(change[changeIndex][1], map[val]);
        } else {
            change.push([val, map[val]]);
        }

        bank[bankIndex][1] = addDecimals(bank[bankIndex][1], -map[val]);
    }

    // Variables
    let diff = addDecimals(cash, -price);
    let bank = JSON.parse(JSON.stringify(cid));
    let change = [];

    // Value mapping
    const map = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.1,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        'ONE_HUNDRED': 100
    };

    // Return empty change (exact amount was given) - OPEN
    if (diff === 0) return { status: "OPEN", change: [] }

    // Return empty change - INSUFFICIENT FUNDS
    if (countBank(bank) - diff < 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    // Count down the difference
    while (diff !== 0) {
        let match = findChange(diff);

        if (!match) {
            return {
                status: "INSUFFICIENT_FUNDS",
                change: []
            };
        }

        addChange(match);
        diff = addDecimals(diff, -map[match]);
    }

    // All change used up - CLOSED
    if (bank.filter(x => x[1] === 0).length === bank.length) {
        return { status: "CLOSED", change: cid };
    }

    // Return the change - OPEN
    return { status: "OPEN", change };
}
