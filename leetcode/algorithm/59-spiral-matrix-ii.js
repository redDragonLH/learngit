/**
 * 59. 螺旋矩阵 II
 * 
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 */

/**
 * 按层模拟就行吧,长宽都给力,但是计算每个位置的值得确认,MD反过来了
 * 
 * 
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

    let result = new Array(n).fill(0).map(() => new Array(n).fill(false));

    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let pos = 1
    while (left <= right && top <= bottom) {
        // 左到右
        for (let column = left; column <= right; column++) {
            result[top][column] = pos++
        }
        // 上到下
        for (let row = top + 1; row <= bottom; row++) {
            result[row][right] = pos++

        }
        if (left < right && top < bottom) {
            // 右到左
            for (let column = right - 1; column > left; column--) {
                result[bottom][column] = pos++

            }
            // 下到上
            for (let row = bottom; row > top; row--) {
                result[row][left] = pos++
            }
        }
        // 正好一个循环

        // 圈缩小
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return result
};

/**
 * 按层模拟,应该还能优化
 * 
 * 保持当前位置值的变量应该不用优化吧, 毕竟公式还得进行复杂计算
 * 
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了19.96%的用户
 * 内存消耗：38 MB, 在所有 JavaScript 提交中击败了32.55%的用户
 */

/**
 * 第三方优秀题解
 * 
 * 模拟的架子,简化了太多
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let r = []
    for (let i=0; i<n; i++) {
        r.push([])
    }
    let i=0, j=0, k=1
    while(!r[i][j] && k<n*n) {
        while(j<n-1 && !r[i][j+1]) {
            r[i][j++] = k++ 
        }
        while(i<n-1 && !r[i+1][j]) {
            r[i++][j] = k++
        }
        while (j>0 && !r[i][j-1]) {
            r[i][j--] = k++
        }
        while (i>0 && !r[i-1][j]) {
            r[i--][j] = k++
        }
    }
    r[i][j] = k
    return r
};