/**
 * 1310. 子数组异或查询
 *
 * 有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。
 * 对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。
 * 并返回一个包含给定查询 queries 所有结果的数组。
 */

/**
 *
 * 看示例倒是挺简单,希望没啥坑
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const result = new Array(queries.length).fill(0);
  queries.forEach((e,index) => {
      for (let i = e[0]; i <=e[1]; i++) {
        result[index] = result[index]^arr[i]
      }
  });
  return result
};
/**
 * 还有哪里可以优化~~
 * 
 * 执行用时：2100 ms, 在所有 JavaScript 提交中击败了6.06%的用户
 * 内存消耗：49.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */