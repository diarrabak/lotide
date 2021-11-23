//This function will find the key from the value
const findKeyByValue=function(inputObject, value){

    let keys=Object.keys(inputObject);   //Arrays of keys
    let actualKey=undefined;  //Key of the current value
    for (var key of keys){

        if(inputObject[key]===value){  //When we found the key, we stop the loop and return the value
            actualKey=key;
            break;
        }
    }
    return actualKey;
}

module.exports=findKeyByValue;
