/**
 * 523. 连续的子数组和
 *
 * 给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：
 * * 子数组大小 至少为 2 ，且
 * * 子数组元素总和为 k 的倍数。
 * 如果存在，返回 true ；否则，返回 false 。
 * 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。
 */

/**
 * 使用前缀和?
 * 但是好像少不了两层循环
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let prefix = [0];
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    prefix[i] = prefix[i - 1] + nums[i - 1];
    // 双层循环肯定是不行啊,超时超的很厉害,O(N^2)的时间复杂度
    for (let j = 0; j < prefix.length - 1; j++) {
      if (!((prefix[i] + nums[i] - prefix[j]) % k)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * 官方题解
 *
 * 原理: 如果前缀和中两个元素的相减的绝对值是k的倍数,那么说明这两个元素代表的原始数据的子数组是k的倍数(前缀和构建原理反推)
 * 而如果前缀和两个元素相减的绝对值是k的倍数,那么这两个元素除于k的余数应该是一样的,所以对每个元素除于k,保存余数,然后进行判断是否有相同余数就可以判断出是否有符合条件的子数组
 */
var checkSubarraySum = function (nums, k) {
  const m = nums.length;
  if (m < 2) {
    return false;
  }
  const map = new Map();
  // 初始化
  map.set(0, -1);
  let remainder = 0;
  for (let i = 0; i < m; i++) {
    remainder = (remainder + nums[i]) % k;
    // 判断是否有一样的余数
    if (map.has(remainder)) {
      const prevIndex = map.get(remainder);
      if (i - prevIndex >= 2) {
        return true;
      }
    } else {
      // 保存此前缀和的余数
      map.set(remainder, i);
    }
  }
  return false;
};
