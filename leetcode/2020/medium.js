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


/** 
 * 11. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    let ptr1 = 0;
    let ptr2 = height.length - 1;

    while (ptr1 !== ptr2) {
        let total = (ptr2 - ptr1) * Math.min(height[ptr1], height[ptr2]);

        if (total > max) max = total;

        if (height[ptr2] > height[ptr1]) {
            ptr1++;
        } else {
            ptr2--;
        }
    }

    return max;
};


/** 
 * 12. Integer to Roman
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
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

    const getClosestRoman = val => {
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
};


/** 
 * 15. 3Sum
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return [];

    let result = [];

    nums.sort((a, b) => a - b);

    for (let x = 0; x < nums.length - 2; x++) {
        if (nums[x] > 0) break;
        if (x > 0 && nums[x] === nums[x - 1]) continue;
        let y = x + 1;
        let z = nums.length - 1;

        while (y < z) {
            let sum = nums[x] + nums[y] + nums[z];
            if (sum === 0) {
                result.push([nums[x], nums[y], nums[z]]);

                while (nums[y] === nums[y + 1]) y++;
                while (nums[z] === nums[z - 1]) z--;

                y++;
                z--;

                continue;
            }

            if (sum < 0) {
                y++;
                continue;
            }

            if (sum > 0) {
                z--;
                continue;
            }
        }
    }

    return result;
};


/** 
 * 16. 3Sum Closest
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let closest;

    nums.sort((a, b) => a - b);

    for (let x = 0; x < nums.length - 1; x++) {
        let y = x + 1;
        let z = nums.length - 1;

        while (y < z) {
            let sum = nums[x] + nums[y] + nums[z];
            if (sum === target) return target;
            let diff = Math.abs(sum - target);
            if (closest === undefined || diff < (Math.abs(closest - target))) closest = sum;

            if (sum > target) {
                z--;
            } else {
                y++;
            }
        }
    }

    return closest;
};