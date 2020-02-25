'use strict';

const {PseudoQueue, Stack} = require('../queue-with-stacks.js');

describe('PseudoQueue', () => {
  describe('enqueue()', () => {
    it('adds to end of pseudoqueue', () => {
      const testPseudo = new PseudoQueue();
      testPseudo.stackA.storage = [0, 1, 2];
      testPseudo.enqueue(3);
      expect(testPseudo.stackB.storage[3]).toEqual(3);
    });
  });
  describe('dequeue()', () => {
    it('removes from end of queue and returns value', () => {
      const testPseudo = new PseudoQueue();
      testPseudo.stackA.storage = [0, 1, 2];
      testPseudo.dequeue();
      expect(testPseudo.stackB.storage).toEqual([0, 1]);
    });
  });
});
describe('Stack', () => {
  describe('push()', () => {
    it('adds a value to the top of stack', () => {
      const testStack = new Stack();
      testStack.push(1337);
      expect(testStack.storage[0]).toEqual(1337);
    });
    it('adds multiple values in correct order to stack', () => {
      const testStack = new Stack();
      testStack.push(1337);
      testStack.push(9001);
      expect(testStack.storage[0]).toEqual(9001);
      expect(testStack.storage[1]).toEqual(1337);
    });
  });
  describe('pop()', () => {
    it('returns the value of the removed item', () => {
      const testStack = new Stack();
      testStack.push(0);
      expect(testStack.pop()).toEqual(0);
    });
    it('returns undefined if empty', () => {
      const testStack = new Stack();
      expect(testStack.pop()).toBeUndefined();
    });
  });
  describe('peek()', () => {
    it('returns the value of the top of the stack', () => {
      const testStack = new Stack();
      testStack.push(0);
      testStack.push(1);
      expect(testStack.peek()).toEqual(1);
    });
    it('returns undefined if stack empty', () => {
      const testStack = new Stack();
      expect(testStack.peek()).toBeUndefined();
    });
  });
});
