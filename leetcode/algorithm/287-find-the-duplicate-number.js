/**
 * 287. 寻找重复数
 * 
 * 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
 * 
 * 说明：
 *
 * 不能更改原数组（假设数组是只读的）。
 * 只能使用额外的 O(1) 的空间。
 * 时间复杂度小于 O(n2) 。
 * 数组中只有一个重复的数字，但它可能不止重复出现一次。
 */

 /**
  * hash 表肯定是最简单的，但是不符合要求，
  * 异或吗，双循环么～～～
 * @param {number[]} nums
 * @return {number}
 * 
 * 失败～～
 */
// var findDuplicate = function(nums) {
//     let test = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         test = test^nums[i]
        
//     }
//     console.log(test);
    
// };
// findDuplicate([1,3,4,2,2])

/**
 * 二分法
 * 
 * 二分法在此苛刻条件下可以用来判断多余数字的位置，
 * 根据抽屉原理，当数组从中位数分成两份时，肯定有一份是要比正常情况多一个或多个数据的
 * 
 * 抽屉原理：是个苹果放到九个抽屉，肯定至少会有一个抽屉的苹果数多于1个
 */

var findDuplicate = function(nums) {
    const n = nums.length;
    let l = 1, r = n - 1, ans = -1;
    while (l <= r) {
        let mid = (l + r) >> 1; // 右移一位则为当前数字除于2，左移一位则为当前数字乘2，皆为向下取整
        let cnt = 0;
        for (let i = 0; i < n; ++i) {
            cnt += nums[i] <= mid;
        }
        if (cnt <= mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
            ans = mid;
        }
    }
    return ans;
};
/**
 * 二分法java 代码
 * 
 * 
 */
/**
 public class Solution {
    public int findDuplicate(int[] nums) {
        int len = nums.length;
        int left = 1;
        int right = len - 1;
        while (left < right) {
            // 在 Java 里可以这么用，当 left + right 溢出的时候，无符号右移保证结果依然正确
            int mid = (left + right + 1) >>> 1;

            int cnt = 0;
            for (int num : nums) {
                if (num < mid) {
                    cnt += 1;
                }
            }

            // 根据抽屉原理，严格小于 4 的数的个数如果大于等于 4 个，
            // 此时重复元素一定出现在 [1, 3] 区间里

            if (cnt >= mid) {
                // 重复的元素一定出现在 [left, mid - 1] 区间里
                right = mid - 1;
            } else {
                // if 分析正确了以后，else 搜索的区间就是 if 的反面
                // [mid, right]
                // 注意：此时需要调整中位数的取法为上取整
                left = mid;
            }
        }
        return left;
    }
}
 */



/**
 * 快慢针 方法
 * 
 * Floyd 判圈算法：检测链表是否有环的算法
 * 
 * 不是很理解～～
 */
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    slow = 0;
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};