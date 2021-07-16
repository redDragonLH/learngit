/**
 * 剑指 Offer 53 - I. 在排序数组中查找数字 I
 *
 * 统计一个数字在排序数组中出现的次数。
 */
/**
 * 使用排序啥的效率也比O(n)高吧
 * 还有其他小于O(n)的解法么
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let result = 0;
  nums.forEach((e) => {
    if (e === target) result++;
  });
  return result;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了98.97%的用户
 * 内存消耗：38.9 MB, 在所有 JavaScript 提交中击败了58.05%的用户
 */
