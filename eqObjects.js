//Implement eqObjects
//Write a function that takes in 2 objects and return true if they are equal and false otherwise.

const eqObjects = function(object1, object2) {
//variable ie, 'obj1Keys' contains keys of 'object1' using Objects.keys() mtd & variable that "obj2Keys" contains keys of "object2" using Object.keys() mtd
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
if (obj1Keys.length !== obj2Keys.length) {
  return false;
}
//loop iterates over all over the key of 'object1'
for (const key of obj1Keys) {
  if (object1[key] !== object2[key]) {
    return false;
  }
}
return true;
}

module.exports = eqObjects;





// // Defining assertEqual
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log('✅ Assertion Passed: ${actual} === ${expected}');
//   } else {
//     console.log('🛑 Assertion Failed: ${actual} !== ${expected}');
//   }
// };

//Test csae
// Testing with primitive values
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), true);