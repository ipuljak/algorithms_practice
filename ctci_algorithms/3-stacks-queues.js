/**
 *  =============================================
 *          Chapter 3: Stacks & Queues
 *  =============================================
 */


/**
 *  3.1 - Three In One
 *  Describe how you could use a single array to implement three stacks.
 * 
 *  Stack 1: Front of array to delimeter 1
 *  Stack 2: Delimeter 2 to end of array
 *  Stack 3: Delimeter 1 to Delimeter 2
 */


/**
 *  3.2 - Stack Min
 *  How would you design a stack which, in addition to push and pop, has a 
 *  function min which returns the minimum element? Push, pop and min should all 
 *  operate in 0(1) time.
 * 
 *  Maintain a second stack of the minimums, push and pop as needed.
 */


/**
 *  3.3 - Stack of Plates
 *  Imagine a (literal) stack of plates. If the stack gets too high, it might 
 *  topple. Therefore, in real life, we would likely start a new stack when the\
 *  previous stack exceeds some threshold. Implement a data structure SetOfStacks
 *  that mimics this. SetOfStacks should be composed of several stacks and should
 *  create a new stack once the previous one exceeds capacity. SetOfStacks. 
 *  push() and SetOfStacks. pop() should behave identically to a single stack 
 *  (that is, pop () should return the same values as it would if there were 
 *  just a single stack).
 */
let SetOfStacks = function (size) {
  this.size = size;
  this.stacks = [];
  this.current = [];

  /* Function for pushing items onto the stack */
  this.pushh = item => {
    this.current.push(item);
    // Create a new current stack to use and push the old one onto the group
    if (this.current.length === this.size) {
      this.stacks.push(this.current);
      this.current = [];
    }
  };

  /* Function for retrieving the last item from the stack */
  this.popp = () => {
    // Retrieve the latest stack from the group if current is empty and stacks exist
    if (this.current.length === 0) {
      if (this.stacks.length !== 0) {
        this.current = this.stacks.pop();
      } else {
        return undefined;
      }
    }
    return this.current.pop();
  };

  /* Follow up for popAt */
  this.popAt = index => {
    if (this.stacks.length >= index) {
      return this.stacks[index].pop();
    }
  };
};


/**
 *  3.4 - Queue via Stacks
 *  Implement a MyQueue class which implements a queue using two stacks.
 */
let MyQueue = function () {
  // Create two stacks to use
  this.oldest = [];
  this.newest = [];

  /* Add an item to the queue */
  this.queue = item => {
    this.newest.push(item);
  };

  /* Remove an item from the queue */
  this.dequeue = () => {
    // Check that the oldest stack has items
    if (this.oldest.length > 0) {
      return this.oldest.pop();
    } else {
      // If oldest is empty, dump newest into oldest in reverse order
      while (this.newest.length !== 0) {
        this.oldest.push(this.newest.pop());
      }
      // Return the pop of oldest if it's non-empty
      if (this.oldest.length > 0) {
        return this.oldest.pop();
      } else {
        return undefined;
      }
    }
  };
};


/**
 *  3.5 - Sort Stack
 *  Write a program to sort a stack such that the smallest items are on the top.
 *  You can use an additional temporary stack, but you may not copy the elements
 *  into any other data structure (such as an array). The stack supports the
 *  following operations: push, pop, peek, and is Empty.
 */
const sortStack = stack => {
  // Simulate a stack using an array for simplicity
  let length = stack.length;
  let tempStack = [];
  let current = largest = 0;

  while (tempStack.length !== length) {
    current = stack.pop();
    if (current > largest) {
      // Work on this later
    }
  }
};