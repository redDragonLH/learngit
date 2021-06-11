/**
 * 279. 完全平方数
 *
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
 *
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 */

/**
 * 获取完全平方数最少数量,回溯应该可以解决,但是要回溯的量有点大
 * 感觉和昨天的题差不多的样子,只不过从icons 换成了 平方数,可以计算一下平方数吗
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // 当前数下面最少的完全平方数量
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  let sqrtArr = [];
  for (let j = 1; j <= n; j++) {
    let sqrt = Math.sqrt(j);
    if (String(sqrt).indexOf(".") === -1) {
      sqrtArr.push(j);
    }
  }
  for (let j = 0; j < sqrtArr.length; j++) {
    for (let i = sqrtArr[j]; i < n; i++) {
      // 状态转移方程怎么做,这种会得到最多的方案? 方案,但是每种方案用的最少的完全平方数是多少,我还得判断方案内的数量,那就得保存每个方案的状态
      dp[i] += dp[i - sqrtArr[j]];
    }
  }
};
numSquares(12);
