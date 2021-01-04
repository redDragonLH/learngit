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
const map = new Map();
var fib = function(n) {
    if(map.has(n))return map.get(n);
    if(n===0)return 0;
    if(n==1) return 1;
    map.set(n,fib(n-1) + fib(n-2));
    return map.get(n);
};
/**
 * 增加缓存数据结构
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了90.07%的用户
 * 内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了35.96%的用户
 */

 /**
  * 因为有了达到公式,那么可以考虑使用动态规划
  * 
  * 步骤:
  * 确定元素含义:应该不需要使用数组,因为这个是无后向性,只需要固定的位置
  * 
  * 元素关系式: F(n) = F(n - 1) + F(n - 2)，其中 n > 1
  * 初始数据: F(0) = 0，F(1) = 1
  */
 var fib = function(n) {
    if(n===0)return 0;
    if(n==1) return 1;
     let f=0,s =1;
     let l = 2;
     while(l < n) {
        let temp = s
        s = f+s;
        f = temp;
        l++;
     }
     return s+f; //f(n-1)+f(n-2)
 }
/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了61.72%的用户
 * 内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了27.52%的用户
 */

/**
 *  通项公式
 */
var fib = function(n) {
    const sqrt5 = Math.sqrt(5);
    const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);
    return Math.round(fibN / sqrt5);
};
/**
 * 数学归纳法所得出的计算公式,代码最简,但是自带的方法内部实现影响较大
 * 
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了78.52%的用户
 * 内存消耗：37.1 MB, 在所有 JavaScript 提交中击败了96.49%的用户
 */