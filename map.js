// Implement map
/* Write a function that takes in an array and a callback and returns a new array based on the results 
of the callback on each item in the array.*/

//Testing the code

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log('✅ Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log('🛑 Assertion Failed: ${actual} !== ${expected}');
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Test cases
//case 1: Return array of word lengths
const results1 = map(words, word => word.length);
assertArraysEqual(results1, [6, 7, 2, 5, 3]);

//case 2: Return array of capitalized words
const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

//case 3: Return array of words with appended exclamation marks
const results3 = map(words, word => word + "!");
assertArraysEqual(results3, ["ground!", "control!", "to!", "major!", "tom!"]);


