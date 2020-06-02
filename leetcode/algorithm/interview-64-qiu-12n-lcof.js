/**
 * 面试题64. 求1+2+…+n
 * 
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 */

 /**
  * 使用递归么，肯定不是最优解
  * 
  * 肯定是有数学方法的
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    // 递归和逻辑判断符用的还是不够多，
    // 刚开始根本没有想到使用这两个东西
    return n && (n + sumNums(n-1))
};
console.log(sumNums(10));

/**
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了19.49%的用户
 * 内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

 /**
  * 快速乘方案（俄罗斯农民乘法）
  * 
  * m * n = {(m/2) * 2n ; m is even && (m-1)/2 * 2n + n; m is odd}
  * 
  * 考虑 A 和 B 两数相乘的时候我们如何利用加法和位运算来模拟，其实就是将 B 二进制展开，如果 B 的二进制表示下第 ii 位为 1，那么这一位对最后结果的贡献就是 A*(1<<i)A∗(1<<i) ，即 A<<iA<<i
  */
