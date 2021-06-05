/**
 * 342. 4的幂
 *
 * 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。
 * 整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x
 */

/**
 * 
 * 暴力解法,失败,判断条件过多
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    let count = 0;
    while(n<4) {
        count = n%4
    }
    return !!count;
};

/**
 * 取模
 */
 var isPowerOfFour = function(n) {
    return n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;
};