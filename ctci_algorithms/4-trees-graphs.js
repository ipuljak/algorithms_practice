/**
 *  =============================================
 *          Chapter 4: Trees & Graphs
 *  =============================================
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