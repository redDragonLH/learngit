/**
 * 930. 和相同的二元子数组
 *
 * 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
 *
 * 子数组 是数组的一段连续部分。
 */

/**
 * 遍历可以解决.但是容易超时
 *
 * 哈希表:
 *  假设原数组的前缀和数组为 sum,且子数组(i,j] 的区间和为 goal,那么 sum[j] - sum[i] = goal. 因此可以枚举j,每次查询满足该等式的i的数量
 *
 *  具体: 用哈希表记录每一种前缀和出现的次数,假设当前枚举到元素  nums[j], 我们只需要查询哈希表中元素 sum[j] - goal的数量即可.
 * 这些元素的数量对应了以当前 j 值为右边界的满足条件的子数组的数量
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 * 
 * 代码为java 转 JavaScript
 */
var numSubarraysWithSum = function (nums, goal) {
    // sum 为当前元素为止的前缀和
  let sum = 0;
  const map = new Map();
  let result = 0;

  for (const num of nums) {
    // 给当前前缀和的值插入到哈希表,如果已有就+1
    map.set(sum, (map.get(sum) || 0) + 1);
    // set和 前缀和累加代码 位置交换,营造了前缀和的场景,就不需要 用for 循环 i-1 啥的 *
    sum += num;
    // 当前前缀和 - 需要判断的和 的值 ...
    result += map.get(sum - goal) || 0;
  }
  return result;
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：45.1 MB, 在所有 JavaScript 提交中击败了18.18%的用户
 */