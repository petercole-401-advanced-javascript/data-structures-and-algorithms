'use strict';

class Node{ // set up your node creation
  constructor(value, next){
  this.value = value;
  this.next = next;
  }
}


class LinkedList{  // create list
  constructor(head){
    this.head = head;
  }
  insert(value){
    let current = this.head;
    current.next = node;
  }
  includes()
  append(node) {  // and add a node at the end
    let current = this.head;
    while (current.next !== null){
      current = current.next;
    }
    current.next = node;
  }
}

const elListoBlanco = new LinkedList(1);

elListoBlanco.append(5);

module.exports = LinkedList;
