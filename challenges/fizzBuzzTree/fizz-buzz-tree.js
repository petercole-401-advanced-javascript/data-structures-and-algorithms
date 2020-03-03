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
    stack.push(current.value);
    if (current.left !== null) this.preOrder(current.left, stack);
    if (current.right !== null) this.preOrder(current.right, stack);
    return stack;
  }
  modulusToSring(value) {
    if (value % 3 === 0 && value % 5 === 0) {
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

// THIS NEEDS WORK vvv

let fizzTree = new BinaryTree(new Node())

function FizzBuzzTree(root, stack = []) {
  let current = root;
  if (current === null) return;
  stack.push(current.value);
  fizzTree.current = new Node(current.value);
  if (current.left !== null) {
    fizzTree.left = new Node(fizzTree.modulusToSring(current.value));
    FizzBuzzTree(current.left, stack);
  }
  if (current.right !== null) {
    fizzTree.right = new Node(fizzTree.modulusToSring(current.value));
    FizzBuzzTree(current.right, stack);
  }
  return fizzTree;
}

const testTree = new Node(10, new Node(6, new Node(3, null, null), new Node(8, null, null)), new Node(15, null, new Node(20, null, null)));

console.log(FizzBuzzTree(testTree));


module.exports = { BinaryTree, Node };
