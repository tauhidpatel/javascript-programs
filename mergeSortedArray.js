const arr1 = [1, 4, 7, 8, 9];

const arr2 = [2, 3, 6];

const arr3 = arr1.concat(arr2);

console.log(arr3.sort().flat(() => {},depth=1));