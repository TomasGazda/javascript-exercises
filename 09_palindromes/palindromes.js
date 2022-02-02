const palindromes = function (string) {
    let justLetters =  string.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    let forward = justLetters.split("");
    let backward = justLetters.split("").reverse();
    
    return JSON.stringify(forward) === JSON.stringify(backward);
};

// Do not edit below this line
module.exports = palindromes;
