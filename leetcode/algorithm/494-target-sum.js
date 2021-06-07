/**
 * 494. 目标和
 *
 * 给你一个整数数组 nums 和一个整数 target 。
 * 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
 *  * 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
 * 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
 *
 * 脑子有点生锈了
 */

/**
 * 回溯法,暴力轮训
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;
  let len = nums.length;

  const deep = (nums, index, sum) => {
    if (index === len - 1) {
      if (sum === target) {
        count++;
      }
    } else {
      deep(nums, index + 1, sum + nums[index + 1]);
      deep(nums, index + 1, sum - nums[index + 1]);
    }
  };
  deep(nums, -1, 0);
  return count;
};

/**
 * 考虑一下动态规划怎么做
 * 
 * 应该是从头循环,但是这次是获取有多少条,那当前状态就不能是当前的sum,或者不能只是sum,
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function (nums, target) {}