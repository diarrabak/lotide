// TEST CODE SCENARIOS
const eqArrays=require("../eqArrays");
const assert = require("chai").assert;


describe("#eqArrays", () => {
  it("returns true for identical arrays", () => {
    assert.strictEqual(eqArrays(["Bootcamp", "Lighthouse Labs"], ["Bootcamp", "Lighthouse Labs"]),
    true);
  });

  it("returns true for [5, 6, 7] and [5, 6, 7]", () => {
    assert.strictEqual(eqArrays([5, 6, 7], [5, 6, 7]), true);
  });

  it("returns false for non-identical arrays", () => {
    assert.strictEqual( eqArrays(["Bootcamp", "Lighthouse Labs"], ["Bootcamp"]),
    false); 
  });

  it("returns false for non-identical arrays", () => {
    assert.notStrictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),
    true); 
  });
  
});

