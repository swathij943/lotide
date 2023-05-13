//Implement countOnly in Lotide
// Write a function that takes in a collection of items and returns a specific subset of those items.

// 'countOnly' function takes an array of strings 'allItems' and an object 'itemsToCount' as input.
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  // Iterates over each item in the 'allitems' array using a "for..of" loop 
  // for each item, it checks if the 'itemsToCount' object has a true value for that item using the if statement

  for (const item of allItems) {
    // inside the loop, 
    // set a property with the string key to:
    // the value that was already there(or zero if nothing there) with 1 addes to it.
    if (itemsToCount[item]) {
      // if the 'itemsToCount' object has a true value
      // function checks if 'results' object has a property with current item key vale.
      // if there is a key value, the function increments the value of property by 1.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    console.log(item);
  }

  return results;
};

module.exports = countOnly;


// Defining assertEqual

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log('✅ Assertion Passed: ${actual} === ${expected}');
//   } else {
//     console.log('🛑 Assertion Failed: ${actual} !== ${expected}');
//   }
// };

//Test case

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
