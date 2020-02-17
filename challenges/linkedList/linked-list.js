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
    if (current === undefined) {
      return false;
    }
    do {
      if (current.value === input) {
        return true;
      }
      current = current.next;
    } while (current.next != null);
    if (current.value === input) {
      return true;
    }
    return false;
  };

  toString() { // { c } -> { b } -> { a } -> NULL
    let current = this.head;
    let str = '';
    if (current === undefined) {
      return 'Easy there fella, you\'ve got an empty list!';
    }
    do {
      str = str.concat(`{ ${current.value} } -> `);
      current = current.next;
    } while (current.next != null);
      str = str.concat(`{ ${current.value} } -> NULL`);
    return str;
  };

  printHead() { // extra method, head check
    return this.head;
  };

  appendAtEnd(node) { // extra method, add node to the end, might have an OBOE
    let current = this.head;
    while (current.next != null){
      current = current.next;
    }
    current.next = node;
  };
}

// ------ Helpful
// console.log({current});

// ------ Build a Tester List
// const theList = new LinkedList();
// for (let i = 0; i <= 2; i++){theList.insert(i)};

// ------ Test includes()
// console.log(theList.includes(4));

// ------ Test toString()
// console.log(theList.toString());

// ------ Test printHead()
// console.log('Head: ', theList.printHead());

module.exports = {LinkedList, Node};
