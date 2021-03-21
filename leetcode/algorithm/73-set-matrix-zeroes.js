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