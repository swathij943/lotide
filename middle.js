//
const middle = function (arr) {
  let midStart = Math.floor(arr.length / 2);
  let midEnd = midStart + 1;
  if (arr.length % 2 === 0) {
    midEnd = midStart + 2;
    midStart = midStart + 1;
  }
  const midNumber = arr.slice(midStart, midEnd);
  return midNumber;
};

module.exports = middle;

/*
  // test code
  assertArraysEqual(middle([1, 2, 3]), [2]);
  assertArraysEqual(middle('mid',[1])); // => []
  assertArraysEqual(middle([1, 2])); // => []
  assertArraysEqual(middle([1, 2, 3])); // => [2]
*/