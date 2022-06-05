// [-5 ,-4 , -3, -2, -1, 0, 1, 2, 3, 4]
// [number, index of the matched pair]

function isSumZero(array) {

    for(let number of array) {
        for(j=1; j<array.length; j++) {
            if(number+array[j] === 0) {
                return [number, array[j]];
            }
        }
    }
}

const result = isSumZero([-5 ,-4 , -3, -2, -1, 0, 1, 2, 3, 4]);
console.log(result);