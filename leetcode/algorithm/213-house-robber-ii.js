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
    
    let maxArrr = [0,0]
    let len = nums.length
    if(!len) return 0
    if(len === 1) return nums[0];
    nums.forEach((e,i)=>{
        if(i%2){
            maxArrr[1]+=e
        }else {
            if(i!==len-1) {
                maxArrr[0]+=e
            }
            
        }
    })
    return Math.max(...maxArrr)
};