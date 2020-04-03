# Code Challenge 38
<!-- Short summary or background information -->
- Conduct a depth first preorder traversal on a graph

## Challenge Description
<!-- Description of the challenge -->
- Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal
- Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Approach was to start at the root, run out to each leaf as if it were a tree. When weights are equal, go with the first
- Big O
  - Space O(n)
  - Time O(n)

## Solution
<!-- Embedded whiteboard image -->
![depth-first-visual](../../assets/depth-first-visual.jpg "depth-first-visual")
- Output: A, B, C, G, D, E, H, F
