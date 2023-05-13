//Implement findKeyByValue in Lotide -Write a function that takes in an object and a value and returns the first key that corresponds to that value.
//Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

const findKeyByValue = function (obj, val) {
  //'for...of' loop that iterates over each key in 'obj' object. 'Object.keys(obj)' returns an array of keys in obj
  for (const key of Object.keys(obj)) {
    //checks the key value
    if (obj[key] === val) {
      return key
    }
  }
  return undefined;
}
module.exports = findKeyByValue;




// // Defining assertEqual
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log('✅ Assertion Passed: ${actual} === ${expected}');
//   } else {
//     console.log('🛑 Assertion Failed: ${actual} !== ${expected}');
//   }
// };

// //Test case
// const bestTVShowsBYGenre = {
//   sci_fi: "Expanse",
//   comedy: "Nine-Nine",
//   drama: "Wire"
// };
// assertEqual(findKeyByValue(bestTVShowsBYGenre, "Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsBYGenre, "Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsBYGenre, "Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsBYGenre, "Matrix"), "sci_fi");


