// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  //   for (var name in itemsToCount) {
  //Loop over the names to count

  for (const item of allItems) {
    //Compare to each element of the input array

    if (itemsToCount.hasOwnProperty(item) && itemsToCount[item]) {
      //Only existing keys with value=true are counted
      if (results[item]) {
        results[item] += 1; //Increment the occurence of the currence item
      } else {
        results[item] = 1;
      }
    }
  }
  //   }

  return results;
};

module.exports=countOnly;
