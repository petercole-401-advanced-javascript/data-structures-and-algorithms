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
    let popValue = this.top.value;
    this.top = this.top.next;
    return popValue;
  }
	peek(){
		return this.storage.length ? this.storage[0].value : null;
  }
  isEmpty(){
    return this.storage.length;
  }
}

class Queue {

}

module.exports = { Node, Stack, Queue};

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