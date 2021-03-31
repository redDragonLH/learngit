/**
 * 90. 子集 II
 *
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 *
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 */

/**
 * 这玩意最大的问题就是重复数据处理
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const len = nums.length;
  const result = [];
  if (!len) return result;

  for (let i = len - 1; i > -1; i--) {
    let rlen = result.length;
    if (nums[i] === nums[i + 1]) {
      let data = rlen ? [...result[rlen - 1], nums[i]] : [nums[i]];
      result.push(data);
      continue;
    }
    for (let j = 0; j < rlen; j++) {
      result.push([...result[j], nums[i]]);
    }
    result.push([nums[i]]);
  }
  result.push([]);
  return result;
};
