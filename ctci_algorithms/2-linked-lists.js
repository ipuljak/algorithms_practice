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
};


/**
 *  2.1 - Remove Dups
 *  Write code to remove duplicates from an unsorted linked list.
 *  FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed?
 */
const removeDups = ll => {
  return ll;
};