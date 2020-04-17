/**
 * 55. 跳跃游戏
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 */

 /**
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
 * 时间复杂度 O(n) 最大循环不超过数组长度
 * 空间复杂度 O(n) 有一个对象保存是否遍历过元素
 */