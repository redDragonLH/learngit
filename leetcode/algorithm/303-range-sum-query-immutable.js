/**
 * 303. 区域和检索 - 数组不可变
 * 
 * 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。
 * 实现 NumArray 类：
 * NumArray(int[] nums) 使用数组 nums 初始化对象
 * int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
 */

 /**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = [...nums];
    this.length = this.nums.length;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(start, end) {
    // if(start < 0 || end > this.length) return false;
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if(!Number.isNaN(this.nums[i])) {
            sum+=this.nums[i];
        }
        
    }
    return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

/**
 * 最直觉的解法,效率不高.如果是这样的话应该还有优化,更好的解法我估计是费劲了,应该就是缓存和数据吧
 * 
 * 执行用时：256 ms, 在所有 JavaScript 提交中击败了23.58%的用户
 * 内存消耗：43.8 MB, 在所有 JavaScript 提交中击败了92.14%的用户
 */


/**
 * 第三方优秀题解
 */

/**
 * 前缀和
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    const dp = []
    // 存的时候就是前缀和,计算的时候用后面的减去前面的,就是中间的,厉害厉害
    dp[0] = nums[0]
    
    for (let i = 1; i <= nums.length - 1; i++) {
      dp[i] = dp[i - 1] + nums[i]
    }
    this.dp = dp
  };
  
  /** 
   * @param {number} i 
   * @param {number} j
   * @return {number}
   */
  NumArray.prototype.sumRange = function (i, j) {
  
    return this.dp[j] - (i == 0 ? 0 : this.dp[i - 1])
  
  };
  
  /**
   * Your NumArray object will be instantiated and called as such:
   * var obj = new NumArray(nums)
   * var param_1 = obj.sumRange(i,j)
   */