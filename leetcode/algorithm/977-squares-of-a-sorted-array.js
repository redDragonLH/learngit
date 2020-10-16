/**
 * 977. 有序数组的平方
 * 
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 * 也不是随机,是递增的
 * 
 */
/**
 * 改版之后,删减版~~~~
 * 去掉多余数组,在原地处理
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    if(!A.length) return A;
    for (let i = 0; i < A.length; i++) {
        A[i]= Math.pow(A[i],2);
    }
    return A.sort((a,b)=> a-b);
};
console.log(sortedSquares([-4,-1,0,3,10]));

/**
 * 删减版,去掉多余数组,在原地进行处理之后速度提升特别明显,有点迷茫
 * 
 * 执行用时：120 ms, 在所有 JavaScript 提交中击败了98.79%的用户
 * 内存消耗：44.7 MB, 在所有 JavaScript 提交中击败了10.60%的用户
 */

/**
 * 双指针法
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let left = 0
    let right = A.length - 1
    let res = []
    let index = right
    while (left <= right) { // 循环应该还是n
      if (A[left] ** 2 > A[right] ** 2) { //从两端开始判断,最后相遇到一个位置,全负数、全正数,正负皆有相遇位置是不一样的
        res[index--] = A[left++] ** 2;
      } else {
        res[index--] = A[right--] ** 2;
      }
    }// 处理到最后就会生成一个升序数组
    return res
  };