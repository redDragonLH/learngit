/**
 * 1711. 大餐计数
 *
 * 大餐 是指 恰好包含两道不同餐品 的一餐，其美味程度之和等于 2 的幂。
 *
 * 你可以搭配 任意 两道餐品做一顿大餐。
 *
 * 给你一个整数数组 deliciousness ，其中 deliciousness[i] 是第 i​​​​​​​​​​​​​​ 道餐品的美味程度，返回你可以用数组中的餐品做出的不同 大餐 的数量。结果需要对 109 + 7 取余。
 *
 * 注意，只要餐品下标不同，就可以认为是不同的餐品，即便它们的美味程度相同。
 */

/**
 * 
 * 使用哈希表减少重复计算，降低时间复杂度
 * 
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
  const MOD = 1000000007;
  let maxVal = 0;
  for (const val of deliciousness) {
    maxVal = Math.max(maxVal, val);
  }
  // 最大值的二倍是干啥的
  const maxSum = maxVal * 2;
  let pairs = 0;
  const map = new Map();
  const n = deliciousness.length;
  // 遍历所有菜
  for (let i = 0; i < n; i++) {
    const val = deliciousness[i];
    // 每次左移2的方
    for (let sum = 1; sum <= maxSum; sum <<= 1) {
        // 2的sum次方减去当前值,从map里面找找有没有
      const count = map.get(sum - val) || 0;
      pairs = (pairs + count) % MOD;
    }
    map.set(val, (map.get(val) || 0) + 1);
  }
  return pairs;
};
