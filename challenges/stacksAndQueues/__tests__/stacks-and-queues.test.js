'use strict';

const {Node, Stack, Queue} = require('../stacks-and-queues.js');

describe('Stack', () => {
  describe('push()', () => {
    const testStack = new Stack();
    testStack.push('xX_pwnN00bs_Xx');
    testStack.push(1337);
    it('the top of the stack is what was added', () => {
      expect(testStack.top.value).toEqual(1337);
      expect(testStack.top.next.value).toEqual('xX_pwnN00bs_Xx');
    });
    it('the stack reflects multiple pushes', () => {
      let current = testStack.top;
      let length = 0;
      while (current.next) {
        length++;
        current = current.next;
      }
      length++;
      expect(length).toEqual(2);
    });
  });
  describe('pop()', () => {
    const testStack = new Stack();
    testStack.push('xX_pwnN00bs_Xx');
    testStack.push(1337);
    it('can pop nodes off the stack', () => {
      expect(testStack.pop()).toEqual(1337);
    });
  });
});
