/** 
 * 2. Add Two Numbers
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head;
    let curr;
    let carry = 0;

    while (l1 || l2 || carry) {
        let val = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        carry = val > 9 ? 1 : 0;
        val = val > 9 ? val - 10 : val;

        let node = new ListNode(val);

        if (!head) {
            head = node;
            curr = head;
        } else {
            curr.next = node;
            curr = curr.next;
        }

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return head;
};


/** 
 * 3. Longest Substring Without Repeating Characters - Slow
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let map = {};

    for (let x = 0; x < s.length; x++) {
        if (map[s[x]] === undefined) {
            map[s[x]] = x;
            continue;
        }

        max = Math.max(max, Object.keys(map).length);

        for (let item in map) {
            if (map[item] < map[s[x]]) {
                delete map[item];
            }
        }

        map[s[x]] = x;
    }

    return Math.max(max, Object.keys(map).length);
};


/** 
 * 3. Longest Substring Without Repeating Characters - Fast
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let max = 0;
    let map = {};

    for (let x = 0; x < s.length; x++) {
        if (map[s[x]] >= start) {
            start = map[s[x]] + 1;
        }

        map[s[x]] = x;
        max = Math.max(max, x - start + 1);
    }

    return max;
};


/** 
 * 5. Longest Palindromic Substring
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let longest = '';

    const findLongest = (str, i, j) => {
        while (i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }

        return str.slice(i + 1, j);
    };

    for (let i = 0; i < s.length; i++) {
        let p1 = findLongest(s, i, i);
        let p2 = findLongest(s, i, i + 1);
        let longer = p1.length > p2.length ? p1 : p2;
        if (longer.length > longest.length) longest = longer;
    }

    return longest;
};


/** 
 * 6. ZigZag Conversion
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;

    let rows = [];
    let isZigZag = false;
    let curr = 0;
    let currCol = 0;

    for (let x = 0; x < numRows; x++) {
        rows.push('');
    }

    while (curr < s.length) {
        rows[currCol] += s[curr];
        curr++;

        if (!isZigZag && currCol < numRows - 1) {
            currCol++;
            continue;
        }

        if (!isZigZag) {
            currCol = numRows - 2;
            isZigZag = true;
            continue;
        }

        if (currCol === 0) {
            isZigZag = false;
            currCol++;
            continue;
        }

        currCol--;
    }

    return rows.reduce((a, b) => a + b, '');
};


/** 
 * 8. String to Integer (atoi)
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let value = '';

    for (let x = 0; x < str.length; x++) {
        if (str[x] === " ") {
            if (value.length > 0) break;
            continue;
        }

        if ((str[x] === "+" || str[x] === "-")) {
            if (value.length > 0) break;
            value += str[x];
            continue;
        }

        if (!/\d/.test(str[x])) break;

        value += str[x];
    }

    if (!value || value === "-" || value === "+") return 0;

    value = parseInt(value);

    if (value > ((2 ** 31) - 1)) return (2 ** 31) - 1;
    if (value < -(2 ** 31)) return -(2 ** 31);
    return value;
};