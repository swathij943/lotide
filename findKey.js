//Implement findKey
/* Write a function that takes in an object and callback and returns the first key that
 meets the criteria specified in callback.*/

 const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
 /*This function takes in an object and a callback function, and returns the 
 first key for which the callback returns a truthy value. If no key is found, it returns undefined. */
 
const findKey = function(object, callback) {
  for (let key in object) {
    if(callback(object[key])) {
      return key;
    }
  }
  return undefined;
 }

//Test case
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {hello: "world", foo: "bar", baz: "qux"};
const obj3 = {name: "Alice", age: 30, city: "Toronto"};
const obj4 = {key1: {a: 1, b: 2}, key2: {a: 3, b: 4}, key3: {a: 5, b: 6}};

assertEqual(findKey(obj1, x => x === 2), "b");
assertEqual(findKey(obj2, x => x === "qux"), "baz");
assertEqual(findKey(obj3, x => x === 40), undefined);
assertEqual(findKey(obj4, x => x.a === 3), "key2");