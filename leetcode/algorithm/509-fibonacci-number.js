/**
 * 509. 斐波那契数
 * 
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 给你 n ，请计算 F(n) 。
 */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0)return 0;
    if(n==1) return 1;
    return fib(n-1) + fib(n-2);
};
/**
 * 超级基础版
 * 执行用时：128 ms, 在所有 JavaScript 提交中击败了6.40%的用户
 * 内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了20.58%的用户
 */