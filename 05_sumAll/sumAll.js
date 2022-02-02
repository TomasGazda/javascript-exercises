const sumAll = function(numberOne,numberTwo) {
    if(numberOne<0 || numberTwo<0 || typeof numberOne !='number'|| typeof numberTwo !='number'){
        return "ERROR";
    }
    let smaller =0;
    let bigger = 0;
    let sum = 0
    if (numberOne > numberTwo){
        smaller = numberTwo;
        bigger = numberOne;
    }else{
        smaller = numberOne;
        bigger = numberTwo;
    }
    for (let index = smaller; index <= bigger; index++){
        
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
