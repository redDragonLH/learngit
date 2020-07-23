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
 * 可以由二维数组转为1维,因为只能向右向下,所以可以由一个一维数组承载数据然后新的覆盖久的
 */
var minPathSum = function(grid) {
    let row = grid.length;
    if(!row) return row; 
    let line = grid[0].length;
    // 使用一维数组保存数据
    // 从上到下一层一层计算,保存数据内新覆盖旧
    const dp = new Array(line).fill(0);

    // 为了处理边界方便,先进行第一层处理
    dp[0] = grid[0][0];
    for (let i = 1; i < line; i++) {
        // 因为是第一层,所以没有覆盖,这样只要前加后即可
        dp[i] = dp[i-1] + grid[0][i];
        
    }
    // 因为边界条件的问题,所以最好从第二个元素开始计算
    for (let i = 1; i < row; i++) {
        // 先把开头的元素计算出来,下边就不用考虑边界条件来
        dp[0] += grid[i][0];
        for (let j = 1; j < line; j++) {
            //                                    dp[j]其实是上
            dp[j] = grid[i][j] + Math.min(dp[j-1],dp[j])
        }
        
    }
    return dp[line-1];
};
console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]));
  console.log(minPathSum([[1,2,5],[3,2,1]]));
  
/**
 * 二维数组版,还可以用以为一维数组保存数据
 * 就是慢~~
 * 
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了21.58%的用户
 * 内存消耗：38.5 MB, 在所有 JavaScript 提交中击败了14.29%的用户
 */