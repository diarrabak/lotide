// TEST CODE SCENARIOS
const middle=require("../middle");
const assertArraysEqual=require("../assertArraysEqual");

//Comparing identical middle elements

assertArraysEqual(
  middle([1,2,3]),
  middle([12,2,30])
);

//Array of different middle elements
assertArraysEqual(
    middle([1,25,3,10]),
    middle([12,25,4,100])
  );
  

//Differnt number of middle elements
assertArraysEqual(
    middle([1,25,3]),
    middle([12,25,4,100])
  );

