//This function return the middle element(s) of the input array
const middle = function (inputArray) {
  let result = [];
  if (inputArray.length > 2) {
    if (inputArray.length % 2 === 0) {
      //If the array has an even number of element, the middle will be two elements
      let middleElemts = inputArray.slice(
        inputArray.length / 2 - 1,
        inputArray.length / 2 + 1
      );
      result.push(middleElemts[0], middleElemts[1]);
    } else {
      //Only one middle element for odd element number array
      let middleElement = inputArray.slice(
        Math.floor(inputArray.length / 2),
        Math.floor(inputArray.length / 2) + 1
      )[0];
      result.push(middleElement);
    }
  }
  return result;
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
    console.log(`🔴 🔴 🔴 Incorrect: ${inputArray1} !== ${inputArray2}`);
  }
};

// TEST CODE SCENARIOS


//Testing the middle function

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));

console.log(middle([1, 2]));

//Comparing identical middle elements

assertArraysEqual(
  middle([1,2,3]),
  middle([12,2,30])
);

//Array of different middle elements
assertArraysEqual(
    middle([1,25,3,10]),
    middle([12,25,4,100])
  );
  

//Differnt number of middle elements
assertArraysEqual(
    middle([1,25,3]),
    middle([12,25,4,100])
  );

