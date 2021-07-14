/**
 * 1818. 绝对差值和
 *
 * 给你两个正整数数组 nums1 和 nums2 ，数组的长度都是 n 。
 *
 * 数组 nums1 和 nums2 的 绝对差值和 定义为所有 |nums1[i] - nums2[i]|（0 <= i < n）的 总和（下标从 0 开始）。
 *
 * 你可以选用 nums1 中的 任意一个 元素来替换 nums1 中的 至多 一个元素，以 最小化 绝对差值和。
 *
 * 在替换数组 nums1 中最多一个元素 之后 ，返回最小绝对差值和。因为答案可能很大，所以需要对 10^9 + 7 取余 后返回。
 *
 * |x| 定义为：
 *
 *  * 如果 x >= 0 ，值为 x ，或者
 *  * 如果 x <= 0 ，值为 -x
 */

/**
 *
 * 替换的话应该是找到绝对值最大的位置,替换元素让当前位置的绝对值最小
 *
 * 寻找绝对值最大位置不对,应该找替换后差距最大的位置,~~那遍历逻辑可就是 n^2了
 *
 * n^2的遍历时间太长了,无法接受
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
  let maxData = [0 /* max value */, 0 /* max value index */];
  let result = 0;
  // 查找问题位置
  // 应该可以先把其他的绝对差值和缓存下来
  nums1.forEach((e, i) => {
    if (maxData[0] < Math.abs(e - nums2[i])) {
      result += maxData[0];
      maxData[0] = Math.abs(e - nums2[i]);
      maxData[1] = i;
    } else {
      result += Math.abs(e - nums2[i]);
    }
  });
  if (!maxData[0]) return 0;
  // nums2 数据不能动,轮训nums1获取最小的值
  let min = Number.MAX_SAFE_INTEGER;
  nums1.forEach((e) => {
    if (Math.abs(nums2[maxData[1]] - e) < min) {
      min = Math.abs(nums2[maxData[1]] - e);
    }
  });
  //   console.log(min,result);
  return ((min + result) % 1e9) + 7;
};
console.log(minAbsoluteSumDiff([1, 7, 5], [2, 3, 5]));
console.log(minAbsoluteSumDiff([1, 7, 5], [1, 7, 5]));
console.log(minAbsoluteSumDiff([1, 10, 4, 4, 2, 7], [9, 3, 5, 1, 7, 4]));

/**
 * 官方题解
 *   要寻找 |nums1[i] - nums[2]| - |nums[j] - nums2[i]| 最大的值,而不是|nums1[i] - numsj[i]|,最大的值. 那么 nums1[j] 就必须尽可能的靠近nums2[i]
 * 如果简单轮训也可以找到 j,但是最坏情况下需要 n^2的时间才能找到 nums1[j],那么其实可以先排序然后使用二分法查找最近的数,这样就把时间优化了很多
 *
 * 因为是找到差值,所以就算查找 j 时是乱序的也无所谓,,但是计算差值和时不行,所以需要一个辅助数组
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
  const MOD = 1000000007;
  const n = nums1.length;
  // rec 辅助数组,在这里排序,不影响原始数据
  const rec = [...nums1];
  rec.sort((a, b) => a - b);
  let sum = 0,
    maxn = 0;
  for (let i = 0; i < n; i++) {
    // 计算原版i位置差值
    const diff = Math.abs(nums1[i] - nums2[i]);
    // 计算到当前位置的正常的差值和
    sum = (sum + diff) % MOD;
    // 查找与nums2[i] 最接近的值,注意要查找两次,左右各一次,对比最接近的
    const j = binarySearch(rec, nums2[i]);
    // 没有溢出的话
    if (j < n) {
      // 获取原差值数据与最新差值的差,也就是当前位置能减少的最大的值
      maxn = Math.max(maxn, diff - (rec[j] - nums2[i]));
    }
    if (j > 0) {
      // 查找两次太慢么,直接在这-1
      maxn = Math.max(maxn, diff - (nums2[i] - rec[j - 1]));
    }
  }
  // 为啥还要加,不会爆么,不会爆取余干啥
  return (sum - maxn + MOD) % MOD;
};

const binarySearch = (rec, target) => {
  let low = 0,
    high = rec.length - 1;
  if (rec[high] < target) {
    return high + 1;
  }
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low;
    if (rec[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};
