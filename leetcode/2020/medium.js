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


/** 
 * 17. Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    const traverse = d => {
        if (!d.length) return [];
        if (d.length === 1) return map[d[0]].split('');

        const next = traverse(d.slice(1));

        const result = [];

        for (let x = 0; x < map[d[0]].length; x++) {
            for (let y = 0; y < next.length; y++) {
                result.push(map[d[0]][x] + next[y]);
            }
        }

        return result;
    };

    return traverse(digits);
};


/** 
 * 18. 4Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return [];

    let result = [];

    nums.sort((a, b) => a - b);

    for (let x = 0; x < nums.length - 3; x++) {
        if (nums[x] === nums[x - 1]) continue;

        for (let y = nums.length - 1; y > x + 2; y--) {
            if (nums[y] === nums[y + 1]) continue;

            let a = x + 1;
            let b = y - 1;

            while (a < b) {
                let sum = nums[x] + nums[y] + nums[a] + nums[b];
                if (sum === target) {
                    result.push([nums[x], nums[y], nums[a], nums[b]]);

                    while (nums[a] === nums[a + 1]) a++;
                    while (nums[b] === nums[b - 1]) b--;

                    a++;
                    b--;

                    continue;
                }

                if (sum < target) {
                    a++;
                    continue;
                }

                if (sum > target) {
                    b--;
                    continue;
                }
            }
        }
    }

    return result;
};


/** 
 * 19. Remove Nth Node From End of List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let ptr1 = head;
    let ptr2 = head;
    let count = 0;

    while (count !== n) {
        ptr2 = ptr2.next;
        count++;
    }

    if (!ptr2) return head.next;

    while (ptr2.next) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    ptr1.next = ptr1.next.next;

    return head;
};


/** 
 * 22. Generate Parentheses
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    const generate = (l, r, s) => {
        if (l > r) return;
        if (!l && !r) result.push(s);
        if (l > 0) generate(l - 1, r, s + '(');
        if (r > 0) generate(l, r - 1, s + ')');
    };

    generate(n, n, '');

    return result;
};


/** 
 * 24. Swap Nodes in Pairs
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
var swapPairs = function (head) {
    if (!head) return null;

    let temp = new ListNode();
    temp.next = head;

    let prev = temp;

    while (prev.next && prev.next.next) {
        let a = prev.next;
        let b = prev.next.next;

        a.next = b.next;
        b.next = a;
        prev.next = b;

        prev = a;
    }

    return temp.next;
};


/** 
 * 29. Divide Two Integers - Slow?
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const DIV_MIN = -(2 ** 31);
    const DIV_MAX = (2 ** 31) - 1;

    let count = 0;
    let isNegative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        dividend -= divisor;
        count++;
    }

    count = isNegative ? -count : count;

    if (count > DIV_MAX || count < DIV_MIN) return DIV_MAX;

    return count;
};


/** 
 * 33. Search in Rotated Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let x = 0;
    let y = nums.length - 1;

    while (x < y) {
        let mid = Math.floor((x + y) / 2);

        if (nums[mid] === target) return mid;
        if (nums[x] === target) return x;
        if (nums[y] === target) return y;

        if (nums[mid] > nums[x]) {
            if (target > nums[x] && target < nums[mid]) {
                y = mid - 1;
            } else {
                x = mid + 1;
            }
        } else if (nums[mid] < nums[y]) {
            if (target > nums[mid] && target < nums[y]) {
                x = mid + 1;
            } else {
                y = mid - 1;
            }
        } else {
            return -1;
        }
    }

    return nums[x] === target ? x : -1;
};


/** 
 * 34. Find First and Last Position of Element in Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 1 && nums[0] === target) return [0, 0];
    let x = 0;
    let y = nums.length - 1;

    while (x <= y) {
        let mid = Math.floor((x + y) / 2);

        if (nums[mid] === target) {
            x = mid;
            y = mid;

            while (nums[x] === target) x--;
            while (nums[y] === target) y++;
            return [++x, --y];
        }

        if (target > nums[mid]) {
            x = mid + 1;
        } else {
            y = mid - 1;
        }
    }

    return [-1, -1];
};


/** 
 * 36. Valid Sudoku
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // Check that the array is unique
    const allUniques = arr => {
        let map = {};

        for (let x = 0; x < arr.length; x++) {
            if (arr[x] === ".") continue;
            if (map[arr[x]]) return false;
            map[arr[x]] = true;
        }

        return true;
    };

    // Check rows
    for (let x = 0; x < board.length; x++) {
        if (!allUniques(board[x])) return false;
    }

    // Check columns
    for (let x = 0; x < board.length; x++) {
        let arr = [];

        for (let y = 0; y < board.length; y++) {
            arr.push(board[y][x])
        }

        if (!allUniques(arr)) return false;
    }

    // Check squares
    for (let x = 0; x < 8; x += 3) {
        for (let y = 0; y < 8; y += 3) {
            let arr = [];

            for (let i = x; i < x + 3; i++) {
                for (let j = y; j < y + 3; j++) {
                    arr.push(board[i][j]);
                }
            }

            if (!allUniques(arr)) return false;
        }
    }

    return true;
};


/** 
 * 39. Combination Sum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    if (!candidates || !candidates.length) return [];

    candidates.sort((a, b) => a - b);

    const results = [];

    const findCombos = (combos, goal, index) => {
        if (goal === 0) {
            results.push(combos.slice());
            return;
        }

        for (let x = index; x < candidates.length; x++) {
            if (goal < 0) break;
            combos.push(candidates[x]);
            findCombos(combos, goal - candidates[x], x);
            combos.pop();
        }
    };

    findCombos([], target, 0);

    return results;
};


/** 40. Combination Sum II
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    if (!candidates || !candidates.length) return [];

    candidates.sort((a, b) => a - b);

    const results = [];

    const findCombos = (combos, goal, index) => {
        if (goal === 0) {
            results.push(combos.slice());
            return;
        }

        for (let x = index; x < candidates.length; x++) {
            if (x !== index && candidates[x] === candidates[x - 1]) continue;
            if (goal < 0) break;

            combos.push(candidates[x]);
            findCombos(combos, goal - candidates[x], x + 1);
            combos.pop();
        }
    };

    findCombos([], target, 0);

    return results;
};