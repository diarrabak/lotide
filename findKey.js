
var findKey=function(object, callback){
    let objectsKeys=Object.keys(object);
    let result=undefined;
    for(let key of objectsKeys){
        if(callback(object[key])){
            result=key;
            break;
        }
    }
    return result;
}

module.exports=findKey;
