
// FUNCTION IMPLEMENTATION
const assertEqual =require("../assertEqual");
const findKey=require("../findKey");

  const object={
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  const result1=findKey(object,elem=>elem.stars===2);
  const result2=findKey(object,elem=>elem.stars===5);
  const result3=findKey(object,elem=>elem.stars===3);
  // TEST CODE SCENARIOS
  
  //Comparing identical strings
  
  assertEqual(result1,"noma");


  //Comparing non-identical strings
  assertEqual(result1,"Ora");


  //Comparing identical strings 
  assertEqual(result2,undefined);



  //Comparing non-identical strings
  assertEqual(result2,"Akaleri");

  //Comparing identical strings
  assertEqual(result3,"Akaleri");


  //Comparing non-identical strings
  assertEqual(result3,"Ora");
 