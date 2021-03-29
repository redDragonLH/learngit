/**
 * 50. Pow(x, n)
 * 
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。
 */

/**
 * 
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (!n) return 1; // 所有数的0次方都为1
    if (!x) return x;
    let count = x;
    let absn = Math.abs(n);

    while (--absn) {
        count = count * x
    }
    if (n < 0) count = 1 / count;
    return count;
};
/**
 * 2.00000
 * -2147483648
 * 
 * 超出时间限制
 */

/**
 * 官方实现才超过 20%的人,开玩笑呢吧~~~
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    return Math.pow(x,n); 
};