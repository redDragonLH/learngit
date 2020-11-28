/**
 * 493. 翻转对
 * 
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
 * 你需要返回给定数组中的重要翻转对的数量。
 */

/**
 * 超时
 * 
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let result = 0;
    let num = nums.length;
    const double = nums.map(a=>a*2);
    for (let i = 0; i < num; i++) {
        for (let j = i+1; j < num; j++) {
            if(nums[i]>double[j]) result+=1
        }
    }
    return result;
};

console.log(reversePairs([1,3,2,3,1]));

/**
 * 官方题解 归并排序
 * 
 * 归并排序：先对少数几个元素通过两两合并的方式进行排序，形成一个长度稍大一些的有序序列。然后在此基础上，对两个长度稍大一些的有序序列再进行两两合并，形成一个长度更大的有序序列，有序序列的的长度不断增长，直到覆盖整个数组的大小为止，归并排序就完成了。
 */