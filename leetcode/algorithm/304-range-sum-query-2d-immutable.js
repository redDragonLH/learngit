/**
 * 304. 二维区域和检索 - 矩阵不可变
 * 
 * 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)。
 * 
 */

/**
 * 前缀和
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    let dp = []
    for (let i = 0; i < matrix.length; i++) {
        dp.push([])
        dp[i][0] = matrix[i][0]
        for (let j = 1; j < matrix[0].length; j++) {
            dp[i][j] = dp[i][j-1]+matrix[i][j]
        }
    }
    this.dp = dp;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let temp = 0;
    for (let i = row1; i <= row2; i++) {
        temp += (this.dp[i][col2]-(col1===0?0:this.dp[i][col1-1]))
    }
    return temp;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

/**
 * 速度挺慢,应该有按照矩形储存的前缀和,不需要循环的那种
 * 
 * 执行用时：160 ms, 在所有 JavaScript 提交中击败了33.72%的用户
 * 内存消耗：42.5 MB, 在所有 JavaScript 提交中击败了62.79%的用户
 */