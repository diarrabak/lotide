const eqObjects = function (object1, object2) {
  let keysObject1 = Object.keys(object1);
  let keysObject2 = Object.keys(object2);
  let result = false;

  if (keysObject1.length === keysObject2.length) {
    //Verify of the keys have same length become any comparison

    for (var key of keysObject1) {
      if (
        object1[key].isArray &&
        object2[key].isArray &&
        eqArrays(object1[key], object2[key])
      ) {
        //Case where the values are in an array
        result = true;
      } else {
        //Primitive values case
        if (object1[key] !== object2[key]) {
          break;
        } else {
          result = true;
        }
      }
    }
  }
  return result;
};

module.exports=eqObjects;


