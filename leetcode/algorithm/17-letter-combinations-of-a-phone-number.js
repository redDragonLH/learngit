/**
 * 17. 电话号码的字母组合
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */

/**
 * 简单来说就是 从字符串中拿到全部的映射字母数组,然后循环从里面拿一个
 *
 * 回溯法: 在全排列问题中应用较多,主要逻辑就是选择与撤销,在使用一个元素进行排列之后可以进行撤销操作,换另一个元素,这就要使用分支或者递归进行撤销或者更换操作
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  let mapping = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  let digSet = [];
  let returned = [];

  for (let i = 0; i < digits.length; i++) {
    digSet.push(mapping[Number(digits[i])]);
  }
  getData(digSet, 0, returned, "");
  return returned;
};

const getData = (digSet, pos, returned, str) => {
  if (!digSet[pos]) return returned.push(str);
  for (let i = 0; i < digSet[pos].length; i++) {
    getData(digSet, pos + 1, returned, str + digSet[pos][i]);
  }
};
letterCombinations("23");

/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了23.50%的用户
 * 内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了61.55%的用户
 */
