/**
 * 题目
 * 
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 *  * 负号不参与反转
 *  * 开头不可以是0
 * 
 * 注意: 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

 /**
 * 提交 1
 * 
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
 let a = x > 0? 1 : -1; // 获取数字的 正负
 let reverseNum = Number((''+Math.abs(x)).split('').reverse().join('')) * a; // 使用绝对值转为字符串转数组，反转，再合并
 let max = Math.pow(2, 31) -1;
 let min = Math.pow(-2, 31);
 if(reverseNum< max && reverseNum >min ){ // 判断是否超出
     return reverseNum;
 } else {
     return 0;
 }
};
console.log(reverse1(1234567890));

/**
 * 思路1： 弹出和推入数字 & 溢出前进行检查
 * 
 * 一次构建反转整数的一位数字，可以预先检查向原整数附加另一位数字是否会导致溢出
 * 
 * 算法： 
 * 弹出数据的最后一位数字，并将它推入到rev 的后面，最后，rev将与 x 相反
 */
/**
 * 思路1java代码
 *
 class Solution {
   int rev = 0;
   while (x != 0){
    int pop x % 10;
    x /= 10;
    if(rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) return 0;
    if(rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) return 0;
    rev = rev * 10 + pop;
   }
   return rev;
 }
 */