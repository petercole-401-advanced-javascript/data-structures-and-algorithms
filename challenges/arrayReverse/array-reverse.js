'use strict';

function reverseArray(arr) {
  let revArr = [];
  arr.map(num => revArr.unshift(num));
  return revArr;
}

console.log(reverseArray(['a','b','c']), reverseArray(['0','1','2']), reverseArray(['-1','2','0']),);
