//Implement countLetters in Lotide
//Write a function that takes in a sentence and returns a count of each of the letters in the sentence.

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

// Defining assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅ Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log('🛑 Assertion Failed: ${actual} !== ${expected}');
  }
};

//declares a function called "countLetters" which takes parameter'sentence'
const countLetters = function(sentence) {
//initalizes an empty string object called 'result'. This object will store count of each letter in the sentence
  const result = {};
//'for..of' loop iterates over each character in the 'sentence' string. The loop assigns each character to a constant variable 'letter'
  for (const letter of sentence) {
    if (result[letter]) {
//increment the count of the letter in the 'result' object by 1
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

//Test case
const result1 = countLetters('LHL');
assertEqual(result1.L, 2);
assertEqual(result1.H, 1);


