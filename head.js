
const head = function (arr) {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
};

module.exports = head;

/*
 // Test cases
 assertEqual(head([5,6,7]), 5);
 assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
 assertEqual(head([]), undefined);
 assertEqual(head([42]), 42);
*/