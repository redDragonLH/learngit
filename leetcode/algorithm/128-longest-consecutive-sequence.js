/**
 * 128
 * 给定一个未排序的整数数组，找出最长连续序列的长度。
 * 要求算法的时间复杂度为 O(n)。
 */
/**
 * 哈希表法
 * 
 * 思路 ：枚举数组中的每个数X,考虑 以其为起点不断尝试匹配 x+ 1,x+2...是否存在，
 * 假设最长匹配到了 x+y，那么以 x 为起点的最长连续序列即为 x, x+1, x+2,⋯,x+y，其长度为 y+1，我们不断枚举并更新答案即可
 *      这种思路的算法时间复杂度最坏的情况还是会打到O(n^2)(即外层需要枚举O(n)个数，内层需要暴力匹配)
 * 执行了很多不必要的枚举，如果已知有一个 x,x+1,x+2...,x+y的连续序列，我们却重新从 x+1, x+2,或者 x + y，处开始尝试匹配
 * 
 * 由于我们要枚举的数 xx 一定是在数组中不存在前驱数 x-1x−1 的，不然按照上面的分析我们会从 x-1x−1 开始尝试匹配，因此我们每次在哈希表中检查是否存在 x-1x−1 即能判断是否需要跳过了。
 * 
 * 
 */
/**
 * JAVA 代码
 * 
 * class Solution {
 *      public int longestConsecutive(int[] nums) {
 *          Set<Integer> num_set = new HashSet<Integer>();
 *          for (int num :nums) {
 *              num_set.add(num);
 *          }
 * 
 *          int longsetStreak = 0;
 * 
 *          for(int num:num_set) {
 *              if(!num_set.contains(num - 1)) {
 *                  int currentNum = num;
 *                  int currentStreak = 1;
 * 
 *                  while(num_set.contains(currentNum + 1)) {
 *                      currentNum += 1;
 *                      currentStreak += 1;
 *                  }
 *                  longestStreak = Math.max(longestStreak,currentStreak);
 *              }
 *          }
 *          return longsetStreak
 *      }
 * 
 * }
 * 
 */
/**
 * 这种问题的思路
 * 
 * 从未排序的数组找到连续的元素的长度，或者相似的问题
 * 
 * 这种问题在于一般不会让你排序，但是可以使用对象等结构让元素的值成为键名，然后再按照问题的需求即检索数据
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const len = nums.length
    if(!len) return 0;
    const num_set = new Set(nums);
    let longestCount = 0;
    let longestNumber = 0;
    let lastCount = 1;
    for (let i = 0; i < len; i++) {
        if(!num_set.has(nums[i] -1)) {
            longestCount++;
            longestNumber = nums[i];
            while (num_set.has(longestNumber + 1)) {
                longestCount++;
                longestNumber = longestNumber + 1;
            }
            
            lastCount = Math.max(lastCount,longestCount)
            longestCount = 0
        }
    }
    return lastCount;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
