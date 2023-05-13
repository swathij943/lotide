const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should return a flattened array', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
    assert.deepEqual(flatten(['hello', ['world', '!']]), ['hello', 'world', '!']);
    assert.deepEqual(flatten([[], [1], [2, 3], [], [4]]), [1, 2, 3, 4]);
  });
  it('should return an empty array if given an empty array', () => {
    assert.deepEqual(flatten([]), []);
  });
});