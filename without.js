//This function remove all the itemsToRemove array element from the source array
const without = function (source, itemsToRemove) {
  let newArray = source.slice(); //Just a copy otherwise the function will modify source itself
  for (const element of itemsToRemove) {
    //For each element to be removed, we check the source array to remove an occurrence
    for (let j = 0; j < source.length; j++) {
      if (source[j] === element) {
        newArray.splice(j, 1); //Remove the itemsToRemove from the output array
      }
    }
  }
  return newArray;
};

module.exports=without;
