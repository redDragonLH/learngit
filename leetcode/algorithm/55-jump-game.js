/**
 * 55. 跳跃游戏
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 
 * 注： 0 是一个很重要的隐藏条件
 */

 /**
  * 半动态规划～～～
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 简单判断 跳跃到当前值最大步数，不为0则继续，为0则当前位置减一，计算进行跳转
 */
var canJump = function(nums) {
    let length = nums.length -1;
    if(length < 1) return true;
    let step = 0;
    let flag = 0;
    let obj = {};
    while(length > step && length >= flag ) {
        flag++
        if(length < step + nums[step] ) return true;
        step = obj[step + nums[step]] ? --step : step + nums[step];
        obj[step] = true;
        if(nums[step] === 0 && length > step){
            step--;
            obj[step] = true;

        }
    }
    
    return length <= step ? true: false;
};
let nums = [2,3,1,1,4]
// let nums = [3,2,1,0,4]
// let nums = [3,0,8,2,0,0,1]
// console.log(canJump(nums));
/**
 * 复杂度不高，操作较多，效率较低
 * 
 * 时间复杂度 O(n) 最大循环不超过数组长度，也必须循环整个数组长度的次数，
 * 空间复杂度 O(n) 有一个对象保存是否遍历过元素
 * 
 * 还以为是动态规划，结果贪心递推一下就能解决
 */

 /**
  * 官方题解：贪心算法
  * 
  * 一步一步计算最远可到达位置，如终点在最远可到达条件内，则说明可达
  * 思路：最远可以到达的位置 ，如果x可以到达y, 那么x+1，x+2，...也可达到，如果遍历到 x+n,它的位置在前一步最远可到达的位置之内，则说明可达，并更新最远可到达
  * 
  * 整理
  * 1. 最优解：怎样算是到达最后：可覆盖位置
  * 2. 子问题： 当前位置的步数是否是前一步可达的
  * 3. 一步一步算出当前是否可达或者 在可达的情况下覆盖了终点
  */
// 还是没理解，给思路，但是也写不出来这么简单的代码
  const canJumpGA = (nums) => {
      let n = nums.length;
      let rightmost = 0;
      for (let i = 0; i < n; i++) {
          if(rightmost <= i ){ // 判断当前是否在当前最远可达到位置内，
            rightmost = Math.max(rightmost,nums[i]) // 获取当前位置可到达的最远距离，不是从开头就计算的最远距离
            if (rightmost >= n - 1 ) { // 如果已经覆盖了最远距离，可直接返回 // rightmost是从当前位置开始算的吧，不一定比n 大才会成功吧
                return true
            }
          }
      }
      return false;
  }