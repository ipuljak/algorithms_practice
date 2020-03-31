/** 
 * 35. Search Insert Position
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let x = 0; x < nums.length; x++) {
        if (nums[x] >= target) {
            return x;
        }
    }

    return nums.length;
};


/** 
 * 38. Count and Say
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let str = '1';
    let builder, current, count;

    for (let x = 1; x < n; x++) {
        builder = '';
        current = '';
        count = 0;

        for (let y = 0; y < str.length; y++) {
            if (current === str[y]) {
                count += 1;
                continue;
            }

            if (current) {
                builder += count + current;
            }

            current = str[y];
            count = 1;
        }

        str = builder + count + current;
    }

    return str;
};


/** 
 * 53. Maximum Subarray
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    let current = nums[0];

    for (let x = 1; x < nums.length; x++) {
        current += nums[x];

        if (nums[x] > current) {
            current = nums[x];
        }

        if (current > max) {
            max = current;
        }
    }

    return max;
};


/** 
 * 58. Length of Last Word
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0;

    for (let x = s.length - 1; x >= 0; x--) {
        if (s[x] === ' ') {
            if (!count) continue;
            return count;
        }

        count += 1;
    }

    return count;
};


/** 
 * 66. Plus One
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let x = digits.length - 1; x >= 0; x--) {
        if (digits[x] + 1 < 10) {
            digits[x] = digits[x] + 1;
            return digits;
        }

        digits[x] = 0;
    }

    return [1].concat(digits);
};