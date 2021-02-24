/**
 * 832. 翻转图像
 * 
 * 给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。
 * 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。
 * 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。
 */

/**
 * 官方题解, 思路也就这样了~~~
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const n = A.length;
    for (let i = 0; i < n; i++) {
        let left = 0, right = n - 1;
        while (left < right) {
            if (A[i][left] === A[i][right]) {
                A[i][left] ^= 1;
                A[i][right] ^= 1;
            }
            left++;
            right--;
        }
        if (left === right) {
            A[i][left] ^= 1;
        }
    }
    return A;
};

/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了78.34%的用户
 * 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了67.87%的用户
 */


 /**
  * 第三方优秀题解
  * 
  * 也没想到用官方API,也不知道每个字都取反和 增加逻辑判断 谁的资源消耗高
  */
 /**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(it => {
      return it.reverse().map(o=>{
        return 1^o
      })
    })
  };


 /**
  * python的语法很有意思
  * 
  * class Solution:
  *     def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
  *         # [::-1] 做的工作就是list取反
  *         return [[j ^ 1 for j in row[::-1]] for row in A]
  */