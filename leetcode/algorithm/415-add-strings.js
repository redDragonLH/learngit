/**
 * 415. 字符串相加
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 *
 * 注意：
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const numberMap = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
};
var addStrings = function (num1, num2) {
  let carry = 0;
  let len1 = num1.length;
  let len2 = num2.length;
  let str = "";
  while (len1 > 0 || len2 > 0) {
    len1--;
    len2--;
    let temp =
      (numberMap[num1[len1]] || 0) + (numberMap[num2[len2]] || 0) + carry;
    carry = temp > 9 ? 1 : 0;
    str = (temp % 10) + str;
  }
  str = carry ? "1" + str : str;
  return str;
};

console.log(addStrings("10", "110"));

/**
 * 我运行的怎么都这么慢~
 * 
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了33.72%的用户
 * 内存消耗：40.1 MB, 在所有 JavaScript 提交中击败了47.06%的用户
 */

 /**
  * 还可以使用数组保存数据
  * 输出时 join一下就可以,
  */