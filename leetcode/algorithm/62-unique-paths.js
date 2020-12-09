/**
 * 62. 不同路径
 * 
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
 */

/**
 * 动态规划
 * 
 * 1. 确定数组的含义，应该是个二维数组，数组中保存这当前有多少种方案会路过这个元素
 * 2. 数组间的关系式，dp[n][m] = dp[n-1][m] + dp[n][m-1]
 * 3. 初始值，dp[0][0] = 0,dp[1][0]=1,dp[0][1] = 1。(初始时矩形的上与左边所有元素的值都应该是1，因为没有办法再返回)
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array(m).fill([1]);
    dp[0] = Array(n).fill(1)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }        
    }
    return dp[m-1][n-1];
};
console.log(uniquePaths(7,3));

/**
 * 简单的动态规划问题，总结的解题步骤真好
 * 
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了94.49%的用户
 * 内存消耗：32.3 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

/**
 * 数学方程式法
 * 
 * 从左上角到右下角的过程中，我们需要移动 m+n-2m+n−2 次，其中有 m-1m−1 次向下移动，n-1n−1 次向右移动。
 * 因此路径的总数，就等于从 m+n-2m+n−2 次移动中选择 m-1m−1 次向下移动的方案数，
 */

var uniquePaths = function(m, n) {
    let ans = 1;
    for (let x = n, y = 1; y < m; ++x, ++y) {
        ans = Math.floor(ans * x / y);
    }
    return ans;
};