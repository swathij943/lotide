//assertEqual: function that asserts if two values are equals

/*
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

// Code as per the example

/* 
 const assertEqual = function(LighthouseLabs, Bootcamp) {
    if(actual === expected) {
      console.log('✅ Assertion passed: ${Lighthouse Labs} === ${Bootcamp}');
    } else {
      console.log('🛑 Assertion failed: ${Lighthouse Labs} !== ${Bootcamp}');
    }
    
    }
  
    module.exports = assertEqual;
  */

  //Actual code

    const assertEqual = function(actual, expected) {
      if(actual === expected) {
        console.log('✅ Assertion passed: ${actual} === ${expected}');
      } else {
        console.log('🛑 Assertion failed: ${actual} !== ${expected}');
      }
      
      }
    
      module.exports = assertEqual;