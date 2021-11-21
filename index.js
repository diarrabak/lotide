const head   = require('./head');
const middle = require('./middle');
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const countOnly = require("./countOnly");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const assertEqual=require("./assertEqual");
const assertArraysEqual=require("./assertArraysEqual");

module.exports = {
  head:   head,
  middle: middle,
  eqArrays:eqArrays,
  eqObjects:eqObjects,
  countOnly:countOnly,
  map:map,
  takeUntil:takeUntil,
  without:without,
  findKey:findKey,
  findKeyByValue:findKeyByValue,
  assertEqual:assertEqual,
  assertArraysEqual:assertArraysEqual
};