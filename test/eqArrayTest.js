// TEST CODE SCENARIOS
const eqArrays=require("../eqArrays");
const assertEqual=require ("../assertEqual");
//Comparing identical strings

assertEqual(
    eqArrays(["Bootcamp", "Lighthouse Labs"], ["Bootcamp", "Lighthouse Labs"]),
    true
  );
  
  //Array of different lenght
  assertEqual(
    eqArrays(["Bootcamp", "Lighthouse Labs"], ["Bootcamp"]),
    true
  );
    
  
  assertEqual(
    eqArrays(["Bootcamp", "Lighthouse Labs"], ["Bootcamps", "Lighthouse Labs"]),
    false
  );
  
  //Empty arrays
  assertEqual(
      eqArrays([], []),
      true
    );
  
  //Comparing identical numbers
  
  assertEqual(eqArrays([5, 6, 7], [5, 6, 7]), true);
  //Comparing non-identical numbers
  
  assertEqual(eqArrays([5, 6, 7], [6, 6, 7]), true);
  
  //Number and strings
  eqArrays(["1", "2", "3"], ["1", "2", 3])