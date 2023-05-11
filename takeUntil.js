//Implement takeUtili
/* Write a function that takes in an array and callback and returns a slice of the array based on
 the criteria specified in the callback.*/

 const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) { // for..of loop to iterate over each item in the array.
    if (callback(item)) {
      break;
    }
    result.push(item); // if callback returns a falsy value for current item, we add it to the 'result' array using the 'push' mtd
  } 
  return result;
};
 //Testing
/*we define the eqArrays function to compare two arrays for equality, and the assertArraysEqual
 function to assert that two arrays are equal using the eqArrays function.*/

 const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


//Test case
/*two sample inputs (data1 and data2) and use the takeUntil function to generate two sets of results
 (results1 and results2). Finally, we use the assertArraysEqual function to compare each set of results 
 to its expected output. */

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

//console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);