/**
 * 1734. 解码异或后的排列
 *
 * 给你一个整数数组 perm ，它是前 n 个正整数的排列，且 n 是个 奇数 。
 * 它被加密成另一个长度为 n - 1 的整数数组 encoded ，满足 encoded[i] = perm[i] XOR perm[i + 1] 。比方说，如果 perm = [1,3,2] ，那么 encoded = [2,1] 。
 * 给你 encoded 数组，请你返回原始数组 perm 。题目保证答案存在且唯一。
 */

/**
 * 信息整理
 *
 * XOR: 异或,两个数据相等时为false,不等时为true,在计算机中表示为按位对比,如果两个数相对应位的值一样则这两个位异或的结果为0,不一样则结果为1,每个位计算把所有位串起来,就是结果
 *
 * 前n个正整数的排列,也就是说这个数组里面包含n个正整数,那么说明这个数组元素是没有重复元素的,虽然可能是乱序
 */

/**
 * 没有头绪啊,只有密文,没有密钥和原文,怎么能推断出来,奇数长度有用?应该只是说一声肯定会剩一个吧
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {};

/**
 * 核心问题就是找到perm的第一个元素
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
  const n = encoded.length + 1;
  let total = 0;
  // 从1到n的所有正整数进行异或
  for (let i = 1; i <= n; i++) {
    total ^= i;
  }
  // encoded的奇数位进行异或
  // 得到 perm数组除了 perm[0]之外的全部元素的异或运算结果
  // 迷茫~~~
  let odd = 0;
  for (let i = 1; i < n - 1; i += 2) {
    odd ^= encoded[i];
  }
  const perm = new Array(n).fill(0);
  perm[0] = total ^ odd;
  for (let i = 0; i < n - 1; i++) {
    perm[i + 1] = perm[i] ^ encoded[i];
  }
  return perm;
};
