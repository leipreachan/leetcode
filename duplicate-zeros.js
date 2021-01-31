/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
    let foo = arr.slice();
    arr.length = 0;
    for (let i = 0, j = 0; j < foo.length; i++, j++) {
        arr.push(foo[i]);
        if (foo[i] === 0 && ++j < foo.length) {
            arr.push(0);
        }
    }
};