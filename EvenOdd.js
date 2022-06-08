// number is divisible by 2 === EVEN
// number is not divisible by 2 === ODD

var number = [2, 4, 6, 9, 12, 13, 17, 33];

var evenNumbers = [];
var oddNumbers = [];

for(let i=0; i<number.length; i++) {
    if(number[i] % 2 === 0) {
        evenNumbers.push(number[i]);
    }
    else {
        oddNumbers.push(number[i]);
    }
}

console.log("The even numbers are: " + evenNumbers);
console.log("The odd numbers are: " + oddNumbers);