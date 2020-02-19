'use strict';

class Node { // set up your node creation
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

class LinkedList {  // create list
  constructor(head) {
    this.head = head;
  }

  insert(value){ // add node to the beginning of list
    const node = new Node(value, previous, null);
    node.previous = this.head.previous;
    node.next = this.head;
    this.head = node;
  };

  includes(input){ // is a value in the list? let's traverse and check
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

  toString(){ // { c } -> { b } -> { a } -> NULL
    let current = this.head;
    let str = '';
    if (current === undefined) { // or maybe !current
      return 'Easy there fella, you\'ve got an empty list!';
    }
    do {
      str = str.concat(`{ ${current.value} } -> `);
      current = current.next;
    } while (current.next != null);
      str = str.concat(`{ ${current.value} } -> NULL`);
    return str;
  };

  toStringInClass(){
    let current = this.head;
    let string = '';
    while (current.next) {
      string += `{ ${current.value} } ->`;
      current = current.next;
    }
    string += `{ ${current.value} } -> NULL`;
    return string;
  }

  printHead(){ // extra method, head check
    return this.head;
  };

  append(value){ // add node to the end
    const newNode = new Node(value);
    let current = this.head;
    while (current.next != null){
      current = current.next;
    }
    current.next = newNode;
  };

  insertBefore(value, newVal){ // add node before a node
    const newNode = new Node(newVal);
    let current = this.head;
    let flag = false;
    while (current.next != null && flag === false){
      if (current.value === value){
        flag = true;
        newNode.next = current.next;
        newNode.previous = current.previous;
      }
      current = current.next;
    }
    return flag === false ? 'no match' : 'inserted';
  };

  insertAfter(value, newVal){ // add node after a node
    const newNode = new Node(newVal);
    let current = this.head;
    let flag = false;
    while (current.next != null && flag === false){
      if (current.value === value){
        flag = true;
        newNode.next = current.next.next;
        newNode.previous = current;
      }
      current = current.next;
    }
    return flag === false ? 'no match' : 'inserted';
  };
}

const lucasList = (count, first, second) => {
  const initial = new Node(first);
  let linkList = new LinkedList(initial);
  linkList.appendAtEnd(second);

  let nextNum;
  count = count - 2;

  while (count>=2 && typeof first === 'number' && typeof second === 'number'){
    nextNum = first + second;
    linkList.appendAtEnd(second);
    first = second;
    second = nextNum;
    count--;
  }
  console.log(linkList.toString());
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

// ------ Test toStringInClass()
// console.log(theList.toStringInClass());

// lucasList(10, 0, 1);

module.exports = {LinkedList, Node};
