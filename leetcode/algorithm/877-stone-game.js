/**
 * 877. 石子游戏
 *
 * 亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。
 * 游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。
 * 亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。
 * 假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回 true ，当李赢得比赛时返回 false 。
 */

/**
 * 先手还限定,先手必胜
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  return true;
};

/**
 * 官方题解: 动态规划
 */
var stoneGame = function (piles) {
  const length = piles.length;
  const dp = new Array(length).fill(0).map(() => new Array(length).fill(0));
  for (let i = 0; i < length; i++) {
    dp[i][i] = piles[i];
  }
  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
    }
  }
  return dp[0][length - 1] > 0;
};
