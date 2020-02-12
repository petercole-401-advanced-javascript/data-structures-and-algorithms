'use strict';

function insertShiftArray(arr, val) {
  const midArr = [];
  let length = 0;
  arr ? length = arr.length : console.log('Not an array');
  const mid = Math.round(length / 2);
  for (let i = 0; i < length; i++) {
    i < mid ? midArr[i] = arr[i] : midArr[i + 1] = arr[i];
  }
  midArr[mid] = val;
  return midArr;
}

module.exports = insertShiftArray;
