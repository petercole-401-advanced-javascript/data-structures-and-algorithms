'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter', () => {
  it('instantiates an empty shelter', () => {
    const testShelter = new AnimalShelter();
    expect(testShelter.storage).toEqual([]);
  });
  describe('enqueue()', () => {
    it('adds animal', () => {
      const testShelter = new AnimalShelter();
      testShelter.enqueue('dog');
      console.log(testShelter);
      expect(testShelter[0].type).toEqual('dog');
    });
    xit('adds multiple animals in order', () => {
      
    });
  });
  xdescribe('dequeue()', () => {
    it('removes an animal', () => {
      
    });
    it('returns \'Empty Shelter\' if empty', () => {
      
    });
  });
});
