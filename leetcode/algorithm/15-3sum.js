/**
 * 15. 三数之和
 * 
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 */

 /**
  * 基本成功，但是缺少一个最后的二维数组的过滤功能,不对，应该不需要过滤，第一个循环我做了过滤
  * 还是得需要，后期没有办法辨别对象内数组元素的位置,感觉再来一个嵌套循环就超时了～～～
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let obj = {};
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let h =  nums[i] + nums[j]
            obj[h] ? !isEqual && (obj[h].push([i,j])) : obj[h] =[[i,j]];
        }
        
    }
    for (let i = 0; i < nums.length; i++) {
        if(obj[-(nums[i])]) {
            obj[-nums[i]].forEach(e=> {
                e.indexOf(i) === -1 && e.push(i)
                arr.push(e)
            })
        }
    }
    return arr;
};
const isEqual= (arr,compare) => {
    if(arr.length !== compare.length) return false;
    for (let i = 0; i < arr.length; i++) {
        if(compare.indexof(arr[i]) === -1)return false
    }
    return true;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// threeSum([-1, 0, 1, 2, -1, -4]);

/**
 * 第三方题解
 */
var threeSum = function (nums) {
    let res = []
    let length = nums.length;
    nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
    if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
      for (let i = 0; i < length - 2;) {
        if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
        let first = i + 1
        let last = length - 1
        do {
          if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
          let result = nums[i] + nums[first] + nums[last]
          if (result === 0) { // 如果可以组队
            res.push([nums[i], nums[first], nums[last]])
          }
          if (result <= 0 ) { // 实力太弱，把菜鸟那边右移一位
            while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
          } else { // 实力太强，把大神那边右移一位
            while (first < last && nums[last] === nums[--last]) {}
          }
        } while (first < last)
        while (nums[i] === nums[++i]) {}
      }
    }
    return res
  }

/**
 * 官方题解  排序 + 双指针
 * 
 * 
 */