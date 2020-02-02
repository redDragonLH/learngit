/**
 * No.35
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let posi = getPosi(nums, target, 0, nums.length - 1);
    return posi;
};

const getPosi = (arr,tar,start,end) => {
    let mid = parseInt((end - start) / 2) + start;
    if( start > end) return start // 如果end 小于 start 说明没有找到target 位置，start 和end 交换位置，start 就是需要插入的位置
    if(end < 0) return 0; // 小于零说明需要插入的位置是 0 // 有上一个条件，这条应该不是必须的
    if( start> arr.length -1 )return arr.length; // 超出位置说明需要插入的位置是最后
    if(arr[mid] === tar){
        return mid;
    }else if(arr[mid] > tar){
        return getPosi(arr, tar, start, mid-1);
    }else if(arr[mid] < tar) {
        return getPosi(arr, tar, mid+1, end);
    }
}

let nums = [1,3,5,6];
let target = 2;

console.log(searchInsert(nums, target));