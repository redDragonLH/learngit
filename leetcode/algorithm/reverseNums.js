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
