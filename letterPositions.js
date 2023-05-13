//Implement letterPositions
//Write a function that takes in a string and returns all indices of letter positions in the string.

const letterPositions = function(sentence) {
  const result = {};
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== '') {
      if(result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
}

module.exports = letterPositions;

