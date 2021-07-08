/**
 * 930. 和相同的二元子数组
 *
 * 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
 *
 * 子数组 是数组的一段连续部分。
 */


/**
 * 官方题解: 滑动窗口
 * 
 * 对于 JS的哈希表方法中的每一个 j, 满足  sum[j] - sum[i] = goal 的i总是落在一个连续的区间中,i值取区间中每一个数都满足条件.
 * 并且随j右移,其对应的区间的左右端点也将右移
 * 
 *  具体步骤: 令滑动窗口右边界为right,使用两个左边界 left1 和 left2 表示左区间[left1, left2),此时有 left2 - left1 个区间满足条件
 */
 class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        int n = nums.length;
        int left1 = 0, left2 = 0, right = 0;
        int sum1 = 0, sum2 = 0;
        int ret = 0;
        while (right < n) {
            sum1 += nums[right];
            while (left1 <= right && sum1 > goal) {
                sum1 -= nums[left1];
                left1++;
            }
            sum2 += nums[right];
            while (left2 <= right && sum2 >= goal) {
                sum2 -= nums[left2];
                left2++;
            }
            ret += left2 - left1;
            right++;
        }
        return ret;
    }
}