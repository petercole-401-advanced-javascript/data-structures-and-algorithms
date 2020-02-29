'use strict';

class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Stack {
  constructor() {
    this.storage = [];
  }
  push(value) {
    return this.storage.unshift(value);
  }
  pop() {
    if (this.storage.length) return this.storage.shift();
  }
  peek() {
    if (this.storage.length) return this.storage[0];
  }
}

class BinaryTree {
  constructor() {
    this.root = new BinaryTree(new Node(10, new Node(6, new Node(3, null, null), new Node(8, null, null)), new Node(15, null, new Node(20, null, null))));; 
    //new Node();
  }
  preOrder(root){
    const stack = new Stack();
    let current = root;
    if (current === null) {
      return;
    }
    console.log(current.value);
    if (current.left !== null) {
      stack.push(current);
      traverse(current.left);
    }
    if (current.right !== null) {
      stack.push(current);
      traverse(current.right);
    }
    preOrderTraverse(stack.pop());
  }
  inOrder() {

  }
  postOrder() {

  }
}

const test = new BinaryTree()
console.log(test.preOrder());

class BinarySearchTree{
  add(input) {
    // insert new node at the correct place in the tree
    node = new Node(input)
  }
  contains(input) {
    // traversal and compare value to input to node.value
  }
}

module.exports = { BinaryTree, Node };

// get me everything at depth 1, then at depth 2, 3, ... (not recursive, yes iterative)
// breadthFirstTraverse(root){
//   const queue = new Queue();
//   queue.enqueue(root);
//   while (queue.peek()) {
//     let current = queue.dequeue();
//     console.log(current);
//     if (current.left !== null) queue.enqueue(current.left);
//     if (current.right !== null) queue.enqueue(current.right);
//   }
// }
