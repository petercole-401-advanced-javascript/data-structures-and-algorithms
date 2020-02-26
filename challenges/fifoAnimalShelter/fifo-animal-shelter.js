'use strict';

class Cat{
  constructor(){
    this.type = "cat";
    this.name = name;
    this.color = color;
    this.age = age;
  }
}

class Dog{
  constructor(){
    this.type = "dog";
    this.name = name;
    this.color = color;
    this.age = age;
  }
}

class AnimalShelter{
  constructor(){
    this.storage = [];
  }
  // enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
  // "Enqueue" add to back, push()
  enqueue(animal){
    switch(animal){
      case 'cat':
        this.storage.push(new Cat());
        break;
      case 'dog':
        this.storage.push(new Dog());
        break;
      default:
        return 'Needs to be cat or dog';
    }
  }
  // dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.
  // "Dequeue" remove from front, shift()
  dequeue(pref){
    switch(pref){
      case 'cat':
        const foundAtIndex = storage.findIndex(element => element === 'cat');
        const foundAnimal = storage[foundAtIndex];
        storage.splice(foundAtIndex, 1);
        return foundAnimal;
      case 'dog':
        const foundAtIndex = storage.findIndex(element => element === 'dog');
        const foundAnimal = storage[foundAtIndex];
        storage.splice(foundAtIndex, 1);
        return foundAnimal;
      default:
        return null;
    }
  }
}

module.exports = AnimalShelter;
