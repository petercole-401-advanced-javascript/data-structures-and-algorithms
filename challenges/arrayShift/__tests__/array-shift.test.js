
const insertShiftArray = require('../array-shift.js');

let blankArr = [];
const oldArr = [0, 1, 2, 3];
const goodArr = [0, 1, 7, 2, 3];
const badArr = [0, 7, 1, 2, 3];
const val = 7;
const noArr = undefined;
const noVal = undefined;

describe('array module', () => {
  it('It should only take an Array and a Number', () => {
    blankArr = insertShiftArray(oldArr, val)
    expect(blankArr).not.toEqual(oldArr);
    expect(blankArr).toEqual(goodArr);
  });
  it('It should fail if the value isn\'t in the middle', () => {
    blankArr = insertShiftArray(badArr, val)
    expect(blankArr).not.toEqual(oldArr);
    expect(blankArr).not.toEqual(badArr);
  });
  it('It should fail on an undefined array and/or an undefined number', () => {
    blankArr = insertShiftArray(noArr, noVal)
    expect(blankArr).not.toEqual(oldArr);
    expect(noVal).not.toEqual(val);
  });
});
