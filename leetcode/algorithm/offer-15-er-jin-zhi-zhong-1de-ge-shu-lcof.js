/**
 * 剑指 Offer 15. 二进制中1的个数
 *
 * 请实现一个函数，输入一个整数（以二进制串形式），输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result += (n >> i) & 1;
  }
  return result;
};
/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了43.83%的用户
 * 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了75.72%的用户
 */

/**
 * 位运算优化
 * n &(n-1): 这种情况下因为n-1,就把最后一个1所在的位以及以后的位翻转,这样的话按位与 最后一个1以及以后的所有数据都会丢弃,那么每次处理都会精准的处理一个有效位
 * & :按位与,当对比的两个数的同位置位都是1则此位返回1
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0;
  while (n) {
    n &= n - 1;
    result++;
  }
  return result;
};
