'use strict';

const { BinaryTree, Node } = require('../fizz-buzz-tree.js');

describe('Node Class', () => {
  it('properly instatiates a node with null values', () => {
    const testNode = new Node();
    expect(testNode.value).toBeNull();
    expect(testNode.left).toBeNull();
    expect(testNode.right).toBeNull();
  });
  it('sets values to a node', () => {
    const testNode = new Node('penguin', new Node('shark'), new Node('barracuda'))
    expect(testNode.value).toEqual('penguin');
    expect(testNode.left.left).toBeNull();
    expect(testNode.right.value).toEqual('barracuda');
  });
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
    it('divisible by 3 return Fizz', () => {
      const testTree = new BinaryTree();
      expect(testTree.modulusToSring(27)).toEqual('Fizz');
    });
    it('divisible by 5 return Buzz', () => {
      const testTree = new BinaryTree();
      expect(testTree.modulusToSring(25)).toEqual('Buzz');
    });
    it('divisible by 3 and 5 return FizzBuzz', () => {
      const testTree = new BinaryTree();
      expect(testTree.modulusToSring(30)).toEqual('FizzBuzz');
    });
    it('divisible by neither return the number as a string', () => {
      const testTree = new BinaryTree();
      expect(testTree.modulusToSring(31)).toEqual('31');
    });
  });
});
