
// FUNCTION IMPLEMENTATION
const assertArraysEqual = require("./assertArraysEqual");
const map=require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);

//   console.log(results1);
//Test examples

//Passed test case
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

//Failed test case
assertArraysEqual(results1, ["g", "t", "t", "m", "t"]);