'use strict';

class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder(root, stack = []) {
    let current = root;
    if (current === null) return;
    stack.push(current.value);
    if (current.left !== null) this.preOrder(current.left, stack);
    if (current.right !== null) this.preOrder(current.right, stack);
    return stack;
  }
}

const treeIntersection = (tree1, tree2) => {
  const treeA = new BinaryTree(tree1);
  const treeB = new BinaryTree(tree2);
  let arrA = treeA.preOrder(tree1);
  let arrB = treeB.preOrder(tree2);
  for (let i in arrA) {
    if (!arrB.includes(arrA[i])) arrA.splice(i, 1);
  }
  if (arrA.length){
    return arrA;
  } else {
    return 'no match';
  };
};

module.exports = { treeIntersection, BinaryTree, Node };
