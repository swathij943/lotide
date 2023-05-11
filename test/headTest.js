const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('should return the first element of an array', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it('should return the first element of an array of strings', () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  it('shoild return undefined if the array is empty', () => {
    assert.isUndefined(head([]));
  });
  it('should return the only element of an array with a single element', () => {
    assert.strictEqual(head([42]), 42);
  });
});


// const head = require('../head');
// const assertEqual = require('../assertEqual');

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
// assertEqual(head([42]), 42);