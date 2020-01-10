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

/**
 * 思路1： 数学解法
 * 
 * 通过取整和取余获取整数中对应的数字进行比较
 * 
 */
/*
 * 思路1 java 代码
class Solution {
  public boolean isPalindrome(int x) {
    if( x < 0) return false;
    int dev = 1;
    while (x / div >= 10 ) div *= 10; // 获取取整的最高位数
    while (x > 0) {
      int left = x / div;
      int right = x % 10; // 取余
      if ( left != right ) return false;
      x = (x % div) / 10; // 直接把最高位和最低位的数字去掉
      div /= 100; // 最高位配合减去两位
    }
    return false
  }
 }
 */

 /**
  * 思路2：取后半段数字进行翻转
  * 
  * 注意： 奇数在对折之后有一个数需要去掉一位数
  * 
  * 操作：
  * 1. 每次进行取余操作，取出最低的数字
  * 2. 将最低的数字加到取出数的末尾：
  * 3. 每取一个最低位的数字，x 都要自除以 10
  * 4. 判断 x 是不是小于 取出数，当它小于时，说明数字已经对半或者过半了
  * 5. 判断奇偶数情况：如果是偶数的话，revertNum 和 x 相等；如果是奇数的话，最中间的数字就在revertNum 的最低位上，将它除以 10 以后应该和 x 相等。
  */
 /**
  * 思路2 java 代码
 
class Solution {
 public boolean isPalindrome(int x) {
  if( x < 0 || (x % 10 === 0 && x != 0)) return false; // 结尾为 0 的大于0 的数肯定不为回文数
  int revertedNumber = 0;
  while(x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10; // 计算每位的数
    x /= 10;
  }
  return x == revertedNumber || x == revertedNumber / 10; // 判断
 }
}
  */