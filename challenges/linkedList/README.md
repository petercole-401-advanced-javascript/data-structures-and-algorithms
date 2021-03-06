# Singly Linked List
__Version 1.3.0__

## Challenge Summary
<!-- Short summary or background information -->
- Create Singly Linked Lists

## Challenge Description
<!-- Description of the challenge -->
- Create a `Node` class that has properties for the value stored in the `Node`, and a pointer to the next `Node`.
- Within your `LinkedList` class, include a head property. Upon instantiation, an empty `Linked List` should be created.
  - Define a method called `insert` which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  - Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  - Define a method called `toString` (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    - `{ a } -> { b } -> { c } -> NULL`
  - `.append(value)` which adds a new node with the given value to the end of the list
  - `.insertBefore(value, newVal)` which add a new node with the given newValue immediately before the first value node
  - `.insertAfter(value, newVal)` which add a new node with the given newValue immediately after the first value node
  - `returnFromEnd()` Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges
  - Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
  - Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Approach
  - Node Class
  - LinkedList Class
  - insert(node)
  - includes()
  - toString()
  - append()
  - insertBefore()
  - insertAfter()
  - returnFromEnd()
- Big 0
  - 0(1) 0(n^2)

## API
<!-- Description of each method publicly available to your Linked List -->
- Insert() will insert a value at the head node of the linked list
