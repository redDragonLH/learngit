/**
 * 16. 最接近的三数之和
 * 
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
 * 找出 nums 中的三个整数，使得它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 * 提示：
 * 3 <= nums.length <= 10^3
 * -10^3 <= nums[i] <= 10^3
 * -10^4 <= target <= 10^4
 */

/**
 * 排序加 双指针法
 * 
 * 三重循环肯定是不可以的~~
 * 
 * 基本就是前缀和的变种，先枚举一个元素，然后使用两重循环来枚举所有的可能情况，这样。要考虑对整个数组进行升序排序
 * 
 * * 假设数组的长度为 n ，先枚举 a ，它在数组中的位置为i;
 * * 为了防止重复枚举，我们在位置[i + 1, n]的范围内枚举b 和 c；
 * 
 * 在有序的数组范围内，知道了b和c的可以枚举的下标范围，可以对过程进行一定优化
 * 
 * 借助双指针，就可以对枚举的过程进行优化。用 p1和p2分别表示指向 b 和c 的指针，初始时，p1指向位置i+1,即左边界;p2 指向位置n-1,
 * 即右边界，在每一步枚举的过程中，我们用 a + b + c来更新答案
 * 
 * 如果 a+b+c ≥ target，那么就将 p1 向左移动一个位置；
 * 如果 a+b+c < target，那么就将 p2 向右移动一个位置。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a - b);

    let len = nums.length,best = 10000000;
    for (let i = 0; i < len; i++) {
        if(i > 0 && nums[i] == nums[i - 1]) continue;

        let j = i + 1,k = len - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if(sum == target) return target;
            
            if(Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum;
            }
            if(sum > target) {
                let k0 = k - 1;
                while (j < k0 && nums[k0] == nums[k]) {
                    --k0;
                }
                k = k0;
            } else {
                let j0 = j + 1;
                while (j0 < k && nums[j0] == nums[j]) {
                    ++j0;
                }
                j = j0;
            }
        }
    }
    return best;
};

console.log(threeSumClosest([-1,2,1,-4],1));

/**
 * java 代码
 * 
 * class Solution {
 *      public int threeSumClosest(int[] nums,int target) {
 *          Array.soft(nums);
 *          int n = nums.length;
 *          int best = 10000000;
 * 
 *          // 枚举 a
 *          for(int i = 0; i < n; ++i) {
 *              // 保证和上一次枚举的元素不相等
 *              if(i > 0 && nums[i] == nums[i - 1]){
 *                  continue;
 *              }
 *              // 使用双指针枚举b 和 c
 *              int j = i + 1, k = n - 1;
 *              while (j < k) {
 *                  int sum = nums[i] + nums[j] + nums[k];
 *                  // 如果和为target 直接返回答案
 *                  if(sum == target) {
 *                      return target;
 *                  }
 *                  // 根据差值的绝对值来更新答案
 *                  if(Math.abs(sum - target) < Math.abs(best - target)) {
 *                      best = sum;
 *                  }
 *                  if(sum > target) {
 *                      // 如果和大于  target ，移动 c 对应的指针
 *                      int k0 = k - 1;
 *                      // 移动到下一个不相等的元素
 *                      while(j < k0 && nums[k0] == nums[k]) {
 *                          --k0;
 *                      }
 *                  } else {
 *                      // 如果和小于 target ，移动 b 对应的指针
 *                      int j0 = j+1;
 *                      // 移动到下一个不相等的元素
 *                      while (j0 < k && nums[j0] == nums[j]) {
 *                          ++j0;
 *                      }
 *                      j = j0;
 *                  }
 *              }
 *              return best;
 *          }
 *      }
 * }
 */