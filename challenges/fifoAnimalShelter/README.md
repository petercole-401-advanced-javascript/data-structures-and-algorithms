# First In, First Out Animal Shelter

## Challenge Summary
<!-- Short summary or background information -->
- A Queue based shelter with various array methods

## Challenge Description
<!-- Description of the challenge -->
- Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
- Implement the following methods:
  - enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
  - dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Wrote test framework
- Built classes for Cat and Dog
- Built class for Shelter
  - Enqueue uses push
  - Dequeue uses splice

## Solution
<!-- Embedded whiteboard image -->
![whiteboard](../../assets/fifo-animal-shelter.jpg "fifo-animal-shelter whiteboard")
