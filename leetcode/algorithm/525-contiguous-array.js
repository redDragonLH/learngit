/**
 * 525. 连续数组
 *
 * 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
 */

/**
 * 一个比较直观的思想模型就是单点向两边获取,进行判断,但是有点坑
 *
 * 或者就是从一头获取数据,然后遇到不一样的数据就判断前边的最短数据
 * 
 * 1和0~~相同数量的最长连续子数组,那么他们的和就必须是0
 * 
 * 相同数量,且并不是必须连续的
 * 
 * 前缀和和哈希表咋啥都能干~~
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    let maxLength = 0;
    const map = new Map();
    let counter = 0;
    map.set(counter, -1);
    const n = nums.length;
    // 循环数组
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (num == 1) {
            counter++;
        } else {
            counter--;
        }
        // 如果有相同的和
        if (map.has(counter)) {
            // 之前的相等和的位置
            const prevIndex = map.get(counter);
            // 当前位置减去上一个相等的位置只是距离长度,可以等于相等的长度么
            maxLength = Math.max(maxLength, i - prevIndex);
        } else {
            map.set(counter, i);
        }
    }
    return maxLength;
};