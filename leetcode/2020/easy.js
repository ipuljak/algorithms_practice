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


/** 
 * 67. Add Binary
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let max = a.length > b.length ? a : b;
    let min = a.length <= b.length ? a : b;

    while (max.length !== min.length) {
        min = '0' + min;
    }

    let str = '';
    let sum, carry;

    for (let x = max.length - 1; x >= 0; x--) {
        sum = parseInt(max[x]) + parseInt(min[x]) + (carry ? 1 : 0);
        str = (sum % 2 ? "1" : "0") + str;
        carry = sum > 1;
    }

    if (carry) {
        str = '1' + str;
    }

    return str;
};


/** 
 * 69. Sqrt(x)
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    return Math.floor(x ** 0.5);
};


/** 
 * 70. Climbing Stairs
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let prev = 0;
    let curr = 1;

    for (let x = 1; x <= n; x++) {
        let sum = prev + curr;
        prev = curr;
        curr = sum;
    }

    return curr;
};


/** 
 * 83. Remove Duplicates from Sorted List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) return head;

    let curr = head;

    while (curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};


/** 88. Merge Sorted Array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let mi = m - 1;
    let ni = n - 1;
    let i = m + n - 1;

    while (ni >= 0) {
        if (nums1[mi] > nums2[ni]) {
            nums1[i] = nums1[mi];
            mi--;
        } else {
            nums1[i] = nums2[ni];
            ni--;
        }

        i--;
    }
};