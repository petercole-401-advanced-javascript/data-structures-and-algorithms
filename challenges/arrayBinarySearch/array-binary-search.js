'use strict';

function binarySearch(arr, val) {
  let direction = 0;
  let idx = Math.round(arr.length / 2) - 1;
  if (arr[idx] < val){
      direction = 1;
    } else if (arr[idx] > val){
      direction = -1;
    } else if (arr[idx] === val){
      return idx;
    }
  while(arr[idx] !== val && idx > 0 && idx < arr.length) {
    idx += direction;
    if(arr[idx] === val){
      return idx;
    }
  } 
  return -1;
}

module.exports = binarySearch;
