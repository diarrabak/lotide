//This function returns the first element of the input array
const head = function (inputArray) {
  if (inputArray.length > 0) {
    //Array having at least one element
    return inputArray.slice(0, 1)[0]; //slice gives another array, so we must use the index to get the content
  } else {
    return undefined;
  }
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

assertEqual(head(["Bootcamp"]), "Bootcamp");

//Comparing string and number

assertEqual(head([1,85,10]), "Bootcamp");
//Comparing non-identical strings

assertEqual(head(["Bootcamp", "Lighthouse Labs"]), "Lighthouse Labs");

//Comparing identical numbers

assertEqual(head([5, 6, 7]), 5);
//Comparing non-identical numbers

assertEqual(head([5, 6, 7]), 6);
