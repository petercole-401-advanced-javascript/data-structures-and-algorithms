'use strict';

const {Stack, Queue} = require('../stacks-and-queues.js');

describe('Stack', () => {
  describe('isEmpty()', () => {
    it('returns true if it is empty', () => {
      const testStack = new Stack();
      expect(testStack.isEmpty()).toEqual(true);
    });
    it('returns false if it is populated', () => {
      const testStack = new Stack();
      testStack.push(1337);
      expect(testStack.isEmpty()).toEqual(false);
    });
  });
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
    it('can pop nodes off the stack', () => {
      const testStack = new Stack();
      testStack.push('xX_pwnN00bs_Xx');
      testStack.push(1337);
      expect(testStack.pop()).toEqual(1337);
    });
    it('can empty a list with pop()', () => {
      const testStack = new Stack();
      testStack.push(1337);
      expect(testStack.pop()).toEqual(1337);
      expect(testStack.pop()).toEqual('Empty List');
    });
  });
  describe('peek()', () => {
    it('can read the top node\'s value without removing the node', () => {
      const testStack = new Stack();
      testStack.push('xX_pwnN00bs_Xx');
      testStack.push(1337);
      expect(testStack.peek()).toEqual(1337);
    });
  });
});
describe('Queue', () => {
  describe('isEmpty()', () => {
    it('returns true if empty', () => {
      const testQueue = new Queue();
      expect(testQueue.isEmpty()).toEqual(true);
    });
  });
  describe('enqueue()', () => {
    it('can enqueue into a queue', () => {
      const testQueue = new Queue();
      testQueue.enqueue('h4x0r');
      testQueue.enqueue(2337);
      expect(testQueue.front.value).toEqual('h4x0r');
    });
    it('can enqueue multiple values into a queue', () => {
      const testQueue = new Queue();
      testQueue.enqueue('h4x0r');
      testQueue.enqueue(2337);
      expect(testQueue.front.value).toEqual('h4x0r');
      expect(testQueue.front.next.value).toEqual(2337);
    });
  });
  xdescribe('dequeue()', () => {
    it('will dequeue out a queue the expected value', () => {
      
    });
  });
  describe('peek()', () => {
    it('will see the expected value using peek', () => {
      const testQueue = new Queue();
      testQueue.enqueue('xX_pwnN00bs_Xx');
      testQueue.enqueue(1337);
      expect(testQueue.peek()).toEqual('xX_pwnN00bs_Xx');
    });
  });
});
