const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns [] for ['mid', [1]]", () => {
    assert.deepEqual(middle(['mid', [1]]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});


// assertArraysEqual(middle([1, 2, 3]), [3]);
// assertArraysEqual(middle('mid', [1])); // => []
// assertArraysEqual(middle([1, 2])); // => []
// assertArraysEqual(middle([1, 2, 3])); // => [2]