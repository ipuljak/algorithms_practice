/** 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {    
    const map = {};
    
    for (let x = 0; x < nums.length; x++) {
        let match = map[(target - nums[x])];
        
        if (match >= 0) {
            return [match, x];
        }

        map[nums[x]] = x;
    }
};