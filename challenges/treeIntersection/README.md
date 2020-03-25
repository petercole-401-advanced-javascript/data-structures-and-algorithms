# Code Challenge 32 - Tree Intersection
- Find common values in two binary trees

## Challenge Description
- Write a function called treeIntersection that takes two binary tree parameters
- Without utilizing any built-in library methods, return a set of values found in both trees

## Approach & Efficiency
- Given: we have tree traversal method preOrder()
- Storing values from trees in two new arrays
- Traverse each tree storing their values into respective arrays
- Iterate over one array with for in, checking for each value being contained in the other
  - If no match found, splice out that index
- Return what is left of the array, or state no match
- O(2) space, O(3n) time

## Solution
![tree-intersection-whiteboard](../blob/master/assets/tree-intersection.jpg "Tree Intersection Whiteboard")
