/**
 * 题目：  最长公共前缀
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 */

 /**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 let str = ''

   if(strs.length === 1) {
    return strs[0]
   }else if(strs.length === 0) {
    return str;
   }
   for (let i = 0; i < strs.length; i++) {
     for (let j = 0; j < strs.length; j++) {
       if(null){}
      
     }
    
   }
   return str;
};