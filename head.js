//Importing the test function
const assertEqual = require('./assertEqual');


//This function returns the first element of the input array
const head = function (inputArray) {
  if (inputArray.length > 0) {
    //Array having at least one element
    return inputArray.slice(0, 1)[0]; //slice gives another array, so we must use the index to get the content
  } else {
    return undefined;
  }
};

module.exports=head;

