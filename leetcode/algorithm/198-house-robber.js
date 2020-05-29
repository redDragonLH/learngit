
/**
 * 198. 打家劫舍
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 */
/**
 * // 动态规划(堆叠关系)
 * 动态规划转移方程
 * @param {number[]} nums
 * @return {number}
 * 
 * 房屋大于两件的情况下，有两个选项
 * 
 * 1. 偷窃第 k 间房屋，那么就不能偷窃第 k - 1 间房屋，偷窃总金额为前 k -2 间房屋的最高总金额与第k间房屋的金额之和
 * 2. 不偷窃第 k 间房屋，偷窃总金额为前 k - 1 间房屋的最高总金额
 * 
 * 在两个选项中选择偷窃总金额较大的选项，该选项对应的偷窃总金额即为前 k 间房屋能偷窃到的最高总金额
 * 
 * 用 dp[i]表示前 i 间房屋能偷窃到的最高总金额，那么就有如下的状态转移方程
 * 
 * dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
 * 
 * 边界条件为 dp[0] = nums[o] 只有一间房屋，dp[1] = max(nums[0],nums[1]) 只有两件房屋，选择其中金额较高的房屋
 */
var rob = function(nums) {
  if(nums === null || nums.length == 0) {
    return 0;
  }
  let len = nums.length;
  if(len === 1 ) return nums[0];
  let first = nums[0],second = Math.max(nums[0],nums[1]);
  for (let i = 2; i < len; i++) {
    let temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};
/**
 * 动态规划
 */
let nums = [4,1,2,7,5,3,1];
console.log(7(nums));
