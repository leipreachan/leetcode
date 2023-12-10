/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] == val && i < (nums.length - 1)) {
			for(j=i+1;j<nums.length; j++) {
                if (nums[j]!=val) {
                    nums[i] = nums[j];
				    nums[j] = val;
                    break;
            	}
            }
        } 
        if (nums[i] != val) {
            k++;
        }
    }
    console.log(`${k} [${nums}]`);
    return k;
};