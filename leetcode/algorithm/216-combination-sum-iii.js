/**
 * 216. 组合总和 III
 *
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 说明：
 *  所有数字都是正整数。
 *  解集不能包含重复的组合。
 */

/**
 * 条件:
 *  数必须为 k个
 *  最大数为9
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  if (!n) result;
  dfs(1, n, k, [], result);
  return result;
};
/**
 * k 每次减一,
 * n也要减去对应的数
 * 
 * 失败, 判断逻辑错误
 * @param {*} n
 * @param {*} k
 */
const dfs = (current, n, k, path, result) => {
  console.log(n, k);
  if (n === 0 && k === 0) {
    result.push(new Array(...path));
    return false;
  }
  if (n < current || current > 9) return;

  // 循环不能简单的这么做,
  for (let i = current + 1; i < 10; i++) {
    path.push(i);
    dfs(i, n, k, path, result);
    dfs(i, n - i, k - 1, path, result);
    path.pop();
  }
};
console.log(combinationSum3(3, 7));

/**
 * 官方题解
 * 
 * 保持了传入数据不变,灵活变动给定条件
 * 
 * @param {*} k 
 * @param {*} n 
 */
var combinationSum3 = function(k, n) {
    const temp = [];
    const res = [];
    const dfs = (cur, n, k, sum, res) => {
            // 数组数量  //n是最大数9, 应该就是剩下的数量不够k个,肯定无法组成正确的数组
        if (temp.length + (n - cur + 1) < k || temp.length > k) {
            return;
        }

        // 正确判断
        if (temp.length === k && temp.reduce((previous, value) => previous + value, 0) === sum) {
            res.push(temp.slice());
            return;
        }
        // 这里比较主要的逻辑
        temp.push(cur);
        dfs(cur + 1, n, k, sum, res);
        temp.pop();
        dfs(cur + 1, n, k, sum, res);
    }

    dfs(1, 9, k, n, res);
    return res;
};