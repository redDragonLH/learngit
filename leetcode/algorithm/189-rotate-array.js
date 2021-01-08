/**
 * 189. 旋转数组
 * 
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 */

/**
 * 基于内部函数处理数据
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length;
    if(len< 2) return nums;
    const splitA = nums.splice(k,len-1);
    nums.unshift(...splitA);
    nums.length = len;
    return nums
};
/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了82.30%的用户
 * 内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了33.53%的用户
 */