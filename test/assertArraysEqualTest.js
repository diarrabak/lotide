// TEST CODE SCENARIOS
const assertArraysEqual=require("../assertArraysEqual");
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
  