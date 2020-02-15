'use strict';

class Node { // set up your node creation
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {  // create list
  constructor(head) {
    this.head = head;
  }
  insert(value) {
    const node = new Node(value, null)
    node.next = this.head;
    this.head = node;
  }
  // includes(); // placeholder
  // toString(); // placeholder
  append(node) { // and add a node at the end
    let current = this.head;
    while (current !== null) {
      current = current.next;
    }
    current.next = node;
  }
}

// const elListo = new LinkedList(1);

// elListo.append(5);

module.exports = LinkedList;
