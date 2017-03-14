/**
 *  1. Two Sum
 *  Given an array of integers, return indices of the two numbers such that they 
 *  add up to a specific target.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let compliments = {};
  for (let x = 0; x < nums.length; x++) {
    if (compliments.hasOwnProperty(nums[x])) {
      return [compliments[nums[x]], x];
    }
    compliments[target - nums[x]] = x;
  }
};


/**
 *  2. Add Two Numbers
 *  Definition for singly-linked list.
 *  function ListNode(val) {
 *      this.val = val;
 *      this.next = null;
 *  }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let carry = sum = v1 = v2 = 0;
  let list = node = new ListNode(0);

  while (l1 || l2 || carry > 0) {
    v1 = v2 = 0;

    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    }

    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    }

    sum = v1 + v2 + carry;
    carry = 0;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    node.next = new ListNode(sum);
    node = node.next;
  }
  return list.next;
};


/**
 *  3. Longest Substring Without Repeating Characters
 *  Given a string, find the length of the longest substring without repeating 
 *  characters.
 * 
 * @param {string} s
 * @return {number}
 */
const lengthLongest = s => {
  let curStr = '';
  let longest = curLength = 0;

  
};


console.log(lengthLongest('dvdf'));