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
    const node = new Node(value, null);
    // node.previous = this.head.previous;
    node.next = this.head;
    this.head = node;
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

function mergeList(listA, listB){
  let array = [];
  let i = 0;
  let current = listA.head;
  while (current.next){
    array[i] = current.value;
    current = current.next;
    i += 2;
  }
  array[i + 2] = current.value;
  i = 1;
  current = listB.head;
  while (current.next){
    array[i] = current.value;
    current = current.next;
    i += 2;
  }
  array[i + 2] = current.value;
  array = array.filter(obj => obj !== undefined);
  const newList = new LinkedList();
  for(i = 0; i < array.length; i++){
    newList.insert(array[i]);
  }
  return array;
};

// ------ Build a Tester List
// const listA = new LinkedList();
// const listB = new LinkedList();
// for (let i = 0; i <= 2; i++){listA.insert(i)};
// for (let i = 5; i <= 9; i++){listB.insert(i)};

// console.log(mergeList(listA, listB));

module.exports = {LinkedList, Node, mergeList};
