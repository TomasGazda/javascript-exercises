const add = function(one,two) {

	return one + two;
};

const subtract = function(one, two) {
	return one- two;
};

const sum = function(array) {
  let sum=0;
	 array.forEach(element => {
     sum+=element;
   });
   return sum;
};

const multiply = function(array) {
  let result = 1;
  array.forEach(element => {
     result *= element;
  });
  return result;
};

const power = function(base,power) {
	return base**power;
};

const factorial = function(number) {
	let ans = 1;
  for (let index = 2; index <= number; index++) {
    ans*=index;
    
  }

  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
