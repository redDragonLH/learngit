/**
 * 73. 矩阵置零
 * 
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 * 进阶：
 * 
 *      一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 *      一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 *      你能想出一个仅使用常量空间的解决方案吗？
 */

/**
 * 错误题解，以为是把0周围置空
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {

    let row = matrix.length;
    if(!row )return matrix;
    let cow = matrix[0].length;
    let copy = JSON.parse(JSON.stringify(matrix))
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < cow; j++) {
            if(!matrix[i][j] && !copy[i][j]) {
                setZeroe(matrix,i,j,row,cow)
            }
        }        
    }
    return matrix;
};

const setZeroe = (arr,posr,posc,row,cow)=>{
    // 上
    if(posr-1 >-1) {
        arr[posr-1][posc] = 0
    }else {
        arr[row-1][posc]=0
    }
    // 下

    if(posr+1 < row) {
        arr[posr+1][posc] = 0
    }else {
        arr[0][posc] = 0
    }

    // 左
    if(posc-1 >-1) {
        arr[posr][posc-1] = 0
    }else {
        arr[posr][cow-1] = 0
    }

    // 右
    if(posc+1 < cow) {
        arr[posr][posc+1] = 0
    }else {
        arr[posr][0] = 0
    }
}

/**
 * 直观题解倒是简单，轮询所有元素，然后递归四边，或者按照上，左两条条线循环一次也就可以了
 * 
 * 但是更好的解法就有点想不出来了，顶多是储存一下已经被置空的行列，不去循环
 */
 var setZeroes = function(matrix) {

    let row = matrix.length;
    if(!row )return matrix;
    let cow = matrix[0].length;
    let copy = JSON.parse(JSON.stringify(matrix))
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < cow; j++) {
            if(!copy[i][j]) {
                for (let k = 0; k < row; k++) {
                    matrix[k][j] =0
                }
                for (let b = 0; b < cow; b++) {
                    matrix[i][b] =0
                }
            }
        }        
    }
    return matrix;
};
/**
 * 最惨的解法
 * 
 * 执行用时：132 ms, 在所有 JavaScript 提交中击败了13.36%的用户
 * 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了21.61%的用户
 */

/**
 * 官方题解: 使用两个标记变量
 * 
 * 我们可以用矩阵的第一行和第一列代替方法一中的两个标记数组，以达到 O(1)O(1) 的额外空间。但这样会导致原数组的第一行和第一列被修改，
 * 无法记录它们是否原本包含 00。因此我们需要额外使用两个标记变量分别记录第一行和第一列是否原本包含 00。
 * 
 * 在实际代码中，我们首先预处理出两个标记变量，接着使用其他行与列去处理第一行与第一列，
 * 然后反过来使用第一行与第一列去更新其他行与列，最后使用两个标记变量更新第一行与第一列即可。
 */

 var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false, flagRow0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
    }
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            flagRow0 = true;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (flagCol0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    if (flagRow0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
};