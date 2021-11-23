
  // FUNCTION IMPLEMENTATION
  const assertArraysEqual = require("../assertArraysEqual");
  const without = require("../without");
  
  // TEST CODE SCENARIOS
  
  console.log(without(["Hello", "Bootcamp", "3"], ["Hello", "3"]));
  
  console.log(without(["Bootcamp", "Lighthouse Labs"], ["Bootcamp"]));
  
  console.log(without(["1", "2", "3"], [1, 2, "3"]));
  
  const words = ["hello", "world", "lighthouse"];
  
  //Verifying that the source array is not altered by the function
  without(words, ["lighthouse"]); // no need to capture return value for this test case
  
  // Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);
  