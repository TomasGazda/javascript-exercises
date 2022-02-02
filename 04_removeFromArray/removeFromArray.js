const removeFromArray = function() {
    let array = arguments[0];
    for (let index = 1; index < arguments.length ; index++){
        if(array.indexOf(arguments[index])>=0){
            array.splice(array.indexOf(arguments[index]),1);
        }
      
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
