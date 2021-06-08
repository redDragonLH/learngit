/**
 * 1049. 最后一块石头的重量 II
 *
 * 有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。
 * 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 如果 x == y，那么两块石头都会被完全粉碎；
 * 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。
 */

/**
 *
 * 以什么顺序粉碎石头得到的最后元素最小,
 *
 * 长得像动态规划,听起来像动态规划,可能就是动态规划
 *
 * 回溯应该也可以,但是应该复杂度爆表...真爆了
 * 
 * 动态规划思路
 * 转变成01背包问题??
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeightII = function(stones) {
    let sum = 0;
    for (const weight of stones) {
        sum += weight;
    }
    const n = stones.length, m = Math.floor(sum / 2);
    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false));
    dp[0][0] = true;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j <= m; ++j) {
            if (j < stones[i]) {
                dp[i + 1][j] = dp[i][j];
            } else {
                dp[i + 1][j] = dp[i][j] || dp[i][j - stones[i]];
            }
        }
    }
    for (let j = m;; --j) {
        if (dp[n][j]) {
            return sum - 2 * j;
        }
    }
};

lastStoneWeightII([2, 7, 4, 1, 8, 1]);
