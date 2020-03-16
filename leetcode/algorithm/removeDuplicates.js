/**
 * 题目：
 * 定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 
 * 例子：
 * 
 * 给定数组 nums = [1,1,2], 
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 * 你不需要考虑数组中超出新长度后面的元素。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 /**
  * 快慢针方案
  * 快针循环，
  * 慢针定位
  * 快针插入慢针位置
  */
 let fast = 1;
 let slow = 0;
 for (; fast < nums.length; fast++) {
  /**
   * 
   */
  if (nums[fast] != nums[slow]) {
   nums[++slow] = nums[fast];
  }
  
 }
 return ++slow
};
/**
 * 时间复杂度：O(n)，假设数组的长度是 n，那么 i 和 j 分别最多遍历 n 步。
 * 空间复杂度：O(1)。
 */
removeDuplicates([1,1,2,3,3])

/**
 * java 代码，逻辑同上
 * 
 * public int removeDuplicates(int[] nums) {
 *   if (nums.length == 0) return 0;
 *   int i = 0;
 *   for (int j = 1; j < nums.length; j++) {
 *       if (nums[j] != nums[i]) {
 *           i++;
 *           nums[i] = nums[j];
 *       }
 *   }
 *   return i + 1;
 * }
 * 
 */
