/**
 * 680. 验证回文字符串 Ⅱ
 * 
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 */

 /**
 * 贪心算法：是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而 "希望" 导致结果是最好或最优的算法(可能无法计算出真正最优解)
 * 
 * 在第一次发现不相等之后必须分两个情况去判断，start+1和end-1,两个情况必须都进行判断，用else 区分会导致正确答案可能在丢弃的一部分里面
 *      从两个情况里面判断是否成功
 * 
 * @param {string} s
 * @return {boolean}
 * 
 * P.S 边界条件总是不能都照顾到
 * 
 */
var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while(start < end) {
        console.log(start,s[start],s[end],end);
        
        if(s[start] === s[end]) {
            start++;
            end--;
            continue;
        } else {
            // 不能按顺序去判断start +1 和 end -1 ,
            return palindrome(s,start+1,end) || palindrome(s,start,end-1);
        }
    }
    return true;
};
let palindrome = (s,start,end) => {
    while (start < end) {
        if(s[start] === s[end]){
            start++;
            end--;
        }else {
            return false
        }
    };
    return true;
}
console.log(validPalindrome("ebcbbececabbacecbbcbe"));
/**
 * 执行用时 :120 ms, 在所有 JavaScript 提交中击败了32.25%的用户
 * 内存消耗 :43.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

 /**
  * 执行用时最少的代码赏析
  * 
  * 68ms
  * 
  * 思路基本一样，但是用时减半
  */
 var validPalindrome = function(s) {
     // 使用for循环，把指针的改变放到for里面（但是应该不是特别减少把，因为指针的修改是必须处理的）
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
                // charAt 方法是否比 数组获取式更快呢
               if (s.charAt(i) != s.charAt(j)) {
                   return isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j);
               }
           }
           return true;
};
function isPalindrome(s, i, j) {
           while (i < j) {
               if (s.charAt(i++) != s.charAt(j--)) {
                   return false;
               }
           }
           return true;
       }