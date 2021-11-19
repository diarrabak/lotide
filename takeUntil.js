//This function copies the array content to the output until a condition is reached
const takeUntil = function (array, callback) {
  const result = [];
  for (let arrayElement of array) {

    if (callback(arrayElement)) {  //Stop copying if the stop condition is met
        break;
    }
      result.push(arrayElement);
   
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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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


//Test examples

//Passed test case
assertArraysEqual(results1, [1, 2, 5, 7, 2]);



//Failed test case
assertArraysEqual(results1, [1, 2, 5, 7, 3]);


//Passed test case
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

//Failed test case
assertArraysEqual(results2, ["I've", "been", "too", "Hollywood"]);
