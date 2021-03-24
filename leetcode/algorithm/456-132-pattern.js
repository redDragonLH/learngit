/**
 * 456. 132模式
 *
 * 给定一个整数序列：a1, a2, ..., an，一个132模式的子序列 ai, aj, ak 被定义为：当 i < j < k 时，ai < ak < aj。设计一个算法，当给定有 n 个数字的序列时，验证这个序列中是否含有132模式的子序列。
 * 注意：n 的值小于15000。
 *
 */

/**
 * 132模式,可以进行三遍循环
 *
 * 最二的解法,超出时间限制
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let len = nums.length;
  for (let k = len; k >= 0; k--) {
    for (let j = k - 1; j >= 0; j--) {
      if (nums[j] > nums[k]) {
        for (let i = j - 1; i >= 0; i--) {
          if (nums[k] > nums[i] && nums[i] < nums[j]) {
            return true;
          }
        }
      }
    }
  }
  return false;
};
