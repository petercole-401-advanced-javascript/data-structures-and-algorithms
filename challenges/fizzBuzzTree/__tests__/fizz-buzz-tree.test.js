'use strict';

const { BinaryTree, Node } = require('../fizz-buzz-tree.js');

describe('Node Class', () => {

});
describe('BinaryTree Class', () => {
  describe('Instantiate', () => {
    it('instantiates an empty tree', () => {
      const testTree = new BinaryTree();
      expect(testTree.root).toBeNull();
    });
  });
  describe('preOrder()', () => {
    it('test values that return in preOrder', () => {
      const testRoot = new Node(10, new Node(6, new Node(3, null, null), new Node(8, null, null)), new Node(15, null, new Node(20, null, null)));
      const testTree = new BinaryTree(testRoot);
      expect(testTree.preOrder(testRoot)).toEqual(['Buzz', 'Fizz', 'Fizz', '8', 'FizzBuzz', 'Buzz']);
    });
  });
  describe('modulusToSring()', () => {
    it('Divisible by 3 return Fizz', () => {
      const testTree = new BinaryTree();
      expect(testTree.modulusToSring(9)).toEqual('Fizz');
    });
  });
});
