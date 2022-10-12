var moveZeroes = function(nums) {
  
    let index = 0;

    for(let i = 0; i<nums.length; i++) {
        const num = nums[i];

        if(num !== 0) {
            nums[index] = num;
            index++;
            // console.log(nums);
        }
    }

    for(let i = index; i<nums.length; i++) {
        nums[i] = 0;
        // console.log(nums);
    }
};

moveZeroes([0,1,0,3,12])
