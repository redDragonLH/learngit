/**
 * 766. 托普利茨矩阵
 * 
 * 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
 * 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。
 */

/**
 * 这个问题比较麻烦的是怎样按照顺序获取点位,
 * 
 * 这种方法特殊情况太多
 * 优化思路是从两头获取点位然后这样就循环一半就可以
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const row = matrix[0].length;
    const col = matrix.length;
    if(row<2) return true;

    const forLen = row > col? row: col;

    // 0 0 点特殊情况
    let point = matrix[0][0]
    for (let i = 1; i < row; i++) {
        if( matrix[i] && point !== matrix[i][i]) {
            return false;
        }
    }
    // 还是二层循环
    for (let i = 1; i < forLen; i++) {
        for (let j = 2; j < forLen; j++) {
            // 循环的内层不能超过 内部数组的长度,
            if(matrix[i] && j<row) {
                if(matrix[i][j] !==matrix[i-1][j-1]) return false
            }
            if(matrix[j] && i<row) {
               if(matrix[j][i] !==matrix[j-1][i-1]) return false
            }
        }
            
    }
    return true;
};
/**
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了29.03%的用户
 * 内存消耗：40.3 MB, 在所有 JavaScript 提交中击败了5.64%的用户
 */