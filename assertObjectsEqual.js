//Comparison of two arrays
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line

  if (eqObjects(actual, expected)) {
    console.log(
      `✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🔴 🔴 🔴 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const eqObjects = function (object1, object2) {
  let keysObject1 = Object.keys(object1);
  let keysObject2 = Object.keys(object2);
  let result = false;

  if (keysObject1.length === keysObject2.length) {
    //Verify of the keys have same length become any comparison

    for (var key of keysObject1) {
      if (
        object1[key].isArray &&
        object2[key].isArray &&
        eqArrays(object1[key], object2[key])
      ) {
        //Case where the values are in an array
        result = true;
      } else {
        //Primitive values case
        if (object1[key] !== object2[key]) {
          break;
        } else {
          result = true;
        }
      }
    }
  }
  return result;
};

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

//Assertion test

const course1 = { java: "OOP", c: "Non-OOP" };
const course2 = { java: "Non-OOP", c: "OOP" };

const course3 = { java: "OOP", c: "Non-OOP" };
const course4 = { c: "Non-OOP", java: "OOP" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(course1, course2);
assertObjectsEqual(course3, course4);
assertObjectsEqual(cd, dc);
