const fibonacci = function(number) {


    if(number<0){
        return "OOPS";
    }
    if ( typeof number == 'string'){
        number = parseInt(number);
    }
    if (!isNaN(number)){

    if (number ==1 || number ==2){
        return 1;
    }    
    let first = 1;
    let second = 1;
    let result = 0;

    for (let index = 3; index <= number; index++) {
         result = first + second;
         first = second;
         second = result;
        
    }

    return result;
    }
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
