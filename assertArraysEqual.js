//This function compares two arrays
const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function (inputArray1, inputArray2) {
  if (eqArrays(inputArray1, inputArray2)) {
    console.log(`✅ ✅ ✅ Correct: ${inputArray1} === ${inputArray2}`);
  } else if (eqArrays(inputArray1, inputArray2)===undefined){
    console.log(`🟡 🟡 🟡 Correct but arrays should not be empty!`);
  }
  else {
    console.log(`🔴 🔴 🔴 Incorrect: ${inputArray1} !== ${inputArray2}`);
  }
};


module.exports=assertArraysEqual;