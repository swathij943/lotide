const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it('returns an object with the correct letter indices for "hello', () => {
    const result = letterPositions('hello');
    assert.deepEqual(result['h'],[0]);
    assert.deepEqual(result['e'],[1]);
    assert.deepEqual(result['l'],[2, 3]);
    assert.deepEqual(result['o'],[4]);
  });
  it('returns an empty object for an empty string', () => {
    const result = letterPositions("");
    assert.deepEqual(result, {});
  });
});