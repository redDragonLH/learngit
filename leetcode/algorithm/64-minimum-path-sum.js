/**
 * 64. 最小路径和
 * 
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 */

/**
 * 非常典型的动态规划,创建一个二维数组承载走到当前位置的最小数字
 * 
 * 1. 数组含义: 保存走到当前位置最小的数值
 * 2. 转移方程: dp[i][j] = dp[i][j] + min(dp[i-1][j],dp[i][j-1])
 * 3. 初始值 dp[0][0] = grid[0][0]
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let row = grid.length;
    if(!row) return row; 
    let line = grid[0].length;
    let dp = new Array(row);
    
    for (let i = 0; i < row; i++) {
        dp[i]=[];
        dp[i][0] = grid[i][0] +(i>0&& dp[i-1][0])
    }
    for (let i = 1; i < line; i++) {
        dp[0][i] = grid[0][i] +(i>0&& dp[0][i-1])
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < line; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i-1][j],dp[i][j-1])
        }
        
    }
    return dp[row-1][line-1];
};
console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]));
/**
 * 二维数组版,还可以用以为一维数组保存数据
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了21.58%的用户
 * 内存消耗：40 MB, 在所有 JavaScript 提交中击败了14.29%的用户
 */