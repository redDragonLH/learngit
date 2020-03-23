/**
 * 定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 例：
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 */

 /**
  * 逐位计算
  * 
  * @param {string} a
  * @param {string} b
  * @return {string}
  */
var addBinary = function(a, b) {
 let len = a.length > b.length ? a.length : b.length;
 let alen = a.length-1;
 let blen = b.length-1;
 let str = '';
 let flag = 0;
 let x = 0
 for (let i = len -1; i > -1; i--) {
  let ai = a[alen-x] ? Number(a[alen-x]) :0;
  let bi = b[blen-x] ? Number(b[blen-x]) :0;
  let add = ai + bi + flag;
  // console.log(add,ai , bi);
  ++x
  if( add > 1 ) {
   flag = 1
   add = add - 2
  }else {
   flag = 0
  }
  str = add + str;
 }
 console.log();
 
 return flag ? flag + str : str;
};
// console.log(addBinary('11','1'));
/**
 * 逐位计算 复杂度
 * 
 * 时间复杂度：O(max(N, M))，其中N和M是输入字符串 a 和 b的长度
 * 空间复杂度：O(max(N, M)),存储求和结果
 */

 /**
  * 位操作
  * （先学习位操作）
  */
// https://leetcode-cn.com/problems/add-binary/solution/er-jin-zhi-qiu-he-by-leetcode/
