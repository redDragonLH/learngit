/**
 * 518. 零钱兑换 II
 *
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。
 */

/**
 * 动态规划:当前钱数下有多少种组合吗,但是coins 有多种,无法按照,从后一个数据推前一个吧
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let len = coins.length;
  // 当前钱数下多少种组合么,可以吧coins 分开计算然后加在一起, (但是这样无法交叉计算了)
  // 0 圆钱的时候所以元素都是零
  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0);
  }
  console.log(dp);
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < len; j++) {
        for (let k = 0; k < len; k++) {
            // 这样的话鬼知道从哪个i计算啊
        }
    }
  }
};
change(5, [1, 2, 5]);
