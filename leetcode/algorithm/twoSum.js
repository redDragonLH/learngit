/**
 * 二树之和
 * 
 * 题目：
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 */

 /**
 * 我的提交 1
 * 
 * 使用 对象进行散列表比对，使用目标数减去当前选中的元素获取的就是选中元素的另一半，把求得的数放入对象，作为散列表的键。
 * 重新循环并检查是否有数字能否匹配上 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, tar) {
 let obj = {};
 let count = nums.length;
 for (let i = 0; i < count; i++) {
  let num = nums[i];
  obj[tar-num] = i;
 }
 for (let i = 0; i < count; i++) {
  let obji = nums[i].toString()
  // console.log(obj,obj[obji],i)
  if(i === obj[obji]) continue;
  if(obj[obji]){
   return obj[obji]	>i? [i,obj[obji]]:[obj[obji],i];
  }
 }
};
/**
 *  提交 2
 * 
 * 可以考虑使用一次循环边插入散列边匹配
 * 
 */
var twoSum2 = function(nums, tar) {
 let obj = {};
 let count = nums.length;
 for (let i = 0; i < count; i++) {
  let num = nums[i];
  if(i === obj[num]) continue;
  if(obj[num] === 0 || obj[num]){
   return [obj[num],i];
  }
  obj[tar-num] = i;
 }
};
// console.log(twoSum2([3,3],6));

/**
 * 其他思路 1
 * 
 * 一次循环边插入边匹配，但是数据结构改为数组
 * 
 * 优点：判断只需要判断是否为 undefind与位置是否相等
 * 
 * 其他思路 2 
 * 
 * 思路1的逻辑，数据结构改为 map
 * 
 *  优点：只需判断 map内是否有相应数据
 * 
 * 其他思路 3
 * 
 * 使用 提交 2 的数据结构与逻辑，但是使用 对象的 in 运算符判断是否存在数据，效率最高
 * 
 * 
 */

 /**
  * 总结： API用的好，耗时就少
  * 
  *      效率： object in > array[] > map.has()
  */

  /**
   * java 代码
   * 
   * class Solution {
   *   public int[] twoSum(int[] nums, int target){
   *     Map<Integer, Integer> map = new HashMap<>();
   *     for(int i = 0;i<nums.length;i++){
   *       int complement = target-nums[i]
   *       if (map.containsKey(complement)) {
   *         return new int[] { map.get(complement), i};
   *       }
   *       map.put(nums[i], i);
   *     }
   *     throw new IllegalArgumentException("No two sum solution");
   *   }
   * }
   */