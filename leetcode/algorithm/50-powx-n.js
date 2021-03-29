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

/**
 * 官方题解: 快速幂
 * 
 * 从x开始,把直接把上一个的结果进行平方
 * 
 * 比较不好处理的是奇数的话要单✖乘一个x
 */
var myPow = function (x, n) {
    const quickMul =(N)=> {
        if(!N)return 1;
        y = quickMul(parseInt( N / 2));
        return N % 2 == 0 ? y * y : y * y * x;
    }

    return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
};