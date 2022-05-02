const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack = [...this.stack, element];
  }

  pop() {
    let myArr = [];
    let last;

    function popLast(arr) {
      last = arr[arr.length - 1];
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
          newArr.push(arr[i]);
        }
      }
      myArr = newArr;
      return last;
    }
    
    const doIt = popLast(this.stack);
    this.stack = myArr;
    return last;
  }

  peek() {
    return peekLast(this.stack);

    function peekLast(arr) {
      const last = arr[arr.length - 1];
      return last;
    }
  }
}

module.exports = {
  Stack
};
