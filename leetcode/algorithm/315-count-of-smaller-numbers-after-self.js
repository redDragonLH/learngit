/**
 * 315. 计算右侧小于当前元素的个数
 * 
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
 */

/**
 * 暴力法,超时~~~
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let len = nums.length
    let arr = Array(len).fill(0);
    for (let i = len-1; i >=0 ; i--) {
        let lin = nums[i];
        for (let j = i+1; j < len; j++) {
            if(lin > nums[j]){
                arr[i]++;
            }
            
        }
        
    }
    return arr;
};

/**
 * 官方题解 离散化树状数组
 * 
 * 树状数组： 一种可以动态维护序列前缀和的数据结构
 * 功能：
 *      * 单点更新：把序列i位置的数加上一个值 v，在该题中 v = 1。
 *      * 区间查询：查询序列[1...i]区间的区间和即i位置的前缀和
 * 修改和查询的时间代价都是O(log n)，其中n为需要维护前缀和的序列的长度
 * 
 * 
 */