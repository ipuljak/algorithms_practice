/**
 *  =============================================
 *          Chapter 4: Trees & Graphs
 *  =============================================
 */

/**
 *  Binary Trees
 *  ============
 * 
 *  Definitions
 *  -----------
 * 
 *  Complete Binary Tree: Every level filled except perhaps last, left to right
 *  Full Binary Tree: Every node has either 0 or 2 children
 *  Perfect Binary Tree: Both full and complete
 * 
 *  Traversal
 *  ---------
 * 
 *  In-Order: Visit the left branch, then the current node, then the right branch
 *  Pre-Order: Visit the current node before its child nodes
 *  Post-Order: Visits the current node after its child nodes
 */

/** Object constructor to define a Node */
let Node = function (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
};

/** Object constructor to define a SinglyList composed of Node objects */
let BinarySearchTree = function () {
  this.root = null;
};

/** In-Order traversal */
const inOrderTraversal = node => {
  if (node) {
    inOrderTraversal(node.left);
    console.log('Node:', node.data);
    inOrderTraversal(node.right);
  }
};

/** Pre-Order traversal */
const preOrderTraversal = node => {
  if (node) {
    console.log('Node:', node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
};

/** Post-Order traversal */
const postOrderTraversal = node => {
  if (node) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log('Node:', node.data);
  }
};

/** Perfect binary tree for later use */
let eleven = new Node(11, null, null);
let twentytwo = new Node(22, null, null);
let three = new Node(3, null, null);
let seven = new Node(7, null, null);

let twenty = new Node(20, eleven, twentytwo);
let five = new Node(5, three, seven);

let ten = new Node(10, five, twenty);


/**
 *  Binary Heaps
 *  ============
 * 
 *  Definitions
 *  -----------
 * 
 *  Min-heap is a complete binary tree where each node is smaller than its children
 *  Therefore the root is the minimum element in tree
 */


/**
 *  Graphs
 *  ======
 */
let Graph = function (nodes) {
  this.nodes = nodes;
};

let GNode = function (name, children) {
  this.name = name;
  this.children = children;
};

/** Depth-First Search */
const DFS = (node, visited) => {
  if (!node) return;
  visited.push(node);
  for (let x = 0; x < node.children.length; x++) {
    if (!visited.includes(node.children[x])) {
      DFS(node.children[x], visited);
    }
  }
  return visited;
};

/** Breadth-First Search */
const BFS = node => {
  if (!node) return;
  let queue = [node];
  let visited = [];
  let current;

  while (queue.length !== 0) {
    current = queue.shift();
    visited.push(current);
    for (let x = 0; x < current.children.length; x++) {
      if (!visited.includes(current.children[x]) && !queue.includes(current.children[x])) {
        queue.push(current.children[x]);
      }
    }
  }
  return visited;
};

let i = new GNode('i', []);
let j = new GNode('j', []);
let h = new GNode('h', [i]);
let c = new GNode('c', [h, j]);
let b = new GNode('b', []);
let k = new GNode('k', [b, i, j]);
let e = new GNode('e', [k]);
let g = new GNode('g', [k, h]);

let Graph1 = new Graph([i, j, h, c, b, k, e, g]);


/**
 *  4.1 Route Between Nodes
 *  Given a directed graph, design an algorithm to find out whether there is a 
 *  route between two nodes.
 */
const routeBetween = (a, b) => {
  let queue = [a];
  let visited = [];
  let current;
  // Perform BFS and return true if we visit the b node
  while (queue.length !== 0) {
    current = queue.shift();
    visited.push(current);
    if (current === b) return true;
    for (let x = 0; x < current.children.length; x++) {
      if (!visited.includes(current.children[x]) && !queue.includes(current.children[x])) {
        queue.push(current.children[x]);
      }
    }
  }
  return false;
};


/**
 *  4.2 Minimal Tree
 *  Given a sorted (increasing order) array with unique integer elements, write 
 *  an algo­rithm to create a binary search tree with minimal height.
 */
const createMinimalTree = (arr, start, end) => {
  if (end < start) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);
  let node = new Node(arr[mid], null, null);
  node.left = createMinimalTree(arr, start, mid - 1);
  node.right = createMinimalTree(arr, mid + 1, end);
  return node;
};

const minimalTree = arr => {
  return createMinimalTree(arr, 0, arr.length - 1);
};


/**
 *  4.3 List of Depths
 *  Given a binary tree, design an algorithm which creates a linked list of all 
 *  the nodes at each depth (e.g., if you have a tree with depth D, you'll have 
 *  D linked lists).
 */
const atDepth = (node, depths, d) => {
  if (!node) return null;
  // Create the linked list for the depth if it doesn't exist, otherwise add the node in
  depths[d] ? depths[d].push(node) : depths[d] = [node];
  atDepth(node.left, depths, d + 1);
  atDepth(node.right, depths, d + 1);
};

const listOfDepths = tree => {
  let depths = [];
  atDepth(tree, depths, 0);
  return depths;
};


/**
 *  4.4 Check Balanced
 *  Implement a function to check if a binary tree is balanced. For the purposes 
 *  of this question, a balanced tree is defined to be a tree such that the 
 *  heights of the two subtrees of any node never differ by more than one.
 */
// Calculate the height at each node
const calculateHeights = node => {
  if (!node) return 0;
  return 1 + calculateHeights(node.left) + calculateHeights(node.right);
};

// Check if the tree is balanced at each node
const checkBalanced = node => {
  if (!node) return true;
  // If any node has a height that differs by more than 1, it isn't balanced
  if ((Math.abs(calculateHeights(node.left) - calculateHeights(node.right)) > 1)) {
    return false;
  } else {
    // Check that each subtree is balanced
    return checkBalanced(node.left) && checkBalanced(node.right);
  }
};


/**
 *  4.5 Validate BST
 *  Implement a function to check if a binary tree is a binary search tree.
 */
const checkBST = node => {
  if (!node || ((!node.left && !node.right))) return true;
  if (node.left && node.right) {
    return node.data > node.left.data && node.data < node.right.data && checkBST(node.left) && checkBST(node.right);
  }
  if (node.left) return node.data > node.left.data && checkBST(node.left);
  if (node.right) return node.data < node.right.data && checkBST(node.right);
};


/**
 *  4.6 Successor
 *  Write an algorithm to find the "next" node (i.e., in-order successor) of a 
 *  given node in a binary search tree. You may assume that each node has a link
 *  to it's parent.
 */
const successor = node => {
  if (!node.right) return undefined;
  let curNode = node.right;
  while (curNode.left) {
    curNode = curNode.left;
  }
  return curNode;
};

// problem - when node does not have a right subtree