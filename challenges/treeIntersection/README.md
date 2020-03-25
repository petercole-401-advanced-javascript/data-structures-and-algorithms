# Code Challenge 32 - Tree Intersection
- Find common values in 2 binary trees

## Challenge Description
- Write a function called treeIntersection that takes two binary tree parameters
- Without utilizing any built-in library methods, return a set of values found in both trees

## Approach & Efficiency
- Given: we tree traversal method
- Traverse tree setting values found to a map, the key is the value in the tree, the map value is a counter
- When a map key has a value of 2, return the key
- O(1) space, O(3n) time

## Solution
<!-- Embedded whiteboard image -->
