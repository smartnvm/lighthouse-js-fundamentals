// function declaration


const isOdd = function (num) {
  //check for remainder is not 0
  return num % 2 !== 0;  
}

console.log(isOdd(10));
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
