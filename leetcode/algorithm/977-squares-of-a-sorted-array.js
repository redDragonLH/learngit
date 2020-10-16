/**
 * 977. 有序数组的平方
 * 
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 * 也不是随机,是递增的
 * 
 */
/**
 * 效率最差版,其实可以在本地处理
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    if(!A.length) return A;
    const result = new Array(A.length).fill(0)
    for (let i = 0; i < A.length; i++) {
        let pow = Math.pow(A[i],2);
        A[i] = pow
    }
    return result.sort((a,b)=> a-b);
};
console.log(sortedSquares([-4,-1,0,3,10]));

/**
 * 效率吊差版
 * 
 * 执行用时：160 ms, 在所有 JavaScript 提交中击败了24.43%的用户
 * 内存消耗：44.8 MB, 在所有 JavaScript 提交中击败了5.13%的用户
 */