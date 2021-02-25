/**
 * 867. 转置矩阵
 * 
 * 给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。
 * 矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 */

/**
 * 
 * 最好只循环一般,循环到一个位置就定位到它的对应的位置
 * 
 * 位置应该是相反吧 [i,j] = [j,i]
 * 但是这种写法无法适应长方形矩阵
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const row = matrix[0].length;
    const line = matrix.length;

    const t = {}
    for (let i = 0; i < line; i++) {
        for (let j = 0; j < row; j++) {
            let falg = ''+i+j
            if(!t[falg]) {
                let temp = matrix[i][j]
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
                t[''+j+i] = true;
            }

        }
    }
    return matrix;
};

/**
 * 官方题解
 * 
 * 增加一个转换结构,但是这不会有问题么
 * 
 * 不会,因为 j i,已经限定到一定程度,
 * 感觉还是没想明白
 */
var transpose = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    const transposed = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    return transposed;
};