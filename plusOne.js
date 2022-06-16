//        i    
// [1, 2, 3]
//        i+1
// [1, 2, 4]

var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--) {
        if(digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};

const res = plusOne([9]);
console.log(res);