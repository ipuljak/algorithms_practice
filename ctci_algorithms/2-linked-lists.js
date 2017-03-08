/**
 *  =============================================
 *             Chapter 2: Linked Lists
 *  =============================================
 */


/** Object constructor to define a Node */
let Node = function (data) {
  this.data = data;
  this.next = null;
};

/** Object constructor to define a SinglyList composed of Node objects */
let SinglyList = function () {
  this._length = 0;
  this.head = null;

  /** Add a new node to the linked list */
  this.add = val => {
    // Create the node
    let node = new Node(val);
    let currentNode = this.head;

    // Set this new node to be the head if no head exists
    if (!currentNode) {
      this.head = node;
      this._length++;
      return node;
    }

    // Traverse the linked list to get to the tail
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    // Set the next node in place and increment the linked list length
    currentNode.next = node;
    this._length++;
    return node;
  };

  /** Retrieve the node from the linked list at position pos */
  this.get = pos => {
    // Return undefined if position pos does not exist
    if (pos < 1 || pos > this._length) {
      return undefined;
    }

    // Prepare to traverse the linked list
    let count = 1;
    let currentNode = this.head;

    // Traverse the linked list until we reach our desire position
    while (count !== pos) {
      currentNode = currentNode.next
      count++;
    }

    // Return the node at this location
    return currentNode;
  };

  /** Remove the node from the linked list as position pos */
  this.remove = pos => {
    // Return undefined if position pos does not exist
    if (pos < 1 || pos > this._length) {
      return undefined;
    }

    // To remove the head, set head to the next node of head
    if (pos === 1) {
      this.head = this.head.next;
    }

    // Prepare to traverse the linked list
    let count = 1;
    let currentNode = this.head;
    let previousNode = null;

    // Traverse the linked list until we reach our desire position
    while (count !== pos) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    // Set the next node of the previous node to be the next of the deleted node
    previousNode.next = currentNode.next;
    this._length--;
    return previousNode;
  };

  /** Add all values in the linked list to an array */
  this.toArray = () => {
    // // Instantiate the nodes array and current node
    let nodes = [];
    let currentNode = this.head;

    // Loop through each of the nodes and add their values to the array
    while (currentNode) {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nodes;
  };
};


/**
 *  2.1 - Remove Dups
 *  Write code to remove duplicates from an unsorted linked list.
 *  FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?
 */
const removeDups = list => {
  let map = new Set();
  let previousNode = null;
  let currentNode = list.head;

  // Cycle through the nodes in the linked list
  while (currentNode) {
    // Add the value to the set if it doesn't exist, otherwise remove the node
    if (!map.has(currentNode.data)) {
      map.add(currentNode.data);
      previousNode = currentNode;
    } else {
      previousNode.next = currentNode.next;
    }
    currentNode = currentNode.next;
  }
  return list;
};
// The above runs in O(N) time.
// For a no buffer solution, consider using a runner to look ahead for duplicates
// -> This would run in O(N^2) worst time


/**
 *  2.2 - Return Kth to Last
 *  Implement an algorithm to find the kth to last element of a singly linked list.
 */
const kthToLast = (list, k) => {
  let node1 = node2 = list.head;

  // Move one node reference k spaces ahead
  for (let x = 0; x < k; ++x) {
    node1 = node1.next;
  }

  // Move both node references ahead until node1 hits the end
  while (node1) {
    node1 = node1.next;
    node2 = node2.next;
  }

  // node2 should reference the length - k node 
  return node2;
};


/**
 *  2.3 - Delete Middle Node
 *  Implement an algorithm to delete a node in the middle (i.e., any node but 
 *  the first and last node, not necessarily the exact middle) of a singly 
 *  linked list, given only access to that node.
 */
const deleteNode = node => {
  // Node must have a child and cannot be null
  if (!node || !node.next) {
    return false;
  }

  // Carry over the data for the next node
  let nextNode = node.next;
  node.data = nextNode.data;
  node.next = nextNode.next;
  return true;
};


/**
 *  2.4 - Partition
 *  Write code to partition a linked list around a value x, such that all nodes 
 *  less than x come before all nodes greater than or equal to x. If x is 
 *  contained within the list the values of x only need to be after the elements
 *  less than x (see below). The partition element x can appear anywhere in the 
 *  "right partition"; it does not need to appear between the left and right partitions.
 */
const partition = (list, x) => {
  // Create two linked lists, one for smaller than x elements, one for larger
  let smaller = new SinglyList();
  let larger = new SinglyList();
  let currentNode = list.head;

  // Go through the linked list adding in the values to smaller/larger
  while (currentNode) {
    currentNode.data >= x ? larger.add(currentNode.data) : smaller.add(currentNode.data);
    currentNode = currentNode.next;
  }

  currentNode = smaller.head;

  // Iterate to the end of the smaller list to merge it with the larger one
  while (currentNode) {
    if (!currentNode.next) {
      currentNode.next = larger.head;
      break;
    }
    currentNode = currentNode.next;
  }
  // Return the merged linked lists
  return smaller;
};


/**
 *  2.5 - Sum Lists
 *  You have two numbers represented by a linked list, where each node contains 
 *  a single digit. The digits are stored in reverse order, such that the 1 's 
 *  digit is at the head of the list. Write a function that adds the two numbers 
 *  and returns the sum as a linked list.
 */
// Build a new linked list to keep the new values in
let linked = new SinglyList();

const sumLists = (list1, list2, carry) => {

  let sum = list1.data + list2.data + carry;
  let lastDigit;

  // If there the sum of the values is >= 10, keep a carry over for next nodes
  if (list1.data + list2.data + carry >= 10) {
    lastDigit = sum - 10;
    linked.add(lastDigit);
    // Check if more nodes exist, otherwise we're finished
    if (list1.next && list2.next) {
      return sumLists(list1.next, list2.next, 1);
    } else {
      return 0;
    }
    // No carry over, add values and continue to the next node
  } else {
    linked.add(sum);
    // Check if more nodes exist, otherwise we're finished
    if (list1.next && list2.null) {
      return sumLists(list1.next, list2.next, 0);
    } else {
      return 0;
    }
  }
};


/**
 *  2.6 - Palindrome
 *  Implement a function to check if a linked list is a palindrome.
 */
const palindrome = list => {
  let chars = '';
  let currentNode = list.head;

  // Iterate through the linked list building the string of node datas
  while (currentNode) {
    chars += currentNode.data;
    currentNode = currentNode.next;
  }

  // Check if the built string is a palindrome
  return chars === chars.split('').reverse().join('');

  // A more proper way of solving this problem is to use a runner pointer
  // Look ahead at twice the speed and use the slow pointer to add to a stack
  // Once the runner reaches the end, the stack contains the first half of the list
  // Then pop out values from the stack and compare if they are equal to the slow
  // pointer as it continues on the second half of the linked list
};


/**
 *  2.7 - Intersection
 *  Given two (singly) linked lists, determine if the two lists intersect. 
 *  Return the intersecting node. Note that the intersection is defined based on 
 *  reference, not value. That is, if the kth node of the first linked list is 
 *  the exact same node (by reference) as the jth node of the second linked 
 *  list, then they are intersecting.
 */
const intersection = (list1, list2) => {
  return null;
};


/**
 *  2.8 - Loop Detection
 *  Given a circular linked list, implement an algorithm that returns the node 
 *  at the beginning of the loop.
 */
const loopDetection = list => {
  let map = new Set();
  let currentNode = list.head;

  // Add the nodes in the set and check if they exist already
  while (currentNode) {
    if (map.has(currentNode)) {
      return currentNode;
    } else {
      map.add(currentNode);
    }
  }
  // No loop in this list
  return false;

  // A more proper way to implement this is to use a runner pointer, and while it
  // traverses the list, it's bound to eventually colide with the slower pointer.
};
