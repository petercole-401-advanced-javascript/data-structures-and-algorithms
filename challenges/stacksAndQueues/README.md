# Stacks and Queues
<!-- Short summary or background information -->

## Challenge Summary
<!-- Short summary or background information -->
- Run Stack and Queue classes together with adequate testing

## Challenge Description
<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Approach
  - Node, Stack, Queue and Testing
- Big 0
  - O(1) & O(2n)

## API
<!-- Description of each method publicly available to your Stack and Queue-->
- Stack
  - push(): takes any value as an argument and adds a new node with that value to the top of the stack
  - pop(): does not take any argument, removes the node from the top of the stack, and returns the node’s value
  - peek(): does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack
  - isEmpty(): does not take an argument, and returns a boolean indicating whether or not the stack is empty

- Queue
  - enqueue(): takes any value as an argument and adds a new node with that value to the back of the queue
  - dequeue(): does not take any argument, removes the node from the front of the queue, and returns the node’s value
  - peek(): does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue
  - isEmpty(): does not take an argument, and returns a boolean indicating whether or not the queue is empty
