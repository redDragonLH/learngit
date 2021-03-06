/**
 * 477. 汉明距离总和
 * 
 * 两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。
 * 计算一个数组中，任意两个数之间汉明距离的总和。
 */

/**
 * 简单的逻辑就是双循环，把数据都过滤一遍，最简单暴力
 * 
 * 不知道前缀能不能优化这个问题（不能）
 * 
 * 解决方案：逐位统计
 * 计算汉明距离时，考虑的是同一比特位上的值是否不同，而不同比特位之间时互不影响的
 * 那么我们可以获取每个元素的某一位上的元素，可以知道这一位上的0和1的数量
 * @param {number[]} nums
 * @return {number}
 */
 var totalHammingDistance = function(nums) {
    let ans = 0, n = nums.length;
    // 一个数字最多有30位二进制
    for (let i = 0; i < 30; ++i) {
        let c = 0;
        for (const val of nums) {
            // 获取当前为1的元素数量
            c += (val >> i) & 1;
        }
        //  计算所有数字当前位的汉明距离的公式
        ans += c * (n - c);
    }
    return ans;
};