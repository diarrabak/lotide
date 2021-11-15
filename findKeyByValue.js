//This function will find the key from the value
const findKeyByValue=function(inputObject, value){

    let keys=Object.keys(inputObject);   //Arrays of keys
    let actualKey=undefined;  //Key of the current valye
    for (var key of keys){

        if(inputObject[key]===value){  //When we found the key, we stop the loop and return the value
            actualKey=key;
            break;
        }
    }
    return actualKey;
}


// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🔴 🔴 🔴 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

//Assertion test

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  