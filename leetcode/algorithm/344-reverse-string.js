/**
 * 344. 反转字符串
 * 
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 */

/**
 * 常见解法，双指针 ，自题解
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    if (!s.length) return s;
    let left = 0;
    let right = s.length-1;
    while(left<right) {
        let temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--;
    }
};
/**
 * 执行用时：120 ms, 在所有 JavaScript 提交中击败了71.15%的用户
 * 内存消耗：44.8 MB, 在所有 JavaScript 提交中击败了12.60%的用户
 */

 /**
  * 也可以使用自带的方法进行字符处理，效率很高
  */
 var reverseString = function(s) {
    s = s.reverse();
};

/**
 * 效率最高
 */
var reverseString = function (s) {
    reverse(0, s, s.length)
  };
  
  function reverse(index, s, len) {
    if (s == null || index >= len / 2) return
    reverse(index + 1, s, len)
    const temp = s[index]
    s[index] = s[len - 1 - index]
    s[len - 1 - index] = temp
  }