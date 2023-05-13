const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('should return the key of a given value in an object', () => {
    const bestTVShowsBYGenre = {
      sci_fi: "Expanse",
      comedy: "Nine-Nine",
      drama: "Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsBYGenre, "Expanse"), "sci_fi");
    assert.strictEqual(findKeyByValue(bestTVShowsBYGenre, "Nine-Nine"), "comedy");
    assert.strictEqual(findKeyByValue(bestTVShowsBYGenre, "Wire"), "drama");
  });
  it('should return the key of a given value in an object', () => {
    const bestTVShowsBYGenre = {
      sci_fi: "Expanse",
      comedy: "Nine-Nine",
      drama: "Wire"
    };
    assert.isUndefined(findKeyByValue(bestTVShowsBYGenre, "Matrix"));
  });
})