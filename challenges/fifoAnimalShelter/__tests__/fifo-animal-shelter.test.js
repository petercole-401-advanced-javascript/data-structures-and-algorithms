'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter', () => {
  it('instantiates an empty shelter', () => {
    const testShelter = new AnimalShelter();
    expect(testShelter.storage).toBeAnArray();
  });
  describe('enqueue()', () => {
    it('adds animal', () => {
      
    });
    it('adds multiple animals in order', () => {
      
    });
  });
  describe('dequeue()', () => {
    it('removes an animal', () => {
      
    });
    it('returns \'Empty Shelter\' if empty', () => {
      
    });
  });
});

