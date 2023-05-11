const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(middle([1, 2, 3]), [3]);
assertArraysEqual(middle('mid', [1])); // => []
assertArraysEqual(middle([1, 2])); // => []
assertArraysEqual(middle([1, 2, 3])); // => [2]