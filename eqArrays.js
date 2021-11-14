//This function compares two arrays 
const eqArrays = function (inputArray1, inputArray2) {

  let response = false;
  //If each has at least one element
  if (inputArray1.length > 0 && inputArray2.length > 0) {

    //Array having at least one element
    if (inputArray1.length === inputArray2.length) {
      //Compare arrays elements one by one and stop the loop if any mismatch
      for (let i = 0; i < inputArray1.length; i++) {

        if (inputArray1[i] !== inputArray2[i]) {
          response = false;
          break;
        } else {   //True if all elements are identical
          response = true;
        }
      }
    }
  }
  return response;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE SCENARIOS

//Comparing identical strings

assertEqual(
  eqArrays(["Bootcamp", "Lighthouse Labs"], ["Bootcamp", "Lighthouse Labs"]),
  true
);

//Array of different lenght
assertEqual(
  eqArrays(["Bootcamp", "Lighthouse Labs"], ["Bootcamp"]),
  true
);
  

assertEqual(
  eqArrays(["Bootcamp", "Lighthouse Labs"], ["Bootcamps", "Lighthouse Labs"]),
  false
);

//Empty arrays
assertEqual(
    eqArrays([], []),
    true
  );

//Comparing identical numbers

assertEqual(eqArrays([5, 6, 7], [5, 6, 7]), true);
//Comparing non-identical numbers

assertEqual(eqArrays([5, 6, 7], [6, 6, 7]), true);

//Number and strings
eqArrays(["1", "2", "3"], ["1", "2", 3])
