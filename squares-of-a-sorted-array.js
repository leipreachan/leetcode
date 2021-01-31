/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        let abs = Math.abs(nums[i]);
        if (temp[abs] === undefined) {
            temp[abs] = 1;
        } else {
            temp[abs]++;
        }
    }
    let result = [];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== undefined) {
            for (let j = 0; j < temp[i]; j++) {
                result.push(i * i);
            }
        }
    }
    return result;
};
