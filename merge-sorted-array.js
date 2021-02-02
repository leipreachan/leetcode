/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
    let qs = function (arr) {
        arr.sort((a, b) => {
            return a - b;
        });
        return arr;
    }

    for (let i = 0, j = m; i < n; i++, j++) {
        nums1[j] = nums2[i];
    }
    let foo = qs(nums1.slice());
    nums1.length = 0;
    for (let i = 0; i < foo.length; i++) {
        nums1.push(foo[i]);
    }
};

//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3, expected = [1,2,2,3,5,6];
//nums1 = [-100000, 0, 45000, 10, 0, 0], m = 4, nums2 = [100000, 50], n = 2, expected = [-100000, 0, 10, 50, 45000, 100000];

merge(nums1, m, nums2, n);
console.log("  result:\n", nums1, "\nexpected:\n", expected);
