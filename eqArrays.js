//Let's fix that by first implementing a function that can compare two arrays for a perfect match.
//Copy your assertEqual function into this new file.
//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

const eqArrays = function(arrays1, arrays2) {
  for(i = 0; i < arrays1.length; i++) {
    if(arrays1[i] === arrays2[i]) {
      return true;
    } else {
      return false;
    }
    
  }
}

// or

/*
const eqArrays = function(array1, array2) {
  for(i = 0; i < array1.length; i++) {
    if (array1[1] !== array2[i]) {
      return false;
    } else {
      return true;
    }
  }
}

*/

//Test
/* 
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false 
*/

/*
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
*/
