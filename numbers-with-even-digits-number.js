/**
 * @param {number[]} nums
 * @return {number}
 */
const hasEvenNumberDigits = function (nums) {
    let result = 0;
    if ((nums > 9 &&
        nums <= 99) || (nums > 999 && nums <= 9999) || nums === 100000) {
        result = 1;
    }
    return result;
}
var findNumbers = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += hasEvenNumberDigits(nums[i]);
    }
    return result;
};