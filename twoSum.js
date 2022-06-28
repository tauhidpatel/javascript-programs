// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// we can improve this using HashMap

var twoSum = function(nums, target) {
    for(var i=0; i<nums.length; i++) {
        for(var j=i+1; j<nums.length; j++) {
            if(nums[i]+nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const result = twoSum([3,2,4], 6);
console.log(result);