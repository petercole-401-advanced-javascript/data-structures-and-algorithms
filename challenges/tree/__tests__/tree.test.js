'use strict';

const { BinaryTree, Node } = require('../tree.js');

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
    it('do good when classy tree go in and do things we tell it yes do', () => {
      const testRoot = new Node(10, new Node(6, new Node(3, null, null), new Node(8, null, null)), new Node(15, null, new Node(20, null, null)));
      const testTree = new BinaryTree(testRoot);
      expect(testTree.preOrder(testRoot)).toEqual([10, 6, 3, 8, 15, 20]);
    });
  });
  describe('inOrder()', () => {
    it('when the ol tester tree try to test inOrder work yes yes yes', () => {
      const testRoot = new Node(10, new Node(6, new Node(3, null, null), new Node(8, null, null)), new Node(15, null, new Node(20, null, null)));
      const testTree = new BinaryTree(testRoot);
      expect(testTree.inOrder(testRoot)).toEqual([3, 6, 8, 10, 15, 20]);
    });
  });
  describe('postOrder()', () => {
    it('order post works the most when a tree spies a ghost', () => {
      const testRoot = new Node(10, new Node(6, new Node(3, null, null), new Node(8, null, null)), new Node(15, null, new Node(20, null, null)));
      const testTree = new BinaryTree(testRoot);
      expect(testTree.postOrder(testRoot)).toEqual([3, 8, 6, 20, 15, 10]);
    });
  });
});
