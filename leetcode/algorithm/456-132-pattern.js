/**
 * 456. 132模式
 *
 * 给定一个整数序列：a1, a2, ..., an，一个132模式的子序列 ai, aj, ak 被定义为：当 i < j < k 时，ai < ak < aj。设计一个算法，当给定有 n 个数字的序列时，验证这个序列中是否含有132模式的子序列。
 * 注意：n 的值小于15000。
 *
 */

/**
 * 132模式,可以进行三遍循环
 *
 * 最二的解法,超出时间限制
 *
 * 前缀和应该可以解决这个问题把,前缀和有个问题,顺序变了
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let len = nums.length;
  for (let k = len; k >= 0; k--) {
    for (let j = k - 1; j >= 0; j--) {
      if (nums[j] > nums[k]) {
        for (let i = j - 1; i >= 0; i--) {
          if (nums[k] > nums[i] && nums[i] < nums[j]) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

/**
 * 官方题解 枚举
 */
var find132pattern = function (nums) {
  const n = nums.length;
  const candidateI = [nums[0]],
    candidateJ = [nums[0]];

  for (let k = 1; k < n; ++k) {
    const idxI = binarySearchFirst(candidateI, nums[k]);
    const idxJ = binarySearchLast(candidateJ, nums[k]);
    if (idxI >= 0 && idxJ >= 0) {
      if (idxI <= idxJ) {
        return true;
      }
    }

    if (nums[k] < candidateI[candidateI.length - 1]) {
      candidateI.push(nums[k]);
      candidateJ.push(nums[k]);
    } else if (nums[k] > candidateJ[candidateJ.length - 1]) {
      const lastI = candidateI[candidateI.length - 1];
      while (candidateJ.length && nums[k] > candidateJ[candidateJ.length - 1]) {
        candidateI.pop();
        candidateJ.pop();
      }
      candidateI.push(lastI);
      candidateJ.push(nums[k]);
    }
  }

  return false;
};

const binarySearchFirst = (candidate, target) => {
  let low = 0,
    high = candidate.length - 1;
  if (candidate[high] >= target) {
    return -1;
  }
  while (low < high) {
    const mid = Math.floor((high - low) / 2) + low;
    const num = candidate[mid];
    if (num >= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

const binarySearchLast = (candidate, target) => {
  let low = 0,
    high = candidate.length - 1;
  if (candidate[low] <= target) {
    return -1;
  }
  while (low < high) {
    const mid = Math.floor((high - low + 1) / 2) + low;
    const num = candidate[mid];
    if (num <= target) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }
  return low;
};

/**
 * 第三方优秀题解
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  const len = nums.length;
  if (len < 3) return false;
  const mins = new Array(len);
  mins[0] = nums[0];
  for (let i = 1; i < len; i++) {
    mins[i] = Math.min(mins[i - 1], nums[i]);
  }
  const stack = [];
  for (let i = len - 1; i > 0; i--) {
    if (nums[i] > mins[i]) {
      while (stack.length > 0 && stack[stack.length - 1] <= mins[i])
        stack.pop();
      if (stack.length > 0 && stack[stack.length - 1] < nums[i]) return true;
      stack.push(nums[i]);
    }
  }
  return false;
};
