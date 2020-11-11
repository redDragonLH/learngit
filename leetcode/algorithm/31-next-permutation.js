/**
 * 31. 下一个排列
 * 
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须原地修改，只允许使用额外常数空间。
 */

/**
 * 保存循环到的最小的数,有问题是和其他更小的数互换
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 不仅有大小,还有位置要求
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    if(!len) return nums;
    for (let i = len-2; i >-1 ; i--) {
        if(nums[i]<nums[i+1]) {

            let minPos = getNumber(nums,i+1,i,len);
            let temp = nums[i];
            nums[i] = nums[minPos]
            nums[minPos] = temp;
            for (let j = i+1; j < len; j++) {
                let min = j;
                for (let k = j; k < len; k++) {
                    min = nums[min]> nums[k] ? k:min;
                    
                }
                let t= nums[j]
                nums[j] = nums[min]
                nums[min] = t;
            }
            return nums;
        }
        
    }
    return nums.reverse();
};
const getNumber =(arr,i,target,len)=> {
    let min = i;
    for (let j = i; j < len; j++) {
            if(arr[j]>arr[target]){
                min= arr[min] > arr[j]?j:min
                
            }
        
    }
    return min;
}

/**
 * 效率垫底版,太多地方可以优化, 循环用的过多
 * 
 * 执行用时：132 ms, 在所有 JavaScript 提交中击败了6.05%的用户
 * 内存消耗：43 MB, 在所有 JavaScript 提交中击败了5.46%的用户
 */

/**
 * 官方题解 java
 * 
class Solution {
    public void nextPermutation(int[] nums) {
        int i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        if (i >= 0) {
            int j = nums.length - 1;
            while (j >= 0 && nums[i] >= nums[j]) {
                j--;
            }
            swap(nums, i, j);
        }
        reverse(nums, i + 1);
    }

    public void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public void reverse(int[] nums, int start) {
        int left = start, right = nums.length - 1;
        while (left < right) {
            swap(nums, left, right);
            left++;
            right--;
        }
    }
}
 */