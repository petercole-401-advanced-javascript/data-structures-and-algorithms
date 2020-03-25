'use strict';

const { repeatedWord } = require('./repeated-word');

describe('repeatedWord', () => {
  it('returns the first repeated word', () => {
    expect(repeatedWord('tiny tim tossed his tiny tantrum')).toEqual('tiny')
  });
  it('catches a single word string', () => {
    expect(repeatedWord('string')).toEqual('not a multi-word string');
  });
});
