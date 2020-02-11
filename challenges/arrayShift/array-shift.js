'use strict';

function insertShiftArray(arr, val) {
  const midArr = [];
  const length = arr.length;
  const mid = Math.round(length / 2);
  for (let i = 0; i < length; i++) {
    i < mid ? midArr[i] = arr[i] : midArr[i + 1] = arr[i];
  }
  midArr[mid] = val;
  return midArr;
}

console.log(insertShiftArray(undefined, null));
