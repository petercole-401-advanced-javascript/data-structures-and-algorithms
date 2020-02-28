'use strict';

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Stack{
  constructor(){
    this.storage = [];
  }
  push(value){
    return this.storage.unshift(value);
  }
  pop(){
    if (this.storage.length) return this.storage.shift();
  }
  peek(){
    if (this.storage.length) return this.storage[0];
  }
}

class Queue {
    constructor(){
      this.front = null;
    }
    enqueue(value){
      const node = new Node(value, null);
      let current = this.front;
      if (current){
        while (current.next){
          current = current.next;
        }
        current.next = node;
      } else {
        this.front = node;
      }
    }
    dequeue(){
      let current = this.front;
      let deqNode = {};
      if (current != null){
        while (current.next){
          current = current.next;
        }
        deqNode = current.value;
        current = null;
      } else {
        deqNode = 'Empty Queue';
        this.front = null;
      }
      return deqNode;
    }
    peek(){
      return this.front ? this.front.value : null;
    }
    isEmpty(){
      return this.front ? false : true;
    }
  }

class BinaryTree {
  constructor(){
    this.root = root;
  }
  preOrderTraverse(root){
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

  // get me everything at depth 1, then at depth 2, 3, ... (not recursive, yes iterative)

  breadthFirstTraverse(root){
    const queue = new Queue();
    queue.enqueue(root);
    while (queue.peek()) {
      let current = queue.dequeue();
      console.log(current);
      if (current.left !== null) queue.enqueue(current.left);
      if (current.right !== null) queue.enqueue(current.right);
    }
  }
}

module.exports = { BinaryTree, Node, Stack, Queue };
