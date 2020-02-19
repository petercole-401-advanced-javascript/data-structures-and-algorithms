# Linked List Merge
__Version 1.0.0__

## Challenge Summary
<!-- Short summary or background information -->
- Merge Singly Linked Lists

## Challenge Description
<!-- Description of the challenge -->
- Write a function called `mergeLists()` which takes two linked lists as arguments
- Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list
- Try and keep additional space down to O(1)
- You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Approach
  - Set return array
  - Traverse each list storing as
    - first one to even indexes
    - second one to odd indexes
  - Run filter on array to remove undefined indexes if the lists don't match length
  - Create new list inserting values from the array using a for loop
  - Return the array
- Big O
  - O(2) O(2n)
- I'd like to rebuild this shuffling the next properties around after setting the head, storing the next object each time prior to reassigning to get it O(1)

## API
<!-- Description of each method publicly available to your Linked List -->
- `mergeLists(listA, listB)` will merge two lists
