//Implement assertObjectsEqual - Write a function that takes in 2 objects and returns true if they are equal and false otherwise.
//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key of obj1Keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//'assertObjectEqual' function takes in 2 objects 'actual' and 'expected' it uses 'eqObjects' to compare them for equality.
//if they are equal it prints a passing message to the console with the help of 'util.inspect' 
//if they are not equal it prints failing message
const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log('✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}');
  } else {
    console.log('🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}');
  }
}

//Test case
const obj1 = {a:1, b:2};
const obj2 = {b:2, a:1};
const obj3 = {a:1, b:2, c:3};
assertObjectEqual(obj1, obj3);
assertObjectEqual(obj1, obj2);