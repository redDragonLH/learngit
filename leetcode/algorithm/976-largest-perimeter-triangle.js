/**
 * 976. 三角形的最大周长
 * 
 * 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
 * 如果不能形成任何面积不为零的三角形，返回 0。
 */

/**
 * a+b > c
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a,b)=>b-a)
    for (let i = 0; i <A.length; i++) {
        if(A[i] <  A[i+1] + A[i+2]) return A[i] + A[i+1] + A[i+2];
    }
    return 0;
};
console.log(largestPerimeter([3,2,3,4]));

/**
 * 执行用时：124 ms, 在所有 JavaScript 提交中击败了50.00%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了44.55%的用户
 */