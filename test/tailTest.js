const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [6,7] for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]), [6,7]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] for [42]", () => {
    assert.deepEqual(tail([42]), []);
  });
});

// assertEqual(tail([5, 6, 7]), [6, 7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// assertEqual(tail([]), []);
// assertEqual(tail([42]), []);