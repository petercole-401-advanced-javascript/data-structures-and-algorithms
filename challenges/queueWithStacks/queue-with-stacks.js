'use strict';

class PseudoQueue{
  constructor(stackA = new Stack(), stackB = new Stack()){
    this.stackA = stackA;
    this.stackB = stackB;
  }
  enqueue(value){
    for (let i = 0; i < this.stackA.storage.length; i++){
      this.stackB.storage.push(this.stackA.storage[i]);
    }
    this.stackB.storage.push(value);
  }
  dequeue(){
    for (let i = 0; i < this.stackA.storage.length; i++){
      this.stackB.storage.push(this.stackA.storage[i]);
    }
    this.stackB.storage.pop();
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

module.exports = {PseudoQueue, Stack};

// class Queue {
//   constructor(){
//     this.front = null;
//   }
//   enqueue(value){
//     const node = new Node(value, null);
//     let current = this.front;
//     if (current){
//       while (current.next){
//         current = current.next;
//       }
//       current.next = node;
//     } else {
//       this.front = node;
//     }
//   }
//   dequeue(){
//     let current = this.front;
//     let deqNode = {};
//     if (current != null){
//       while (current.next){
//         current = current.next;
//       }
//       deqNode = current.value;
//       current = null;
//     } else {
//       deqNode = 'Empty Queue';
//       this.front = null;
//     }
//     return deqNode;
//   }
//   peek(){
//     return this.front ? this.front.value : null;
//   }
//   isEmpty(){
//     return this.front ? false : true;
//   }
// }
