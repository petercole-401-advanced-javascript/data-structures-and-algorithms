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

  insert(value) { // add node to the end of list
    const node = new Node(value, null)
    node.next = this.head;
    this.head = node;
  };

  includes(input) { // is a value in the list? let's traverse and check
    let current = this.head;
    while (current.next !== null) {
      if (current.value === input) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  toString() { // { c } -> { b } -> { a } -> NULL
    let current = this.head;
    let str = '';
    do {
      str = str.concat(`{ ${current.value} } -> `);
      current = current.next;
    } while (current.next !== null);
      str = str.concat(`{ ${current.value} } -> NULL`);
    return str;
  };

  printFull() {
    let current = this.head;
    let str = '';
    do {
      str = str.concat(`{ ${current.value} }  -> `);
      current = current.next;
    } while (current.next !== null);
      str = str.concat(`{ ${current.value} } -> NULL`);
    return str;
  }

  appendAtEnd(node) { // extra method, not part of challenge
    let current = this.head;
    while (current.next !== null){
      current = current.next;
    }
    current.next = node;
  }
}

// ------ Helpful
// console.log({current});

// ------ Build a Tester List
const theList = new LinkedList(new Node(0, null));
for (let i = 1; i <= 1; i++){theList.insert(i)};

// ------ Test includes()
// console.log(theList.includes(4));

// ------ Test toString()
// console.log(theList.toString());

// ------ Test printFull()
console.log(theList.printFull());
let hed = theList.head;
console.log(hed);

module.exports = {LinkedList, Node};
