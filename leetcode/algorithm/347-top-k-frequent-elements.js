/**
 * 347. 前 K 个高频元素
 * 
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 
 * 提示：
 *      你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 *      你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 *      题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
 *      你可以按任意顺序返回答案。
 */

/**
 * 暴力处理
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if(!nums.length) return [];
    let result = new Array();
    let object ={};
    let objectArr = []
    for (let i = 0; i < nums.length; i++) {
        if(object[nums[i]] || object[nums[i]]>-1) {
            object[nums[i]]+=1;
        }else {
            object[nums[i]] = 1;
        }
    }
    for(var i in object){
        objectArr.push({key: i,value:object[i]});
    }
    objectArr.sort((a, b) =>{
        if (a.value > b.value ) {           // 按某种排序标准进行比较, a 小于 b
          return -1;
        }
        if (a.value < b.value ) {
          return 1;
        }
        // a must be equal to b
        return 0;
      })
      for (let i = 0; i < k; i++) {
          result.push(Number(objectArr[i].key));
      }
    return result;

};
console.log(topKFrequent([3,0,1,0],1));
// console.log(topKFrequent([3,0,1,0],1));
/**
 * 这还能击败一半的人
 * 
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了57.63%的用户
 * 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了35.42%的用户
 */

/**
 * 正确思路应该是顶堆,使用大顶堆维护频率最高的k个数
 * 
 * 实现一下大顶堆
 * 
 */
class Heap{
    heap = [0];
    insert(value) {
    }
}