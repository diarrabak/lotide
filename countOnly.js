// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (var name in itemsToCount) {
    //Loop over the names to count

    for (const item of allItems) {
      //Compare to each element of the input array

      if (itemsToCount.hasOwnProperty(name) && itemsToCount[name]) {
        //Only existing keys with value=true are counted
        if (item === name) {
          results[name] = ++results[name] || 1; //Increment the occurence of the currence item
        }
      }
    }
  }

  return results;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 🔴 🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
