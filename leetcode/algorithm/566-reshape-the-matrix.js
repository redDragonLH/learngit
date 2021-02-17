/**
 * 566. 重塑矩阵
 * 
 * 在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。
 * 给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。
 * 重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。
 * 如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
 */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const m = nums.length;
    const n = nums[0].length;
    //设 nums 本身为 mm 行 nn 列，如果 mn !=rc，那么二者包含的元素个数不相同，因此无法进行重塑；
    if (m * n != r * c) {
        return nums;
    }

    //否则，对于 x ∈ [0,mn)，第 x 个元素在 nums 中对应的下标为 (x / n,x % n)，而在新的重塑矩阵中对应的下标为 (x / c,x % c)。我们直接进行赋值即可。
    const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (let x = 0; x < m * n; ++x) {
        ans[Math.floor(x / c)][x % c] = nums[Math.floor(x / n)][x % n];
    }
    return ans;
};

/**
 * 第三方最优解
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let  row = nums.length, col = row == 0 ? 0 : nums[0].length;
    if(row == 0) {
        return [];
    }
    if (row * col != r * c) {
        return nums;
    }
    let result = [];
    for (let i = 0; i < r; i++ ) {
        result[i] = [];
    }
    let tempArr = [];
    nums.forEach(function(arr) {
        tempArr.push.apply(tempArr, arr);
    });
    if (r == 1) {
        return [tempArr];
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            result[i][j] = tempArr[i * c + j];
        }
    }
    return result;

};