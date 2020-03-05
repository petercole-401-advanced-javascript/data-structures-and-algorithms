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
  breadthFirst(root,)
}

module.exports = { BinaryTree, Node };


// POSSIBLE REVERSE BREADTH FIRST
// FROM KYLO AND DRYER

function RLOT(tree) {
  if (tree === null) return null
  if (tree.root === null) return null
  let queue = []
  let output = []
  let current = tree.root
  queue.unshift(current)
  while (queue.length !== 0) {
    current = queue.pop()
    output.unshift(current.value)
    if (current.left !== null) queue.unshift(current.left)
    if (current.right !== null) queue.unshift(current.right)
  }
  return output
}
