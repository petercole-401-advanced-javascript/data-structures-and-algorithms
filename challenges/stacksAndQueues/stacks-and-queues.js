'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
	constructor(){
		this.top = null;
	}
  push(value){
    const node = new Node(value, null);
    node.next = this.top;
    this.top = node;
  }
  pop(){
    let popValue = 'Empty List';
    if (this.top){
      popValue = this.top.value;
      this.top = this.top.next;
    }
    return popValue;
  }
	peek(){
		return this.top ? this.top.value : null;
  }
  isEmpty(){
    return this.top ? false : true;
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
  append(value){ // add node to the end
    const newNode = new Node(value);
    let current = this.head;
    while (current.next != null){
      current = current.next;
    }
    current.next = newNode;
  };
  dequeue(){

  }
  peek(){
    return this.front ? this.front.value : null;
  }
  isEmpty(){
    return this.front ? false : true;
  }
}

module.exports = {Stack, Queue};

// class LinkedList {  // create list
//   constructor(head) {
//     this.head = head;
//   }
//   insert(value){ // add node to the beginning of list
    // const node = new Node(value, null);
    // node.next = this.head;
    // this.head = node;
//   }
// }