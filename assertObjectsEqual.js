//Comparison of two arrays
const eqObjects = require("./eqObjects");

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
