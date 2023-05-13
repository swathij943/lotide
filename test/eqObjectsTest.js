const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true when comparing two objects with the same key-value pairs', () => {
    const obj1 = {a: 1, b: 2, c: 3};
    const obj2 = {b: 2, a: 1, c: 3};
    assert.isTrue(eqObjects(obj1, obj2));
  });
  it('should return false when comparing two objects with different key-value pairs', () => {
    const obj1 = {a: 1, b: 2, c: 3};
    const obj2 = {b: 2, a: 1, d: 4};
    assert.isFalse(eqObjects(obj1, obj2));
  });
  it('should return false when comparing an object with an array and an array with the same elements', () => {
    const obj1 = {a: [1, 2], b: 2};
    const obj2 = {a: [1, 2], b: 2};
    assert.isFalse(eqObjects(obj1, obj2));
  });
});