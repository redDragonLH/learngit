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
