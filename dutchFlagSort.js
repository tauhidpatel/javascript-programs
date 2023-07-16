// dutch flag problem also known as sort colors problem
// integers 0, 1, and 2 to represent the color red, white, and blue.
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Input: nums = [2,0,1]
// Output: [0,1,2]

function dutchFlag(arr) {

    let low = 0;
    let high = arr.length-1;
    let mid = 0;

    while(mid <= high) {
        if(arr[mid] === 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]]; // swap

            mid+=1;
            low+=1;
        } else if (arr[mid] === 1) {
            mid+=1;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];

            high -= 1;
        }
    }
}

let arr = [1, 0, 2, 1, 0];
dutchFlag(arr);
console.log(arr);
