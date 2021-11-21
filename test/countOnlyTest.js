
// FUNCTION IMPLEMENTATION

const countOnly=require("../countOnly");
const assertEqual = require("../assertEqual");

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  
  const result = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });
  
  //Assertion test
  assertEqual(result["Jason"], 1); //True
  
  assertEqual(result["Jason"], undefined); //False
  
  assertEqual(result["Karima"], undefined); //True, no Karima in the list
  assertEqual(result["Fang"], 2); //True
  assertEqual(result["Agouhanna"], undefined); //True since its value is set to false
  