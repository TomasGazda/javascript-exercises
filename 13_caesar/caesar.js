const caesar = function(string, move) {
    result = [];
    array = string.split('');
    
    for (let index = 0; index < array.length; index++) {
        
        if ((string.charCodeAt(index)>=65 && string.charCodeAt(index)<=90) || string.charCodeAt(index)>=97 && string.charCodeAt(index)<=122){
            let newCharCode = string.charCodeAt(index) + move%26;
            if ((newCharCode>90 && string.charCodeAt(index) <= 90) ||newCharCode>122){
                newCharCode -=26;
                
            }
            if (newCharCode<65 ||(newCharCode<97 &&string.charCodeAt(index) >= 97 ) ){
                newCharCode +=26;
            }
            
            result.push(String.fromCharCode(newCharCode));
            
            
        }else{
            result.push(array[index]);
        }
       
    }
    return result.join('');
};

// Do not edit below this line
module.exports = caesar;
