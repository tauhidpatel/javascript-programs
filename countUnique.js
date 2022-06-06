//  i  j
// [1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 7, 8]
// i=0;
// j=1;
// array[i] !== array[j];
// 1.   i++
// 2.   array[i] = array[j] - store the value of j into the ith array

function isUnique(array) {
    if(array.length > 0) {
        let i = 0;
        for(let j = 0; j<array.length; j++) {
            if(array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            } // if array[i] is not equal to array[j]
        } // for j loop
        return i + 1;
    } else {
        throw new Error("Array is empty");
    }
}

const result = isUnique([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 7, 8]);
console.log(result);