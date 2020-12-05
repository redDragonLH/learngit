/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * 
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 进阶：
 * 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 */

/**
 * 暴力破解
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = false;
    let len = nums.length;
    const result = []
    if(!len) return [-1,-1]

    nums.forEach((a,i)=> {
        if(a=== target && !first) {
            result[0]=i;
            result[1]=i;
            first=true;
        }else if(a=== target && first){
            result[1]=i;
        }
    })
    return first?result:[-1,-1]

};
/**
 * 暴力破解还是这个速度~~~你们都干了些什么
 * 
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了99.25%
 * 的用户内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了21.81%的用户
 */

/**
 * 二分法应该是更好的解决办法
 */
var searchRange = function(nums, target) {
    const len = nums.length;
    if(!len) return [-1,-1];

    let left=0,right=len-1; // 
    let result = [-1,-1];
    let mid = 0;
    while(left<=right) {
        mid = Math.ceil((right+left)/2);
        // 只做一件事
        if(nums[mid]<target){
            left = mid+1
        }else if(nums[mid] > target){
            right = mid-1
        }else{
            break;
        }
    }
    if(nums[mid] !==  target) return result;
    left = right = mid;
    while(result[0]===-1 || result[1]===-1) {
        if(nums[left-1] === target){
            left--;
        }else {
            result[0] = left;
        }
        if(nums[right+1] === target){
            right++;
        }else {
            result[1]=right
        }
    }
    return result;
}

/**
 * 我写的二分问题还挺大
 * 
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了45.78%的用户
 * 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了42.23%的用户
 */