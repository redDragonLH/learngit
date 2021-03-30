/**
 * 74. 搜索二维矩阵
 * 
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 */


/**
 * 题目的明示已经很清楚了,先判断在哪行,然后行内搜索,心情好可以搞二分查找
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
    let pos = -1
    for (let i = 0; i < matrix.length; i++) {
        if (target < matrix[i][0]) {
            pos = --i;
            break;
        }
    }
    if (pos === -1) pos = matrix.length - 1;
    let posArr = matrix[pos];
    for (let i = 0; i < posArr.length; i++) {
        if (target === posArr[i]) {
            return true
        }
    }
    return false;
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了85.04%的用户
 * 内存消耗：39 MB, 在所有 JavaScript 提交中击败了38.23%的用户
 */