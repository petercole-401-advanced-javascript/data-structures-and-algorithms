'use strict';

function reverseArray(arr) {
  let revArr = [];
  arr.map(num => revArr.unshift(num));
  return revArr;
}

console.log(reverseArray([0,1,2,3,4,5]));
