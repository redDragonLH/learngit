/**
 * 题目：
 *    判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 负数全都不是
 */

/**
 * 提交
 * 
 * 思路：按位判断，进行匹配，正好可以折中判断，循环半圈就可以
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 if(x < 0) return false;
 let arr = ''+ x
 let arrL = arr.length
 let forLength = Math.ceil(arrL/2); // 缓存 循环的次数
 for(let i=0;i<forLength;i++){ 
     if(arr[i] !== arr[arrL - (i+1)]){
         return false
     }
 }
     return true;
};