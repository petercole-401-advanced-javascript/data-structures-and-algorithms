'use strict';

function selectionSort(intArr) {
  let n = intArr.length;
  for (let i = 0; i <= n-1; i++) {
    let min = i;
    for (let j = i + 1; j !== n; j++) {
      if (intArr[j] < intArr[min]) min = j;
    }
    let temp = intArr[min];
    intArr[min] = intArr[i];
    intArr[i] = temp;
  }
}

module.exports = { selectionSort };
