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

  inOrder(root, stack = []) {
    let current = root;
    if (current === null) return;
    if (current.left !== null) this.inOrder(current.left, stack);
    stack.push(current.value);
    if (current.right !== null) this.inOrder(current.right, stack);
    return stack;
  }
  postOrder(root, stack = []) {
    let current = root;
    if (current === null) return;
    if (current.left !== null) this.postOrder(current.left, stack);
    if (current.right !== null) this.postOrder(current.right, stack);
    stack.push(current.value);
    return stack;
  }
}

class BinarySearchTree {
  add(input) {
    // insert new node at the correct place in the tree
    node = new Node(input)
  }
  contains(input) {
    // traversal and compare value to input to node.value
  }
}

module.exports = { BinaryTree, Node };
