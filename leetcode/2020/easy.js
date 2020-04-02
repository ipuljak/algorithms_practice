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


/** 
 * 100. Same Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


/** 
 * 101. Symmetric Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;

    const compare = (l, r) => {
        if (!l && !r) return true;
        if (!l || !r) return false;
        if (l.val !== r.val) return false;
        return compare(l.left, r.right) && compare(l.right, r.left);
    };

    return compare(root.left, root.right);
};


/** 
 * 104. Maximum Depth of Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


/** 
 * 107. Binary Tree Level Order Traversal II
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    const result = [];

    const BFS = (node, depth) => {
        if (!node) return;

        result.length <= depth ?
            result.push([node.val]) :
            result[depth].push(node.val);

        BFS(node.left, depth + 1);
        BFS(node.right, depth + 1);
    };

    BFS(root, 0);
    return result.reverse();
};


/** 
 * 108. Convert Sorted Array to Binary Search Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;

    if (nums.length === 1) return new TreeNode(nums[0]);

    const index = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[index]);

    node.left = sortedArrayToBST(nums.slice(0, index));
    node.right = sortedArrayToBST(nums.slice(index + 1));

    return node;
};


/** 
 * 110. Balanced Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;

    const getMaxDepth = (node, depth = 0) => {
        if (!node) return depth;
        return Math.max(getMaxDepth(node.left, depth + 1), getMaxDepth(node.right, depth + 1));
    };

    const difference = Math.abs(getMaxDepth(root.left) - getMaxDepth(root.right));
    return isBalanced(root.left) && isBalanced(root.right) && difference <= 1;
};


/** 
 * 111. Minimum Depth of Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    const DFS = (node, depth = 0) => {
        if (!node) return depth;
        if (!node.left && !node.right) return depth + 1;

        let left = DFS(node.left, depth + 1);
        let right = DFS(node.right, depth + 1);

        if (!node.left) return right;
        if (!node.right) return left

        return Math.min(left, right);
    };

    return DFS(root);
};


/** 
 * 112. Path Sum
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) return sum - root.val === 0;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};


/** 
 * 118. Pascal's Triangle
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];

    let triangle = [[1], [1, 1]];
    let current = [];
    let previous = [1, 1];

    for (let x = 3; x <= numRows; x++) {
        current = [1];

        for (let y = 0; y < previous.length - 1; y++) {
            current.push(previous[y] + previous[y + 1]);
        }

        current.push(1);
        triangle.push(current);
        previous = current;
    }

    return triangle;
};


/** 
 * 119. Pascal's Triangle II
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1];
    let previous = [1];
    let row;

    for (let x = 1; x <= rowIndex; x++) {
        row = [1];

        for (let y = 0; y < previous.length - 1; y++) {
            row[y + 1] = previous[y] + previous[y + 1];
        }

        row.push(1);
        previous = row;
    }

    return row;
};


/** 
 * 121. Best Time to Buy and Sell Stock
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let best = 0;
    let low = Infinity;
    let high = 0;

    for (let x = 0; x < prices.length - 1; x++) {
        if (prices[x] < low) {
            low = prices[x];
            high = 0;
        }

        if (prices[x + 1] > high) {
            high = prices[x + 1];
        }

        if ((high - low) > best) {
            best = high - low;
        }
    }

    return best;
};


/** 
 * 122. Best Time to Buy and Sell Stock II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let total = 0;
    let bought = 0;
    let holding = false;

    for (let x = 0; x < prices.length; x++) {
        if (prices[x + 1] > prices[x] && !holding) {
            holding = true;
            bought = prices[x];
            continue;
        }

        if (!holding) continue;

        if (prices[x] > prices[x + 1] || x === prices.length - 1) {
            total += prices[x];
            total -= bought;
            holding = false;
            bought = 0;
        }
    }

    return total;
};


/** 
 * 125. Valid Palindrome
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/\W/gi, '');

    for (let x = 0; x < (s.length) / 2; x++) {
        if (s[x] !== s[s.length - x - 1]) return false;
    }

    return true;
};


/** 
 * 136. Single Number - Map
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {};

    for (let x = 0; x < nums.length; x++) {
        if (map[nums[x]]) {
            delete map[nums[x]];
            continue;
        }

        map[nums[x]] = true;
    }

    return Object.keys(map)[0];
};


/** 
 * 136. Single Number - XOR
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    return nums.reduce((a, b) => a ^ b);
};