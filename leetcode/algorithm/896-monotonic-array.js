/**
 * 896. 单调数列
 * 
 * 如果数组是单调递增或单调递减的，那么它是单调的。
 * 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。
 * 当给定的数组 A 是单调数组时返回 true，否则返回 false。
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let inc = true, dec = true;
    const n = A.length;
    for (let i = 0; i < n - 1; ++i) {
        if (A[i] > A[i + 1]) {
            inc = false;
        }
        if (A[i] < A[i + 1]) {
            dec = false;
        }
    }
    return inc || dec;
};

/**
 * 第三方优秀题解
 * 
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let a;
    for(let i = 0;i<A.length - 1;i++){
        if(a&&(a * (A[i+1] - A[i]) < 0 )) return false;//若之前保存的差 乘 当前组之差小于零，则表示不是单调数组，直接返回false
        if( A[i+1] - A[i] !=0) a = A[i+1] - A[i];//若元素之差不等于零，则保存差值
    }
    return true;
};