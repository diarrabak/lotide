//Gathering all the functions at the same place for easy exports
//Object value shorthand is used

const head = require("./head");
const middle = require("./middle");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const countOnly = require("./countOnly");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");

module.exports = {
  head,
  middle,
  eqArrays,
  eqObjects,
  countOnly,
  map,
  takeUntil,
  without,
  findKey,
  findKeyByValue,
  assertEqual,
  assertArraysEqual,
};
