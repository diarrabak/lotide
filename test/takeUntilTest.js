
// FUNCTION IMPLEMENTATION
   
  const assertArraysEqual = require("../assertArraysEqual");
  
  
  //Test examples
  
  //Passed test case
  assertArraysEqual(results1, [1, 2, 5, 7, 2]);
  
  
  
  //Failed test case
  assertArraysEqual(results1, [1, 2, 5, 7, 3]);
  
  
  //Passed test case
  assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
  
  //Failed test case
  assertArraysEqual(results2, ["I've", "been", "too", "Hollywood"]);
  