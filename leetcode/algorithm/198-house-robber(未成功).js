
/**
 * 198. 打家劫舍
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 */
/**
 * // 动态规划(堆叠关系)
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let flag = 0;
  let count = 0;
  while(flag < nums.length) {
    console.log(flag,nums[flag] );
    
    if(nums[flag] + (nums[flag+2] || 0) < (nums[flag+1] || 0) + (nums[flag+3] || 0)) {
      count= count + (nums[flag+1] || 0) + (nums[flag+3] || 0);
      flag+=5
    }else {
      count =count + nums[flag] + (nums[flag+ 2] || 0)
      flag+=4
    }
  }
  return count;
};
let nums = [4,1,2,7,5,3,1];
console.log(7(nums));
