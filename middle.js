//This function return the middle element(s) of the input array
const middle = function (inputArray) {
  let result = [];
  if (inputArray.length > 2) {
    if (inputArray.length % 2 === 0) {
      //If the array has an even number of element, the middle will be two elements
      let middleElemts = inputArray.slice(
        inputArray.length / 2 - 1,
        inputArray.length / 2 + 1
      );
      result.push(middleElemts[0], middleElemts[1]);
    } else {
      //Only one middle element for odd element number array
      let middleElement = inputArray.slice(
        Math.floor(inputArray.length / 2),
        Math.floor(inputArray.length / 2) + 1
      )[0];
      result.push(middleElement);
    }
  }
  return result;
};

module.exports = middle;
