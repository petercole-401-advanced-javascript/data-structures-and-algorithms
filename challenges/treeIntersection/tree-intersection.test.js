'use strict';

const { treeIntersection, BinaryTree, Node } = require('./tree-intersection');

describe('Instantiate', () => {
  it('instantiates an empty tree', () => {
    const testTree = new BinaryTree();
    expect(testTree.root).toBeNull();
  });
});
describe('treeIntersection()', () => {
  it('properly sees that two trees share values', () => {
    const testRootA = new Node(1, new Node(2, new Node(3, null, null), new Node(6, null, null)), new Node(7, null, new Node(8, null, null)));
    const testRootB = new Node(4, new Node(5, new Node(6, null, null), new Node(7, null, null)), new Node(8, null, new Node(9, null, null)));
    const testTreeA = new BinaryTree(testRootA);
    const testTreeB = new BinaryTree(testRootB);
    expect(treeIntersection(testTreeA, testTreeB)).toEqual([6, 7, 8]);
  });
  it('returns no match', () => {
    const testRootA = new Node(1, new Node(2, new Node(3, null, null), new Node(4, null, null)), new Node(5, null, new Node(6, null, null)));
    const testRootB = new Node(7, new Node(8, new Node(9, null, null), new Node(10, null, null)), new Node(11, null, new Node(12, null, null)));
    const testTreeA = new BinaryTree(testRootA);
    const testTreeB = new BinaryTree(testRootB);
    expect(treeIntersection(testTreeA, testTreeB)).toEqual(['no match']);
  });
});
