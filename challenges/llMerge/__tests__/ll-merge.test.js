'use strict';

const { LinkedList, Node, mergeList } = require('../ll-merge.js')

describe('linked list module', () => {
  it('should check for an empty list', () => {
    const list = new LinkedList();
    expect(list.head).toBeUndefined();
  });
  it('should merge two lists', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    for (let i = 0; i <= 2; i++){listA.insert(i)};
    for (let i = 5; i <= 7; i++){listB.insert(i)};
    expect(mergeList(listA, listB)).toEqual([2, 7, 1, 6, 0, 5]);
  });
  it('should merge two uneven lists', () => {
    const listA = new LinkedList();
    const listB = new LinkedList();
    for (let i = 0; i <= 2; i++){listA.insert(i)};
    for (let i = 5; i <= 9; i++){listB.insert(i)};
    expect(mergeList(listA, listB)).toEqual([2, 9, 1, 8, 7, 0, 6, 5]);
  });
});
