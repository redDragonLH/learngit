/**
 * 137. 只出现一次的数字 II
 *
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 */

/**
 * 三次~~异或还是啥,还有单变量判断重复没法用
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let count = {};
  nums.forEach((e) => {
    if (count[e]) count[e]++;
    else count[e] = 1;
  });
  for (const key in count) {
    if (Object.hasOwnProperty.call(count, key) && count[key] === 1) {
      return key;
    }
  }
};

/**
 * 中等题都有其笨办法
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了48.32%的用户
 * 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了5.15%的用户
 */

/**
 * 数字电路方案
 * https://leetcode-cn.com/problems/single-number-ii/solution/zhi-chu-xian-yi-ci-de-shu-zi-ii-by-leetc-23t6/
 */