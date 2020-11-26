/**
 * 164. 最大间距
 * 
 * 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
 * 如果数组元素个数小于 2，则返回 0。
 * 
 * 说明:
 * 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
 * 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length<2) return 0;
    nums.sort((a,b)=> a-b);
    let max=0;
    for (let i = 1; i < nums.length; i++) {
        max= Math.max(max,nums[i]-nums[i-1])
        
    }
    return max;
};
maximumGap([3,6,9,1])

/**
 * sort 一把梭~~~~~
 * 
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了97.86%的用户
 * 内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了39.13%的用户
 */

 /**
  * 官方题解 一 基数排序
  * 
  * 基数排序: 将所有待比较数值(正整数)统一为同样的数位长度,数位较短的数前面补零,然后从最低位开始,依次进行一次排序.这样从最低位排序到最高位排序完成后,数列就变成一个有序序列
  * 
  */
 var maximumGap = function(nums) {
    const n = nums.length;
    if (n < 2) {
        return 0;
    }
    let exp = 1;
    const buf = new Array(n).fill(0); // 为啥要创造这个数组
    const maxVal = Math.max(...nums); // 获取最大值

    while (maxVal >= exp) { // 处理每位数的判断
        const cnt = new Array(10).fill(0);
        // 获取当前位
        for (let i = 0; i < n; i++) {
            let digit = Math.floor(nums[i] / exp) % 10;
            // 这样写能知道哪个是哪个吗
            cnt[digit]++;
        }
        for (let i = 1; i < 10; i++) {
            // 加上前一个数据,为啥
            cnt[i] += cnt[i - 1];
        }
        for (let i = n - 1; i >= 0; i--) {
            let digit = Math.floor(nums[i] / exp) % 10;
            buf[cnt[digit] - 1] = nums[i];
            cnt[digit]--;
        }
        nums.splice(0, n, ...buf);
        exp *= 10; // 进位
    }
    
    let ret = 0;
    for (let i = 1; i < n; i++) {
        ret = Math.max(ret, nums[i] - nums[i - 1]);
    }
    return ret;
};
/**
 * 没看懂
 */