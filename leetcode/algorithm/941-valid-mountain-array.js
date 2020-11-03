/**
 * 941. 有效的山脉数组
 * 
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
 * 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：
 * 
 * A.length >= 3
 * 在 0 < i < A.length - 1 条件下，存在 i 使得：
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 */

/**
 * 
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(A.length <3) return false;
    if(A[0]>A[1]) return false;
    let mun = false;
    for (let i = 1; i < A.length; i++) {
        if(A[i] === A[i-1]) return false;

        if(A[i-1] > A[i] && !mun) {mun = true;}
        else if(A[i]>A[i-1] && mun) return false
    }
    return mun;
};

/**
 * 都是补丁~~~
 * 
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了33.33%的用户
 * 内存消耗：40.6 MB, 在所有 JavaScript 提交中击败了31.54%的用户
 */