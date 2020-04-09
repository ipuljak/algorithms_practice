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


/** 
 * 141. Linked List Cycle
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false;

    let ptr1 = head;
    let ptr2 = head.next;

    while (ptr1 && ptr2 && ptr2.next) {
        if (ptr1 === ptr2) return true;
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
    }

    return false;
};


/** 
 * 155. Min Stack
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack = [];
    this.min;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (this.min === undefined || x < this.min) {
        this.min = x;
    }

    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let popped = this.stack.pop();

    if (popped === this.min) {
        this.min = Math.min(...this.stack);
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


/** 
 * 160. Intersection of Two Linked Lists
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let currA = headA;
    let currB = headB;

    if (!currA || !currB) return null;

    while (true) {
        if (currA === currB) return currA;
        if (currA.next) currA = currA.next;
        if (currB.next) currB = currB.next;
        if (!currA.next && !currB.next && currA !== currB) return null;
        if (!currA.next && !currB.next && currA === currB) return currA;
        if (!currA.next) currA = headB;
        if (!currB.next) currB = headA;
    }
};


/** 
 * 167. Two Sum II - Input array is sorted - map
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let map = {};

    for (let x = 0; x < numbers.length; x++) {
        if (map[numbers[x]] !== undefined) {
            return [map[numbers[x]] + 1, x + 1];
        }

        map[target - numbers[x]] = x;
    }
};


/** 
 * 167. Two Sum II - Input array is sorted - O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let a = 0;
    let b = numbers.length - 1

    while (a < b) {
        if ((target - numbers[a]) === numbers[b]) return [a + 1, b + 1];
        target - numbers[a] < numbers[b] ? b-- : a++;
    }
};


/** 
 * 168. Excel Sheet Column Title
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let title = "";

    if (n <= 26) {
        return String.fromCharCode(64 + (n % 26 ? n % 26 : 26));
    }

    while (n > 0) {
        let r = n % 26;

        n = Math.floor(n / 26);

        if (r === 0) {
            r = 0;
            n = n - 1;
        }

        title = String.fromCharCode(64 + (r ? r : 26)) + title;
    }

    return title;
};


/** 
 * 189. Rotate Array
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length < 2) return nums;
    if (nums.length === k) return nums;

    k %= nums.length;

    while (k > 0) {
        nums.unshift(nums.pop());
        k--;
    }
};


/** 
 * 190. Reverse Bits
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let result = 0;

    for (let x = 0; x < 32; x++) {
        result = result << 1;
        result = result | (n & 1);
        n = n >> 1;
    }

    return result >>> 0;
};


/** 
 * 191. Number of 1 Bits
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;

    for (let x = 0; x < 32; x++) {
        count += (n & (1 << x)) === 0 ? 0 : 1;
    }

    return count;
};


// 193. Valid Phone Numbers
// cat file.txt | grep -E "^([0-9]{3}-|\([0-9]{3}\)\ )[0-9]{3}-[0-9]{4}$"


// 195. Tenth Line
// sed -n '10p' file.txt


/** 196. Delete Duplicate Emails
DELETE p2
FROM person AS p1
INNER JOIN person AS p2
ON p1.email = p2.email
AND p1.id < p2.id;
 */


/** 197. Rising Temperature
SELECT w2.Id FROM Weather w1, Weather w2
WHERE DATEDIFF(w2.RecordDate, w1.RecordDate) = 1
AND w2.Temperature >  w1.Temperature;
 */


/** 
 * 198. House Robber
* @param {number[]} nums
* @return {number}
*/
var rob = function (nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    // Max profit per index
    let dp = [nums[0], Math.max(nums[0], nums[1])];

    for (let x = 2; x < nums.length; x++) {
        dp[x] = Math.max(dp[x - 1], nums[x] + dp[x - 2]);
    }

    return dp[nums.length - 1];
};


/** 
 * 202. Happy Number
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const visited = [];

    while (true) {
        let total = 0;

        while (n !== 0) {
            total += (n % 10) ** 2;
            n = Math.floor(n / 10);
        }

        if (total === 1) return true;
        if (total === 0 || visited.includes(total)) return false;

        visited.push(total);
        n = total;
        total = 0;
    }
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 
 * 203. Remove Linked List Elements
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    while (head && head.val === val) {
        head = head.next;
    }

    let prev = head;

    while (prev) {
        while (prev.next && prev.next.val === val) {
            prev.next = prev.next.next;
        }

        prev = prev.next;
    }

    return head;
};


/** 
 * 204. Count Primes
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n <= 2) return 0;

    let count = 0;
    let notPrimes = {};

    for (let x = 2; x < n; x++) {
        // Number is not a prime, skip
        if (notPrimes[x]) continue;

        count++;

        // Mark multiples of this prime as non prime
        for (let y = x + x; y < n; y += x) {
            notPrimes[y] = true;
        }
    }

    return count;
};


/** 
 * 205. Isomorphic Strings
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let map = {};
    let mapped = {};

    for (let x = 0; x < s.length; x++) {
        if (!map[s[x]]) {
            if (mapped[t[x]]) return false;
            map[s[x]] = t[x];
            mapped[t[x]] = true;
            continue;
        }

        if (map[s[x]] !== t[x]) return false;
    }

    return true;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 
 * 206. Reverse Linked List - O(n) space
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return null;

    let stack = [];

    while (head) {
        stack.push(head);
        head = head.next;
    }

    head = stack.pop();
    curr = head;

    while (stack.length) {
        curr.next = stack.pop();
        curr = curr.next;
    }

    curr.next = null;

    return head;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 
 * 206. Reverse Linked List - O(1) space
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;

    while (head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
};


/** 
 * 217. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let map = {};

    for (let x = 0; x < nums.length; x++) {
        if (map[nums[x]]) return true;
        map[nums[x]] = true;
    }

    return false;
};


/** 
 * 219. Contains Duplicate II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let map = {};

    for (let x = 0; x < nums.length; x++) {
        if (map[nums[x]] !== undefined) {
            if (x - map[nums[x]] <= k) return true;
        }

        map[nums[x]] = x;
    }

    return false;
};


/** 
 * 225. Implement Stack using Queues
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.queue = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let temp = [];

    while (this.queue.length > 1) {
        temp.push(this.queue.shift());
    }

    let ans = this.queue.shift();
    this.queue = temp;
    return ans;

};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    let temp = [];

    while (this.queue.length > 1) {
        temp.push(this.queue.shift());
    }

    let ans = this.queue.shift();
    this.queue = temp;
    this.queue.push(ans);
    return ans;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


/** 
 * 226. Invert Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};


/** 
 * 231. Power of Two - 1
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let x = 1;

    while (n >= x) {
        if (n === x) return true;
        x *= 2;
    }

    return false;
};


/** 
 * 231. Power of Two - 2
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    return Math.log2(n) % 1 === 0;
};