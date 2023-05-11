const tail = function(arr) {
  if (arr.length > 1) {
    return arr.slice(1);
  } else {
    return [];
  }
};
module.exports = tail;

/*
  // Test cases
  assertEqual(tail([5,6,7]), [6,7]);
  assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  assertEqual(tail([]), []);
  assertEqual(tail([42]), []);
*/