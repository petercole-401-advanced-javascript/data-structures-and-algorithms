'use strict';

const LinkedList = require('../linked-list.js');

describe('linked module', () => {
  it('should insert a value', () => {
    const linkedList = new LinkedList();
    linkedList.insert(-7);
    expect(linkedList.head.value).toStrictEqual(-7);
  });
});
