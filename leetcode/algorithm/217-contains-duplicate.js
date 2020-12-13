/**
 * 217. 存在重复元素
 * 
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const len = nums.length;
    if(len<2) return false;

    const set = new Set();
    for (let i = 0; i < len; i++) {
        if(set.has(nums[i])) return true;
        else set.add(nums[i])        
    }
    return false;
};
/**
 * 暴力法
 * 
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了96.11%的用户
 * 内存消耗：42 MB, 在所有 JavaScript 提交中击败了72.38%的用户
 */
var containsDuplicate = function(nums) {
    const len = nums.length;
    if(len<2) return false;
    return new Set(nums).size !== len;
}
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了96.11%的用户
 * 内存消耗：43.6 MB, 在所有 JavaScript 提交中击败了46.08%的用户
 */