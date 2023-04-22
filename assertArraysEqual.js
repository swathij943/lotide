const eqArrays = function(arrays1, arrays2) {
  for(i = 0; i < arrays1.length; i++) {
    if(arrays1[i] === arrays2[i]) {
      return true;
    } else {
      return false;
    }
    
  }
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(' ✅✅✅ Assertion Passed: ', actual, ' === ', expected);
} else {
  console.log(' 🛑🛑🛑 Assertion Failed: ', actual, ' !== ', expected);
}
};