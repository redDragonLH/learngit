/**
 * 861. 翻转矩阵后的得分
 * 
 * 有一个二维矩阵 A 其中每个元素的值为 0 或 1 。
 * 移动是指选择任一行或列，并转换该行或列中的每一个值：将所有 0 都更改为 1，将所有 1 都更改为 0。
 * 在做出任意次数的移动后，将该矩阵的每一行都按照二进制数来解释，矩阵的得分就是这些数字的总和。
 * 返回尽可能高的分数。
 * 
 * 提示：
 * 1 <= A.length <= 20
 * 1 <= A[0].length <= 20
 * A[i][j] 是 0 或 1
 */

/**
 * 
 * 反转行,列,保证第一列必须是1,先检查每一行,让每一行的第一列必须是1,然后只能翻转列,检查每列,必须 1 比  0多,否则就翻转
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {

};

/**
 * 
 */
var matrixScore = function(A) {
    const m = A.length, n = A[0].length;
    let ret = m * (1 << (n - 1));

    for (let j = 1; j < n; j++) {
        let nOnes = 0;
        for (let i = 0; i < m; i++) {
            if (A[i][0] === 1) {
                nOnes += A[i][j];
            } else {
                nOnes += (1 - A[i][j]); // 如果这一行进行了行反转，则该元素的实际取值为 1 - A[i][j]
            }
        }
        const k = Math.max(nOnes, m - nOnes);
        ret += k * (1 << (n - j - 1));
    }
    return ret;
};