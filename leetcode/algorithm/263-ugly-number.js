/**
 * 263. 丑数
 * 
 * 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
 * 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
 */

/**
 * 没太理解题意，用每个数去除么，那得有多少种顺序，不得匹配死~~~
 * 
 * 直观，从小到大用每个数循环除，除不开就换下一个
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
    if (n < 1) {
        return false;
    }
    while (n % 2 == 0) {
        n = n / 2;
    }
    while (n % 3 == 0) {
        n = n / 3;
    }
    while (n % 5 == 0) {
        n = n / 5;
    }
    return n == 1;
};