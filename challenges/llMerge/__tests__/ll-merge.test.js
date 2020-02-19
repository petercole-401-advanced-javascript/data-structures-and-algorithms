'use strict';

const { LinkedList, Node } = require('../linked-list.js')

/*
[x] Can successfully instantiate an empty linked list
[x] Can properly insert into the linked list
[x] The head property will properly point to the first node in the linked list
[x] Can properly insert multiple nodes into the linked list
[x] Will return true when finding a value within the linked list that exists
[x] Will return false when searching for a value in the linked list that does not exist
[x] Can properly return a collection of all the values that exist in the linked list
*/

describe('linked list module', () => {
  it('should check for an empty list', () => {
    const list = new LinkedList();
    expect(list.head).toBeUndefined();
  });
  it('should insert a value', () => {
    const list = new LinkedList();
    list.insert(-7);
    expect(list.head.value).toStrictEqual(-7);
  });
  it('should have the head point to the first node in the linked list', () => {
    const newNode = new Node(0, null);
    const list = new LinkedList(newNode);
    list.insert(1);
    expect(list.head).toEqual({"next": {"next": null, "value": 0}, "value": 1});
  });
  it('can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insert(0);
    list.insert(1);
    list.insert(2);
    expect(list.head.next.value).toStrictEqual(1);
    expect(list.head.next.next.value).toStrictEqual(0);
  });
  it('should include a value', () => {
    const list = new LinkedList();
    list.insert(0);
    list.insert(1);
    list.insert(2);
    expect(list.includes(0)).toStrictEqual(true);
  });
  it('should return false if it doesn\'t include a value', () => {
    const list = new LinkedList();
    list.insert(0);
    list.insert(1);
    list.insert(2);
    expect(list.includes(3)).toEqual(false);
  });
  it('should print the list right', () => {
    const list = new LinkedList();
    list.insert(0);
    list.insert(1);
    list.insert(2);
    expect(list.toString()).toEqual('{ 2 } -> { 1 } -> { 0 } -> NULL');
  });
});
