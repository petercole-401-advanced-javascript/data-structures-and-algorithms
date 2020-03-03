'use strict';

class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder(root, stack = []) {
    let current = root;
    if (current === null) return;
    stack.push(this.modulusToSring(current.value));
    if (current.left !== null) this.preOrder(current.left, stack);
    if (current.right !== null) this.preOrder(current.right, stack);
    return stack;
  }
  modulusToSring(value) {
    if (value % 3 === 0 && value % 5 === 0){
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
        return 'Buzz'
    } else {
        return value.toString();
    }
  }
}

module.exports = { BinaryTree, Node };
