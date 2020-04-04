/**
 * 42. 接雨水
 * 
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */

/**
 * 零 肯定忽略
 * 
 * 有一个 栈 存放当前 高度数组
 * 一个栈存放高度
 * 等于 计算并推出
 * 小于 计算并推入
 * 大于 循环并推出
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let num = 0;
    let linshi = 0;
    let flag = []; // 循环当前 左侧最高高度
    let width = [];
    for (var i = 0; i < height.length; i++) {
        if( flag == []) {
            flag.unshift(height[i])
            width.unshift(i);
            continue;
        }
        if(height[i] === 0)  continue;
        if(height[i] === flag[0]) {
            let fist = flag[0];
            num += fist * (i - width[0])
        }
    }
    
    return num
};
let nums = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(nums));

