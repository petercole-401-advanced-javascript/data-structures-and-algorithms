# Binary Tree

## Challenge Summary
<!-- Short summary or background information -->
- Depth and Breadth Traversal of Binary Trees

## Challenge Description
<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node
- Create a BinaryTree class
  - Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab
- Write a __breadth first__ traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Node class
  - value, left and right
- BinaryTree class
  - preOrder(), inOrder(), postOrder()
- Working on CC19

## Solution
<!-- Embedded whiteboard image -->
![whiteboard](../../assets/tree.jpg "tree whiteboard")
![whiteboard](../../assets/breadth-first.jpg "tree whiteboard")

<!-- class BinarySearchTree {
  add(input) {
    // insert new node at the correct place in the tree
    node = new Node(input)
  }
  contains(input) {
    // traversal and compare value to input to node.value
  }
} -->
