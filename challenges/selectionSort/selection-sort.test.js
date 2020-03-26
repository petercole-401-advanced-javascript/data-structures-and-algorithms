
const { selectionSort} = require('./selection-sort');

describe('sort module', () => {
  it('should return the right sorted array', () => {
    const testSort = selectionSort([0,2,1])
    expect(testSort).toEqual([0,1,2])
  });
});
