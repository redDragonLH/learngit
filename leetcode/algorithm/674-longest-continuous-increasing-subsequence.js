/**
 * 674. 最长连续递增序列
 * 
 * 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
 * 
 * 连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，
 * 都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    const len = nums.length;
    if(len<2) return len

    let count = 1;
    let max = 0;
    for (let i = 1; i < len; i++) {
        if(nums[i] <= nums[i-1]){
            max = Math.max(count,max)
            count=1;
        }else {
            count++;
        }
    }
    max = Math.max(count,max)
    return max
};
/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了53.83%的用户
 * 内存消耗：38.5 MB, 在所有 JavaScript 提交中击败了70.52%的用户
 */