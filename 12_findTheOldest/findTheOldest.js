const findTheOldest = function(array) {
    let person;
    let age = 0;
    const YEAR = new Date().getFullYear();
    array.forEach(element => {
        if (typeof element.yearOfDeath != 'number'){
            element.yearOfDeath = YEAR;
        }
        if((element.yearOfDeath - element.yearOfBirth) > age){
            person = element;
            age = element.yearOfDeath - element.yearOfBirth;
        }
    });

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
