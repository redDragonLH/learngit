/**
 * 1738. 找出第 K 大的异或坐标值
 *
 *
 * 给你一个二维矩阵 matrix 和一个整数 k ，矩阵大小为 m x n 由非负整数组成。
 * 矩阵中坐标 (a, b) 的 值 可由对所有满足 0 <= i <= a < m 且 0 <= j <= b < n 的元素 matrix[i][j]（下标从 0 开始计数）执行异或运算得到。
 * 请你找出 matrix 的所有坐标中第 k 大的值（k 的值从 1 开始计数）。
 */

/**
 *
 * 这个题就很明显了,每个坐标的值就是前缀和(异或),要求的也是所有坐标的前缀和,能以前缀和作为优化手段
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  const m = matrix.length,
    n = matrix[0].length;
  // 构建一个和矩阵一模一样的空数组
  const pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const results = [];
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      // 因为这次是二维数组,那么单单使用前一个的异或和就不够了,还需要i-1、j-1,以及i-1,j-1,这三个位置的值和当前位置的数据进行异或
      pre[i][j] =
        pre[i - 1][j] ^
        pre[i][j - 1] ^
        pre[i - 1][j - 1] ^
        matrix[i - 1][j - 1];

      // 把算出来的坐标的值放到一维数组里
      results.push(pre[i][j]);
    }
  }
  results.sort((a, b) => b - a);
  return results[k - 1];
};
