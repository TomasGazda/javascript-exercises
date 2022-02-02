const reverseString = function(word) {
    if(!word){
        return "";
    }
    let array = word.split('');
    let reversed = array.reverse();

    return reversed.join("");

};

// Do not edit below this line
module.exports = reverseString;
