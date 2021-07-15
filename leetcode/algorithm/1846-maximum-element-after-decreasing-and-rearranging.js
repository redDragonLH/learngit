/**
 * 1846. 减小和重新排列数组后的最大元素
 *
 * 给你一个正整数数组 arr 。请你对 arr 执行一些操作（也可以不进行任何操作），使得数组满足以下条件：
 *  * arr 中 第一个 元素必须为 1 。
 *  * 任意相邻两个元素的差的绝对值 小于等于 1 ，也就是说，对于任意的 1 <= i < arr.length （数组下标从 0 开始），都满足 abs(arr[i] - arr[i - 1]) <= 1 。abs(x) 为 x 的绝对值。
 *
 * 你可以执行以下 2 种操作任意次：
 *  * 减小 arr 中任意元素的值，使其变为一个 更小的正整数 。
 *  * 重新排列 arr 中的元素，你可以以任意顺序重新排列。
 *
 * 请你返回执行以上操作后，在满足前文所述的条件下，arr 中可能的 最大值 。
 */

/**
 *
 * 简单直接的逻辑,先排序,然后把第一个元素置为1,然后轮训判断,绝对值小于一就把i置为 arr[i-1]+1
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b);
  let len = arr.length;
  if (arr[0] !== 1) arr[0] = 1;
  for (let i = 1; i < len; i++) {
    if (Math.abs(arr[i - 1] - arr[i]) > 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }
  return arr[len - 1];
};

console.log(maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1]));

/**
 * 瞎写都能过~~~
 *
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：47.3 MB, 在所有 JavaScript 提交中击败了91.40%的用户
 */
