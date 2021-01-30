/**
 * @param {number[]} nums
 * @return {number}
 */
const hasEvenNumberDigits = function(number) {
  let result = 0;
  if ((number > 9 &&
      number <= 99) || (number > 999 && number <= 9999) || number === 100000) {
    result = 1;
  }
  return result;
}
var findNumbers = function(nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += hasEvenNumberDigits(nums[i]);
  }
  return result;
};