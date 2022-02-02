const repeatString = function(word,repeat) {
    
    if(repeat<0){
        return "ERROR";
    }
    if(!word){
        return "";
    }
    let result ="";
    for (let index = 0; index < repeat; index++) {
        result += word;
        
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
