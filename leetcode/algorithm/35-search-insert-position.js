/**
 * 35. 搜索插入位置
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let len = nums.length;
  if (!len) return 0;
  let pos = parseInt(nums.length / 2);
  let left = 0;
  let right = len - 1;
  while (right >= left) {
    if (nums[pos] !== target) {
      if (nums[pos] > target) {
        right = pos - 1;
        pos = left + parseInt((right - left)/2);
      } else {
        left = pos + 1;
        pos = left + parseInt((right - left)/2);
      }
    } else {
      return pos;
    }
  }
  return pos;
};
console.log(searchInsert([1, 3, 5,6], 8));

/**
 * 二分法这么差么
 * 
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了13.03%的用户
 * 内存消耗：38.1 MB, 在所有 JavaScript 提交中击败了8.70%的用户
 */