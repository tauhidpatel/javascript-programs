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