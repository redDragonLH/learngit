/**
 * 27. 移除元素
 *
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 说明:
 *  为什么返回数值是整数，但输出的答案是数组呢?
 *  请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 *  你可以想象内部操作如下:
 */

/**
 * 待优化
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length;
  let slow = 0,
    fast = 0;
  for (; fast < len; ) {
    if (nums[fast] == val) {
      fast++;
      continue;
    }
    nums[slow] = nums[fast];
    slow++;
    fast++;
  }
  return slow;
};
/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了48.09%的用户
 * 内存消耗：37.5 MB, 在所有 JavaScript 提交中击败了97.88%的用户
 */
