/**
 * 485. 最大连续1的个数
 * 
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const len = nums.length;
    if(!len) return 0;
    let max = 0;
    let temp = 0;
    for (let i = 0; i < len; i++) {
        if(nums[i]){
            temp++;
            max = Math.max(max,temp)
        }else {
            temp = 0;
        }
    }
    return max;
};

/**
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了57.71%的用户
 * 内存消耗：40.4 MB, 在所有 JavaScript 提交中击败了59.33%的用户
 */