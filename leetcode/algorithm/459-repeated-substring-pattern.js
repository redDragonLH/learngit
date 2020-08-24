/**
 * 459. 重复的子字符串
 *
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 */

/**
 * 第一, 子串肯定能整除
 * 第二, 肯定是从头开始的字串
 * 第三, 只需要运行一半多一点就可以确定是否重复
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let len = s.length;
  if (!len) return false;
  let temp = "";
  let cycle = Math.ceil(len / 2);
  for (let i = 0; i <= cycle; i++) {
    temp += s[i];
    let count = i / len;
    if (Number.isInteger(count)) {
      if (temp.repeat(count) === s) {
        return true;
      }
    }
  }
  return false;
};

/**
 * 执行用时：108 ms, 在所有 JavaScript 提交中击败了27.81%的用户
 * 内存消耗：45.1 MB, 在所有 JavaScript 提交中击败了5.56%的用户
 */


/**
 * 最佳题解
 * 
 * 如果 s 是由 多个 子串合并而成,那么把开头的子串移到最后,字符串 s 也成立,那么两个s 相加成s`,这个字符串之中,肯定有数个 s,如果把前后两个字符去掉,肯定也可以在 s` 中找到 s
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    return (s + s).indexOf(s, 1) !== s.length;// indexof(s,1) 的1 就是去掉第一个字符,s.length 就是去掉最后一个字符的条件 因为s.length就是后一个s的起始位置,如果等于它就说名没有等于s的子串
};

/**
 * kmp 算法
 * 
 * 详情见 oneNote
 */