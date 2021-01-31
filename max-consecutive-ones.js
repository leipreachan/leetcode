/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0, cur = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            cur++;
        }
        max = max > cur ? max : cur;
        if (nums[i] === 0) {
            cur = 0;
        }

    }
    return max;
};