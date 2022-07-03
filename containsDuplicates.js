// ***** OPTIMAL SOLUTION *****
// var containsDuplicate = function (nums) {
// 	const set = new Set([...nums]);
// 	return set.size != nums.length;
// };

var containsDuplicate = function (nums) {
    
    nums.sort();
    for(var i=0; i<nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            return true;
        }
    }
    return false;
};

const res = containsDuplicate([1, 3, 2, 1]);
console.log(res);