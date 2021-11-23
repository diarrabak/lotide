// TEST CODE SCENARIOS
const middle=require("../middle");
const assert = require('chai').assert;

//Comparing identical middle elements

describe("#middle", () => {
  it("returns true for [1,2,3] and [1,2,30] ", () => {
    assert.deepEqual(middle([1,2,3]), middle([12,2,30]));
  });

  it("returns true for [1,25,3,10] for [12,25,3,100]", () => {
    assert.deepEqual(middle([1,25,3,10]), middle([12,25,3,100])); 
  });

  it("returns false for [1,25,3] for [12,25,3,100]", () => {
    assert.notDeepEqual(middle([1,25,3]), middle([12,25,4,100])); 
  });
  
}); 
