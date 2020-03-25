'use strict';

const repeatedWord = (str) => {
  const wordCounter = new Map();
  let arr = [];
  if (str.includes(' ')) {
    arr = str.split(' ');
  } else {
    return 'not a multi-word string';
  }
  for (let word of arr) {
    if (!wordCounter.has(word)) {
      wordCounter.set(word, 0);
    } else {
      return word;
    }
  };
};

module.exports = { repeatedWord };
