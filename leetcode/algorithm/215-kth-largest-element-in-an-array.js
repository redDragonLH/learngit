/**
 * 215. 数组中的第K个最大元素
 * 
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */
/**
 * 思路： 先排序后获取，排序按照从大到小，这样获取的时候不需要轮询，直接返回就行
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort((a,b) => b-a); // 从大到小排序
    return nums[k-1]; // 因为数组是从0开始计数
};
/**
 * 只比一半的人快，肯定还有其他解法
 * 内存消耗～～～，有不用排序的解法么
 * 
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了57.15%的用户
 * 内存消耗：36 MB, 在所有 JavaScript 提交中击败了20.00%的用户
 */