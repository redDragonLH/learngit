/**
 * 213. 打家劫舍 II
 *
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，
 * 这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 *
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。
 */

/**
 * 超~SB方案,
 * 果然,估计还是的动态规划
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let maxArrr = [0, 0];
  let len = nums.length;
  if (!len) return 0;
  if (len === 1) return nums[0];
  nums.forEach((e, i) => {
    if (i % 2) {
      maxArrr[1] += e;
    } else {
      if (i !== len - 1) {
        maxArrr[0] += e;
      }
    }
  });
  return Math.max(...maxArrr);
};

/**
 * 此题中的难点在于房间是环状排列,意味着第一个房子和最后一个房子只能选一个,但是这样也可以转为两个单排排列房子的问题
 *
 * 动态规划思路
 *  把多阶段过程转化为一系列单阶段问题,逐个求解
 * 1. 定义数组含义~~也就是数组内数据是什么
 *      数组应该是当前元素最多能拿到的钱
 * 2. 找出数组元素之间的关系式
 *
 * 3. 找出初始值
 *
 * 动态规划重步推,一步一步推导,忌急. 核心就是以前面的数据求取当前的结果
 */

var rob = function (nums) {
  const length = nums.length;
  if (length === 1) {
    return nums[0];
  } else if (length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  // 两个单排分别处理数据,然后对比
  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};

const robRange = (nums, start, end) => {
    // 优化数组为两个变量
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1]);
    // 直接越过first和second 进行循环,
  for (let i = start + 2; i <= end; i++) {
      // 内部的步骤基本逻辑和正常的数组方案是一样的
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};
