//This function compares two arrays 
const eqArrays = function (inputArray1, inputArray2) {

  let response = false;
  //If each has at least one element
  if (inputArray1.length > 0 && inputArray2.length > 0) {

    //Array having at least one element
    if (inputArray1.length === inputArray2.length) {
      //Compare arrays elements one by one and stop the loop if any mismatch
      for (let i = 0; i < inputArray1.length; i++) {

        if (inputArray1[i] !== inputArray2[i]) {
          response = false;
          break;
        } else {   //True if all elements are identical
          response = true;
        }
      }
    }
  } else {
      response=undefined;
  }
  return response;
};

module.exports=eqArrays;

