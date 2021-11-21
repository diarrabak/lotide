//This function copies the array content to the output until a condition is reached
const takeUntil = function (array, callback) {
  const result = [];
  for (let arrayElement of array) {

    if (callback(arrayElement)) {  //Stop copying if the stop condition is met
        break;
    }
      result.push(arrayElement);
   
  }
  return result;
};

module.exports=takeUntil;
