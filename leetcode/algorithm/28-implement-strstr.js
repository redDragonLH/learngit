/**
 * 28. 实现 strStr()
 *
 * 实现 strStr() 函数。
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 *
 * 说明：
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。
 */

/**
 * 直接匹配
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let len = haystack.length;
  let nlen = needle.length;
  if (!len && nlen) return -1;
  if (!len || !nlen) return 0;
  for (let i = 0; i < len; i++) {
    if (haystack[i] === needle[0]) {
      let num = search(haystack, needle, i);
      if (typeof num === "number") return num;
    }
  }
  return -1;
};
const search = (haystack, needle, j) => {
  let i = 0;
  for (; i < needle.length; i++) {
    if (haystack[j] !== needle[i]) {
      return false;
    }
    j++;
  }
  return j - i;
};

/**
 * 执行用时：3660 ms, 在所有 JavaScript 提交中击败了6.42%的用户
 * 内存消耗：38.8 MB, 在所有 JavaScript 提交中击败了43.74%的用户
 */

/**
 * KMP 算法
 */

/**
 * Sunday 算法
 */