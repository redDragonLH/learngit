/**
 * 771. 宝石与石头
 *
 *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const objJ = {};
  let result = 0;
  for (let i = 0; i < J.length; i++) {
    objJ[J[i]] = true;
  }
  for (let i = 0; i < S.length; i++) {
    objJ[S[i]] && result++;
  }
  return result;
};
/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了26.21%的用户
 * 内存消耗：39 MB, 在所有 JavaScript 提交中击败了10.43%的用户
 */