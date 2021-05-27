/**
 * 461. 汉明距离
 *
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 注意：
 *  0 ≤ x, y < 231.
 */

/**
 * 应该必须只有一个1 吧
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    // 先进行异或,把不同位置的1合并到一起
  let s = x ^ y,
    ret = 0;
    // 然后把这个数进行右移位,计算最低位是否为1,是则把count +1
  while (s != 0) {
    ret += s & 1;
    s >>= 1;
  }
  return ret;
};
