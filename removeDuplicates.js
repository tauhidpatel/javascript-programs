function removeDuplicates(nums) {
    if(nums == 0) {
        return 0
    }
    let i = 0;
    let j = 1;
    while(j < nums.length) {
        if(nums[j] !== nums[i]) {
            i++;
            nums[i] == nums[j];
            j++;
        }
        else j++;
    }
    return i+1;
};

const res = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log(res);