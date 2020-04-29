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


/** 
 * 40. Combination Sum II
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


/** 
 * 43. Multiply Strings
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (!num1 || !num2 || num1 === "0" || num2 === "0") return "0";

    const result = Array(num1.length + num2.length).fill(0);

    const addToResult = (index, amount) => {
        result[index] += amount;

        while (index >= 0 && result[index] >= 10) {
            if (index === 0) {
                result.unshift(1);
                return;
            }

            result[index] %= 10;
            result[index - 1] += 1;
            index--;
        }
    };

    for (let x = num1.length - 1; x >= 0; x--) {
        for (let y = num2.length - 1; y >= 0; y--) {
            let index = result.length - (num1.length + num2.length - x - y - 2) - 1;
            addToResult(index, (num1[x] * num2[y]) % 10);
            addToResult(index - 1, Math.floor((num1[x] * num2[y]) / 10));
        }
    }

    while (result[0] === 0) result.shift();

    return result.join('');
};


/** 
 * 46. Permutations - Recursion (my solution)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const results = [];

    const findPerms = (perms, set) => {
        if (!set.length) {
            results.push(perms);
            return;
        }

        for (let x = 0; x < set.length; x++) {
            let newPerms = perms.slice();
            let newSet = set.slice(0, x).concat(set.slice(x + 1));

            newPerms.push(set[x]);
            findPerms(newPerms, newSet);
        }
    };

    findPerms([], nums);

    return results;
};


/** 
 * 46. Permutations - Backtracking (not mine)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const results = [];

    backtrack(nums, results);

    return results;
};

function backtrack(nums, results, n = 0) {
    if (n === nums.length - 1) {
        results.push(nums.slice(0));
        return;
    }

    for (let i = n; i < nums.length; i++) {
        [nums[i], nums[n]] = [nums[n], nums[i]];
        backtrack(nums, results, n + 1);
        [nums[i], nums[n]] = [nums[n], nums[i]];
    }
}


/** 
 * 46. Permutations - Dynamic programming
 * Take the previous result and insert the new value into each spot
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums, n = 0) {
    if (n >= nums.length) return [[]];

    const results = [];

    const previous = permute(nums, n + 1);

    for (let x = 0; x < previous.length; x++) {
        for (let y = 0; y <= previous[x].length; y++) {
            let prev = previous[x].slice();
            prev.splice(y, 0, nums[n]);
            results.push(prev);
        }
    }

    return results;
};


/** 
 * 47. Permutations II
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);

    const results = [];

    const findPerms = (perms, set) => {
        if (!set.length) {
            results.push(perms);
            return;
        }

        for (let x = 0; x < set.length; x++) {
            if (set[x] === set[x + 1]) continue;

            let newPerms = perms.slice();
            let newSet = set.slice(0, x).concat(set.slice(x + 1));

            newPerms.push(set[x]);
            findPerms(newPerms, newSet);
        }
    };

    findPerms([], nums);

    return results;
};


/** 
 * 48. Rotate Image
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const swap = (x1, y1, x2, y2) => {
        let temp = matrix[x1][y1];
        matrix[x1][y1] = matrix[x2][y2];
        matrix[x2][y2] = temp;
    };

    // First transpose the matrix
    for (let x = 0; x < Math.floor(matrix.length / 2); x++) {
        for (let y = 0; y < matrix.length; y++) {
            swap(x, y, matrix.length - x - 1, y);
        }
    }

    // Then flip the x, y positions for each item
    for (let x = 0; x < matrix.length; x++) {
        for (let y = x; y < matrix.length; y++) {
            swap(x, y, y, x);
        }
    }
};


/** 
 * 49. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = {};

    for (let x = 0; x < strs.length; x++) {
        const sorted = strs[x].split('').sort().join('');

        if (map[sorted]) {
            map[sorted].push(strs[x]);
        } else {
            map[sorted] = [strs[x]];
        }
    }

    return Object.keys(map).map(x => map[x]);
};


/** 
 * 50. Pow(x, n) - Slooooooow
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (!n) return 1;

    let result = 1;

    if (n < 0) {
        x = 1 / x;
        n = Math.abs(n);
    }

    while (n % 2 === 0) {
        x *= x;
        n = n / 2;
    }

    while (n !== 0) {
        result *= x;
        n--;
    }

    return result;
};


/** 
 * 50. Pow(x, n) - Recursion
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;

    if (n < 0) {
        x = 1 / x;
        n = Math.abs(n);
    }

    return n % 2 === 0 ?
        myPow(x * x, n / 2) :
        myPow(x * x, (n - 1) / 2) * x;
};


/** 
 * 54. Spiral Matrix
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || !matrix.length) return [];

    const results = [];

    for (let x = 0; x < Math.min(Math.ceil(matrix.length / 2), Math.ceil(matrix[0].length / 2)); x++) {
        // Right
        for (let y = x; y < matrix[0].length - x; y++) {
            results.push(matrix[x][y]);
        }

        // Down
        for (let y = x + 1; y < matrix.length - x; y++) {
            results.push(matrix[y][matrix[0].length - x - 1]);
        }

        // Skip single row / columns
        if (matrix[0].length - (2 * x) === 1) continue;
        if (matrix.length % 2 !== 0 && x === Math.floor(matrix.length / 2)) continue;

        // Left
        for (let y = matrix[0].length - x - 2; y >= x; y--) {
            results.push(matrix[matrix.length - x - 1][y]);
        }

        // Up
        for (let y = matrix.length - x - 2; y >= 1 + x; y--) {
            results.push(matrix[y][x]);
        }
    }

    return results;
};


/** 
 * 55. Jump Game - Slow DP
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    nums[nums.length - 1] = true;

    for (let x = nums.length - 2; x >= 0; x--) {
        if (nums[x] === 0) {
            nums[x] = false;
            continue;
        }

        for (let y = 1; y <= nums[x]; y++) {
            if (nums[x + y] === true) {
                nums[x] = true;
                y = Infinity;
            }
        }

        if (nums[x] !== true) nums[x] = false;
    }

    return nums[0];
};


/** 
 * 55. Jump Game - Faster greedy
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let max = 0;

    for (let x = 0; x < nums.length; x++) {
        max = Math.max(max, x + nums[x]);
        if (max >= nums.length - 1) return true;
        if (max <= x && nums[x] === 0) return false;
    }

    return false;
};


/** 
 * 56. Merge Intervals
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const results = [];

    intervals.sort((a, b) => a[0] - b[0]);

    for (let x = 0; x < intervals.length; x++) {
        let lower = intervals[x][0];
        let upper = intervals[x][1];
        let index = x + 1;

        inner:
        for (let y = x + 1; y < intervals.length; y++) {
            if (upper < intervals[y][0]) break inner;
            if (upper < intervals[y][1]) upper = intervals[y][1];
            x++;
        }

        results.push([lower, upper]);
    }

    return results;
};


/** 
 * 59. Spiral Matrix II
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const matrix = [];

    for (let x = 0; x < n; x++) {
        matrix.push(Array(n));
    }

    let count = 1;

    for (let x = 0; x < n / 2; x++) {
        // Right
        for (let y = x; y < n - x; y++) {
            matrix[x][y] = count;
            count++;
        }

        // Down
        for (let y = x + 1; y < n - x; y++) {
            matrix[y][n - x - 1] = count;
            count++;
        }

        // Left
        for (let y = n - x - 2; y >= x; y--) {
            matrix[n - x - 1][y] = count;
            count++;
        }

        // Up
        for (let y = n - x - 2; y >= x + 1; y--) {
            matrix[y][x] = count;
            count++;
        }
    }

    return matrix;
};


/** 
 * 60. Permutation Sequence
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let result;
    let nums = '';

    for (let x = 1; x <= n; x++) nums += x;

    const findPerms = (perms, set) => {
        if (!set.length) {
            k--;
            if (k === 0) result = perms;
            return;
        }

        for (let x = 0; x < set.length; x++) {
            if (k === 0) return;
            findPerms(perms + set[x], set.slice(0, x) + set.slice(x + 1));
        }
    };

    findPerms('', nums);

    return result;
};


/** 
 * 61. Rotate List
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return null;

    // Calculate the length of the list
    let length = 0;
    let node = head;

    while (node) {
        length++;
        node = node.next;
    }

    if (k % length === 0) return head;

    let diff = length - (k % length);

    node = head;

    while (diff > 1) {
        node = node.next;
        diff--;
    }

    // Set the new head
    let newHead = node.next;
    node.next = null;
    node = newHead;

    // Traverse to the end and set the tail to the old head
    while (node.next) node = node.next;
    node.next = head;

    return newHead;
};


/** 
 * 62. Unique Paths
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = [];

    // Create empty DP matrix
    for (let x = 0; x < n; x++) dp.push(Array(m));

    // Only one possible way to explore row 1 and column 1 - so fill in with 1's
    for (let x = 0; x < m; x++) dp[0][x] = 1;
    for (let x = 0; x < n; x++) dp[x][0] = 1;

    for (let x = 1; x < n; x++) {
        for (let y = 1; y < m; y++) {
            dp[x][y] = dp[x - 1][y] + dp[x][y - 1];
        }
    }

    return dp[n - 1][m - 1];
};


/** 
 * 62. Unique Paths - Even simpler
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = [];

    for (let x = 0; x < n; x++) dp.push(Array(m).fill(1));

    for (let x = 1; x < n; x++) {
        for (let y = 1; y < m; y++) {
            dp[x][y] = dp[x - 1][y] + dp[x][y - 1];
        }
    }

    return dp[n - 1][m - 1];
};


/** 
 * 63. Unique Paths II
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    for (let x = 0; x < obstacleGrid.length; x++) {
        for (let y = 0; y < obstacleGrid[0].length; y++) {
            if (!x && !y) obstacleGrid[x][y] !== 1 ? obstacleGrid[x][y] = 1 : obstacleGrid[x][y] = 0;
            else if (!y) obstacleGrid[x][y] !== 1 ? obstacleGrid[x][y] = obstacleGrid[x - 1][y] : obstacleGrid[x][y] = 0;
            else if (!x) obstacleGrid[x][y] !== 1 ? obstacleGrid[x][y] = obstacleGrid[x][y - 1] : obstacleGrid[x][y] = 0;
            else obstacleGrid[x][y] !== 1 ? obstacleGrid[x][y] = obstacleGrid[x - 1][y] + obstacleGrid[x][y - 1] : obstacleGrid[x][y] = 0;
        }
    }

    return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};


/** 
 * 64. Minimum Path Sum
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const dp = [];

    for (let x = 0; x < grid.length; x++) {
        dp.push(Array(grid[0].length).fill(0));
    }

    dp[0][0] = grid[0][0];

    for (let x = 1; x < dp.length; x++) {
        dp[x][0] = dp[x - 1][0] + grid[x][0];
    }

    for (let x = 1; x < dp[0].length; x++) {
        dp[0][x] = dp[0][x - 1] + grid[0][x];
    }

    for (let x = 1; x < dp.length; x++) {
        for (let y = 1; y < dp[x].length; y++) {
            dp[x][y] = Math.min(dp[x - 1][y], dp[x][y - 1]) + grid[x][y];
        }
    }

    return dp[grid.length - 1][grid[0].length - 1];
};