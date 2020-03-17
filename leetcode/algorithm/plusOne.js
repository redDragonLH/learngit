/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 * 
 * 代码太碎
 */
var plusOneL = function(digits) {
 let flag = 0;
 let len = digits.length;

 let num = digits[len-1] + 1;
 if(num < 10) {
  digits[len-1] = num;
  return digits;
 } else {
  flag = 1;
  digits[len-1] = num - 10;
 }
 for (let index = len - 2 ; index > -1 ; index--) {
   let lin = digits[index] + flag
   flag = 0;
  if(lin < 10) {
    digits[index] = lin;
    break;
  } else {
    digits[index]  = lin - 10;
    flag = 1;
  }
 }
 flag && digits.unshift(flag)
 return digits
};
// console.log(plusOne([8,9,9,9]));

/**
 * 用 余数 来判断版
 * 
 * 最后一个数＋1，只有两种结果， 9 +1，和其他数字+1
 * 如果是其他数字则可以之间返回加一的数组
 * 
 * 如果是9则，第一位会是 0，则让其他数字继续加一
 * 
 * 使用余数判断 最后一位的数字
 */
var plusOne = function(digits) {
  for (let i = digits.length -1; i > -1; i--) {
    digits[i]++
    digits[i] = digits[i] % 10; // 使用余数，剩下0，则继续，其他数字则可之间返回
    if(digits[i] !== 0) return digits;
  }
  digits.unshift(1)// 未返回说明加一之后的数字超出原数据位数
  return digits
 };
 console.log(plusOne([8,9,9,9]));