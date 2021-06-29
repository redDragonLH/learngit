/**
 * 168. Excel表列名称
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 */

/**
 * 26进制么
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let ans = [];
  
  while (columnNumber > 0) {
    const a0 = ((columnNumber - 1) % 26) + 1;
    ans.push(String.fromCharCode(a0 - 1 + "A".charCodeAt()));
    columnNumber = Math.floor((columnNumber - a0) / 26);
  }
  ans.reverse();
  return ans.join("");
};