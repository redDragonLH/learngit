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

/**
 *官方题解: 动态规划
 * @param {*} n
 * @returns
 */
var numSquares = function (n) {
  const f = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let minn = Number.MAX_VALUE;
    // 判断条件就是数字的平方不能大于i,组合到循环条件中
    for (let j = 1; j * j <= i; j++) {
      // 和 518 题的思路基本是一样的,从前边数据确认当前的数量,只保存当前的数量,当一次循环处理完毕在进行次数的处理
      //dp 里面保存的当前的方案,难道也是最少的数量,?没太理解
      minn = Math.min(minn, f[i - j * j]);
    }
    f[i] = minn + 1;
  }
  return f[n];
};

/**
 * 官方题解: 数学方法
 * 
 * 四平方和定理
 */
 var numSquares = function(n) {
    if (isPerfectSquare(n)) {
        return 1;
    }
    if (checkAnswer4(n)) {
        return 4;
    }
    for (let i = 1; i * i <= n; i++) {
        let j = n - i * i;
        if (isPerfectSquare(j)) {
            return 2;
        }
    }
    return 3;
}

// 判断是否为完全平方数
const isPerfectSquare = (x) => {
    const y = Math.floor(Math.sqrt(x));
    return y * y == x;
}

// 判断是否能表示为 4^k*(8m+7)
const checkAnswer4 = (x) => {
    while (x % 4 == 0) {
        x /= 4;
    }
    return x % 8 == 7;
}