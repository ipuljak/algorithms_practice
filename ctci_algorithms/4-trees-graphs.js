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
let nine = new Node(9, null, null);
let eighteen = new Node(18, null, null);
let three = new Node(3, null, null);
let seven = new Node(7, null, null);

let five = new Node(5, nine, eighteen);
let twenty = new Node(20, three, seven);

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


