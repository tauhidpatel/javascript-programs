var singleNumber = function(nums) {

    var ht = {};

    for(const num of nums) {
        ht[num] = ht[num]+1 || 1;
        // console.log(ht[num]);
    }

    for(const key in ht) {
        // console.log(key);
        if(ht[key] == 1) {
            return key;
        }
    }

};

const result = singleNumber([2, 3, 1, 2, 1, 1, 4, 4]);
console.log(result);