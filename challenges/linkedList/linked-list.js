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

  printList() {
    let current = this.head;
    while (current.next !== null) {
      console.log(`Value: ${current.value}`);
      current = current.next;
    }
  };

  includes(input) {
    let current = this.head;
    while (current.next !== null) {
      console.log({current});
      if (current.value === input) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  // toString(); // placeholder
  append(node) { // and add a node at the end
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
}

const theList = new LinkedList(new Node(-1, null));

for(let i = 0; i < 5; i++){
  theList.insert(i);
}

console.log(theList.includes(4));

module.exports = LinkedList;
