//Implement letterPositions
//Write a function that takes in a string and returns all indices of letter positions in the string.

const eqArrays = function(arr1, arr2) { //function compares 2 arrays for equality
  if (arr1.length !== arr2.length) {
    //If arrays have different lengths, they cannot be equal
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { //Loop through the elements of the arrays
    if (arr1[i] !== arr2[i]) { //If the corresponding elements differ, the arrays are not equal
      return false;
    }
  }
  return true; //If arrays are equal
};

// Defining assertArraysEqual
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//declare a function called 'letterPositions' that has parameter as "sentence"
const letterPositions = function (sentence) {
  const results = {};//empty object to hold the results
for (let i = 0; i < sentence.length; i++) { //Loop through character in the string
  const char = sentence[i];//current character
  if (char !== '') {//Ignore spaces
    if (results[char]) {//If seen char before add the index to its list
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
}
return results;
}

//Test case

const result = letterPositions("hello");
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['1'], [2, 3]);
assertArraysEqual(result['0'], [4]);
