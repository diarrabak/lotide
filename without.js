//This function remove all the itemsToRemove array element from the source array
const without = function (source, itemsToRemove) {
  let newArray = source.slice(); //Just a copy otherwise the function will modify source itself
  for (const element of itemsToRemove) {
    //For each element to be removed, we check the source array to remove an occurrence
    for (let j = 0; j < source.length; j++) {
      if (source[j] === element) {
        newArray.splice(j, 1); //Remove the itemsToRemove rom the output array
      }
    }
  }
  return newArray;
};

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
  } else if (eqArrays(inputArray1, inputArray2) === undefined) {
    console.log(`🟡 🟡 🟡 Correct but arrays should not be empty!`);
  } else {
    console.log(`🔴 🔴 🔴 Incorrect: ${inputArray1} !== ${inputArray1}`);
  }
};

// TEST CODE SCENARIOS

console.log(without(["Hello", "Bootcamp", "3"], ["Hello", "3"]));

console.log(without(["Bootcamp", "Lighthouse Labs"], ["Bootcamp"]));

console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];

//Verifying that the source array is not altered by the function
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
