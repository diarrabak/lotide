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
        } else {
          //True if all elements are identical
          response = true;
        }
      }
    }
  } else {
    response = undefined;
  }
  return response;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (inputArray1, inputArray2) {
  if (eqArrays(inputArray1, inputArray2)) {
    console.log(`✅ ✅ ✅ Correct: ${inputArray1} === ${inputArray2}`);
  } else if (eqArrays(inputArray1, inputArray2)===undefined){
    console.log(`🟡 🟡 🟡 Correct but arrays should not be empty!`);
  }
  else {
    console.log(`🔴 🔴 🔴 Incorrect: ${inputArray1} !== ${inputArray1}`);
  }
};

// TEST CODE SCENARIOS

//Comparing identical strings

assertArraysEqual(
  ["Bootcamp", "Lighthouse Labs"],
  ["Bootcamp", "Lighthouse Labs"]
);

//Array of different length
assertArraysEqual(["Bootcamp", "Lighthouse Labs"], ["Bootcamp"]);

assertArraysEqual(
  ["Bootcamp", "Lighthouse Labs"],
  ["Bootcamps", "Lighthouse Labs"]
);

//Empty arrays
assertArraysEqual([], []);

//Comparing identical numbers

assertArraysEqual([5, 6, 7], [5, 6, 7]);
//Comparing non-identical numbers

assertArraysEqual([5, 6, 7], [6, 6, 7]);

//Number and strings
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
