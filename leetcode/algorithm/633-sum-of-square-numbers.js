/**
 * 633. 平方数之和
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
 */

/**
 *
 * 肯定能除的尽,应该是偶数吧,毕竟两个平方相加
 * 如果存在符合条件的a，b，那么a和b一定在0和sqrt(c)之间。
 * 最朴素的思路，两层for循环，从0到sqrt(c)，看是否存在符合条件的a和b。相当于遍历了两次从0到sqrt(c)
 *
 * 可以用双指针解法,但是逻辑原理是什么,
 * 
 * 失败,还是双循环的路子,first 走到头才处理last ,这个逻辑不对
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let last = 0,
    first = 0;
  let Nsqrt = Math.sqrt(c);
  while (first <= Nsqrt && last <= Nsqrt) {
    console.log(Nsqrt, first, last);
    if (Math.pow(first, 2) + Math.pow(last, 2) === c) {
      return true;
    }
    if (Math.pow(first + 1, 2) + Math.pow(last, 2) <= c) {
      first++;
    } else {
      last++;
    }
  }
  return false;
};
